import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  resultadoPadre: number = 0;
  
  onSumaRealizada(resultado: number){
    this.resultadoPadre = resultado;
  }
}
