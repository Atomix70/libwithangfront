import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(public http:HttpClient) { }

  getbooks(){
    return this.http.get("http://localhost:2000/books")
  }

  addbook(item:any){
    console.log(item);
    return this.http.post("http://localhost:2000/admin/addbook/add",{"book":item})
    .subscribe(data=>{console.log(data)})

  }
}
