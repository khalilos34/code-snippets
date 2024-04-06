import { fetchSnippetById } from "@/lib/snippets.action";

const SnippetDetails = async ({
  params,
}: {
  params: { snippetId: string };
}) => {
  const { snippetId } = params;
  const snippet = await fetchSnippetById(parseInt(snippetId));
  return (
    <div>
      SnippetDetails
      <h1>{snippet.title}</h1>
    </div>
  );
};

export default SnippetDetails;
