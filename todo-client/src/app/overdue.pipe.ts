import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'overdue'
})
export class OverduePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const dueDate = new Date(value);
    const currDate = new Date();
    const diffTime = currDate.getTime() - dueDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24));
    return diffDays;
  }

}
