"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[702],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,g=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i="Integrating frontend client",l={unversionedId:"alert-subscribe/frontend-client/integrate",id:"alert-subscribe/frontend-client/integrate",title:"Integrating frontend client",description:"in progress",source:"@site/docs/alert-subscribe/frontend-client/integrate.md",sourceDirName:"alert-subscribe/frontend-client",slug:"/alert-subscribe/frontend-client/integrate",permalink:"/docs/alert-subscribe/frontend-client/integrate",draft:!1,editUrl:"https://github.com/notifi-network/docs/docs/alert-subscribe/frontend-client/integrate.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Frontend client",permalink:"/docs/alert-subscribe/frontend-client/"},next:{title:"React Hooks",permalink:"/docs/alert-subscribe/react-hooks/"}},s={},c=[{value:"in progress",id:"in-progress",level:2},{value:"Code example is outdated",id:"code-example-is-outdated",level:2},{value:"\ud83c\udfac Getting Started using Aptos",id:"-getting-started-using-aptos",level:2},{value:"\ud83d\udce5 Installation",id:"-installation",level:2},{value:"\ud83e\ude9d Hook up the SDK",id:"-hook-up-the-sdk",level:2},{value:"\ud83d\udd0f Signature Authorization",id:"-signature-authorization",level:2},{value:"\ud83e\udea2 Create the Alert",id:"-create-the-alert",level:2},{value:"\ud83d\udd03 Updating the Alert",id:"-updating-the-alert",level:2},{value:"\ud83d\uddd1 Deleting the Alert",id:"-deleting-the-alert",level:2},{value:"\ud83d\udd14 Get Notification History",id:"-get-notification-history",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integrating-frontend-client"},"Integrating frontend client"),(0,o.kt)("h2",{id:"in-progress"},"in progress"),(0,o.kt)("h2",{id:"code-example-is-outdated"},"Code example is outdated"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@notifi/notifi-frontend-client")),(0,o.kt)("h2",{id:"-getting-started-using-aptos"},"\ud83c\udfac Getting Started using Aptos"),(0,o.kt)("p",null,"In this README, we'll cover the simple use case of one user authenticating through an Aptos wallet and creating an alert."),(0,o.kt)("h2",{id:"-installation"},"\ud83d\udce5 Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm i @notifi-network/notifi-frontend-client\n")),(0,o.kt)("h2",{id:"-hook-up-the-sdk"},"\ud83e\ude9d Hook up the SDK"),(0,o.kt)("p",null,"Load the Notifi Frontend Client SDK into your component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const { newAptosClient, newAptosConfig } = require('@notifi-network/notifi-frontend-client');\n")),(0,o.kt)("p",null,"Instantiate and configure the Notifi Client for your dApp and environment. If your user has not connected their wallet, they will need to do so in order to instantiate the client."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const accountAddress = <The wallet's public account address>;\nconst walletPublicKey = <The wallet's public key>;\nconst tenantId = <Tenant ID received through the Notifi Config Tool>;\nconst blockchainEnv = \"Development\";\n\nconst config = newAptosConfig({\n  address: accountAddress, // string\n  publicKey: walletPublicKey, // string\n}, tenantId, blockchainEnv);\nconst client = newAptosClient(config);\n\n")),(0,o.kt)("h2",{id:"-signature-authorization"},"\ud83d\udd0f Signature Authorization"),(0,o.kt)("p",null,"For a user to opt-in for notifications, they will need to provide their signature. This signature will then be used to authorize the user's connected wallet address with Notifi and create the account with Notifi."),(0,o.kt)("p",null,"Using the wallet adapter of your choice, prompt the user to sign and use the signed message in the ",(0,o.kt)("inlineCode",{parentName:"p"},"logIn()")," hook."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const logIn = async () => {\n    const loginResult = await client.logIn({\n        walletBlockchain: 'APTOS',\n        signMessage: async (message, timestamp) => {\n            const { result } = await signMessage({\n              address: true,\n              message,\n              nonce: `${timestamp}`,\n            });\n            console.log('signedMessage', result);\n            return result.signature;\n        },\n      });\n      // client should be authenticated now\n      console.log('loginResult', loginResult);\n      return loginResult;\n};\n\n")),(0,o.kt)("h2",{id:"-create-the-alert"},"\ud83e\udea2 Create the Alert"),(0,o.kt)("p",null,"Once your user enters their contact information and options for their first alert, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ensureTargetGroup()"),' to create a "target group" of their contact information and a "source group" of their desired alert options.'),(0,o.kt)("p",null,"In order to create a target group, ",(0,o.kt)("inlineCode",{parentName:"p"},"ensureTargetGroup()")," must pass in least one email address, phone number, telegramId, or webhook url. Dapp admins can update pass in a webhook url to receive all of the notifications instead of a user email address, phone number, or telegramId."),(0,o.kt)("p",null,"In order to create a source group, ",(0,o.kt)("inlineCode",{parentName:"p"},"ensureSourceGroup()")," must pass in metadata of the alert options returned in the Rendering Alert Options section."),(0,o.kt)("p",null,"After creating a target group and source group, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ensureAlert()")," to create the first alert."),(0,o.kt)("p",null,"This example shows how to create a Broadcast message alert."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," // First create a source group\nconst sourceGroup = await client.ensureSourceGroup({\n  name: 'Default Source Group',\n    sourceParams: [\n      {\n        type: 'BROADCAST',\n        name: 'Marketing Broadcast Source',\n        blockchainAddress: 'notifi__newFeature'\n      }\n    ]\n});\n\nconst source = sourceGroup.sources?.find(it => it?.blockchainAddress === 'notifi__newFeature');\nconst filter = source?.applicableFilters?.find(it => it?.filterType === 'BROADCAST_MESSAGES');\n\nif (filter === undefined) {\n  throw new Error('Unable to find required filter');\n}\n\n// Second create a target group\nconst targetGroup = await client.ensureTargetGroup({\n      name: 'Default Target Group',\n      webhook: {\n        url: 'Notifi Platform', // For BROWSER_PUSH_NOTIFI, url is unused\n        format: 'BROWSER_PUSH_NOTIFI',\n        headers: [],\n  },\n})\n\n    // Finally create the alert\n    const alert = await client.ensureAlert({\n        name: 'User broadcast alerts',\n        sourceGroupId: sourceGroup.id,\n        targetGroupId: targetGroup.id,\n        filterId: filter.id,\n    });\n\n    return alert;\n}\n")),(0,o.kt)("h2",{id:"-updating-the-alert"},"\ud83d\udd03 Updating the Alert"),(0,o.kt)("p",null,"If a user wants to update their alert by changing the email address notifications are sent to, or to add a phone number for SMS notifications, you can still use ",(0,o.kt)("inlineCode",{parentName:"p"},"ensureAlert()")," to update."),(0,o.kt)("p",null,"You'll want to pass in the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," of the existing alert to make the update to that alert entity. You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"getAlerts()")," to find the alert entity."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nconst handleUpdateAlert = async () => {\n  try {\n    const alerts = await getAlerts();\n    const response = await ensureAlert({\n      name = alerts[0].name,\n      sourceGroupId,\n      targetGroupId,\n      filterId,\n      filterOptions,\n      groupName = 'default'\n    });\n    return response;\n  } catch (e) {\n    if (e instanceof GqlError) {\n      // handle the Notifi GqlError\n    }\n  }\n}\n\n")),(0,o.kt)("h2",{id:"-deleting-the-alert"},"\ud83d\uddd1 Deleting the Alert"),(0,o.kt)("p",null,"To delete an alert, use ",(0,o.kt)("inlineCode",{parentName:"p"},"deleteAlert()"),", which simply ","[takes the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," of the alert]"," to be deleted. In our use case where the user only has 1 alert in their account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nconst handleDeleteAlert = async () => {\n  try {\n    const alerts = await getAlert();\n    const response = await deleteAlert({\n      alertId: alerts?.[0]?.id,\n    });\n    return response;\n  } catch (e) {\n    if (e instanceof GqlError) {\n      // handle the Notifi GqlError\n    }\n  }\n}\n")),(0,o.kt)("h2",{id:"-get-notification-history"},"\ud83d\udd14 Get Notification History"),(0,o.kt)("p",null,"To get notification history, use the getNotificationHistory()"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const getNotificationHistory = async (first?: number, after?: string) => {\n    // Fetch `first` items after the `after` cursor (leave undefined for first page)\n    const { nodes , pageInfo } = await client.getNotificationHistory({\n        first,\n        after,\n    });\n\n    nodes.forEach(item => {\n        if (item.detail?.__typename === 'BroadcastMessageEventDetails') {\n            console.log('I have a broadcast message', item.detail?.subject, item.detail?.message);\n        }\n    });\n\n    console.log('pageInfo', pageInfo.hasNextPage, pageInfo.endCursor);\n\n    return {\n        nodes,\n        pageInfo\n    }\n}\n")))}p.isMDXComponent=!0}}]);