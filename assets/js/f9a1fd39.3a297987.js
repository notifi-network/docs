"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[948],{3763:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=i(4848),o=i(8453);const r={sidebar_position:1},s="Integration steps",a={id:"integration-overview/integration-steps",title:"Integration steps",description:"There are three steps required to enable an end-to-end user experience in your dapp with Notifi.",source:"@site/versioned_docs/version-1.1.0/integration-overview/integration-steps.md",sourceDirName:"integration-overview",slug:"/integration-overview/integration-steps",permalink:"/docs/1.1.0/integration-overview/integration-steps",draft:!1,unlisted:!1,editUrl:"https://github.com/notifi-network/notifi-network.github.io/blob/main/versioned_docs/version-1.1.0/integration-overview/integration-steps.md",tags:[],version:"1.1.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Quickstart",permalink:"/docs/1.1.0/quickstart"},next:{title:"Alerts in Depth",permalink:"/docs/1.1.0/integration-overview/alerts-in-depth"}},c={},d=[{value:"Create topics that users can subscribe to in order to receive alerts for that topic",id:"create-topics-that-users-can-subscribe-to-in-order-to-receive-alerts-for-that-topic",level:3},{value:"Integrate UI components in your dapp for users to configure and subscribe to alerts",id:"integrate-ui-components-in-your-dapp-for-users-to-configure-and-subscribe-to-alerts",level:3},{value:"Users subscribe to relevant topics and receive notifications",id:"users-subscribe-to-relevant-topics-and-receive-notifications",level:3}];function l(e){const t={a:"a",admonition:"admonition",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"integration-steps",children:"Integration steps"}),"\n",(0,n.jsx)(t.p,{children:"There are three steps required to enable an end-to-end user experience in your dapp with Notifi.\nDepending on the depth of integration and use case, some of these are optional or can be vastly sped up by using existing packages provided by Notifi."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.h3,{id:"create-topics-that-users-can-subscribe-to-in-order-to-receive-alerts-for-that-topic",children:["Create ",(0,n.jsx)(t.a,{href:"/docs/1.1.0/integration-overview/alerts-in-depth#topic",children:"topics"})," that users can subscribe to in order to receive alerts for that topic"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The first step of a Notifi integration is to decide on the topics of notifications you want to send out. A topic is a category of notifications, usually with the same theme, that should be useful on their own and cater towards a specific user group or use case that the notifications should fulfill (e.g. announcements from the team, liquidation alerts, etc.)."}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.h3,{id:"integrate-ui-components-in-your-dapp-for-users-to-configure-and-subscribe-to-alerts",children:"Integrate UI components in your dapp for users to configure and subscribe to alerts"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The easiest and most common UI will be a form where users can enter their preferred targets (email, phone number, Telegram, and/or Discord) and subscribe to it.\nWe provide design recommendations in our ",(0,n.jsx)(t.a,{href:"https://www.figma.com/file/ieF0Ynuc3WI608RCt7wKSf/Notifi-Template?node-id=0%3A1&t=v8zeo6UovJAOb9vR-0",children:"Figma"}),", but there are no limitations on visual or interaction design."]}),"\n",(0,n.jsxs)(t.p,{children:["We provide a ready-to-use ",(0,n.jsx)(t.a,{href:"../alert-subscribe/react-card",children:"React Card"})," component for easy integration that covers most basic use cases, including standard forms.\nFor additional customization and other frontend stacks, you can build your own UI component and connect it to the Notifi SDK with the ",(0,n.jsx)(t.a,{href:"../alert-subscribe/frontend-client",children:"Frontend Client"}),". This includes custom elements like buttons or sliders to set thresholds, as long as the inputs can be passed in as parameters."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Feel free to reach out to ",(0,n.jsx)(t.a,{href:"mailto:integrations@notifi.network",children:"integrations@notifi.network"})," if your use case is not currently supported by the React Card. We are happy to consider expanding the React Card to support it!"]})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.h3,{id:"users-subscribe-to-relevant-topics-and-receive-notifications",children:"Users subscribe to relevant topics and receive notifications"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Notifi uses alerts to send manual and automated notifications to users. Users who subscribe to an alert will receive notifications from Notifi and will be able to view and manage their alerts in the ",(0,n.jsx)(t.a,{href:"/docs/1.1.0/for-users/",children:"Notifi Hub"})]}),"\n",(0,n.jsxs)(t.p,{children:["Alerts are created using a ",(0,n.jsx)(t.a,{href:"/docs/1.1.0/integration-overview/alerts-in-depth#topic",children:"topic"})," and depending on the type of topic be triggered either manually through the ",(0,n.jsx)(t.a,{href:"../alert-trigger/admin-portal/",children:"Community Manager"})," web UI, programmatically through an API call using the ",(0,n.jsx)(t.a,{href:"../alert-trigger/node-client/",children:"Node Client"}),", or completely automatic when using the Notifi monitored alerts."]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var n=i(6540);const o={},r=n.createContext(o);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);