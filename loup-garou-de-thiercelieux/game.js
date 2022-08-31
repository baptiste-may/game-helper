// ----------{ VARIABLES }----------
const IDs = ["lg", "vill"];
const names = {lg: "Loup Garou", vill: "Villageois"}

var players = [];
var nbGame = 1;

var rolesToSet = 0;
var compo = {lg: 0, vill: 0};

// ----------{ ROLES }----------
document.getElementById("roles").onclick = () => {
    document.getElementById("players").style.opacity = 0;
    setTimeout(roles, 750);
};

function roles() {
    for (i = 0; i < nbPlayers; i++) {
        players.push({name: document.getElementById(`player${i+1}`).value, id: i});
    }
    document.getElementById("players").remove();

    document.getElementById("roles-text").textContent = `Rôles à distribués : ${nbPlayers}`;
    rolesToSet = nbPlayers;

    document.getElementById("roles").style.opacity = 1;
}

function addRole(id) {
    if (rolesToSet <= 0) return;
    rolesToSet--;
    document.getElementById("roles-text").textContent = "Rôles à distribués : " + rolesToSet;
    compo[id]++;
    document.getElementById("role-label-" + id).textContent = `${names[id]} (${compo[id]})`;
    updateStartButton();
}

function removeRole(id) {
    if (compo[id] <= 0) return;
    rolesToSet++;
    document.getElementById("roles-text").textContent = "Rôles à distribués : " + rolesToSet;
    compo[id]--;
    document.getElementById("role-label-" + id).textContent = `${names[id]} (${compo[id]})`;
    updateStartButton();
}

function updateStartButton() {
    if (rolesToSet == 0)
        document.getElementById("start").style.opacity = 1;
    else
        document.getElementById("start").style.opacity = 0;
}

// ----------{ START }----------
document.getElementById("start").onclick = () => {
    document.getElementById("roles").style.opacity = 0;
    setTimeout(start, 750);
};

function start() {
    document.getElementById("roles").remove();

    let compoList = [];
    for (i = 0; i < IDs.length; i++) {
        const ID = IDs[i];
        for (j = 0; j < compo[ID]; j++) {
            compoList.push(ID);
        }
    }
    
    // SHUFFLE LIST
    compoList = compoList.sort((a, b) => 0.5 - Math.random());

    for (i = 0; i < nbPlayers; i++) {
        players[i].role = compoList[i];
        const element = document.createElement("p");
        element.className = "role";
        element.textContent = `${players[i].name} a le role de ${names[players[i].role]}`;
        document.getElementById("game").appendChild(element);
    }
    document.getElementById("game").style.opacity = 1;
}