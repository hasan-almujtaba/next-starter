import useDarkMode from '@/hooks/darkMode'
import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi'
import ActionButton from '../ActionButton/ActionButton'
import NavigationLink from '@/components/NavigationLink/NavigationLink'
import { navigations } from './data'

const Navigation = () => {
  /**
   * Navigation menu visibility on mobile
   */
  const [open, setOpen] = useState(false)

  const [darkMode, setDarkMode] = useDarkMode()

  const themeIcon = darkMode ? <HiSun size={24} /> : <HiMoon size={24} />

  /**
   * List of links
   */
  const linkLists = navigations.map((item, index) => (
    <NavigationLink
      key={index}
      href={item.href}
      text={item.text}
      total={navigations.length}
      index={index}
    />
  ))

  return (
    <nav className="border-gray-200 px-4 py-4 bg-[color:var(--background)]">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/">
          <div className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-[color:var(--on-background)]">
              Next Starter
            </span>
          </div>
        </Link>

        <div className="flex md:hidden gap-x-1.5">
          <ActionButton
            onClick={() => setDarkMode(!darkMode)}
            isMobile
          >
            <span className="sr-only">Toggle dark mode</span>
            {themeIcon}
          </ActionButton>

          <ActionButton
            onClick={() => setOpen(!open)}
            isMobile
          >
            <span className="sr-only">Open main menu</span>
            {open ? <HiX size={24} /> : <HiMenu size={24} />}
          </ActionButton>
        </div>

        <div
          className={clsx({
            block: open,
            hidden: !open,
            'w-full': true,
            'md:flex': true,
            'md:w-auto': true,
            'items-center': true,
          })}
          id="navbar-default"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            {linkLists}
          </ul>

          <div className="hidden md:block ml-3">
            <ActionButton onClick={() => setDarkMode(!darkMode)}>
              <span className="sr-only">Toggle dark mode</span>
              {themeIcon}
            </ActionButton>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
