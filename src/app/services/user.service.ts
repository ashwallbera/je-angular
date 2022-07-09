import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from './UserModel';
let url = environment.api;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiroot= url+'/api/users';
  constructor(public httpClient: HttpClient) {

   }

   getUserList():Observable<UserModel[]>{
     return this.httpClient.get<UserModel[]>(`${this.apiroot}`);
   }
}
