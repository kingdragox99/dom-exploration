const x = document.querySelectorAll("img.important");
const xy = document.querySelectorAll("img");
const xs = document.getElementsByTagName("img");

const y = document.querySelectorAll(".important");
const ys = document.querySelector(".important");

const p = document.querySelectorAll("p");
const ps = document.querySelector("p");

y.forEach(ys => {
    ys.setAttribute("Tritle", "This is an important item");
});

xy.forEach( xs => {
    xs.style.display = "none";
});

x.forEach( xs => {
        xs.style.display = "block";
});

p.forEach(ps => {
    var pt = ps.getAttribute('class');
    console.log(ps.innerText);
    console.log(pt);
    ps.style.color = random_bg_color();
});

function random_bg_color() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return bgColor = "rgb(" + r + "," + g + "," + b + ")";
}

