import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Person} from "../../model/Person";

@Component({
  selector: 'carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent {

  @Input() employee: Person | undefined;

  @Output()
  deleteEmployeeEvent: EventEmitter<Person> = new EventEmitter<Person>();

  constructor() {
    this.deleteEmployeeEvent = new EventEmitter<Person>();
  }

  delete() {
    this.deleteEmployeeEvent.emit(this.employee);
  }

}
