import { Carta } from "../Implementations/Carta";

export interface IJugador{
    nom: string;
    cartes: Carta[];

    agafar_carta(carta: Carta): void;
}