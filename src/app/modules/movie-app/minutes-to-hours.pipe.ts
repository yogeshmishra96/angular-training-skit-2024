import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHours'
})
export class MinutesToHoursPipe implements PipeTransform {
  transform(value: number): string {
    if (value === null || value === undefined || isNaN(value)) {
      return '';
    }

    const hours = Math.floor(value / 60);
    const minutes = value % 60;

    return `${hours} hour${hours !== 1 ? 's' : ''} : ${minutes} min`;
  }
}
