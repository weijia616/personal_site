import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ContactComponent} from "./components/contact/contact.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'projects',
    loadChildren: 'app/projects/projects.module#ProjectsModule', // tell Angular should load all the assets in ProjectsModule when we visit this route.
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
