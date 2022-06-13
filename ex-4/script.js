const ol = document.querySelector('ol');
const ols = document.querySelectorAll('ol');
const li = document.querySelectorAll('li');
var arrCal = li.length - 1;
var lastChild = ol.children[arrCal];

ol.insertBefore(lastChild, ol.firstChild);

const sectio=document.querySelectorAll('section');

const h23=sectio[2].children[0];

const h23r=h23.children[0];

const h22=sectio[1].firstElementChild;

sectio[2].insertBefore(h22,h23);
sectio[1].insertBefore(h23r,sectio[1].firstElementChild);

sectio[2].remove();

