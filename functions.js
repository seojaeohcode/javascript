//  function sum(x, z) {
//     let y = x + z;
//     return y;
// }

// function multiply(x) {
//     let y = x + 1;
//     return y;
// }

//let first = 0;

// sum(5);
// multiply(6);

// normal
// function name(params) {
//     return x;
// }

// anonymous
// let sumTwoAnonymous = function (params) {
//     return x;
// }

// 사용법: sumTwoAnonymous(params)

// let A = {
//     sumTwoAnonymous : function (x) {return x;}
// }

// arrow
// let sumTwoArrow = (x) => {return x;}
// console.log(sumTwoArrow(1));

//callback 함수 > 함수 호출
let x = 1;
let y = 1;
let z = 1;

let sumTwo = function (x,y){
    let result = x+y;
    return result;
}

let multiplyTwo = function (x,y){
    let result = x*y;
    return result;
}

let divideTwo = function (x,y){
    let result = x/y;
    return result;
}
//매개변수 개수가 안 맞으면 작동을 하는데 NaN이기 떄문에 초기값을 줘야한다.
let sumfour = function (x,y,z=0) {
    let result = sumTwo(x,y);
    let backtick = `sumTwo : ${result}`;
    console.log(backtick);
    result = x+y+z;
    return result;
}

let sumfive = function (x, y, z=0, callback) {
    let result = callback(x,y); //callback
    let backtick = `callback : ${result}`;
    console.log(backtick);
    result = x+y+z;
    return result;
}

//이렇게 함수로 넘기지 말고 콜백에서는 어나니머스 함수방식으로 넘기는 것이 가능. 
console.log(sumfour(x,sumTwo(x,y)));

console.log(sumfive(x,y,z,multiplyTwo));
console.log(sumfive(x,y,z,sumTwo));
console.log(sumfive(x,y,z,divideTwo));