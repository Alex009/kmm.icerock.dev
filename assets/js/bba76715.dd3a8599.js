"use strict";(self.webpackChunkkmm_icerock_dev=self.webpackChunkkmm_icerock_dev||[]).push([[7e3],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37368:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],c={sidebar_position:7},l="\u0420\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043f\u043e \u0444\u0430\u0439\u043b\u0430\u043c",s={unversionedId:"code-style/separate-by-files",id:"code-style/separate-by-files",title:"\u0420\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043f\u043e \u0444\u0430\u0439\u043b\u0430\u043c",description:"1. \u041a\u043b\u0430\u0441\u0441\u044b/\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044b/\u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0440\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u044e\u0442\u0441\u044f \u0432 \u0441\u0432\u043e\u0435\u043c \u0444\u0430\u0439\u043b\u0435 (\u0434\u0432\u0430 \u043a\u043b\u0430\u0441\u0441\u0430 \u0432 \u043e\u0434\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u043d\u0435 \u043f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442\u0441\u044f). \u0412 \u0444\u0430\u0439\u043b\u0435 \u0440\u044f\u0434\u043e\u043c \u0441 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u043c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435\u043c (\u043a\u043b\u0430\u0441\u0441/\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441/\u043e\u0431\u044a\u0435\u043a\u0442) \u043c\u043e\u0433\u0443\u0442 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 extension \u043c\u0435\u0442\u043e\u0434\u044b, \u043e\u0442\u043d\u043e\u0441\u044f\u0449\u0438\u0435\u0441\u044f \u043a \u044d\u0442\u043e\u043c\u0443 \u043a\u043b\u0430\u0441\u0441\u0443. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0432 \u0444\u0430\u0439\u043b \u043a\u043b\u0430\u0441\u0441\u0430 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438 \u0434\u043e\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f \u0435\u0449\u0451 \u043e\u0431\u044a\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u044d\u043a\u0441\u0442\u0435\u043d\u0448\u0435\u043d \u043c\u0430\u043f\u043f\u0438\u043d\u0433\u0430 \u0441\u0435\u0442\u0435\u0432\u043e\u0439 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438 \u0432 \u0434\u043e\u043c\u0435\u043d\u043d\u0443\u044e:",source:"@site/learning/code-style/separate-by-files.md",sourceDirName:"code-style",slug:"/code-style/separate-by-files",permalink:"/kmm.icerock.dev/learning/code-style/separate-by-files",draft:!1,editUrl:"https://github.com/icerockdev/kmm.icerock.dev/tree/docusaurus/learning/code-style/separate-by-files.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u0417\u0430\u043c\u0435\u043d\u0430 \u043b\u044f\u043c\u0431\u0434 \u0441\u0441\u044b\u043b\u043a\u0430\u043c\u0438 \u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438",permalink:"/kmm.icerock.dev/learning/code-style/functions-references-instead-of-lambdas"},next:{title:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0444\u0438\u0447\u0438",permalink:"/kmm.icerock.dev/learning/code-style/feature-structure"}},u={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435-\u043f\u043e-\u0444\u0430\u0439\u043b\u0430\u043c"},"\u0420\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043f\u043e \u0444\u0430\u0439\u043b\u0430\u043c"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u041a\u043b\u0430\u0441\u0441\u044b/\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044b/\u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0440\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u044e\u0442\u0441\u044f \u0432 \u0441\u0432\u043e\u0435\u043c \u0444\u0430\u0439\u043b\u0435 (\u0434\u0432\u0430 \u043a\u043b\u0430\u0441\u0441\u0430 \u0432 \u043e\u0434\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u043d\u0435 \u043f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442\u0441\u044f). \u0412 \u0444\u0430\u0439\u043b\u0435 \u0440\u044f\u0434\u043e\u043c \u0441 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u043c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435\u043c (\u043a\u043b\u0430\u0441\u0441/\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441/\u043e\u0431\u044a\u0435\u043a\u0442) \u043c\u043e\u0433\u0443\u0442 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 ",(0,i.kt)("strong",{parentName:"p"},"extension")," \u043c\u0435\u0442\u043e\u0434\u044b, \u043e\u0442\u043d\u043e\u0441\u044f\u0449\u0438\u0435\u0441\u044f \u043a \u044d\u0442\u043e\u043c\u0443 \u043a\u043b\u0430\u0441\u0441\u0443. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0432 \u0444\u0430\u0439\u043b \u043a\u043b\u0430\u0441\u0441\u0430 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438 \u0434\u043e\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f \u0435\u0449\u0451 \u043e\u0431\u044a\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u044d\u043a\u0441\u0442\u0435\u043d\u0448\u0435\u043d \u043c\u0430\u043f\u043f\u0438\u043d\u0433\u0430 \u0441\u0435\u0442\u0435\u0432\u043e\u0439 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438 \u0432 \u0434\u043e\u043c\u0435\u043d\u043d\u0443\u044e:"),(0,i.kt)("p",{parentName:"li"},"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"class ScheduleDeviceDomain(\n    val id: Int,\n    val name: String,\n    val timezone: TimeZoneDomain?,\n    val deviceParameters: List<DeviceParameterDomain>\n)\n\ninternal fun DeviceFullResponse.toScheduleDeviceDomain() = ScheduleDeviceDomain(\n    id = this.id,\n    name = this.name,\n    timezone = this.timezone?.toDomain(),\n    deviceParameters = this.parameterList?.map { it.toDomain() }.orEmpty()\n)\n")))))}f.isMDXComponent=!0}}]);