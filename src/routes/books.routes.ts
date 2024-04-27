import { Router } from "express";
import { BooksController } from "../controllers/books.controllers";
import { IsBookIdValid } from "../middlewares/isBookIdValid.middleware";
import { IsBookNameValid } from "../middlewares/isBookNameValid.middleware";

export const booksRouter = Router();

const booksController = new BooksController();

booksRouter.post("/", IsBookNameValid.execute, booksController.create);
booksRouter.get("/", booksController.getMany);
booksRouter.get("/:id", IsBookIdValid.execute, booksController.getOne);
booksRouter.patch("/:id", IsBookNameValid.execute, IsBookIdValid.execute, booksController.update);
booksRouter.delete("/:id", IsBookIdValid.execute, booksController.delete);