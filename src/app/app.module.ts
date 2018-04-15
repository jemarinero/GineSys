import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { 
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule, 
  MatCardModule,
  MatTabsModule,
  MatExpansionModule,
  MatListModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GineSidebarComponent } from './gine-sidebar/gine-sidebar.component';
import { HomeComponent } from './home/home.component';
import { GineMenuComponent } from './gine-menu/gine-menu.component';
import { OcupacionesComponent } from './ocupaciones/ocupaciones.component';
import { OcupacionesService } from './services/ocupaciones.service';


@NgModule({
  declarations: [
    AppComponent,
    GineSidebarComponent,
    HomeComponent,
    GineMenuComponent,
    OcupacionesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatTabsModule,
    MatExpansionModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'ocupaciones', component: OcupacionesComponent },   
      { path: '**', component: HomeComponent }      
    ])
  ],
  providers: [
    OcupacionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
