const sectionNew = document.createElement("section");
document.querySelector('article').appendChild(sectionNew);

const arrName = ['Arthur','Sebastien','Henri','Latifa'];

for(let i = 0; i < arrName.length;i++){

    var iSwitch = Math.floor(Math.random() * 4);

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + r + "," + g + "," + b + ")";

    const pNew = document.createElement("p");
    pNew.innerText = arrName[iSwitch];
    document.querySelector('section').appendChild(pNew);
    pNew.style.backgroundColor = bgColor;

    if((r < 100 && b < 100)||(b < 100 && g < 100)||(g < 100 && r < 100)){
        pNew.style.color = "white";
    }
}
