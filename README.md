# Mastro Template Pages CMS

This is a TypeScript template for [Mastro](https://mastrojs.github.io)
when using [Deno](https://deno.com/) with the git-based [Pages CMS](https://pagescms.org/).

To make edits using the CMS:

1. Click the green button **Use this template** on the top right, select **Create a new repository** and choose a name for your project. (To deploy to GitHub Pages for free, your repo needs to be public.)

2. Then [**open Pages CMS**](https://app.pagescms.org), log in with your GitHub account and give it permission to access your GitHub repository.

## Deploy

Finally, you'll also want to [Publish your website to GitHub Pages](https://mastrojs.github.io/guide/publish-website/) or another [static site host](https://mastrojs.github.io/guide/deploy/#deploy-static-site-with-ci%2Fcd).

### Deploy to a subdirectory (e.g. GitHub Pages)

If your site is at a URL like `https://my-name.github.io/my-repo` you'll want to adjust the `generate` command in [`deno.json`](./deno.json) to:

    BASEPATH='/my-repo' deno run -A @mastrojs/mastro/generator

and the media section [`.pages.yml`](./.pages.yml) to:

```yaml
media:
  input: routes/media
  output: /my-repo/media
```

Replace `my-repo` in both cases with your actual repository name.


## Run locally

    deno task start

and open <http://localhost:8000> in your browser, or see
[install instructions](https://mastrojs.github.io/guide/cli-install/#setup-local-development-server).

To generate the whole static site (this will create a `generated` folder):

    deno task generate

This template uses [Deno](https://deno.com/) (which is recommended), but you can also use Node.js or Bun: replace the `deno.json` with a `package.json`, and adjust the `server.ts` as seen in the [Node.js template](https://github.com/mastrojs/template-basic-node) or [Bun template](https://github.com/mastrojs/template-basic-bun) respectively.


## 🚀 Next steps

To learn more about Mastro and building websites,
[follow the guide](https://mastrojs.github.io/guide/).

For a condensed overview of the Mastro web framework and static site generator, consult the [Mastro Docs](https://mastrojs.github.io/docs/).

To make sure you're using the latest Mastro packages:

    deno update --latest "@mastrojs/*"
