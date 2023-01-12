import { ICartaSetIMig } from "../../Interfaces/Carta/ICartaSetIMig";
import { Carta } from "./Carta";

export class CartaSetIMig extends Carta implements ICartaSetIMig{
    valor!: number;
    visible!: boolean;

    constructor(num: number, pal: string, img: string){
        super(num, pal, img);
        this.setValue(num);
        this.visible = false;
    }

    public setValue(num: number){
        if (num <= 7) this.valor = num;
        else this.valor = 0.5;
    }
}