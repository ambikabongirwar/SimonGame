let audio, level = 1, isFirstTime = 1;
let gamePattern = []
let buttonColors = ["green", "red", "yellow", "blue"]

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColour = buttonColors[randomNumber]
    gamePattern.push(randomChosenColour);
    animatePress(randomChosenColour)
    playSound(randomChosenColour)
}

/*for (var i = 0; i < 4; i++) {
    nextSequence();
    for (var j = 0; j < gamePattern.length; j++) {
        $("." + gamePattern[j]).fadeOut().fadeIn();
        audio = new Audio("sounds/" + gamePattern[j] + ".mp3");
        audio.play();
    }
}*/

function playSound(name) {
    audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(colorChosen) {
    $("." + colorChosen).addClass("pressed");
    setTimeout(function() {$("." + colorChosen).removeClass("pressed");}, 100)
}

function handleButtonClick(userClickedPattern) {
    for (var i = 0; i < level; i++) {
        $(".btn").click(function() {
            userChosenColor = this.classList[1];
            animatePress(userChosenColor)
            playSound(userChosenColor)
            pattern.push(userChosenColor)
            //console.log(userClickedPattern)
        })
    }
    return userClickedPattern;
}

function gameOver() {
    $("#level-title").text("Game Over, Press Any Key to Restart");
    playSound("wrong")
    $("body").addClass("game-over");
    setTimeout(function() {$("body").removeClass("game-over")}, 200);
    gamePattern = [];
    isFirstTime = 1;
}

function isEqual(userClickedPattern) {
    for (var i = 0; i < level; i++) {
        if (gamePattern[i] != userClickedPattern[i]) {
            gameOver();
            return 0;
        }
    }
    return 1;
}

function startGame() {
    do {
        console.log("inside do");
        $("#level-title").text("Level " + level);
        nextSequence();
        var pattern = [];
        level++;
        console.log(gamePattern);
        pattern = handleButtonClick(pattern);
        console.log(pattern);
        console.log("is Equal: " + isEqual(pattern));
    } while(isEqual(pattern) === 1 && level < 50);
}

$(document).keypress(function(){
    if (isFirstTime === 1) {
        isFirstTime = 0;
        console.log("key pressed");
        startGame();
    }
});