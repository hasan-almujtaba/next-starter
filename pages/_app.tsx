import { AppPropsWithLayout } from '../types/layout'
import { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import 'styles/globals.css'

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  /**
   * React Query Configuration
   */
  const [queryClient] = useState(() => new QueryClient())

  /**
   * Use the layout defined at the page level, if available
   * @see https://nextjs.org/docs/basic-features/layouts
   */
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {getLayout(<Component {...pageProps} />)}
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
