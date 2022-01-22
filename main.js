let fruit = [];

document.getElementById("changeBtn").style.visibility = 'hidden';

function promptUser(){
    for (let i = 0; i < 3; i++) {
        fruit[i] = prompt("Name a fruit");
    }
    //document.getElementById("buttonDisappear").innerHTML = "";
    startBtn.style.display = 'none';
    if (startBtn.style.display = 'none'){
        document.getElementById("changeBtn").style.visibility = 'visible';
    }
    fruitdisplay();
 }
 

 function fruitdisplay(){
    console.log(fruit)
    let ul = document.createElement('ul');
    document.getElementById("fruitul").appendChild(ul);
    // document.getElementById('fruitul').appendChild(ul);
    for (i = 0; i < fruit.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        // let text = document.createTextNode(fruit[i]);
        // let text = document.getElementsByName(fruit[i]);
        li.innerHTML = fruit[i];    
    };
}

changeBtn.addEventListener("click",changeWordDisplay, false)

function changeWordDisplay(){
    firstScreen.style.display = "none";
    secondScreen.style.display = "block";
}

function letterSwap(){
    let fruit2 = fruit.map(x => x.charAt(fruit.length - 1) + x.substring(1, x.length -1) + x.charAt(0));
    let ul = document.createElement('ul');
    document.getElementById("fruitul2").appendChild(ul);
    for (i = 0; i < fruit2.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = fruit2[i];    
    };
    console.log(fruit2)
}
//2nd array 
// document.addEventListener("DOMContentLoaded", function (event) {


    // document.getElementById("changeBtn").addEventListener("click", function(){
    //     let x = fruit.map(fruit => {
    //         x.charAt(fruit.length - 1) + x.substring(1, x.length -1) + x.charAt(0);
    //     });
    // });
    //     document.getElementById("fruitul2").value = x;
    //     console.log(x);
// });

// function letterSwap(){
//     swap = x.charAt(fruit.length - 1) + x.substring(1, x.length -1) + x.charAt(0);
//     return swap
// }



// document.addEventListener("DOMContentLoaded", function (event) {
//     // disable the lower part of the form until we have user input for all values
//     //document.getElementById("experience").disabled = true;
// })







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
