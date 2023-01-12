import { Injectable } from '@angular/core';
import { Baralla } from '../../Entitats/Implementations/Baralla';

@Injectable({
  providedIn: 'root'
})
export class BarallaService {
  index!: number;

  baralla:Baralla = new Baralla(this.index);

  constructor() { }

  getBaralla():Baralla{return this.baralla;}
}
