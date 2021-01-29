function startGame() {
    var playerName = getInputValue('playername');
    logPlayer(playerName);
    postScore(100, playerName);
    postScore(-5, playerName);
}
function logPlayer(name) {
    console.log("New game starting for player: " + name);
}
function getInputValue(elementID) {
    var inputElement = document.getElementById(elementID);
    if (inputElement.value == '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
function postScore(score, playerName) {
    if (playerName === void 0) { playerName = 'MultiMath Player'; }
    var logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    var scoreElement = document.getElementById('postedScores');
    scoreElement.innerText = score + " = " + playerName;
    logger("Score: " + score);
}
document.getElementById('startGame').addEventListener('click', startGame);
var logMessage = function (message) { return console.log(message); };
function logError(err) {
    console.error(err);
}
//# sourceMappingURL=app.js.map