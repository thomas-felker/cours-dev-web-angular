import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Person} from "../../model/Person";

@Component({
  selector: 'carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent {

  @Input() employe: Person | undefined;

  @Output()
  deletePersonEvent: EventEmitter<Person> = new EventEmitter<Person>();

  constructor() {
    this.deletePersonEvent = new EventEmitter<Person>();
  }

  delete() {
    this.deletePersonEvent.emit(this.employe);
  }

}
