import { IBaralla } from "../Interfaces/IBaralla";
import { ICarta } from "../Interfaces/ICarta";
import { ITaulell } from "../Interfaces/ITaulell";
import { Baralla } from "./Baralla";
import { Carta } from "./Carta";

export class Taulell implements ITaulell<IBaralla<ICarta>>{
    baralles: Array<IBaralla<ICarta>> = new Array<IBaralla<ICarta>>();
    errors: number = 0;
    timer: number = 10;
    cartes_trobades: Array<Carta> = new Array<Carta>;

    constructor() {
        this.generar();
        this.començarPartida();
    }
    generar(): void {
        for (let i = 0; i < 4; i++) {
            this.baralles.push(new Baralla());
        }
    }

    iguals(cartes: Array<Carta>): boolean {
        let iguals = true;
        for (let i = 0; i < cartes.length; i++) {
            if (cartes[0].img != cartes[i].img) {
                iguals = false;
            }
        }

        return iguals;
    }

    començarPartida() {
        let intervalId = setInterval(() => {
            this.timer = this.timer - 1;
            if (this.timer === 0) {
                clearInterval(intervalId);
                for (let i = 0; i < this.baralles.length; i++) {
                    for (let j = 0; j < this.baralles.length; j++) {
                        this.baralles[i].cartes[j].block = false;
                        this.baralles[i].cartes[j].tapada = true;
                    }
                }
            }
        }, 1000)
    }

    tempsEntreRondes(segons: number){
        let temps = segons;
        let intervalId = setInterval(() => {
            temps = temps - 1;
            if (temps === 0) {
                clearInterval(intervalId);
                this.girarCartes();
            }
        }, 1000)
    }

    estaTrobada(img: string): boolean {
        let trobat = false;
        for (let i = 0; i < this.cartes_trobades.length; i++) {
            if (img == this.cartes_trobades[i].img) {
                trobat = true;
            }
        }
        return trobat;
    }

    comprovarFiRonda(): boolean {
        let noFi: boolean = false;
        for (let i = 0; i < this.baralles.length; i++) {
            for (let j = 0; j < this.baralles.length; j++) {
                if (this.baralles[i].cartes[j].block == false) {
                    noFi = true;
                }
            }
        }
        return noFi;
    }

    obtenirCartesGirades(): Carta[] {
        let cartes_girades = [];
        for (let i = 0; i < this.baralles.length; i++) {
            for (let j = 0; j < this.baralles.length; j++) {
                if (this.baralles[i].cartes[j].tapada == false && !this.estaTrobada(this.baralles[i].cartes[j].img)) {
                    cartes_girades.push(this.baralles[i].cartes[j]);
                }
            }
        }
        return cartes_girades;
    }

    girarCartes(): void {
        for (let i = 0; i < this.baralles.length; i++) {
            for (let j = 0; j < this.baralles.length; j++) {
                if (!this.estaTrobada(this.baralles[i].cartes[j].img)) {
                    this.baralles[i].cartes[j].tapada = true;
                    this.baralles[i].cartes[j].block = false;
                }
            }
        }
    }

    desbloquejarCartes(): void {
        for (let i = 0; i < this.baralles.length; i++) {
            for (let j = 0; j < this.baralles.length; j++) {
                if (this.baralles[i].cartes[j].tapada == true) {
                    this.baralles[i].cartes[j].block = false;
                }
            }
        }
    }
}