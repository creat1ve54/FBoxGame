import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import IMatch from '../modules/match';
import IResult from '../modules/results';

@Injectable({
  providedIn: 'root',
})
export class MatchsService {
  constructor(private http: HttpClient) {}

  matchs: IMatch[] = [];
  firstMatch: IMatch;
  thirdMatch: IMatch;
  results: IResult[] = [];
  inputDisabled: boolean = false
  addBtn: boolean = false
  deleteBtn: boolean = false
}
