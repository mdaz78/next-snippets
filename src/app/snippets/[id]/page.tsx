import { getASnippetByIdFromDB } from '@/db';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { IoCaretBackOutline } from 'react-icons/io5';

interface SnippetDetailsProps {
  params: {
    id: string;
  };
}

const SnippetDetailsPage = async ({ params }: SnippetDetailsProps) => {
  const { id } = params;

  const snippet = await getASnippetByIdFromDB(+id);

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <div className='flex m-4 justify-between items-center'>
        <div className='flex items-center space-x-4'>
          <Link href='/'>
            <IoCaretBackOutline />
          </Link>
          <h1 className='text-xl font-bold'>{snippet.title}</h1>
        </div>
        <div className='space-x-2'>
          <button className='px-5 py-1 text-sm border rounded' type='button'>
            Edit
          </button>
          <button className='px-5 py-1 text-sm border rounded' type='button'>
            Delete
          </button>
        </div>
      </div>
      <pre className='p-3 border rounded bg-gray-200 border-gray-200'>
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetDetailsPage;
