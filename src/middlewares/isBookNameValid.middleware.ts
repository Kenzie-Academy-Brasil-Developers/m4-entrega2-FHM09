import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";

export class IsBookNameValid{
    static execute(req: Request, res: Response, next: NextFunction){
        const { name } = req.body;

        if(booksDatabase.some((book) => book.name === name)){
            return res.status(409).json({ error: "Book already registered."});
        }
        
        next();
    }
}