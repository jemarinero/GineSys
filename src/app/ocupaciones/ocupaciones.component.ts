import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { OcupacionesService } from './../services/ocupaciones.service';
import { Ocupacion } from './../models/ocupacion';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ocupaciones',
  templateUrl: './ocupaciones.component.html',
  styleUrls: ['./ocupaciones.component.css']
})
export class OcupacionesComponent implements OnInit {
  ocupaciones: Ocupacion[];
  displayedColumns = ['actions','ocupacionId', 'descripcion', 'fechaCreacion', 'fechaModificacion', 'usuarioCreacion', 'usuarioModificacion'];
  dataSource = new MatTableDataSource<Ocupacion>();
  subscription: Subscription; 

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private ocupacionesService: OcupacionesService) { 
    this.getOcupaciones();
    
  }

  ngOnInit() {
    
  }

  getOcupaciones() {
    this.subscription = this.ocupacionesService.getAll()
      .subscribe(ocupaciones => {
        this.ocupaciones = ocupaciones;
        this.initTable(this.ocupaciones)
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  initTable(ocupaciones: Ocupacion[]) {
    this.dataSource.data = ocupaciones;
    this.dataSource.paginator = this.paginator;
  }

  
}
