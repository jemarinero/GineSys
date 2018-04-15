import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Ocupacion } from './../models/ocupacion';

@Component({
  selector: 'app-ocupacion-form',
  templateUrl: './ocupacion-form.component.html',
  styleUrls: ['./ocupacion-form.component.css']
})
export class OcupacionFormComponent implements OnInit {
  ocupacion: Ocupacion;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
      this.ocupacion = data;
   }

  ngOnInit() {
  }

}
