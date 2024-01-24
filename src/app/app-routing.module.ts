import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {ListPersonnelComponent} from "./list-personnel/list-personnel.component";
import {GraphComponent} from "./graph/graph.component";
import {ContactComponent} from "./contact/contact.component";
import {EditionComponent} from "./list-personnel/edition/edition.component";
import {EmployeDetailResolver} from "./resolvers/employe-detail.resolver";

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  {path:'accueil', component: AccueilComponent},
  {path:'listPersonnel', component: ListPersonnelComponent},
  {path:'graph', component: GraphComponent},
  {path:'contact', component: ContactComponent},
  { path: 'edit/:id', component: EditionComponent, resolve: { employe: EmployeDetailResolver } },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
