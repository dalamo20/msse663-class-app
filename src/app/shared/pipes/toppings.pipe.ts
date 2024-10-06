import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatToppings' })
export class FormatToppingsPipe implements PipeTransform {
  transform(toppings: string[]): string {
    return toppings.length ? toppings.join(', ') : 'No toppings';
  }
}
