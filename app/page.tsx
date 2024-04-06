import { fetchSnippets } from "@/lib/snippets.action";

export default async function Home() {
  const snippets = await fetchSnippets();
  console.log("first snippet", snippets);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {snippets.map((snippet) => (
        <div key={snippet.id}>
          <h1>{snippet.title}</h1>
          <p>{snippet.code}</p>
        </div>
      ))}
    </div>
  );
}
