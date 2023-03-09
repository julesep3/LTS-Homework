import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {
  private baseApiUrl: string = "http://localhost:5000";
  // private baseApiUrl: string = environment.baseApiUrl;
  constructor(private http : HttpClient) { }

  signUp(userObj: any) {
    return this.http.post<any>(`${this.baseApiUrl}/Accounts/register`, userObj);
  }
  
  login(loginObj: any) {
    return this.http.post<any>(`${this.baseApiUrl}/Accounts/login`, loginObj);
  }
}
