<?php
    require('config.php');
    session_start();

    $oldNickname = $_SESSION['user'];
    $newNickname = $_POST['nickname'];

    $setNewNickname = "UPDATE scores SET nick='$newNickname' WHERE nick='$oldNickname'";
    $conn->query($setNewNickname);

    $_SESSION['user'] = $newNickname;

    header('Location: rank.php');