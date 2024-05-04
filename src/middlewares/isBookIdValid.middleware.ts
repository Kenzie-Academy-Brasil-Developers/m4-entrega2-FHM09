import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";

export class IsBookIdValid{
    static execute(req: Request, res: Response, next: NextFunction){
        const id = +req.params.id;

        if(!booksDatabase.some((book) => book.id === id)){
            return res.status(404).json({ error: "Book not found."});
        }

        next();
    }
}