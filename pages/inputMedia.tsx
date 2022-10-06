import type { NextPage } from 'next'
import Head from 'next/head'
import { Input } from 'components/Input'
import { useRouter } from 'next/router'
import { useFormStateProvider } from 'context'
import { Header } from 'components/Header'
import { useState } from 'react'
import { ethers } from 'ethers'
import { HeroText } from 'components/HeroText'

const InputMedia: NextPage = () => {
  const router = useRouter()

  const { media, setMedia } = useFormStateProvider()
  const [validMedia, setValidMedia] = useState(false)

  const handleChange = (e: any) => {
    setMedia(e.currentTarget.value)
  }

  const handleValidation = () => {
    if (media != null && ethers.utils.isAddress(media)) {
      setValidMedia(true)
      router.push('/deploy')
    } else {
      setValidMedia(false)
    }
  }

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleValidation()
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
      <div className="flex flex-col gap-2 mx-6 mt-20 sm:mt-16 sm:mx-8 sm:gap-8">
        <HeroText
          text={['Add your ', <br className="hidden sm:block"></br>, 'first ']}
          highlight="songs"
        />
        <div>
          <p className="pa-paragraph text-xl mt-4 mb-8 sm:text-3xl max-w-7xl">
            If you&apos;ve already decided on what you want to curate, you can add the
            addresses of those NFTs below. If you&apos;re not quite sure what you want to
            include,{' '}
            <button
              onClick={() => router.push('/deploy')}
              className="underline text-[#006ff1] hover:text-[#0c1413]">
              skip ahead!
            </button>
          </p>

          <Input
            value={media}
            placeholder="e.g. 0x34fe32e6442d14d923953a537b8163365630b5a7"
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>
    </div>
  )
}

export default InputMedia
