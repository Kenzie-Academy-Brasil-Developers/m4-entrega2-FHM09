import { booksDatabase, generateBookId } from "../database/database";
import { IBook, TCreateBody, TUpdateBody } from "../interfaces/books.interface";

export class BooksService {
    create(body: TCreateBody){
        const now = new Date();

        const newBook: IBook = {
            id: generateBookId(),
            name: body.name,
            pages: body.pages,
            category: body.category,
            createdAt: now,
            updatedAt: now,
        };

        booksDatabase.push(newBook);

        return newBook;
    }

    getMany(search?: string): IBook[]{
        const filteredBookList = booksDatabase.filter((book) => 
            search ? book.name.toLowerCase().includes(search.toLowerCase()) : true);

        return filteredBookList;
    }

    getOne(id: string): IBook{
        const book = booksDatabase.find((book) => book.id === +id) as IBook;
        
        return book;
    }

    update(id: string, data: TUpdateBody){
        const currentBook = booksDatabase.find((video) => video.id === +id) as IBook;
        
        const now = new Date();

        const updateBook: IBook = {
            ...currentBook,
            ...data,
            updatedAt: now,
        };

        const index = booksDatabase.findIndex((book) => book.id === +id);

        booksDatabase.splice(index, 1, updateBook);

        return updateBook;
    }

    delete(id: string): void{
        const index = booksDatabase.findIndex((book) => book.id === +id);

        booksDatabase.splice(index, 1);
    }
}