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

TODO