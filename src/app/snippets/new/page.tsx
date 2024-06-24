'use client';
import { createSnippet } from '@/actions/snippets';
import Link from 'next/link';
import { useState } from 'react';
import { useFormState } from 'react-dom';
import { IoCaretBackOutline } from 'react-icons/io5';

import Editor from '@monaco-editor/react';

const SnippetCreatePage = () => {
  const [code, setCode] = useState('');

  const createSnippetAction = createSnippet.bind(null, code);

  const [formState, formAction] = useFormState(createSnippetAction, {
    message: '',
  });

  const handleEditorChange = (value = '') => {
    setCode(value);
  };

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
          <input
            type='text'
            name='title'
            className='border rounded p-2 w-full'
            id='tittle'
            placeholder='Title for the snippet'
          />
        </div>

        <div className='flex gap-4'>
          <Editor
            height={'40vh'}
            theme='vs-dark'
            defaultLanguage='javascript'
            defaultValue={code}
            options={{
              minimap: { enabled: false },
              fontSize: 16,
            }}
            onChange={handleEditorChange}
            value={code}
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
