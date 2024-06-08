import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['src/index.tsx'],
  bundle: true,
  write: true,
  outfile: 'public/app.js'
});