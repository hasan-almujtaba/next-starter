import { NextPageWithLayout } from '@/types/layout'
import DefaultLayout from 'layouts/DefaulLayout/DefaultLayout'
import { ReactElement, useEffect, useState } from 'react'
import useStore from '../store'
import Head from 'next/head'
import FeatureList from '@/components/FeatureList/FeatureList'
import Link from 'next/link'

const Home: NextPageWithLayout = () => {
  /**
   * Bind state from zustand
   */
  const countState = useStore((state) => state.count)
  const incrementCountState = useStore((state) => state.increment)

  /**
   * Local state
   */
  const [count, setCount] = useState(0)

  /**
   * Set data from state to local state on mounted
   */
  useEffect(() => {
    setCount(countState)
  }, [countState])

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div>
        <h1>Next Starter</h1>
        <div>Opinionated react starter built on top of Next JS</div>
      </div>

      <FeatureList />

      <Link href="/posts">See example in action</Link>
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
