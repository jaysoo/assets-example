This is an example for using `assets` option for `@nx/webpack:webpack` to copy artifacts from a buildable lib into the app for usage.

`demo` app uses UMD bundle for `somelib` (see `apps/demo/src/index.html`). The `assets` is defined as follows in `project.json`:

```
"assets": [
  "apps/demo/src/favicon.ico",
   "apps/demo/src/assets",
   { "input": "dist/somelib", "output": "./somelib", "glob": "index.umd.js" }
],
```

Run this command:

```shell
nx serve demo
```

Open app in the browser and inspect the console. You should see the result from `somelib` printed, where the library is included via `<script>` and UMD bundle.

Same support is also there for `NxAppWebpackPlugin` if using a crystal project.
