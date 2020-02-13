import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ],
  declarations: [ProjectListComponent, ProjectDetailComponent]
})
export class ProjectsModule { }
