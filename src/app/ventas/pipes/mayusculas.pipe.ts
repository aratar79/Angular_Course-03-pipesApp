import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{

    transform(valor: string, enMayusculas?: boolean): string { 
        // En vez de paremetro opcional se le puede dar valor por defecto
        // enMayusculas: boolean = true 
        return (enMayusculas) ? valor.toUpperCase() : valor;
    }


}