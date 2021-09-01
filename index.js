numberOfButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",e => {
    let clickedButton = e.target.innerHTML;
    playSound(clickedButton);
    addAnimation(clickedButton);
  });
}

document.addEventListener("keypress", e => {
  let pressed = e.key;
  playSound(pressed);
  addAnimation(pressed);
});

function playSound(key) {
  switch (key) {
    case "w":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
    case "s":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
    case "d":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    case "j":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    case "k":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    case "l":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    default:
      console.log("Key not defined");
      break;
  }
}

function addAnimation(char) {
  document.querySelector(`.${char}`).classList.add("pressed");
  setInterval(() => {
    document.querySelector(`.${char}`).classList.remove("pressed");
  }, 100);
}
