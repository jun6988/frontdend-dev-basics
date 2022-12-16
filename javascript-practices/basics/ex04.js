/* 
변수의 생존범위(Scope)
1. 자바스크립트는 코드에서 변수의 범위를 알 수 있다 (자바와 마찬가지)
2. 자바스크립트 전역범위
3. ES6 이전(<=ES5)
    - 자바와 같은 블록({}) 스코프를 지원하지 않았다
    - 함수 범위를 지원한다
    - 함수 블록 안에서 변수 앞에 var 키워드를 사용하면 함수 범위를 가진다
4. ES6 이후(ES6~ES13)
    - 자바와 같은 블록 스코프를 지원한다
    - let 키워드를 붙여서 블록 범위를 가지게한다
    - const 키워드는 블록 범위에 있는 상수에 적용한다
5. 결론
   var는 함수 블록에서만 함수 범위를 설정하므로
   범위설정은 let/const만 사용하고 둘 중 하나를 **반드시** 붙이자!!!!
   (안붙이면 전역변수가 되어버림)
*/

var f10 = function() {
    a = 10; // var를 꼭 붙여서 전역변수를 생성하지 말자!
}

f10();
console.log(a); // i가 함수 밖에서도 쓰이는 전역변수가 됐다는 근거



var i = 10;
var f = function() {
    var i = 20;
    j = 100;
    console.log(i);
    i = j - i;
}

f();
console.log(i);
console.log(j);



console.log("====var 키워드는 함수 블록에서만 함수 범위를 설정한다====");
if(90 + 10 === 100) {
    var k = 20;
}

console.log(k); // var를 붙여서 변수 k를 만들었지만 함수블록이 아니라 전역변수가 되어버림



{
    let x = 1000;   // let은 블록 범위를 설정해주는 키워드
    const PI = 3.15;

    x = 100;
    // PI = 0; // assign error 재설정못함(static)
}

// console.log(x); // not defined error
// console.log(PI); // not defined error