class L1 extends Phaser.Scene {
    constructor() {
        super("L1")
        this.ballv = [0, 0]
        this.timer = 0
    }
    preload() 
    {
        this.load.image('ball', "ball.png")
        this.load.image('obs', "obstacle.png")
    }

    create() {
        this.ball = this.physics.add.image(400, 300, 'ball');
        this.ball.setCollideWorldBounds(true)
        this.obstacle = this.physics.add.image(800, Math.random() * 600, 'obs');
        this.obstacle.setAngle(270)
        this.obs = [this.obstacle]
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(this.ball, this.obs, () => {
            this.scene.start("M1", { timer : this.timer })
        });
    }

    update ()
    {
        if (this.cursorKeys.left.isDown)
        {
            this.ballv[1] = Math.max(this.ballv[1] - 0.3, -10)
        }
        if (this.cursorKeys.right.isDown)
        {
            this.ballv[1] = Math.min(this.ballv[1] + 0.3, 10)
        }

        if (this.cursorKeys.up.isDown)
        {
            this.ballv[0] = Math.max(this.ballv[0] - 0.3, -10)
        }
        if (this.cursorKeys.down.isDown)
        {
            this.ballv[0] = Math.min(this.ballv[0] + 0.3, 10)
        }
        this.timer += 1
        this.ball.x += this.ballv[1];
        this.ball.y += this.ballv[0];
        if (this.timer % 500 == 0) {
            this.obstacle = this.physics.add.image(800, Math.random() * 600, 'obs');
            this.obstacle.setAngle(270);
            this.obs.push(this.obstacle);
        }
        this.obstas()
    }
    
    obstas() {
        for (let ctr = 0; ctr < this.obs.length; ctr++) {
            this.obs[ctr].setVelocity(Math.max(-500, -100 - this.timer/10), 0);
            if (this.obs[ctr].x < -50) {
                this.obs[ctr].x = (850);
                this.obs[ctr].y = Math.random()*600;
            }
        }
    }
}

class L2 extends Phaser.Scene {
    constructor() {
        super("L2");
        this.ballv = [0, 0]
        this.orbv = [0, 0]
        this.timer = 0
    }
    preload() 
    {
        this.load.image('ball', "ball.png")
        this.load.image('orb', "orb.png")
        this.load.image('obs', "obstacle.png")
    }

    create() {
        this.ball = this.physics.add.image(400, 300, 'ball');
        this.ball.setCollideWorldBounds(true)
        this.orb = this.physics.add.image(200, 300, 'orb');
        this.orb.setCollideWorldBounds(true)
        this.obstacle = this.physics.add.image(800, Math.random() * 600, 'obs');
        this.obstacle.setAngle(270)
        this.obs = [this.obstacle]
        this.cursorKeys = this.input.keyboard.addKeys("W,A,S,D,UP,LEFT,DOWN,RIGHT");
        this.physics.add.collider(this.ball, this.obs, () => {
            this.scene.start("M2", { timer : this.timer })
        });
        this.physics.add.collider(this.orb, this.obs, () => {
            this.scene.start("M2", { timer : this.timer })
        });
    }

    update ()
    {
        if (this.cursorKeys.LEFT.isDown)
        {
            this.ballv[1] = Math.max(this.ballv[1] - 0.3, -10)
        }
        if (this.cursorKeys.RIGHT.isDown)
        {
            this.ballv[1] = Math.min(this.ballv[1] + 0.3, 10)
        }

        if (this.cursorKeys.UP.isDown)
        {
            this.ballv[0] = Math.max(this.ballv[0] - 0.3, -10)
        }
        if (this.cursorKeys.DOWN.isDown)
        {
            this.ballv[0] = Math.min(this.ballv[0] + 0.3, 10)
        }
        if (this.cursorKeys.A.isDown)
        {
            this.orbv[1] = Math.max(this.orbv[1] - 0.3, -10)
        }
        if (this.cursorKeys.D.isDown)
        {
            this.orbv[1] = Math.min(this.orbv[1] + 0.3, 10)
        }

        if (this.cursorKeys.W.isDown)
        {
            this.orbv[0] = Math.max(this.orbv[0] - 0.3, -10)
        }
        if (this.cursorKeys.S.isDown)
        {
            this.orbv[0] = Math.min(this.orbv[0] + 0.3, 10)
        }
        this.timer += 1
        this.ball.x += this.ballv[1];
        this.ball.y += this.ballv[0];
        this.orb.x += this.orbv[1];
        this.orb.y += this.orbv[0];
        if (this.timer % 500 == 0) {
            this.obstacle = this.physics.add.image(800, Math.random() * 600, 'obs');
            this.obstacle.setAngle(270);
            this.obs.push(this.obstacle);
        }
        this.obstas()
    }
    
    obstas() {
        for (let ctr = 0; ctr < this.obs.length; ctr++) {
            this.obs[ctr].setVelocity(Math.max(-500, -100 - this.timer/10), 0);
            if (this.obs[ctr].x < -50) {
                this.obs[ctr].x = (850);
                this.obs[ctr].y = Math.random()*600;
            }
        }
    }
}

class L3 extends Phaser.Scene {
    constructor() {
        super("L3");
        this.ballv = [0, 0]
        this.orbv = [0, 0]
        this.timer = 0
    }
    preload() 
    {
        this.load.image('ball', "ball.png")
        this.load.image('orb', "orb.png")
        this.load.image('obs', "obstacle.png")
    }

    create() {
        this.ball = this.physics.add.image(400, 300, 'ball');
        this.ball.setCollideWorldBounds(true)
        this.orb = this.physics.add.image(200, 300, 'orb');
        this.orb.setCollideWorldBounds(true)
        this.obstacle = this.physics.add.image(800, Math.random() * 600, 'obs');
        this.obstacle.setAngle(270)
        this.obs = [this.obstacle]
        this.cursorKeys = this.input.keyboard.addKeys("W,A,S,D,UP,LEFT,DOWN,RIGHT");
        this.physics.add.collider(this.ball, this.obs, () => {
            this.scene.start("M3", { timer : this.timer })
        });
        this.physics.add.collider(this.orb, this.obs, () => {
            this.scene.start("M3", { timer : this.timer })
        });
    }

    update ()
    {
        if (this.cursorKeys.LEFT.isDown)
        {
            this.ballv[1] = Math.max(this.ballv[1] - 0.3, -10)
        }
        if (this.cursorKeys.RIGHT.isDown)
        {
            this.ballv[1] = Math.min(this.ballv[1] + 0.3, 10)
        }

        if (this.cursorKeys.UP.isDown)
        {
            this.ballv[0] = Math.max(this.ballv[0] - 0.3, -10)
        }
        if (this.cursorKeys.DOWN.isDown)
        {
            this.ballv[0] = Math.min(this.ballv[0] + 0.3, 10)
        }
        if (this.cursorKeys.A.isDown)
        {
            this.orbv[1] = Math.max(this.orbv[1] - 0.3, -10)
        }
        if (this.cursorKeys.D.isDown)
        {
            this.orbv[1] = Math.min(this.orbv[1] + 0.3, 10)
        }

        if (this.cursorKeys.W.isDown)
        {
            this.orbv[0] = Math.max(this.orbv[0] - 0.3, -10)
        }
        if (this.cursorKeys.S.isDown)
        {
            this.orbv[0] = Math.min(this.orbv[0] + 0.3, 10)
        }
        this.timer += 1
        this.ball.x += this.ballv[1];
        this.ball.y += this.ballv[0];
        this.orb.x += this.orbv[1];
        this.orb.y += this.orbv[0];
        if (this.timer % 500 == 0) {
            this.obstacle = this.physics.add.image(800, Math.random() * 600, 'obs');
            this.obstacle.setAngle(270);
            this.obs.push(this.obstacle);
        }
        this.obstas()
    }
    
    obstas() {
        for (let ctr = 0; ctr < this.obs.length; ctr++) {
            this.obs[ctr].setVelocity(Math.max(-500, -100 - this.timer/10), Math.sin(this.timer / 10) * 250);
            if (this.obs[ctr].x < -50) {
                this.obs[ctr].x = (850);
                this.obs[ctr].y = Math.random()*600;
            }
        }
    }
}

class M1 extends Phaser.Scene {
    init (data)
    {
        this.timer = data.timer;
    }
    constructor() {
        super("M1")
    }

    create() {
        this.add.text(380, 100, "LEVEL 1")
        this.add.text(380, 120, "GAME OVER")
        this.add.text(380, 140, "Time: " + Math.round(this.timer / 60 * 100) / 100 + " seconds")
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('L2'));
        });
    }
}

class M2 extends Phaser.Scene {
    init (data)
    {
        this.timer = data.timer;
    }
    constructor() {
        super("M2")
    }

    create() {
        this.add.text(380, 100, "LEVEL 2")
        this.add.text(380, 120, "GAME OVER")
        this.add.text(380, 140, "Time: " + Math.round(this.timer / 60 * 100) / 100 + " seconds")
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('L3'));
        });
    }
}

class M3 extends Phaser.Scene {
    init (data)
    {
        this.timer = data.timer;
    }
    constructor() {
        super("M3")
    }

    create() {
        this.add.text(380, 100, "LEVEL 3")
        this.add.text(380, 120, "GAME OVER")
        this.add.text(380, 140, "Time: " + Math.round(this.timer / 60 * 100) / 100 + " seconds")
    }
}
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1b1464',
    parent: 'phaser-example',
    physics: {
        default: 'arcade'
    },
    scene: [L1, L2, L3, M1, M2, M3]
};

const game = new Phaser.Game(config);