const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const sprite = new Image();
sprite.src = "./img/sprite.png";

const canvasWidth = 800;
const canvasHeight = 460;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

const desiredFPS = 120;
const frameTime = 1000 / desiredFPS;
let prevTime = performance.now();
let lag = 0;

const gameFont = new FontFace("VT323", "url(./font/VT323.ttf)");
let gameOver = false;
let lobby = true;

const GameLoop = () => {
    const currentTime = performance.now();
    const elapsed = currentTime - prevTime;
    prevTime = currentTime;
    lag += elapsed;

    while(lag >= frameTime && gameOver === false){

        if(lobby === true){
            background.update();
            ground.update();
            imageLobby();
            getReady();
        }

        if(lobby === false && gameOver === false){
            background.update();
            ground.update();
            tubes01.update();
            tubes02.update();
            player.update();
            colision();
        }

        if(gameOver === true){
            if(localStorage.getItem("record") === null) localStorage.setItem("record", points);
            if(localStorage.getItem("record") < points) localStorage.setItem("record", points);

            setTimeout(() => {
                background.update();
                ground.update();
                screenGameOver();
                medals();
                drawPoints();
                messageGameOver();
                clickRestart();
            }, 300);
        }

        lag -= frameTime;
    }

    window.requestAnimationFrame(GameLoop);
}

GameLoop();