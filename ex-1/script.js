var bgColor = random_bg_color();

function random_bg_color() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return bgColor = "rgb(" + r + "," + g + "," + b + ")";
}

const h1 = document.getElementsByTagName("h1").item(0);
h1.innerHTML = "Modifying the DOM";

const body = document.querySelector("body");
body.style.backgroundColor = bgColor;