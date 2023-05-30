// window.onload=function(){ }
// load 이벤트이름, 이벤트타입
// onload 이벤트속성
// 할당된 함수 : 이벤트리스너, 이벤트핸들러
// 이벤트 연결한다.
// 이벤트 관련속성
// click, mouseover, mouseenter, focus

// 이벤트 모델
// DOM Level 0
// 인라인이벤트모델, 기본이벤트모델(고전이벤트)
// 한 객체에 두번이상 적용할 수 없다.

// DOM Level 2
// 표준이벤트모델, 익스플로러이벤트모델
// addEventListner(type, listener, false)
// attachEvent

// 익스플로러면 attachEvent를 사용하고
// 그외에는 addEventListner를 사용해라
// 크로스브라우징을 위한 코드구현하기

// 이벤트 제거

header.onclick=function(e){
    var event=e || window.event;

    console.log(this);
    console.log(event); // e, window.event(고전)

    // header.onclick= null; // 이벤트 제거
    // for(var key in e){
    //     box.innerHTML +=`<p>${key} : ${e[key]}</p>`
    // }
    console.log(e.target); // 자식
    console.log(e.currentTarget); // 부모
}

// 이벤트강제실행


// 기본이벤트 제거
// daum.onclick=function(e){
//     this.style.background='pink';
//    // e.preventDefault();
//    return false;
// }

// href="javascript:void(0)"

daum.addEventListener('click',function(){
    this.style.background='pink'
})

function naver(){
    naver1.style.background='red'
    return false;
}

form.onsubmit=function(e){
    // var val=name2.value;
    // console.log(val);
    // if(val.replace(/[가-힝]/g,"").length==0){
    //     return false;
    // }else{
    //     //return false;
    //     alert("한글이름을 입력하세요");
    //     e.preventDefault();
    // }
var form=document.getElementById('form')
    form.action.innerHTML+=name2.value;

}