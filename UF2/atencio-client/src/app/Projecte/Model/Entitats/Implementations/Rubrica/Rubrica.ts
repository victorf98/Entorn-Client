import { ICriteri } from "../../Interfaces/Criteri/ICriteri";
import { IRubrica } from "../../Interfaces/Rubrica/IRubrica";
import { IValoracio } from "../../Interfaces/Valoracio/IValoracio";
import { Criteri } from "../Criteri/Criteri";
import { Valoracio } from "../Valoracio/Valoracio";

export class Rubrica implements IRubrica<ICriteri<IValoracio>>{
    criteris: Array<ICriteri<IValoracio>> = new Array<ICriteri<IValoracio>>();
    valoracio!: string | null;

    constructor() {
    }    
}