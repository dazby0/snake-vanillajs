<?php
    require('config.php');
    session_start();
    $currentLevel = $_SESSION['level'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ranking</title>

    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <div class="main">
        <header>
            <h1>Ranking level <?php echo $currentLevel; ?></h1>
        </header>
        <div class="rank">
            <ol class="ranking">
                <?php
                    $selectRanking = "SELECT nick, score FROM scores WHERE level='$currentLevel' ORDER BY score DESC LIMIT 5";
                    $result = $conn -> query($selectRanking);

                    while($row = $result->fetch_assoc()) {
                        if($row['nick'] == $_SESSION['user']) {
                            echo "<li onclick='changeNickname()' class='active-nick'>".$row['nick']."</li><p class='ranking-score'>score: ".$row['score']."</p>";
                        }
                        else echo "<li>".$row['nick']."</li><p class='ranking-score'>score: ".$row['score']."</p>";
                    }
                ?>
            </ol>
        </div>
        <div class="try-again">
            <input type="button" class="button button-back" value="TRY AGAIN" />
        </div>
    </div>

    <form action="update.php" method='post'>
        <div class="nickname-screen">
            <h2 class="h2-title">Change your nickname</h2>
            <input type="text" name="nickname" id="nickname" class="input-text" id="nickname">
            <input type="submit" value="UPDATE" class="button" id="button-nickname"></input>
        </div>
    </form>



    <script src="src/script.js" defer></script>
</body>
</html>