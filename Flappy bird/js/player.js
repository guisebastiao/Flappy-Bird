let fps = 0;
let frames = 0;
let valueGravity = 1.01;
let valueJump = 0;

class Player {
    constructor(sPosX, sPosY, sWidth, sHeight, posX, posY, width, height, isJump){
        this.sPosY = sPosY;
        this.sPosX = sPosX;
        this.sHeight = sHeight;
        this.sWidth = sWidth;
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.isJump = isJump;
    }

    draw(){
        fps++
        if(fps % 20 === 0) frames >= 2 ? frames = 0 : frames++
        if(frames === 0) ctx.drawImage(sprite, this.sPosX, this.sPosY, this.sWidth, this.sHeight, this.posX, this.posY, this.width, this.height);
        if(frames === 1) ctx.drawImage(sprite, this.sPosX + 281, this.sPosY, this.sWidth, this.sHeight, this.posX, this.posY, this.width, this.height);
        if(frames === 2) ctx.drawImage(sprite, this.sPosX + 560, this.sPosY, this.sWidth, this.sHeight, this.posX, this.posY, this.width, this.height);
    }

    gravity(){
        valueGravity += valueGravity * 0.018;
        this.posY += valueGravity;
    }

    jump(){
        if(this.isJump === true){
            valueJump += 1;
            this.posY -= valueJump;
        }
    }

    punctuation(){
        gameFont.load().then(font => {
            document.fonts.add(font);
            ctx.font = `30px "${font.family}"`;
            ctx.fillStyle = "#fff";
            ctx.textAlign = "right";
            ctx.fillText(`Score: ${points}`, canvasWidth -50, 50);
        });
    }

    update(){
        this.draw();
        this.gravity();
        this.jump();
        this.punctuation();
    }
}

const player = new Player(30, 4910, 170, 120, 80, 120, 56, 40, false); 