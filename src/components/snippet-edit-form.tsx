'use client';

import Editor from '@monaco-editor/react';

import type { Snippet } from '@prisma/client';
import { useState } from 'react';

import { editSnippet } from '@/actions/snippets';

interface SnippetEditFormProps {
  snippet: Snippet;
}

const SnippetEditForm = ({ snippet }: SnippetEditFormProps) => {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value = '') => {
    setCode(value);
  };

  const editServerAction = editSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <Editor
        height={'40vh'}
        theme='vs-dark'
        defaultLanguage='javascript'
        defaultValue={snippet.code}
        options={{
          minimap: { enabled: false },
          fontSize: 16,
        }}
        onChange={handleEditorChange}
        value={code}
      />
      <form action={editServerAction}>
        <button type='submit' className='p-2 border rounded'>
          Save
        </button>
      </form>
    </div>
  );
};

export default SnippetEditForm;
