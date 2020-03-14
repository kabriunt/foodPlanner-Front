import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  confirm: string;
  role: string;
  nonExpiredAccount: boolean;
  nonLocked: boolean;
  nonExpiredCredentials: boolean;
  enabled: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly loginEndpoint;
  private readonly registerEndpoint;

  constructor(
    private http: HttpClient) {
    this.loginEndpoint = environment.apiUrl + 'login';
    this.registerEndpoint = environment.apiUrl + 'user';
  }

  login(form: any): Observable<any> {
    return this.http.post(`${this.loginEndpoint}`, JSON.stringify(form), { observe: 'response' });
  }

  register(form: User): Observable<[User]> {
    return this.http.post(this.registerEndpoint, form) as Observable<[User]>;
  }

  private get headers(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };

    return new HttpHeaders(headersConfig);
  }

}
