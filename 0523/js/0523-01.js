// json 파일요청 - 비동기
// fetch, ajax(jQuery), axios
var i=0;
var button = document.querySelectorAll('button')[0]
button.addEventListener('click', function(){
 i%2==0 ? search() : content.innerHTML="", content2.innerHTML="";
 i++;
});
function search() {
 fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
   var output = "<table border='1' text-align='center' width='700px'>"
   output += "<tr><th>순번</th><th>이름</th><th>전화번호</th><th>이메일</th></tr>"
   data.forEach((ele, i) => {
    output += `<tr><td><a href='#' onclick=detail(${ele.id})>${ele.id}</a></td>`
    output += `<td>${ele.username}</td>`
    output += `<td>${ele.phone}</td>`
    output += `<td>${ele.email}</td></tr>`
   })
   output += "</table>"
   content.innerHTML = output;
  })
}
// 순번, 사용자이름, 전화번호, 이메일
function detail(id) {
 fetch('https://jsonplaceholder.typicode.com/users/' + id)
  .then(response => response.json())
  .then(data => {
   var output = "<table border='1' text-align='center' width='700px'>"
   output += "<tr><th>순번</th><th>이름</th><th>전화번호</th><th>이메일</th></tr>"
   output += `<tr><td>${data.id}</td>`
   output += `<td>${data.username}</td>`
   output += `<td>${data.phone}</td>`
   output += `<td>${data.email}</td></tr>`
   output += "</table>"
   content2.innerHTML = output;
  })
}

var i=0;
var button1 = document.querySelectorAll('button')[1]
button1.addEventListener('click', function(){
 i%2==0 ? search1() : content3.innerHTML="", content4.innerHTML="";
 i++;
});
function search1() {
 fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {
   var output = "<table border='1' text-align='center' width='700px'>"
   output += "<tr><th>순번</th><th>타이틀</th><th>completed</th></tr>"
   data.forEach((ele, i) => {
    if(i<10){
    output += `<tr><td><a href='#' onclick=detail1(${ele.id})>${ele.id}</a></td>`
    output += `<td>${ele.title}</td>`
    output += '<td>'+ `${ele.completed==true ? "작업완료" : "아직미완성"}`+'</td>'}})
   output += "</table>"
   content3.innerHTML = output;
  })
}
// 순번, 사용자이름, 전화번호, 이메일
function detail1(id) {
 fetch('https://jsonplaceholder.typicode.com/todos/' + id)
  .then(response => response.json())
  .then(data => {
   var output = "<table border='1' text-align='center' width='700px'>"
   output += "<tr><th>순번</th><th>타이틀</th><th>completed</th></tr>"
   output += `<tr><td>${data.id}</td>`
   output += `<td>${data.title}</td>`
   output += '<td>'+ `${data.completed==true ? "작업완료" : "아직미완성"}`+'</td>'
   output += "</table>"
   content4.innerHTML = output;
  })
}