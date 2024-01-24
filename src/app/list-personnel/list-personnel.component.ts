import { Component, OnInit } from '@angular/core';
import {Person} from "../model/Person";
import {ListPersonnelService} from "../partage/service/list-personnel.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AjoutPopupComponent} from "./ajout-popup/ajout-popup.component";
import {mergeMap} from "rxjs";

@Component({
  selector: 'app-list-personnel',
  templateUrl: './list-personnel.component.html',
  styleUrls: ['./list-personnel.component.scss']
})
export class ListPersonnelComponent implements OnInit {

  personnel: Array<Person> = [];
  view: "card" | "list" = "card";
  dialogStatus: string = "inactive";
  private addDialog: MatDialogRef<AjoutPopupComponent> | any;

  constructor(private readonly listPersonnelService: ListPersonnelService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.listPersonnelService.fetch().subscribe((personnel: Array<Person>) => {
      this.personnel = personnel;
    });
  }

  add(person: Person) {
    this.listPersonnelService
      .create(person)
      .pipe(mergeMap(() => this.listPersonnelService.fetch()))
      .subscribe(personnel => {
        this.personnel = personnel;
        this.hideDialog();
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

  // Dialog
  showDialog() {
    debugger;
    this.dialogStatus = 'active';
    this.addDialog = this.dialog.open(AjoutPopupComponent, {
      width: '600px',
      data: {}
    });

    this.addDialog.afterClosed().subscribe((person:any)=> {
      this.dialogStatus = 'inactive';
      if (person) {
        this.add(person);
      }
    });
  }

  hideDialog() {
    this.dialogStatus = 'inactive';
    if(this.addDialog != undefined){
      this.addDialog.close();
    }
  }
}
