"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2142],{2332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(4848),o=n(8453);const r={sidebar_position:2},s="Getting Started",a={id:"getting-started",title:"Getting Started",description:"In this Getting Started guide, we will walk through the steps of creating",source:"@site/versioned_docs/version-2.0/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/notifi-network/notifi-network.github.io/blob/main/versioned_docs/version-2.0/getting-started.md",tags:[],version:"2.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Getting Started with Self-Hosted Messaging",permalink:"/docs/getting-started-with-self-hosted"}},d={},c=[{value:"Signing Up For Notifi",id:"signing-up-for-notifi",level:2},{value:"Setting Up A Notification Topic",id:"setting-up-a-notification-topic",level:2},{value:"Setting Up Your Signup UI",id:"setting-up-your-signup-ui",level:2},{value:"Creating a UI Card Config",id:"creating-a-ui-card-config",level:3},{value:"Setting Up a React Application With Your Card",id:"setting-up-a-react-application-with-your-card",level:3},{value:"Sending Your First Message",id:"sending-your-first-message",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Learn More About Community Manager",id:"learn-more-about-community-manager",level:3},{value:"Learn More About Our React Frontends",id:"learn-more-about-our-react-frontends",level:3},{value:"Send Automatic Notifications",id:"send-automatic-notifications",level:3},{value:"Adding Additional Destination Platforms",id:"adding-additional-destination-platforms",level:3},{value:"Style Your Notifications",id:"style-your-notifications",level:3},{value:"Set Up Custom Notification UI",id:"set-up-custom-notification-ui",level:3},{value:"Additional resources",id:"additional-resources",level:3},{value:"Get Help",id:"get-help",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsx)(t.p,{children:"In this Getting Started guide, we will walk through the steps of creating\na Dapp account with Notifi, setting up a notification topic, allowing users\nto subscribe on that topic, and sending your first message!"}),"\n",(0,i.jsx)(t.h2,{id:"signing-up-for-notifi",children:"Signing Up For Notifi"}),"\n",(0,i.jsxs)(t.p,{children:["To sign up your Dapp for Notifi,\n",(0,i.jsx)(t.a,{href:"https://admin.notifi.network/signup",children:"create an account"})," on the\n",(0,i.jsx)(t.a,{href:"https://admin.notifi.network",children:"Notifi Admin Portal"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Once you've set your email address, password, and company name, expect\na verification email for that email address. Once you verify your email,\nyou can then log into Admin Portal and begin setting up notifications!"}),"\n",(0,i.jsx)(t.h2,{id:"setting-up-a-notification-topic",children:"Setting Up A Notification Topic"}),"\n",(0,i.jsx)(t.p,{children:"Notifi has three types of notifications:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Messages written in Community Manager in Admin Portal"}),"\n",(0,i.jsx)(t.li,{children:"Messages triggered by your server through the Notifi SDK"}),"\n",(0,i.jsx)(t.li,{children:"Messages triggered by Notifi-hosted code, usually in response to on-chain events"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["For this Getting Started guide, we will be creating a Community Manager topic.\nCheck out our\n",(0,i.jsx)(t.a,{href:"./getting-started-with-self-hosted",children:"self-hosted"}),"\nand ",(0,i.jsx)(t.a,{href:"./getting-started-with-notifi-hosted",children:"Notifi-hosted"}),"\nguides for writing for the other two types."]}),"\n",(0,i.jsxs)(t.p,{children:["To create a Community Manager topic, go to the Alert Manager, click ",(0,i.jsx)(t.strong,{children:"Create Topic"}),",\nthen ",(0,i.jsx)(t.strong,{children:"Send announcements from Community Manager"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["In the dialog box that appears, set the name of your topic and click ",(0,i.jsx)(t.strong,{children:"Create"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"setting-up-your-signup-ui",children:"Setting Up Your Signup UI"}),"\n",(0,i.jsx)(t.p,{children:"The easiest way to set up signup UI for your users is the Notifi React Card, a\nReact component that you can integrate with your application. This has two steps:\ncreating the UI Card config in Admin Portal, and adding the card to your application."}),"\n",(0,i.jsx)(t.h3,{id:"creating-a-ui-card-config",children:"Creating a UI Card Config"}),"\n",(0,i.jsxs)(t.p,{children:["To create your UI card configuration, go to the ",(0,i.jsx)(t.strong,{children:"UI Config"})," tab in Alert Manager,\nthen click ",(0,i.jsx)(t.strong,{children:"Create UI Card"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"You'll be presented with the Edit UI Card screen, which will let you edit your card\nand show you a preview."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Enter a name for your card."}),"\n",(0,i.jsxs)(t.li,{children:["Set the wallet type that you want to use to connect to the card. For this example,\nwe will use Ethereum (though the instructions will be the same for any EVM chain).","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Note that each card config only supports one wallet at a time. If you want to allow\nsignups across multiple blockchains, create a separate card for each."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Click ",(0,i.jsx)(t.strong,{children:"Select Topics"}),", then on the dialog box that pops up, click the check box\nnext to the Community Manager topic you created earlier. Click Save to put the\nEdit UI Card back in focus."]}),"\n",(0,i.jsxs)(t.li,{children:["If you wish, add a tooltip to your topic by clicking the ",(0,i.jsx)(t.strong,{children:"Add Tooltip"})," button.\nIn the dialog box that appears, type a short note to explain your topic."]}),"\n",(0,i.jsxs)(t.li,{children:["Under ",(0,i.jsx)(t.strong,{children:"Destinations"}),', click the switches next to the destination types you want\nto enable. For this Getting Started guide, we will just activate "Email", as that\nrequires the least setup.']}),"\n",(0,i.jsxs)(t.li,{children:["Click ",(0,i.jsx)(t.strong,{children:"Save Card"})," in the top right corner of the screen."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"You're all done! Leave this page open so that you can reference the Card ID when\nyou add the card to your website."}),"\n",(0,i.jsx)(t.h3,{id:"setting-up-a-react-application-with-your-card",children:"Setting Up a React Application With Your Card"}),"\n",(0,i.jsx)(t.p,{children:"Now that we have a card config, we'll go through the process of adding it to a\nReact application."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["This example will be using Ethereum. Setting up the React card for a different EVM\nchain only requires changing the chain name, but setting up the React card for different chains\nrequires different boilerplate for each. Check out the\n",(0,i.jsx)(t.a,{href:"https://github.com/notifi-network/notifi-sdk-ts/tree/main/packages/notifi-react-card",children:"Notifi React card SDK"}),"\nfor examples of how to use the React card with other chains."]})}),"\n",(0,i.jsxs)(t.p,{children:["First, either open your existing JSX React project, or\n",(0,i.jsx)(t.a,{href:"https://react.dev/learn/start-a-new-react-project",children:"create a new one"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Add a file that defines the React card component for your Dapp:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"import { arrayify } from '@ethersproject/bytes';\nimport {\n  NotifiContext,\n  NotifiSubscriptionCard,\n} from '@notifi-network/notifi-react-card';\nimport '@notifi-network/notifi-react-card/dist/index.css';\nimport { useEthers } from '@usedapp/core';\nimport { providers } from 'ethers';\nimport React, { useMemo } from 'react';\n\nexport const NotifiCard: React.FC = () => {\n  const { account, library } = useEthers();\n  const signer = useMemo(() => {\n    if (library instanceof providers.JsonRpcProvider) {\n      return library.getSigner();\n    }\n    return undefined;\n  }, [library]);\n\n  if (account === undefined || signer === undefined) {\n    // account is required\n    return null;\n  }\n\n  return (\n    <NotifiContext\n      dappAddress=\"<YOUR OWN DAPP ADDRESS HERE>\"\n      env=\"Production\"\n      signMessage={async (message: Uint8Array) => {\n        const result = await signer.signMessage(message);\n        return arrayify(result);\n      }}\n      walletPublicKey={account}\n      walletBlockchain=\"ETHEREUM\"\n    >\n      <NotifiSubscriptionCard\n        cardId=\"<YOUR OWN CARD ID HERE>\"\n      />\n    </NotifiContext>\n  );\n};\n"})}),"\n",(0,i.jsxs)(t.p,{children:["where ",(0,i.jsx)(t.code,{children:"dappAddress"})," is the Dapp ID for your Notifi account\n(found under ",(0,i.jsx)(t.strong,{children:"Account Settings"})," in Admin Portal),\nand ",(0,i.jsx)(t.code,{children:"cardId"})," is the ID of the UI card configuration in the\n",(0,i.jsx)(t.strong,{children:"Edit UI Card"})," page."]}),"\n",(0,i.jsxs)(t.p,{children:["Finally, use the resulting ",(0,i.jsx)(t.code,{children:"NotifiCard"})," component somewhere in your project."]}),"\n",(0,i.jsx)(t.p,{children:"Once you have this set up, run your app and navigate to the card.\nConnect your wallet to the app and follow the wallet prompts\nin order to sign into the card."}),"\n",(0,i.jsx)(t.p,{children:"Once you've done that, you'll see prompts to enter your email\naddress to sign up for notifications. Enter the email address you\nwant to receive notifications on (anything you can verify will do),\nand then simply check off the Community Manager topic you created\nbefore! Notifi will send you a verification email - once you click\nthe link to verify your email, you'll be all set to receive\nnotifications!"}),"\n",(0,i.jsx)(t.h2,{id:"sending-your-first-message",children:"Sending Your First Message"}),"\n",(0,i.jsx)(t.p,{children:"Finally, now that we have a topic and a user signed up to it,\nit's time to send a message!"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Navigate to the ",(0,i.jsx)(t.strong,{children:"Community Manager"})," page in Admin Portal."]}),"\n",(0,i.jsxs)(t.li,{children:["Under ",(0,i.jsx)(t.strong,{children:"Audience/Notification Topic"}),", select the Community Manager\ntopic you've created."]}),"\n",(0,i.jsxs)(t.li,{children:["Enter some text in the ",(0,i.jsx)(t.strong,{children:"Campaign Name"})," field. Your audience won't\nsee this name - it's just used to uniquely identify the message\nfor ",(0,i.jsx)(t.a,{href:"./reporting",children:"reporting"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Choose the destinations you want to send the message to. ",(0,i.jsx)(t.strong,{children:"Alert History"}),"\nis always selected, and in this example, we will add ",(0,i.jsx)(t.strong,{children:"Email"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"In the Alert History section, type the subject and message you\nwant to send."}),"\n",(0,i.jsx)(t.li,{children:"Copy the subject and message fields in the Alert History section to\nthe Email section. Here you can also add some extra details and formatting\nto your email, such as lists or images."}),"\n",(0,i.jsxs)(t.li,{children:["Click the ",(0,i.jsx)(t.strong,{children:"Publish"})," button at the bottom."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Within a few moments, you should receive an email at the email address\nyou provided to your Notifi card, and should also be able to see the message\nin the Notifi card's Alert History!"}),"\n",(0,i.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsx)(t.h3,{id:"learn-more-about-community-manager",children:"Learn More About Community Manager"}),"\n",(0,i.jsxs)(t.p,{children:["For more details on how to use Community Manager to send messages and manage\ncampaigns, view ",(0,i.jsx)(t.a,{href:"./alert-trigger/admin-portal",children:"our guide"})," here."]}),"\n",(0,i.jsx)(t.h3,{id:"learn-more-about-our-react-frontends",children:"Learn More About Our React Frontends"}),"\n",(0,i.jsxs)(t.p,{children:["To learn more about using the React card, including how to fully utilize each\nof the available parameters, check out ",(0,i.jsx)(t.a,{href:"./alert-subscribe/react-card",children:"this guide"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["To learn more about using the Frontend client, which allows deeper integration\nof Notifi functionality, check out ",(0,i.jsx)(t.a,{href:"./alert-subscribe/frontend-client",children:"this guide"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"send-automatic-notifications",children:"Send Automatic Notifications"}),"\n",(0,i.jsx)(t.p,{children:"In addition to sending messages manually using Community Manager,\nnotifications can also be sent automatically, both to your general audience and to specific\ndestinations. Notifi offers two separate avenues for this - notifications from\nself-hosted services through the Notifi SDK, and notifications from custom code hosted\non Notifi's servers that follow on-chain events. Check out the quickstart guides\nfor these:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"./getting-started-with-self-hosted",children:"Getting Started With Self-Hosted API Notifications"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"./getting-started-with-notifi-hosted",children:"Getting Started With Notifi-Hosted Development"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"adding-additional-destination-platforms",children:"Adding Additional Destination Platforms"}),"\n",(0,i.jsx)(t.p,{children:"Notifi notifications can be delivered through email, Telegram, Discord, Slack,\nand more. A few of these platforms require you to supply a bot for Notifi to use.\nIt is also possible to send email via your own custom domain:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"./target-setup/tg-bot",children:"Set up a Telegram bot"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"./target-setup/discord-bot",children:"Set up a Discord bot"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"./target-setup/slack-integration",children:"Set up a Slack integration"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"./target-setup/email-domain",children:"Set up a custom email domain"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"style-your-notifications",children:"Style Your Notifications"}),"\n",(0,i.jsxs)(t.p,{children:["Notifications can also be templated and styled. Check out our\n",(0,i.jsx)(t.a,{href:"./styling-your-notifications/",children:"template guide"}),"!"]}),"\n",(0,i.jsx)(t.h3,{id:"set-up-custom-notification-ui",children:"Set Up Custom Notification UI"}),"\n",(0,i.jsxs)(t.p,{children:["The React Card is the simplest way to set up UI for signing up for notifications,\nbut a more comprehensive frontend client is also available. Check out\n",(0,i.jsx)(t.a,{href:"./alert-subscribe/frontend-client",children:"our guide for integrating it"}),"!"]}),"\n",(0,i.jsx)(t.h3,{id:"additional-resources",children:"Additional resources"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Notifi ",(0,i.jsx)(t.a,{href:"https://notifi.network/blog",children:"Blog"})]}),"\n",(0,i.jsxs)(t.li,{children:["Notifi ",(0,i.jsx)(t.a,{href:"https://notifi.network/demos",children:"Demos"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://www.figma.com/proto/EDRHnzmXsLRrmM1VBc57Hw/Notifi-Slides?page-id=3859%3A1161&node-id=3859-1287&viewport=643%2C485%2C0.09&scaling=min-zoom&starting-point-node-id=3859%3A1287",children:"How To Guide"})," of our Community Manager and Admin Portal"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"get-help",children:"Get Help"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["We use Jira as a ticketing platform to track issues, questions, and requests at Notifi. If you have anything that you need from us, please create a ",(0,i.jsx)(t.strong,{children:"support ticket"})," using the link ",(0,i.jsx)(t.a,{href:"https://notifi.atlassian.net/servicedesk/customer/portals",children:"here"})]}),"\n",(0,i.jsxs)(t.li,{children:["Reach out to the key ",(0,i.jsx)(t.a,{href:"https://docs.google.com/document/d/1zVu-8iXdz1mOGievDutJX4Fs_7RXqe19LdyK4LqNmTA",children:"Notifi contacts"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(6540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);