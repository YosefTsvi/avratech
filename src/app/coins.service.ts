import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  constructor(private http: HttpClient) { }

  getCoins(api): Observable<any> {
    return this.http.get(api)
  }
  getCoin(id):Observable<any>{
return this.http.get(`https://api.coingecko.com/api/v3/coins/${id}`);

  }

}
