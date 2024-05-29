import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../../Models/Car';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(cars: any, text:string): any {
    if(text==undefined){
      return cars=[];
    }
    return cars.filter(function(car:any){
      return car.details.description.toLocaleLowerCase().includes(text.toLocaleLowerCase());
    })
    return null;
  }

}
