import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  progress1: number = 25;
  progress2: number = 55;

  get getPr1() {
    return `${this.progress1}%`;
  }
  get getPr2() {
    return `${this.progress2}%`;
  }

  valorHijo( valor: number ) {
    this.progress1 = valor;
  }

}
