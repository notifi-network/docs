"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5165],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>f});var a=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=a.createContext({}),c=function(n){var e=a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=c(n.components);return a.createElement(l.Provider,{value:e},n.children)},p="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,r=n.originalType,l=n.parentName,u=s(n,["components","mdxType","originalType","parentName"]),p=c(t),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return t?a.createElement(f,i(i({ref:e},u),{},{components:t})):a.createElement(f,i({ref:e},u))}));function f(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s[p]="string"==typeof n?n:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3054:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(7462),o=(t(7294),t(3905));const r={},i="Integrating Notifi React card",s={unversionedId:"alert-subscribe/react-card/index",id:"alert-subscribe/react-card/index",title:"Integrating Notifi React card",description:"To see the source code, look at the Notifi SDK.",source:"@site/docs/alert-subscribe/react-card/index.md",sourceDirName:"alert-subscribe/react-card",slug:"/alert-subscribe/react-card/",permalink:"/docs/next/alert-subscribe/react-card/",draft:!1,editUrl:"https://github.com/notifi-network/notifi-network.github.io/blob/main/docs/alert-subscribe/react-card/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using External API's",permalink:"/docs/next/notifi-hosted-development/fetch-providers"},next:{title:"Creating a card config",permalink:"/docs/next/alert-subscribe/react-card/create-card-id"}},l={},c=[{value:"Design Guidelines",id:"design-guidelines",level:2},{value:"Tips",id:"tips",level:4},{value:"Solana",id:"solana",level:3},{value:"EVM (Ethereum, Polygon, Arbitrum, Avalanche or Binance)",id:"evm-ethereum-polygon-arbitrum-avalanche-or-binance",level:3},{value:"Aptos",id:"aptos",level:3},{value:"Acala",id:"acala",level:3},{value:"NEAR",id:"near",level:3},{value:"WalletConnect (Cross-chain wallet adaptor)",id:"walletconnect-cross-chain-wallet-adaptor",level:3},{value:"Sui",id:"sui",level:3}],u={toc:c},p="wrapper";function d(n){let{components:e,...t}=n;return(0,o.kt)(p,(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integrating-notifi-react-card"},"Integrating Notifi React card"),(0,o.kt)("p",null,"To see the source code, look at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/notifi-network/notifi-sdk-ts/tree/main/packages/notifi-react-card"},"Notifi SDK"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You will need a ",(0,o.kt)("strong",{parentName:"p"},"card config")," to use the Notifi React Card, which can be created in the ",(0,o.kt)("a",{parentName:"p",href:"https://admin.dev.notifi.network"},"Admin Portal"),". Follow the guide ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/alert-subscribe/react-card/create-card-id"},"here")," to create a ",(0,o.kt)("strong",{parentName:"p"},"card config"),".")),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"npm")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @notifi-network/notifi-react-card\nnpm install --save-dev @notifi-network/notifi-core\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"yarn")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @notifi-network/notifi-react-card\nyarn add --dev @notifi-network/notifi-core\n")),(0,o.kt)("p",null,"Import the following CSS file into your component to get baseline styling:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import '@notifi-network/notifi-react-card/dist/index.css';\n")),(0,o.kt)("h2",{id:"design-guidelines"},"Design Guidelines"),(0,o.kt)("p",null,"We have design recommendations on how to best present the UI to your dapp users. Check them out here: ",(0,o.kt)("a",{parentName:"p",href:"https://www.figma.com/file/ieF0Ynuc3WI608RCt7wKSf/Notifi-Template?node-id=0%3A1&t=v8zeo6UovJAOb9vR-0"},"Figma"),"."),(0,o.kt)("h4",{id:"tips"},"Tips"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Embed the bell icon by the wallet login section:\n",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/f2rnrpk.png",alt:"here"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"There should be a state for the bell icon when connected/not connected:\n",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/V9yEeCj.png",alt:"example of not connected state"}),"\nIf not connected, the bell icon should be hidden.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Make sure that there is enough contrast between color selections.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Styling should be consistent with your current UI."))),(0,o.kt)("h1",{id:"code-examples"},"Code Examples"),(0,o.kt)("p",null,"Please see below for code examples on the component configuration. Click on the dropdown button to check out the code snippet."),(0,o.kt)("h3",{id:"solana"},"Solana"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Integrate Card Component -- for Solana, you will also need to install `@notifi-network/notifi-solana-hw-login`"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  NotifiContext,\n  NotifiInputFieldsText,\n  NotifiInputSeparators,\n  NotifiSubscriptionCard,\n} from '@notifi-network/notifi-react-card';\nimport '@notifi-network/notifi-react-card/dist/index.css';\nimport { MemoProgramHardwareLoginPlugin } from '@notifi-network/notifi-solana-hw-login';\nimport { useConnection, useWallet } from '@solana/wallet-adapter-react';\nimport React from 'react';\n\nimport './NotifiCard.css';\n\nexport const NotifiCard: React.FC = () => {\n  const { connection } = useConnection();\n  const { wallet, sendTransaction, signMessage } = useWallet();\n  const adapter = wallet?.adapter;\n  const publicKey = adapter?.publicKey?.toBase58() ?? null;\n\n  const hwLoginPlugin = useMemo(() => {\n    return new MemoProgramHardwareLoginPlugin({\n      walletPublicKey: publicKey ?? '',\n      connection,\n      sendTransaction,\n    });\n  }, [publicKey, connection, sendTransaction]);\n\n  if (publicKey === null || signMessage === undefined) {\n    // publicKey is required\n    return null;\n  }\n\n  const inputLabels: NotifiInputFieldsText = {\n    label: {\n      email: 'Email',\n      sms: 'Text Message',\n      telegram: 'Telegram',\n    },\n    placeholderText: {\n      email: 'Email',\n    },\n  };\n\n  const inputSeparators: NotifiInputSeparators = {\n    smsSeparator: {\n      content: 'OR',\n    },\n    emailSeparator: {\n      content: 'OR',\n    },\n    telegramSeparator: {\n      content: 'OR',\n    },\n  };\n\n  return (\n    <div className=\"container\">\n      <NotifiContext\n        dappAddress=\"<YOUR OWN DAPP ADDRESS HERE>\"\n        walletBlockchain=\"SOLANA\"\n        // keep this \"Production\" unless you have a special Development environment set up by Notifi\n        env=\"Production\"\n        walletPublicKey={publicKey}\n        hardwareLoginPlugin={hwLoginPlugin}\n        signMessage={signMessage}\n      >\n        <NotifiSubscriptionCard\n          darkMode\n          inputLabels={inputLabels}\n          inputSeparators={inputSeparators}\n          cardId=\"<YOUR OWN CARD ID HERE>\"\n        />\n      </NotifiContext>\n    </div>\n  );\n};\n"))),(0,o.kt)("h3",{id:"evm-ethereum-polygon-arbitrum-avalanche-or-binance"},"EVM (Ethereum, Polygon, Arbitrum, Avalanche or Binance)"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Integrate Card Component"),(0,o.kt)("p",null,"Note: All EVM chains use Ethers. If using a supported EVM-chain, be sure to update the ",(0,o.kt)("inlineCode",{parentName:"p"},"NotifiContext")," params accordingly."),(0,o.kt)("p",null,"Note: Last tested with =>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"@usedapp/core": "^1.2.5"\n\n"ethers": "^5.7.2"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { arrayify } from '@ethersproject/bytes';\nimport {\n  NotifiContext,\n  NotifiInputFieldsText,\n  NotifiInputSeparators,\n  NotifiSubscriptionCard,\n} from '@notifi-network/notifi-react-card';\nimport '@notifi-network/notifi-react-card/dist/index.css';\nimport { useEthers } from '@usedapp/core';\nimport { providers } from 'ethers';\nimport React, { useMemo } from 'react';\n\nexport const Notifi: React.FC = () => {\n  const { account, library } = useEthers();\n  const signer = useMemo(() => {\n    if (library instanceof providers.JsonRpcProvider) {\n      return library.getSigner();\n    }\n    return undefined;\n  }, [library]);\n\n  if (account === undefined || signer === undefined) {\n    // account is required\n    return null;\n  }\n\n  const inputLabels: NotifiInputFieldsText = {\n    label: {\n      email: 'Email',\n      sms: 'Text Message',\n      telegram: 'Telegram',\n    },\n    placeholderText: {\n      email: 'Email',\n    },\n  };\n\n  const inputSeparators: NotifiInputSeparators = {\n    smsSeparator: {\n      content: 'OR',\n    },\n    emailSeparator: {\n      content: 'OR',\n    },\n  };\n\n  return (\n    <NotifiContext\n      dappAddress=\"<YOUR OWN DAPP ADDRESS HERE>\"\n      // keep this \"Production\" unless you have a special Development environment set up by Notifi\n      env=\"Production\"\n      signMessage={async (message: Uint8Array) => {\n        const result = await signer.signMessage(message);\n        return arrayify(result);\n      }}\n      walletPublicKey={account}\n      walletBlockchain=\"ETHEREUM\" // NOTE - Please update to the correct chain name.\n      //If Polygon, use \"POLYGON\"\n      //If Arbitrum, use \"ARBITRUM\"\n      //If Binance, use \"BINANCE\"\n      //If Optimism, use OPTIMISM\n    >\n      <NotifiSubscriptionCard\n        cardId=\"<YOUR OWN CARD ID HERE>\"\n        inputLabels={inputLabels}\n        inputSeparators={inputSeparators}\n        darkMode //optional\n      />\n    </NotifiContext>\n  );\n};\n"))),(0,o.kt)("h3",{id:"aptos"},"Aptos"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Integrate Card Component"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useWallet } from '@aptos-labs/wallet-adapter-react';\nimport {\n  NotifiContext,\n  NotifiInputFieldsText,\n  NotifiInputSeparators,\n  NotifiSubscriptionCard,\n} from '@notifi-network/notifi-react-card';\nimport '@notifi-network/notifi-react-card/dist/index.css';\nimport React from 'react';\n\nexport const Notifi: React.FC = () => {\n  const { signMessage, account } = useWallet();\n\n  if (\n    account === null ||\n    account.address === null ||\n    account.publicKey === null\n  ) {\n    // account is required\n    return null;\n  }\n\n  const inputLabels: NotifiInputFieldsText = {\n    label: {\n      email: 'Email',\n      sms: 'Text Message',\n      telegram: 'Telegram',\n    },\n    placeholderText: {\n      email: 'Email',\n    },\n  };\n\n  const inputSeparators: NotifiInputSeparators = {\n    smsSeparator: {\n      content: 'OR',\n    },\n    emailSeparator: {\n      content: 'OR',\n    },\n  };\n\n  return (\n    <NotifiContext\n      dappAddress=\"<YOUR OWN DAPP ADDRESS HERE>\"\n      // keep this \"Production\" unless you have a special Development environment set up by Notifi\n      env=\"Production\"\n      walletBlockchain=\"APTOS\"\n      accountAddress={account.address.toString()}\n      walletPublicKey={account.publicKey.toString()}\n      signMessage={async (message: string, nonce: number) => {\n        const result = await signMessage({\n          address: true,\n          message,\n          nonce: `${nonce}`,\n        });\n\n        if (result === null) {\n          throw new Error('failed to sign');\n        }\n\n        if (Array.isArray(result.signature)) {\n          return result.signature[0];\n        }\n        return result.signature;\n      }}\n    >\n      <NotifiSubscriptionCard\n        cardId=\"<YOUR OWN CARD ID HERE>\"\n        inputLabels={inputLabels}\n        inputSeparators={inputSeparators}\n        darkMode //optional\n      />\n    </NotifiContext>\n  );\n};\n"))),(0,o.kt)("h3",{id:"acala"},"Acala"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Integrate Card Component"),(0,o.kt)("p",null,"Create a hook that gets all of the account data using Polkadot util libraries"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { web3Accounts, web3FromAddress } from '@polkadot/extension-dapp';\nimport { stringToHex } from '@polkadot/util';\n\nexport default function useAcalaWallet() {\n  const [account, setAccount] = useState<string | null>(null);\n  const [acalaAddress, setAcalaAddress] = useState<string | null>(null);\n  const [polkadotPublicKey, setPolkadotPublicKey] = useState<string | null>(\n    null,\n  );\n\n  useEffect(() => {\n    async function getAccounts() {\n      const allAccounts = await web3Accounts();\n      const account = allAccounts[0].address;\n      if (account) setAccount(account);\n    }\n    getAccounts();\n  }, []);\n\n  const signMessage = useCallback(async (address: string, message: string) => {\n    const extension = await web3FromAddress(address);\n    const signRaw = extension?.signer?.signRaw;\n    const data = stringToHex(message);\n    const signMessage = await signRaw({\n      address,\n      data,\n      type: 'bytes',\n    });\n    return signMessage.signature;\n  }, []);\n\n  const getAcalaAddress = (address: string): string => {\n    const publicKey = decodeAddress(address);\n    return encodeAddress(publicKey, 10);\n  };\n\n  const getPolkadotPublicKey = (address: string): string => {\n    const publicKey = decodeAddress(address);\n    const decodedPublicKey = u8aToHex(publicKey);\n    return decodedPublicKey;\n  };\n\n  useEffect(() => {\n    if (account) {\n      const acalaAddress = getAcalaAddress(account);\n      if (acalaAddress) setAcalaAddress(acalaAddress);\n      const polkadotPublicKey = getPolkadotPublicKey(account);\n      if (polkadotPublicKey) setPolkadotPublicKey(polkadotPublicKey);\n    }\n  }, [account]);\n\n  return { account, acalaAddress, polkadotPublicKey, signMessage };\n}\n")),(0,o.kt)("p",null,"Create a component for the Notifi React Card"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  NotifiContext,\n  NotifiInputFieldsText,\n  NotifiInputSeparators,\n  NotifiSubscriptionCard,\n} from '@notifi-network/notifi-react-card';\nimport '@notifi-network/notifi-react-card/dist/index.css';\nimport React, { useCallback, useState } from 'react';\nimport { useAcalaWallet } from 'path-to-custom-hook';\n\nexport const Notifi: React.FC = () => {\n\n  const { acoount, acalaAddress, polkadotPublicKey, signMessage } = useAcalaWallet();\n\n  if (\n    account === null ||\n    acalaAddress === null ||\n    polkadotPublicKey === null\n  ) {\n    // account is required\n    return null;\n  }\n  const inputLabels: NotifiInputFieldsText = {\n    label: {\n      email: 'Email',\n      sms: 'Text Message',\n      telegram: 'Telegram',\n    },\n    placeholderText: {\n      email: 'Email',\n    },\n  };\n  const inputSeparators: NotifiInputSeparators = {\n    smsSeparator: {\n      content: 'OR',\n    },\n    emailSeparator: {\n      content: 'OR',\n    },\n  };\n\n  return (\n    <NotifiContext\n      dappAddress=\"<YOUR OWN DAPP ADDRESS HERE>\"\n      // keep this \"Production\" unless you have a special Development environment set up by Notifi\n      env=\"Production\"\n      walletBlockchain=\"ACALA\"\n      accountAddress={acalaAddress}\n      walletPublicKey={polkadotPublicKey}\n      signMessage={async (accountAddress: string, message: string) => {\n        await signMessage(\n          address: accountAddress;\n          message: message;\n      );\n      }}\n    >\n      <NotifiSubscriptionCard\n        cardId=\"<YOUR OWN CARD ID HERE>\"\n        inputLabels={inputLabels}\n        inputSeparators={inputSeparators}\n        darkMode //optional\n      />\n    </NotifiContext>\n  );\n};\n"))),(0,o.kt)("h3",{id:"near"},"NEAR"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Integrate Card Component"),(0,o.kt)("p",null,"Create a hook that gets all of the account data using NEAR API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { keyStores } from 'near-api-js';\nimport { useCallback, useEffect, useMemo, useState } from 'react';\n\nimport { useWalletSelector } from '../components/NearWalletContextProvider';\n\n//assume that you have NEARWalletContextProvider setup\n//example: https://github.com/near/wallet-selector/blob/main/examples/react/contexts/WalletSelectorContext.tsx\n\nexport default function useNearWallet() {\n  const { accountId } = useWalletSelector();\n  const [walletPublicKey, setWalletPublicKey] = useState<string | null>(null);\n\n  const config = {\n    networkId: 'testnet', //adjust based on network type\n  };\n\n  const keyStore = useMemo(() => {\n    return new keyStores.BrowserLocalStorageKeyStore();\n  }, []);\n\n  useEffect(() => {\n    if (!accountId) {\n      setWalletPublicKey(null);\n    }\n  }, [accountId]);\n\n  useEffect(() => {\n    async function getPublicKey() {\n      const keyPair = await keyStore.getKey(config.networkId, accountId!);\n      const publicKey = keyPair.getPublicKey().toString();\n      // remove the ed25519: appending for the wallet public key\n      const publicKeyWithoutTypeAppend = publicKey.replace('ed25519:', '');\n      setWalletPublicKey(publicKeyWithoutTypeAppend);\n    }\n    getPublicKey();\n  }, [accountId, config.networkId, keyStore]);\n\n  const signMessage = useCallback(\n    async (message: Uint8Array) => {\n      const keyPair = await keyStore.getKey(config.networkId, accountId!);\n      const { signature } = keyPair.sign(message);\n      return signature;\n    },\n    [accountId, config.networkId, keyStore],\n  );\n\n  return { account: accountId, walletPublicKey, signMessage };\n}\n")),(0,o.kt)("p",null,"Create a component for the Notifi React Card"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  NotifiContext,\n  NotifiInputFieldsText,\n  NotifiInputSeparators,\n  NotifiSubscriptionCard,\n} from '@notifi-network/notifi-react-card';\nimport '@notifi-network/notifi-react-card/dist/index.css';\nimport { useNearWallet } from 'path-to-custom-hook';\nimport React, { useCallback, useState } from 'react';\n\nexport const Notifi: React.FC = () => {\n  const { account, walletPublicKey, signMessage } = useNearWallet();\n\n  if (account === null || walletPublicKey === null) {\n    // account is required\n    return null;\n  }\n\n  const inputLabels: NotifiInputFieldsText = {\n    label: {\n      email: 'Email',\n      sms: 'Text Message',\n      telegram: 'Telegram',\n    },\n    placeholderText: {\n      email: 'Email',\n    },\n  };\n\n  const inputSeparators: NotifiInputSeparators = {\n    smsSeparator: {\n      content: 'OR',\n    },\n    emailSeparator: {\n      content: 'OR',\n    },\n  };\n\n  return (\n    <NotifiContext\n      dappAddress=\"<YOUR OWN DAPP ADDRESS HERE>\"\n      // keep this \"Production\" unless you have a special Development environment set up by Notifi\n      env=\"Production\"\n      walletBlockchain=\"NEAR\"\n      accountAddress={account}\n      walletPublicKey={walletPublicKey} // require wallet public key without ed25519: append\n      signMessage={signMessage}\n    >\n      <NotifiSubscriptionCard\n        cardId=\"<YOUR OWN CARD ID HERE>\"\n        inputLabels={inputLabels}\n        inputSeparators={inputSeparators}\n        darkMode //optional\n      />\n    </NotifiContext>\n  );\n};\n"))),(0,o.kt)("h3",{id:"walletconnect-cross-chain-wallet-adaptor"},"WalletConnect (Cross-chain wallet adaptor)"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Integrate Card Component"),(0,o.kt)("p",null,"Note:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ethers.js & wagmi are used. Be sure these two are installed as dependencies."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NotifiContext")," params needs to be updated accordingly.")),(0,o.kt)("p",null,"Create a WallectConnectProvider by WagmiConfig"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { FC, PropsWithChildren } from 'react';\nimport { WagmiConfig, configureChains, createClient, mainnet } from 'wagmi';\nimport { WalletConnectConnector } from 'wagmi/connectors/walletConnect';\nimport { infuraProvider } from 'wagmi/providers/infura';\n\nexport const connector = new WalletConnectConnector({\n  chains: [mainnet],\n  options: {\n    projectId: '<YOUR WALLETCONNECT PROJECT ID HERE>', // Get Project ID at https://cloud.walletconnect.com/\n  },\n});\n\nexport const WalletConnectProvider: FC<PropsWithChildren> = ({ children }) => {\n  const { provider } = configureChains(\n    [mainnet],\n    [infuraProvider({ apiKey: '<YOUR INFURA API KEY HERE>' })], // Get Infura apiKey at https://www.infura.io/\n  );\n  const client = createClient({\n    autoConnect: true,\n    connectors: [connector],\n    provider: provider,\n  });\n  return <WagmiConfig client={client}>{children}</WagmiConfig>;\n};\n")),(0,o.kt)("p",null,"Wrap the React ","<","/App> with ","<","WalletConnectProvider />"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"...\nconst container = document.getElementById('root');\nif (container != null) {\n  const root = ReactDOMClient.createRoot(container);\n  root.render(\n    <React.StrictMode>\n      ...\n        <WalletConnectProvider>\n            <App />\n        </WalletConnectProvider>\n      ...\n    </React.StrictMode>,\n  );\n}\n")),(0,o.kt)("p",null,"Place the NotifiSubscriptionCard by passing in corresponding NotifiContext properties"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { connector } from '<PATH TO WalletConnectorProvider.tsx>';\nimport {\n  NotifiContext,\n  NotifiSubscriptionCard,\n} from '@notifi-network/notifi-react-card';\nimport { arrayify } from 'ethers/lib/utils.js';\nimport { useAccount, useConnect, useDisconnect, useSignMessage } from 'wagmi';\n\nexport const WalletConnectCard = () => {\n  const { address, isConnected } = useAccount();\n\n  const { connect } = useConnect({\n    connector: connector,\n  });\n  const { disconnect } = useDisconnect();\n\n  const { signMessageAsync } = useSignMessage();\n  return (\n    <NotifiContext\n      dappAddress=\"<YOUR OWN DAPP ADDRESS HERE>\"\n      // keep this \"Production\" unless you have a special Development environment set up by Notifi\n      env=\"Production\"\n      signMessage={async (message) => {\n        const result = await signMessageAsync({ message });\n        return arrayify(result);\n      }}\n      walletPublicKey={address ?? ''}\n      walletBlockchain=\"ETHEREUM\"\n    >\n      <NotifiSubscriptionCard\n        cardId=\"<YOUR OWN CARD ID HERE>\"\n        darkMode //optional\n      />\n    </NotifiContext>\n  );\n};\n"))),(0,o.kt)("h3",{id:"sui"},"Sui"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Integrate Card Component"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ethos-connect"},(0,o.kt)("inlineCode",{parentName:"a"},"ethos-connect"))," is used as the Sui wallet adaptor. Make sure it's installed as a dependency.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install ethos-connect # For npm\nyarn add ethos-connect # For yarn\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a EthosWalletProvider component")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// EthosWalletProvider.tsx\nimport { EthosConnectProvider } from 'ethos-connect';\nimport { PropsWithChildren } from 'react';\n\nexport const EthosWalletProvider: React.FC<PropsWithChildren> = ({\n  children,\n}) => {\n  return (\n    <EthosConnectProvider\n      ethosConfiguration={{\n        hideEmailSignIn: true, // defaults to false\n      }}\n    >\n      {children}\n    </EthosConnectProvider>\n  );\n};\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Wrap the React ","<","/App> with ","<","EthosWalletProvider />")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { EthosWalletProvider } from '<PATH TO EthosWalletProvider.tsx>';\n<EthosWalletProvider></App> <EthosWalletProvider />\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Place the NotifiSubscriptionCard by passing in corresponding NotifiContext properties")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Uint8SignMessageFunction } from '@notifi-network/notifi-core';\nimport {\n  NotifiContext,\n  NotifiInputFieldsText,\n  NotifiInputSeparators,\n  NotifiSubscriptionCard,\n} from '@notifi-network/notifi-react-card';\nimport { EthosConnectStatus, SignInButton, ethos } from 'ethos-connect';\nimport React from 'react';\n\nexport const SuiNotifiCard: React.FC = () => {\n  const { status, wallet } = ethos.useWallet();\n\n  const signMessage: Uint8SignMessageFunction = async (message: Uint8Array) => {\n    if (!wallet) {\n      throw new Error('Wallet not connected');\n    }\n\n    const signature = await wallet.signMessage({\n      message,\n    });\n\n    const signatureBuffer = Buffer.from(signature.signature);\n    return signatureBuffer;\n  };\n\n  const inputLabels: NotifiInputFieldsText = {\n    label: {\n      email: 'Email',\n      sms: 'Text Message',\n      telegram: 'Telegram',\n    },\n    placeholderText: {\n      email: 'Email',\n    },\n  };\n\n  const inputSeparators: NotifiInputSeparators = {\n    smsSeparator: {\n      content: '',\n    },\n    emailSeparator: {\n      content: '',\n    },\n  };\n\n  return (\n    <div className=\"container\">\n      <h1>Notifi Card: Sui</h1>\n      {status === EthosConnectStatus.Connected && wallet ? (\n        <NotifiContext\n          dappAddress=\"< YOUR OWN DAPP ADDRESS HERE >\"\n          walletBlockchain=\"SUI\"\n          // keep this \"Production\" unless you have a special Development environment set up by Notifi\n          env=\"Production\"\n          accountAddress={wallet.address}\n          walletPublicKey={wallet.address}\n          signMessage={signMessage}\n        >\n          Connected SUI Wallet: <br /> {wallet?.address}\n          <button onClick={wallet.disconnect}> DISCONNECT</button>\n          <NotifiSubscriptionCard\n            darkMode\n            inputs={{ userWallet: wallet.address }}\n            inputLabels={inputLabels}\n            inputSeparators={inputSeparators}\n            cardId=\"< YOUR OWN CARD ID HERE >\"\n            onClose={() => alert('nope you must stay')}\n          />\n        </NotifiContext>\n      ) : (\n        <SignInButton>CONNECT SUI WALLET</SignInButton>\n      )}\n    </div>\n  );\n};\n"))))}d.isMDXComponent=!0}}]);