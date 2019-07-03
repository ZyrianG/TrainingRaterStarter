import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

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

  apiURL = 'http://localhost:5001/sessions';

  constructor(
    private http: HttpClient,
  ) { }

  getSessions(): Observable<ISession[]> {
    return this.http.get<ISession[]>(`${this.apiURL}`);
  }

  getSessionById(id: number): Observable<ISession> {
    return this.http.get<ISession>(`${this.apiURL}/${id}`);
  }

  save(session: ISession): Observable<ISession | number[]> {
    if (session.id) {
      return this.http.put<number[]>(`${this.apiURL}`, session);
    } else {
      return this.http.post<ISession>(`${this.apiURL}`, session);
    }
  }
}
