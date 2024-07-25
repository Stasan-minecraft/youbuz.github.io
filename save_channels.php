<?php
require 'vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nickname = $_POST['nickname'];

    if (!empty($nickname)) {
        // Завантаження існуючого файлу або створення нового
        if (file_exists('channels.xlsx')) {
            $spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load('channels.xlsx');
        } else {
            $spreadsheet = new Spreadsheet();
        }

        $sheet = $spreadsheet->getActiveSheet();
        $highestRow = $sheet->getHighestRow();
        $nextRow = $highestRow + 1;

        $sheet->setCellValue('A' . $nextRow, $nickname);

        $writer = new Xlsx($spreadsheet);
        $writer->save('channels.xlsx');

        echo "Channel '$nickname' has been added successfully.";
    } else {
        echo "Please provide a nickname.";
    }
}
?>
