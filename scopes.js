// var
let varFirst = 1;
console.log(varFirst);

{
    var varSecond = 2;
    console.log(varSecond);    
}
console.log(varSecond);    

{
    let varThird = 3;
    console.log("Third - first : "+varThird);
}

console.log("Next !");
//1.let을 var로 만든다. 2.안에 중괄호를 하나 더 넣는다. 3.변수이름을  바꾼다.
{
    let varThird = 4;
    console.log("Third - second : "+varThird);
    {
        console.log("Third - parent : "+varThird);
        let varforth = 5;
        console.log("Third - third : "+varforth);
        console.log("First : "+varFirst);
    }
    console.log("Third - forth : "+varThird);
}

console.log("End !");

//function