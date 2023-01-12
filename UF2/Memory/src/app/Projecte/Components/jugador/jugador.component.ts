import { Component, OnInit } from '@angular/core';
import { Jugador } from '../../Model/Entitats/Implementations/Jugador/Jugador';
import { JugadorService } from '../../Model/Services/Jugador/jugador.service';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  constructor(private jugadorService: JugadorService) { }

  ngOnInit(): void {
  }

  getJugador(): Jugador{
    return this.jugadorService.getJugador();
  }

}
