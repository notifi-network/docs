"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3999],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(k,s(s({ref:t},c),{},{components:n})):a.createElement(k,s({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},s="Supported RPC Blockchain Methods",i={unversionedId:"notifi-hosted-development/rpc-providers",id:"notifi-hosted-development/rpc-providers",title:"Supported RPC Blockchain Methods",description:"The RPC APIs will be injected upon startup of your Notifi Hosted routine. The interfaces will be specific to the blockchain your parser is targeting and will be limited to query only.",source:"@site/docs/notifi-hosted-development/rpc-providers.md",sourceDirName:"notifi-hosted-development",slug:"/notifi-hosted-development/rpc-providers",permalink:"/docs/next/notifi-hosted-development/rpc-providers",draft:!1,editUrl:"https://github.com/notifi-network/notifi-network.github.io/blob/main/docs/notifi-hosted-development/rpc-providers.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"On-Chain & Off-Chain Development",permalink:"/docs/next/notifi-hosted-development/on-chain-&-off-chain-development"},next:{title:"Using Persistant and Ephemeral Storage API's",permalink:"/docs/next/notifi-hosted-development/storage-providers"}},p={},l=[{value:"EVM",id:"evm",level:2},{value:"Methods Supported:",id:"methods-supported",level:3},{value:"getAccountBalance",id:"getaccountbalance",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Response",id:"response",level:4},{value:"ethCall",id:"ethcall",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Response",id:"response-1",level:4},{value:"Sui",id:"sui",level:2},{value:"dryRunTransactionBlock",id:"dryruntransactionblock",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Response",id:"response-2",level:4},{value:"getObject",id:"getobject",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Response",id:"response-3",level:4},{value:"getBalance",id:"getbalance",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Response",id:"response-4",level:4},{value:"getCoinMetadata",id:"getcoinmetadata",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Response",id:"response-5",level:4},{value:"getCoinTotalSupply",id:"getcointotalsupply",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Response",id:"response-6",level:4},{value:"getSuiTransactionBlock",id:"getsuitransactionblock",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Response",id:"response-7",level:4},{value:"getDynamicFieldObject",id:"getdynamicfieldobject",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Response",id:"response-8",level:4},{value:"runSuiDevInspectTransaction",id:"runsuidevinspecttransaction",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Response",id:"response-9",level:4},{value:"Solana",id:"solana",level:2},{value:"getSolanaTokenAccountBalance",id:"getsolanatokenaccountbalance",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Response",id:"response-10",level:4},{value:"getSolanaBalance",id:"getsolanabalance",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"Response",id:"response-11",level:4},{value:"getSolanaAccountInfo",id:"getsolanaaccountinfo",level:3},{value:"Parameters",id:"parameters-12",level:4},{value:"Response",id:"response-12",level:4},{value:"getSolanaProgramAccounts",id:"getsolanaprogramaccounts",level:3},{value:"Parameters",id:"parameters-13",level:4},{value:"Response",id:"response-13",level:4},{value:"getSolanaSlot",id:"getsolanaslot",level:3},{value:"Parameters",id:"parameters-14",level:4},{value:"Response",id:"response-14",level:4},{value:"getSolanaTransaction",id:"getsolanatransaction",level:3},{value:"Parameters",id:"parameters-15",level:4},{value:"Response",id:"response-15",level:4}],c={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"supported-rpc-blockchain-methods"},"Supported RPC Blockchain Methods"),(0,r.kt)("p",null,"The RPC APIs will be injected upon startup of your Notifi Hosted routine. The interfaces will be specific to the blockchain your parser is targeting and will be limited to query only."),(0,r.kt)("p",null,"Supported Chains/RPCs"),(0,r.kt)("h2",{id:"evm"},"EVM"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ethereum, Polygon, Avalance, Arbitrum, ZKsync, Binance, EVMOS, Optimism")),(0,r.kt)("h3",{id:"methods-supported"},"Methods Supported:"),(0,r.kt)("h3",{id:"getaccountbalance"},"getAccountBalance"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required")," ",(0,r.kt)("inlineCode",{parentName:"p"},"account: string")),(0,r.kt)("p",null,"The address (20 bytes) to check for balance"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required")," ",(0,r.kt)("inlineCode",{parentName:"p"},"blockNumber: number")),(0,r.kt)("p",null,"The blocknumber is in decimal format. Available through ",(0,r.kt)("inlineCode",{parentName:"p"},"block.blockNumber")," invoked on injection of Notifi Hosted routine."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," getAccountBalance: (params: {\n            account: Common.Hex;\n            blockNumber: number;\n        }) => Promise<Common.Hex>;\n")),(0,r.kt)("h4",{id:"response"},"Response"),(0,r.kt)("p",null,"Returns a hex string to be decoded"),(0,r.kt)("h3",{id:"ethcall"},"ethCall"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required")," ",(0,r.kt)("inlineCode",{parentName:"p"},"data: string")),(0,r.kt)("p",null,"Data is a hex string of your respective encoded call string"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required")," ",(0,r.kt)("inlineCode",{parentName:"p"},"blockNumber: number")),(0,r.kt)("p",null,"The blocknumber is in decimal format. Available through ",(0,r.kt)("inlineCode",{parentName:"p"},"block.blockNumber")," invoked on injection of Notifi Hosted routine."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EthCallParams { blockNumber: number; data: string; }")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"        ethCall: (params: EthCallParams) => Promise<Common.Hex>;\n")),(0,r.kt)("h4",{id:"response-1"},"Response"),(0,r.kt)("p",null,"Returns a hex string to be decoded"),(0,r.kt)("h2",{id:"sui"},"Sui"),(0,r.kt)("p",null,"Methods Supported:"),(0,r.kt)("h3",{id:"dryruntransactionblock"},"dryRunTransactionBlock"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required")," ",(0,r.kt)("inlineCode",{parentName:"p"},"bytes: string")),(0,r.kt)("p",null,"Bytes is a string of your respective encoded call string utilizing the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.sui.io/guides/developer/sui-101/building-ptb"},"serialize")," method on a transaction block"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," dryRunTransactionBlock: (\n      bytes: string,\n    ) => Promise<DryRunTransactionBlockResponse>;\n")),(0,r.kt)("h4",{id:"response-2"},"Response"),(0,r.kt)("p",null,"Returns a DryRunTransactionBlockResponse object from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@mysten/sui.js"},'"mysten/sui.js" package'),"."),(0,r.kt)("h3",{id:"getobject"},"getObject"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required")," ",(0,r.kt)("inlineCode",{parentName:"p"},"objectId: string"),"\nObjectId is the string of the respective Object Id"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required")," ",(0,r.kt)("inlineCode",{parentName:"p"},"options: SuiObjectDataOptions"),"\nOptions is a a SuiObjectDataOptions object from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@mysten/sui.js"},'"mysten/sui.js" package'),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"   getObject: (\n      objectId: string,\n      options: SuiObjectDataOptions,\n    ) => Promise<SuiObjectResponse>;\n")),(0,r.kt)("h4",{id:"response-3"},"Response"),(0,r.kt)("p",null,"Returns a SuiObjectResponse object from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@mysten/sui.js"},'"mysten/sui.js" package'),"."),(0,r.kt)("h3",{id:"getbalance"},"getBalance"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required")," ",(0,r.kt)("inlineCode",{parentName:"p"},"owner: string"),"\nOwner is the string of the respective Wallet Id."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required")," ",(0,r.kt)("inlineCode",{parentName:"p"},"coinType: string"),"\nCoinType is the string of Coin Type Id."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    getBalance: (owner: string, coinType: string) => Promise<CoinBalance>;\n\n")),(0,r.kt)("h4",{id:"response-4"},"Response"),(0,r.kt)("p",null,"Returns a CoinBalance object from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@mysten/sui.js"},'"mysten/sui.js" package'),"."),(0,r.kt)("h3",{id:"getcoinmetadata"},"getCoinMetadata"),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required")," ",(0,r.kt)("inlineCode",{parentName:"p"},"coinType: string"),"\nCoinType is the string of Coin Type Id."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"     getCoinMetadata: (coinType: string) => Promise<CoinMetadata>;\n\n")),(0,r.kt)("h4",{id:"response-5"},"Response"),(0,r.kt)("p",null,"Returns a CoinMetadata object from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@mysten/sui.js"},'"mysten/sui.js" package'),"."),(0,r.kt)("h3",{id:"getcointotalsupply"},"getCoinTotalSupply"),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required")," ",(0,r.kt)("inlineCode",{parentName:"p"},"coinType: string"),"\nCoinType is the string of Coin Type Id."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," getCoinTotalSupply: (coinType: string) => Promise<{value: Common.IntString;}>;\n")),(0,r.kt)("h4",{id:"response-6"},"Response"),(0,r.kt)("p",null,"Returns a Integer string accesible through ",(0,r.kt)("inlineCode",{parentName:"p"},"value")),(0,r.kt)("h3",{id:"getsuitransactionblock"},"getSuiTransactionBlock"),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required")," ",(0,r.kt)("inlineCode",{parentName:"p"},"digest: string"),"\nDigest is the respective Transaction Digest from the respective transaction"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required")," ",(0,r.kt)("inlineCode",{parentName:"p"},"transactionResponseOptions: string"),"\nTransactionResponseOptions is the SuiTransactionBlockResponseOptions object from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@mysten/sui.js"},'"mysten/sui.js" package')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"getSuiTransactionBlock: (\n      digest: string,\n      transactionResponseOptions: SuiTransactionBlockResponseOptions,\n    ) => Promise<SuiTransactionBlockResponse>;\n")),(0,r.kt)("h4",{id:"response-7"},"Response"),(0,r.kt)("p",null,"Returns a SuiTransactionBlockResponse object from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@mysten/sui.js"},'"mysten/sui.js" package')),(0,r.kt)("h3",{id:"getdynamicfieldobject"},"getDynamicFieldObject"),(0,r.kt)("h4",{id:"parameters-8"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required")," ",(0,r.kt)("inlineCode",{parentName:"p"},"parentId: string"),"\nParentId is the string of the respective Object Id"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required")," ",(0,r.kt)("inlineCode",{parentName:"p"},"value: string"),"\nValue is a string of the object value on the respective Object"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required")," ",(0,r.kt)("inlineCode",{parentName:"p"},"type: string"),"\nType is the name of the dynamic field on the respective Object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"     getDynamicFieldObject: (\n      parentId: string,\n      value: string,\n      type: string,\n    ) => Promise<any>;\n")),(0,r.kt)("h4",{id:"response-8"},"Response"),(0,r.kt)("p",null,"Returns a the Dynamic Field Object Response"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This method is currently not type safe")),(0,r.kt)("h3",{id:"runsuidevinspecttransaction"},"runSuiDevInspectTransaction"),(0,r.kt)("h4",{id:"parameters-9"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required")," ",(0,r.kt)("inlineCode",{parentName:"p"},"sender: string"),"\nSender is the string of the wallet address of the respective call"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required")," ",(0,r.kt)("inlineCode",{parentName:"p"},"txBytes: string"),"\nTxBytes is a string of your respective encoded call string utilizing the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.sui.io/guides/developer/sui-101/building-ptb"},"serialize")," method on a transaction block"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," runSuiDevInspectTransaction: (\n      sender: string,\n      txBytes: string,\n    ) => Promise<DevInspectResults>;\n")),(0,r.kt)("h4",{id:"response-9"},"Response"),(0,r.kt)("p",null,"Returns a DevInspectResults object from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@mysten/sui.js"},'"mysten/sui.js" package')),(0,r.kt)("h2",{id:"solana"},"Solana"),(0,r.kt)("p",null,"Methods Supported:"),(0,r.kt)("h3",{id:"getsolanatokenaccountbalance"},"getSolanaTokenAccountBalance"),(0,r.kt)("h4",{id:"parameters-10"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required")," ",(0,r.kt)("inlineCode",{parentName:"p"},"pubkey: string"),"\nPubkey is a string of the respective public key of a user"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  getSolanaTokenAccountBalance: (pubkey: string) => Promise<TokenAmount>;\n")),(0,r.kt)("h4",{id:"response-10"},"Response"),(0,r.kt)("p",null,"Returns a TokenAmount object from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@solana/web3.js"},'"solana/web3.js" package')),(0,r.kt)("h3",{id:"getsolanabalance"},"getSolanaBalance"),(0,r.kt)("h4",{id:"parameters-11"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required")," ",(0,r.kt)("inlineCode",{parentName:"p"},"pubkey: string"),"\nPubkey is a string of the respective public key of a user"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    getSolanaBalance: (pubkey: string) => Promise<number>;\n")),(0,r.kt)("h4",{id:"response-11"},"Response"),(0,r.kt)("p",null,"Returns a number."),(0,r.kt)("h3",{id:"getsolanaaccountinfo"},"getSolanaAccountInfo"),(0,r.kt)("h4",{id:"parameters-12"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required")," ",(0,r.kt)("inlineCode",{parentName:"p"},"pubkey: string"),"\nPubkey is a string of the respective public key of a user"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"optional")," ",(0,r.kt)("inlineCode",{parentName:"p"},"encoding: string"),"\nEncoding is the data response type based on the encoding string from ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@solana/web3.js"},'"solana/web3.js" package'),". If not defined, it will default as ",(0,r.kt)("inlineCode",{parentName:"p"},"json")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"optional")," ",(0,r.kt)("inlineCode",{parentName:"p"},"dataSlice: string"),"\nDataSlice is the object based on the type from ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@solana/web3.js"},'"solana/web3.js" package'),". If not defined, it will default as ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"optional")," ",(0,r.kt)("inlineCode",{parentName:"p"},"minContextSlot: string"),"\nMinContextSlot is the minimum slot number to fetch the slot from."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    getSolanaAccountInfo: (\n      pubkey: string,\n      encoding: string | undefined,\n      dataSlice: DataSlice | undefined,\n      minContextSlot: number | undefined,\n    ) => Promise<AccountInfo<Buffer> | null>;\n")),(0,r.kt)("h4",{id:"response-12"},"Response"),(0,r.kt)("p",null,"Returns a AccountInfo object from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@solana/web3.js"},'"solana/web3.js" package')),(0,r.kt)("h3",{id:"getsolanaprogramaccounts"},"getSolanaProgramAccounts"),(0,r.kt)("h4",{id:"parameters-13"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required")," ",(0,r.kt)("inlineCode",{parentName:"p"},"pubkey: string"),"\nPubkey is a string of the respective public key of a user"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"optional")," ",(0,r.kt)("inlineCode",{parentName:"p"},"withContext: boolean"),"\nWrap the result in an RpcResponse JSON object if true"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"optional")," ",(0,r.kt)("inlineCode",{parentName:"p"},"encoding: string"),"\nEncoding is the data response type based on the encoding string from ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@solana/web3.js"},'"solana/web3.js" package'),". If not defined, it will default as ",(0,r.kt)("inlineCode",{parentName:"p"},"json")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"optional")," ",(0,r.kt)("inlineCode",{parentName:"p"},"filterObject: string"),"\nFilterObject is based on the FilterObject type from ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@solana/web3.js"},'"solana/web3.js" package'),". If not defined, it will default as ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," getSolanaProgramAccounts: (\n      pubkey: string,\n      withContext: boolean | undefined,\n      encoding: string | undefined,\n      filterObject: ProgramAccountsFilter | undefined,\n    ) => Promise<GetProgramAccountsResponse>;\n")),(0,r.kt)("h4",{id:"response-13"},"Response"),(0,r.kt)("p",null,"Returns a GetProgramAccountsResponse object from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@solana/web3.js"},'"solana/web3.js" package')),(0,r.kt)("h3",{id:"getsolanaslot"},"getSolanaSlot"),(0,r.kt)("h4",{id:"parameters-14"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"optional")," ",(0,r.kt)("inlineCode",{parentName:"p"},"minContextSlot: string"),"\nMinContextSlot is the minimum slot number to fetch the slot from."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"     getSolanaSlot: (minContextSlot: number | undefined) => Promise<number>;\n")),(0,r.kt)("h4",{id:"response-14"},"Response"),(0,r.kt)("p",null,"Returns a number. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"minContextSlot")," is not defined, will return the latest slot number."),(0,r.kt)("h3",{id:"getsolanatransaction"},"getSolanaTransaction"),(0,r.kt)("h4",{id:"parameters-15"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required")," ",(0,r.kt)("inlineCode",{parentName:"p"},"signature: string"),"\nSignature is the string of the respective Transaction Signature"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"optional")," ",(0,r.kt)("inlineCode",{parentName:"p"},"encoding: string"),"\nEncoding is the data response type based on the encoding string from ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@solana/web3.js"},'"solana/web3.js" package'),". If not defined, it will default as ",(0,r.kt)("inlineCode",{parentName:"p"},"json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"getSolanaTransaction: (\n      signature: string,\n      encoding: string | undefined,\n    ) => Promise<TransactionResponse>;\n")),(0,r.kt)("h4",{id:"response-15"},"Response"),(0,r.kt)("p",null,"Returns a TransactionResponse object from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@solana/web3.js"},'"solana/web3.js" package')))}m.isMDXComponent=!0}}]);