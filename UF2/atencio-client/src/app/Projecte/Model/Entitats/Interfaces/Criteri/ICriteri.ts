import { Valoracio } from "../../Implementations/Valoracio/Valoracio";
import { IValoracio } from "../Valoracio/IValoracio";

export interface ICriteri<T extends IValoracio>{
    nom: string;
    valoracions: Array<T>;
    setNom(nom: string): void;
    setValoracio(valoracio: Valoracio): void;
    setNomiBlocarCamp(nom: string): void;
    blocarCampCriteri(): void;
    desblocarCampCriteri(): void;
}