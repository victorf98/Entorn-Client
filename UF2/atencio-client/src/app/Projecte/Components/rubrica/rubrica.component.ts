import { Component, OnInit } from '@angular/core';
import { Criteri } from '../../Model/Entitats/Implementations/Criteri/Criteri';
import { Rubrica } from '../../Model/Entitats/Implementations/Rubrica/Rubrica';
import { Valoracio } from '../../Model/Entitats/Implementations/Valoracio/Valoracio';

@Component({
  selector: 'app-rubrica',
  templateUrl: './rubrica.component.html',
  styleUrls: ['./rubrica.component.css']
})
export class RubricaComponent implements OnInit {
  rubrica: Rubrica = new Rubrica;
  valors!: Array<number>;

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem("rubrica") != null && localStorage.getItem("rubrica") != "") {
      this.rubrica = JSON.parse(localStorage.getItem("rubrica") || "");
    }
    this.valors = this.obtenirValors();
  }

  obtenirValors(): number[] {
    let valors: Array<number> = new Array;
    valors = this.recorrerCriteris(valors);
    return valors.sort((a, b) => b - a);
  }

  recorrerCriteris(valors: Array<number>) {
    for (let i = 0; i < this.rubrica.criteris.length; i++) {
      valors = this.recorrerValoracions(valors, i);
    }
    return valors;
  }

  recorrerValoracions(valors: Array<number>, i: number) {
    for (let j = 0; j < this.rubrica.criteris[i].valoracions.length; j++) {
      valors = this.afegirValorNoRepetit(valors, i, j);
    }
    return valors;
  }

  afegirValorNoRepetit(valors: Array<number>, i: number, j: number) {
    let valor = this.rubrica.criteris[i].valoracions[j].valor;
    if (!valors.includes(valor)) {
      valors.push(valor);
    }
    return valors;
  }

  obtenirValoracioPerValor(valor: number, criteri: Criteri): Valoracio {
    let valoracio: Valoracio = new Valoracio;
    for (let i = 0; i < criteri.valoracions.length; i++) {
      if (criteri.valoracions[i].valor == valor) {
        valoracio = criteri.valoracions[i];
        break;
      }
    }
    return valoracio;
  }

  generarNota() {
    this.rubrica.valoracio = (this.calcularNota()).toString();
    localStorage.setItem("rubrica", JSON.stringify(this.rubrica));
  }

  calcularNota() {
    let total = this.obtenirTotalValoracions();
    let suma = this.totalVots();
    return Math.round((suma * 10 / total) * 100) / 100;
  }

  totalVots() {
    let suma = 0;
    let valoracions_seleccionades = this.obtenirValoracionsSeleccionades();
    for (let i = 0; i < this.obtenirValoracionsSeleccionades().length; i++) {
      suma += valoracions_seleccionades[i].valor;
    }
    return suma;
  }

  obtenirTotalValoracions(): number {
    let total = 0;
    for (let i = 0; i < this.rubrica.criteris.length; i++) {
      total += this.obtenirValorMesAlt(i);
    }

    return total;
  }

  obtenirValorMesAlt(i: number) {
    let valor = 0;
    for (let j = 0; j < this.rubrica.criteris[i].valoracions.length; j++) {
      if (this.rubrica.criteris[i].valoracions[j].valor > valor) {
        valor = this.rubrica.criteris[i].valoracions[j].valor;
      }
    }
    return valor;
  }

  seleccionar(valoracio: Valoracio, criteri: Criteri) {
    valoracio.seleccionat = true;
    this.treureSeleccionatAltres(valoracio, criteri);
    this.generarNota();
  }

  treureSeleccionatAltres(valoracio: Valoracio, criteri: Criteri) {
    for (let i = 0; i < criteri.valoracions.length; i++) {
      if (criteri.valoracions[i].descripcio != valoracio.descripcio) {
        criteri.valoracions[i].seleccionat = false;
      }
    }
  }

  totsSeleccionats(){
    return this.obtenirValoracionsSeleccionades().length == this.rubrica.criteris.length;
  }

  obtenirValoracionsSeleccionades(){
    let valoracions_seleccionades = [];
    for (let i = 0; i < this.rubrica.criteris.length; i++) {
      valoracions_seleccionades.push(this.llegirCriteris(i));
    }

    return valoracions_seleccionades;
  }

  llegirCriteris(i: number){
    let valoracio_seleccionada = new Valoracio;
    for (let j = 0; j < this.rubrica.criteris[i].valoracions.length; j++) {
      if (this.rubrica.criteris[i].valoracions[j].seleccionat == true) {
        valoracio_seleccionada = this.rubrica.criteris[i].valoracions[j];
        break;
      }
    }

    return valoracio_seleccionada;
  }
}
