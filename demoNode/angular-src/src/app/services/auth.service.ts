import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http,Headers} from '@angular/http';
import {nguoidung} from '../nguoidung';


@Injectable()
export class AuthService {

  
  constructor(private http:Http) { }

  dangky(nguoidung){
    let headers = new  Headers;
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/nguoidung/dangky',nguoidung,{headers : headers}).map(res=>res.json());
  }

}
