
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
        if (e.target.tagName != "INPUT"){
            for (j = 1; j <= nbPlayers; j++) {
                const player = document.getElementById("player" + j).style;
                player.width = "125px";
                player.height = "20px";
            }
            const addPlayerInput = document.getElementById("addPlayer").style;
            addPlayerInput.width = "125px";
            addPlayerInput.height = "20px";
            const inputs = document.getElementsByTagName("input");
            for (i = 0; i < inputs.length; i++) {
                const input = inputs[i].style;
                addPlayerInput.width = "125px";
                addPlayerInput.height = "20px";
            }
        }
    } catch(TypeError) {}
});
