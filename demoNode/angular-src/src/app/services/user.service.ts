import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http:Http) { }

  addUser(newUser){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/user/create',newUser,{headers : headers}).map(res=>res.json());
  }
  getUser(){
    return this.http.get('http://localhost:3000/user/all').map(res=>res.json());
  }
  getImage(){
    return this.http.get('http://localhost:3000/user/hinh').map(res=>res.json());
  }

  updateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put('http://localhost:3000/user/update/' + user.id,JSON.stringify(user),{headers:headers}).map(res=>res.json);
  }
  deleteUser(id){
    let header = new Headers();
    header.append('Content-Type','application/json');
    return this.http.delete('http://localhost:3000/user/delete/' + id,{headers : header}).map(res=>res.json());
  }
}
