<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $review = $_POST['review'];
    $rating = $_POST['rating'];

    $sql = "INSERT INTO Reviews (Name, Review, Rating) VALUES (?, ?, ?)";
    $params = array($name, $review, $rating);
    $stmt = sqlsrv_query($conn, $sql, $params);

    if ($stmt === false) {
        die(print_r(sqlsrv_errors(), true));
    }

    echo "Отзыв добавлен";
} else {
    $sql = "SELECT * FROM Reviews";
    $stmt = sqlsrv_query($conn, $sql);

    if ($stmt === false) {
        die(print_r(sqlsrv_errors(), true));
    }

    $reviews = array();
    while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
        $reviews[] = $row;
    }

    header('Content-Type: application/json');
    echo json_encode($reviews);
}
?>
