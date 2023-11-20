import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(items: any[], sortBy: string): any[] {
    if (!items || !sortBy) {
      return items;
    }

    if (sortBy === 'asc') {
      return items.slice().sort((a, b) => a.price - b.price);
    } else if (sortBy === 'desc') {
      return items.slice().sort((a, b) => b.price - a.price);
    } else {
      return items;
    }
  }
}
