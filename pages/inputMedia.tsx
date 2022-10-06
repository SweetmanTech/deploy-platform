import type { NextPage } from 'next'
import Head from 'next/head'
import { Input } from 'components/Input'
import { useRouter } from 'next/router'
import { useFormStateProvider } from 'context'
import { Header } from 'components/Header'

const InputMedia: NextPage = () => {
  const router = useRouter()

  const { media, setMedia } = useFormStateProvider()

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      router.push('/deploy')
    }
  }

  return (
    <div>
      <Head>
        {/*
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        */}
      </Head>
      <Header route={'./inputCurationPass'} />
      <div className="mx-8 mt-24">
        <h1 className="pa-displayDark unselectable text-5xl md:text-9xl lg:text-12xl">
          Add your <br></br>first <span className="pa-displayLight">songs</span>
        </h1>
        <p className="pa-paragraph text-xl mt-8 mb-8 sm:text-3xl max-w-7xl">
          If you&apos;ve already decided on what you want to curate, you can add the
          addresses of those NFTs below. If you&apos;re not quite sure what you want to
          include, skip ahead!
        </p>
        <div className="mt-4 sm:mt-20">
          <Input
            placeholder="e.g. 0x34fe32e6442d14d923953a537b8163365630b5a7"
            onChange={(e: any) => setMedia(e.currentTarget.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>
    </div>
  )
}

export default InputMedia
