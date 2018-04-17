import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-gine-delete-warning',
  templateUrl: './gine-delete-warning.component.html',
  styleUrls: ['./gine-delete-warning.component.css']
})
export class GineDeleteWarningComponent {
  info: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
    this.info = data;
  }


}
