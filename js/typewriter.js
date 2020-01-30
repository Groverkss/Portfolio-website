let greetings = ["Hello!", "नमस्ते!", "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ!"];
let currGreeting = 0;
let currChar = 0;
let isDeleting = false;
let typeText = "";

function type() {
  if (isDeleting == true) {
    // Delete stuff
    typeText = greetings[currGreeting].substr(0, typeText.length - 1);
  } else {
    // Enter stuff
    typeText = greetings[currGreeting].substr(0, typeText.length + 1);
  }

  document.getElementById("typewriter").innerHTML = typeText;
  //console.log(typeText);

  let typeSpeed = 200;

  // Change typespeed if deleting
  if (isDeleting == true) {
    typeSpeed /= 2;
  }

  if (!isDeleting && typeText == greetings[currGreeting]) {
    isDeleting = true;
    typeSpeed = 2000;
  } else if (isDeleting && typeText == "") {
    isDeleting = false;
    currGreeting = (currGreeting + 1) % 3;
    if (currGreeting == 0) {
      document.getElementById("typewriter").style.fontFamily = ""
    } else if (currGreeting == 1) {
      document.getElementById("typewriter").style.fontFamily = "'Teko', sans-serif";
      document.getElementById("typewriter").style.fontWeight = "bold";

    } else {
      document.getElementById("typewriter").style.fontFamily = "'Baloo Paaji', cursive";
    }
  }
  
  setTimeout(function() {type()}, typeSpeed);
}

document.addEventListener('DOMContentLoaded', type());