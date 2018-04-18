import { AppError } from './../common/app-error';
import { GineDeleteWarningComponent } from './../gine-delete-warning/gine-delete-warning.component';
import { Component, OnInit, ViewChild, OnDestroy, ViewContainerRef } from '@angular/core';
import { OcupacionesService } from './../services/ocupaciones.service';
import { Ocupacion } from './../models/ocupacion';
import { MatTableDataSource, MatPaginator, MatDialog, MatPaginatorIntl } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { OcupacionFormComponent } from './../ocupacion-form/ocupacion-form.component';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'ocupaciones',
  templateUrl: './ocupaciones.component.html',
  styleUrls: ['./ocupaciones.component.css']
})
export class OcupacionesComponent implements OnInit, OnDestroy {
  ocupaciones: Ocupacion[];
  displayedColumns = [
    'actions',
    'ocupacionId', 
    'descripcion', 
    'fechaCreacion', 
    'fechaModificacion', 
    'usuarioCreacion', 
    'usuarioModificacion'
  ];
  dataSource = new MatTableDataSource<Ocupacion>();
  subscription: Subscription; 

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(
    private ocupacionesService: OcupacionesService,
    private dialog: MatDialog,
    public toastr: ToastsManager,
    vcr: ViewContainerRef
  ) { 
    this.toastr.setRootViewContainerRef(vcr);
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
      .subscribe(ocupacion => {
          this.save(ocupacion);
      });
  }

  save(ocupacion: Ocupacion) {
    if(ocupacion) {
      if(ocupacion.ocupacionId)
        this.update(ocupacion);
      else
        this.create(ocupacion);
    }
  }

  openDeleteDialog(ocupacion) {
    this.dialog.open(GineDeleteWarningComponent,{
      width: '500px',
      data: ocupacion.descripcion
    })
    .afterClosed()
    .subscribe(res => {
      if(res) {
       this.delete(ocupacion);
      }
    });
  }

  create(ocupacion: Ocupacion) {
    ocupacion.usuarioCreacion = 'jemarinero'
    this.ocupacionesService
      .create(ocupacion)
      .subscribe(createdOcupacion => {
        this.toastr.success('Ocupación: '+createdOcupacion.ocupacionId+': '+createdOcupacion.descripcion+'. Creado correctamente.','Creación');
        this.getOcupaciones();
      }, 
      (error: AppError) => {
        this.toastr.error(error.originalError,'Ocurrió un error!');
      });
  }

  update(ocupacion: Ocupacion) {
    ocupacion.usuarioModificacion = 'jemarinero'
    this.ocupacionesService
      .update(ocupacion.ocupacionId,ocupacion)
      .subscribe(updatedOcupacion => {
          this.toastr.success('Ocupación: '+updatedOcupacion.ocupacionId+': '+updatedOcupacion.descripcion+'. Actualizado correctamente.','Actualización');
          this.getOcupaciones();
      }, (error: AppError) => {
        this.toastr.error(error.originalError,'Ocurrió un error!');
      });
  }

  delete(ocupacion: Ocupacion) {
    this.ocupacionesService
        .delete(ocupacion.ocupacionId)
        .subscribe(deletedOcupacion => {
          this.toastr.success('Ocupación: '+deletedOcupacion.ocupacionId+': '+deletedOcupacion.descripcion+'. Eliminado correctamente.','Eliminación');
          this.getOcupaciones();
        }, 
        (error: AppError) => {
          this.toastr.error(error.originalError,'Ocurrió un error!');
          this.getOcupaciones();
        });
  }
}
