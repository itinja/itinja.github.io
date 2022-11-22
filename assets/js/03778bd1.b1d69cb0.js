"use strict";(self.webpackChunkwebsite_with_docusaurus=self.webpackChunkwebsite_with_docusaurus||[]).push([[427],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),m=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=m(e.components);return a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(t),k=r,f=c["".concat(i,".").concat(k)]||c[k]||d[k]||p;return t?a.createElement(f,l(l({ref:n},u),{},{components:t})):a.createElement(f,l({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,l=new Array(p);l[0]=c;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<p;m++)l[m]=t[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7911:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>m});var a=t(7462),r=(t(7294),t(3905));const p={},l="\u30e2\u30b8\u30e5\u30fc\u30eb",o={unversionedId:"ch04/ch04-01-modules",id:"ch04/ch04-01-modules",title:"\u30e2\u30b8\u30e5\u30fc\u30eb",description:"\u30e2\u30b8\u30e5\u30fc\u30eb\u3068\u306f\u95a2\u6570\u3084\u30af\u30e9\u30b9\u306a\u3069\u3092\u5225\u30d5\u30a1\u30a4\u30eb\u3067\u5229\u7528\u3067\u304d\u308b\u72b6\u614b\u3067\u6574\u7406\u3057\u305f Python \u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e\u3053\u3068\u3067\u3059\u3002\u3053\u308c\u307e\u3067\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306f\u5b9f\u884c\u3059\u308b\u3053\u3068\u3092\u5ff5\u982d\u306b\u5b9f\u88c5\u3057\u307e\u3057\u305f\u304c\u3001\u30e2\u30b8\u30e5\u30fc\u30eb\u306f\u5225\u306e\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u53d6\u308a\u8fbc\u307e\u308c\u308b\u3053\u3068\u3092\u5ff5\u982d\u306b\u5b9f\u88c5\u3092\u884c\u3044\u307e\u3059\u3002",source:"@site/python/ch04/ch04-01-modules.md",sourceDirName:"ch04",slug:"/ch04/ch04-01-modules",permalink:"/python/ch04/ch04-01-modules",draft:!1,tags:[],version:"current",lastUpdatedBy:"kevin",lastUpdatedAt:1669042846,formattedLastUpdatedAt:"2022\u5e7411\u670821\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7b2c\u56db\u7ae0",permalink:"/python/category/\u7b2c\u56db\u7ae0"},next:{title:"\u30d1\u30c3\u30b1\u30fc\u30b8",permalink:"/python/ch04/ch04-02-packages"}},i={},m=[{value:"\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u66f8\u304d\u65b9",id:"\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u66f8\u304d\u65b9",level:2},{value:"\u30e2\u30b8\u30e5\u30fc\u30eb\u4f5c\u6210\u306e\u6ce8\u610f\u70b9",id:"\u30e2\u30b8\u30e5\u30fc\u30eb\u4f5c\u6210\u306e\u6ce8\u610f\u70b9",level:2},{value:"<code>from-import</code>",id:"from-import",level:2},{value:"<code>__name__</code>",id:"__name__",level:2}],u={toc:m};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u30e2\u30b8\u30e5\u30fc\u30eb"},"\u30e2\u30b8\u30e5\u30fc\u30eb"),(0,r.kt)("p",null,"\u30e2\u30b8\u30e5\u30fc\u30eb\u3068\u306f\u95a2\u6570\u3084\u30af\u30e9\u30b9\u306a\u3069\u3092\u5225\u30d5\u30a1\u30a4\u30eb\u3067\u5229\u7528\u3067\u304d\u308b\u72b6\u614b\u3067\u6574\u7406\u3057\u305f Python \u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e\u3053\u3068\u3067\u3059\u3002\u3053\u308c\u307e\u3067\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306f\u5b9f\u884c\u3059\u308b\u3053\u3068\u3092\u5ff5\u982d\u306b\u5b9f\u88c5\u3057\u307e\u3057\u305f\u304c\u3001\u30e2\u30b8\u30e5\u30fc\u30eb\u306f\u5225\u306e\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u53d6\u308a\u8fbc\u307e\u308c\u308b\u3053\u3068\u3092\u5ff5\u982d\u306b\u5b9f\u88c5\u3092\u884c\u3044\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u66f8\u304d\u65b9"},"\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u66f8\u304d\u65b9"),(0,r.kt)("p",null,"\u62e1\u5f35\u5b50 ",(0,r.kt)("inlineCode",{parentName:"p"},".py")," \u3092\u6301\u3063\u305f\u901a\u5e38\u306e Python \u30d5\u30a1\u30a4\u30eb\u3068\u3057\u3066\u4f5c\u6210\u3059\u308c\u3070\u554f\u984c\u3042\u308a\u307e\u305b\u3093\u3002\u305f\u3060\u3057\u30b7\u30d0\u30f3\u306f\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u5b9f\u88c5\u3059\u308b\u3068\u304d\u306b\u306f\u4e0d\u8981\u3067\u3059\u3002\u305f\u3068\u3048\u66f8\u3044\u3066\u3082\u60aa\u3055\u3092\u3059\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u5b9f\u884c\u3059\u308b\u30b9\u30af\u30ea\u30d7\u30c8\u3068\u3057\u3066\u306f\u4f7f\u7528\u3057\u306a\u3044\u306e\u3067\u66f8\u304f\u610f\u5473\u306f\u3042\u307e\u308a\u3042\u308a\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"\u30d5\u30a3\u30dc\u30ca\u30c3\u30c1\u6570\u5217 ",(0,r.kt)("inlineCode",{parentName:"p"},"0, 1, 1, 2, 3, 5, 8, ...")," \u3092\u51fa\u529b\u3059\u308b\u3088\u3046\u306a\u95a2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"fib(n)")," \u3092\u30e2\u30b8\u30e5\u30fc\u30eb\u3068\u3057\u3066\u66f8\u3044\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"fib.py")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\n\ndef fib(n):\n    a, b = 0, 1\n\n    while a < n:\n        print(a, end=' ')\n        a, b = b, a + b\n\n    print()\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fib.py")," \u3092\u5225\u306e\u30d5\u30a1\u30a4\u30eb ",(0,r.kt)("inlineCode",{parentName:"p"},"main.py")," \u306b\u53d6\u308a\u8fbc\u3093\u3067\u3053\u306e\u95a2\u6570\u3092\u5b9f\u884c\u3059\u308b\u306b\u306f\u6b21\u306e\u3088\u3046\u306b\u66f8\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"main.py")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"#!/usr/bin/env python\n\n\nimport fib          # fib.py \u3092\u53d6\u308a\u8fbc\u3080\n\n\ndef main():\n    fib.fib(10)     # fib.py \u5185\u306e fib() \u3092\u547c\u3073\u51fa\u3059\n\n\nif __name__ == '__main__':\n    main()\n")),(0,r.kt)("h2",{id:"\u30e2\u30b8\u30e5\u30fc\u30eb\u4f5c\u6210\u306e\u6ce8\u610f\u70b9"},"\u30e2\u30b8\u30e5\u30fc\u30eb\u4f5c\u6210\u306e\u6ce8\u610f\u70b9"),(0,r.kt)("p",null,"Python \u306e\u30b3\u30fc\u30c9\u306f\u5fc5\u305a\u3057\u3082\u95a2\u6570\u5185\u306b\u542b\u3081\u308b\u5fc5\u8981\u306f\u306a\u304f\u3001\u30d5\u30a1\u30a4\u30eb\u5185\u306b\u76f4\u63a5\u51e6\u7406\u3092\u66f8\u304f\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"fib.py")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\n\na, b = 0, 1\n\nwhile a < n:\n    print(a, end=' ')\n    a, b = b, a + b\n\nprint()\n")),(0,r.kt)("p",null,"\u3057\u304b\u3057\u3053\u306e\u72b6\u614b\u3067 ",(0,r.kt)("inlineCode",{parentName:"p"},"main.py")," \u304b\u3089 ",(0,r.kt)("inlineCode",{parentName:"p"},"import fib")," \u3092\u3059\u308b\u3068 import \u3057\u305f\u6642\u70b9\u3067\u30d5\u30a3\u30dc\u30ca\u30c3\u30c1\u6570\u5217\u3092\u51fa\u529b\u3059\u308b\u51e6\u7406\u304c\u7a81\u7136\u5b9f\u884c\u3055\u308c\u3066\u3057\u307e\u3044\u307e\u3059\u3002\u3053\u3046\u3044\u3063\u305f\u554f\u984c\u304c\u8d77\u3053\u3089\u306a\u3044\u3088\u3046\u306b\u30e2\u30b8\u30e5\u30fc\u30eb\u3068\u3057\u3066\u63d0\u4f9b\u3059\u308b\u6a5f\u80fd\u306f\u57fa\u672c\u7684\u306b\u95a2\u6570\u3084\u30af\u30e9\u30b9\u306b\u307e\u3068\u3081\u3066\u304a\u304f\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"from-import"},(0,r.kt)("inlineCode",{parentName:"h2"},"from-import")),(0,r.kt)("p",null,"\u30e2\u30b8\u30e5\u30fc\u30eb\u5185\u306e\u95a2\u6570\u3084\u30af\u30e9\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3068\u304d\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"\u30e2\u30b8\u30e5\u30fc\u30eb\u540d.\u95a2\u6570\u540d")," \u306e\u3088\u3046\u306b ",(0,r.kt)("inlineCode",{parentName:"p"},".")," \u3092\u4f7f\u3063\u3066\u30a2\u30af\u30bb\u30b9\u3057\u307e\u3059\u304c\u3001\u30e2\u30b8\u30e5\u30fc\u30eb\u540d\u3084\u95a2\u6570\u540d\u304c\u9577\u304f\u306a\u3063\u3066\u304f\u308b\u3068\u5c11\u3057\u66f8\u304d\u65b9\u304c\u9762\u5012\u306b\u306a\u308a\u307e\u3059\u3002\u3053\u3046\u3044\u3046\u3068\u304d\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"from")," \u6587\u3092\u4f7f\u3063\u3066\u53c2\u7167\u540d\u3092\u77ed\u304f\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from (\u30e2\u30b8\u30e5\u30fc\u30eb\u540d) import (\u95a2\u6570\u540d)\n")),(0,r.kt)("p",null,"\u3053\u306e\u3088\u3046\u306b\u3059\u308b\u3068 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u30e2\u30b8\u30e5\u30fc\u30eb\u540d.\u95a2\u6570\u540d")," \u3068\u3057\u3066\u3044\u305f\u3068\u3053\u308d\u304c ",(0,r.kt)("inlineCode",{parentName:"p"},"\u95a2\u6570\u540d")," \u3060\u3051\u3067\u53c2\u7167\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"#!/usr/bin/env python\n\n\nfrom fib import fib     # fib.py \u5185\u306e fib() \u3092\u30a4\u30f3\u30dd\u30fc\u30c8\n\n\ndef main():\n    fib(10)             # fib() \u3092\u547c\u3073\u51fa\u3059\n\n\nif __name__ == '__main__':\n    main()\n")),(0,r.kt)("p",null,"\u305f\u3060\u3057 ",(0,r.kt)("inlineCode",{parentName:"p"},"import fib")," \u3068\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u305f\u3068\u304d\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"fib.py")," \u5185\u306e\u3059\u3079\u3066\u306e\u95a2\u6570\u3084\u30af\u30e9\u30b9\u304c\u53c2\u7167\u3067\u304d\u308b\u306e\u306b\u5bfe\u3057\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"from fib import fib")," \u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"fib()")," \u306e\u307f\u304c\u53c2\u7167\u3067\u304d\u307e\u3059\u3002\u8907\u6570\u306e\u5b9a\u7fa9\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u305f\u3044\u3068\u304d\u306f\u6b21\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from (\u30e2\u30b8\u30e5\u30fc\u30eb\u540d) import (\u95a2\u6570\u540d), (\u95a2\u6570\u540d), ...\n")),(0,r.kt)("p",null,"\u30e2\u30b8\u30e5\u30fc\u30eb\u5185\u306e\u5168\u5b9a\u7fa9\u3092\u307e\u3068\u3081\u3066 ",(0,r.kt)("inlineCode",{parentName:"p"},"from")," \u3067\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u305f\u3051\u308c\u3070\u6b21\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from (\u30e2\u30b8\u30e5\u30fc\u30eb\u540d) import *\n")),(0,r.kt)("p",null,"\u305f\u3060\u3057\u3053\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u6587\u306f\u4f59\u8a08\u306a\u5b9a\u7fa9\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066\u3057\u307e\u3046\u6050\u308c\u304c\u3042\u308b\u305f\u3081\u63a8\u5968\u3055\u308c\u307e\u305b\u3093\u3002\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u65b9\u6cd5\u306f\u6b21\u306e\u512a\u5148\u5ea6\u3067\u691c\u8a0e\u3057\u3066\u4e0b\u3055\u3044\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u304a\u3059\u3059\u3081"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30a4\u30f3\u30dd\u30fc\u30c8\u6587"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\ude0d"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"import (\u30e2\u30b8\u30e5\u30fc\u30eb\u540d)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\ude03"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"from (\u30e2\u30b8\u30e5\u30fc\u30eb\u540d) import (\u95a2\u6570\u540d)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\ude16"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"from (\u30e2\u30b8\u30e5\u30fc\u30eb\u540d) import *"))))),(0,r.kt)("h2",{id:"__name__"},(0,r.kt)("inlineCode",{parentName:"h2"},"__name__")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"__name__")," \u306f Python \u3067\u4f7f\u7528\u3067\u304d\u308b\u96a0\u3057\u5909\u6570\u306e 1 \u3064\u3067\u3001\u30e2\u30b8\u30e5\u30fc\u30eb\u540d\u3092\u8868\u3059\u6587\u5b57\u5217\u304c\u5165\u3063\u3066\u3044\u307e\u3059\u3002\u4f8b\u3048\u3070 ",(0,r.kt)("inlineCode",{parentName:"p"},"foo.py")," \u3068\u3044\u3046\u30e2\u30b8\u30e5\u30fc\u30eb\u3067\u3042\u308c\u3070 ",(0,r.kt)("inlineCode",{parentName:"p"},"__name__")," \u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"'foo'")," \u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import foo\n\nprint(foo.__name__)     # 'foo'\n")),(0,r.kt)("p",null,"\u3057\u304b\u3057\u3053\u306e\u5909\u6570\u304c\u30e2\u30b8\u30e5\u30fc\u30eb\u540d\u306b\u306a\u308b\u306e\u306f\u5225\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u304b\u3089\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u305f\u3068\u304d\u3060\u3051\u3067\u3059\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"foo.py")," \u3092\u76f4\u63a5\u5b9f\u884c\u3057\u305f\u5834\u5408\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"__name__")," \u306b\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"'__main__'")," \u304c\u5165\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"foo.py")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"#!/usr/bin/env python\n\nprint(__name__)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ python foo.py\n__main__\n")),(0,r.kt)("p",null,"\u3064\u307e\u308a ",(0,r.kt)("inlineCode",{parentName:"p"},"__name__")," \u306e\u5024\u304c\u30e2\u30b8\u30e5\u30fc\u30eb\u540d\u306b\u306a\u308b\u306e\u304b ",(0,r.kt)("inlineCode",{parentName:"p"},"'__main__'")," \u306b\u306a\u308b\u306e\u304b\u3092\u898b\u308b\u3053\u3068\u3067\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u3088\u3046\u3068\u3057\u3066\u3044\u308b\u306e\u304b\u3069\u3046\u304b\u3092\u5224\u65ad\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/python/ch01/ch01-02-hello-world"},"Hello, World!")," \u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3067\u51fa\u3066\u304d\u305f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"if __name__ == '__main__':\n    main()\n")),(0,r.kt)("p",null,"\u3068\u3044\u3046\u69cb\u6587\u306f\u81ea\u5206\u304c\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u3066\u306a\u3044\u3068\u304d\u3060\u3051 ",(0,r.kt)("inlineCode",{parentName:"p"},"main()")," \u3092\u547c\u3073\u51fa\u3059\u3068\u3044\u3046\u610f\u5473\u306b\u306a\u308a\u307e\u3059\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"__name__")," \u306e\u5024\u3092\u898b\u308b\u3053\u3068\u3067 1 \u3064\u306e\u30d5\u30a1\u30a4\u30eb\u3067\u5b9f\u884c\u30b9\u30af\u30ea\u30d7\u30c8\u3068\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u4e21\u65b9\u3092\u5b9f\u88c5\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"))}d.isMDXComponent=!0}}]);