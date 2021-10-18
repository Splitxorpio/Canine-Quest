var end = sessionStorage.getItem("end");

window.onload = function(){
  console.log(end);
  if (end == 1){
    document.getElementById("noun").innerHTML = "Jeff's"
    document.getElementById("char").src = "girl.png";
  }
}