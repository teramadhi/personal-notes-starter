esbuild.build({
  entryPoints: ['index.js'],
  bundle: true,
  outfile: 'out.js',
  loader: {
    '.js': 'jsx'
  }
}).catch(() => process.exit(1))
