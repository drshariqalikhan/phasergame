
//globals//

function finalPos(initX,initY,forceX,forceY){
    let finalPos={x:0,y:0};
    var newX = initX+(forceX/50);
    var newY = initY+(forceY/50);
    finalPos={x:newX,y:newY};
    return finalPos;
}


//globals//
//https://www.youtube.com/watch?v=tST1IxVnWLY&list=PLlultXOnQ04Qj5vm4Cf8l2zlFg7_4A7i8


//



//Boot Scene

//preload Scene


//menu Scene





//Scene
class MainScene extends Phaser.Scene{
    



 preload(){ 
    this.load.image('player','../assets/images/player.png');
    this.load.image('playerf','../assets/images/player.png');
    this.load.image('coin','../assets/images/coin.png');
     var url;
     url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js';
    this.load.plugin('rexvirtualjoystickplugin', url, true);

    this.load.plugin('rexmovetoplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexmovetoplugin.min.js', true);

}
 create(){
    
    this.scale.lockOrientation('landscape');
    this.Sc
    this.score = 0;
    this.speed = 10;
    // this.SCREEN = this.physics.world.bounds;
    // this.scale.lockOrientation('landscape');
    this.player = this.physics.add.sprite(100,100,'player');

   

    this.player.setCollideWorldBounds(true);

   this.coin = this.physics.add.sprite(config.width/2,config.height/2,'coin');
    this.ScreenText = this.add.text(20,20,'hi',{fontSize: 50});

    // // Add the Virtualjoystick plugin to the game
    this.joystick = this.plugins.get('rexvirtualjoystickplugin').add(this, {
        x: config.width*0.80,
        y: config.height*0.80,
        radius: 50,
        base: this.add.circle(0, 0, 50, 0x888888),
        thumb: this.add.circle(0, 0, 25, 0xcccccc),
        dir: '8dir',   // 'up&down'|0|'left&right'|1|'4dir'|2|'8dir'|3
        forceMin: 16,
        enable: true
    });    

    this.ball = this.add.circle(400,100,20,0xffffff);
    this.ball.moveTo = this.plugins.get('rexmovetoplugin').add(this.ball,{
        speed: this.speed,
        rotateToTarget: true
    }).on('complete',()=>{ 
        // // Display word "Game Over" at center of the screen game
        //     let gameOverText = this.add.text(config.width / 2, config.height / 2, 'GAME OVER', { fontSize: '32px', fill: '#fff' });

        //     // Set z-index just in case your text show behind the background.
        //     gameOverText.setDepth(1);
    });


 }
 update(){
  
    var pos = finalPos(this.player.x,this.player.y,this.joystick.forceX,this.joystick.forceY);
    this.player.setPosition(pos.x,pos.y);
    this.ball.moveTo.setSpeed(this.speed*(this.score));
    this.ball.moveTo.moveTo(this.player.x,this.player.y);
   
    if(this.physics.overlap(this.player,this.coin)){
        console.log('hit');
        this.score ++;
        this.coin.x = Phaser.Math.Between(10, config.width*0.7);
        this.coin.y = Phaser.Math.Between(10, config.height*0.7);
        
    }

    this.ScreenText.setText(`SCORE: ${this.score}`);

}



};
//GAME 
const config ={
    parent: "game",
    width: window.innerWidth * window.devicePixelRatio,
    height: window.innerHeight * window.devicePixelRatio,
    backgroundColor: '#3498db',
    physics:{
        default: 'arcade',
    },
    scene: MainScene,
    scale: {
        mode: Phaser.Scale.FIT,
    }
    
            
}
var game = new Phaser.Game(config);
