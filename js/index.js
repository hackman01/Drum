 var drums=document.querySelectorAll(".drum")
 for(var i=0;i<drums.length;i++)
 {
     drums[i].addEventListener("click",handleclick);
 }
function handleclick()
{
   var char=this.innerHTML;
   playSound(char);
   buttonAnimate(char)
}
function playSound(sound)
{
  switch (sound) {
    case "w":
      var tom1=new Audio("sounds/tom-1.mp3");
      tom1.load();
      tom1.play();
      break;
    case "a":
      var tom2=new Audio("sounds/tom-2.mp3");
      tom2.load();
      tom2.play();
      break;
    case "s":
      var tom3=new Audio("sounds/tom-3.mp3");
      tom3.load();
      tom3.play();
      break;
    case "d":
      var tom4=new Audio("sounds/tom-4.mp3");
      tom4.load();
      tom4.play();
      break;
    case "j":
      var snare=new Audio("sounds/snare.mp3");
      snare.load();
      snare.play();
      break;
    case "k":
      var crash=new Audio("sounds/crash.mp3");
      crash.load();
      crash.play();
      break;
    case "l":
      var kick=new Audio("sounds/kick-bass.mp3");
      kick.load();
      kick.play();
      break;
    default:
      alert("Press Corresponding Keys!!");
      break;
   }
}
function buttonAnimate(key){
   document.querySelector("."+key).classList.add("pressed");
   setTimeout(function(){
    document.querySelector("."+key).classList.remove("pressed");
   },100);
}
document.addEventListener("keypress",function(event){
  playSound(event.key);
  buttonAnimate(event.key);
})