var h2 = document.getElementsByTagName('h2');
// 배열

h2[0].style.backgroundColor = 'red';
h2[0].style.color = 'blue';
h2[0].style.fontStyle = 'italic';

h2[1].style.cssText = "color: red; border: 2px solid blue;";
h2[2].style.cssText = `background-color: gray; border: 2px solid blue;`;

var add = document.querySelector('.add');
var del = document.querySelector('.del');
var h2 = document.querySelector('h2');
// h2의 첫번째꺼만 선택
var h2a = document.querySelectorAll('h2'); // 배열

// 고전이벤트
add.onclick = function () {
 // h2a[4].classList.add('active');
 for (var i = 0; i < h2a.length; i++) {
  h2a[i].classList.add('active');
 }
}
// 클래스를 동적으로 추가한다.

// 표준이벤트
del.addEventListener('click', function () {
 for (var i = 0; i < h2a.length; i++) {
  h2a[i].classList.remove('active');
 }
})

// 토글버튼을 하나 만들고 클릭하면 class 추가되고 다시 클릭하면 class 제거
var tog = document.querySelector('.tog')
var j = 1;
tog.addEventListener('click', function () {
 j++;
 if (j % 2 == 0) {
  for (var i = 0; i < h2a.length; i++) {
   h2a[i].classList.add('active');
  }
 } else {
  for (var i = 0; i < h2a.length; i++) {
   h2a[i].classList.remove('active');
  }
 }
})
// callback 앞에 작업이 끝나면 나중에 실행되는 함수

var tog1 = document.querySelector('.tog1')
var j = 1;
tog1.addEventListener('click', toggle)
function toggle() {
 j++;
 if (j % 2 == 0) {
  for (var i = 0; i < h2a.length; i++) {
   h2a[i].classList.add('active');
  }
 } else {
  for (var i = 0; i < h2a.length; i++) {
   h2a[i].classList.remove('active');
  }
 }
}
// h3를 선택해서 각각에 이벤트를 걸어보자.
var h3a = document.querySelectorAll('h3');
for (var i = 0; i < h3a.length; i++) {
 h3a[i].onclick = function () {
  this.style.border = "5px solid blue";
 }
}

var h4a = document.querySelectorAll('h4');
for (var j = 0; j < h4a.length; j++) {
 h4a[j].onclick = function () {
  for (var i = 0; i < h4a.length; i++) {
   h4a[i].style.border = "5px solid red";
  }
 }
}