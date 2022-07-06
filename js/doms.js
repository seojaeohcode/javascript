
let ulTag = document.querySelector("ul");
let liTag = document.createElement('li');
let liText = document.createTextNode('LG');

let aTag = document.querySelector("a");
aTag.innerText = "Daum";
aTag.setAttribute("href", "https://www.daum.net/");

let fAlert = function fAlert(first) {
    console.log(`fAlert : ${first}`);

    //리턴 없어도 0이나 true 넣어주기
    return true;
}

let add = function add(first="") {
    liTag = document.createElement('li');
    liText = document.createTextNode('LG');

    liTag.appendChild(liText);
    ulTag.appendChild(liTag);

    //리턴 없어도 0이나 true 넣어주기
    return true;
}

let remove = function remove(first="") {
    ulTag.lastElementChild.remove();
    console.log(ulTag.children[0]);

    //리턴 없어도 0이나 true 넣어주기
    return true;
}

let addEvent = document.querySelector("#add");
addEvent.addEventListener('click', add)

let removeEvent = document.querySelector("#remove");
removeEvent.addEventListener('click', remove)

