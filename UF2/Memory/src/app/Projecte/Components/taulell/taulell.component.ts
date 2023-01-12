import { Component, OnInit } from '@angular/core';
import { Taulell } from '../../Model/Entitats/Implementations/Taulell';
import { TaulellService } from '../../Model/Services/Taulell/taulell.service';

@Component({
  selector: 'app-taulell',
  templateUrl: './taulell.component.html',
  styleUrls: ['./taulell.component.css']
})
export class TaulellComponent implements OnInit {

  taulell!: Taulell;

  constructor(private taulellService: TaulellService) { }

  ngOnInit(): void { }

  public getTaulell(): Taulell {
    return this.taulellService.getTaulell();
  }

  public comprovarEstatTaulell(taulell: Taulell) {
    if (taulell.cartes_trobades.length < 4) {
      let noFi = taulell.comprovarFiRonda();
      if (!noFi) {
        let cartes_girades = taulell.obtenirCartesGirades();
        if (taulell.timer == 0) {
          //Error si les cartes girades al taulell no son iguals
          if (!taulell.iguals(cartes_girades)) {
            taulell.errors += 1;
            taulell.tempsEntreRondes(2);
            //Correcte
          } else {
            taulell.cartes_trobades.push(cartes_girades[0]);
            taulell.desbloquejarCartes();
          }
        }
      }
      if (taulell.cartes_trobades.length >= 4) {
        this.taulellService.reiniciarTaulell(5);
      }
    }
  }
}
