<?php
    session_start();

    require('config.php');

    $nick = $_POST['nickname'];
    $score = $_POST['score'];
    $level = $_POST['level'];

    $checkNickname = "SELECT nick FROM scores WHERE nick='$nick'";
    $result = $conn->query($checkNickname);

    if (($result -> num_rows) != 0) {
        $updateNickname = "UPDATE scores SET score = '$score' WHERE nick = '$nick'";
        $conn->query($updateNickname);
    }
    else {
        $insertData = "INSERT INTO scores(nick, score, level) VALUES('$nick', '$score', '$level')";
        $conn->query($insertData);
    }

    $_SESSION['user'] = $nick;
    $_SESSION['level'] = $level;

    header('Location: rank.php');