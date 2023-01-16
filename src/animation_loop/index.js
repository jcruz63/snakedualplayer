const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
let secondsPassed = 0;
let oldTimeStamp = 0;
let movingSpeed = 50;


let x = 0;
let y = 0;



const onStart = () => {
    draw();
    window.requestAnimationFrame(gameLoop);
}

const onStop = () => { }

const update = (delta) => {
    x += movingSpeed * delta;
    y += movingSpeed * delta;
}

const draw = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'black';
    context.fillRect(x, y, 10, 10);
}

const gameLoop = (delta) => {
    console.log(delta);
    // secondsPassed = (delta - oldTimeStamp) / 1000;
    // oldTimeStamp = delta;
    //
    // update(secondsPassed);
    // draw();

    window.requestAnimationFrame(gameLoop);
}

window.onload = draw;
