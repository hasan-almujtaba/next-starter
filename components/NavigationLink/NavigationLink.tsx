import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  text: string
  href: string
  total: number
  index: number
}

const NavigationLink = ({ text, href, total, index }: Props) => {
  /**
   * Next router
   */
  const { pathname } = useRouter()

  /**
   *
   * @param route - route path
   * @returns {boolean} - route active status
   */
  const isRouteActive = (route: string): boolean => pathname === route

  /**
   * Component classes
   */
  const baseClasses =
    'block py-2 pr-4 pl-3 md:p-0 text-[color:var(--on-background)] hover:text-[color:var(--primary)]'
  const activeClasses =
    isRouteActive(href) &&
    'bg-[color:var(--primary)] text-[color:var(--on-primary)] md:text-[color:var(--primary)] rounded md:bg-transparent'
  const defaultClasses =
    !isRouteActive(href) &&
    'hover:bg-gray-50 md:hover:bg-transparent md:border-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700'
  const defaultBorderClasses =
    index + 1 < total && !isRouteActive(href) ? 'border-b border-gray-100' : ''

  return (
    <li>
      <Link
        href={href}
        passHref
      >
        <a
          className={clsx(
            baseClasses,
            activeClasses,
            defaultClasses,
            defaultBorderClasses
          )}
        >
          {text}
        </a>
      </Link>
    </li>
  )
}

export default NavigationLink
