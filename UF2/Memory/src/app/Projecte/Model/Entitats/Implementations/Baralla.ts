import { JUGADOR } from "src/app/Projecte/Utils/jugadors";
import { IBaralla } from "../Interfaces/IBaralla";
import { ICarta } from "../Interfaces/ICarta";
import { Carta } from "./Carta";

export class Baralla implements IBaralla<ICarta>{
    cartes: Array<ICarta> = new Array<ICarta>();

    constructor(){
        this.generar();
        this.barrejar();
    }
    generar(): void {
        this.cartes.push(new Carta(JUGADOR[0].imatge, false, true));
        this.cartes.push(new Carta(JUGADOR[1].imatge, false, true));
        this.cartes.push(new Carta(JUGADOR[2].imatge, false, true));
        this.cartes.push(new Carta(JUGADOR[3].imatge, false, true));
    }
    barrejar(): void {
        let rand, copia;
        for (let i = this.cartes.length - 1; i > 0; i--) {
            rand = Math.floor(Math.random() * (i + 1));
            copia = this.cartes[i];
            this.cartes[i] = this.cartes[rand];
            this.cartes[rand] = copia;
        }
    }
}