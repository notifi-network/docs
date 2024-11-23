"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5697],{4184:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var t=i(4848),n=i(8453);const l={},s="Alert Filters",o={id:"alert-trigger/alert-filters/index",title:"Alert Filters",description:"Additional filters on topics require the published event, either from your service via publishFusionMessage or Notifi Monitored, to supply the appropriate filter values to compare against. Each published event must contain a JSON section for 'filterVariables' that matches the following structure",source:"@site/versioned_docs/version-Release/alert-trigger/alert-filters/index.md",sourceDirName:"alert-trigger/alert-filters",slug:"/alert-trigger/alert-filters/",permalink:"/docs/alert-trigger/alert-filters/",draft:!1,unlisted:!1,editUrl:"https://github.com/notifi-network/notifi-network.github.io/blob/main/versioned_docs/version-Release/alert-trigger/alert-filters/index.md",tags:[],version:"Release",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Admin Portal & Community Manager",permalink:"/docs/alert-trigger/admin-portal/"},next:{title:"Dataplane API",permalink:"/docs/alert-trigger/dataplane-api/"}},a={},h=[{value:"Notifi Provided Filters",id:"notifi-provided-filters",level:2},{value:"aboveThreshold",id:"abovethreshold",level:3},{value:"belowThreshold",id:"belowthreshold",level:3},{value:"aboveOrBelowThreshold",id:"aboveorbelowthreshold",level:3},{value:"frequency",id:"frequency",level:3},{value:"subscription",id:"subscription",level:3}];function d(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"alert-filters",children:"Alert Filters"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/create-topics/api-triggered#optional-filters",children:"Additional filters"})," on topics require the published event, either from your service via ",(0,t.jsx)(r.a,{href:"/docs/alert-trigger/node-client/#publishfusionmessage",children:"publishFusionMessage"})," or ",(0,t.jsx)(r.a,{href:"/docs/create-topics/notifi-monitored",children:"Notifi Monitored"}),", to supply the appropriate filter values to compare against. Each published event must contain a JSON section for 'filterVariables' that matches the following structure"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-JSON",children:'"filterVariables": {\n    "version": 1,\n    "<filter-name>":{"required-variable-for-filter-0":"some-value", "required-variable-for-filter-1":"some-value1", ...}\n}\n'})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"NOTE: When configuring your filters, make note of the type of values you're expecting to filter against. If you select integer values, but then send a decimal value in your event, it will cause an error and the event will be dropped."})}),"\n",(0,t.jsx)(r.h2,{id:"notifi-provided-filters",children:"Notifi Provided Filters"}),"\n",(0,t.jsx)(r.p,{children:"This is a list of the filters by filter-name and their respective variables."}),"\n",(0,t.jsx)(r.h3,{id:"abovethreshold",children:"aboveThreshold"}),"\n",(0,t.jsx)(r.p,{children:"This filter type will only allow the alert to trigger if the comparisonValue is above the user configured threshold."}),"\n",(0,t.jsx)(r.p,{children:"Required variables:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"thresholdComparisonValue (float/long)"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Example"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\n    "aboveThreshold":{"thresholdComparisonValue": -3}\n}\n'})}),"\n",(0,t.jsx)(r.h3,{id:"belowthreshold",children:"belowThreshold"}),"\n",(0,t.jsx)(r.p,{children:"This filter type will only allow the alert to trigger if the comparisonValue is above the user configured threshold."}),"\n",(0,t.jsx)(r.p,{children:"Required variables:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"thresholdComparisonValue (float/long)"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Example"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\n    "belowThreshold":{"thresholdComparisonValue": 2}\n}\n'})}),"\n",(0,t.jsx)(r.h3,{id:"aboveorbelowthreshold",children:"aboveOrBelowThreshold"}),"\n",(0,t.jsx)(r.p,{children:"This filter type will only allow the alert to trigger if the thresholdComparisonValue is above or below the user configured threshold. The direction of the comparison is specified by the user on the frontend, and stored in the alert configuration."}),"\n",(0,t.jsx)(r.p,{children:"Required variables:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"thresholdComparisonValue (float/long)"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Example"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\n    "aboveOrBelowThreshold":{"thresholdComparisonValue":"0.001483"}\n}\n'})}),"\n",(0,t.jsx)(r.h3,{id:"frequency",children:"frequency"}),"\n",(0,t.jsx)(r.p,{children:"This filter type will only allow the alert to trigger if the alert has not executed within the time threshold (up to 24 hours)\nThis is the only filter where there are no required variables, but only optional."}),"\n",(0,t.jsxs)(r.p,{children:["The developer has a choice to configure in one of two ways:",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"No variables are provided. The behavior of the alert will be to drops future alert attempts until the set time has elapsed. Useful in cases where you want to provide account status updates but don't want to spam the user."}),"\n",(0,t.jsxs)(r.li,{children:["A debounce key is provided. This key will act as a unique key for this specific user alert for the duration of the configured period. This is useful in the case where a user has created an alert for 'top market movers', and don't want to get spammed by the same market mover repeatedly, but also want to know what the other market moves are. ",(0,t.jsx)(r.strong,{children:"This key can be up to 16 ASCII characters long."})]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"Optional"})," variables:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"debounceKey (max 16 ASCII chars)"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Example"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\n    "frequency":{"debounceKey":"sol/usdc"}\n}\n'})}),"\n",(0,t.jsx)(r.h3,{id:"subscription",children:"subscription"}),"\n",(0,t.jsx)(r.p,{children:"If publishing with publishFusionMessage, and you have configured your topic with a subscription value such as connected wallet (non-secure), then you must provide a subscription value that matches what the user provided on the frontend."}),"\n",(0,t.jsx)(r.p,{children:"Required variables:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"value (string)"}),"\n",(0,t.jsx)(r.li,{children:"isCaseSensitive (bool)"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Example"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\n    "subscription": { "value": "0x4444", "isCaseSensitive": false },\n}\n'})})]})}function c(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,r,i)=>{i.d(r,{R:()=>s,x:()=>o});var t=i(6540);const n={},l=t.createContext(n);function s(e){const r=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(l.Provider,{value:r},e.children)}}}]);