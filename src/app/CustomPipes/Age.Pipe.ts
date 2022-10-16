import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'agePipe'
})

export class AgePipe implements PipeTransform {
  transform(date: any, args?: any) {
    let months = new Date().getMonth() - new Date(date).getMonth() +
      ((new Date().getFullYear() - new Date(date).getFullYear()) * 12);
    let year = Math.floor(months / 12) + (months % 12) / 10;
    return year;
  }
}
