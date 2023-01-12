import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function codiValid(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value: string = control.value;
        if (value) {
            // Si está correcte, retorna null. Si hi ha error, retorna error.
            return value.endsWith('x') ? null : { valid: false }
        }
        else return { valid: false }
    }
}