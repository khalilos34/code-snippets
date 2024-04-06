import { deleteSnippet, fetchSnippetById } from "@/lib/snippets.action";
import Link from "next/link";

const SnippetDetails = async ({
  params,
}: {
  params: { snippetId: string };
}) => {
  const { snippetId } = params;
  const snippet = await fetchSnippetById(parseInt(snippetId));
  const deleteSnippetAction = deleteSnippet.bind(null, parseInt(snippetId));

  return (
    <>
      <div>
        <Link href={"/"} className=" text-blue-500 underline">
          Back to home
        </Link>
      </div>
      <div className="mx-auto mb-4 mt-2 flex flex-col  gap-4 rounded-md border p-5">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-xl font-bold">{snippet.title}</h1>
          <div className="flex items-center gap-2">
            <form action={deleteSnippetAction}>
              <button
                type="submit"
                className="rounded-sm bg-blue-500 px-3 py-1"
              >
                delete
              </button>
            </form>
            <Link
              href={`/snippets/${snippet.id}/edit`}
              className="rounded-sm bg-blue-500 px-3 py-1"
            >
              edit
            </Link>
          </div>
        </div>
        <pre className=" rounded border-gray-200 bg-gray-200 p-5 ">
          <code> {snippet.code}</code>
        </pre>
      </div>
    </>
  );
};

export default SnippetDetails;
