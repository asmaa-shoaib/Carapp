import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxlength'
})
export class MaxlengthPipe implements PipeTransform {

  transform(value: string, length:number):string {
    
    if(value.length>length){
     
      return value.substring(0,length)+"...";
    }
    return value;
  }

}
