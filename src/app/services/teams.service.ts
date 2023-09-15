import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import ITeam from '../modules/team';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private http: HttpClient) {}

  teams: ITeam[] = [
    {
      id: 1,
      name: '',
      result: [],
      scored: 0,
      missed: 0,
      glasses: 0,
      goal: null,
      place: 0,
    },
    {
      id: 2,
      name: '',
      result: [],
      scored: 0,
      missed: 0,
      glasses: 0,
      goal: null,
      place: 0,
    },
    {
      id: 3,
      name: '',
      result: [],
      scored: 0,
      missed: 0,
      glasses: 0,
      goal: null,
      place: 0,
    },
  ];

  // getAll(): Observable<ITeam[]> {
  //   return this.http
  //     .get<ITeam[]>('http://localhost:3000/teams')
  //     .pipe(tap((teams) => (this.teams = teams)));
  // }

  // create(team: ITeam): Observable<ITeam> {
  //   return this.http
  //     .post<ITeam>('http://localhost:3000/teams', team)
  //     .pipe(tap((tm) => this.teams.push(tm)));
  // }
  // delete(team: ITeam): Observable<ITeam> {
  //   return this.http.delete<ITeam>('http://localhost:3000/teams', team);
  // }
}
