import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mottoReplacer'
})
export class MottoReplacerPipe implements PipeTransform {

  transform(value: string): string {
    if (value === 'Lorem Ipsum') {
      return "Carpe Diem!";
    } else {
      return value;
    }
  }

}
