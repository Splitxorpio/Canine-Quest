var p = document.getElementById("penny");
var c = document.getElementById("continue");
var i = document.getElementById("instruct");
var start = document.getElementById("start");

var end = 0;


//this makes the choose the character go away and the story come up
//girl
function girl() {
  end += 1;
  console.log(end);
  document.getElementById("body").style.backgroundImage = "url('house.jpg')";
  a.style.display = "none";
  p.style.display = "flex";
}
//this changes what the story text says
function story() {
  document.getElementById("storyTxt").innerHTML =
    "One day, after he opened the front door to leave, a strange portal opened up and Spot got sucked in! Jeff has no choice but to jump into the portal to find him!";
  move_img1();
  c.style.display = "flex";
}
function move_img1() {
  document.getElementById("spot").style.display = "none";
}

//go to instructions
function starter(){
  // document.getElementById("body").style.backgroundImage = "url('space.gif')";
  p.style.display = "none";
  i.style.display = "flex";
  start.style.display = "flex";
}
//start the gameplay
function game(){
  window.location.replace("game1/game.html");
}

//window load
window.onload = function () {
   document.getElementById("body").style.backgroundImage = "url('house.jpg')";
  p.style.display = "flex";
  c.style.display = "none";
  i.style.display = "none";
  start.style.display = "none";
};

//trigger endings (practice)
function ending(){
  sessionStorage.setItem("end", end);
  window.location.replace("ending.html");
}