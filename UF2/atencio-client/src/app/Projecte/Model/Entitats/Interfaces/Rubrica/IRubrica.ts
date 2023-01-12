import { Criteri } from "../../Implementations/Criteri/Criteri";
import { ICriteri } from "../Criteri/ICriteri";
import { IValoracio } from "../Valoracio/IValoracio";

export interface IRubrica<T extends ICriteri<IValoracio>>{
    criteris: Array<T>;
    valoracio: string | null;
}