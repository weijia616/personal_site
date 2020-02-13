import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectListComponent} from "./project-list/project-list.component";
import {ProjectDetailComponent} from "./project-detail/project-detail.component";

const routes: Routes = [
  {
    path: '',
    component: ProjectListComponent,
  },
  {
    path: ':projectName',
    component: ProjectDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
