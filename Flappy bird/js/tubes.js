const space = 140;

class Tubes {
    constructor(sPosXtop, sPosYtop, sPosXbottom, sPosYbottom, sWidth, sHeight, posXtop, posYtop, posXbottom, posYbottom, width, heigth, positonRandom){
        this.sPosXtop = sPosXtop;
        this.sPosYtop = sPosYtop;
        this.sPosXbottom = sPosXbottom;
        this.sPosYbottom = sPosYbottom;
        this.sWidth = sWidth;
        this.sHeight = sHeight;
        this.posXtop = posXtop;
        this.posYtop = posYtop;
        this.posXbottom = posXbottom;
        this.posYbottom = posYbottom;
        this.width = width;
        this.height = heigth;
        this.positonRandom = positonRandom;
    }

    randomPosition(){
        let operator;
        const random = Math.random() * 2 - 1;
        random > 0 ? operator = 1 : operator = -1;
        const pos = Math.floor(Math.random() * 80);
        this.positonRandom = operator * pos;
        this.posYtop += this.positonRandom;
        this.posYbottom += this.positonRandom;
    }

    positionTubes(){
        this.posXtop -= 1;
        this.posXbottom -= 1;

        if(this.posXbottom <= -this.width && this.posXtop <= -this.width){
            this.posXtop = canvasWidth + this.width;
            this.posXbottom = canvasWidth + this.width;
            this.randomPosition();
        }
    }

    draw(){
        ctx.drawImage(sprite, this.sPosXtop, this.sPosYtop, this.sWidth, this.sHeight, this.posXtop, this.posYtop, this.width, this.height);
        ctx.drawImage(sprite, this.sPosXbottom, this.sPosYbottom, this.sWidth, this.sHeight, this.posXbottom, this.posYbottom, this.width, this.height);
    }

    update(){
        this.draw();
        this.positionTubes();
    }
}

const sortNumber = () => { return Math.floor(Math.random() * 100) }
const posTop = (canvasHeight / 2) - (space / 2);
const posBottom = (canvasHeight / 2) + (space / 2);

const tubes01 = new Tubes(560, 3230, 840, 3230, 260, 1600, canvasWidth + 65, canvasHeight / 2 - 400 - space / 2, canvasWidth + 65, canvasHeight / 2 + space / 2, 65, 400, 0);
const tubes02 = new Tubes(560, 3230, 840, 3230, 260, 1600, canvasWidth / 2 + 32, canvasHeight / 2 - 400 - space / 2, canvasWidth / 2 + 65 / 2, canvasHeight / 2 + space / 2, 65, 400, 0);