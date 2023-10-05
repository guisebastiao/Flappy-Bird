const hit = new Audio();
hit.src = "./audio/hit.wav";
const jump = new Audio();
jump.src = "./audio/jump.wav";
const point = new Audio();
point.src = "./audio/point.wav";

const soundHit = () => {
    hit.volume = 0.4;
    hit.play();
}

const soundJump = () => {
    jump.volume = 0.1;
    jump.play();
}

const soundPoint = () => {
    point.volume = 0.3;
    point.play();
}