var highlightAppName = [ "Valorant", "Clash Royale", "Discord", "Microsoft Flight Simulator 2024", "Visual Studio Code" ];
var appNameOutput = document.getElementById("highlight-app-name");
var i = 0;

function wait(ms) {
    return new Promise(res => setTimeout(res, ms));
}

async function loop() {
    while(true) {
        appNameOutput.style.opacity = 0;
        await wait(1000);
        appNameOutput.innerHTML = highlightAppName[i];
        i = (i + 1) % highlightAppName.length;
        appNameOutput.style.opacity = 1;
        await wait(5000);
        
    }
}

loop();