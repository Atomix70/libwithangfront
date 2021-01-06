import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{SinglebookService} from '../singlebook.service'

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.css']
})
export class SinglebookComponent implements OnInit {

  book:any;
  constructor(private singlebookserv:SinglebookService,private router:Router,) { }

  ngOnInit(): void {
    var string=this.router.url;
    string=string.replace("/books/","");
    console.log(string)
    this.singlebookserv.getbook(string).subscribe((data:any)=>{
      this.book=data;
    console.log(this.book)
    })
  }

}
