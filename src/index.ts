import Game from './Game'

const game: Game = new Game()
game.showFurry()
game.showCoin()
game.startGame()

document.addEventListener(
  'keydown',
  (event): void => {
    game.turnFurry(event.which)
  },
)

const againButton = <HTMLElement>document.querySelector('.btn-again')
againButton.addEventListener('click', (): void => game.playAgain())
