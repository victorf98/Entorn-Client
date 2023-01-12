import { IJugador } from "../Interfaces/IJugador";
import { Carta } from "./Carta";

export class Jugador implements IJugador{
    nom: string;
    cartes: Carta[] = new Array<Carta>();

    constructor(nom: string){
        this.nom = nom;
    }

    agafar_carta(carta: Carta): void{
        this.cartes.push(carta);
    }
}