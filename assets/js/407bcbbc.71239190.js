"use strict";(self.webpackChunkkmm_icerock_dev=self.webpackChunkkmm_icerock_dev||[]).push([[7814],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,k=s["".concat(c,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},79284:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a={sidebar_position:5},l="CocoaPods integration",c={unversionedId:"kotlin-native/cocoapods",id:"kotlin-native/cocoapods",isDocsHomePage:!1,title:"CocoaPods integration",description:"\u041e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u043e\u0442 JetBrains",source:"@site/learning/kotlin-native/cocoapods.md",sourceDirName:"kotlin-native",slug:"/kotlin-native/cocoapods",permalink:"/kmm.icerock.dev/learning/kotlin-native/cocoapods",editUrl:"https://github.com/icerockdev/kmm.icerock.dev/tree/docusaurus/learning/kotlin-native/cocoapods.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u0418\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f ObjC \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430 \u0432 Kotlin",permalink:"/kmm.icerock.dev/learning/kotlin-native/objc_protocol"},next:{title:"Stacktrace",permalink:"/kmm.icerock.dev/learning/kotlin-native/stacktraces"}},p=[{value:"\u041e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u043e\u0442 JetBrains",id:"\u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f-\u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f-\u043e\u0442-jetbrains",children:[{value:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438",id:"\u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438",children:[]},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u0432-\u043f\u0440\u043e\u0435\u043a\u0442\u0435",children:[]}]},{value:"\u041f\u043b\u0430\u0433\u0438\u043d \u043e\u0442 IceRock",id:"\u043f\u043b\u0430\u0433\u0438\u043d-\u043e\u0442-icerock",children:[{value:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438",id:"\u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438-1",children:[]},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u0432-\u043f\u0440\u043e\u0435\u043a\u0442\u0435-1",children:[]}]}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cocoapods-integration"},"CocoaPods integration"),(0,i.kt)("h2",{id:"\u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f-\u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f-\u043e\u0442-jetbrains"},(0,i.kt)("a",{parentName:"h2",href:"https://plugins.gradle.org/plugin/org.jetbrains.kotlin.native.cocoapods"},"\u041e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u043e\u0442 JetBrains")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/native-cocoapods.html#add-a-dependency-on-a-pod-library-from-the-cocoapods-repository"},"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f"))),(0,i.kt)("h3",{id:"\u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438"},"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0421\u043e\u0437\u0434\u0430\u0435\u0442 \u0437\u0430\u0434\u0430\u0447\u0443 ",(0,i.kt)("inlineCode",{parentName:"li"},"podspec"),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 ",(0,i.kt)("a",{parentName:"li",href:"https://guides.cocoapods.org/syntax/podspec.html"},"Podspec")," \u0444\u0430\u0439\u043b \u0434\u043b\u044f \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0438 \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u0444\u0440\u044d\u0439\u043c\u0432\u043e\u0440\u043a-\u0437\u0430\u0433\u043b\u0443\u0448\u043a\u0443, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"pod install")," \u0444\u0440\u044d\u0439\u043c\u0432\u043e\u0440\u043a \u0443\u0436\u0435 \u0431\u044b\u043b \u0438 \u043f\u043e\u0434\u044b \u0437\u0430\u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c"),(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a"),(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u0434\u043b\u043a\u044e\u0447\u0430\u0442\u044c \u043f\u043e\u0434\u044b \u0432\u043d\u0443\u0442\u0440\u044c Kotlin-\u043a\u043e\u0434\u0430, \u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u043a \u043f\u0440\u043e\u0435\u043a\u0442\u0443-\u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u0443"),(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u043a\u043e\u043c\u043f\u0438\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b, \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b "),(0,i.kt)("li",{parentName:"ul"},"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0432 Xcode \u043f\u0440\u043e\u0435\u043a\u0442 \u0435\u0434\u0438\u043d\u043e\u0436\u0434\u044b, \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 pod-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439")),(0,i.kt)("h3",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u0432-\u043f\u0440\u043e\u0435\u043a\u0442\u0435"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0434\u043b\u044f \u0444\u0440\u044d\u0439\u043c\u0432\u043e\u0440\u043a\u0430 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443 ",(0,i.kt)("inlineCode",{parentName:"li"},"podspec")),(0,i.kt)("li",{parentName:"ul"},"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"li"},"pod install")," \u0434\u043b\u044f \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0438\u0445 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a")),(0,i.kt)("h2",{id:"\u043f\u043b\u0430\u0433\u0438\u043d-\u043e\u0442-icerock"},(0,i.kt)("a",{parentName:"h2",href:"https://plugins.gradle.org/plugin/dev.icerock.mobile.multiplatform.cocoapods"},"\u041f\u043b\u0430\u0433\u0438\u043d \u043e\u0442 IceRock")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/icerockdev/mobile-multiplatform-gradle-plugin#setup-cocoapods-interop"},"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f"))),(0,i.kt)("h3",{id:"\u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438-1"},"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0438\u043b\u0438 \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a"),(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0445 cocoapods \u0432\u043d\u0443\u0442\u0440\u0438 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u0433\u0440\u0430\u0434\u043b \u043c\u043e\u0434\u0443\u043b\u0435\u0439"),(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u043a\u043e\u043c\u043f\u0438\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b, \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b "),(0,i.kt)("li",{parentName:"ul"},"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0432 Xcode \u043f\u0440\u043e\u0435\u043a\u0442 \u0435\u0434\u0438\u043d\u043e\u0436\u0434\u044b, \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 pod-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://guides.cocoapods.org/syntax/podspec.html"},"Podspec")," \u0444\u0430\u0439\u043b \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0432\u0440\u0443\u0447\u043d\u0443\u044e")),(0,i.kt)("h3",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u0432-\u043f\u0440\u043e\u0435\u043a\u0442\u0435-1"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0415\u0441\u043b\u0438 \u0432 Kotlin \u043a\u043e\u0434\u0435 \u0435\u0441\u0442\u044c \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 cocoapods: \u0431\u043b\u043e\u043a ",(0,i.kt)("inlineCode",{parentName:"li"},"cocoapods {...}"),", \u0442\u043e \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"li"},"pod install")," \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435, \u043a\u0443\u0434\u0430 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u044e\u0442\u0441\u044f \u043f\u043e\u0434\u044b "),(0,i.kt)("li",{parentName:"ul"},"\u0412 \u043a\u043e\u0440\u043d\u0435\u0432\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"li"},"./gradlew syncMultiPlatformLibraryDebugFrameworkIosX64")),(0,i.kt)("li",{parentName:"ul"},"\u0412 \u043f\u0440\u043e\u0435\u043a\u0442\u0435, \u043a\u0443\u0434\u0430 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u044e\u0442\u0441\u044f \u043f\u043e\u0434\u044b ",(0,i.kt)("inlineCode",{parentName:"li"},"pod install"))))}d.isMDXComponent=!0}}]);