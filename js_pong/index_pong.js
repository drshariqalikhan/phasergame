////GLOBALS/////////
const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800, // Width of the game in pixels
    height: 640, // Height of the game in pixels
    // scale: {
    //     mode: Phaser.Scale.RESIZE,
    //     autocenter: Phaser.Scale.CENTER_BOTH,

    // },
    backgroundColor: '#3498db', // The background color (blue)
    scene: {
        preload,
        create,
        update
    },
    physics: { 
        default: 'arcade',
        arcade: {
            gravity: false,
        } 
    }, // The physics engine to use
    
  };
  
const game = new Phaser.Game(config);
let ball,player1,player2;
let SCREEN;
const initVel = Math.floor(Math.random() * 350) + 100  ;//rnd between 100 to 350
const paddleSpeed = 350;
let IsGameStarted = false;
let cursors,keys;
let p1ScoreText,p2ScoreText;
let p1score = 0;
let p2score = 0;
////GLOBALS/////////


function preload(){
    this.load.image('paddle','../assets/images/paddle.png');
    this.load.image('ball','../assets/images/ball.png');

}

function create(){
    SCREEN = this.physics.world.bounds;
    ball = this.physics.add.sprite(
        SCREEN.width/2,
        SCREEN.height/2,
        'ball'

    );

    ball.setCollideWorldBounds(true);
    ball.setBounce(1,1);

    player1 = this.physics.add.sprite(
        SCREEN.width - (ball.body.width/2 +1),
        SCREEN.height/2,
        'paddle'

    );
    player1.setCollideWorldBounds(true);

    player2 = this.physics.add.sprite(
        (ball.body.width/2 +1),
        SCREEN.height/2,
        'paddle'

    );
    player2.setCollideWorldBounds(true);

    player1.setImmovable(true);
    player2.setImmovable(true);


    //player control
    cursors = this.input.keyboard.createCursorKeys();
    keys = this.input.keyboard.addKeys({
        up:'w',
        down: 'z'

    });

    
    this.physics.add.collider(ball,player1);
    this.physics.add.collider(ball,player2);

    p1ScoreText = this.add.text(
         20,
         20,
         `p1 SCORE: 0`,
         {   
             fontSize: 50
         }
     );

    p2ScoreText = this.add.text(
        SCREEN.width-350,
        20,
        `p2 SCORE: 0`,
        {   
            fontSize: 50
        }
    ); 

}

function update(){
    if(!IsGameStarted){
        ball.setVelocityX(initVel);
        ball.setVelocityY(initVel);
        IsGameStarted = true;

    }
    
    player1.body.setVelocityY(0);
    if(ball.body.VelocityY>paddleSpeed){ball.body.setVelocityY==paddleSpeed;}
    if(cursors.up.isDown){
        player1.body.setVelocityY(-paddleSpeed);
    }

    if(cursors.down.isDown){
        player1.body.setVelocityY(paddleSpeed);
    }
   
    //player2
    player2.body.setVelocityY(0);
    if(keys.up.isDown){
        player2.body.setVelocityY(-paddleSpeed);
    }

    if(keys.down.isDown){
        player2.body.setVelocityY(paddleSpeed);
    }

    //scores
    //player2 wins
    if(ball.body.x > player1.body.x){

        // console.log('player 2 wins');
        // ball.body.setVelocity(0);
        p2score++;

    }
    //player1 wins
    if(ball.body.x < player2.body.x){

        // console.log('player 1 wins');
        // ball.body.setVelocity(0);
        p1score++;



    }


  p1ScoreText.setText(`p1 SCORE: ${p1score}`);
  p2ScoreText.setText(`p2 SCORE: ${p2score}`);

}