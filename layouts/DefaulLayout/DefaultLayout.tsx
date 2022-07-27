import Navigation from '@/components/Navigation/Navigation'
import { DefaultLayout } from '../../types/layout'

const DefaultLayout = ({ children }: DefaultLayout) => {
  return (
    <>
      <Navigation />
      <div className="px-4 py-4">{children}</div>
    </>
  )
}

export default DefaultLayout
