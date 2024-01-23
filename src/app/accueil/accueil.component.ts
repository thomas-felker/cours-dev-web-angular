import {Component} from '@angular/core';
import {Person} from "../model/Person";
import {ListPersonnelService} from "../partage/service/list-personnel.service";

@Component({
  selector: 'accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {

  employee!: Person;

  constructor(private readonly listPersonnelService: ListPersonnelService) {
  }

  ngOnInit(): void {
    this.getFirstEmployee()
  }

  /**
   * Get the first employee
   */
  getFirstEmployee() {
    this.listPersonnelService.fetch().subscribe(employees => {
      this.employee = employees[0];
    });
  }

  /**
   * Get a random employee
   */
  getRandomEmployee() {
    this.listPersonnelService.fetchRandom().subscribe(employee => {
      this.employee = employee;
    });
  }

  /**
   * Delete an employee
   */
  deleteEmployee(employee: Person) {
    this.listPersonnelService.delete(employee.id!).subscribe(personnel => {
      this.getRandomEmployee();
    });
  }
}
