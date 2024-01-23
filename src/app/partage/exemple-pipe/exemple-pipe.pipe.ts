import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exemplePipe'
})
export class ExemplePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + " (transformé par le pipe)";
  }

}
