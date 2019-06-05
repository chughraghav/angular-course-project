import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  cityJSONUrl = '../assets/cityList.json';

  constructor(private http: HttpClient) {
  }

  getCitiesList(): Observable< object >{
    return this.http.get(this.cityJSONUrl);
  }

}
