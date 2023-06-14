"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[930],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,k=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return n?o.createElement(k,i(i({ref:t},u),{},{components:n})):o.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={},i=void 0,l={unversionedId:"alert-subscribe/frontend-client/index",id:"alert-subscribe/frontend-client/index",title:"index",description:"<<<<<<< HEAD",source:"@site/docs/alert-subscribe/frontend-client/index.md",sourceDirName:"alert-subscribe/frontend-client",slug:"/alert-subscribe/frontend-client/",permalink:"/docs/alert-subscribe/frontend-client/",draft:!1,editUrl:"https://github.com/notifi-network/notifi-network.github.io/docs/alert-subscribe/frontend-client/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating a card config",permalink:"/docs/alert-subscribe/react-card/create-card-id"},next:{title:"GraphQL API",permalink:"/docs/alert-subscribe/graphql-api/"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"\ud83e\ude9d Hook up the SDK and initialize the Client",id:"-hook-up-the-sdk-and-initialize-the-client",level:2},{value:"Hook up the SDK",id:"hook-up-the-sdk",level:2},{value:"Signature Authorization",id:"signature-authorization",level:2},{value:"Create the Alert",id:"create-the-alert",level:2},{value:"Updating the Alert",id:"updating-the-alert",level:2},{value:"Deleting the Alert",id:"deleting-the-alert",level:2},{value:"\ud83d\udd14 Get Notification History",id:"-get-notification-history",level:2},{value:"\ud83d\udcdd Check out more example",id:"-check-out-more-example",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"<<<<<<< HEAD"),(0,a.kt)("h1",{id:"notifinotifi-frontend-client"},(0,a.kt)("inlineCode",{parentName:"h1"},"@notifi/notifi-frontend-client")),(0,a.kt)("p",null,"======="),(0,a.kt)("h1",{id:"integrating-the-notifi-frontend-client"},"Integrating the Notifi Frontend Client"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@notifi/notifi-frontend-client")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/notifi-network/notifi-sdk-ts/tree/main/packages/notifi-frontend-client"},"https://github.com/notifi-network/notifi-sdk-ts/tree/main/packages/notifi-frontend-client")),(0,a.kt)("blockquote",null,(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},"e6c0c474f7d4e58a23cb6dc476c1d186c0a284be")))))))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm i @notifi-network/notifi-frontend-client\n")),(0,a.kt)("p",null,"<<<<<<< HEAD"),(0,a.kt)("h2",{id:"-hook-up-the-sdk-and-initialize-the-client"},"\ud83e\ude9d Hook up the SDK and initialize the Client"),(0,a.kt)("p",null,"Load the Notifi Frontend Client SDK into your component."),(0,a.kt)("h1",{id:"instantiate-and-configure-the-notifi-client-for-your-dapp-and-environment-if-your-user-has-not-connected-their-wallet-they-will-need-to-do-so-in-order-to-instantiate-the-client"},"Instantiate and configure the Notifi Client for your dApp and environment. If your user has not connected their wallet, they will need to do so in order to instantiate the client."),(0,a.kt)("h2",{id:"hook-up-the-sdk"},"Hook up the SDK"),(0,a.kt)("p",null,"Load the Notifi Frontend Client SDK into your component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// use the Client and Config of your chain\nconst { newAptosClient, newAptosConfig } = require('@notifi-network/notifi-frontend-client');\n")),(0,a.kt)("p",null,"Instantiate and configure the Notifi Client for your dapp and environment. If your user has not connected their wallet, they will need to do so in order to instantiate the client."),(0,a.kt)("blockquote",null,(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},"e6c0c474f7d4e58a23cb6dc476c1d186c0a284be")))))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const accountAddress = '<The-wallet-public-account-address>';\nconst walletPublicKey = \"<The wallet's public key>\";\nconst tenantId = '<Tenant ID received through the Notifi Config Tool>';\nconst blockchainEnv = 'Development';\n\nconst client = newFrontendClient({\n  account: {\n    address: accountAddress, // string\n    publicKey: walletPublicKey, // string\n  },\n  tenantId,\n  env: blockchainEnv,\n  // replace with your blockchain\n  walletBlockchain: 'APTOS',\n});\n\nconst newUserState = await client.initialize();\n")),(0,a.kt)("h2",{id:"signature-authorization"},"Signature Authorization"),(0,a.kt)("p",null,"For a user to opt-in for notifications, they will need to provide their signature. This signature will then be used to authorize the user's connected wallet address with Notifi and create the account with Notifi."),(0,a.kt)("p",null,"Using the wallet adapter of your choice, prompt the user to sign and use the signed message in the ",(0,a.kt)("inlineCode",{parentName:"p"},"logIn()")," hook."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// replace AptosSignMessageFunction with your blockchain SignMessageFunction\nconst signMessage: AptosSignMessageFunction = async (message, nonce) => {\n  if (!wallet) {\n    // the wallet object will be differ based on the wallet adapter you use\n    throw new Error('Wallet not connected');\n  }\n\n  // You will need to use the 'signMessage' method of your wallet adapter to sign the message.\n  const signature = await wallet.signMessage({\n    message,\n  });\n\n  return signature; // string (if the signature is not string format, you will need to convert it to string)\n};\n\nconst logIn = async () => {\n  const userState: UserState = client.userState;\n  if (userState.status === 'authenticated') {\n    return 'User is already logged in';\n  }\n\n  const loginResult = await client.logIn({\n    // replace with your blockchain\n    walletBlockchain: 'APTOS',\n    signMessage,\n  } as SignMessageParams);\n  // client should be authenticated now\n  console.log('loginResult', loginResult);\n  return loginResult;\n};\n")),(0,a.kt)("h2",{id:"create-the-alert"},"Create the Alert"),(0,a.kt)("p",null,"<<<<<<< HEAD\nOnce your user enters their contact information and options for their first alert, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ensureTargetGroup()"),' to create a "target group" of their contact information and a "source group" of their desired alert options.'),(0,a.kt)("p",null,"In order to create a target group, ",(0,a.kt)("inlineCode",{parentName:"p"},"ensureTargetGroup()")," must pass in least one email address, phone number, telegramId, or webhook url. Dapp admins can update pass in a webhook url to receive all of the notifications instead of a user email address, phone number, or telegramId."),(0,a.kt)("h1",{id:"the-following-example-shows-how-to-create-a-target-group-with-an-email-address-user-sign-up-with-email"},"The following example shows how to create a target group with an email address (user sign up with email)."),(0,a.kt)("p",null,"Once your user enters their contact information and options for their first alert, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ensureTargetGroup()")," to create a ",(0,a.kt)("a",{parentName:"p",href:"../integration-overview/alerts-in-depth#target"},"target group")," of their contact information and a ",(0,a.kt)("a",{parentName:"p",href:"../integration-overview/alerts-in-depth#source"},"source group")," of their desired alert options."),(0,a.kt)("p",null,"In order to create a target group, ",(0,a.kt)("inlineCode",{parentName:"p"},"ensureTargetGroup()")," must pass in least one email address, phone number, Telegram Id, or Webhook URL. Dapp admins can update pass in a Webhook URL to receive all of the notifications instead of a user email address, phone number, or Telegram Id."),(0,a.kt)("p",null,"In order to create a source group, ",(0,a.kt)("inlineCode",{parentName:"p"},"ensureSourceGroup()")," must pass in metadata of the alert options returned in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/notifi-network/notifi-sdk-ts/tree/main/packages/notifi-react-hooks"},"Rendering Alert Options")," section."),(0,a.kt)("blockquote",null,(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},"e6c0c474f7d4e58a23cb6dc476c1d186c0a284be")))))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const targetGroup = client.ensureTargetGroup({\n  name: 'Default',\n  emailAddress: 'user-email',\n});\n")),(0,a.kt)("p",null,"Then, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ensureAlert()")," to create the first alert when your user tends to subscribe an alert."),(0,a.kt)("p",null,"This example shows how to create (user subscribe) a Broadcast message alert."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Given that you have one Broadcast Topic in Notifi Admin Panel.\n\nconst subscribeAlert = () => {\n  const subscriptionCardConfig = await client.fetchSubscriptionCard();\n\n  const broadcastEventType: EventTypeItem = subscriptionCardConfig.eventTypes[0];\n\n  await client.ensureAlert({\n    eventType: broadcastEventType,\n    inputs: {},\n  });\n}\n\n")),(0,a.kt)("h2",{id:"updating-the-alert"},"Updating the Alert"),(0,a.kt)("p",null,"If a user wants to update their alert by changing the email address notifications are sent to, or to add a phone number for SMS notifications, you can repeat the process above by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"ensureTargetGroup()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ensureAlert()")," again."),(0,a.kt)("h2",{id:"deleting-the-alert"},"Deleting the Alert"),(0,a.kt)("p",null,"To delete an alert, use ",(0,a.kt)("inlineCode",{parentName:"p"},"deleteAlert()"),", which simply takes the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," of the alert to be deleted. Here is what that looks like in our use case where the user only has one alert in their account:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const handleDeleteAlert = async () => {\n  try {\n    const alerts = await getAlert();\n    const response = await deleteAlert({\n      alertId: alerts?.[0]?.id,\n    });\n    return response;\n  } catch (e) {\n    if (e instanceof GqlError) {\n      // handle the Notifi GqlError\n    }\n  }\n};\n")),(0,a.kt)("h2",{id:"-get-notification-history"},"\ud83d\udd14 Get Notification History"),(0,a.kt)("p",null,"To get notification history, use the getNotificationHistory()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const getNotificationHistory = async (first?: number, after?: string) => {\n  // Fetch `first` items after the `after` cursor (leave undefined for first page)\n  const { nodes, pageInfo } = await client.getNotificationHistory({\n    first,\n    after,\n  });\n\n  nodes.forEach((item) => {\n    if (item.detail?.__typename === 'BroadcastMessageEventDetails') {\n      console.log(\n        'I have a broadcast message',\n        item.detail?.subject,\n        item.detail?.message,\n      );\n    }\n  });\n\n  console.log('pageInfo', pageInfo.hasNextPage, pageInfo.endCursor);\n\n  return {\n    nodes,\n    pageInfo,\n  };\n};\n")),(0,a.kt)("h2",{id:"-check-out-more-example"},"\ud83d\udcdd Check out more example"),(0,a.kt)("p",null,"For more example in different blockchain, please visit ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/notifi-network/notifi-sdk-ts/blob/main/packages/notifi-react-example/src/FrontendClient/"},"notifi-react-example")),(0,a.kt)("p",null,"You can also clone the example and run it locally."))}d.isMDXComponent=!0}}]);