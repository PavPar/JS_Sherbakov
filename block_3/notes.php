<?php
include './db.php';
$res = json_encode(getMultipleRowsArr(doQuerry('SELECT * FROM notes')));
echo ($res);
?>