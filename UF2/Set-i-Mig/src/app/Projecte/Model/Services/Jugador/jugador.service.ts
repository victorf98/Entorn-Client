import { Injectable } from '@angular/core';
import { Jugador } from '../../Entitats/Implementations/Jugador/Jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  jugador: Jugador = new Jugador("");

  constructor() { }

  getJugador(): Jugador{return this.jugador;}
}
