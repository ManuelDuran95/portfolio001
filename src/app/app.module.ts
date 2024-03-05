import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { View1Component } from './view1/view1.component';
import { ProjectsComponent } from './projects/projects.component';
import { CvComponent } from './cv/cv.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    View1Component,
    ProjectsComponent,
    CvComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
