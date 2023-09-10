import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../../../data/dataFake';

interface TyDataFake { id:string, title:string, description:string, date:Date }

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  posts: TyDataFake[] = []
  months: string[] = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
 
  constructor() {}

  ngOnInit() {
    this.posts = dataFake;
  }

  formatDate(date: Date): string {
    const day: number = date.getDate()
    const month: number = date.getMonth()
    const year: number = date.getFullYear()
    return `${day} ${this.months[month]} ${year}`
  }

  formatStringSize(descriptionArrayWords: string[], acc: string, limit: number): string {
    descriptionArrayWords.map((word: string, index: number): void | number => {
      if (index < limit) acc += ' ' + word
      else return 0
    })
    return acc + '...'
  }
}
 