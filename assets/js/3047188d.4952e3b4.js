"use strict";(self.webpackChunkwebsite_with_docusaurus=self.webpackChunkwebsite_with_docusaurus||[]).push([[3118],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(t),d=r,h=c["".concat(p,".").concat(d)]||c[d]||f[d]||i;return t?a.createElement(h,l(l({ref:n},s),{},{components:t})):a.createElement(h,l({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1478:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const i={title:"\u51fd\u6570",description:"\u73af\u5883\u6784\u7b51",keywords:["\u5982\u4f55\u9605\u8bfb\u4e00\u672c\u4e66","\u8bfb\u4e66\u7b14\u8bb0"],tags:["\u9605\u8bfb"],author:"kevin",date:new Date("2022-10-12T00:00:00.000Z"),sidebar_position:2},l="\u95a2\u6570",o={unversionedId:"ch02/ch02-02-functions",id:"ch02/ch02-02-functions",title:"\u51fd\u6570",description:"\u73af\u5883\u6784\u7b51",source:"@site/python/ch02/ch02-02-functions.md",sourceDirName:"ch02",slug:"/ch02/ch02-02-functions",permalink:"/python/ch02/ch02-02-functions",draft:!1,tags:[{label:"\u9605\u8bfb",permalink:"/python/tags/\u9605\u8bfb"}],version:"current",lastUpdatedBy:"kevin",lastUpdatedAt:1669042846,formattedLastUpdatedAt:"2022\u5e7411\u670821\u65e5",sidebarPosition:2,frontMatter:{title:"\u51fd\u6570",description:"\u73af\u5883\u6784\u7b51",keywords:["\u5982\u4f55\u9605\u8bfb\u4e00\u672c\u4e66","\u8bfb\u4e66\u7b14\u8bb0"],tags:["\u9605\u8bfb"],author:"kevin",date:"2022-10-12T00:00:00.000Z",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u53d8\u91cf",permalink:"/python/ch02/ch02-01-variables"},next:{title:"\u6ce8\u91ca",permalink:"/python/ch02/ch02-03-comments"}},p={},u=[{value:"\u5f15\u6570",id:"\u5f15\u6570",level:2},{value:"\u30c7\u30d5\u30a9\u30eb\u30c8\u5f15\u6570",id:"\u30c7\u30d5\u30a9\u30eb\u30c8\u5f15\u6570",level:2},{value:"\u30ad\u30fc\u30ef\u30fc\u30c9\u5f15\u6570",id:"\u30ad\u30fc\u30ef\u30fc\u30c9\u5f15\u6570",level:2},{value:"<code>*args, **kwargs</code>",id:"args-kwargs",level:2},{value:"\u5f15\u6570\u306e\u30a2\u30f3\u30d1\u30c3\u30af",id:"\u5f15\u6570\u306e\u30a2\u30f3\u30d1\u30c3\u30af",level:2},{value:"\u578b\u30d2\u30f3\u30c8",id:"\u578b\u30d2\u30f3\u30c8",level:2},{value:"\u623b\u308a\u5024",id:"\u623b\u308a\u5024",level:2},{value:"\u7a7a\u5b9f\u88c5",id:"\u7a7a\u5b9f\u88c5",level:2}],s={toc:u};function f(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u95a2\u6570"},"\u95a2\u6570"),(0,r.kt)("p",null,"\u95a2\u6570\u3092\u5b9a\u7fa9\u3059\u308b\u306b\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"def")," \u30ad\u30fc\u30ef\u30fc\u30c9\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"#!/usr/bin/env python\n\n\ndef another_function():\n    print('Another function')\n\n\ndef main():\n    print('Hello, World!')\n\n    another_function()\n\n\nif __name__ == '__main__':\n    main()\n")),(0,r.kt)("p",null,"\u95a2\u6570\u540d\u306f\u81ea\u7531\u306b\u4e0e\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u304c\u3001\u6163\u7fd2\u7684\u306b\u82f1\u6570\u5b57\u304b\u3064 ",(0,r.kt)("em",{parentName:"p"},"snake_case")," \uff08\u5c0f\u6587\u5b57\u3092 ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," \u3067\u3064\u306a\u3050\u8a18\u6cd5\uff09\u3067\u8868\u8a18\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"!!! note\n\u95a2\u6570\u5b9a\u7fa9\u306e\u9593\u306f\u6163\u7fd2\u7684\u306b 2 \u884c\u958b\u3051\u308b\u30eb\u30fc\u30eb\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u5f15\u6570"},"\u5f15\u6570"),(0,r.kt)("p",null,"\u95a2\u6570\u306b\u306f\u5f15\u6570\u3092\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def another_function(x, y):\n    print(f'The value of x is {x}')\n    print(f'The value of y is {y}')\n\n\ndef main():\n    another_function(5, 6)\n")),(0,r.kt)("h2",{id:"\u30c7\u30d5\u30a9\u30eb\u30c8\u5f15\u6570"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u5f15\u6570"),(0,r.kt)("p",null,"\u95a2\u6570\u306b\u306f\u5f15\u6570\u3092\u660e\u793a\u7684\u306b\u6e21\u3055\u306a\u304b\u3063\u305f\u5834\u5408\u306b\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u3092\u6697\u9ed9\u7684\u306b\u6e21\u3059\u6a5f\u80fd\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def another_function(x, y=10):\n    print(f'The value of x is {x}')\n    print(f'The value of y is {y}')\n\n\ndef main():\n    another_functin(5, 3)   # x: 5, y: 3\n    another_functin(7)      # x: 7, y: 10\n")),(0,r.kt)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u5f15\u6570\u306f\u5f15\u6570\u5185\u3067\u4e00\u756a\u6700\u5f8c\u306b\u6e21\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# OK\ndef f1(x, y=10):\n    print(f'The value of x is {x}')\n    print(f'The value of y is {y}')\n\n\n# OK\ndef f2(x, y=10, z=20):\n    print(f'The value of x is {x}')\n    print(f'The value of y is {y}')\n    print(f'The value of z is {z}')\n\n\n# NG\ndef f3(y=10, x, z=20):\n    print(f'The value of x is {x}')\n    print(f'The value of y is {y}')\n    print(f'The value of z is {z}')\n")),(0,r.kt)("p",null,"!!! note\n\u30c7\u30d5\u30a9\u30eb\u30c8\u5f15\u6570\u306e\u5b9a\u7fa9\u306f\u6163\u7fd2\u7684\u306b ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," \u306e\u4e21\u7aef\u306b\u306f\u30b9\u30da\u30fc\u30b9\u3092\u5165\u308c\u305a\u306b\u66f8\u304d\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u30ad\u30fc\u30ef\u30fc\u30c9\u5f15\u6570"},"\u30ad\u30fc\u30ef\u30fc\u30c9\u5f15\u6570"),(0,r.kt)("p",null,"\u95a2\u6570\u3092\u547c\u3073\u51fa\u3059\u3068\u304d\u306b\u5f15\u6570\u540d\u3092\u6307\u5b9a\u3059\u308c\u3070\u5f15\u6570\u3092\u9806\u4e0d\u540c\u3067\u6e21\u3059\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'hl_lines="7"',hl_lines:'"7"'},"def another_function(x, y):\n    print(f'The value of x is {x}')\n    print(f'The value of y is {y}')\n\n\ndef main():\n    another_function(y=10, x=20)\n")),(0,r.kt)("h2",{id:"args-kwargs"},(0,r.kt)("inlineCode",{parentName:"h2"},"*args, **kwargs")),(0,r.kt)("p",null,"\u95a2\u6570\u306e\u5f15\u6570\u540d\u306b ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," \u304c\u4ed8\u3044\u305f\u3082\u306e\u304c\u3042\u308b\u3068\u3001\u305d\u306e\u5909\u6570\u306f\u8907\u6570\u306e\u5f15\u6570\u3092 1 \u3064\u306e\u30bf\u30d7\u30eb\u3068\u3057\u3066\u53d7\u3051\u53d6\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def another_function(x, *args):\n    print(f'The value of x is {x}')         # x: 0\n    print(f'The value of args is {args}')   # args: (1, 2, 3)\n\n\ndef main():\n    another_function(0, 1, 2, 3)\n")),(0,r.kt)("p",null,"\u307e\u305f\u5f15\u6570\u540d\u306b ",(0,r.kt)("inlineCode",{parentName:"p"},"**")," \u3092\u4ed8\u3051\u308b\u3068\u8907\u6570\u306e\u30ad\u30fc\u30ef\u30fc\u30c9\u5f15\u6570\u3092 1 \u3064\u306e\u8f9e\u66f8\u3068\u3057\u3066\u53d7\u3051\u53d6\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def another_function(x, **kwargs):\n    print(f'The value of x is {x}')             # x: 0\n    print(f'The value of kwargs is {kwargs}')   # kwargs: {'y': 10, 'z': 20}\n\n\ndef main():\n    another_function(0, y=10, z=20)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"*args, **kwargs")," \u306f\u4f75\u7528\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def another_function(x, *args, **kwargs):\n    print(f'The value of x is {x}')             # x: 0\n    print(f'The value of args is {args}')       # args: (1, 2)\n    print(f'The value of kwargs is {kwargs}')   # kwargs: {'y': 10, 'z': 20}\n\n\ndef main():\n    another_function(0, 1, 2, y=10, z=20)\n")),(0,r.kt)("p",null,"!!! note\n",(0,r.kt)("inlineCode",{parentName:"p"},"*")," \u5f15\u6570\u3068 ",(0,r.kt)("inlineCode",{parentName:"p"},"**")," \u5f15\u6570\u306f\u3069\u306e\u3088\u3046\u306a\u540d\u524d\u306b\u3057\u3066\u3082\u69cb\u3044\u307e\u305b\u3093\u304c\u3001\u6163\u7fd2\u7684\u306b ",(0,r.kt)("inlineCode",{parentName:"p"},"*args, **kwargs")," \u304c\u4f7f\u308f\u308c\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u5f15\u6570\u306e\u30a2\u30f3\u30d1\u30c3\u30af"},"\u5f15\u6570\u306e\u30a2\u30f3\u30d1\u30c3\u30af"),(0,r.kt)("p",null,"\u95a2\u6570\u306b\u5f15\u6570\u3092\u6e21\u3059\u3068\u304d\u306b\u30bf\u30d7\u30eb\u306b ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," \u3092\u4ed8\u3051\u3066\u6e21\u3059\u3068\u30bf\u30d7\u30eb\u306e\u5404\u8981\u7d20\u3092\u500b\u5225\u306e\u5f15\u6570\u3068\u3057\u3066\u6e21\u305b\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def another_function(x, y, z):\n    print(f'The value of x is {x}')     # x: 0\n    print(f'The value of y is {y}')     # y: 1\n    print(f'The value of z is {z}')     # z: 2\n\n\ndef main():\n    args = (0, 1, 2)\n    another_function(*args)             # another_function(0, 1, 2)\n")),(0,r.kt)("p",null,"\u307e\u305f\u8f9e\u66f8\u306b ",(0,r.kt)("inlineCode",{parentName:"p"},"**")," \u3092\u4ed8\u3051\u3066\u6e21\u3059\u3068\u8f9e\u66f8\u306e\u5404\u8981\u7d20\u3092\u30ad\u30fc\u30ef\u30fc\u30c9\u5f15\u6570\u3068\u3057\u3066\u6e21\u305b\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def another_function(x, y, z):\n    print(f'The value of x is {x}')     # x: 0\n    print(f'The value of y is {y}')     # y: 1\n    print(f'The value of z is {z}')     # z: 2\n\n\ndef main():\n    kwargs = {'x': 0, 'y': 1, 'z': 2}\n    another_function(**kwargs)          # another_function(x=0, y=1, z=2)\n")),(0,r.kt)("h2",{id:"\u578b\u30d2\u30f3\u30c8"},"\u578b\u30d2\u30f3\u30c8"),(0,r.kt)("p",null,"\u5f15\u6570\u306b\u7279\u5b9a\u306e\u578b\u3060\u3051\u3092\u6e21\u305b\u308b\u3088\u3046\u306b\u3057\u305f\u3051\u308c\u3070 ",(0,r.kt)("strong",{parentName:"p"},"\u578b\u30d2\u30f3\u30c8")," \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def another_function(x: int, y: int):\n    print(f'The value of x * y is {x * y}')\n")),(0,r.kt)("p",null,"\u578b\u30d2\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u306a\u3051\u308c\u3070\u3069\u3093\u306a\u578b\u306e\u5909\u6570\u3082\u6e21\u305b\u307e\u3059\u3002\u3053\u308c\u306f\u3057\u3070\u3057\u3070\u6df7\u4e71\u306e\u5143\u3068\u306a\u308b\u306e\u3067\u3001\u306a\u308b\u3079\u304f\u578b\u30d2\u30f3\u30c8\u3092\u4f7f\u3046\u3088\u3046\u306b\u3057\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("h2",{id:"\u623b\u308a\u5024"},"\u623b\u308a\u5024"),(0,r.kt)("p",null,"\u95a2\u6570\u306e\u547c\u3073\u51fa\u3057\u5074\u306b\u5024\u3092\u8fd4\u5374\u3059\u308b\u5834\u5408\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def plus_one(x):\n    return x + 1\n\n\ndef main():\n    x = plus_one(5)     # x: 6\n\n    print(f'The value of x is {x}')\n")),(0,r.kt)("p",null,"\u623b\u308a\u5024\u3068\u3057\u3066\u8fd4\u3059\u578b\u306f\u8907\u6570\u3042\u3063\u3066\u3082\u69cb\u3044\u307e\u305b\u3093\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def another_function(x):\n    if x == 0:\n        return x + 3.14\n    else:\n        return x + 1\n")),(0,r.kt)("p",null,"\u3053\u306e\u95a2\u6570\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," \u304c ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," \u306e\u3068\u304d\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"float")," \u578b\u3092\u8fd4\u3057\u3001\u305d\u3046\u3067\u306a\u3044\u3068\u304d\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," \u578b\u3092\u8fd4\u3057\u307e\u3059\u3002\u8907\u6570\u306e\u578b\u3092\u8fd4\u3059\u3053\u3068\u3092\u60f3\u5b9a\u3057\u3066\u306a\u3051\u308c\u3070\u3001\u578b\u30d2\u30f3\u30c8\u3092\u4f7f\u3046\u3053\u3068\u3067\u8aa4\u3063\u3066\u610f\u56f3\u3057\u306a\u3044\u578b\u3092\u8fd4\u5374\u3057\u3066\u3057\u307e\u3046\u3053\u3068\u3092\u9632\u3050\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def plus_one(x: int) -> int:\n    return x + 1\n")),(0,r.kt)("p",null,"Python \u306e\u95a2\u6570\u306f\u5fc5\u305a\u623b\u308a\u5024\u3092\u6301\u3063\u3066\u304a\u308a\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"return")," \u3092\u660e\u793a\u7684\u306b\u4f7f\u308f\u306a\u304b\u3063\u305f\u5834\u5408\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," \u304c\u8fd4\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def f(x):\n    print(f'The value of x is {x}')\n")),(0,r.kt)("p",null,"\u3053\u306e\u95a2\u6570\u306f\u4e0b\u8a18\u3068\u540c\u3058\u610f\u5473\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def f(x):\n    print(f'The value of x is {x}')\n    return None\n")),(0,r.kt)("h2",{id:"\u7a7a\u5b9f\u88c5"},"\u7a7a\u5b9f\u88c5"),(0,r.kt)("p",null,"\u95a2\u6570\u306e\u5b9f\u88c5\u3092\u7a7a\u306b\u3057\u305f\u3044\u5834\u5408\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"pass")," \u3068\u66f8\u3044\u3066\u304a\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# \u4f55\u3082\u3057\u306a\u3044\u95a2\u6570\ndef empty_function():\n    pass\n")))}f.isMDXComponent=!0}}]);