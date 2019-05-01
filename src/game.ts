import Furry from "./furry";
import Coin from "./coin";

class Game {
  static board = document.querySelectorAll<HTMLElement>(".board div");
  static section = <HTMLElement>document.querySelector(".board");
  static over = <HTMLElement>document.querySelector(".over");
  static tablePoints = <HTMLElement>document.querySelector(".score");

  private interval: number | undefined;
  private furry: Furry = new Furry();
  private coin: Coin = new Coin();
  private score: number = 0;

  public startGame(): void {
    this.interval = setInterval((): void => {
      this.moveFurry();
    }, this.furry.speed);
  }

  private getIndex(x: number, y: number): number {
    return x + y * 10;
  }

  public showFurry(): void {
    const {
      furry: { x = 0, y = 0 }
    } = this;
    this.hideVisibleFurry();
    Game.board[this.getIndex(x, y)].classList.add("furry");
	}
	
	public turnFurry = (which: number): void => {
    this.furry.updateFurryDirection(which);
  };

  public showCoin(): void {
    Game.board[this.getIndex(this.coin.x, this.coin.y)].classList.add("coin");
  }

  private hideVisibleFurry(): void {
    var divs = document.querySelector(".furry");
    if (divs !== null) {
      divs.classList.remove("furry");
    }
  }

  private moveFurry(): void {
    this.furry.updateFurryPosition();
    const z = this.furry.isFurryOutOfMap;
    if (this.furry.isFurryOutOfMap) {
      this.gameOver();
    } else {
      this.checkCoinCollision();
      this.showFurry();
    }
  }

  private updateDisplayedPoints(): void {
    const points: NodeListOf<HTMLElement> = document.querySelectorAll(
      ".points"
    );
    points[0].innerText = this.score.toString();
    points[1].innerText = this.score.toString();
  }

  private checkCoinCollision(): void {
    if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
      this.score = this.score + 1;
      const hideCoin = <HTMLElement>document.querySelector(".coin");
      hideCoin.classList.remove("coin");
      this.coin = new Coin();
      this.showCoin();
      this.updateDisplayedPoints();
      clearInterval(this.interval);
      this.furry.speed = this.furry.speed * 0.95;
      this.startGame();
    }
  }

  private gameOver(): void {
    clearInterval(this.interval);
    this.hideVisibleFurry();
    Game.tablePoints.classList.add("invisible");
    Game.section.classList.add("invisible");
    Game.over.classList.remove("invisible");
  }

  public playAgain(): void {
    Game.tablePoints.classList.remove("invisible");
    Game.section.classList.remove("invisible");
    Game.over.classList.add("invisible");
    this.score = 0;
    this.updateDisplayedPoints();
    this.furry.resetFurry();
    this.showFurry();
    this.showCoin();
    this.startGame();
  }
}

export default Game;
