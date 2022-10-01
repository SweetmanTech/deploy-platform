import type { NextPage } from 'next'
import Head from 'next/head'
import { useFormStateProvider } from 'context'

const Deploy: NextPage = () => {
  const { title, curationPass, media } = useFormStateProvider()

  return (
    <div>
      <Head>
        {/*
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        */}
      </Head>
      <div className='px-8 text-xl'>
        {title}
        <br></br>
        {curationPass}
        <br></br>
        {media}
      </div>
    </div>
  )
}

export default Deploy
