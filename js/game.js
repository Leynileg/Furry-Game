import {Furry} from './furry';

import {Coin} from './coin';
var Game = function() {
    this.board = document.querySelectorAll("#board div");
    this.section = document.querySelector("#board");
    this.over = document.querySelector("#over");
    this.tablePoints = document.querySelector("#score");
    
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;
    var self = this;
    
    this.index = function(x,y) {
        return x + (y * 10);
    }
    
    this.showFurry = function() {
        this.hideVisibleFurry();
        this.board[ this.index(this.furry.x,this.furry.y) ].classList.add('furry');
        
    }
    
    this.showCoin = function() {
        this.board[ this.index(this.coin.x,this.coin.y) ].classList.add('coin');
    }
    
    this.hideVisibleFurry = function() {
        var divs = document.querySelector('.furry');
        if (divs != null) {
             divs.classList.remove('furry');
        }
        
    }
       
    this.moveFurry = function() {
        if(this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
        } 
        else if (this.furry.direction === "left") {
            this.furry.x = this.furry.x - 1;
        }
        else if (this.furry.direction === "top") {
            this.furry.y = this.furry.y + 1;
        }
        else if (this.furry.direction === "down") {
            this.furry.y = this.furry.y - 1;
        }
        this.gameOver();
        this.showFurry();
        this.checkCoinCollision();
    }
    
    this.startGame = function() {
        this.idSetInterval = setInterval(function() {
            self.moveFurry();
        },250)
    }
    
    this.turnFurry = function(event) {
        switch (event.which) {
            case 37:
                this.furry.direction = 'left';
                break;   
            case 38:
                this.furry.direction = 'down';
                break;
            case 39:
                this.furry.direction = 'right';
                break;   
            case 40:
                this.furry.direction = 'top';
        }
    }
    
    this.checkCoinCollision = function() {
        if ((this.furry.x === this.coin.x) && (this.furry.y === this.coin.y)) {
            this.score++;
            var hideCoin = document.querySelector(".coin");
            hideCoin.classList.remove("coin");
            self.coin = new Coin();
            self.showCoin();
            var points = document.querySelectorAll(".points");
            points[0].innerText = this.score;
            points[1].innerText = this.score;
        }   
    }
    
    this.gameOver = function() {
        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
            clearInterval(this.idSetInterval);
            this.hideVisibleFurry();
            
            this.tablePoints.classList.add("invisible");
            this.section.classList.add("invisible");
            this.over.classList.remove("invisible");
        }
    }
}

var game = new Game();
game.showFurry();
game.showCoin();
game.startGame();

document.addEventListener('keydown', function(event){
    game.turnFurry(event);
});

export {Game};