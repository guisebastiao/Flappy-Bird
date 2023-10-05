const imageLobby = () => {
    const widthImageLobby = 190;
    const heightImageLobby = 163;
    const posXimageLobby = (canvasWidth / 2) - (widthImageLobby / 2);
    const posYimageLobby = (canvasHeight / 2) - (heightImageLobby / 2);
    ctx.drawImage(sprite, 2920, 910, 570, 490, posXimageLobby, posYimageLobby, widthImageLobby, heightImageLobby);
}

const getReady = () => {
    const widthGameReady = 184;
    const heightGameReady = 50;
    const posXGameReady = (canvasWidth / 2) - (widthGameReady / 2);
    const posYGameReady = 65;
    ctx.drawImage(sprite, 2950, 590, 920, 250, posXGameReady, posYGameReady, widthGameReady, heightGameReady);
}

const clickInit = () => {
    lobby = false;
}

document.addEventListener("click", clickInit);
document.addEventListener("keydown", (btn) => { if(btn.keyCode === 32) clickInit() });