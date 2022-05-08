
var nbPlayers = 2;

function addPlayer() {
    nbPlayers ++;
    const input = document.getElementById("addPlayer");
    input.id = "player" + nbPlayers;
    input.placeholder = "Nom du joueur " + nbPlayers;
    input.onclick = null;
    input.onblur = function() {removePlayer(nbPlayers)};
    const newAddPlayer = document.createElement("input");
    newAddPlayer.id = "addPlayer";
    newAddPlayer.placeholder = "Nouveau joueur";
    newAddPlayer.onclick = function () {addPlayer()};
    document.getElementById("players").insertBefore(document.createTextNode(" "), document.getElementById("beforePlayers"));
    document.getElementById("players").insertBefore(newAddPlayer, document.getElementById("beforePlayers"));
    newAddPlayer.addEventListener('mousemove', function(){bigInput(newAddPlayer)});
}

function removePlayer(nb) {
    const element = document.getElementById("player" + nb);
    if (element.value.length == 0) {
        nbPlayers--;
        document.getElementById("addPlayer").remove();
        element.id = "addPlayer";
        element.placeholder = "Nouveau joueur";
        element.onclick = function () {addPlayer()};
    }
}
