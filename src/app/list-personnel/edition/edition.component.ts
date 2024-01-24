import { Component, OnInit } from '@angular/core';
import {Person} from "../../model/Person";
import {ListPersonnelService} from "../../partage/service/list-personnel.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.scss']
})
export class EditionComponent implements OnInit {

  employee: Person;

  /**
   * Component constructor
   */
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly listPersonnelService: ListPersonnelService
  ) {
    this.employee = {};
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this.route.data.subscribe(( employee: any) => (this.employee = employee.employe));
  }

  submit(employee: any) {
    this.listPersonnelService.update(employee).subscribe(() => {
      this.router.navigate(['/listPersonnel']).then();
    });
  }

  cancel() {
    this.router.navigate(['/listPersonnel']).then();
  }

}
