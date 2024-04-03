# Uno Preset Brand

## Install

```sh
npm i @0x-jerry/unocss-preset-brand -D
```

```ts
import { defineConfig, presetUno } from 'unocss'
import { presetBrand } from '@0x-jerry/unocss-preset-brand'

export default defineConfig({
  presets: [
    presetUno(),
    presetBrand({
      brand: {
        // You can use any color that is defined in other presets, here is `presetUno`,
        // which uses the same colors as `tailwind`, reference: https://tailwindcss.com/docs/customizing-colors
        primary: 'teal',
        gray: 'gray'
      }
    }),
  ],
})

```

## Usage 

```html
<div class="text-b-primary">
  Primary Color
</div>

<div class="border-1 border-solid border-b-primary">
  Use primary color with border
</div>

<div class="text-b-gray">
  Gray Color
</div>
```

### Change brand color at runtime

```ts
import { changeBrand } from '@0x-jerry/unocss-preset-brand/runtime'

changeBrand({
  primary: 'rose',
  gray: 'zinc'
})
```
