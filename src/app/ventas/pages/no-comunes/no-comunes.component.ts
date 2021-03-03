import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  //i18nselect
  nombre: string = 'Eduardo';
  genero: string = 'masculino';

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i18nplural

  clientes: string[] = ['Maria', 'Eduardo', 'Pedro', 'Luis', 'Alfonso'];
  clientesMap = {
    '=0': 'No tenemos ningun cliente esperando.',
    '=1': 'Tenemos un cliente esperando',
    '=2': 'Tenemos 2 clientes esperando',
    other: 'Actualmente tenemos # clientes esperando',
  };

  cambiarCliente() {
    this.nombre = 'Melissa';
    this.genero = 'femenino';
  }

  //Borrar cliente

  borrarCliente() {
    this.clientes.pop();
  }

  //key value plural

  persona = {
    nombre: 'Eduardo',
    edad: 20,
    direcion: 'Mexico',
  };

  //json pipe

  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },

    {
      nombre: 'Robin',
      vuela: false,
    },

    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];

  //async pipe
  miObservable = interval(1000);

  valor = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
