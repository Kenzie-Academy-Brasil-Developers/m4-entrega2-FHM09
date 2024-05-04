import { booksDatabase, generateBookId } from "../database/database";
import { TBook, TCreateBookData, TUpdateBookData } from "../interfaces/books.interface";

export class BooksService {
    create(data: TCreateBookData){
        const now = new Date();

        const newBook: TBook = {
            id: generateBookId(),
            ...data,
            createdAt: now,
            updatedAt: now,
        };

        booksDatabase.push(newBook);

        return newBook;
    }

    getMany(search?: string) {
        const filteredBookList = booksDatabase.filter((book) => 
            search ? book.name.toLowerCase().includes(search.toLowerCase()) : true);

        return filteredBookList;
    }

    getOne(id: number) {
        const book = booksDatabase.find((book) => book.id === id);
        
        return book;
    }

    update(id: number, data: TUpdateBookData){
        const currentBook = booksDatabase.find((book) => book.id === id) as TBook;
        
        const now = new Date();

        const updateBook: TBook = {
            ...currentBook,
            ...data,
            updatedAt: now,
        };

        const index = booksDatabase.findIndex((book) => book.id === id);

        booksDatabase.splice(index, 1, updateBook);

        return updateBook;
    }

    delete(id: number) {
        const index = booksDatabase.findIndex((book) => book.id === id);

        booksDatabase.splice(index, 1);

        return "Book successfully deleted.";
    }
}