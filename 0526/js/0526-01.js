// setInterval(function(){ },1000)
// button.addEventListener('click',function(){

// })

// 콜백함수 예시
function add(a,b,callback){
    var result=a+b;
    callback(result)
}

add(10,5,function(result){
    document.write("파라미터로 콜백함수 호출됨<br>")
    document.write("더하기 결과 : "+ result)
    console.log("결과 : %d", result)
})
document.write("<hr>")

// 함수를 리턴하는 경우
function mul(a,b){
    var result=a*b;
    var output=function(){
        return `${a}*${b}=${result}`
    }
    return output
};
var out=mul(5,6); // 외부함수 호출
document.write("<hr>");
document.write(out);
var out=mul(5,6)(); // 내부함수 호출
document.write("<hr>");
document.write(out);
var out=mul(5,6); 
document.write("<hr>");
document.write(out()); // 내부함수 호출
document.write("<hr>");

// 클로저를 사용하지 않은 예문
function fncCount(){
    var count=0;
    count++;
    return count
}
var counter=fncCount();
document.write(counter)
document.write(counter)
document.write(counter)
document.write(counter)
document.write("<hr>");
// 모듈화, 은닉화

// 클러저를 사용한 예
function fncCount2(){
    var count=0;
    function addCount(){
        count++;
        console.log(count)
        return count
    }
    return addCount
}
var counter=fncCount2();
document.write(counter())
document.write(counter())
document.write(counter())
document.write(counter())

// 외부에서 내부변수에 접근가능하다.
// 자바에서 getter, setter 활용

var color=['red','gold','silver','blue','brown']
var body=document.querySelector('body')
// var i=0; // 전역변수
// function bgChange(){
    
//     body.style.background=color[i];
//     i++; // 내부에서 전역변수 변경
//     i=i%5
// }
var button=document.querySelector('button');


function bgChange(){
    var i=0;
    function inner(){    
    body.style.background=color[i];
    console.log(i)
    i++;
    i=i%color.length
    }
    return inner
}
var bgC=bgChange();
// button.onclick=function(){
//     bgC()
// };