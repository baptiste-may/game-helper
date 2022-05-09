
function bigInput(element) {
    element.style.width = "150px";
    element.style.height = "25px";
}

for (i = 1; i <= nbPlayers; i++) {
    const player = document.getElementById("player" + i);

    player.addEventListener('mousemove', function(){bigInput(player)});
}

const addPlayerInput = document.getElementById("addPlayer");

addPlayerInput.addEventListener('mousemove', function(){bigInput(addPlayerInput)});

window.addEventListener("mousemove", e => {
    try {
        if (e.target.tagName === "HTML" || e.target.tagName === "BODY" || e.target.tagName === "DIV"){
            for (j = 1; j <= nbPlayers; j++) {
                const player = document.getElementById("player" + j).style;
                player.width = "100px";
                player.height = "15px";
            }
            const addPlayerInput = document.getElementById("addPlayer").style;
            addPlayerInput.width = "100px";
            addPlayerInput.height = "15px";
        }
    } catch(TypeError) {}
});
