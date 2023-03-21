var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("randomBtn");


//The getGradient function allows us to get the initial CSS linear gradient property.
function getGradient() {
	body.style.background = "linear-gradient(to right, "
	 + color1.value 
	 + ", " + color2.value + " )";

	 css.textContent = body.style.background + ";";
}

function setGradient() {
	body.style.background = "linear-gradient(to right, "
	 + color1.value 
	 + ", " + color2.value + " )";

	 css.textContent = body.style.background + ";";
}

//allows us to generates some random numbers of rgb color
function randomRgbColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return(color);
}

function setRandomGradient() {
  const randomColor1 = randomRgbColor();
  const randomColor2 = randomRgbColor();
  body.style.background =
    "linear-gradient(to right, " + randomColor1 + "," + randomColor2 + ")";

    css.textContent = body.style.background + ";";
}



color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomBtn.addEventListener("click", setRandomGradient);
getGradient();