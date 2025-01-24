const esbuild = require("esbuild");

// Construir todos los componentes
esbuild
  .build({
    entryPoints: ["src/**/*.tsx"],
    bundle: false,
    outdir: "dist",
    format: "esm",
    minify: true,
    sourcemap: true,
  })
  .catch(() => process.exit(1));
