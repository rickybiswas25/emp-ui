import { Injectable } from '@angular/core';
import {EmpAuthValue} from "../model/EmpAuthValue";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmapAuthService {
  token: String

  constructor(private http: HttpClient, ) { }

  authenticate(authValue: EmpAuthValue) {
    return null

  }
}
