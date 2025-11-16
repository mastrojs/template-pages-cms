import { getParams, htmlToResponse, readDir } from "@mastrojs/mastro";
import { readMarkdownFile } from "@mastrojs/markdown";
import { Layout } from "../../components/Layout.ts";

export const GET = async (req: Request) => {
  const { slug } = getParams(req.url);
  const { content, meta } = await readMarkdownFile(`data/posts/${slug}.md`);
  return htmlToResponse(
    Layout({
      title: meta.title || "",
      children: content,
    }),
  );
};

export const getStaticPaths = async () => {
  const posts = await readDir("data/posts/");
  return posts.flatMap((p) => p.endsWith("/.gitkeep") || p.endsWith("/.DS_Store")
    ? []
    : "/" + p.slice(0, -3) + "/");
};
