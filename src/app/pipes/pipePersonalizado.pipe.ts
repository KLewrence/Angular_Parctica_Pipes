import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
 name:'pipePersonalizado'
})

export class PipePersonalizado implements PipeTransform{
    transform(value:string, todasCapi: boolean = true):string{
        let nombre = value.toLowerCase();
        let nombres = nombre.split(" ");

        if (todasCapi){
            for(let i in nombres){
                nombres[i] = nombres[i][0].toUpperCase()  + nombres[i].substr(1);
            }
        }
        else{
            nombres[0] = nombres[0][0].toUpperCase()  + nombres[0].substr(1);
        }
        return nombres.join(" ");
    }
}

