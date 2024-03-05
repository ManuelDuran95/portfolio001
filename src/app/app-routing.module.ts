import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { View1Component } from './view1/view1.component';
import { CvComponent } from './cv/cv.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {path:'projects', component: ProjectsComponent},
  {path:'', component: View1Component},
  {path:'resumen', component: CvComponent },
  {path:'contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
