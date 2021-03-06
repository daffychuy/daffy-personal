import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { home } from './home.interface';
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<home[]> {
    return this.http.get<home[]>('/api/personal/v1/personal').pipe(delay(0));
  }

}
