
var nbPlayers = 2;

function addPlayer() {
    nbPlayers ++;
    const input = document.getElementById("addPlayer");
    input.id = "player" + nbPlayers;
    input.placeholder = "Nom du joueur " + nbPlayers;
    input.onclick = null;
    input.onblur = function() {unselectPlayer(nbPlayers)};
    const newAddPlayer = document.createElement("input");
    newAddPlayer.id = "addPlayer";
    newAddPlayer.placeholder = "Nouveau joueur";
    newAddPlayer.onclick = function () {addPlayer()};
    document.getElementById("truc").insertBefore(document.createTextNode(" "), document.getElementById("beforePlayers"));
    document.getElementById("truc").insertBefore(newAddPlayer, document.getElementById("beforePlayers"));
    newAddPlayer.addEventListener('mousemove', e => {
        newAddPlayer.style.width = "150px";
        newAddPlayer.style.height = "25px";
    });
}