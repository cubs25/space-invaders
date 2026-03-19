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
  $scores = array_slice($scores, 0, 50);
  file_put_contents($file, json_encode(['scores' => $scores]));
  return $scores;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data     = json_decode(file_get_contents('php://input'), true);
  $score    = isset($data['score'])    ? intval($data['score']) : 0;
  $initials = isset($data['initials']) ? strtoupper(substr(preg_replace('/[^A-Z0-9]/i', '', $data['initials']), 0, 4)) : '????';

  $scores = loadScores($file);
  $min    = count($scores) < 50 ? 0 : $scores[count($scores)-1]['score'];
  $qualifies = count($scores) < 50 || $score > $min;

  if ($qualifies) {
    $scores[] = ['score' => $score, 'initials' => $initials, 'date' => date('Y-m-d')];
    $scores   = saveScores($file, $scores);
    echo json_encode(['scores' => array_slice($scores, 0, 3), 'qualified' => true]);
  } else {
    echo json_encode(['scores' => array_slice($scores, 0, 3), 'qualified' => false]);
  }

} else {
  $limit  = isset($_GET['limit']) ? intval($_GET['limit']) : 3;
  $scores = loadScores($file);
  echo json_encode(['scores' => array_slice($scores, 0, $limit)]);
}
?>