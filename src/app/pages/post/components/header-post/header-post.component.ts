import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-post',
  templateUrl: './header-post.component.html',
  styleUrls: ['./header-post.component.css']
})
export class HeaderPostComponent {
  @Input() title: string = ''
  @Input() description: string = ''
}
