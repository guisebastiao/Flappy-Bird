let points = 0;

const colision = () =>{
    if(player.posX + player.width > tubes01.posXtop && player.posX + player.width > tubes01.posXbottom && player.posX < tubes01.posXtop + tubes01.width && player.posX < tubes01.posXbottom + tubes01.width){
        if(player.posY < tubes01.posYtop + tubes01.height || player.posY + player.height > tubes01.posYbottom){
            soundHit();
            gameOver = true;
        }
    }

    if(player.posX + player.width > tubes02.posXtop && player.posX + player.width > tubes02.posXbottom && player.posX < tubes02.posXtop + tubes02.width && player.posX < tubes02.posXbottom + tubes02.width){
        if(player.posY < tubes02.posYtop + tubes02.height || player.posY + player.height > tubes02.posYbottom){
            soundHit();
            gameOver = true;
        }
    }

    if(player.posY < 0 || player.posY + player.height > canvasHeight){
        soundHit();
        gameOver = true; 
    }

    if(player.posX === tubes01.posXtop + tubes01.width || player.posX === tubes02.posXtop + tubes02.width){
        soundPoint();
        points++
    }
}
