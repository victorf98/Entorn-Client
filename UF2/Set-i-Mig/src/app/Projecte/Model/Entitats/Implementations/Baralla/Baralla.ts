import { PAL } from "src/app/Projecte/Utils/pals";
import { IBaralla } from "../../Interfaces/Baralla/IBaralla";
import { ICarta } from "../../Interfaces/Carta/ICarta";
import { Carta } from "../Carta/Carta";

export class Baralla implements IBaralla<ICarta>{
    cartes: Array<ICarta> = new Array<ICarta>();
    constructor(){
        this.generar();
        //this.barrejar();
    }

    generar(): void {
        for (let i = 1; i < 13; i++) {
            //if (i < 8 || i > 9) {
                this.cartes.push(new Carta(i, PAL[0].pal, PAL[0].imatge), 
                new Carta(i, PAL[1].pal, PAL[1].imatge), 
                new Carta(i, PAL[2].pal, PAL[2].imatge), 
                new Carta(i, PAL[3].pal, PAL[3].imatge));
            //}        
        }
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