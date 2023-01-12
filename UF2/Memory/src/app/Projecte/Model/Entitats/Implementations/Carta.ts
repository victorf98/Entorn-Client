import { ICarta } from "../Interfaces/ICarta";

export class Carta implements ICarta{
    img: string;
    tapada: boolean;
    block: boolean;

    constructor(img: string, tapada: boolean, block: boolean){
        this.img = img;
        this.tapada = tapada;
        this.block = block;
    }
}