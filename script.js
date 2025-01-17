let playerState = 'idle'
const dropdown = document.getElementById("animations")
dropdown.addEventListener("change", function(e){
    playerState = e.target.value;
})

const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

// SETTING UP PLAYER

const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600 

// FIRST IMAGE

const playerImage = new Image();
playerImage.src = 'dog-character.png';
const spriteWidth = 575;
const spriteHeight = 525;

let gameFrame = 0;
const staggerFrame = 5;
const spriteAnimamitons = []
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },

    {
        name: 'jump',
        frames: 7,
    },

    {
        name: 'fall',
        frames: 7,
    },

    {
        name: 'run',
        frames: 9,
    },

    {
        name: 'dizzy',
        frames: 11,
    },

    {
        name: 'sit',
        frames: 5,
    },

    {
        name: 'roll',
        frames: 7,
    },

    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'gethit',
        frames: 4,
    },
]
animationStates.forEach((state, index) => {
    let frames = {
        loc: []
    }
    for (let j = 0; j < state.frames; j++) {
        let positionX = j * spriteWidth
        let positionY = index * spriteHeight
        frames.loc.push({x: positionX, y: positionY})
    }
    spriteAnimamitons[state.name] = frames
})
console.log(spriteAnimamitons)

  
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    let position = Math.floor(gameFrame/staggerFrame) % spriteAnimamitons[playerState].loc.length
    let frameX = spriteWidth * position;
    let frameY = spriteAnimamitons[playerState].loc[position].y;

    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    
    gameFrame++;
    requestAnimationFrame(animate);
    
};
animate();