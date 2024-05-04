import { z } from "zod";
import { bookSchema, createBookSchema, updateBookSchema } from "../schemas/books.schema";

export type TBook = z.infer<typeof bookSchema>;

export type TCreateBookData = z.infer<typeof createBookSchema>;

export type TUpdateBookData = z.infer<typeof updateBookSchema>;