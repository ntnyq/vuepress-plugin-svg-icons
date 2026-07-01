import { cp, mkdir } from 'node:fs/promises'
import { defineConfig } from 'tsdown'

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/node/**/*.ts', 'src/client/**/*.ts', 'src/shared/**/*.ts'],
  hash: false,
  platform: 'neutral',
  unbundle: true,
  deps: {
    neverBundle: ['@vuepress/plugin-svg-icons/data', /^node:/u, /\.css$/u],
  },
  hooks: {
    'build:done': async () => {
      await mkdir('dist/client', { recursive: true })
      await cp('src/client/style.css', 'dist/client/style.css')
    },
  },
})
