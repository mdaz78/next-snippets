import { createSnippetInDB } from '@/db';
import { redirect } from 'next/navigation';

const SnippetCreatePage = () => {
  async function createSnippet(formData: FormData) {
    // This needs to be a server action
    'use server';

    // Check the user's input and validate it
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    // Create a new record in the db
    const snippet = await createSnippetInDB(title, code);

    console.log(snippet);

    // Redirect the user to the home page
    redirect('/');
  }

  return (
    <form className='' action={createSnippet}>
      <h3 className='font-bold m-3'>Create a snippet</h3>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <label className='w-12' htmlFor='title'>
            Title
          </label>
          <input
            type='text'
            name='title'
            className='border rounded p-2 w-full'
            id='tittle'
          />
        </div>

        <div className='flex gap-4'>
          <label className='w-12' htmlFor='code'>
            Code
          </label>
          <textarea
            name='code'
            className='border rounded p-2 w-full'
            id='code'
          />
        </div>

        <button type='submit' className='rounded p-2 bg-blue-200'>
          Create
        </button>
      </div>
    </form>
  );
};

export default SnippetCreatePage;
