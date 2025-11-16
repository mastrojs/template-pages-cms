import { type Html, html } from "@mastrojs/mastro";
import process from "node:process";

// In case you're not hosting this in the web root but e.g. on `https://my-name.github.io/my-repo`
export const basePath = process.env.BASEPATH || "";

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
        ${basePath
          // Take care of relative links not starting with a slash
          ? html`<base href=${basePath + "/"}>`
          : ""}
        ${// Absolute links starting with a slash need to be prefixed with `basePath`
          html`<link rel="stylesheet" href=${basePath + "/styles.css"}>`}
      </head>
      <body>
        <h1>${props.title}</h1>
        ${props.children}
      </body>
    </html>
  `;
