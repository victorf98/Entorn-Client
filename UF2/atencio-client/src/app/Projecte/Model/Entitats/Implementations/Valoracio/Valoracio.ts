import { IValoracio } from "../../Interfaces/Valoracio/IValoracio";

export class Valoracio implements IValoracio{
    valor!: number;
    descripcio!: string;
    seleccionat!: boolean;

    constructor(){
    }
    
}