import { Component } from '@angular/core';
import { Incidencia } from 'src/app/Projecte/Model/Entitats/Implementations/Incidencia';

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.css']
})
export class IncidenciaComponent {
  incidencia: Incidencia = new Incidencia();
  
  submit() {
    console.log(`${this.incidencia.codi} - ${this.incidencia.titol}`)
  }
  

}
