import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Senator } from './senator.model';

@Injectable({
  providedIn: 'root'
})
export class SenatorDataService {
  _baseUrl = 'http://localhost:3000/api/';

  constructor(private _http:HttpClient) { }

  public getAllSenators(): Observable<Senator[]>{
    const url = this._baseUrl + 'senators';
    return this._http.get<Senator[]>(url);
  }
  
  public getOneSenator(senatorId:string): Observable<Senator>{
    const url = this._baseUrl + 'senators/' + senatorId;
    return this._http.get<Senator>(url);
  }
  
  public deleteOneSenator(senatorId:string): Observable<Senator>{
    const url = this._baseUrl + 'senators/' + senatorId;
    return this._http.delete<Senator>(url);
  }
}
