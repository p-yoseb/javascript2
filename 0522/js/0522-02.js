// setAttribute("속성","값")
// getAttribute("속성")

var a=document.querySelectorAll('a');

console.log(a[0].getAttribute("value"));

for(var i=0;i<a.length;i++){
    a[i].style.backgroundColor=a[i].getAttribute('value');
}

for(var i=0;i<a.length;i++){
    a[i].setAttribute('index',i);
}

// data-  사용자가 정의하는 속성 dataset 속성
// a태그를 클릭하면 data-color속성을 읽어들여서 글자색 변경
for(var i=0;i<a.length;i++){
    a[i].addEventListener('click',function(){
      //  this.style.color=this.getAttribute('data-color');
        this.style.color=this.dataset.color;
        this.textContent=this.dataset.coffeeName;
    });
}

// innerHTML, textContent
// h1.innerHTML="<span> hi </span>"
// h1.textContent="<span> hi </span>"

// 버튼을 하나 만들어서 클릭했을때
// 리스트 목록이 추가되는 예제
var btn=document.getElementById('btn');
var str='';
str+="<ul>";
str+="<li>JavaScript</li>";
str+="<li>jQuery</li>";
str+="<li>Ajax</li>";
str+="</ul>";

var box=document.getElementById('box');
btn.onclick=addList
function addList(){
    box.innerHTML=str
}

var btn1=document.getElementById('btn1');
btn1.onclick=delList
function delList(){
    box.innerHTML=""
}

var btn2=document.getElementById('btn2');
var j=0;
btn2.addEventListener('click',function(){
    j%2==0 ? addList() : delList();
    j++;
});

var str1=[];
str1.push("<ul>")
str1.push("<li>JavaScript</li>")
str1.push("<li>jQuery</li>")
str1.push("<li>Ajax</li>")
str1.push("</ul>")


console.log(str1[1]);
console.log(str1.length);


var btn3=document.getElementById('btn3');
var j=0;
box.innerHTML+=str1[0];
btn3.addEventListener('click',function(){
    j++;
    box.innerHTML+=str1[j%3+1];
})
box.innerHTML+="</ul>";