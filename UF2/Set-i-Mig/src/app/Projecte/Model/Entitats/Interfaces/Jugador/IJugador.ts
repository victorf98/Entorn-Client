import { CartaSetIMig } from "../../Implementations/Carta/CartaSetIMig";

export interface IJugador{
    nom: string;
    cartes: CartaSetIMig[];

    agafar_carta(carta: CartaSetIMig): void;
    contar(): number;
}