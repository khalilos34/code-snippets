"use client";

import { SnippetUpdate } from "@/lib/snippets.action";
import { Editor } from "@monaco-editor/react";
import { Snippet } from "@prisma/client";
import { useState } from "react";

const SnippetEditForm = ({ snippet }: { snippet: Snippet }) => {
  const [title, setTitle] = useState(snippet.title);
  const [code, setCode] = useState(snippet.code);
  const updateSnippetAction = SnippetUpdate.bind(null, snippet.id, code);
  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  return (
    <div>
      <Editor
        height="40vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        theme="vs-dark"
        options={{ minimap: { enabled: false } }}
        value={snippet.code}
        onChange={handleEditorChange}
        className="p-5"
      />
      <form action={updateSnippetAction} className="flex items-end justify-end">
        <button
          type="submit"
          className="mt-4 bg-blue-500 px-2 py-1 text-white hover:bg-blue-500/90"
        >
          update
        </button>
      </form>
    </div>
  );
};

export default SnippetEditForm;
