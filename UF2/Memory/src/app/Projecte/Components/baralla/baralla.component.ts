import { Component, Input, OnInit } from '@angular/core';
import { Baralla } from '../../Model/Entitats/Implementations/Baralla';

@Component({
  selector: 'app-baralla',
  templateUrl: './baralla.component.html',
  styleUrls: ['./baralla.component.css']
})
export class BarallaComponent implements OnInit {
  @Input() baralla!: Baralla;

  constructor() { }

  ngOnInit(): void {
  }

  public triar(baralla: Baralla):void{
    for (let i = 0; i < baralla.cartes.length; i++) {
      baralla.cartes[i].block = true;
    }
  }

}
