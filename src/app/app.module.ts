import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {AccueilComponent} from './accueil/accueil.component';
import {GraphComponent} from './graph/graph.component';
import {CarteComponent} from './partage/carte/carte.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {ListPersonnelComponent} from './list-personnel/list-personnel.component';
import {MatListModule} from "@angular/material/list";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";
import {ContactComponent} from './contact/contact.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatChipsModule} from "@angular/material/chips";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { HeaderComponent } from './header/header.component';
import { DrawerComponent } from './drawer/drawer.component';
import {NgxEchartsModule} from "ngx-echarts";
import {MatRadioModule} from "@angular/material/radio";
import {MatGridListModule} from "@angular/material/grid-list";
import { LangueBoutonComponent } from './partage/langue-bouton/langue-bouton.component';
import {MatMenuModule} from "@angular/material/menu";
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    GraphComponent,
    CarteComponent,
    ListPersonnelComponent,
    ContactComponent,
    HeaderComponent,
    DrawerComponent,
    LangueBoutonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatCheckboxModule,
    FormsModule,
    NgxEchartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatRadioModule,
    MatGridListModule,
    MatMenuModule,
    // or import('./path-to-my-custom-echarts')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
