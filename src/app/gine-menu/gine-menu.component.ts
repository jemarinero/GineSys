import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gine-menu',
  templateUrl: './gine-menu.component.html',
  styleUrls: ['./gine-menu.component.css']
})
export class GineMenuComponent implements OnInit {
  panelOpenState: boolean = false;
  expandableMenu: any[] = [];

  constructor() {
    this.initMenu();
   }

  ngOnInit() {
  }

  initMenu() {
    this.expandableMenu = [
      { 
        title: 'Configuracion',
        subMenus: [
          {
            title: 'Ocupaciones',
            route: '/ocupaciones'
          }
        ]
      }
    ];
  }
}
