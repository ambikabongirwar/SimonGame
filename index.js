let randomNumber, randomChosenColour, audio
let gamePattern = []
let buttonColors = ["green", "red", "yellow", "blue",]

function nextSequence() {
    randomNumber = Math.floor(Math.random() * 4)
    randomChosenColour = buttonColors[randomNumber]
    gamePattern.push(randomChosenColour);
}

/*for (var i = 0; i < 4; i++) {
    nextSequence();
    for (var j = 0; j < gamePattern.length; j++) {
        $("." + gamePattern[j]).fadeOut().fadeIn();
        audio = new Audio("sounds/" + gamePattern[j] + ".mp3");
        audio.play();
    }
}*/
$(".btn").click(function() {
    $("." + this.classList[1]).fadeOut().fadeIn();
    audio = new Audio("sounds/" + this.classList[1] + ".mp3");
    audio.play();
})