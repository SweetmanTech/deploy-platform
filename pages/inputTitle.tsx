import type { NextPage } from 'next'
import Head from 'next/head'
import { Input } from 'components/Input'
import { useFormStateProvider } from 'context'
import { useRouter } from 'next/router'
import { Header } from 'components/Header'
import { HeroText } from 'components/HeroText'
import { ContinueButton } from 'components/ContinueButton'

const InputTitle: NextPage = () => {
  const router = useRouter()

  const { title, setTitle } = useFormStateProvider()
  console.log('title: ', title)

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      router.push('/inputSymbol')
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
      <Header route="" />
      <div className="flex flex-col gap-2 mx-6 mt-12 sm:mt-16 sm:mx-8 sm:gap-8">
        <HeroText
          text={
            <>
              Give your <br className="hidden sm:block"></br>contract a
            </>
          }
          highlight=" title"
        />
        <div>
          <p className="pa-paragraph text-xl mt-4 mb-8 sm:text-3xl max-w-7xl">
            This is how your contract will be referenced. Your free to provide a more
            general name like &quot;Neosound&quot;, or one more specific like &quot;Down
            Bad Pt. 2.&quot;
          </p>
          <div className="flex items-center">
            <Input
              value={title}
              placeholder={'e.g. Neosound'}
              onChange={(e: any) => setTitle(e.currentTarget.value)}
              onKeyPress={handleKeyPress}
            />
            <ContinueButton route={'./inputSymbol'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputTitle
