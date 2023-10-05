const screenGameOver = () => {
    const widthGameOver = 282;
    const heightGameOver = 142;
    const posXgameOver = canvasWidth / 2 - widthGameOver / 2;
    const posYgameOver = canvasHeight / 2 - heightGameOver / 2;
    ctx.drawImage(sprite, 30, 2590, 1130, 570, posXgameOver, posYgameOver, widthGameOver, heightGameOver);
}

const medals = () => {
    if(points >= 0 && points <= 10){
        medal(1210, 2580);
    } else if(points > 10 && points <= 30){
        medal(1120, 4530);
    } else if(points > 30 && points <= 50){
        medal(1210, 2820);
    } else if(points > 50){
        medal(1120, 4770);
    }
}

const drawPoints = () => {
    gameFont.load().then(font => {
        document.fonts.add(font);
        ctx.font = `25px "${font.family}"`;
        ctx.fillStyle = "#f9795d";
        ctx.textAlign = "center";
        ctx.fillText(`${points}`, 488, 218);
    });

    gameFont.load().then(font => {
        document.fonts.add(font);
        ctx.font = `25px "${font.family}"`;
        ctx.fillStyle = "#f9795d";
        ctx.textAlign = "center";
        ctx.fillText(`${localStorage.getItem("record")}`, 492, 271);
    });
}

const messageGameOver = () => {
    ctx.drawImage(sprite, 3950, 590, 960, 210, canvasWidth / 2 - 179.5, 75, 359, 53);
}

const medal = (posX, posY) => { ctx.drawImage(sprite, posX, posY, 220, 220, 291, 211, 55, 55) }

const clickRestart = () => {
    if(gameOver === true){
        document.addEventListener("click", () => { location.reload() });
        document.addEventListener("keydown", (btn) => { if(btn.keyCode === 32) location.reload() });
    }
}
