import { defineConfig, presetUno } from 'unocss'
import { presetBrand } from '@0x-jerry/unocss-preset-brand'

export default defineConfig({
  presets: [
    presetUno(),
    presetBrand({
      prefix: 'b',
      brand: {
        primary: 'cyan',
        gray: 'gray',
      },
    }),
  ],
})
