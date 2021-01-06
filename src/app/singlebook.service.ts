import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SinglebookService {

  constructor(public http:HttpClient) { }

  getbook(id:any){
    return this.http.get("http://localhost:2000/books/"+id);
    }
}
