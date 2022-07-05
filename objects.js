let monkey = {
    name : "George",
    species : "gorilla",
    foodsEaten : ["apple", "banana", "orange"],
    age: 10,
    sumTwoAnonymous : function (age) {return age;}
}

monkey.name
monkey.foodsEaten[2]
console.log(monkey.sumTwoAnonymous(monkey.age));