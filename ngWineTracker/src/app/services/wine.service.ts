import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Wine } from '../models/wine';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  private baseUrl = 'http://localhost:8085/';
  private url = this.baseUrl + 'api/wines'

  constructor(private http: HttpClient) { }

  index():Observable<Wine[]> {
    return this.http.get<Wine[]>(this.url + '?sorted=true').pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('WineService.index(): Error retrieving wine list');
      })
    );
  }
  destroy(id: number): Observable<boolean>{
    return this.http.delete<boolean>(`${this.url}/${id}`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('TodoService.destroy(): Error deleting todo');
      })
    );
  }

}
