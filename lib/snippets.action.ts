"use server";

import { db } from "@/config";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";

export const createNewSnippet = async (
  formState: { message: string },
  fromData: FormData,
) => {
  const title = fromData.get("title") as string;
  const code = fromData.get("code") as string;
  if (title.length < 3 || typeof title !== "string") {
    return { message: "Code must be at least 3 characters" };
  }
  if (code.length < 10 || typeof code !== "string") {
    return { message: "Code must be at least 10 characters" };
  }
  await db.snippet.create({
    data: {
      title,
      code,
    },
  });
  revalidatePath("/");
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
export const SnippetUpdate = async (id: number, code: string) => {
  console.log(code);
  const updatedSnippet = await db.snippet.update({
    where: { id },
    data: {
      code,
    },
  });
  redirect(`/snippets/${id}`);
};
export const deleteSnippet = async (id: number) => {
  await db.snippet.delete({
    where: { id },
  });
  revalidatePath("/");
  redirect("/");
};
