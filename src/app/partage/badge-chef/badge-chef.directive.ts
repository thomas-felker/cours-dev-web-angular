import {Directive, ElementRef, Input, OnChanges, OnInit, Renderer2} from '@angular/core';
import {Person} from "../../model/Person";

@Directive({
  selector: '[badgeChef]'
})
export class BadgeChefDirective implements OnInit, OnChanges {
  @Input()
  employee: Person = {};

  constructor(private elementRef:ElementRef, private renderer:Renderer2) {
    debugger;
  }

  ngOnInit() {
    this.addBadge();
  }

  ngOnChanges() {
    this.addBadge();
  }

  addBadge() {
    let isChef:boolean = false;
    this.employee?.titres?.forEach((titre) => {
      if(titre.includes("chef")){
        isChef = true;
        this.renderer.setProperty(
          this.elementRef.nativeElement,
          'innerHTML',
          '<em class="material-icons">supervisor_account</em>'
        );
        return;
      }
    })
    if(!isChef)
      this.renderer.setProperty(this.elementRef.nativeElement,'innerHTML','');
  }

}
