import SnippetEditForm from "@/components/SnippetEditForm";
import { fetchSnippetById } from "@/lib/snippets.action";
import Link from "next/link";

const EditSnippetPage = async ({
  params,
}: {
  params: { snippetId: string };
}) => {
  const snippet = await fetchSnippetById(parseInt(params.snippetId));

  return (
    <div>
      <div>
        <Link href={"/"} className=" text-blue-500 underline">
          Back to home
        </Link>
      </div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
};

export default EditSnippetPage;
