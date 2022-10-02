import { Component } from '@angular/core';
import { Producto } from './model/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // titulo: string = 'Hola mundo';
  // imag: string = 'https://images.unsplash.com/photo-1663183539627-adbe2c8ef43d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MzgwNzc2NQ&ixlib=rb-1.2.1&q=80&w=1080';
  // btn: boolean = true;
  // name: string = "";
  // o_nombre: string = "";
  // o_apellido: string = "";
  // o_edad: number = 0;
  // persona = {
  //   nombre: 'Juan',
  //   apellido: 'Perez',
  //   edad: 35,
  //   imagen: 'https://w7.pngwing.com/pngs/1008/377/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-black-hair-computer.png'
  // }
  // personas: any[] = [
  //   {
  //     nombre: 'Juan',
  //     apellido: 'Perez',
  //     edad: 35
  //   },
  //   {
  //     nombre: 'Ana',
  //     apellido: 'Garcia',
  //     edad: 23
  //   }
  // ]
  // nombres: string[] = [
  //   "Juan",
  //   "Pedro",
  //   "Luciana", 
  //   "Carla"
  // ];
  // numeros: number[] = [
  //   5,
  //   8,
  //   15,
  //   85
  // ];
  p_nombre: string = "";
  p_precio: number = 0;
  p_imagen: string ="";
  productos: Producto[] = [
    {
      nombre: "para bebes",
      precio: 70,
      imagen: "https://babylock.com.pe/wp-content/uploads/2021/05/80522022-1-300x300.jpg"
    },
    {
      nombre: "set muñeca",
      precio: 50,
      imagen: "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/240x300/productos/i/m/u/muneca-bebe-set-sweetums-22673-default-1.jpg"
    },
    {
      nombre: "set madera",
      precio: 80,
      imagen: "https://perucourier.com/wp-content/uploads/2020/04/juguetes-3-300x300.png"
    },
    {
      nombre: "pista autos",
      precio: 55,
      imagen: "https://maty.pe/wp-content/uploads/2020/12/garage-300x300.jpg"
    },
    {
      nombre: "set miniaturas rol",
      precio: 45,
      imagen: "https://www.guiadelnino.com/var/guiadelnino.com/storage/images/compras/juguetes/funko-y-los-superheroes-de-marvel-se-alian-para-derrotar-a-thanos-en-este-divertido-juego-para-toda-la-familia/11504250-1-esl-ES/funko-y-los-superheroes-de-marvel-se-alian-para-derrotar-a-thanos-en-este-divertido-juego-para-toda-la-familia.jpg"
    },
    {
      nombre: "little people la granja",
      precio: 80,
      imagen: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/22246efe-6e02-4d9b-a7b5-72142bc54996.__CR0,0,2100,2100_PT0_SX300_V1___.jpg"
    },

  ];

  // cambioBoton(): void {
  //   this.btn = !this.btn;
  // }

  // incrementaEdad(): void {
  //   this.persona.edad += 1;
  // }

  // onScroll(event: Event): void {
  //   const elemento = event.target as HTMLElement;
  //   console.log(elemento.scrollTop);
  // }

  // cambioNombre(event: Event): void {
  //   const elemento = event.target as HTMLInputElement;
  //   this.persona.nombre = elemento.value;
  // }

  // agregarNombre(): void {
  //   this.nombres.push(this.name);
  //   this.name = "";
  // }

  // eliminarNombre(posicion: number): void {
  //   this.nombres.splice(posicion, 1);
  // }

  // agregarPersona(): void {
  //   const nuevaPersona = {
  //     nombre: this.o_nombre,
  //     apellido: this.o_apellido,
  //     edad: this.o_edad
  //   };
  //   this.personas.push(nuevaPersona);
  //   this.o_nombre = "";
  //   this.o_apellido = "";
  //   this.o_edad = 0;
  // }

  // eliminarPersona(posicion: number): void {
  //   this.personas.splice(posicion, 1);
  // }

  agregarProducto(): void {
    const nuevoProducto = {
      nombre: this.p_nombre,
      imagen: this.p_imagen,
      precio: this.p_precio
    };
    this.productos.push(nuevoProducto);
    this.p_nombre = "";
    this.p_imagen = "";
    this.p_precio = 0;
  }
}

// ------------------------------------------------------
// TYPESCRIPT
// ------------------------------------------------------

// var usuario: string | number = "imolero";
// console.log(typeof(usuario));
// console.log(usuario);
// usuario = 5;
// console.log(typeof(usuario));
// console.log(usuario);

// const sumaNumeros = (a: number, b: number): number => {
//   const salida = a + b;
//   return salida;
// }

// const valor01: number = 10;
// const valor02: number = 15;

// console.log(sumaNumeros(sumaNumeros(valor01, 20), 50) + " hola");

// class Usuario {
//   // private nombre: string;
//   // private password: string;
//   // private edad: number;

//   constructor(private nombre: string,
//     private password: string, 
//     private edad: number) {
//       // this.nombre = nombre;
//       // this.password = password;
//       // this.edad = edad;
//   }

//   mostrar(): string {
//     const salida = "nombre: " + this.nombre + "\n" + 
//     "password: " + this.password + "\n" +
//     "edad: " + this.edad;
//     return salida;
//   }
// }

// const usr01: Usuario = new Usuario("imolero", "1234", 50);
// const usr02: Usuario = new Usuario("jperez", "123456", 25);

// // console.log("nombre: " + usr01.nombre);
// // console.log("password: " + usr01.password);
// // console.log("edad: " + usr01.edad);

// console.log(usr01.mostrar());
// console.log(usr02.mostrar());