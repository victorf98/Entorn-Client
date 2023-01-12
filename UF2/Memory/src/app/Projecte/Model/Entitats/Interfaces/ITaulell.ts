import { Carta } from "../Implementations/Carta";
import { Taulell } from "../Implementations/Taulell";
import { IBaralla } from "./IBaralla";
import { ICarta } from "./ICarta";

export interface ITaulell<T extends IBaralla<ICarta>> {
    baralles: Array<T>;
    errors: number;
    cartes_trobades: Array<ICarta>;
    generar(): void;
    iguals(cartes: Array<Carta>): boolean;
    estaTrobada(img: string): boolean;
    comprovarFiRonda(taulell: Taulell): boolean;
    obtenirCartesGirades(taulell: Taulell): Array<Carta>;
    girarCartes(taulell: Taulell): void;
    desbloquejarCartes(taulell: Taulell): void;
}