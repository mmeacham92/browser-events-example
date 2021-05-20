let image = document.querySelector("#fruit-image");

// whenever the document element experiences a keydown event, it will run the code inside the test function
document.addEventListener("keydown", test);

// this is only the definition of the test function - nothing is actually happening here until a keydown happens to the document (which is the entire webpage here)
function test(event) {
  console.log(event);
  // ^^^ this is our entire event object - but we don't need the entire thing. We only want the 'code' which will let us know which key was pressed. Lets grab the code and put it into a variable.
  let code = event.code;
  console.log(code);

  // the image  cannot be seen because of its current styling, so lets change the display property to 'block'
  image.style.display = "block";

  // if either A, B, K, or W are pressed, we will change the value of the src attribute on our image element. To start, the src is './' - this results in a broken image. If any of these keys are pressed, a valid value will be assigned to src and an image will appear on the page.
  let value = '';
  if (code === "KeyA") {
    value = "./images/apple.png"
  } else if (code === "KeyB") {
    value = "./images/apple.png"
  } else if (code === "KeyK") {
    value = "./images/apple.png"
  } else if (code === "KeyW") {
    value = "./images/apple.png"
  }
  image.setAttribute('src', value);
}
