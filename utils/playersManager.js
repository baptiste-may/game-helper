
var nbPlayers = 2;

function addPlayer() {
    nbPlayers ++;
    const input = document.getElementById("addPlayer");
    input.id = "player" + nbPlayers;
    input.placeholder = "Nom du joueur " + nbPlayers;
    input.onfocus = null;
    input.onblur = function() {removePlayer(nbPlayers)};
    const newAddPlayer = document.createElement("input");
    newAddPlayer.style.opacity = 0;
    newAddPlayer.className = "player_input";
    newAddPlayer.id = "addPlayer";
    newAddPlayer.placeholder = "Nouveau joueur";
    newAddPlayer.onfocus = function () {addPlayer()};
    document.getElementById("players").insertBefore(document.createTextNode(" "), document.getElementById("beforePlayers"));
    document.getElementById("players").insertBefore(newAddPlayer, document.getElementById("beforePlayers"));
    setTimeout(() => {
        document.getElementById("addPlayer").style.opacity = 1;
    }, 0);
}

function removePlayer(nb) {
    const element = document.getElementById("player" + nb);
    if (element.value.length == 0) {
        nbPlayers--;
        document.getElementById("addPlayer").style.opacity = 0;
        setTimeout(() => {
            document.getElementById("addPlayer").remove();
            element.id = "addPlayer";
            element.placeholder = "Nouveau joueur";
            element.onfocus = function () {addPlayer()};
        }, 250);
    }
}
