$(".btn").click(handler);
var track = false;
$("body").keypress(function () {
    if (!track) {
        track = true;
        nextSequence();
    }
});


var userClickedPattern = [];
var color = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var level = 0;



function nextSequence() {
    $("#level-title").text("level " + level);
    userClickedPattern = [];
    var a = Math.random();
    a = a * 4;
    a = Math.floor(a);
    var randomColorChosen = color[a];
    gamePattern.push(randomColorChosen);
    playsound(gamePattern[level]);
    animate(gamePattern[level]);
    level++;
}





function handler() {
    var userColorChosen = this.id;
    userClickedPattern.push(userColorChosen);
    playsound(userColorChosen);
    animate(userColorChosen);
    checkAnswer(userClickedPattern.length - 1);

}


function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("sucess");
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);

        }
    }

    else {
        console.log("wrong");
        var wr = new Audio('sounds/wrong.mp3')
        wr.play();
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over,reload(ctrl+r) to Restart");

    }


}


function playsound(sound) {
    switch (sound) {
        case "red": var red = new Audio('sounds/red.mp3');
            red.play();
            break;
        case "blue": var blue = new Audio('sounds/blue.mp3');
            blue.play();
            break;
        case "green": var green = new Audio('sounds/green.mp3');
            green.play();
            break;
        case "yellow": var yellow = new Audio('sounds/yellow.mp3');
            yellow.play();
            break;
        default: console.log(sound);
    }
}

function animate(k) {
    $("." + k).addClass("pressed");
    setTimeout(function () {
        $("." + k).removeClass("pressed");
    }, 100);
}