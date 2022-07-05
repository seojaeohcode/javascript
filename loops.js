// let count = 0;
// let condition = count < 100;

// while (condition) {
//     count = count + 1;
//     console.log('in while '+count);
// }

// for (let index = 0; index < 5; index++) {
//     console.log("in for with count : "+count);
// }

// let fruits = ["apple", "banana", "orange"];

// for(let index = 0; index <= 2; i++){
//     console.log("in for with fruits : " + fruits[index]);
// }

// iteral
// for(let fruit of fruits){
//     console.log("fruit : " + fruit);
// }

// let animals = ["tiger", "lion"];

// for(let animal of animals)
// {
//     console.log("animal : "+ animal);
// }


let mixins = ["apple", false , "banana", 4 , "orange" , ["tiger", "lion"]];
let fruits = ["apple", "banana", "orange"];

// for(let mixin of mixins)
// {
//     let condition = !((typeof(mixin) == 'boolean')||(typeof(mixin) == 'string')||(typeof(mixin) == 'number'));
    
//     if (condition) {
//         for(let animal of mixin)
//         {
//             console.log("mixin : "+ animal);
//         }
//     }else{
//         console.log("mixin : "+ mixin);
//     }
// }

//어나니머스
let foreach = function (mixin, index){
    let condition = !((typeof(mixin) == 'boolean')||(typeof(mixin) == 'string')||(typeof(mixin) == 'number'));
    
    if (condition) {
        for(let animal of mixin)
        {
            console.log("mixin : "+ animal);
        }
    }else{
        console.log("mixin : "+ mixin);
    }
}

mixins.forEach(foreach);//forEach가 내부적으로 mixin,index를 알아서 넣어줌. 콜백함수 사용.

//노멀
mixins.forEach(function(mixin, index){
    let condition = !((typeof(mixin) == 'boolean')||(typeof(mixin) == 'string')||(typeof(mixin) == 'number'));
    
    if (condition) {
        for(let animal of mixin)
        {
            console.log("mixin : "+ animal);
        }
    }else{
        console.log("mixin : "+ mixin);
    }
});

//애로우
mixins.forEach((mixin, index) => {
    let condition = !((typeof(mixin) == 'boolean')||(typeof(mixin) == 'string')||(typeof(mixin) == 'number'));
    
    if (condition) {
        for(let animal of mixin)
        {
            console.log("mixin : "+ animal);
        }
    }else{
        console.log("mixin : "+ mixin);
    }
});

console.log("program end !");