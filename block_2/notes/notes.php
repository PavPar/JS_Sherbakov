<?php
include '../php/db.php';
$res = json_encode(getMultipleRowsArr(doQuerry('SELECT * FROM notes')));
echo ($res);
?>