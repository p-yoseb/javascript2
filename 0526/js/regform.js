result.style.display="none";
listform.style.display="none";

var input1 = document.querySelectorAll('input')[0];
var input2 = document.querySelectorAll("input")[1];
var list=[];
var i=0;
function signUp(){
    // alert("정말로 가입하시겠습니까?")
    rname.innerHTML=input1.value;
    remail.innerHTML=input2.value;
    result.style.display="block";
    regform.style.display="none";
    var list1 = { 이름 : input1.value, 이메일 : input2.value};
    list.push(list1);
    listspan.innerHTML+="<ul>"
        listspan.innerHTML+="<li>이름 : "+list[i].이름+", 이메일 : "+list[i].이메일+"</li>"
    listspan.innerHTML+="</ul>"
    i++;
}


function back(){
    rname.innerHTML="";
    remail.innerHTML="";
    input1.value="";
    input2.value="";
    result.style.display="none";
    listform.style.display='none';
    regform.style.display="block";
}


function open1(){
    result.style.display="none";
    regform.style.display="none";
    listform.style.display='block';
}