//callback 함수 > 함수 호출
let x = 1;
let y = 1;
let z = 1;

function sumTwo(x,y){
    let result = x+y;
    return result;
}

function sumfour(x,y,z=0) {
    let result = sumTwo(x,y);
    let backtick = `sumTwo : ${result}`;
    console.log(backtick);
    result = x+y+z;
    return result;
}

//매개변수 개수가 안 맞으면 작동을 하는데 NaN이기 떄문에 초기값을 줘야한다. 
console.log(sumfour(x,y));

//