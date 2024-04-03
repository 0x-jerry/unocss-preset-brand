import { defineConfig, presetUno, transformerDirectives, presetIcons } from 'unocss'
import { presetBrand } from '@0x-jerry/unocss-preset-brand'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      autoInstall: true,
    }),
    presetBrand({
      prefix: 'b',
      brand: {
        primary: 'cyan',
        gray: 'gray',
      },
    }),
  ],
  transformers: [transformerDirectives()]
})
