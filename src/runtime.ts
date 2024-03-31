
const gradients = [1, 2, 3, 4, 5, 6, 7, 8, 9, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

let style: HTMLStyleElement | null

function getStyleElement() {
  if (style) return style

  style = document.createElement('style')
  style.dataset.name = 'brand-variables'
  document.head.append(style)

  return style
}

function generateVariables(brandName: string, refColorName?: string,): string {
  if (!refColorName) {
    return ''
  }

  const variables = gradients
    .map(gradient => `--brand-${brandName}-${gradient}: var(--${refColorName}-${gradient});`)

  variables.push(`--brand-${brandName}: var(--${refColorName}-400);`)

  return variables.join('')
}

export function generateBrandCss(brand: Record<string, string>) {
  const css = Object.entries(brand)
    .map(([brandName, refColorName]) => generateVariables(brandName, refColorName))
    .join('\n')

  return css
}

export function changeBrand(brand: Record<string, string>) {
  const css = generateBrandCss(brand)

  getStyleElement().innerText = `:root { ${css} }`
}
