import { mapValues, pickBy, capitalize, kebabCase, mapKeys } from 'lodash-es'
import { type Preflight, definePreset, entriesToCss, type PresetFactory } from '@unocss/core'

export interface PresetBrandOption {
  /**
   * @default 'b'
   */
  prefix?: string

  /**
   * @default { primary: 'teal', gray: 'gray' }
   */
  brand?: Record<string, string>
}

const colorGradients = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
]

const defaultBrandColors = {
  primary: 'teal',
  gray: 'gray',
}


const _presetBrand: PresetFactory<object, PresetBrandOption> = definePreset((options = {}) => {
  const varPrefix = 'brand'

  const { brand: brandColors = defaultBrandColors, prefix = 'b' } = options

  const colorName = (s: string) => prefix + capitalize(s)

  const colors = mapKeys(
    mapValues(brandColors, (_, key) => generateRefColors(key, varPrefix)),
    (_, key) => colorName(key),
  )

  const preflights: Preflight<any>[] = [
    {
      layer: 'preflights',
      getCSS(ctx) {
        let _colors = pickBy(
          ctx.theme.colors,
          (v, key) => typeof v === 'object' && !Object.keys(colors).includes(key),
        )

        const preflight = generateColorVariables(_colors)

        const brandVariables = generateBrandVariables(brandColors, varPrefix)

        const _themeColorVariables = Object.assign({}, preflight, brandVariables)

        const css = entriesToCss(Object.entries(_themeColorVariables))
        return `:root {${css}}`
      },
    },
  ]

  return {
    name: 'preset-brand',
    theme: {
      colors: colors,
    },
    preflights,
  }
})

export const presetBrand = _presetBrand as any

function generateColorVariables(colors: Record<string, Record<string, string>>) {
  const variables: Record<string, string> = {}

  colors = mapValues(colors, (colorObject) => mapValues(colorObject, convertHexToRgb))

  for (const name in colors) {
    for (const shade in colors[name]) {
      if (!isNaN(parseInt(shade))) {
        variables[`--${kebabCase(name)}-${shade}`] = colors[name][shade]
      }
    }
  }

  return variables
}

function hex2digit(hex: string) {
  return parseInt(hex, 16)
}

function convertHexToRgb(color: string) {
  if (color[0] !== '#') return color

  const c = color.slice(1)
  const r = hex2digit(c.slice(0, 2))
  const g = hex2digit(c.slice(2, 4))
  const b = hex2digit(c.slice(4, 6))

  return `${r} ${g} ${b}`
}

function generateBrandVariables(brandColorMap: Record<string, string>, varPrefix: string) {
  const variables: Record<string, string> = {}

  for (const brandName in brandColorMap) {
    const refColorName = brandColorMap[brandName]

    for (const gradient of colorGradients) {
      const varname = `--${varPrefix}-${brandName}-${gradient}`

      variables[varname] = `var(--${refColorName}-${gradient})`
    }
  }

  return variables
}

function generateRefColors(refColorName: string, varPrefix: string) {
  const color: Record<string, string> = {}

  for (const gradient of colorGradients) {
    color[gradient] = `rgb(var(--${varPrefix}-${refColorName}-${gradient}))`
  }

  color.DEFAULT = color[400]
  return color
}
