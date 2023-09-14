import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { AsideComponent } from './components/aside/aside.component';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from '../../app-routing.module';


@NgModule({
  declarations: [
    MainComponent,
    AsideComponent,
    HomeComponent
  ],
  exports: [
    MainComponent,
    AsideComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class HomeModule { }
