import * as readlineSync from 'readline-sync';
import {KeyGenerator} from './KeyGenerator';
import {HMACGenerator} from './HMACGenerator';
import {GameRules} from './GameRules';
import {HelpTableGenerator} from './HelpTableGenerator';

export class Game {
  private readonly moves: string[];
  private readonly rules: string[][];
  private readonly table: string;
  private readonly key: string;
  public menu: Record<string, string>;
  public pcMove: number;
  private userMove = '';

  constructor(moves: string[]) {
    this.moves = moves;
    this.key = KeyGenerator.generateKey(256);
    this.rules = GameRules.generateRules(this.moves);
    this.table = HelpTableGenerator.generateHelpTable(this.moves, this.rules);
    this.menu = this.getMenuList(this.moves);
    this.pcMove = this.getPCMove();
  }

  private getMenuList(moves: string[]): Record<string, string> {
    return moves.reduce((object, value, index) => {
      return {...object, [index + 1]: value};
    }, {'0': 'exit', '?': 'help'});
  }

  private getResult(playerMove: string, computerMove: number, rules: string[][]): string {
    const result = rules[+playerMove - 1][computerMove];
    const resultMessageMap = {
      [HelpTableGenerator.COLOR_DRAW('Draw')]: 'It\'s Draw',
      [HelpTableGenerator.COLOR_WIN('Win')]: 'You win',
      [HelpTableGenerator.COLOR_LOSE('Lose')]: 'PC wins',
    };
    return resultMessageMap[result];
  }

  private printMenu(): void {
    console.log('Available moves:');
    const keys = Object.keys(this.menu);
    keys.sort((a, b) => (a === '0' ? 1 : b === '0' ? -1 : parseInt(a) - parseInt(b)));
    keys.forEach(key => {
      console.log(`${key} - ${this.menu[key]}`);
    });
  }

  private getUserMove(): void {
    this.userMove = readlineSync.question('Enter your move: ');
    this.validateUserMove();
  }

  private validateUserMove(): void {
    if (this.menu[this.userMove] === undefined) {
      console.log('Invalid input. Please enter a valid move.');
      this.printMenu();
      this.getUserMove();
    } else if (this.userMove === '0') {
      console.log('Exiting the game.');
      process.exit();
    } else if (this.userMove === '?') {
      console.log(this.table);
      this.getUserMove();
    }
  }

  private getPCMove(): number {
    return Math.floor(Math.random() * this.moves.length);
  }

  play(): void {
    console.log('HMAC: ', HMACGenerator.generateHMAC(this.key, this.moves[this.pcMove]));
    this.printMenu();
    this.getUserMove();
    console.log(`Your move: ${this.menu[this.userMove]}`);
    console.log(`PC move: ${this.moves[this.pcMove]}`);
    const result = this.getResult(this.userMove, this.pcMove, this.rules);
    console.log(`${result}`);
    console.log('HMAC key: ', this.key);
  }
}


