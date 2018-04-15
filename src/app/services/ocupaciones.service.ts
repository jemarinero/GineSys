import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OcupacionesService {
  private url = 'http://192.168.0.96:8010/api/ocupaciones';

  constructor(private http: Http) {

   }
   
   getAll() {
    return this.http.get(this.url)
      .map(response => response.json());
   }
}
