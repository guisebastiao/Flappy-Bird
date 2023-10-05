class Background {
    constructor(sPosX, sPosY, sWidth, sHeight, posX, posY){
        this.sPosY = sPosY;
        this.sPosX = sPosX;
        this.sHeight = sHeight;
        this.sWidth = sWidth;
        this.posX = posX;
        this.posY = posY;
    }

    draw(){
        const width = 236.25;
        const length = Math.floor(canvasWidth / width) + 1;

        for(let i = 0; i < length; i++){
            this.posX = width * i;
            ctx.drawImage(sprite, this.sPosX, this.sPosY, this.sWidth, this.sHeight, this.posX, this.posY, width, canvasHeight);
        }
    }

    update(){
        this.draw();
    }
}

class Ground {
    constructor(sPosX, sPosY, sWidth, sHeight, posX, posY){
        this.sPosY = sPosY;
        this.sPosX = sPosX;
        this.sHeight = sHeight;
        this.sWidth = sWidth;
        this.posX = posX;
        this.posY = posY;
    }

    draw(){
        const width = 240;
        const height = 80;
        this.posY = canvasHeight - height;
        const length = Math.floor(canvasWidth / width) + 1;

        for(let i = 0; i < length; i++){
            this.posX = width * i;
            ctx.drawImage(sprite, this.sPosX, this.sPosY, this.sWidth, this.sHeight, this.posX, this.posY, width, height);
        }
    }

    update(){
        this.draw();
    }
}

const background = new Background(0, 0, 1440, 2560, 0, 0);
const ground = new Ground(2920, 0, 1680, 560, 0, 0);