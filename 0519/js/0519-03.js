
img.style.width = "200px";
img.style.height = "150px";
var div=document.getElementsByTagName('div')[0];
div.style.height="60px";
div.style.margin="auto";

var i = 0;
function change() {
    if (i % 3 == 0) {
        img.src = "./imgs/002.jpg";
    } else if(i%3==1) {
        img.src = "./imgs/003.jpg";
    } else{
        img.src = "./imgs/001.jpg";
    }
    i++;
}

function hide() {
    img.style.visibility = "hidden";
}
function show(){
    img.style.visibility = "visible";
}
var changeStyle=()=>{
    var h2=document.querySelector('h2');
    with(h2.style){
    background="pink";
    fontStyle="italic";
    color="red";
    fontSize="30px";
    }
}
var i=10;
var changeFont=()=>{
    var h2=document.querySelector('h2');
    i+=5;
    h2.style.fontSize=`${i}px`;
    if(i>=30) i=10;
}