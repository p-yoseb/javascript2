// form.onsubmit=function(e){
//     var val=name2.value;
//     console.log(val);
//     if(val==""){
//         return false;
//     }
//     else if(val.replace(/[가-힝]/g,"").length==0){
//         return true;
//     }else{
//         //return false;
//         alert("한글이름을 입력하세요");
//         e.preventDefault();
//     }
// }
// var vvv="가"

// console.log(vvv.replace(/[가-힝]/g,""))

// 이벤트버블링 : 자식 -> 부모
// 이벤트 캡쳐링 : 부모 -> 자식
// eventPhase

// button.addEventListener('click',function(e){
//     console.log(e.eventPhase)
// },false)
// field.addEventListener('click',function(e){
//     console.log(e.eventPhase)
// },false)
// html.addEventListener('click',function(e){
//     console.log(e.eventPhase)
// },true)
// body.addEventListener('click',function(e){
//     console.log(e.eventPhase)
// },true)
// 1 -> 캡쳐링 2 -> target 3 -> 버블링

function handler(e){
    var phase=['캡쳐링',"타켓","버블링"];
    console.log(e.target.nodeName,this.nodeName,phase[e.eventPhase-1]);
}

button.addEventListener('click',handler,false);
field.addEventListener('click',handler,false);
body.addEventListener('click',function(e){
    e.stopPropagation();
},false);
html.addEventListener('click',handler,false);

// e.target.nodeName -> e.target 최종자식 엘리먼트
// this.nodeName -> e.currentTarget 이벤트가 호출된 엘리먼트(부모)


// 이벤트전달방지
// event.stopPropagation();
// 이벤트 버블링 제거
// 익스플로러 => event.cancelBubble=true

a.onclick=function(e){
    this.style.background="gold";
    e.stopPropagation();
}
p.onclick=function(e){
    this.style.background="cyan";
    e.stopImmediatePropagation();
}
div.onclick=function(e){
    this.style.background="pink";
    e.stopPropagation();
}