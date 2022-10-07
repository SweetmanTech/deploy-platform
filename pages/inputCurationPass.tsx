import type { NextPage } from 'next'
import Head from 'next/head'
import { Input } from 'components/Input'
import { useRouter } from 'next/router'
import { useFormStateProvider } from 'context'
import { Header } from 'components/Header'
import { ethers } from 'ethers'
import { useState } from 'react'
import { HeroText } from 'components/HeroText'
import { ContinueButton } from 'components/ContinueButton'

const InputCurationPass: NextPage = () => {
  const router = useRouter()

  const { curationPass, setCurationPass } = useFormStateProvider()
  const [validAddress, setValidAddress] = useState(false)

  const handleChange = (e: any) => {
    setCurationPass(e.currentTarget.value)
  }

  const handleValidation = () => {
    if (curationPass != null && ethers.utils.isAddress(curationPass)) {
      setValidAddress(true)
      router.push('/inputMedia')
    } else {
      setValidAddress(false)
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
      <Header route={'./inputSymbol'} />
      <div className="flex flex-col gap-2 mx-6 mt-12 sm:mt-16 sm:mx-8 sm:gap-8">
        <HeroText
          text={
            <>
              Designate a <br className="hidden sm:block"></br>curation
            </>
          }
          highlight=" pass"
        />
        <div>
          <p className="pa-paragraph text-xl mt-4 mb-8 sm:text-3xl max-w-7xl">
            This is the contract address of the editions NFT that will be used to gate
            access to curation functionality. If you haven&apos;t already created one of
            these,{' '}
            <a
              className="underline text-[#006ff1] hover:text-[#0c1413]"
              href="https://create.zora.co/create/edition"
              target="_blank"
              rel="noreferrer">
              make one here
            </a>
          </p>
          <div className="flex items-center">
            <Input
              value={curationPass}
              placeholder="e.g. 0x34fe32e6442d14d923953a537b8163365630b5a7"
              onChange={handleChange}
              onKeyPress={handleKeyPress}
            />
            <ContinueButton route={'./inputMedia'} />
          </div>
          {/* {!validAddress && (
          <InputError errorMessage={'Please enter a valid NFT contract address'} />
        )} */}
        </div>
      </div>
    </div>
  )
}

export default InputCurationPass
