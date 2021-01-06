import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import {BooksModel} from './books.model'
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  // books:BooksModel[]=[];
  data:any;
  constructor(private obj:BooksService) { }

  ngOnInit(): void {
    this.obj.getbooks().subscribe((indata)=>{
      // this.books=JSON.parse(JSON.stringify(indata));
      this.data=indata;
      console.log(this.data)
    })
  }

}
