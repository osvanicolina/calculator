import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  @Output() sumaRealizada = new EventEmitter<number>();
  operandoUno: number;
  operandoDos: number ;
  constructor() { }

  ngOnInit() {
  }
  
  onSumar():void{
    this.sumaRealizada.emit(this.operandoUno + this.operandoDos);
  }
}
