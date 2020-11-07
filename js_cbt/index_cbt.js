//globals//
const config ={
    parent: "game",
    width: 600,
    height: 400,
    backgroundColor: '#3498db',
    physics:{
        default: 'arcade',
    },
    scene:{
        preload,
        create,
        update
    },
    // plugin:{

    // }
            
}
var game = new Phaser.Game(config);
let player,coin;
let SCREEN;
let ScreenText,ScreenText2;
let pointer;
let tapPos;
let joystick;

//globals//


//Scene

function preload(){ 
    this.load.image('player','../assets/images/player.png');
    this.load.image('coin','../assets/images/coin.png');
     var url;
     url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js';
    this.load.plugin('rexvirtualjoystickplugin', url, true);



}
function create(){
    
    SCREEN = this.physics.world.bounds;
    player = this.physics.add.sprite(100,100,'player');
    player.setCollideWorldBounds(true);
    coin = this.physics.add.sprite(300,300,'coin');
    ScreenText = this.add.text(20,20,'hi',{fontSize: 50});
    // ScreenText2 = this.add.text(20,config.height*0.80,'hi',{fontSize: 30});

    // // Add the Virtualjoystick plugin to the game
    joystick = this.plugins.get('rexvirtualjoystickplugin').add(this, {
        x: config.width*0.80,
        y: config.height*0.80,
        radius: 50,
        base: this.add.circle(0, 0, 50, 0x888888),
        thumb: this.add.circle(0, 0, 25, 0xcccccc),
        dir: '8dir',   // 'up&down'|0|'left&right'|1|'4dir'|2|'8dir'|3
        forceMin: 16,
        enable: true
    });    
   

 }
function update(){
    ScreenText.setText(`X: ${joystick.pointerX} Y: ${joystick.pointerY}`);
    // ScreenText2.setText(`force: ${joystick.force}`);

    var pos = finalPos(player.x,player.y,joystick.forceX,joystick.forceY);
    player.setPosition(pos.x,pos.y);

    //overlap

    // if(this.physics.add.overlap(this.player,this.coin,()=>{},null,this)){
        // console.log('ol');
    // }

    // console.log(checkOverlap(this.coin,this.player));



}

function checkOverlap(spriteA,spriteB){
    // return Phaser.physics.add.overlap(spriteA,spriteB);/

}

function finalPos(initX,initY,forceX,forceY){
    let finalPos={x:0,y:0};
    var newX = initX+(forceX/50);
    var newY = initY+(forceY/50);
    finalPos={x:newX,y:newY};
    return finalPos;
}




//GAME 

