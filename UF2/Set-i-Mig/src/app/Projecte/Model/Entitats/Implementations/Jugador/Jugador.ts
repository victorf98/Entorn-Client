import { IJugador } from "../../Interfaces/Jugador/IJugador";
import { CartaSetIMig } from "../Carta/CartaSetIMig";

export class Jugador implements IJugador{
    nom: string;
    cartes: CartaSetIMig[] = new Array<CartaSetIMig>();

    constructor(nom: string){
        this.nom = nom;
    }

    agafar_carta(carta: CartaSetIMig): void{
        this.cartes.push(carta);
    }

    contar(): number {
        let total: number = 0;
        this.cartes.forEach(
            carta => {total += carta.valor;}
        )
        return total;
    }
}