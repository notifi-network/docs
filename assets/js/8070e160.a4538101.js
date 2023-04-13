"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},i="Quickstart",s={unversionedId:"quickstart",id:"quickstart",title:"Quickstart",description:"The easiest way to get started with Notifi is to use the React card. This is a",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/docs/quickstart",draft:!1,editUrl:"https://github.com/notifi-network/docs/docs/quickstart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Lifecycle of an alert",permalink:"/docs/alert-lifecycle"}},l={},p=[],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quickstart"},"Quickstart"),(0,a.kt)("p",null,"The easiest way to get started with Notifi is to use the React card. This is a\ndrop-in component that makes it easy to send notifications."),(0,a.kt)("p",null,"If you don\u2019t have Node.js installed, install it from\n",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en"},"here"),". Then download the SDK by cloning\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/notifi-network/notifi-sdk-ts"},"this repository"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/notifi-network/notifi-sdk-ts\n")),(0,a.kt)("p",null,"You can also download a zip file of the code at\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/notifi-network/notifi-sdk-ts/archive/refs/heads/main.zip"},"this link"),"."),(0,a.kt)("p",null,"Run the following commands in the folder to install the relevant dependencies\nand build the SDK."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install npx lerna run build\n")),(0,a.kt)("p",null,"Now, run the ",(0,a.kt)("inlineCode",{parentName:"p"},"notifi-react-example")," with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npx lerna --scope=@notifi-network/notifi-react-example run start\n")),(0,a.kt)("p",null,"Once this finishes, you should be able to see sample cards in your browser if\nyou navigate to ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000/"),". Clicking\n",(0,a.kt)("strong",{parentName:"p"},"Edit")," on the card will let you update your email, phone number, and Telegram\nid. After updating the fields, you will need to verify that your contact\ninformation is correct by clicking the link sent to you."),(0,a.kt)("p",null,"Log into the ",(0,a.kt)("a",{parentName:"p",href:"https://admin.dev.notifi.network/cards"},"Admin console"),". Under the\n",(0,a.kt)("strong",{parentName:"p"},"Card Management")," section, create a Config and note the Config ID, which will\nbe needed later.  Also, note the DappID which can be found in the ",(0,a.kt)("strong",{parentName:"p"},"App\nSettings")," ",(0,a.kt)("a",{parentName:"p",href:"https://admin.dev.notifi.network/settings"},"page"),"."),(0,a.kt)("p",null,"In the file ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/notifi-react-example/src/NotifiCard/DemoPreviewCard.tsx"),",\nupdate the following lines by placing the the DappID in the ",(0,a.kt)("strong",{parentName:"p"},"dappAddress"),"\nfield and the Config ID in the ",(0,a.kt)("strong",{parentName:"p"},"cardId")," field."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'dappAddress="" <NotifiSubscriptionCard darkMode cardId="" />\n')),(0,a.kt)("p",null,"In the Admin console, add a new topic with Type ",(0,a.kt)("strong",{parentName:"p"},"Broadcast"),". The Broadcast Id\nmust start with the DappID then two underscores. Since the DappID used is\n\u201cwefwefwefef\u201d, the Broadcast Id must start with \u201cwefwefef__\u201d."),(0,a.kt)("p",null,"After this is done, restart the server with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npx lerna --scope=@notifi-network/notifi-react-example run start\n")),(0,a.kt)("p",null,"Ensure the Broadcast Id that you created is enabled in the card and turned on."),(0,a.kt)("p",null,"Finally, go back to the Admin console under the ",(0,a.kt)("strong",{parentName:"p"},"Send Test Messages")," screen.\nAdd the same Broadcast Id that you added earlier, a subject, and a body, then\nclick ",(0,a.kt)("strong",{parentName:"p"},"Send Message"),". You should see now see \u201cMessage sent successfully!\u201d"))}u.isMDXComponent=!0}}]);