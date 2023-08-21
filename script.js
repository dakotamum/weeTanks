window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 2000;
    canvas.height = 2000;
    let previousTime = this.performance.now();

    class Player {
        constructor(game) {
            this.game = game;
            this.width = 100;
            this.height = 100;
            this.velocity = 0.5;
            this.posX = parseFloat(500.0);
            this.posY = parseFloat(500.0);
            this.keysPressed = {};
            this.angle = 0.0;

            // event listeners
            window.addEventListener('keydown', (event) => {
                const key = event.key;
                this.keysPressed[key] = true;
            });
            window.addEventListener('keyup', (event) => {
                const key = event.key;
                this.keysPressed[key] = false;
            });
        }
        draw(context){
            context.save();
            context.translate(this.posX + this.width/2, this.posY + this.height/2);
            context.rotate(-this.angle * Math.PI / 180.0);
            context.translate(-this.posX - this.width/2, -this.posY - this.height/2);

            context.fillStyle = "#7b4567";
            context.fillRect(this.posX, this.posY, this.width, this.height);

            const borderWidth = 20;
            context.fillStyle = "#000000";

            // Draw top border
            context.fillRect(this.posX, this.posY, this.width, borderWidth);

            // Draw bottom border
            context.fillRect(this.posX, this.posY + this.height - borderWidth, this.width, borderWidth);

            context.restore();
        }
        update(elapsedTime) {
            tank_movement_update(this, elapsedTime);
        }
    }

    class Game {
        constructor(canvas){
            this.canvas = canvas;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.player = new Player(this);

        }
        render(context) {
            this.player.draw(context);
        }
    }

    const game = new Game(canvas);
    game.render(ctx);
    function animate(time){
        let elapsedTime = time - previousTime;


        ctx.save();
        // ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.restore();


        previousTime = time;
        game.player.update(elapsedTime);
        game.render(ctx);
        window.requestAnimationFrame(animate);
    }
    animate();
});