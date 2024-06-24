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
};

/**
 * Retrieves all snippets from the database.
 * @returns {Promise<Array<Snippet>>} A promise that resolves to an array of snippets.
 */
export const getAllSnippetsFromDB = () => {
	return db.snippet.findMany();
};

/**
 * Retrieves a snippet from the database by its ID.
 * @param id - The ID of the snippet to retrieve.
 * @returns A promise that resolves to the retrieved snippet.
 */
export const getASnippetByIdFromDB = (id: number) => {
	return db.snippet.findUnique({
		where: {
			id,
		},
	});
};

/**
 * Updates a snippet in the database.
 * @param id - The ID of the snippet to update.
 * @param code - The new code for the snippet.
 * @returns A promise that resolves to the updated snippet.
 */
export const updateSnippetInDB = (id: number, code: string) => {
	return db.snippet.update({
		where: {
			id,
		},
		data: {
			code,
		},
	});
};

/**
 * Deletes a snippet from the database.
 * @param id - The ID of the snippet to delete.
 * @returns A promise that resolves to the deleted snippet.
 */
export const deleteSnippetInDB = (id: number) => {
	return db.snippet.delete({
		where: {
			id,
		},
	});
};
