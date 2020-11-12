//start point 

const App = function(){
    'use strict';

    this.VERSION = '0.0.1';
    this.IS_DEV = true;
}


App.prototype.start = function()
{
    'use strict';

    //Scenes
    let scenes = [];
    scenes.push(Boot);
    scenes.push(Preload);
    scenes.push(Menu);

    //Game Config
    const config ={
        type: Phaser.AUTO,
        parent: "phaser-app",
        // width : 360/2,
        // height : 640/2,
        width : 340/2,
        height : 360/2,
        backgroundColor: '#3498db',
        physics:{
            default: 'arcade',
        },
        scene: scenes,
        plxelArt : true
        
                
    }




//create game

let game = new Phaser.Game(config);

//globals
game.IS_DEV = this.IS_DEV;
game.VERSION = this.VERSION;

game.URL = '';
game.CONFIG ={
    width : config.width,
    height: config.height,
    centerX : Math.round(0.5*config.width),
    centerY : Math.round(0.5*config.height),
    tile: 16
};

//sounds

};





/////////////BOOT JS/////////////////



class Boot extends Phaser.Scene
{
    constructor()
    {
        super({key: 'Boot', active: true});
    }

    init(){

    }

    preload(){

    }

    create(){

        this.scene.start('Preload');
    }
}

/////////////BOOT JS/////////////////

/////////////PRELOAD JS/////////////////
////load assests

class Preload extends Phaser.Scene
{
    constructor()
    {
        super({key: 'Preload', active: false});
    }

    init(){

    }

    preload(){

    }

    create(){

        this.scene.start('Menu');
    }
}
/////////////PRELOAD JS/////////////////

/////////////MENU JS/////////////////

class Menu extends Phaser.Scene
{
    constructor()
    {
        super({key: 'Menu', active: false});
    }

    init(){

        this.CONFIG = this.sys.game.CONFIG;
    }

    preload(){

    }

    create(){

        this.text = this.add.text(this.CONFIG.centerX,this.CONFIG.centerY,'the menu');
        this.text.setOrigin(0.5);
    }
}
/////////////MENU JS/////////////////

//////////////////RESIZE TO MOBILE//////////////////
function resizeApp()
{
    'use strict';

    //w-h ratio
    // let game_ratio = (360/2)/(640/2);
    let game_ratio = (640/2)/(360/2);

    //div full height of browser 
    let div = document.getElementById('phaser-app');
    div.style.width = (window.innerHeight *game_ratio) +'px';
    div.style.height = window.innerHeight +'px';

    //check if DPI messes upthings
    let canvas = document.getElementById('canvas')[0];

    let dpi_w = (parseInt(div.style.width)/canvas.width);
    let dpi_h = (parseInt(div.style.height)/canvas.height);

    let height = window.innerHeight *(dpi_w/dpi_h);
    let width = height *game_ratio;

    //scale canvas 
    canvas.style.width = width +'px';
    canvas.style.height = height +'px';
    
   

}








///////////////App.js/////////////////

function runApp()
{
    let app = new App();
    app.start();
    
    //scale to devive
    try {
    window.addEventListener('resize',resizeApp);
    
    resizeApp();
    
    } catch (error) {
        console.log(`problem dude ${error}`);
        
    }
    

}

///////////////App.js/////////////////

////////////main.js/////////////

window.onload = function()
{   
    //launch 
    runApp();

};

////////////main.js/////////////