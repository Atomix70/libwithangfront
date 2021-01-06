import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AddauthComponent } from './addauth/addauth.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SinglebookComponent } from './singlebook/singlebook.component';
import { SingleauthComponent } from './singleauth/singleauth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AddbookComponent,
    AddauthComponent,
    BooksComponent,
    AuthorsComponent,
    BookComponent,
    AuthorComponent,
    FooterComponent,
    SinglebookComponent,
    SingleauthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
