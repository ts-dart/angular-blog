import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';
import TyDataFake from 'src/app/types/TyDataFake';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  private id:string = ''
  post:TyDataFake = dataFake[0]

  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe((res:any) => this.id = res.id)
    this.post = dataFake[Number(this.id)]
  }
}
