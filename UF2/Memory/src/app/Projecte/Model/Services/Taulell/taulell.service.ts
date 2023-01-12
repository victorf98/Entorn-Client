import { Injectable } from '@angular/core';
import { Taulell } from '../../Entitats/Implementations/Taulell';

@Injectable({
  providedIn: 'root'
})
export class TaulellService {

  taulell: Taulell = new Taulell();

  constructor() { }

  getTaulell(): Taulell { return this.taulell; }
  reiniciarTaulell(segons: number) {
    let temps = segons;
    let intervalId = setInterval(() => {
      temps = temps - 1;
      if (temps === 0) {
        clearInterval(intervalId);
        this.taulell = new Taulell()
      }
    }, 1000)
  }
}
