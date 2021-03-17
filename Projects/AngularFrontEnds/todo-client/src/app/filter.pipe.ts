import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchVal: string): any {
    if(searchVal===null){
      return value;
    }
    const todosArray:any[] = []
    for(let i = 0; i< value.length; i++){
      if(value[i].text.startsWith(searchVal)){
        todosArray.push(value[i]);
      }
    }
    return todosArray;
  }

}
