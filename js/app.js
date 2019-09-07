// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += 50 * dt * this.speed;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(){
    this.sprite = 'images/char-boy.png';

    this.x = 200;
    this.y = 320;
}
Player.prototype.update = function(dt){

}

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Moves the player depending on the keystroke
Player.prototype.handleInput = function(key){

    if(key === "up"){
        this.y -= 82;
    } else if (key === "down"){
        this.y += 82;
    } else if (key === "left"){
        this.x -= 100;
    } else if (key === "right"){
        this.x += 100;
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player();

var enemyInitPos = {    
    positionX: -75,
    positionY1: 60,
    positionY2: 143,
    positionY3: 226
}

var enemySpeeds = {
    slow: 1,
    fast: 2,
    superFast: 3
}

var allEnemies = [];
for (let i = 1; i < 210; i++) {

    if (i % 2 == 0 ) {
        allEnemies.push(new Enemy(enemyInitPos.positionX, enemyInitPos.positionY1, enemySpeeds.superFast));
    }else if (i % 3 == 0 ) {
        allEnemies.push(new Enemy(enemyInitPos.positionX, enemyInitPos.positionY2, enemySpeeds.fast));
    }else {
        allEnemies.push(new Enemy(enemyInitPos.positionX, enemyInitPos.positionY3, enemySpeeds.slow));
    }
    
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
