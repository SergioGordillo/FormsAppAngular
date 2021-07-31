import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  validateEmail(email:string){
    return this.http.get<any[]>(`http://localhost:3000/users?q=${email}`)
 }
}
