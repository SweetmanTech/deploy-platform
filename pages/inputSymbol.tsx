import type { NextPage } from 'next'
import Head from 'next/head'
import { Input } from 'components/Input'
import { useFormStateProvider } from 'context'
import { useRouter } from 'next/router'
import { Header } from '../components/Header'
import { HeroText } from 'components/HeroText'
import { ContinueButton } from 'components/ContinueButton'

const InputSymbol: NextPage = () => {
  const router = useRouter()

  const { symbol, setSymbol } = useFormStateProvider()

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      router.push('/inputCurationPass')
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
      <Header route={'./inputTitle'} />
      <div className="flex flex-col gap-2 mt-12 sm:mt-16 sm:gap-8">
        <HeroText
          text={
            <>
              choose&nbsp;<br className="hidden sm:block"></br>your contract&nbsp;
            </>
          }
          highlight="symbol"
        />
        <div className="flex items-center">
          <Input
            value={symbol}
            placeholder="e.g. NEO"
            onChange={(e: any) => setSymbol(e.currentTarget.value)}
            onKeyPress={handleKeyPress}
            route={'./inputCurationPass'}
          />
        </div>
      </div>
    </div>
  )
}

export default InputSymbol
