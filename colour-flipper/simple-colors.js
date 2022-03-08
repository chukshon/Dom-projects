
const colours = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const body = document.body;

btn.addEventListener("click", function(){

    const randomNumber = getRandomNumber();
    body.style.backgroundColor = colours[randomNumber];
    color.textContent = colours[randomNumber];
})


// Create a function to get random numbers from 0 - 3

function getRandomNumber(){
    return Math.floor(Math.random() * colours.length);
}