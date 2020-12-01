import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  private baseUrl = 'http://localhost:8085/';
  private url = this.baseUrl + 'api/wines'

  constructor(private http: HttpClient) { }
}
