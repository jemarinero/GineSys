import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gine-menu',
  templateUrl: './gine-menu.component.html',
  styleUrls: ['./gine-menu.component.css']
})
export class GineMenuComponent {
  panelOpenState: boolean = false;
  expandableMenu: any[] = [];
  selectedMenu: string;

  @Input('drawer') drawer;

  constructor() {
    this.initMenu();
   }

  initMenu() {
    this.expandableMenu = [
      { 
        title: 'Configuracion',
        subMenus: [
          {
            title: 'Ocupaciones',
            route: '/ocupaciones'
          },
          {
            title: 'Ocupaciones',
            route: '/ocupaciones'
          },
          {
            title: 'Ocupaciones',
            route: '/ocupaciones'
          }
        ]
      },
      { 
        title: 'Configuracion 2',
        subMenus: [
          {
            title: 'Ocupaciones',
            route: '/ocupaciones'
          }
        ]
      }
    ];
  }

  toggleFiller(){
    this.drawer.toggle();
  }
}
