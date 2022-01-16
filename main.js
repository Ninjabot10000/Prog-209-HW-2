//https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-80.php Very useful for swapping letters
//https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/array/splice
let fruit = [];

document.getElementById("changeBtn").style.visibility = 'hidden';

function promptUser(){
    for (let i = 0; i <= 2; i++) {
        fruit[i] = prompt("Name a fruit");
    }
    //document.getElementById("buttonDisappear").innerHTML = "";
    startBtn.style.display = 'none';
    if (startBtn.style.display = 'none'){
        document.getElementById("changeBtn").style.visibility = 'visible';
    }
 }
console.log(fruit)

// document.addEventListener("DOMContentLoaded", function (event) {
//     // disable the lower part of the form until we have user input for all values
//     //document.getElementById("experience").disabled = true;
// })

function fruitdisplay(){
    let ul = document.createElement('ul');
    document.getElementById('fruitul').appendChild(ul);
    for (let i = 0; i <= 2; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = fruit[i];
    }
}
fruitdisplay();

changeBtn.addEventListener("click",changeWordDisplay, false)

function changeWordDisplay(){
    firstScreen.style.display = "none";
    secondScreen.style.display = "block";
}



// document.addEventListener("DOMContentLoaded", function (event) {
//     document.getElementById("firstLetter").addEventListener("click", function () {
//         let x = myArray.map(firstLetterFunction)
//         document.getElementById("output").value = x;
//     }
// )}
// USE LATER
// function letterswitch(oneWord) {
//     oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length -1) + oneWord.charAt(0);
//     return

// }

// if(fruit[i]!=null){
//     fruitdisplay();
// }

// let startBtn = document.querySelector("start");


// let btnShow = document.querySelector("button");
// let input = document.querySelector("input")
// let output = document.querySelector("h1");



// btnShow.addEventListener('click',changeWordsButton,false)

// function pageTransition()

// function changeWordsButton(){
//     button.style.display = "none";
// }


//input.addEventListener
//oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length -
    //1) + oneWord.charAt(0); });

//document.addEventListener("DOMContentloaded"), function (event) {
    //document.getElementbyId("").disabled = true;
//}
