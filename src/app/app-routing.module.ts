import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddbookComponent} from './addbook/addbook.component'
import {AddauthComponent} from './addauth/addauth.component'
import {BooksComponent} from './books/books.component'
import {AuthorsComponent} from './authors/authors.component'
import {SinglebookComponent} from './singlebook/singlebook.component'
import {SingleauthComponent} from './singleauth/singleauth.component'


const routes: Routes = [
  {path:'addbook',component:AddbookComponent},
  {path:'addauthor',component:AddauthComponent},
  {path:'books',component:BooksComponent},
  {path:'authors',component:AuthorsComponent},
  {path:'books/:id',component:SinglebookComponent},
  {path:'author/:id',component:SingleauthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
