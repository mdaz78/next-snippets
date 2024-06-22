import { getAllSnippetsFromDB } from '@/db';
import Link from 'next/link';

export default async function Home() {
  const snippets = await getAllSnippetsFromDB();

  const renderedSnippets = snippets.map(({ id, title }) => (
    <Link
      href={`/snippets/${id}`}
      className='flex justify-between items-center p-2 border rounded'
      key={id}
    >
      {title}
    </Link>
  ));

  return (
    <div className='m-5 space-y-5'>
      <div className='flex justify-between items-center'>
        <h1 className='text-xl font-bold'>Snippets</h1>
        <Link
          href={'/snippets/new'}
          className='border rounded px-5 py-2 bg-slate-100'
        >
          New Snippet
        </Link>
      </div>
      <div className='flex flex-col gap-2'>{renderedSnippets}</div>
    </div>
  );
}
