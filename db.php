<?php
$serverName = "your-server";
$connectionOptions = array(
    "Database" => "your-database",
    "Uid" => "your-username",
    "PWD" => "your-password"
);

$conn = sqlsrv_connect($serverName, $connectionOptions);

if ($conn === false) {
    die(print_r(sqlsrv_errors(), true));
}
?>
