import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { OcupacionesService } from './../services/ocupaciones.service';
import { Ocupacion } from './../models/ocupacion';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { OcupacionFormComponent } from './../ocupacion-form/ocupacion-form.component';

@Component({
  selector: 'ocupaciones',
  templateUrl: './ocupaciones.component.html',
  styleUrls: ['./ocupaciones.component.css']
})
export class OcupacionesComponent implements OnInit, OnDestroy {
  ocupaciones: Ocupacion[];
  displayedColumns = ['actions','ocupacionId', 'descripcion', 'fechaCreacion', 'fechaModificacion', 'usuarioCreacion', 'usuarioModificacion'];
  dataSource = new MatTableDataSource<Ocupacion>();
  subscription: Subscription; 

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(
    private ocupacionesService: OcupacionesService,
    private dialog: MatDialog  
  ) { 
    
    
  }

  ngOnInit() {
    this.getOcupaciones();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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

  openOcupacionDialog(ocupacion?) {
      this.dialog.open(OcupacionFormComponent,{
        width: '500px',
        data: ocupacion ? ocupacion : {}
      })
      .afterClosed()
      .subscribe(res => {
        if(res.ocupacionId){
          this.ocupacionesService.update(res)
            .subscribe(res => {
              console.log(res);
            });
        }
      });
  }
}
