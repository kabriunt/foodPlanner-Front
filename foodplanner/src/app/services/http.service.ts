import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private store: Store<any>) { }

  post(serviceName: string, data: any) {
    // const headers = new HttpHeaders();
    const options = { headers: this.headers, withCredentials: false };

    const url = environment.apiUrl + serviceName;

    return this.http.post(url, JSON.stringify(data), options);
  }

  private get headers(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: localStorage.getItem('token')
    };

    return new HttpHeaders(headersConfig);
  }
}
