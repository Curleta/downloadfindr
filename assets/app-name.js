var highlightAppName = [ "Valorant", "Clash Royale", "Discord" ];
var appNameOutput = document.getElementById("highlight-app-name");
var i = 0;

function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
}

async function loop() {
    while(true) {
        appNameOutput.innerHTML = highlightAppName[i];
        i = (i + 1) % highlightAppName.length;
        await wait(5000);
    }
}

loop();