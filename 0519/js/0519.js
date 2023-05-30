window.onload=function(){
// html body에 문서를 자유롭게 읽을 수 있다.


}

// 객체와 배열을 사용한 데이터 관리
// 학생데이터생성
var 학생0={ 이름:'kim1', 국어:87, 영어:70, 수학:40, 과학:80 };
var 학생1={ 이름:'kim2', 국어:78, 영어:69, 수학:41, 과학:70 };
var 학생2={ 이름:'kim3', 국어:89, 영어:68, 수학:42, 과학:60 };
var 학생3={ 이름:'kim4', 국어:90, 영어:67, 수학:43, 과학:50 };
var 학생4={ 이름:'kim5', 국어:91, 영어:66, 수학:44, 과학:90 };
var 학생5={ 이름:'kim6', 국어:92, 영어:65, 수학:45, 과학:100 };

var 학생0총점=학생0.국어+학생0.영어+학생0.수학+학생0.과학;
document.write(`<h2> 총점 : ${학생0총점}</h2>`);

var 학생0총점=0;
for(var i in 학생0){
    if(i!='이름') 학생0총점+=Number(학생0[i])
}
document.write(`<h2> ${학생0.이름}의 총점 : ${학생0총점}</h2>`);

// 객체에 필요한 데이터를 추출하는 작업
var 학생2총점=0;
for(var i in 학생2){
    if(!isNaN(학생2[i])) 학생2총점+=Number(학생2[i])
}
document.write(`<h2> ${학생2.이름}의 총점 : ${학생2총점}</h2>`);


var students=[];
students.push({ 이름:'kim1', 국어:87, 영어:70, 수학:40, 과학:80 });
students.push(학생1);
students.push(학생2);
students.push(학생3);
students.push(학생4);
students.push(학생5);

console.log(students);

// 모든 학생배열내의 객체에 메소드를 추가하기
for(var i in students){
    students[i].getSum=function(){
        return this.과학+this.국어+this.수학+this.영어;
    }
    students[i].getAvg=function(){
        return this.getSum()/4;
    }
}
console.log(students[3].getSum());

document.write(`학생0의 총점 : ${students[0].getSum()} <br>`);
document.write(`학생0의 평균 : ${students[0].getAvg()} <br>`);
document.write("<hr>")
// 전체학생 성적출력하기
document.write("이름 총점 평균 <br>");
for(var i in students){
    document.write(students[i].이름+" "+students[i].getSum()+" "+students[i].getAvg()+"<br>");
}

// 하나의 변수에 저장하기
var output="<hr> 이름 총점 평균 <br>";
for(var i in students){
    output += students[i].이름+" "+students[i].getSum()+" "+students[i].getAvg()+"<br>"
}
// output 변수에 문자열로 학생데이터 값이 하나씩 추가된다.
document.write(output);

// 코드 줄이기 = with 키워드
var output="<hr> 이름 총점 평균 <br>";
for(var i in students){
    with(students[i]){
    output += 이름+" "+getSum()+" "+getAvg()+"<br>"
    }
}
document.write(output);

console.log(students.pop());
// 지금까지 객체를 사용한 데이터 생성이었습니다.

// 함수를 사용한 객체 데이터 생성

function 학생성적표(name,korean,math,english,science){
    var 성적출력={
        이름 : name,
        국어 : korean,
        수학 : math,
        영어 : english,
        과학 : science,
        getSum : function(){
            return this.과학+this.국어+this.수학+this.영어;
        },
        getAvg : function(){
            return this.getSum()/4;
        },
        // toString 메소드 재정의 -> 오버라이드 override
        toString: function(){
            return this.이름+" "+this.getSum()+" "+this.getAvg();
        }
    };
    return 성적출력;
}

var 학생들=[];
학생들.push(학생성적표('원빈1',89,12,30,44));
학생들.push(학생성적표('원빈2',99,32,50,65));
학생들.push(학생성적표('원빈3',79,72,30,76));
학생들.push(학생성적표('원빈4',85,62,70,55));
학생들.push(학생성적표('원빈5',72,92,50,88));

// 성적출력
var 결과=`<hr>이름  총점  평균<br>`;
for(var i in 학생들){
    결과 += 학생들[i].toString()+'<br>';
}
document.write(결과);

// 생성자 함수
// new 키워드, instance 인스턴스


function Student(name,korean,math,english,science){
        this.이름=name;
        this.국어=korean;
        this.수학=math;
        this.영어=english;
        this.과학=science;
        this.getSum=function(){
            return this.과학+this.국어+this.수학+this.영어;
        },
        this.getAvg=function(){
            return this.getSum()/4;
        },
        // toString 메소드 재정의 -> 오버라이드 override
        this.toString=function(){
            return this.이름+" "+this.getSum()+" "+this.getAvg();
        }
}
document.write("<hr>");
var 학생1=new Student('장동건',40,30,50,40);
document.write(학생1.toString());
document.write(학생1);
// new를 사용하면 this -> 학생1이 된다. 학생1 -> 인스턴스(instance)
// new를 빼면 this -> window가 된다.

var students=[];
students.push(new Student('장동건1',40,30,50,80))
students.push(new Student('장동건2',50,31,70,60))
students.push(new Student('장동건3',60,32,20,90))
students.push(new Student('장동건4',70,33,90,30))
students.push(new Student('장동건5',80,34,30,60))
students.push(new Student('장동건6',90,35,40,50))

var 결과=`<hr>이름 &nbsp 총점 &nbsp 평균<br>`;
for(var i in students){
    결과 += students[i].toString()+'<br>';
}
document.write(결과);

var str="welcome";
console.log(str);

// instanceof : 해당객체가 어떤 생성자 함수로 생성되었는가? 확인하기
var 학생10=new Student("강호동",10,20,30,40);
console.log(학생10 instanceof Student);