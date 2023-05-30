// createElement()
// createTextNode()
// <h1> welcome </h1>
// append 나 appenChild
// 문서객체 만들기

// 객체를 생성
var header = document.createElement('h1');
var text = document.createTextNode("welcome");

// 노드를 연결
header.appendChild(text);
// document.body.appendChild(header);

var box = document.getElementById('box');
var box2 = document.getElementById('box2');

// box.innerHTML="header";
box.appendChild(header);
box2.appendChild(header);

box.innerHTML = header.innerHTML;
box2.innerHTML = header.innerHTML;


// 고전 이벤트
// add.onclick=function(){  }

// 표준 이벤트
// add.addEventListener('click', function())

var add = document.getElementById('add');
var del = document.getElementById('del');

var i = 0;
add.addEventListener('click', function () {
    i++;
    var h2 = document.createElement('h2');
    var text = document.createTextNode('welcome' + i);
    h2.appendChild(text);
    document.body.appendChild(h2);

});

del.addEventListener('click', function () {

    var h2 = document.getElementsByTagName('h2');
    i = h2.length - 1
    if (i < 0) return false;
    document.body.removeChild(h2[i]);

});


function marin(name, level, gender, life) {
    this.name = name;
    this.level = level;
    this.gender = gender;
    this.life = 10;

    this.fire = function(){
        this.level+=1;
        if (this.level < 5) {
            document.write(this.name + "이 공격합니다.<br>");
        } else {
            document.write(this.name + "이 스팀팩을 장착했습니다.<br>");
        }
    }

    this.defend = function () {
            this.life -= 5;
            if (this.life == 0) {
                document.write(this.name+ "이 전사했습니다.<br>")
            }
        }
    this.정찰 = function(){
        document.write(this.name+"이 정찰을 나갑니다.<br>")
    }
}
var 마린1 = new marin("마린", 1, "테란", 10);

// setInterval(마린1.fire(),3000);
마린1.정찰();
마린1.defend();
마린1.defend();
마린1.fire();
마린1.fire();
마린1.fire();
마린1.fire();
// 3초마다 정찰나감