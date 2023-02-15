import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit{

  @Input('valorInicial') progress: number = 50;
  @Input() btnClass: string = 'btn-primary'



  @Output() modProgres: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.btnClass = `btn ${ this.btnClass }`
  }

  get getProcentaje() {
    return `${this.progress}%`;
    }

  changeValue( op:string ) {

    if( op === '+' ) {
      this.progress += 5;

      if ( this.progress > 100 ) {
        this.progress = 100;
      }
      this.modProgres.emit(this.progress);

    } else {
      this.progress -= 5;

      if ( this.progress < 0 ) {
        this.progress = 0;
      }
      this.modProgres.emit(this.progress);
    }
  }

  onChange(nuevoValor: number) {

    if( nuevoValor >= 100 ) {
      this.progress = 100;
    } else if (nuevoValor <= 0 ) {
      this.progress = 0;
    } else {
      this.progress = nuevoValor;
    }


    this.modProgres.emit(nuevoValor);
  }

}
