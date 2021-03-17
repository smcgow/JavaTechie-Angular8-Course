import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(score3: number, score1: number, score2: number): number {
    const totalScore: number = (3 * score3) + (2 * score2) + (1 * score1);
    return totalScore;
  }

}
