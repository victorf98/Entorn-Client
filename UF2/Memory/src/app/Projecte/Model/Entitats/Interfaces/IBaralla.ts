import { ICarta } from "./ICarta";

export interface IBaralla<T extends ICarta>{
    cartes: Array<T>;
    generar():void;
    barrejar():void;
}