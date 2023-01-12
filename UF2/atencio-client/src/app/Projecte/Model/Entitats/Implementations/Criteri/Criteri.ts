import { ICriteri } from "../../Interfaces/Criteri/ICriteri";
import { IValoracio } from "../../Interfaces/Valoracio/IValoracio";
import { Valoracio } from "../Valoracio/Valoracio";

export class Criteri implements ICriteri<IValoracio>{
    valoracions: Array<Valoracio> = new Array<Valoracio>();
    nom!: string;
    constructor() {
    }

    setNom(nom: string) {
        this.nom = nom;
    }

    setValoracio(valoracio: Valoracio) {
        this.valoracions.push(valoracio);
    }

    setNomiBlocarCamp(nom: string) {
            this.setNom(nom);
            this.blocarCampCriteri();
    }

    blocarCampCriteri() {
        document.getElementsByTagName("input")[0].disabled = true;
    }

    desblocarCampCriteri() {
        document.getElementsByTagName("input")[0].disabled = false;
    }
}