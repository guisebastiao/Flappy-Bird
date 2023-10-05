const jumpTime = 100;

document.addEventListener("keydown", (key) => {
    if(key.keyCode === 32) jumping();
});

document.addEventListener("click", () => { jumping() });

const jumping = () => {
    if(gameOver === false){
        player.isJump = true;
        soundJump();
        setTimeout(() => { player.isJump = false, valueGravity = 1.01, valueJump = 0 }, jumpTime);
    }
}