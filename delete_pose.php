<?php
include "db.php";

$id = $_POST['id'];

$stmt = $conn->prepare("DELETE FROM poses WHERE id = ?");
$stmt->bind_param("i", $id);
$stmt->execute();

echo "Deleted";
?>
