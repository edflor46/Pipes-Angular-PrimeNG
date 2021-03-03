import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})


export class MayusculasPipe implements PipeTransform{

    transform(valor:string, enMayuscula:boolean = true):string {
        console.log(valor);

        // if (enMayuscula) {
        //     return valor.toUpperCase();
        // }else{
        //     return valor.toLowerCase();
        // }
        
        return (enMayuscula) ? valor.toUpperCase() : valor.toLowerCase();
    }




}