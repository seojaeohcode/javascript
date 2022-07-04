let fruits = ["apple", "banana", "orange"];
//fruits[2]//fruits["banana"] => 이 방식도 가능.;

//stack
fruits.push("grape");//맨 뒤 삽입
fruits.pop();//맨 뒤 삭제


console.log("");

let animal = ["tiger", "lion"];

let mix = animal.concat(fruits);

console.log(animal);

let mixins = ["apple", false , "banana", 4 , "orange" , ["tiger", "lion"]];

console.log("program end !");