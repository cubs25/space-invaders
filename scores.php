<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Content-Type: application/json');

$file = __DIR__ . '/record.json';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $score = isset($data['score']) ? intval($data['score']) : 0;

    $current = 0;
    if (file_exists($file)) {
        $json = json_decode(file_get_contents($file), true);
        $current = isset($json['record']) ? intval($json['record']) : 0;
    }

    if ($score > $current) {
        file_put_contents($file, json_encode(['record' => $score]));
        echo json_encode(['record' => $score, 'new' => true]);
    } else {
        echo json_encode(['record' => $current, 'new' => false]);
    }
} else {
    if (file_exists($file)) {
        echo file_get_contents($file);
    } else {
        echo json_encode(['record' => 0]);
    }
}
?>
