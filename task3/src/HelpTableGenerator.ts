import Table from 'cli-table';
import clc, {Format} from 'cli-color';

export class HelpTableGenerator {
  public static COLOR_HEAD = clc.cyanBright;
  public static COLOR_WHITE = clc.whiteBright;
  public static COLOR_WIN = clc.greenBright;
  public static COLOR_DRAW = clc.yellowBright;
  public static COLOR_LOSE = clc.redBright;
  private static PC_USER = this.COLOR_HEAD('User / PC');

  static colorMoves(moves: string[], color: Format) {
    return moves.map((move: string) => color(move));
  }

  static generateHead(str: string, moves: string[]) {
    return [str, ...this.colorMoves(moves, this.COLOR_WHITE)];
  }

  static generateRows(moves: string[], rules: string[][]) {
    const rows: string[][] = [];
    this.colorMoves(moves, this.COLOR_WHITE).forEach((move, index) => {
      const row: string[] = [move, ...rules[index]];
      rows.push(row);
    });
    return rows;
  }

  static generateHelpTable(moves: string[], rules: string[][]): string {
    const head = this.generateHead(this.PC_USER, moves);
    const rows = this.generateRows(moves, rules);
    const table = new Table({head, rows});
    return table.toString();
  }
}
