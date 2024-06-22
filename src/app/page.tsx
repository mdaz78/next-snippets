import { getAllSnippetsFromDB } from '@/db';

export default async function Home() {
  const snippets = await getAllSnippetsFromDB();

  const renderedSnippets = snippets.map((snippet) => (
    <div key={snippet.id}>
      <h2>{snippet.title}</h2>
      <code>
        <pre>{snippet.code}</pre>
      </code>
    </div>
  ));

  return <div>{renderedSnippets}</div>;
}
