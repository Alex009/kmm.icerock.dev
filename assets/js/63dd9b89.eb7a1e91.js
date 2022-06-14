"use strict";(self.webpackChunkkmm_icerock_dev=self.webpackChunkkmm_icerock_dev||[]).push([[2496],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),s=a,d=m["".concat(p,".").concat(s)]||m[s]||k[s]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69079:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return k}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=["components"],o={sidebar_position:9},p="\u041b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043e\u0448\u0438\u0431\u043e\u043a",c={unversionedId:"icerock-basics/logging-and-errors",id:"icerock-basics/logging-and-errors",title:"\u041b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043e\u0448\u0438\u0431\u043e\u043a",description:"\u041b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",source:"@site/university/4-icerock-basics/logging-and-errors.md",sourceDirName:"4-icerock-basics",slug:"/icerock-basics/logging-and-errors",permalink:"/kmm.icerock.dev/university/icerock-basics/logging-and-errors",draft:!1,editUrl:"https://github.com/icerockdev/kmm.icerock.dev/tree/docusaurus/university/4-icerock-basics/logging-and-errors.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"\u0412\u043d\u0435\u0434\u0440\u0435\u043d\u0438\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439",permalink:"/kmm.icerock.dev/university/icerock-basics/di"},next:{title:"Android \u2248 iOS",permalink:"/kmm.icerock.dev/university/icerock-basics/android-just-like-ios"}},u={},k=[{value:"\u041b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043e\u0448\u0438\u0431\u043e\u043a \u0432 \u043e\u0431\u0449\u0435\u043c \u043a\u043e\u0434\u0435",id:"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430-\u043e\u0448\u0438\u0431\u043e\u043a-\u0432-\u043e\u0431\u0449\u0435\u043c-\u043a\u043e\u0434\u0435",level:2},{value:"\u041f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435",id:"\u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435-\u0437\u0430\u0434\u0430\u043d\u0438\u0435",level:2}],m={toc:k};function s(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u0438-\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430-\u043e\u0448\u0438\u0431\u043e\u043a"},"\u041b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043e\u0448\u0438\u0431\u043e\u043a"),(0,i.kt)("h2",{id:"\u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"},"\u041b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"),(0,i.kt)("p",null,"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044e, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043c\u044b \u0431\u044b \u043d\u0435 \u0437\u0430\u0431\u043e\u0442\u0438\u043b\u0438\u0441\u044c \u043e \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u043d\u0430 \u043f\u0440\u043e\u0442\u044f\u0436\u0435\u043d\u0438\u0438 \u0432\u0441\u0435\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0430\u0434 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u043c. \u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0435\u0433\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043b\u0438, \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043b\u0438 \u0438 \u043e\u0442\u0434\u0430\u043b\u0438 \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u0443.\n\u0421\u043f\u0443\u0441\u0442\u044f \u043a\u0430\u043a\u043e\u0435-\u0442\u043e \u0432\u0440\u0435\u043c\u044f, \u043a\u0430\u043a \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c \u043d\u0430\u0447\u0430\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u044e\u0437\u0435\u0440\u044b, \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0442 \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u0430, \u0447\u0442\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u0436\u0430\u043b\u0443\u044e\u0442\u0441\u044f \u043d\u0430 \u0442\u043e, \u0447\u0442\u043e \u0443 \u043d\u0438\u0445 \u0431\u0435\u0437 \u043a\u0430\u043a\u043e\u0439-\u043b\u0438\u0431\u043e \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043a\u0440\u0430\u0448\u0438\u0442\u0441\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435."),(0,i.kt)("p",null,"\u041c\u044b \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u043c \u0438\u0441\u043a\u0430\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0438 \u0438 \u043f\u0440\u0438\u0447\u0438\u043d\u044b \u043a\u0440\u0430\u0448\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u0412\u0441\u0435, \u0447\u0442\u043e \u043d\u0430\u043c \u043e \u043d\u0438\u0445 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e - \u0447\u0442\u043e \u043e\u043d\u0438 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u044f\u0442 \u043d\u0430 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u044d\u043a\u0440\u0430\u043d\u0430\u0445 \u0431\u0435\u0437 \u043a\u0430\u043a\u043e\u0439-\u043b\u0438\u0431\u043e \u0441\u0438\u0441\u0442\u0435\u043c\u044b.",(0,i.kt)("br",{parentName:"p"}),"\n","\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u043b\u0438 \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u043e\u0448\u0438\u0431\u043a\u0438 - \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c. \u041f\u0440\u043e\u0432\u0435\u0440\u0438\u043b\u0438 \u043a\u043e\u0434 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043d\u044b\u0445 \u044d\u043a\u0440\u0430\u043d\u043e\u0432 - \u0442\u043e\u0436\u0435 \u0432\u0440\u043e\u0434\u0435 \u0431\u044b \u0432\u0441\u0435 \u0432 \u043f\u043e\u0440\u044f\u0434\u043a\u0435, \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043d\u044b\u0435 \u043c\u0435\u0441\u0442\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u044b.",(0,i.kt)("br",{parentName:"p"}),"\n","\u041e\u0441\u0442\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 - \u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0438, \u0447\u0442\u043e\u0431\u044b \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0432 \u043a\u0430\u043a\u043e\u043c \u043c\u0435\u0441\u0442\u0435 \u0438 \u043f\u043e \u043a\u0430\u043a\u043e\u0439 \u043f\u0440\u0438\u0447\u0438\u043d\u0435 \u043e\u043d\u0438 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u044f\u0442. \u0412\u0441\u0435\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 \u043f\u044b\u0442\u0430\u0435\u043c\u0441\u044f \u0434\u043e\u0431\u0438\u0442\u044c\u0441\u044f \u043a\u0440\u0435\u0448\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u043d\u043e \u0443 \u043d\u0430\u0441 \u0432\u0441\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442, \u043d\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u043a\u0440\u0435\u0448\u0430 \u0437\u0430 \u0446\u0435\u043b\u044b\u0439 \u0434\u0435\u043d\u044c.\n\u041d\u0430\u043a\u043e\u043d\u0435\u0446, \u0441\u043f\u0443\u0441\u0442\u044f \u0435\u0449\u0435 N \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043a\u043e\u043c\u0443-\u043d\u0438\u0431\u0443\u0434\u044c \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0441\u0442\u0438\u0447\u044c \u043a\u0440\u0435\u0448\u0430, \u0438 \u0438\u0441\u043f\u0440\u0430\u0432\u0438\u043b\u0438 \u0441\u0438\u043b\u0430\u043c\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430 \u0437\u0430 30 \u043c\u0438\u043d\u0443\u0442.  "),(0,i.kt)("p",null,"\u0421\u043e\u0433\u043b\u0430\u0441\u0438\u0442\u0435\u0441\u044c - \u0431\u043e\u0440\u043e\u0442\u044c\u0441\u044f \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0441 \u043a\u0430\u0436\u0434\u043e\u0439 \u043e\u0448\u0438\u0431\u043a\u043e\u0439 \u043d\u0435 \u0441\u0430\u043c\u044b\u0439 \u0445\u043e\u0440\u043e\u0448\u0438\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442. "),(0,i.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u044d\u0442\u043e\u0433\u043e, \u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0441\u0435\u0440\u0432\u0438\u0441 ",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/crashlytics"},"Firebase Crashlytics"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0431\u043e \u0432\u0441\u0435\u0445 \u043e\u0448\u0438\u0431\u043a\u0430\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0438 \u0443 \u044e\u0437\u0435\u0440\u043e\u0432 \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445, \u0431\u0435\u0437 \u043a\u0430\u043a\u043e\u0433\u043e \u043b\u0438\u0431\u043e \u0443\u0447\u0430\u0441\u0442\u0438\u044f \u0441 \u0438\u0445 \u0441\u0442\u043e\u0440\u043e\u043d\u044b.",(0,i.kt)("br",{parentName:"p"}),"\n","\u0421\u0435\u0440\u0432\u0438\u0441 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043b\u043e\u0432\u0438\u0442\u044c \u0434\u0432\u0430 \u0432\u0438\u0434\u0430 \u043e\u0448\u0438\u0431\u043e\u043a:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fatal")," - \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u0435\u043b \u043f\u0440\u044f\u043c \u043a\u0440\u0430\u0448 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"non-fatal")," - \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430, \u043e\u0434\u043d\u0430\u043a\u043e, \u043e\u043d\u0430 \u0431\u044b\u043b\u0430 \u043a\u0430\u043a-\u0442\u043e \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u0430 (",(0,i.kt)("inlineCode",{parentName:"li"},"try catch"),")")),(0,i.kt)("p",null,"\u041a\u0430\u043a \u0440\u0435\u0430\u0433\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"fatal")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"non-fatal")," \u043e\u0448\u0438\u0431\u043a\u0438:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"fatal:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u0440\u0430\u0437 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043a\u0440\u0430\u0448\u043d\u0443\u043b\u043e\u0441\u044c, \u0437\u043d\u0430\u0447\u0438\u0442 \u0433\u0434\u0435-\u0442\u043e \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043d\u0438\u043a\u0430\u043a \u043d\u0435 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f. \u041d\u0430\u0448\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f: \u0434\u043e\u0431\u0430\u0432\u0438\u043c \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u043e\u0448\u0438\u0431\u043a\u043e\u043a \u0432 \u0442\u043e \u043c\u0435\u0441\u0442\u043e, \u0433\u0434\u0435 \u043e\u043d\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430, \u0434\u043e\u0431\u0430\u0432\u0438\u043c \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430\u043c\u0438 \u0432 ",(0,i.kt)("inlineCode",{parentName:"li"},"Firebase Crashlytics"),", \u0447\u0442\u043e\u0431\u044b \u0432\u0441\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043e\u0448\u0438\u0431\u043a\u0438 \u0432 \u044d\u0442\u043e\u043c \u043c\u0435\u0441\u0442\u0435 \u043f\u043e\u043f\u0430\u0434\u0430\u043b\u0438 \u0432 ",(0,i.kt)("inlineCode",{parentName:"li"},"Firebase"),", \u043d\u043e \u0443\u0436\u0435 \u043a\u0430\u043a ",(0,i.kt)("inlineCode",{parentName:"li"},"non-fatal")))),(0,i.kt)("li",{parentName:"ul"},"non-fatal:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u0440\u0430\u0437 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 ",(0,i.kt)("inlineCode",{parentName:"li"},"non-fatal")," \u043e\u0448\u0438\u0431\u043a\u0430, \u0437\u043d\u0430\u0447\u0438\u0442 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043d\u043e\u0435 \u043c\u0435\u0441\u0442\u043e \u043c\u044b \u0443\u0436\u0435 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u043c \u0438 \u043b\u043e\u0433\u0438\u0440\u0443\u0435\u043c")))),(0,i.kt)("p",null,"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"non-fatal")," \u043e\u0448\u0438\u0431\u043a\u0438 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435:\n\u041a\u0430\u043a\u0438\u043c\u0438 \u043e\u043d\u0438 \u0431\u044b\u0432\u0430\u044e\u0442:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u044d\u0442\u043e \u043d\u043e\u0432\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u0438\u0437-\u0437\u0430 \u043a\u043e\u0441\u044f\u043a\u0430 \u0432 \u043d\u0430\u0448\u0435\u043c \u043a\u043e\u0434\u0435"),(0,i.kt)("li",{parentName:"ul"},"\u044d\u0442\u043e \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u0437-\u0437\u0430 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0430, \u0438\u043b\u0438 \u043d\u0435\u0445\u0432\u0430\u0442\u043a\u0438 \u043f\u0430\u043c\u044f\u0442\u0438 \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435, \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0444\u0430\u0439\u043b")),(0,i.kt)("p",null,"\u0415\u0441\u043b\u0438 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u0438\u0437-\u0437\u0430 \u043a\u0430\u043a\u043e\u0433\u043e-\u0442\u043e \u043d\u0435\u0434\u043e\u0447\u0435\u0442\u0430 \u0432 \u043a\u043e\u0434\u0435 - \u043c\u044b \u043f\u0440\u043e\u0441\u0442\u043e \u0438\u0441\u043f\u0440\u0430\u0432\u0438\u043c \u043a\u043e\u0434 \u0438 \u0432\u0441\u0435.  "),(0,i.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0436\u0435 \u044d\u0442\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0430\u044f - \u043c\u044b \u0438\u0437\u043c\u0435\u043d\u0438\u043c \u0443\u0441\u043b\u043e\u0432\u0438\u0435 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u0447\u0442\u043e\u0431\u044b \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u0432\u0438\u0434\u0435\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e\u0431 \u044d\u0442\u043e\u0439 \u043e\u0448\u0438\u0431\u043a\u0435 \u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"Firebase"),". \u042d\u0442\u043e \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u043c \u0438\u0437\u0431\u0430\u0432\u0438\u0442\u044c\u0441\u044f \u043e\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043a\u0443\u0447\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"non-fatal")," \u043e\u0448\u0438\u0431\u043e\u043a, \u0438, \u043a\u043e\u0433\u0434\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0434\u0435\u0442 \u043a\u0430\u043a\u0430\u044f-\u0442\u043e \u043d\u043e\u0432\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430, \u043c\u044b \u0441\u0440\u0430\u0437\u0443 \u044d\u0442\u043e \u0437\u0430\u043c\u0435\u0442\u0438\u043c \u0438 \u043f\u043e\u0439\u0434\u0435\u043c \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0442\u044c\u0441\u044f, \u0430 \u043d\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043c \u0435\u0435 \u0432 \u043e\u0431\u0449\u0435\u0439 \u043a\u0443\u0447\u0435 \u043e\u0448\u0438\u0431\u043e\u043a."),(0,i.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c, \u043a\u043e\u0433\u0434\u0430 \u043d\u0430\u043c \u0441\u043d\u043e\u0432\u0430 \u043d\u0430\u043f\u0438\u0448\u0435\u0442 \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a \u0438 \u0441\u043e\u043e\u0431\u0449\u0438\u0442, \u0447\u0442\u043e \u0443 \u044e\u0437\u0435\u0440\u043e\u0432 \u043e\u043f\u044f\u0442\u044c \u043a\u0440\u0430\u0448\u0438\u0442\u0441\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043d\u0430\u0448 \u043f\u043b\u0430\u043d \u0431\u0443\u0434\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u043c ",(0,i.kt)("inlineCode",{parentName:"li"},"Firebase Crashlytics"),", \u0432\u0438\u0434\u0438\u043c, \u043a\u0430\u043a\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"),(0,i.kt)("li",{parentName:"ul"},"\u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c \u043e\u0448\u0438\u0431\u043a\u0443")),(0,i.kt)("p",null,"\u0414\u043b\u044f \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u043e\u0431\u0449\u0435\u043c \u043a\u043e\u0434\u0435 \u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AAkira/Napier"},"Napier"),", \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0441\u0432\u044f\u0437\u044b\u0432\u0430\u0435\u043c \u0441 ",(0,i.kt)("inlineCode",{parentName:"p"},"FirebaseCrashlytics"),", \u0447\u0442\u043e\u0431\u044b \u043b\u043e\u0433\u0438\u0440\u0443\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",(0,i.kt)("inlineCode",{parentName:"p"},"Napier"),", \u043b\u043e\u0433\u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u043e\u043f\u0430\u0434\u0430\u043b\u0438 \u0438 \u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"Firebase"),"."),(0,i.kt)("p",null,"\u041f\u043e\u044d\u0442\u043e\u043c\u0443, \u043f\u0440\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u043b\u043e\u0433\u0438 \u043f\u0440\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u0432\u043e \u0432\u0441\u0435\u0445 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430\u0445 \u043e\u0448\u0438\u0431\u043e\u043a."),(0,i.kt)("p",null,"\u0422\u0430\u043a\u0436\u0435, \u0435\u0441\u043b\u0438 \u0437\u0430\u0440\u0430\u043d\u0435\u0435 \u0443\u0434\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u043d\u044f\u0442\u044c, \u0447\u0442\u043e \u043a\u0430\u043a\u0430\u044f-\u0442\u043e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0433\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0433\u043e \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043e\u0448\u0438\u0431\u043a\u0438, \u0435\u0435 \u0442\u0430\u043a\u0436\u0435 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441 \u0443\u0440\u043e\u0432\u043d\u0435\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"INFO"),". \u041e\u0434\u043d\u0430\u043a\u043e, \u043d\u0438\u043a\u0430\u043a\u0438\u0435 \u0441\u0435\u043a\u0440\u0435\u0442\u043d\u044b\u0435 \u043a\u043b\u044e\u0447\u0438 \u0438 \u043f\u0430\u0440\u043e\u043b\u0438 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0435\u043b\u044c\u0437\u044f."),(0,i.kt)("h2",{id:"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430-\u043e\u0448\u0438\u0431\u043e\u043a-\u0432-\u043e\u0431\u0449\u0435\u043c-\u043a\u043e\u0434\u0435"},"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043e\u0448\u0438\u0431\u043e\u043a \u0432 \u043e\u0431\u0449\u0435\u043c \u043a\u043e\u0434\u0435"),(0,i.kt)("p",null,"\u0412 \u043b\u044e\u0431\u043e\u043c \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u0447\u0430\u0441\u0442\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u044f\u0442 \u043d\u0435 \u0444\u0430\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u043e\u0448\u0438\u0431\u043a\u0438, \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0442\u043d\u0443\u044e \u0441\u0432\u044f\u0437\u044c, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f, \u043d\u0435\u0445\u0432\u0430\u0442\u043a\u0430 \u043f\u0430\u043c\u044f\u0442\u0438 \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435 \u0434\u043b\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u043e\u0442\u0432\u0435\u0442\u044b \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u0442.\u0434. \u041e\u0431\u043e \u0432\u0441\u0435\u043c \u044d\u0442\u043e\u043c \u043d\u0443\u0436\u043d\u043e \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0434\u043e\u043d\u043e\u0441\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e.",(0,i.kt)("br",{parentName:"p"}),"\n","\u0422\u0430\u043a\u0438\u0435 \u043e\u0448\u0438\u0431\u043a\u0438, \u043a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e, \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u044e\u0437\u0435\u0440\u0443 \u043a\u0430\u043a \u0430\u043b\u043b\u0435\u0440\u0442 \u0438\u043b\u0438 \u0442\u043e\u0441\u0442, \u0447\u0442\u043e\u0431\u044b \u044e\u0437\u0435\u0440 \u0443\u0441\u043f\u0435\u043b \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c, \u0432 \u0447\u0435\u043c \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u043b \u0440\u0435\u0448\u0438\u0442\u044c \u0435\u0435 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e. "),(0,i.kt)("p",null,"\u041c\u044b \u0432 IceRock \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/icerockdev/moko-errors"},"moko-errors"),".",(0,i.kt)("br",{parentName:"p"}),"\n","\u0421 \u0435\u0435 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043c\u044b \u043c\u043e\u0436\u0435\u043c:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0446\u0435\u043d\u0442\u0440\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0432\u0441\u0435 \u043e\u0448\u0438\u0431\u043a\u0438 \u043e\u0431\u0449\u0435\u0433\u043e \u043a\u043e\u0434\u0430"),(0,i.kt)("li",{parentName:"ul"},"\u0432\u044b\u0431\u0440\u0430\u0442\u044c, \u043a\u0430\u043a \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0443 \u044e\u0437\u0435\u0440\u0443 ",(0,i.kt)("inlineCode",{parentName:"li"},"Toast"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Alert")),(0,i.kt)("li",{parentName:"ul"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u043d\u044b\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u043e\u0448\u0438\u0431\u043e\u043a, \u043f\u0440\u044f\u043c\u043e \u0432 \u043e\u0431\u0449\u0435\u043c \u043a\u043e\u0434\u0435")),(0,i.kt)("p",null,"\u0420\u0430\u0437\u0431\u0435\u0440\u0435\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u044d\u0442\u043e\u0439 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ExceptionMappersStorage")," - \u0432 \u043d\u0435\u043c \u043c\u044b \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u043c \u0432\u0441\u044e \u043b\u043e\u0433\u0438\u043a\u0443, \u043a\u0430\u043a \u0438\u0437 ",(0,i.kt)("inlineCode",{parentName:"p"},"Exception")," \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b, \u0447\u0442\u043e\u0431\u044b \u0432\u043e \u0432\u0441\u0435\u0439 \u043b\u043e\u0433\u0438\u043a\u0435, \u0432\u043e \u0432\u0441\u0435\u0445 \u0444\u0438\u0447\u0430\u0445 \u043d\u0435 \u0437\u0430\u0434\u0443\u043c\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043e \u0442\u043e\u043c, \u043a\u0430\u043a\u043e\u0439 \u0442\u0435\u043a\u0441\u0442 \u0432\u044b\u0434\u0430\u0442\u044c \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u043e\u0448\u0438\u0431\u043a\u0438 \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c \u043c\u0430\u043f\u043f\u0435\u0440, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u0435\u0440\u043d\u0435\u0442 \u043d\u0443\u0436\u043d\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443.\n\u0418\u043c\u0435\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0442\u0435\u043a\u0441\u0442\u0430:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0434\u043b\u044f \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u043e\u0448\u0438\u0431\u043a\u0438"),(0,i.kt)("li",{parentName:"ul"},"\u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043e\u0448\u0438\u0431\u043e\u043a, \u0443\u0434\u043e\u0432\u043b\u0435\u0442\u0432\u043e\u0440\u044f\u044e\u0449\u0438\u0445 \u043a\u0430\u043a\u043e\u043c\u0443-\u043d\u0438\u0431\u0443\u0434\u044c \u0443\u0441\u043b\u043e\u0432\u0438\u044e"),(0,i.kt)("li",{parentName:"ul"},'\u0442\u0435\u043a\u0441\u0442 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e - "\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430", \u0443\u0436\u0435 \u0437\u0430\u0434\u0430\u043d \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435-\u0448\u0430\u0431\u043b\u043e\u043d\u0435')),(0,i.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u0437\u043d\u0430\u0435\u0442\u0435, \u043a\u0430\u043a\u0438\u0435 \u043e\u0448\u0438\u0431\u043a\u0438 \u043c\u043e\u0433\u0443\u0442 \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0442\u0438 \u0432 \u0432\u0430\u0448\u0435\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 - \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435 \u0438\u0445 \u0432 \u043c\u0430\u043f\u043f\u0435\u0440\u0435 "),(0,i.kt)("h2",{id:"\u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435-\u0437\u0430\u0434\u0430\u043d\u0438\u0435"},"\u041f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0441\u043a\u043b\u043e\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u0441\u0435\u0431\u0435 moko-errors"),(0,i.kt)("li",{parentName:"ul"},"\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 sample, \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043d\u0430 \u043e\u0431\u0435\u0438\u0445 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430\u0445"),(0,i.kt)("li",{parentName:"ul"},"\u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 ",(0,i.kt)("inlineCode",{parentName:"li"},"alertErrorPresenter"),", \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435, \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 "),(0,i.kt)("li",{parentName:"ul"},"\u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0441\u0432\u043e\u0439 \u043a\u043b\u0430\u0441\u0441 \u043e\u0448\u0438\u0431\u043a\u0438, \u043f\u043e \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0438 \u0441 ",(0,i.kt)("inlineCode",{parentName:"li"},"CustomException"),", \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0441\u0432\u043e\u044e \u0441\u0442\u0440\u043e\u043a\u0443 \u043b\u043e\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e\u0431 \u044d\u0442\u043e\u0439 \u043e\u0448\u0438\u0431\u043a\u0435, \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c \u0447\u0442\u043e \u0432\u0441\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043d\u0430 \u043e\u0431\u0435\u0438\u0445 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430\u0445"),(0,i.kt)("li",{parentName:"ul"},"\u0441\u043a\u043b\u043e\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u0441\u0435\u0431\u0435 mobile-moko-bolirplate, \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f ",(0,i.kt)("inlineCode",{parentName:"li"},"ExceptionMappersStorage"),", \u0444\u0443\u043d\u043a\u0446\u0438\u044f ",(0,i.kt)("inlineCode",{parentName:"li"},"createExceptionHandler"),", \u043a\u0430\u043a \u043f\u0440\u043e\u043a\u0438\u0434\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0434\u043e \u0432\u044c\u044e\u043c\u043e\u0434\u0435\u043b\u0438")))}s.isMDXComponent=!0}}]);