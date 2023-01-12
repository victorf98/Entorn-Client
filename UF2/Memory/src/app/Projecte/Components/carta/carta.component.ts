import { APP_BASE_HREF } from '@angular/common';
import { createInjectableType } from '@angular/compiler';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { Baralla } from '../../Model/Entitats/Implementations/Baralla';
import { Carta } from '../../Model/Entitats/Implementations/Carta';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  @Input() carta!: Carta;

  ruta!: string;

  constructor(@Inject(APP_BASE_HREF) private baseHref: string) { }

  ngOnInit(): void {
    this.ruta = this.baseHref;
  }

  girar(carta: Carta) {
    if (!carta.block) {
      carta.tapada = !carta.tapada;
    }
  }
}
