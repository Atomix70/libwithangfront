import { Component, OnInit } from '@angular/core';
import {BooksService} from '../books.service';
import{Router} from '@angular/router'
import {BooksModel} from '../books/books.model'
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private booksserv:BooksService,private router:Router) { }
  newBook= new BooksModel("","","","","","",0,0,"")
  ngOnInit(): void {
  }
  addBook(){
    this.booksserv.addbook(this.newBook);
    alert("test")
    console.log(this.newBook)
    this.router.navigate(['/books'])
  }



}
