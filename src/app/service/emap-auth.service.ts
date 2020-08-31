import { Injectable } from '@angular/core';
import {EmpAuthValue} from "../model/EmpAuthValue";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {EmpTokenValue} from "../model/EmpTokenValue";

@Injectable({
  providedIn: 'root'
})
export class EmapAuthService {
  token: String
  private static AUTH_ENDPOINT = 'http://localhost:8084/authenticate';

  constructor(private http: HttpClient) { }

  authenticate(authValue: EmpAuthValue): Observable<EmpTokenValue> {
    return this.http.post<EmpTokenValue>(EmapAuthService.AUTH_ENDPOINT, {
      "username": authValue.username,
      "password": authValue.password
    }, {headers: new HttpHeaders({
        "Access-Control-Allow-Origin": '*'
      })})
  }
}
