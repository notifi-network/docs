"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[836],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var i=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=i.createContext({}),l=function(e){var t=i.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(o),f=n,h=p["".concat(d,".").concat(f)]||p[f]||u[f]||a;return o?i.createElement(h,r(r({ref:t},c),{},{components:o})):i.createElement(h,r({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,r=new Array(a);r[0]=f;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:n,r[1]=s;for(var l=2;l<a;l++)r[l]=o[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}f.displayName="MDXCreateElement"},3584:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=o(7462),n=(o(7294),o(3905));const a={sidebar_position:9999999},r="FAQ",s={unversionedId:"faq",id:"faq",title:"FAQ",description:"Integrations",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/next/faq",draft:!1,editUrl:"https://github.com/notifi-network/notifi-network.github.io/blob/main/docs/faq.md",tags:[],version:"current",sidebarPosition:9999999,frontMatter:{sidebar_position:9999999},sidebar:"tutorialSidebar",previous:{title:"Notifi for users",permalink:"/docs/next/for-users/"}},d={},l=[{value:"Integrations",id:"integrations",level:2},{value:"How do I add support for my dapp to Notifi?",id:"how-do-i-add-support-for-my-dapp-to-notifi",level:3},{value:"Can I send notifications from my on-chain program?",id:"can-i-send-notifications-from-my-on-chain-program",level:3},{value:"How do I set up a Telegram bot to send Telegram messages?",id:"tg-bot-setup",level:3},{value:"How do I set up a Discord bot to send messages on Discord?",id:"discord-bot-setup",level:3},{value:"Privacy",id:"privacy",level:2},{value:"How do I create a user account?",id:"how-do-i-create-a-user-account",level:3},{value:"How is my Personally Identifiable Information (PII), such as email, Telegram ID, Discord ID, and phone number, kept safe?",id:"how-is-my-personally-identifiable-information-pii-such-as-email-telegram-id-discord-id-and-phone-number-kept-safe",level:3},{value:"What PII and data does Notifi track?",id:"what-pii-and-data-does-notifi-track",level:3},{value:"How can I unsubscribe from notifications?",id:"how-can-i-unsubscribe-from-notifications",level:3},{value:"How can I remove my user data from Notifi in accordance with GDPR?",id:"how-can-i-remove-my-user-data-from-notifi-in-accordance-with-gdpr",level:3},{value:"DAOs",id:"daos",level:2},{value:"How do DAO notifications work?",id:"how-do-dao-notifications-work",level:3},{value:"How does Notifi ensure wallets are part of a DAO?",id:"how-does-notifi-ensure-wallets-are-part-of-a-dao",level:3},{value:"How are DAO proposals detected without modifying the dapp itself?",id:"how-are-dao-proposals-detected-without-modifying-the-dapp-itself",level:3}],c={toc:l},p="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"faq"},"FAQ"),(0,n.kt)("h2",{id:"integrations"},"Integrations"),(0,n.kt)("h3",{id:"how-do-i-add-support-for-my-dapp-to-notifi"},"How do I add support for my dapp to Notifi?"),(0,n.kt)("p",null,"You can start with our SDK today! We support dapps with their own backend\ninfrastructure that want to send messages to wallet owners, as well as directly\ninterpreting transactions through off-chain systems."),(0,n.kt)("p",null,"Soon, Notifi will maintain a public GitHub repository for all of the dapp\nintegrations watching on-chain transactions. Developers are encouraged to\ncreate pull requests with additions, and Notifi will manage the hosting."),(0,n.kt)("h3",{id:"can-i-send-notifications-from-my-on-chain-program"},"Can I send notifications from my on-chain program?"),(0,n.kt)("p",null,"Coming soon! We're in the process of allowing this, but would love to hear from you about your scenario.\nPlease contact us at ",(0,n.kt)("a",{parentName:"p",href:"mailto:integrations@notifi.network"},"integrations@notifi.network"),"."),(0,n.kt)("h3",{id:"tg-bot-setup"},"How do I set up a Telegram bot to send Telegram messages?"),(0,n.kt)("p",null,"Follow the steps ",(0,n.kt)("a",{parentName:"p",href:"alert-design/tg-bot"},"here"),"."),(0,n.kt)("h3",{id:"discord-bot-setup"},"How do I set up a Discord bot to send messages on Discord?"),(0,n.kt)("p",null,"Follow the steps ",(0,n.kt)("a",{parentName:"p",href:"alert-design/discord-bot"},"here"),"."),(0,n.kt)("h2",{id:"privacy"},"Privacy"),(0,n.kt)("h3",{id:"how-do-i-create-a-user-account"},"How do I create a user account?"),(0,n.kt)("p",null,"Your account is automatically created when you log in with your wallet and\nsigned message. This account is created within the space of the dapp you are\ncalling from."),(0,n.kt)("h3",{id:"how-is-my-personally-identifiable-information-pii-such-as-email-telegram-id-discord-id-and-phone-number-kept-safe"},"How is my Personally Identifiable Information (PII), such as email, Telegram ID, Discord ID, and phone number, kept safe?"),(0,n.kt)("p",null,"Notifi requires users to sign a message that proves they own the wallet address\nthey are connecting with. Once verification is complete, communication is done\nwith a security token that only belongs to that user. PII is stored in an\nencrypted database in the user's account. Each user is isolated from others,\nand each dapp that the user connects to will have its own separate account with\nno information sharing."),(0,n.kt)("h3",{id:"what-pii-and-data-does-notifi-track"},"What PII and data does Notifi track?"),(0,n.kt)("p",null,"Notifi stores user provided wallet addresses, destinations (i.e., email, SMS,\nTelegram, Discord), and notification preferences. Notifi does not track IP addresses.\nSubscription preferences and contact details for one dapp will be used\nexclusively for notifications for that dapp. Preferences and contact details\nwill never be shared with any other dapp or 3rd party, unless explicitly\nstated."),(0,n.kt)("h3",{id:"how-can-i-unsubscribe-from-notifications"},"How can I unsubscribe from notifications?"),(0,n.kt)("p",null,"You can unsubscribe to notifications by accessing the notification preferences\nscreen on the dapp you're subscribed to. Additionally, you can unsubscribe\ndirectly via the email, SMS (reply with STOP), Telegram bot, Discord bot, or any other\ndestination where you're receiving messages."),(0,n.kt)("h3",{id:"how-can-i-remove-my-user-data-from-notifi-in-accordance-with-gdpr"},"How can I remove my user data from Notifi in accordance with GDPR?"),(0,n.kt)("p",null,"Using the verified email address you used to subscribe to notifications, send\nan email to ",(0,n.kt)("a",{parentName:"p",href:"mailto:gdpr@notifi.network"},"gdpr@notifi.network")," requesting removal of your data. We will reply\nback via email when this has been completed. You can verify the removal by\nchecking your subscription preferences on the dapp, where you won\u2019t have any\nrecord of notification preferences. Here is a sample email request:"),(0,n.kt)("p",null,'Email Subject: Remove my data from Notifi for "dapp name"',(0,n.kt)("br",{parentName:"p"}),"\n",'Email Body: Remove my data from Notifi for "dapp name". ',"[Add any additional details as needed]"),(0,n.kt)("h2",{id:"daos"},"DAOs"),(0,n.kt)("h3",{id:"how-do-dao-notifications-work"},"How do DAO notifications work?"),(0,n.kt)("p",null,"Any DAO governance member can sign up for proposal notifications. The DAO\nclient page uses the Notifi SDK to provide Notifi with the DAO address, along\nwith the user's wallet address. Notifi will ensure the wallet address is a\ngovernance member, and sign up for the relevant notification channels\n(email/SMS/Telegram/Discord)."),(0,n.kt)("h3",{id:"how-does-notifi-ensure-wallets-are-part-of-a-dao"},"How does Notifi ensure wallets are part of a DAO?"),(0,n.kt)("p",null,"Notifi checks for governance tokens that belong to the user/DAO. Each DAO is\ndifferent, so Notifi will initially have select DAO platforms integrated."),(0,n.kt)("h3",{id:"how-are-dao-proposals-detected-without-modifying-the-dapp-itself"},"How are DAO proposals detected without modifying the dapp itself?"),(0,n.kt)("p",null,"Notifi subscribes to blockchain transactions and parses events and information\nthat are particular to DAOs. Upon detecting a relevant transaction, a\nnotification is sent to subscribed users."))}u.isMDXComponent=!0}}]);