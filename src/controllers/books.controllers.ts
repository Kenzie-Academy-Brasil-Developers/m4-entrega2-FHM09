import { Request, Response } from "express";
import { BooksService } from "../services/books.services";

export class BooksController {
    create(req: Request, res: Response): Response{
        const booksService = new BooksService();

        const book = booksService.create(req.body);

        return res.status(201).json(book);
    }

    getMany(req: Request, res: Response): Response{
        const booksService = new BooksService();

        const books = booksService.getMany(req.query.search as string);

        return res.status(200).json(books);
    }

    getOne(req: Request, res: Response): Response{
        const booksService = new BooksService();

        const book = booksService.getOne(+req.params.id);

        return res.status(200).json(book);
    }

    update(req: Request, res: Response): Response{
        const booksService = new BooksService();

        const book = booksService.update(+req.params.id, req.body);

        return res.status(200).json(book);
    }

    delete(req: Request, res: Response): Response{
        const booksService = new BooksService();

        booksService.delete(+req.params.id); 

        return res.status(204).json();
    }
}