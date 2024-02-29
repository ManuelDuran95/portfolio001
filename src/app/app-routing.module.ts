import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { View1Component } from './view1/view1.component';

const routes: Routes = [
  {path:'projects', component: ProjectsComponent},
  {path:'', component: View1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
