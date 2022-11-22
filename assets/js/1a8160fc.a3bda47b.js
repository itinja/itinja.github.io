"use strict";(self.webpackChunkwebsite_with_docusaurus=self.webpackChunkwebsite_with_docusaurus||[]).push([[1018],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9167:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"\u8303\u56f4",description:"\u73af\u5883\u6784\u7b51",keywords:["\u5982\u4f55\u9605\u8bfb\u4e00\u672c\u4e66","\u8bfb\u4e66\u7b14\u8bb0"],tags:["\u9605\u8bfb"],author:"kevin",date:new Date("2022-10-12T00:00:00.000Z"),sidebar_position:2},i="\u30b9\u30b3\u30fc\u30d7",p={unversionedId:"ch03/ch03-02-scopes",id:"ch03/ch03-02-scopes",title:"\u8303\u56f4",description:"\u73af\u5883\u6784\u7b51",source:"@site/python/ch03/ch03-02-scopes.md",sourceDirName:"ch03",slug:"/ch03/ch03-02-scopes",permalink:"/python/ch03/ch03-02-scopes",draft:!1,tags:[{label:"\u9605\u8bfb",permalink:"/python/tags/\u9605\u8bfb"}],version:"current",lastUpdatedBy:"kevin",lastUpdatedAt:1669042846,formattedLastUpdatedAt:"2022\u5e7411\u670821\u65e5",sidebarPosition:2,frontMatter:{title:"\u8303\u56f4",description:"\u73af\u5883\u6784\u7b51",keywords:["\u5982\u4f55\u9605\u8bfb\u4e00\u672c\u4e66","\u8bfb\u4e66\u7b14\u8bb0"],tags:["\u9605\u8bfb"],author:"kevin",date:"2022-10-12T00:00:00.000Z",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u7c7b",permalink:"/python/ch03/ch03-01-classes"},next:{title:"\u7279\u6b8a\u5c5e\u6027",permalink:"/python/ch03/ch03-03-special-attributes"}},l={},c=[],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u30b9\u30b3\u30fc\u30d7"},"\u30b9\u30b3\u30fc\u30d7"),(0,a.kt)("p",null,"\u4ed6\u306e\u8a00\u8a9e\u3067\u306f\u30af\u30e9\u30b9\u30e1\u30f3\u30d0\u306b\u5bfe\u3057\u3066 ",(0,a.kt)("inlineCode",{parentName:"p"},"public, protected, private")," \u3068\u3044\u3063\u305f\u30a2\u30af\u30bb\u30b9\u6307\u5b9a\u5b50\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u304c Python \u3067\u306f\u305d\u306e\u3088\u3046\u306a\u6307\u5b9a\u306f\u3067\u304d\u305a\u3001\u3059\u3079\u3066\u306e\u30e1\u30f3\u30d0\u304c ",(0,a.kt)("inlineCode",{parentName:"p"},"public")," \u3068\u3057\u3066\u6271\u308f\u308c\u307e\u3059\u3002\u3067\u3059\u304c\u7fd2\u6163\u7684\u306b\u4e0b\u8a18\u306e\u3088\u3046\u306a\u547d\u540d\u898f\u5247\u3067\u30e1\u30f3\u30d0\u306e\u30b9\u30b3\u30fc\u30d7\u3092\u533a\u5225\u3059\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u30b9\u30b3\u30fc\u30d7"),(0,a.kt)("th",{parentName:"tr",align:null},"\u547d\u540d\u898f\u5247"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"public"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"method()"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"protected"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_method()"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"private"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"__method()"))))),(0,a.kt)("p",null,"Python \u3067\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"__method()")," \u306e\u3088\u3046\u306a private \u30e1\u30bd\u30c3\u30c9\u3092\u4f5c\u308b\u3053\u3068\u306f\u305d\u308c\u307b\u3069\u591a\u304f\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u96a0\u853d\u3057\u305f\u3044\u30e1\u30f3\u30d0\u3092\u5b9a\u7fa9\u3059\u308b\u3068\u304d\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"_method()")," \u306e\u3088\u3046\u306a protected \u30e1\u30bd\u30c3\u30c9\u3092\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u306e\u307b\u3046\u304c\u591a\u3044\u3067\u3059\u3002"))}u.isMDXComponent=!0}}]);