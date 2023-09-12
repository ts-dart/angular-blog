import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-post',
  templateUrl: './content-post.component.html',
  styleUrls: ['./content-post.component.css']
})
export class ContentPostComponent {
  @Input() content: string = ''
}
