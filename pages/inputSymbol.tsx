import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Input } from 'components/Input'
import { useFormStateProvider } from 'context'
import { useRouter } from 'next/router'

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
      <div className="px-8">
        <Input
          label={'Input Title'}
          placeholder="e.g. $NEO"
          onChange={(e: any) => setSymbol(e.currentTarget.value)}
          onKeyPress={handleKeyPress}
        />
        <br></br>
        {/* <Link href="/inputCurationPass">
          <a>Next</a>
        </Link> */}
        <Link href="/inputTitle">
          <a>Go Back</a>
        </Link>
      </div>
    </div>
  )
}

export default InputSymbol