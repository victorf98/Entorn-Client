import { ICarta } from "./ICarta";

export interface ICartaSetIMig extends ICarta{
    valor: number;
    visible: boolean;
    setValue(num: number): void;
}