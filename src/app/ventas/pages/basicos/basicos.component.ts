import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent {

  nombreUpper: string = 'JORDI';
  nombreLower: string = 'Jordi';
  nombreCompleto: string = 'joRdI zEtA';
  
  fecha: Date = new Date(); // el dia de hoy
  
}
