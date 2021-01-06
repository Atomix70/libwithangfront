import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SingleauthService {

  constructor(public http:HttpClient) { }

 
  getauthor(){
    this.http.get("")
    }

}
