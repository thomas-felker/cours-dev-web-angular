import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appChangeBackgroundColor]'
})
export class ChangeBackgroundColorDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'red';
  }

}
