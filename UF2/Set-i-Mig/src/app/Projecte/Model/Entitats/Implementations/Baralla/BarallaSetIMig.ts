import { IBarallaSetIMig } from "../../Interfaces/Baralla/IBarallaSetIMig";
import { ICartaSetIMig } from "../../Interfaces/Carta/ICartaSetIMig";
import { CartaSetIMig } from "../Carta/CartaSetIMig";
import { Baralla } from "./Baralla";
export class BarallaSetIMig extends Baralla implements IBarallaSetIMig{
    override cartes!: Array<ICartaSetIMig>;

    constructor(){
        super();
        this.inicialitzarValor();
        this.treureCartes();
        console.log(this.cartes);
    }

    inicialitzarValor(): void{
        for (let i = 0; i < this.cartes.length; i++) {
            if (this.cartes[i].num < 10) {
                this.cartes[i].valor = this.cartes[i].num;
            }else{
                this.cartes[i].valor = 0.5;
            }
        }
    }

    override barrejar(): void {
        let rand, copia;
        for (let i = this.cartes.length - 1; i > 0; i--) {
            rand = Math.floor(Math.random() * (i + 1));
            copia = this.cartes[i];
            this.cartes[i] = this.cartes[rand];
            this.cartes[rand] = copia;
        }  
    }

    private treureCartes(): void{
        this.cartes = this.cartes.filter(carta => carta.num != 8 && carta.num != 9);
        /*for (let i = 0; i < this.cartes.length; i++) {
            if (this.cartes[i].num == 8 || this.cartes[i].num == 9) {
                this.cartes.splice(i, 1);
                i--;
            }
        }*/
    }

    eliminar(carta: CartaSetIMig) {
        this.cartes = this.cartes.filter(c => carta != c);    
    }
}