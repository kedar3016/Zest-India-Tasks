import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: String, ...args: unknown[]): String {
    if(!value){
      return '';
    } 
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}
