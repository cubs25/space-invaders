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
  usort($scores, fn($a, $b) => $b['score'] - $a['score']);
  $scores = array_slice($scores, 0, 3);
  file_put_contents($file, json_encode(['scores' => $scores]));
  return $scores;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = json_decode(file_get_contents('php://input'), true);
  $score    = isset($data['score'])    ? intval($data['score'])           : 0;
  $initials = isset($data['initials']) ? strtoupper(substr(preg_replace('/[^A-Z0-9]/i', '', $data['initials']), 0, 3)) : '???';

  $scores = loadScores($file);

  // Verificar si entra al top 3
  $min = count($scores) < 3 ? 0 : $scores[count($scores)-1]['score'];
  $qualifies = count($scores) < 3 || $score > $min;

  if ($qualifies) {
    $scores[] = ['score' => $score, 'initials' => $initials];
    $scores = saveScores($file, $scores);
    echo json_encode(['scores' => $scores, 'qualified' => true]);
  } else {
    echo json_encode(['scores' => $scores, 'qualified' => false]);
  }

} else {
  $scores = loadScores($file);
  echo json_encode(['scores' => $scores]);
}
?>
