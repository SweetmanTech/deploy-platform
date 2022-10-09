import type { NextPage } from 'next'
import Head from 'next/head'
import { useFormStateProvider } from 'context'
import { useAccount } from 'wagmi'
import { useCuratorFactory } from '@public-assembly/assemble-curation-factory'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { Header } from '../components/Header'
import { HeroText } from 'components/HeroText'
import { VercelDeploy } from '../components/VercelDeploy'

type initialListings = any[]

const curatorFactoryAddress = '0xcc0ddff0ea076AbfB837117C5AaC6f48483e5B98'
const initialPause = false
const curationLimit = 0
const metadataRenderer = '0x0000000000000000000000000000000000000000'
const metadataRendererInit = '0x'

const Deploy: NextPage = () => {
  const { title, symbol, curationPass, media } = useFormStateProvider()
  const { address } = useAccount()

  const curationManagerAddress = address as string
  const curatorTitle = title as string
  const curatorSymbol = symbol as string
  const tokenPassAddress = curationPass as string
  const initialListings = [] as initialListings

  if (media != '') {
    initialListings.push(
      Object.values({
        curatedAddress: media,
        selectedTokenId: 0,
        curator: address,
        curationTargetType: 6,
        sortOrder: 0,
        hasTokenId: false,
        chainId: 4,
      })
    )
  }

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
      <div className="flex flex-col gap-2 mt-12 sm:mt-16 sm:gap-8">
        <HeroText
          text={
            <>
              ready to create&nbsp;<span className="hidden sm:block"></span>
              <wbr></wbr>
              <span className="pa-displayLight">{`${title}?`}</span>
            </>
          }
        />
        <button
          className="flex items-center gap-1 pa-paragraph hover:text-[#ecf1f0]"
          onClick={() => deployWrite?.()}>
          <span className="mb-1">deploy your contract</span>
          <IoIosArrowRoundForward className="text-3xl sm:text-4.5" />
        </button>
      </div>
    </div>
  )
}

export default Deploy
