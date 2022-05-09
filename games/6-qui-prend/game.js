
var players = [];

function startGame() {

for (i = 1; i <= nbPlayers; i++) {
    players.push(document.getElementById("player" + i).value);
}
document.getElementById("players").remove();

const table = document.createElement("table");

const playersTR = document.createElement("tr");

const firstTD = document.createElement("td");
firstTD.textContent = "Partie";
firstTD.id = "firstColumn";
playersTR.appendChild(firstTD);

for (i = 0; i < players.length; i++) {
    const td = document.createElement("td");
    td.textContent = players[i];
    playersTR.appendChild(td);
}

table.appendChild(playersTR);

const firstGame = document.createElement("tr");

const firstNB = document.createElement("td");
firstNB.textContent = "1";
firstNB.id = "firstColumn";
firstGame.appendChild(firstNB);

for (i = 0; i < players.length; i++) {
    const td = document.createElement("td");
    const input = document.createElement("input");
    input.id = "player" + (i + 1) + "_game1";
    input.placeholder = "66";
    input.className = "scoreTD";
    input.type = "number";
    td.appendChild(input);
    firstGame.appendChild(td);
}

table.appendChild(firstGame);

document.body.appendChild(table);

const button = document.createElement("button");
button.textContent = "Prochaine manche";
button.id = "next";
button.onclick = function(){next()};
document.body.appendChild(document.createElement("p"));
document.body.appendChild(button);

}

function next() {

    alert("WIP");

}
