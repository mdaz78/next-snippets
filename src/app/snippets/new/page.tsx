'use client';
import { createSnippet } from '@/actions/snippets';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import { IoCaretBackOutline } from 'react-icons/io5';

const SnippetCreatePage = () => {
  const [formState, formAction] = useFormState(createSnippet, { message: '' });

  return (
    <form className='' action={formAction}>
      <div className='flex items-center space-x-2 my-3'>
        <Link href='/'>
          <IoCaretBackOutline />
        </Link>
        <h3 className='font-bold'>Create a snippet</h3>
      </div>
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

        {formState.message && (
          <div className='text-red-500'>{formState.message}</div>
        )}

        <div className='flex justify-end'>
          <button
            type='submit'
            className='rounded py-2 px-8  bg-black text-white flex space-x-2 items-center'
          >
            <span className='text-sm'>Create</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SnippetCreatePage;
