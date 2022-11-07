<?php
    require('config.php');
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
            <h1>Ranking</h1>
        </header>
        <div class="rank">
            <ol class="ranking">
                <?php
                    $selectRanking = "SELECT nick FROM scores ORDER BY score DESC LIMIT 10";
                    $result = $conn -> query($selectRanking);

                    while($row = $result->fetch_assoc()) {
                        echo "<li>".$row['nick']."</li>";
                    }
                ?>
            </ol>
        </div>
    </div>

    <form action="" method='get'>
        <div class="nickname-screen">
            <h2 class="h2-title">Choose your nickname</h2>
            <input type="text" name="nickname" id="nickname" class="input-text" id="nickname">
            <input type="submit" value="UPDATE" class="button" id="button-nickname"></input>
        </div>
    </form>


    <script src="src/script.js" defer></script>
</body>
</html>