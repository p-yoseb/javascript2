// 1. 생성자 함수 선언
// 2. 학생배열제작
// 3. 전체학생출력

function Student(name,html,css,js,java){
    this.name=name;
    this.html=html;
    this.css=css;
    this.js=js;
    this.java=java;

    this.getSum=function(){
        return this.html+this.css+this.js+this.java
    }
    this.getAvg=function(){
        return this.getSum()/4
    }
    // toString override
    this.toString=function(){
        return this.name+" "+this.getSum()+" "+this.getAvg()
    }
}

// 학생 정보 데이터
var students=[];
students.push(new Student("원빈",10,20,30,40))
students.push(new Student("장동건",40,40,60,60))
students.push(new Student("강호동",60,50,70,80))
students.push(new Student("유재석",80,10,77,90))
students.push(new Student("소녀시대",100,75,30,100))
students.push(new Student("BTS",85,90,35,60))
students.push(new Student("2PM",77,55,70,70))
students.push(new Student("동방신기",65,90,60,80))
students.push(new Student("이정재",90,70,65,90))
students.push(new Student("빅뱅",81,85,80,95))

console.log(students)

// 전체성적
var j=0;
function allStudent(){
    if(j%2==0){
    var output="이름 총점 평균 <br><hr>"
    for(var i in students){
        output+= (Number(i)+1)+" : "+students[i].toString()+"<br>"
    }
    output +="<hr>"
    list.innerHTML=output;
    }else{list.innerHTML="";}
    j++;
};


// 장학금 1등~3등
var j=0;
function good(){
    if(j%2==0){
    var output="이름 총점 평균 <br><hr>"
    var students2=students.sort(function(a,b){
        return b.getSum()-a.getSum();
    })
    students2=students.slice(0,3)
    for(var i in students2){
        output+= (Number(i)+1)+" : "+students2[i].toString()+"<br>"
    }
    output +="<hr>"
    list.innerHTML=output;
}else{list.innerHTML="";}
j++;
};

// 퇴학생
var j=0;
function bad(){
    if(j%2==0){
    var output="이름 총점 평균 <br><hr>"
    var students2=students.sort(function(a,b){
        return a.getSum()-b.getSum();
    })
    students2=students.slice(0,3)
    for(var i in students2){
        output+= (students.length-Number(i))+" : "+students2[i].toString()+"<br>"
    }
    output +="<hr>"
    list.innerHTML=output;
}else{list.innerHTML="";}
j++;
};


// 장려상
var j=0;
function jang(){
    if(j%2==0){
    var output="이름 총점 평균 <br><hr>"
    var students2=students.sort(function(a,b){
        return b.getSum()-a.getSum();
    })
    students2=students.slice(3,7)
    for(var i in students2){
        output+= (Number(i)+4)+" : "+students2[i].toString()+"<br>"
    }
    output +="<hr>"
    list.innerHTML=output;
}else{list.innerHTML="";}
j++;
};


// 리스트 하나씩만 삭제하기
function del(){
    console.log(students)
    students.splice(0,1)

    var output="이름 총점 평균 <br><hr>"
    for(var i in students){
        output+=(i)+" : "+students[i].toString()+"<br>"
    }
    output+="<hr>"
    list.innerHTML=output;
}

function reload(){
    location.reload();
}

var date=new Date();
var year=date.getFullYear();
var month=date.getMonth()+1;
var day=date.getDate();
var 요일=date.getDay();

switch(요일){
    case 0 : 요일='일요일'; break;
    case 1 : 요일='월요일'; break;
    case 2 : 요일='화요일'; break;
    case 3 : 요일='수요일'; break;
    case 4 : 요일="목요일"; break;
    case 5 : 요일="금요일"; break;
    case 6 : 요일="토요일"; break;
}

time.innerHTML=year+"년"+month+"월"+day+"일" +" "+요일
