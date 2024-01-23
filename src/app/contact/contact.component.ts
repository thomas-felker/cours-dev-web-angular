import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {

  @ViewChild("nom") nom: ElementRef<HTMLElement> | undefined;
  @ViewChild("prenom") prenom: ElementRef<HTMLElement> | undefined;

  constructor() {
    //Vide
  }

  ngAfterViewInit(): void {
    this.nom!.nativeElement!.innerHTML = "FELKER";
    this.prenom!.nativeElement!.innerHTML = "Thomas";
    //Vide
  }

}
