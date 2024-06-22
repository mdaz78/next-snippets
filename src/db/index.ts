import { PrismaClient } from "@prisma/client";

// Used to perform CRUD operations on the database
export const db = new PrismaClient();


/**
 * Creates a new snippet in the database.
 * @param title - The title of the snippet.
 * @param code - The code content of the snippet.
 * @returns A promise that resolves to the created snippet.
 */
export const createSnippetInDB = (title: string, code: string) => {
  return db.snippet.create({
    data: {
      title,
      code,
    },
  });
}

/**
 * Retrieves all snippets from the database.
 * @returns {Promise<Array<Snippet>>} A promise that resolves to an array of snippets.
 */
export const getAllSnippetsFromDB = () => {
  return db.snippet.findMany();
}
