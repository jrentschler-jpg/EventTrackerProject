import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Wine } from '../models/wine';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  // private baseUrl = 'http://localhost:8085/';
  // private baseUrl = '/WineTracker/';
  baseUrl = environment.baseUrl
  url = this.baseUrl + 'api/wines'

  constructor(private http: HttpClient) { }

  index():Observable<Wine[]> {
    return this.http.get<Wine[]>(this.url + '?sorted=true').pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('WineService.index(): Error retrieving wine list');
      })
    );
  }
  create(wine: Wine): Observable<Wine>{
    return this.http.post<Wine>(this.url, wine).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('WineService.create(): Error retrieving create');
      })
    );

  }
  update(wine: Wine): Observable<Wine>{
    return this.http.put<Wine>(`${this.url}/${wine.id}`, wine).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('WineService.update(): Error updating todo');
      })
    );
  }
  destroy(id: number): Observable<boolean>{
    return this.http.delete<boolean>(`${this.url}/${id}`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('WineService.destroy(): Error deleting todo');
      })
    );
  }

}
