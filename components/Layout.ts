import { type Html, html } from "@mastrojs/mastro";

// If you're not hosting your website on the root (e.g `https://my-name.github.io`), but
// instead in a sub-directory (common with GitHub Pages: `https://my-name.github.io/my-repo`),
// then you need to prefix all links that start with a slash with `basePath`,
// like we're doing below with `href=${basePath + "/styles.css"}`.
export const basePath = await ghPagesBasePath();

interface Props {
  children: Html;
  title: string;
}

export const Layout = (props: Props) =>
  html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>${props.title}</title>
        <link rel="stylesheet" href=${basePath + "/styles.css"}>
      </head>
      <body>
        <h1>${props.title}</h1>
        ${props.children}
      </body>
    </html>
  `;

async function ghPagesBasePath() {
  if (typeof window === "undefined") {
    const process = await import("node:process");
    // see https://docs.github.com/en/actions/reference/workflows-and-actions/variables
    const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
    if (repo && !repo.endsWith(".github.io")) {
      return "/" + repo;
    }
  }
  return "";
}
