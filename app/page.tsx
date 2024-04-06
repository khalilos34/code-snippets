import { fetchSnippets } from "@/lib/snippets.action";
import Link from "next/link";

export default async function Home() {
  const snippets = await fetchSnippets();

  return (
    <div className="mt-5 border p-10">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link
          href="/snippets/new"
          className="rounded bg-blue-500 px-2 py-1 font-bold text-white hover:bg-blue-700"
        >
          New
        </Link>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {snippets.map((snippet: any) => (
          <div key={snippet.id}>
            <Link
              href={`/snippets/${snippet.id}`}
              className="flex items-center justify-between rounded-xl border p-4"
            >
              <h1>{snippet.title}</h1>
              <h1>view</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
