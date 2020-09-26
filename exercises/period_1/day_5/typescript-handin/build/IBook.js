"use strict";
let log = (book) => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.published}, Pages: ${book.pages}`);
};
// test interface with duck-typing
let b1 = { title: 'Duck Title', author: 'Duck Author', published: new Date('2020-09-26'), pages: 321 };
log(b1);
// test interface with optional props
let b2 = { title: 'Duck Title', author: 'Duck Author' };
log(b2); // working but published and pages are now undefined
// test interface with readonly props
let b3 = { title: 'Duck Title', author: 'Duck Author' };
//b3.author = 'New Author'; // not allowed
class Book {
    constructor(title, author, published, pages) {
        this.title = title;
        this.author = author;
        this.published = published;
        this.pages = pages;
    }
}
// test interface using a class (Java way of implements an Interface)
let bookClass = new Book("Class Title", "Class Author", new Date('2020-09-26'), 321);
log(bookClass);
//# sourceMappingURL=IBook.js.map