import SnippetEditForm from '@/components/snippet-edit-form';
import { getASnippetByIdFromDB } from '@/db';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { IoCaretBackOutline } from 'react-icons/io5';

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

const SnippetEditPage = async ({ params }: SnippetEditPageProps) => {
  const id = Number(params.id);

  const snippet = await getASnippetByIdFromDB(id);

  if (!snippet) {
    return notFound();
  }

  return (
    <div className='my-4'>
      <div className='flex items-center space-x-3 my-2'>
        <Link href={`/snippets/${id}`}>
          <IoCaretBackOutline />
        </Link>
        <h1 className='text-xl font-bold'>{snippet.title}</h1>
      </div>
      <div>
        <SnippetEditForm snippet={snippet} />
      </div>
    </div>
  );
};

export default SnippetEditPage;
