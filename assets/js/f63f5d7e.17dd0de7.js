"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8331],{2788:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=t(4848),a=t(8453);const o={},r="Notifi Templates Variable Reference",s={id:"styling-your-notifications/variable-reference",title:"Notifi Templates Variable Reference",description:"The following variables are available when creating templated messages.",source:"@site/versioned_docs/version-2.0/styling-your-notifications/variable-reference.md",sourceDirName:"styling-your-notifications",slug:"/styling-your-notifications/variable-reference",permalink:"/docs/styling-your-notifications/variable-reference",draft:!1,unlisted:!1,editUrl:"https://github.com/notifi-network/notifi-network.github.io/blob/main/versioned_docs/version-2.0/styling-your-notifications/variable-reference.md",tags:[],version:"2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Notifi Templates Platform Reference",permalink:"/docs/styling-your-notifications/platform-reference"},next:{title:"Reporting and Statistics",permalink:"/docs/category/reporting-and-statistics"}},l={},c=[{value:"<code>eventData</code>",id:"eventdata",level:2},{value:"<code>alertData</code>",id:"alertdata",level:2},{value:"<code>alertData.threshold</code>",id:"alertdatathreshold",level:3},{value:"<code>alertData.thresholdDirection</code>",id:"alertdatathresholddirection",level:3},{value:"<code>notifiData</code>",id:"notifidata",level:2},{value:"<code>notifiData.tenantName</code>",id:"notifidatatenantname",level:3},{value:"<code>notifiData.sourceTypeId</code>",id:"notifidatasourcetypeid",level:3},{value:"<code>notifiData.alertId</code>",id:"notifidataalertid",level:3},{value:"<code>notifiData.comparisonValue</code>",id:"notifidatacomparisonvalue",level:3},{value:"<code>notifiData.eventTypeId</code>",id:"notifidataeventtypeid",level:3},{value:"<code>notifiData.blockchain</code>",id:"notifidatablockchain",level:3},{value:"<code>notifiData.pixelUrl</code>",id:"notifidatapixelurl",level:3},{value:"<code>unsubscribe_url</code>",id:"unsubscribe_url",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"notifi-templates-variable-reference",children:"Notifi Templates Variable Reference"}),"\n",(0,n.jsxs)(i.p,{children:["The following variables are available when ",(0,n.jsx)(i.a,{href:"/docs/styling-your-notifications/",children:"creating templated messages"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"eventdata",children:(0,n.jsx)(i.code,{children:"eventData"})}),"\n",(0,n.jsxs)(i.p,{children:["This object contains the variables passed in through ",(0,n.jsx)(i.code,{children:"variablesJson"})," in ",(0,n.jsx)(i.code,{children:"publishFusionMessage"}),"\nfor self-hosted topics, and the variables passed in through ",(0,n.jsx)(i.code,{children:"metadata"})," in events\nreturned by Fusion parsers."]}),"\n",(0,n.jsx)(i.h2,{id:"alertdata",children:(0,n.jsx)(i.code,{children:"alertData"})}),"\n",(0,n.jsx)(i.p,{children:"This object contains some extra information related to the alert, including\nthe results from running filters."}),"\n",(0,n.jsx)(i.h3,{id:"alertdatathreshold",children:(0,n.jsx)(i.code,{children:"alertData.threshold"})}),"\n",(0,n.jsx)(i.p,{children:"If you created a threshold filter when creating the notification topic\n(e.g. only notify me when my C-Ratio is below 50%), this property contains\nthat threshold."}),"\n",(0,n.jsx)(i.h3,{id:"alertdatathresholddirection",children:(0,n.jsx)(i.code,{children:"alertData.thresholdDirection"})}),"\n",(0,n.jsxs)(i.p,{children:["If you created a threshold filter when creating the notification topic\n(e.g. only notify me when my C-Ratio is below 50%), this property contains\nthe direction of that threshold, either ",(0,n.jsx)(i.code,{children:'"above"'})," or ",(0,n.jsx)(i.code,{children:'"below"'}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"notifidata",children:(0,n.jsx)(i.code,{children:"notifiData"})}),"\n",(0,n.jsx)(i.p,{children:"This object contains extra properties supplied with each alert."}),"\n",(0,n.jsx)(i.h3,{id:"notifidatatenantname",children:(0,n.jsx)(i.code,{children:"notifiData.tenantName"})}),"\n",(0,n.jsx)(i.p,{children:"The name of your Dapp account, given when the account was created."}),"\n",(0,n.jsx)(i.h3,{id:"notifidatasourcetypeid",children:(0,n.jsx)(i.code,{children:"notifiData.sourceTypeId"})}),"\n",(0,n.jsxs)(i.p,{children:["A unique ID given to the source of the message - for instance, all messages\nsent by the same parser will have the same ",(0,n.jsx)(i.code,{children:"sourceTypeId"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"notifidataalertid",children:(0,n.jsx)(i.code,{children:"notifiData.alertId"})}),"\n",(0,n.jsx)(i.p,{children:"A unique ID assigned to the alert."}),"\n",(0,n.jsx)(i.h3,{id:"notifidatacomparisonvalue",children:(0,n.jsx)(i.code,{children:"notifiData.comparisonValue"})}),"\n",(0,n.jsxs)(i.p,{children:['The "comparison value" for the alert, as set in the ',(0,n.jsx)(i.code,{children:"comparisonValue"})," property\nwhen returning the event from a parser. Users can filter incoming messages to ones\nwhere this comparison value is either above or below a given value."]}),"\n",(0,n.jsx)(i.h3,{id:"notifidataeventtypeid",children:(0,n.jsx)(i.code,{children:"notifiData.eventTypeId"})}),"\n",(0,n.jsx)(i.p,{children:'The "Event Type ID" corresponding to the notification topic.'}),"\n",(0,n.jsx)(i.h3,{id:"notifidatablockchain",children:(0,n.jsx)(i.code,{children:"notifiData.blockchain"})}),"\n",(0,n.jsxs)(i.p,{children:["The name of the blockchain the event was triggered on. Usually only applicable to\nparser events - self-hosted events will always report this as ",(0,n.jsx)(i.code,{children:"OFFCHAIN"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"notifidatapixelurl",children:(0,n.jsx)(i.code,{children:"notifiData.pixelUrl"})}),"\n",(0,n.jsx)(i.p,{children:"A URL leading to a tracking pixel that can be attached to an email, thus giving\ninsight as to when the email was opened."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-html",children:'<img src="{{notifiData.pixelUrl}}" alt="Tracking Pixel" width="1" height="1" border="0" style="display:none;">\n'})}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:["In accordance with our privacy policy,\nNotifi does ",(0,n.jsx)(i.strong,{children:"not"})," store IP addresses or any other identifying information reported\nby the tracking pixel. Accessing the tracking pixel link will only record that the email\nhas been opened."]})}),"\n",(0,n.jsx)(i.h2,{id:"unsubscribe_url",children:(0,n.jsx)(i.code,{children:"unsubscribe_url"})}),"\n",(0,n.jsx)(i.p,{children:"A URL allowing the recipient of a notification to unsubscribe from it."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-html",children:'<a style="text-size: 8pt;" href="{{unsubscribe_url}}">Unsubscribe</a>\n'})}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:["Users can also unsubscribe from notifications either through the ",(0,n.jsx)(i.a,{href:"https://notifi.network/login",children:"Notifi Hub"}),"\nor through the ",(0,n.jsx)(i.a,{href:"../alert-subscribe/react-card/",children:"React card"})," or other UI. The unsubscribe URL\nis useful to allow a user to do this without logging in."]})})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>s});var n=t(6540);const a={},o=n.createContext(a);function r(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);