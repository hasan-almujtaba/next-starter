import { MouseEventHandler, ReactNode } from 'react'

interface Props {
  children: ReactNode
  onClick?: MouseEventHandler
  isMobile?: boolean
}

const ActionButton = ({ children, onClick }: Props) => {
  return (
    <button
      type="button"
      className="items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[color:var(--outline)] dark:text-gray-400 dark:hover:bg-gray-700"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default ActionButton
