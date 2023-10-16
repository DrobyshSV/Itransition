import {HelpTableGenerator} from './HelpTableGenerator';

export class GameRules {
  private static draw = HelpTableGenerator.COLOR_DRAW("Draw");
  private static win = HelpTableGenerator.COLOR_WIN("Win");
  private static lose = HelpTableGenerator.COLOR_LOSE("Lose");

  static generateRules(moves: string[]): string[][] {
    return moves.map((_, i) =>
      moves.map((__, j) => {
        const distance = (j - i + moves.length) % moves.length;
        if (distance === 0) return this.draw;
        if (distance <= moves.length / 2) return this.win;
        return this.lose;
      })
    );
  }
}
