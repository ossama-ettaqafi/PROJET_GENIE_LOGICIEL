import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShortService {

  constructor(private http: HttpClient) { }

  getDataById(id: string): Observable<any> {
    return this.http.get<any[]>('assets/api/data/description-short.json').pipe(
      map((data: any[]) => data.find(item => item.id === id))
    );
  }
}
