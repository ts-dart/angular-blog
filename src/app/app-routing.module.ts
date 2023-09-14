import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component'

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'prefix'
  },
  {
    path:'post/:id',
    component:PostComponent,
    pathMatch:'prefix'
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }