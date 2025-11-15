var highlightAppName = [ "Valorant", "Clash Royale", "Discord" ];
var appNameOutput = document.getElementById("highlight-app-name");
var i = 0;

function changeAppName() {
    appNameOutput.innerHTML = highlightAppName[i];
    if(i < highlightAppName.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeAppName", 5000);
}

changeAppName();