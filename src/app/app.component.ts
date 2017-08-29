import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  nombre = "Gonzalo";

  nombre2 = "GoNzAlO rOdRiGo QuIrOz gOnZaLeZ"

  arreglo = [1,2,3,4,5,6,7,8,9,10];
  
  PI = Math.PI
  
  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: "Bruce Wane",
    clave: "Batman",
    edad: 52,
    direccion: {
      calle: "Privada",
      casa: "Mansion Wane"
    }
  };

valorDePromesa = new Promise( ( resolve, reject) => {
  setTimeout( () => resolve('Llego la data'), 3500 );
});

fecha = new Date()

}
