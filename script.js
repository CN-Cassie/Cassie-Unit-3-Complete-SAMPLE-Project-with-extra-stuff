/* Declare variables below to save the different sections (divs) of your story
 *From rubric- Declare variables and use document.querySelector() 4xs*
 */
let storyOpening = document.querySelector(".story-opening");
let Option1screen = document.querySelector(".option-one-screen");
let Option2screen = document.querySelector(".option-two-screen");

let Option1end = document.querySelector(".option-one-end");

let Option2end = document.querySelector(".option-two-end");
/* From rubric-Declare variables below to save other html elements you might want to show or hide later*/
let button1 = document.querySelector(".option-one");

let button2 = document.querySelector(".option-two");

let photo1 = document.querySelector(".photo1");

let photo2 = document.querySelector(".photo2");

let photo3 = document.querySelector(".photo3");

let restart = document.querySelector(".restart");

let lastMessage = document.querySelector(".lastMessage");
let startOver1 = document.querySelector(".start-over1");

let startOver2 = document.querySelector(".start-over2");

/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!

INSERT_VARIABLE.onclick=function(){

};
*Apply onclick 2x, .style 2xs, and innerHTML 1x to your project*
*/

button1.onclick = function() {
    Option1screen.style.display = "block";
    storyOpening.style.display = "none";
};

button2.onclick = function() {
    Option2screen.style.display = "block";
    storyOpening.style.display = "none";
};

/* * From rubric:APPLY NEXT LEVEL FEAUTRE (onmouseover)*/
photo1.onmouseover = function() {
    Option1end.style.display = "block";
    Option1screen.style.display = "none";
    lastMessage.innerHTML = "You choose New York City! We're going to have an awesome trip!";
    lastMessage.style="color:red";
};

photo2.onmouseover = function() {
    Option1end.style.display = "block";
    Option1screen.style.display = "none";
    lastMessage.innerHTML = "You choose Chicago! We're going to have an awesome trip!";
     lastMessage.style="color:blue";
};

photo3.onmouseover = function() {
    Option1end.style.display = "block";
    Option1screen.style.display = "none";
    lastMessage.innerHTML = "You choose San Francisco! We're going to have an awesome trip!";
    lastMessage.style="color:purple";
};

restart.onclick = function() {
    Option2end.style.display = "block";
    Option2screen.style.display = "none";
};
startOver1.onclick = function() {
    Option1screen.style.display = "block";
    Option1end.style.display = "none";
};

startOver2.onclick = function() {
    storyOpening.style.display = "block";
    Option2end.style.display = "none";
};