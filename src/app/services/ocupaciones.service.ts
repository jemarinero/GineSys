import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DataService } from './data.service';

@Injectable()
export class OcupacionesService extends DataService {
  
  constructor(http: Http) {
    super('http://localhost:8020/api/ocupaciones',http);
  }
}
