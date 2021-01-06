export class BooksModel{
    constructor(
        public bookId:string,
        public bookImage:string,
        public bookTitle:string,
        public bookAuthor:string,
        public bookCountry:string,
        public bookLanguage:string,
        public bookPages:number,
        public bookYear:number,
        public bookLink:String
    ){}

}