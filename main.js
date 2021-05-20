let image = document.querySelector('#fruit-image');


document.addEventListener('keydown', test);

function test(event) {
    let code = event.code;
    console.log(code);
    image.style.display = 'block';
    
    if (code === 'KeyA') {
        image.setAttribute('src', './images/apple.png');
    } else if (code === 'KeyB') {
        image.setAttribute('src', './images/banana.jpg');
    } else if (code === 'KeyK') {
        image.setAttribute('src', './images/kiwi.png');
    } else if (code === 'KeyW') {
        image.setAttribute('src', './images/watermelon.jpg');
    }
}


