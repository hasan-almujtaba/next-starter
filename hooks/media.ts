import { useState, useEffect } from 'react'

/**
 * Utilize media queries
 * @param queries - Media query list
 * @param values Media query value
 * @param defaultValue Default value
 * @returns Values of media queries
 */
const useMedia = <T>(queries: string[], values: T[], defaultValue: T) => {
  const mediaQueryLists =
    typeof window !== 'undefined'
      ? queries.map((q) => window.matchMedia(q))
      : []

  const getValue = () => {
    const index = mediaQueryLists.findIndex((mql) => mql.matches)

    return values?.[index] || defaultValue
  }

  const [value, setValue] = useState<T>(getValue)

  useEffect(
    () => {
      const handler = () => setValue(getValue)

      mediaQueryLists.forEach((mql) => mql.addEventListener('change', handler))

      return () =>
        mediaQueryLists.forEach((mql) =>
          mql.removeEventListener('change', handler)
        )
    },
    [] // eslint-disable-line react-hooks/exhaustive-deps
  )
  return value
}

export default useMedia
