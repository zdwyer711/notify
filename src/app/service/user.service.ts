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
    const serverUrl = 'https://52.170.188.135:8080/notify/v1/subscription';
    return this.http.get<UserModel[]>(serverUrl, {});
  }

  setGuestSubscriptionOff(): Observable<any> {
    const serverUrl =   'https://52.170.188.135:8080/notify/v1/subscription?id=007&subscription=false';
    const headers = { 'content-type': 'application/json'}  
    return this.http.post<any>( serverUrl, "",{'headers':headers})
  }

  setGuestSubscriptionOn(): Observable<any> {
    const serverUrl =   'https://52.170.188.135:8080/notify/v1/subscription?id=007&subscription=true';
    const headers = { 'content-type': 'application/json'}  
    return this.http.post<any>( serverUrl, "",{'headers':headers})
  }
}