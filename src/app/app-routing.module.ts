import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { View1Component } from './view1/view1.component';
import { CvComponent } from './cv/cv.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BioComponent } from './bio/bio.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {path:'projects', component: ProjectsComponent},
  {path:'', component: View1Component},
  {path:'bio', component: BioComponent },
  {path:'contacto', component: ContactoComponent},
  {path:'resume', component: ResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
