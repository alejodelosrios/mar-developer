import { useEffect, useState } from 'react'

export default function useDarkMode() {
  const [theme, setTheme] = useState<string>('dark')
  const colorTheme = theme === 'dark' ? 'light' : 'dark'
  const bgTheme = theme === 'dark' ? 'bg-dark' : 'bg-light'
  useEffect(() => {
    const html = window.document.documentElement
    if (theme === 'light') {
      html.classList.remove('dark')
      html.classList.remove('bg-dark')
    } else {
      html.classList.remove('light')
      html.classList.remove('bg-light')
    }
    html.classList.add(theme)
    html.classList.add(bgTheme)
  }, [theme, colorTheme, bgTheme])

  return [colorTheme, setTheme] as const
}
