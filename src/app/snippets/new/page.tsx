import { createSnippet } from '@/actions/snippets';
import { useFormState } from 'react-dom';

const SnippetCreatePage = () => {
  const [formState, formAction] = useFormState(createSnippet, { message: '' });

  return (
    <form className='' action={formAction}>
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

        {formState.message && (
          <div className='text-red-500'>{formState.message}</div>
        )}

        <button type='submit' className='rounded p-2 bg-blue-200'>
          Create
        </button>
      </div>
    </form>
  );
};

export default SnippetCreatePage;
