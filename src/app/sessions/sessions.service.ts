import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/observable';

export interface ISession {
  id: number;
  name: string;
  location: string;
  startTime: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable()
export class SessionsService {
  constructor(
    private http: HttpClient,
  ) { }

  getSessions(): Observable<ISession[]> {
    return this.http.get<ISession[]>('http://localhost:3000/sessions');
  }

  getSessionById(id: number) {
    return this.http.get<ISession[]>(`http://localhost:3000/${id}`);
  }

  save(session: ISession): Observable<ISession> {
    if (session.id) {
      return this.http.put<ISession>('http://localhost:3000/sessions', session);
    } else {
      return this.http.post<ISession>('http://localhost:3000/sessions', session);
    }
  }
}
