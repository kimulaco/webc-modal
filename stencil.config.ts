import { Config } from '@stencil/core'
import { postcss } from '@stencil/postcss'
import autoprefixer from 'autoprefixer'

export const config: Config = {
  namespace: 'webc-modal',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ],
  plugins: [
    postcss({
      plugins: [
        autoprefixer()
      ]
    })
  ]
}
