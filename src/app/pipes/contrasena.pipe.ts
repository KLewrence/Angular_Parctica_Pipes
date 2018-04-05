import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, active:boolean = true): string {
    //console.log(value.length)
    if (active){
      //let newText = ''
      for(let i = 0;i < value.length;i++){
        //newText =newText + "*";
        value = value.replace(value[i],"*");
      }
      //value =newText;
      console.log( `password: ` + value)
      console.log("estatus: Contrasena Pipe activo");
    }
    else{
      console.log("estatus: Contrasena Pipe inactivo");
    }
    return value;
  }

}
