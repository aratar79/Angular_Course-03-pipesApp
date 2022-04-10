import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.scss']
})
export class OrdenarComponent implements OnInit {


  enMayusculas: boolean = true;
  orderBy: string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: true,
      color: Color.rojo
    }
  ]

  get cambiaIcon(): string {

    return (this.enMayusculas) ? 'pi pi-sort-amount-up' : 'pi pi-sort-amount-down'
  }

  constructor() { }

  ngOnInit(): void {
  }

  cambiaMayusculas(): void {
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(valor: string) {
    this.orderBy = valor;
  }


}
