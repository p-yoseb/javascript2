console.log("fetch로 통신하기")
fetch('https://jsonplaceholder.typicode.com/todos/1')
 .then((response) => response.json())
 .then((data) => console.log(data));

fetch('https://jsonplaceholder.typicode.com/todos/1')
 .then(
  function (response) {
   console.log(response);
   return response.json();
  })
 .then(
  function (data) {
   console.log(data);
   document.write(`사용자아이디 : ${data.userId} 타이틀 : ${data.title}`)
   document.write("<hr>");
  });
console.log("fetch로 통신하기 끝")


fetch('https://jsonplaceholder.typicode.com/users')
 .then((response) => response.json())
 .then((data) => {
  for (var i in data) {
   document.write(data[i].name + ' : ' + data[i].phone + ' / ' + data[i].website + '<br>');
  }
  console.log(data)
  console.log(data[0].address.street)
 });
document.write("<hr>");





fetch('https://jsonplaceholder.typicode.com/users')
 .then((response) => response.json())
 .then((data) => {
  document.write("<table border='1'>");
  document.write("<tr><th>이름</th><th>전화번호</th><th>이메일</th></tr>")
  for (var i in data) {

   document.write("<tr><td>" + data[i].name + '</td><td>' + data[i].phone + '</td><td>' + data[i].website + '</td>');
   document.write("</tr>")
  }
  document.write("</table>")
  console.log(data)
 });
document.write("<hr>");


fetch('https://jsonplaceholder.typicode.com/users')
 .then((response) => response.json())
 .then((data) => {
  var output = '';
  output += "<table border='1'>";
  output += "<tr><th>이름</th><th>전화번호</th><th>이메일</th></tr>";
  for (var i in data) {

   output += "<tr><td>" + data[i].name + '</td><td>' + data[i].phone + '</td><td>' + data[i].website + '</td>';
   output += "</tr>";
  }
  output += "</table>";
  document.write(output);
  console.log(data);
 });
document.write("<hr>");



fetch('https://jsonplaceholder.typicode.com/posts')
 .then((response) => response.json())
 .then((data) => {
  var output = '';
  output += "<table border='1'>";
  output += "<tr><th>아이디</th><th>타이틀</th><th>바디</th></tr>";
  for (var i in data) {
   console.log("iiii=>"+i)
   if (i < 10) {
    output += "<tr><td>" + data[i].id + '</td><td>' + data[i].title + '</td><td>' + data[i].body + '</td>';
    output += "</tr>";
   }
  }
  output += "</table>";
  document.write(output);
  console.log(data);
 });
document.write("<hr>");


fetch('https://jsonplaceholder.typicode.com/posts?id=5')
 .then((response) => response.json())
 .then((data) => {
  var output = '';
  output += "<table border='1'>";
  output += "<tr><th>아이디</th><th>타이틀</th><th>바디</th></tr>";
  for (var i in data) {
   console.log("iiii=>"+i)
   if (i < 10) {
    output += "<tr><td>" + data[i].id + '</td><td>' + data[i].title + '</td><td>' + data[i].body + '</td>';
    output += "</tr>";
   }
  }
  output += "</table>";
  document.write(output);
  console.log(data);
 });
document.write("<hr>");