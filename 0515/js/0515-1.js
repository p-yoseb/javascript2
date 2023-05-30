document.write("<h1>Hello world</h1>")

// var x;
// x="Hello World";
// alert(x);

var s;
s = 100;
document.write(s + "<br>");

s = "홍길동";
document.write(s + "<br>");

var s = "Hello World";
var t = "How are you" + " today";

document.write(s + "<br>");
document.write(t + "<br>");
document.write(s.toUpperCase() + "<br>");

var myCar = { model: "bmz", color: "red", hp: 100 };
document.write(myCar.model + "<br>");
document.write(myCar.color + "<br>");
document.write(myCar.hp + "<br>");


// var x,y;
// var input;

// input=prompt("정수를 입력하시오", "정수로");
// x=parseInt(input);
// input=prompt("정수를 입력하시오","정수로");
// y=parseInt(input);

// document.write(x+y+"<br>");2


function calc() {
    var x = document.getElementById("x").value;

    var y = document.getElementById("y").value;
    var sum;

    sum = parseInt(x) + parseInt(y);
    document.getElementById("sum").value = sum;
}

function red() {
    e = document.getElementById("test");
    e.style.color = "red";
}
function black() {
    e = document.getElementById("test");
    e.style.color = "black";
}


var computerNumber = 53;
var nGuesses = 0;

function guess() {
    var result;
    var number = parseInt(document.getElementById("user").value);
    nGuesses++;

    if (number == computerNumber) result = "성공입니다.";
    else if (number < computerNumber) result = "낮습니다.";
    else result = "높습니다.";

    document.getElementById("result").value = result;
    document.getElementById("guesses").value = nGuesses;
    return true;
}

var msg = "";
var time = new Date().getHours();
if (time < 12) {
    msg = "Good Morning";
}
else if (time < 18) {
    msg = "Good Afternoon";
}
else {
    msg = "Good evening";
}
alert(msg);

var grade = prompt("성적을 입력하시오")
switch (grade) {
    case "A":
        console.log("정말 잘했어요!"); break;
    case "B":
        console.log("잘했어요!"); break;
    case "C":
        console.log("중간이군요!"); break;
    case "D":
        console.log("더 노력해야겠어요"); break;
    case "F":
        console.log("다음 학기를 수강하세요"); break;
    default:
        console.log("알수없는 학점입니다"); break;
}


var n=0;
var g;
var ans=40;

function guess2(){
    g=document.getElementById("g").value;
    n++;
    if(g==ans){
        var aaa="성공입니다"
        document.getElementById("aaa").value=aaa;
    }else if(g<ans){
        var aaa="낮습니다"
        document.getElementById("aaa").value=aaa;
    }else{
        var aaa="높습니다"
        document.getElementById("aaa").value=aaa;
    }
    document.getElementById("n").value=n;

}

var i;
for(i=1; i<=10; i++){
    console.log(i);
}
