import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostComponent } from './post.component';
import { HeaderPostComponent } from './components/header-post/header-post.component';
import { ContentPostComponent } from './components/content-post/content-post.component'
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [
    PostComponent,
    HeaderPostComponent,
    ContentPostComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class PostModule { }
