import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getGuestUserList(): Observable<UserModel[]>{
    const serverUrl = 'http://localhost:8080/notify/v1/subscription';
    return this.http.get<UserModel[]>(serverUrl, {});
  }
}
