import { Injectable } from '@angular/core';
import { SignInRequestModel } from '../models/signin.model';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs';
import { environment } from '../../../../environments/environment';

const authURL: string = environment.url_api_auth;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signin(signInRequestModel: SignInRequestModel) {
    return this.http.post(authURL + 'signin', signInRequestModel).pipe(
      tap((response: any) => {
        sessionStorage.setItem('token', response.jwt);
      }),
      map((response: any) => response.jwt)
    );
  }
}
