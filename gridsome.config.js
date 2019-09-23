// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'snaekomu.github.io',
  siteUrl: 'https://snaekomu.github.io',
  pathPrefix: '/snaekomu.github.io',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {},
        presetEnvConfig: {
          stage: 0
        },
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'proj/*/post.md',
        typeName: 'ProjectPost',
        route: '/:slug',
        baseDir: 'data',
        refs: {
          images: {
            typeName: 'Shot',
            create: true
          }
        }
      }
    }
  ],
  transformers: {
    remark: {
      plugins: [
        'remark-bracketed-spans'
      ]
    }
  }
}
