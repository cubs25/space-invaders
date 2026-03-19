<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { exit(0); }

$file = __DIR__ . '/record.json';

function loadScores($file) {
  if (!file_exists($file)) return [];
  $data = json_decode(file_get_contents($file), true);
  return isset($data['scores']) ? $data['scores'] : [];
}

function saveScores($file, $scores) {
  // Ordenar por score desc
  usort($scores, fn($a, $b) => $b['score'] - $a['score']);

  // Máximo 3 entradas por jugador
  $perPlayer = [];
  $filtered  = [];
  foreach ($scores as $s) {
    $key = $s['initials'];
    if (!isset($perPlayer[$key])) $perPlayer[$key] = 0;
    if ($perPlayer[$key] < 3) {
      $filtered[] = $s;
      $perPlayer[$key]++;
    }
  }

  // Top 50 global
  $filtered = array_slice($filtered, 0, 50);
  file_put_contents($file, json_encode(['scores' => $filtered]));
  return $filtered;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data     = json_decode(file_get_contents('php://input'), true);
  $score    = isset($data['score'])    ? intval($data['score']) : 0;
  $initials = isset($data['initials']) ? strtoupper(substr(preg_replace('/[^A-Z0-9]/i', '', $data['initials']), 0, 4)) : '????';

  $scores = loadScores($file);

  // Contar entradas de este jugador
  $playerEntries = array_filter($scores, fn($s) => $s['initials'] === $initials);
  $minPlayerScore = count($playerEntries) >= 3 ? min(array_column(array_values($playerEntries), 'score')) : 0;

  // Califica si tiene menos de 3 entradas o supera su peor score
  $qualifies = count($playerEntries) < 3 || $score > $minPlayerScore;

  if ($qualifies) {
    // Si ya tiene 3, quitar su peor
    if (count($playerEntries) >= 3) {
      $worstIdx = null;
      $worstScore = PHP_INT_MAX;
      foreach ($scores as $i => $s) {
        if ($s['initials'] === $initials && $s['score'] < $worstScore) {
          $worstScore = $s['score'];
          $worstIdx   = $i;
        }
      }
      if ($worstIdx !== null) array_splice($scores, $worstIdx, 1);
    }

    $scores[] = ['score' => $score, 'initials' => $initials, 'date' => date('Y-m-d')];
    $scores   = saveScores($file, $scores);
    echo json_encode(['scores' => array_slice($scores, 0, 3), 'qualified' => true]);
  } else {
    usort($scores, fn($a, $b) => $b['score'] - $a['score']);
    echo json_encode(['scores' => array_slice($scores, 0, 3), 'qualified' => false]);
  }

} else {
  $limit  = isset($_GET['limit']) ? intval($_GET['limit']) : 3;
  $scores = loadScores($file);
  echo json_encode(['scores' => array_slice($scores, 0, $limit)]);
}
?>