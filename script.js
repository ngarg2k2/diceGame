var num1 = Math.random();
var num2 = Math.random();
var count1 = Math.floor(num1 * 6) + 1;
var count2 = Math.floor(num2 * 6) + 1;
var imgSource1 = "./images/inverted-dice-" + count1 + ".png";
var imgSource2 = "./images/inverted-dice-" + count2 + ".png";
// for image 1
// if (count1 == 1) {
document.querySelector('.one img').setAttribute("src", imgSource1);
// } else if (count1 == 2) {
//     var one = document.querySelector('.one img').setAttribute("src", imgSource1);
// } else if (count1 == 3) {
//     var one = document.querySelector('.one img').setAttribute("src", imgSource1);
// } else if (count1 == 4) {
//     var one = document.querySelector('.one img').setAttribute("src", imgSource1);
// } else if (count1 == 5) {
//     var one = document.querySelector('.one img').setAttribute("src", imgSource1);
// } else if (count1 == 6) {
//     var one = document.querySelector('.one img').setAttribute("src", imgSource1);
// }
//for image 2
// if (count2 == 1) {
document.querySelector('.two img').setAttribute("src", imgSource2);
// } else if (count2 == 2) {
//     var one = document.querySelector('.two img').setAttribute("src", imgSource2);
// } else if (count2 == 3) {
//     var one = document.querySelector('.two img').setAttribute("src", imgSource2);
// } else if (count2 == 4) {
//     var one = document.querySelector('.two img').setAttribute("src", imgSource2);
// } else if (count2 == 5) {
//     var one = document.querySelector('.two img').setAttribute("src", imgSource2);
// } else if (count2 == 6) {
//     var one = document.querySelector('.two img').setAttribute("src", imgSource2);
// }
//for result
if (count1 > count2) {
    document.querySelector('.head h1').innerHTML = "🚩Player 1 Win";
} else if (count1 < count2) {
    document.querySelector('.head h1').innerHTML = "Player 2 Win🚩";
} else {
    document.querySelector('.head h1').innerHTML = "Draw";
}