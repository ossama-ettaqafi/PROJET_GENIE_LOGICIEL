import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  constructor(private http: HttpClient) { }

  // News
  getAllNews(): Observable<any[]> {
    return this.http.get<any[]>('assets/api/data/news.json');
  }
  getNewById(id: string): Observable<any> {
    return this.http.get<any[]>('assets/api/data/news.json').pipe(
      map((data: any[]) => data.find(item => item.id === id))
    );
  }

  // Events
  getAllEvents(): Observable<any[]> {
    return this.http.get<any[]>('assets/api/data/events.json');
  }
  getEventById(id: string): Observable<any> {
    return this.http.get<any[]>('assets/api/data/events.json').pipe(
      map((data: any[]) => data.find(item => item.id === id))
    );
  }

    // Pubs
    getAllPubs(): Observable<any[]> {
      return this.http.get<any[]>('assets/api/data/pubs.json');
    }
    getPubById(id: string): Observable<any> {
      return this.http.get<any[]>('assets/api/data/pubs.json').pipe(
        map((data: any[]) => data.find(item => item.id === id))
      );
    }
}
