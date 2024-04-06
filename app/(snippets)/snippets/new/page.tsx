import { createNewSnippet } from "@/lib/snippets.action";

const CreateSnippetPage = () => {
  return (
    <form action={createNewSnippet}>
      <div className="flex flex-col  gap-4">
        <h3 className="m-3 font-bold">Create New Snippet</h3>

        <div className="flex items-center gap-x-3">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="w-full rounded-sm border p-2"
          />
        </div>
        <div className="flex items-center gap-x-3">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            id="code"
            className="w-full rounded-sm border p-2"
          />
        </div>

        <button type="submit" className="rounded border bg-blue-200 p-2">
          create
        </button>
      </div>
    </form>
  );
};

export default CreateSnippetPage;
