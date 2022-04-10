import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];
  menuTheme: boolean = false;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numeros'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes'
          }
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        routerLink: 'ordenar'
      }
    ];
    this.menuTheme = false;
  }

  public clickBonusChecked(e:any) {
    // const menuTheme = e.checked;
    this.menuTheme = e.checked;
     if (this.menuTheme) {
      this.themeService.switchTheme('saga-blue');
      //  this.menuTheme = true;
     }
     else {
      this.themeService.switchTheme('vela-blue');
     }
  }
}

