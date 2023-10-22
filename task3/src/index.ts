import {Game} from './Game';

const args: string[] = process.argv.slice(2);
const moves: string[] = Array.from(new Set(args));

function handleError(message: string) {
  console.log(message);
  process.exit();
}

if (args.length !== moves.length) {
  handleError('Invalid arguments. Please provide a set of unique moves.For example: rock, scissors, paper');
}

if (moves.length < 3 || moves.length % 2 === 0) {
  handleError('Invalid number of arguments. Please provide an odd number of unique moves.For example: rock, scissors, paper');
}

const game = new Game(moves);
game.play();

