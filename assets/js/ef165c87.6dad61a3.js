"use strict";(self.webpackChunkkmm_icerock_dev=self.webpackChunkkmm_icerock_dev||[]).push([[8206],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return s}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),p=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),f=p(r),s=a,k=f["".concat(u,".").concat(s)]||f[s]||m[s]||o;return r?n.createElement(k,i(i({ref:e},c),{},{components:r})):n.createElement(k,i({ref:e},c))}));function s(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},83039:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],l={sidebar_position:1},u="\u0417\u043d\u0430\u043a\u043e\u043c\u0441\u0442\u0432\u043e \u0441 KMM",p={unversionedId:"getting-started",id:"getting-started",title:"\u0417\u043d\u0430\u043a\u043e\u043c\u0441\u0442\u0432\u043e \u0441 KMM",description:"\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0441\u044f \u0441 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430\u043c\u0438 \u043f\u0440\u043e Kotlin Multiplatform:",source:"@site/onboarding/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/kmm.icerock.dev/onboarding/getting-started",draft:!1,editUrl:"https://github.com/icerockdev/kmm.icerock.dev/tree/docusaurus/onboarding/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u041e \u0440\u0430\u0437\u0434\u0435\u043b\u0435",permalink:"/kmm.icerock.dev/onboarding/intro"},next:{title:"\u0417\u0430\u043f\u0443\u0441\u043a \u043f\u0440\u043e\u0435\u043a\u0442\u0430",permalink:"/kmm.icerock.dev/onboarding/project-setup"}},c={},m=[],f={toc:m};function s(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u0437\u043d\u0430\u043a\u043e\u043c\u0441\u0442\u0432\u043e-\u0441-kmm"},"\u0417\u043d\u0430\u043a\u043e\u043c\u0441\u0442\u0432\u043e \u0441 KMM"),(0,o.kt)("p",null,"\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0441\u044f \u0441 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430\u043c\u0438 \u043f\u0440\u043e Kotlin Multiplatform:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kotlinlang.org/lp/mobile/"},"\u041e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u043b\u0435\u043d\u0434\u0438\u043d\u0433 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=mdN6P6RI__k&list=PLlFc5cFwUnmy_oVc9YQzjasSNoAk4hk_C"},"\u0412\u0438\u0434\u0435\u043e \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b \u043e\u0442 JetBrains"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c \u043d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0435 \u043d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e - \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0430 \u0431\u0443\u0434\u0435\u0442 \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0448\u0430\u0433\u0430\u0445"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/multiplatform.html"},"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f - Multiplatform programming"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u0434\u0430\u0441\u0442 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043e \u0442\u043e\u043c, \u0447\u0442\u043e \u0442\u0430\u043a\u043e\u0435 Kotlin Multiplatform \u0432 \u0446\u0435\u043b\u043e\u043c (\u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/native-overview.html"},"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f - Kotlin Native"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u0434\u0430\u0441\u0442 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043e \u0442\u043e\u043c, \u0447\u0442\u043e \u0442\u0430\u043a\u043e\u0435 Kotlin/Native"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/mpp-share-on-platforms.html"},"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f - Share code on platforms"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u0434\u0430\u0441\u0442 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043e \u0442\u043e\u043c, \u043a\u0430\u043a \u0443\u0441\u0442\u0440\u043e\u0435\u043d\u043e \u043f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u0434\u0430 \u043c\u0435\u0436\u0434\u0443 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430\u043c\u0438"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=w546bAHoh3c"},"\u0412\u0438\u0434\u0435\u043e - \u041e\u043f\u044b\u0442 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 Kotlin Multiplatform. \u0412\u0437\u0433\u043b\u044f\u0434 \u0441\u043e \u0441\u0442\u043e\u0440\u043e\u043d\u044b \u0431\u0438\u0437\u043d\u0435\u0441\u0430")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=h9ioWnSlUJc"},"\u0412\u0438\u0434\u0435\u043e - \u041e\u043f\u044b\u0442 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 Kotlin Multiplatform. \u0412\u0437\u0433\u043b\u044f\u0434 \u0441\u043e \u0441\u0442\u043e\u0440\u043e\u043d\u044b iOS-\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442\u0430")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=kO8RDq6OoV4"},"\u0412\u0438\u0434\u0435\u043e - \u041c\u043e\u0431\u0438\u043b\u044c\u043d\u0430\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043d\u0430 Kotlin MultiPlatform")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=jJWDlsETb3A"},"\u0412\u0438\u0434\u0435\u043e - Kotlin Multiplatform Mobile \u0432 production \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/fjzfz9y9yko"},"\u0412\u0438\u0434\u0435\u043e - \u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 Kotlin Multiplatform Mobile")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../learning/kotlin-multiplatform/how-to-start"},"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b \u0438\u0437 \u0431\u0430\u0437\u044b \u0437\u043d\u0430\u043d\u0438\u0439"))))}s.isMDXComponent=!0}}]);