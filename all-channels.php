<?php
require 'vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\IOFactory;

if (file_exists('channels.xlsx')) {
    $spreadsheet = IOFactory::load('channels.xlsx');
    $worksheet = $spreadsheet->getActiveSheet();
    $channels = [];

    foreach ($worksheet->getRowIterator() as $row) {
        $cellIterator = $row->getCellIterator();
        $cellIterator->setIterateOnlyExistingCells(false);

        $channelData = [];
        foreach ($cellIterator as $cell) {
            $channelData[] = $cell->getValue();
        }

        if (!empty($channelData[0])) {
            $channels[] = $channelData[0];
        }
    }
} else {
    $channels = [];
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All Channels - YouBuz</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>All Channels on YouBuz</h1>
    </header>
    <main>
        <section id="channels-list">
            <ul id="channels">
                <?php foreach ($channels as $channel): ?>
                    <li><a href="https://stasan-minecraft.github.io/youbuz.github.io/<?= htmlspecialchars($channel) ?>"><?= htmlspecialchars($channel) ?></a></li>
                <?php endforeach; ?>
            </ul>
        </section>
    </main>
</body>
</html>
