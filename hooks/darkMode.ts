import { useEffect } from 'react'
import useLocalStorage from './localStorage'
import useMedia from './media'

/**
 * Check if user prefer dark mode
 * @returns user dark scheme active status
 */
const usePrefersDarkMode = () => {
  return useMedia(['(prefers-color-scheme: dark)'], [true], false)
}

/**
 * Handle stateful logic to toggle dark mode
 * Will toggle class based on user preferred color scheme by default
 */
const useDarkMode = () => {
  const [enabledState, setEnabledState] = useLocalStorage(
    'dark-mode-enabled',
    false
  )

  const prefersDarkMode = usePrefersDarkMode()

  const enabled = enabledState ?? prefersDarkMode

  useEffect(() => {
    const className = 'dark'
    const element = document.documentElement
    if (enabled) {
      element.classList.add(className)
    } else {
      element.classList.remove(className)
    }
  }, [enabled])

  return [enabled, setEnabledState] as const
}

export default useDarkMode
