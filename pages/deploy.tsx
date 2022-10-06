import type { NextPage } from 'next'
import Head from 'next/head'
import { useFormStateProvider } from 'context'
import { useAccount } from 'wagmi'
import { useCuratorFactory } from '@public-assembly/assemble-curation-factory'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { Header } from '../components/Header'

// type initialListings = (string | number | boolean)[][]

// Goerli curator factory address
const curatorFactoryAddress = '0xcc0ddff0ea076AbfB837117C5AaC6f48483e5B98'
const initialPause = false
const curationLimit = 0
const metadataRenderer = '0xCc0C14AAf75041137E57061b78B324A0D2d65507'
const metadataRendererInit =
  '0x0000000000000000000000000000000000000000000000000000000000000000'

const Deploy: NextPage = () => {
  const { title, symbol, curationPass, media } = useFormStateProvider()
  const { address } = useAccount()

  const curationManagerAddress = address as string
  const curatorTitle = title as string
  const curatorSymbol = symbol as string
  const tokenPassAddress = curationPass as string
  const initialListings = [
    Object.values({
      curatedAddress: media,
      selectedTokenId: 0,
      curator: address,
      curationTargetType: 1,
      sortOrder: 0,
      hasTokenId: false,
      chainId: 4,
    }),
  ]

  console.log(initialListings)

  const {
    deployConfig,
    deployConfigError,
    deployWrite,
    deployWriteError,
    txnDeployStatus,
  } = useCuratorFactory({
    curatorFactoryAddress,
    curationManagerAddress,
    curatorTitle,
    curatorSymbol,
    tokenPassAddress,
    initialPause,
    curationLimit,
    metadataRenderer,
    metadataRendererInit,
    initialListings,
  })

  console.log('Deploy Config: ', deployConfig)
  console.log('Config Error: ', deployConfigError)
  console.log('Write Error: ', deployWriteError)

  return (
    <div>
      <Head>
        {/*
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        */}
      </Head>
      <Header route="./inputMedia" />
      <div className="mx-6 mt-20 sm:mt-16 sm:mx-8">
        <h1 className="pa-displayDark unselectable text-5xl md:text-9xl lg:text-12xl">
          Ready to curate<br></br>
          <span className="pa-displayLight">{title}?</span>
        </h1>
        <div></div>
        <div className="flex w-full justify-end pt-24 pr-16">
          <div className="flex items-center">
            <div className="mr-1 mt-1">
              <IoIosArrowRoundForward size={48} />
            </div>
            <button
              className="pa-paragraph text-xl sm:text-2xl"
              onClick={() => deployWrite?.()}>
              <strong className="text-[#0c1413] hover:text-[#ecf1f0]">Deploy</strong> your
              contract
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deploy
