import esbuild from 'esbuild';
import copy from 'esbuild-copy-files-plugin';

esbuild.build({
  entryPoints: ['src/tab-controller.js'],
  bundle: true,
  minify: true,
  outfile: 'dist/script.js',
  plugins: [
    copy({
        source: ['src/index.html', 'src/favicon.ico'],
        target: 'dist'
    }),
  ],
}).catch(() => process.exit(1));