import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.scss']
})
export class NoComunesComponent {

  //i18nSelect
  personaActual: persona = {
    nombre: 'Susana',
    genero: 'femenino'
  };
  susana: persona = {
    nombre: 'Susana',
    genero: 'femenino'

  };

  pedro: persona = {
    nombre: 'Pedro',
    genero: 'masculino'
  };

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  };

  iconPersona: string = "pi pi-heart";

  get personaje(): persona {

    if (this.personaActual.nombre === 'Susana') {
      return this.pedro;
    }
    else {
      return this.susana;
    }
  }

  cambiarGenero(): void {
    if (this.personaActual.nombre === 'Susana') {
      this.personaActual = this.pedro;
      this.iconPersona = 'pi pi-user';
    }
    else {
      this.personaActual = this.susana;
      this.iconPersona = 'pi pi-heart';
    }
  }



  //i18nPlural
  iconPlural: string = '';

  clientesSingular: string[] = ['Maria'];
  clientesPlural: string[] = ['Maria', 'Pedro', 'Juan'];

  badge: number = this.clientesPlural.length;

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos a un cliente esperando',
    'other': 'tenemos a # clientes esperando'
  };

  get iconUsers(): string {

    switch (this.clientesPlural.length) {
      
      case 0: {
        return '';
        break;
      }
      case 1: {
        return 'pi pi-user';
        break;
      }
      default: {
        return 'pi pi-users'
      }
    }
  }

  quitarClientes(): void {

    if (this.badge < 1) this.clientesPlural = ['Maria', 'Pedro', 'Juan'];
    this.clientesPlural.pop();
    this.badge = this.clientesPlural.length;

    

  }
}

interface persona {
  nombre: string;
  genero: string;
}