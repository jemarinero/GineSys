import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
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
  MatPaginatorModule,
  MatTooltipModule,
  MatDialogModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';
import { GineSidebarComponent } from './gine-sidebar/gine-sidebar.component';
import { HomeComponent } from './home/home.component';
import { GineMenuComponent } from './gine-menu/gine-menu.component';
import { OcupacionesComponent } from './ocupaciones/ocupaciones.component';
import { OcupacionesService } from './services/ocupaciones.service';
import { AppErrorHandler } from './common/app-error-handler';
import { OcupacionFormComponent } from './ocupacion-form/ocupacion-form.component';
import { FormsModule } from '@angular/forms';
import { GineDeleteWarningComponent } from './gine-delete-warning/gine-delete-warning.component';

@NgModule({
  declarations: [
    AppComponent,
    GineSidebarComponent,
    HomeComponent,
    GineMenuComponent,
    OcupacionesComponent,
    OcupacionFormComponent,
    GineDeleteWarningComponent
  ],
  entryComponents: [
    OcupacionFormComponent,
    GineDeleteWarningComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpModule,
    FormsModule,
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
    MatTooltipModule,
    MatDialogModule,
    ToastModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'ocupaciones', component: OcupacionesComponent },
      { path: '**', component: HomeComponent }      
    ])
  ],
  providers: [
    OcupacionesService,
     { provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
