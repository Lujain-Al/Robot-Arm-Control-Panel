<?php
include "db.php";

$result = $conn->query("SELECT * FROM poses");
echo "<table border='1' cellpadding='5'>";
echo "<tr>
        <th>#</th>
        <th>Motor 1</th>
        <th>Motor 2</th>
        <th>Motor 3</th>
        <th>Motor 4</th>
        <th>Motor 5</th>
        <th>Motor 6</th>
        <th>Action</th>
      </tr>";

$i = 1;
while ($row = $result->fetch_assoc()) {
    echo "<tr>";
    echo "<td>{$i}</td>";
    for ($j = 1; $j <= 6; $j++) {
        echo "<td>" . $row["motor$j"] . "</td>";
    }

    echo "<td>
            <button onclick='loadPose({$row["id"]})'>Load</button>
            <button onclick='deletePose({$row["id"]})'>Remove</button>
          </td>";
    echo "</tr>";
    $i++;
}
echo "</table>";
?>
