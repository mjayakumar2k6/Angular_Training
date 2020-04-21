import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value, ...args: unknown[]): unknown {
    console.log(value, args);
    let arr = value.sort(function(a, b ){
      let nameA,
          nameB;
      if(args[0]!=="id") {
        nameA = a.name.toUpperCase();
        nameB = b.name.toUpperCase();
      } else {
        nameA = a.id;
        nameB = b.id;        
      }

      if (nameA < nameB) //sort string ascending
          return -1 
      if (nameA > nameB)
          return 1
      return 0 
    })
    return arr;
  }

}
