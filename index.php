<?php
    $host = 'localhost';
    $username = 'root';
    $password = '';
    $db = 'snake';
    
    $conn = new mysqli($host, $username, $password, $db);

    // if($conn) echo 'connected';
    // else echo 'not connected';
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SNAKE - THE GAME</title>

    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <div class="main-container">
        <div class="title">SNAKE - THE GAME</div> 
        <div class="board"></div>  
        <div class="credits">
            <p class="choosen-nickname"></p>
            <p class="choosen-level" id="choosen-level"></p>
            <p class="score">Score: 232</p>
        </div> 
    </div>

    <form action="" method="post" target="frame">
        <div class="nickname-screen">
            <h2 class="h2-title">Choose your nickname</h2>
            <input type="text" name="nickname" id="nickname" class="input-text" id="nickname" required>
            <input type="button" value="NEXT" class="button" id="button-nickname"></input>
            <?php
                $nickname = $_POST['nickname'];
                $chosen_lvl = $_POST['lvlValue'];

                // $selectNicknames = "SELECT nick FROM scores";
                // $resultNicknames = $conn->query($selectNicknames);
                // $nicknamesArray = [];
                
                // while($row = $resultNicknames->fetch_assoc()){
                //     array_push($nicknamesArray, $row['nick']);
                // }

                // print_r($nicknamesArray);
                // print_r(array_search($nickname, $nicknamesArray));

                $insertValues = "INSERT INTO scores (nick, selected_lvl) VALUES ('$nickname', '$chosen_lvl')";
                $conn->query($insertValues);
            ?>
        </div>
    
        <div class="snake-color">
            <div class="snake-color-title">
                <h2 class="h2-title">Pick color of your snake</h2>
            </div>
            <input type="color" class="picker" id="inputPicker" />
            <input type="button" value="NEXT" class="button" id="button-picker"></input>
        </div>
    
        <div class="level-screen">
            <div class="choose-level-title">
                <h2 class="h2-title">Choose level</h2>
            </div>
            <div class="choose-level">
                <button type="submit" name='lvlValue' value='easy' class="button level-easy">EASY</button>
                <button type="submit" name='lvlValue' value='medium' class="button level-medium">MEDIUM</button>
                <button type="submit" name='lvlValue' value='hard' class="button level-hard">TURBO HARD</button>
            </div>
        </div>

    </form>

    <div class="menu-container">
        <input type="button" value="MENU" class="button">
    </div>

<!-- update jesli wczesnije wybrany nick juz jest w bazie -->

    <div class="endgame-screen">
        <div class="endgame-title">
            <h2 class="h2-title">Game over!</h2>
        </div>

        <div class="rank">
            <ol class="ranking">
                <?php
                    $selectResults = "SELECT nick, score, selected_lvl FROM scores ORDER BY score ASC LIMIT 10;";
                    $result = $conn->query($selectResults);

                    if($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            echo "<li>".$row['nick']."</li>";
                        }
                    }

                    $conn->close();
                ?>
            </ol>
        </div>

        <input type="button" value="TRY AGAIN?" class="button button-try-again">
    </div>



    <script src="script.js" defer></script>
    <iframe name="frame"></iframe>
</body>
</html>