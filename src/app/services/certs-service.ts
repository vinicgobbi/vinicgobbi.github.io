import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cert } from '../shared/interfaces/cert';

@Injectable({
  providedIn: 'root',
})
export class CertsService {
  constructor(private http: HttpClient) {}

  getCerts(): Observable<Cert[]> {
    return this.http.get<Cert[]>("./assets/certs.json");
  }
  
}
