class Game {
    constructor(){
        this.backgroundImages
        this.obstacles = []
        this.image 
    }

    draw(){
        clear()
        // if (frameCount % 300 === 0){
        //     this.obstacles.push(new Obstacle(this.shipImage))
        // }
        this.obstacles.forEach(function (obstacle){
            obstacle.draw()
        })
    }

    preload(){
        this.backgroundImages = loadImage('/src/sea-land.jpeg')
        this.shipImage = loadImage('/src/viking-transparent.png')
    }
}


class Obstacle {
    constructor(image){
        this.image = image
        this.x = (Math.random() * 1080) /1.2
        this.y = 0
        this.width = 150
        this.height = 150
    }

    draw(){
        this.y += 1
        image(this.image, this.x, this.y, this.width, this.height)
    }
}

const game = new Game() // create a game

// this is used to load the game assets
function preload() {
    game.preload()
}

function setup() {
    createCanvas(1080, 600)
}

function draw() {
    game.draw()
}
