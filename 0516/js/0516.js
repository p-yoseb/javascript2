// do ~ while
var i=0;
do{
    console.log("먼저실행 : " + i);
    i++;
}while(i<10)
console.log("최종값 : " + i);

// break : 반복문을 빠져나옴
// continue : 실행을 멈추고 다음 반복을 실행
// return : 함수에 끝부분에 선언하며, 리턴문을 만나면 함수는 종료되고, 그 이후의 값을 반환한다.

// while(true){
//     var answer=confirm("계속할까요?");
//     if(!answer){
//         break;
//     }
// }

// 홀수만 더하기, 짝수만 더하기
var sum=0;
for(var i=1;i<=10;i++){
    if(i%2==0){ // 짝수면 건너띄기
        // sum=sum+i;
        continue;
    }
    sum=sum+i;
    
}
console.log(sum); // 1부터 10까지 홀수들의 합

console.log("==============");

var sum=0;
for(var i=1;i<=10;i++){
    if(i%2!==0){ // 홀수면 건너띄기
        // sum=sum+i;
        continue;
    }
    sum=sum+i;
}
console.log(sum); // 1부터 10까지 짝수들의 합


// 1부터 100까지 더하는 구문을 완성하시오

var sum=0;
for(var i=1;i<=100;i++){
    sum=sum+i;
}
console.log(`결과 : ${sum}`);

var output="";
for(var i=1;i<=10;i++){
    for(var j=1;j<i+1;j++){
        output += "*";
    }
    // console.log(output);
    
    output+="<br>"
}
document.write(output);
// i=0 j=0
// i=1 j=0 1

var output="";
for(var i=1;i<=10;i++){
    output+="*";
    document.write(output+"<br>");
}

for(var i=1;i<=10;i++){
    var str="★";
    document.write(str.repeat(i)+"<br>")
}

var x=0;
for(var i=2;i<=9;i++){
    document.write(`----${i}단----<br>`)
    for(var j=1;j<=9;j++){
        x = i * j;
        document.write(`${i} x ${j} = ${x} <br>`)
    }
}

// document.write("<h1>구구단표</h1>");
// document.write("<table border=2 width=50%");
// for(var i=2;i<=9;i++){
//     document.write(`<tr><td>${i}</td>`)
//     for(var j=2;j<=9;j++){
//         document.write(`<td>${i*j}</td>`)
//     }
//     document.write(`</tr>`)
// }


// for in 반복문
// for in 객체 또는 배열
// for of 반복문
// for of 배열

var 과일="사과";
var 과일=["사과","배","오렌지","귤","수박"];
  // 인덱스  0     1     2      3     4

console.time("시작")
  for(var i in 과일){
    document.write(과일[i] + " ");
}
console.timeEnd("시작")
// 참조변수
console.log(과일[2]);
document.write("<br>")


console.time("시작")
for(var i of 과일){
    document.write(i + " ");
}
console.timeEnd("시작")

console.log(과일.length); // 5
document.write("<br>")


console.time("시작")
for(var i=0;i<과일.length;i++){
    document.write(과일[i]+" ");
}
console.timeEnd("시작")

// 객체
var 고양이={
    이름 : "나비",
    종류 : "페르시안",
    나이 : 2,
    먹다 : function(음식){
        return this.이름+"가 "+음식+"을 먹고 똥싸다";
    }
};
console.log(고양이.종류);
console.log(고양이.나이);
console.log(고양이['종류']);
console.log(고양이['나이']);

// 키 : 값
// 객체의 행동 -> 메소드      고양이.먹다('생선')
console.log(고양이.먹다("생선"));

var 결과=고양이.먹다("고등어");
console.log(결과);
document.write("<hr>")

고양이.색="검정색";

for(var key in 고양이){
   // document.write(i + " : " + 고양이[i] + "<br>")
    if(key != "먹다"){
        document.write(key + " : " + 고양이[key] + "<br>")
    }
}


for(var key in 고양이){
    if(key != "먹다"){
        document.write(key + " : " + 고양이[key] + "<br>")
    }else{
        document.write(key + " : " + 고양이.먹다("음식") + "<br>")
    }
}


// 사람을 정의
// 나이는 30살, 이름은 홍길동, 생일은 9월1일
// 사람이 밥을 먹고 소화를 했다.
// 취미는 인터넷게임

var person={
    name : "hong gil dong",
    age : 30,
    birthday : new Date(), // 오늘이 생일
    hoppy : "internet game",
    eat(food="밥"){
        return this.name + "이 " + food + "을 먹고 소화했다";
    }
}

document.write(person.eat("육개장")+"<br>");

for(var i in person){
    document.write(i + " : " + person[i] + "<br>")
}

document.write(person.eat()+"<br>");

