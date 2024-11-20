<?php
    $conn = new mysqli("localhost", "PEPECroak", "1593578246MAx");
    
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    echo "Connected successfully";

?>