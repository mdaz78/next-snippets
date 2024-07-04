'use server';

import { createSnippetInDB, deleteSnippetInDB, updateSnippetInDB } from '@/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createSnippet(
	codeSnippet: string,
	formState: { message: string },
	formData: FormData,
) {
	if (!formData.get('title') || !codeSnippet) {
		return {
			message: 'Please fill in all fields',
		};
	}

	const title = formData.get('title') as string;
	const code = codeSnippet;

	const snippet = await createSnippetInDB(title, code);

	revalidatePath('/');
	redirect('/');
}

export async function editSnippet(id: number, code: string) {
	const snippet = await updateSnippetInDB(id, code);

	revalidatePath(`/snippets/${id}`);
	redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
	console.log('called id => ', id);
	const snippet = await deleteSnippetInDB(id);

	revalidatePath('/');
	redirect('/');
}
