import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  nombre:string = "Brenda"
  arreglo:number[] = [0,1,2,3,4,5,6,7,8,9,10]
  PI:number = Math.PI;
  a:number = 0.234;
  salario:number = 12345.34;

  heroe = {
    nombre:"Superman",
    clave:"Super",
    edad:5000,
    direccion:{
      calle:"libertad 3000",
      casa:"3000"
    }
  }

  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve('Lllegaron los datos!'),3500);
  })

  date = new Date();

  nombreCom = "breNda ruiz acOSta";

  video = "mOeSfOJrUIk";

  pass = "estaEsMyPassword123";
  //pass = "fran23"

  activo:boolean = false; 

}
