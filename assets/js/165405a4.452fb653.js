"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1431],{1135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=n(4848),s=n(8453);const o={sidebar_position:4},r="Getting Started with Notifi Hosted Development",a={id:"getting-started-with-notifi-hosted",title:"Getting Started with Notifi Hosted Development",description:"This feature is currently in beta, and is not available to new users",source:"@site/versioned_docs/version-2.0/getting-started-with-notifi-hosted.md",sourceDirName:".",slug:"/getting-started-with-notifi-hosted",permalink:"/docs/getting-started-with-notifi-hosted",draft:!1,unlisted:!1,editUrl:"https://github.com/notifi-network/notifi-network.github.io/blob/main/versioned_docs/version-2.0/getting-started-with-notifi-hosted.md",tags:[],version:"2.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Getting Started with Self-Hosted Messaging",permalink:"/docs/getting-started-with-self-hosted"},next:{title:"Integration steps",permalink:"/docs/integration-overview/integration-steps"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating a Notifi-Hosted Topic",id:"creating-a-notifi-hosted-topic",level:2},{value:"Defining Templates",id:"defining-templates",level:2},{value:"Creating the Parser",id:"creating-the-parser",level:2},{value:"Editing And Submitting Your Parser",id:"editing-and-submitting-your-parser",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"More details on parser development",id:"more-details-on-parser-development",level:3},{value:"Style Your Notifications",id:"style-your-notifications",level:3},{value:"Adding Additional Destination Platforms",id:"adding-additional-destination-platforms",level:3},{value:"Additional resources",id:"additional-resources",level:3},{value:"Get Help",id:"get-help",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"getting-started-with-notifi-hosted-development",children:"Getting Started with Notifi Hosted Development"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["This feature is currently in beta, and is not available to new users\nby default. If you would like to use this feature, please\n",(0,i.jsx)(t.a,{href:"https://notifi.atlassian.net/servicedesk/customer/portals",children:"reach out to Notifi"}),"\nand ask for it to be enabled for your Dapp account."]})}),"\n",(0,i.jsx)(t.p,{children:"In this third Getting Started guide, we will walk through the steps of\ncreating a topic generated from code that Notifi runs automatically\nto monitor on or off-chain activity."}),"\n",(0,i.jsxs)(t.p,{children:["This guide is intended as a follow-up to the first\n",(0,i.jsx)(t.a,{href:"./getting-started",children:"Getting Started"})," guide, which walks you through the\nprocess of creating a Notifi account and subscription card, and\nthe ",(0,i.jsx)(t.a,{href:"./getting-started-with-self-hosted",children:"Getting Started With Self-Hosted Messaging"}),"\nguide, which walks you through the process of creating a topic\nthat is triggered by code running on your own servers. It is highly\nrecommended that you follow that startup guide first."]}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If on Windows, set up ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/install",children:"Windows Subsystem for Linux"}),".\nThis is required for both Docker and for setting up the parser development environment,\nwhich is instantiated using a ",(0,i.jsx)(t.a,{href:"https://www.gnu.org/software/bash/",children:"Bash"})," script.\n(The CLI can be used directly on a macOS or Linux terminal)."]}),"\n",(0,i.jsxs)(t.li,{children:["Install ",(0,i.jsx)(t.a,{href:"https://www.docker.com/",children:"Docker"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"creating-a-notifi-hosted-topic",children:"Creating a Notifi-Hosted Topic"}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.strong,{children:"Alert Manager"})," page on Admin Portal, click ",(0,i.jsx)(t.strong,{children:"Create Topic"}),"\n(or ",(0,i.jsx)(t.strong,{children:"+ Topic"})," if you already have an existing topic), then click\n",(0,i.jsx)(t.strong,{children:"Have Notifi monitor on or off-chain activity to send alerts"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:['If this button says "Coming soon" instead of "Continue", then Notifi-hosted development\nis not enabled for your account. Please\n',(0,i.jsx)(t.a,{href:"https://notifi.atlassian.net/servicedesk/customer/portals",children:"reach out to Notifi"}),"."]})}),"\n",(0,i.jsxs)(t.p,{children:["In the dialog box that appears, enter a name for your topic, then click ",(0,i.jsx)(t.strong,{children:"Next"}),".\n(We will keep the defaults for the other settings, just as we did for self-hosted topics)."]}),"\n",(0,i.jsx)(t.p,{children:"On the second page, we can choose the parameters for when our parser code will run.\nWe can either have the code trigger on an event on a specific chain, or at a given\ntime interval. For this guide, we will choose the latter."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:['Under "Is this alert on or off chain", choose ',(0,i.jsx)(t.strong,{children:"Off-chain"})]}),"\n",(0,i.jsxs)(t.li,{children:["In the ",(0,i.jsx)(t.strong,{children:"Name Parser"})," text box, enter a name for your parser"]}),"\n",(0,i.jsx)(t.li,{children:'Under "How often would you like your parser to run?", choose\na frequency of 5 minutes.'}),"\n",(0,i.jsxs)(t.li,{children:["Click ",(0,i.jsx)(t.strong,{children:"Save Topic"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"defining-templates",children:"Defining Templates"}),"\n",(0,i.jsx)(t.p,{children:"As with self-hosted topics, you will need to define templates. We will define some\nbasic templates for our Notifi-hosted parser:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["On the Alert Manager page, go to your newly created topic and click ",(0,i.jsx)(t.strong,{children:"Define Templates"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["In the dialog that appears, you'll be offered some text boxes for defining templates\nfor the subject line and content for your Alert History messages.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'Select one of the available icons in the "Select Icon" dropdown'}),"\n",(0,i.jsxs)(t.li,{children:["In the ",(0,i.jsx)(t.strong,{children:"Subject"})," text box, enter ",(0,i.jsx)(t.code,{children:"{{eventdata.subject}}"})]}),"\n",(0,i.jsxs)(t.li,{children:["In the ",(0,i.jsx)(t.strong,{children:"HTML Content"})," text box, enter ",(0,i.jsx)(t.code,{children:"<span>{{eventdata.message}}</span>"})]}),"\n",(0,i.jsxs)(t.li,{children:["Click ",(0,i.jsx)(t.strong,{children:"Save"}),". You'll get a dialog box saying that the template has been uploaded."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Click the ",(0,i.jsx)(t.strong,{children:"Email"})," button on the left. This will switch your view to editing\nemail templates.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["In the ",(0,i.jsx)(t.strong,{children:"Subject"})," text box, enter ",(0,i.jsx)(t.code,{children:"{{eventdata.subject}}"})]}),"\n",(0,i.jsxs)(t.li,{children:["In the ",(0,i.jsx)(t.strong,{children:"Custom HTML"})," text box, enter ",(0,i.jsx)(t.code,{children:"<p>{{eventdata.message}}</p>"})]}),"\n",(0,i.jsxs)(t.li,{children:["Click ",(0,i.jsx)(t.strong,{children:"Save"}),". You'll get a dialog box saying that the template has been uploaded."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"Click the circular X button on the top right to return to Alert Manager."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"creating-the-parser",children:"Creating the Parser"}),"\n",(0,i.jsx)(t.p,{children:"Now that you have your templates, it's time to create the parser!"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["On the Alert Manager page, go to your topic and click ",(0,i.jsx)(t.strong,{children:"Edit Parser"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"In the dialog box that appears, copy the command shown. It should look something like this:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'FUSION_SOURCE_ID="024ea..." NOTIFI_AUTH_TOKEN="eyJhb..." /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/notifi-network/notifi-parser-sdk/main/start.sh)"\n'})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsx)(t.li,{children:"Paste this command into your terminal (if on Windows, use your WSL terminal).\nThis script will set up the Notifi parser development environment, create a directory\nfor your parser, and start a shell in that directory with access to the parser CLI."}),"\n",(0,i.jsxs)(t.li,{children:["Open the parser source in your IDE (e.g. ",(0,i.jsx)(t.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"}),").\nThe parser is stored in ",(0,i.jsx)(t.code,{children:"$HOME/.notifi/fusion-development/fusion-sources/$PARSER_NAME"}),",\nwhere ",(0,i.jsx)(t.code,{children:"$HOME"})," is your home directory and ",(0,i.jsx)(t.code,{children:"$PARSER_NAME"})," is the name you gave to your parser\nearlier."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"editing-and-submitting-your-parser",children:"Editing And Submitting Your Parser"}),"\n",(0,i.jsxs)(t.p,{children:["For our actual parser code, we're going to write something simple that displays the current time.\nReplace the code in ",(0,i.jsx)(t.code,{children:"src/parser.ts"})," with the following:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'import { Offchain, CommonHost, BlockchainType } from "@notifi-network/fusion-types";\nconst eventID = "07ca3ca8e4d745aab8c966a21bb390d5";\n\nconst parse: Offchain.Parser["parse"] = async (\n  args,\n  rpc,\n  storage,\n  logger,\n  subscriptions\n) => {\n  const now = new Date();\n  const timeString = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;\n  const event: CommonHost.Event = {\n    eventTypeId: eventID.toLowerCase(),\n    blockchain: BlockchainType.BLOCKCHAIN_TYPE_OFF_CHAIN,\n    metadata: {\n      subject: "Test subject",\n      message: "The current time is " + timeString\n    },\n    comparisonValue: "*",\n    changeSignature: now.getTime().toString()\n  }\n  return [ event ];\n};\n\nexport { parse };\n'})}),"\n",(0,i.jsx)(t.p,{children:"Back in the CLI for the Notifi parser environment, type"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"$ fusion parser upload\n"})}),"\n",(0,i.jsx)(t.p,{children:"to build and upload your parser source to Notifi!"}),"\n",(0,i.jsxs)(t.p,{children:["Then, go back to Alert Manager in Admin Portal, click your topic,\nand look for the ",(0,i.jsx)(t.strong,{children:"Parser"})," card. Click the ",(0,i.jsx)(t.strong,{children:"Active"})," button, and enter\na number in the dialog box that appears (this is normally the block number\nyou want to start from, but since we're writing an off-chain parser, this\ncan be any number)."]}),"\n",(0,i.jsx)(t.p,{children:"Wait a few minutes, and you should start seeing emails come in telling you what\ntime it is!"}),"\n",(0,i.jsxs)(t.p,{children:["To deactivate the parser, either click the ",(0,i.jsx)(t.strong,{children:"Inactive"})," button in the\nParser card, or enter"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"$ fusion parser deactivate\n"})}),"\n",(0,i.jsx)(t.p,{children:"in the Parser CLI."}),"\n",(0,i.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsx)(t.h3,{id:"more-details-on-parser-development",children:"More details on parser development"}),"\n",(0,i.jsxs)(t.p,{children:["Notifi hosted parsers can cover other, more complex cases, such as covering events\non a specific chain, and also have access to additional APIs for blockchain access,\nstorage, and Internet access. For more information, check out our\n",(0,i.jsx)(t.a,{href:"./notifi-hosted-development",children:"Notifi Hosted Development"})," guide!"]}),"\n",(0,i.jsx)(t.h3,{id:"style-your-notifications",children:"Style Your Notifications"}),"\n",(0,i.jsxs)(t.p,{children:["We created very basic templates for our messages, but Notifi's template system is\nalso capable of more advanced templates with additional and nested variables. Check\nout our ",(0,i.jsx)(t.a,{href:"./styling-your-notifications/",children:"template guide"})," for more information!"]}),"\n",(0,i.jsx)(t.h3,{id:"adding-additional-destination-platforms",children:"Adding Additional Destination Platforms"}),"\n",(0,i.jsx)(t.p,{children:"Notifi notifications can be delivered through email, Telegram, Discord, Slack,\nand more. A few of these platforms require you to supply a bot for Notifi to use.\nIt is also possible to send email via your own custom domain:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"./target-setup/tg-bot",children:"Set up a Telegram bot"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"./target-setup/discord-bot",children:"Set up a Discord bot"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"./target-setup/slack-integration",children:"Set up a Slack integration"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"./target-setup/email-domain",children:"Set up a custom email domain"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"additional-resources",children:"Additional resources"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Notifi ",(0,i.jsx)(t.a,{href:"https://notifi.network/blog",children:"Blog"})]}),"\n",(0,i.jsxs)(t.li,{children:["Notifi ",(0,i.jsx)(t.a,{href:"https://notifi.network/demos",children:"Demos"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://www.figma.com/proto/EDRHnzmXsLRrmM1VBc57Hw/Notifi-Slides?page-id=3859%3A1161&node-id=3859-1287&viewport=643%2C485%2C0.09&scaling=min-zoom&starting-point-node-id=3859%3A1287",children:"How To Guide"})," of our Community Manager and Admin Portal"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"get-help",children:"Get Help"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["We use Jira as a ticketing platform to track issues, questions, and requests at Notifi. If you have anything that you need from us, please create a ",(0,i.jsx)(t.strong,{children:"support ticket"})," using the link ",(0,i.jsx)(t.a,{href:"https://notifi.atlassian.net/servicedesk/customer/portals",children:"here"})]}),"\n",(0,i.jsxs)(t.li,{children:["Reach out to the key ",(0,i.jsx)(t.a,{href:"https://docs.google.com/document/d/1zVu-8iXdz1mOGievDutJX4Fs_7RXqe19LdyK4LqNmTA",children:"Notifi contacts"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(6540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);