import { Component, OnInit } from '@angular/core';
import {Person} from "../model/Person";
import {ListPersonnelService} from "../partage/service/list-personnel.service";

@Component({
  selector: 'app-list-personnel',
  templateUrl: './list-personnel.component.html',
  styleUrls: ['./list-personnel.component.scss']
})
export class ListPersonnelComponent implements OnInit {

  personnel: Array<Person> = [];
  view: "card" | "list" = "card";

  constructor(private readonly listPersonnelService: ListPersonnelService) {
  }

  ngOnInit(): void {
    this.listPersonnelService.fetch().subscribe((personnel: Array<Person>) => {
      this.personnel = personnel;
    });
  }

  deleteEmployee(employee: Person): void {
    this.listPersonnelService.delete(employee.id!).subscribe(personnel => {
      this.personnel = personnel;
    });
  }

  switchView(): void {
    this.view = this.view === "card" ? "list" : "card";
  }
}
