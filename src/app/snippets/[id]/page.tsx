import { getASnippetByIdFromDB } from '@/db';
import { notFound } from 'next/navigation';

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

  return <div>SnippetDetailsPage</div>;
};

export default SnippetDetailsPage;
