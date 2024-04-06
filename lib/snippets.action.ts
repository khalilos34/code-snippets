"use server";

import { db } from "@/config";
import { notFound, redirect } from "next/navigation";

export const createNewSnippet = async (fromData: FormData) => {
  const title = fromData.get("title") as string;
  const code = fromData.get("code") as string;
  const newSnippet = await db.snippet.create({
    data: {
      title,
      code,
    },
  });
  console.log(newSnippet);
  redirect("/");
};

export const fetchSnippets = async () => {
  const snippets = await db.snippet.findMany();
  return snippets;
};

export const fetchSnippetById = async (id: number) => {
  const snippet = await db.snippet.findUnique({
    where: {
      id,
    },
  });
  if (!snippet) return notFound();
  return snippet;
};
