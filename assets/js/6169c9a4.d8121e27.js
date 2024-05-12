"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4840],{9019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var o=n(4848),s=n(8453);const r={sidebar_position:4},i="Using External API's",c={id:"notifi-hosted-development/fetch-providers",title:"Using External API's",description:"Fetch APIs will be injected upon startup of your Notifi Hosted routine. You will have access to making API calls to your respective endpoints.",source:"@site/versioned_docs/version-1.1.0/notifi-hosted-development/fetch-providers.md",sourceDirName:"notifi-hosted-development",slug:"/notifi-hosted-development/fetch-providers",permalink:"/docs/1.1.0/notifi-hosted-development/fetch-providers",draft:!1,unlisted:!1,editUrl:"https://github.com/notifi-network/notifi-network.github.io/blob/main/versioned_docs/version-1.1.0/notifi-hosted-development/fetch-providers.md",tags:[],version:"1.1.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Using Persistant and Ephemeral Storage API's",permalink:"/docs/1.1.0/notifi-hosted-development/storage-providers"},next:{title:"Integrating Notifi React card",permalink:"/docs/1.1.0/alert-subscribe/react-card/"}},d={},a=[];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"using-external-apis",children:"Using External API's"}),"\n",(0,o.jsx)(t.p,{children:"Fetch APIs will be injected upon startup of your Notifi Hosted routine. You will have access to making API calls to your respective endpoints."}),"\n",(0,o.jsx)(t.p,{children:"Example as shown below:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:' const dataBody = {\n      query: yourQuery,\n      variables: {},\n    };\n\n    const response = await FetchUtils.post(fetchProxy, logger, {\n      url: {YOUR_URL},\n      headers: {},\n      body: dataBody,\n    });\n\n    if (response.statusCode !== 200) {\n      logger.error("Error in get cauldrons response.", {\n        response: response.response,\n        statusCode: response.statusCode,\n      });\n\n      throw new Error("Error in response");\n    }\n\n    const responseJson = JSON.parse(response.response);\n\n'})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsxs)(t.em,{children:["Note: For Authentication Secrets, utilize the ",(0,o.jsx)(t.a,{href:"http://localhost:3000/docs/next/notifi-hosted-development/storage-providers",children:"Persistant Storage API's"})," to store and retrieve secrets"]})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var o=n(6540);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);