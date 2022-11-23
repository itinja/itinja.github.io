"use strict";(self.webpackChunkwebsite_with_docusaurus=self.webpackChunkwebsite_with_docusaurus||[]).push([[7088],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var i=r.createContext({}),m=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),k=m(n),u=p,y=k["".concat(i,".").concat(u)]||k[u]||d[u]||a;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function u(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,l=new Array(a);l[0]=k;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:p,l[1]=o;for(var m=2;m<a;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var r=n(7462),p=(n(7294),n(3905));const a={},l="poetry",o={unversionedId:"ch04/ch04-06-poetry",id:"ch04/ch04-06-poetry",title:"poetry",description:"poetry \u306f pipenv\u3068\u540c\u69d8\u306e\u8ab2\u984c\u3092\u89e3\u6c7a\u3059\u308b\u305f\u3081\u306b\u4f5c\u3089\u308c\u305f\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u88fd\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u7ba1\u7406\u30c4\u30fc\u30eb\u3067\u3059\u3002",source:"@site/python/ch04/ch04-06-poetry.md",sourceDirName:"ch04",slug:"/ch04/ch04-06-poetry",permalink:"/python/ch04/ch04-06-poetry",draft:!1,tags:[],version:"current",lastUpdatedBy:"kevin",lastUpdatedAt:1669042846,formattedLastUpdatedAt:"2022\u5e7411\u670821\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pipenv",permalink:"/python/ch04/ch04-05-pipenv"},next:{title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u69cb\u6210",permalink:"/python/ch04/ch04-07-project-structures"}},i={},m=[{value:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"\u4f7f\u3044\u65b9",id:"\u4f7f\u3044\u65b9",level:2},{value:"pyproject.toml \u3068 poetry.lock",id:"pyprojecttoml-\u3068-poetrylock",level:2},{value:"pipenv \u3068\u306e\u9055\u3044",id:"pipenv-\u3068\u306e\u9055\u3044",level:2}],c={toc:m};function d(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"poetry"},"poetry"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"poetry")," \u306f ",(0,p.kt)("inlineCode",{parentName:"p"},"pipenv"),"\u3068\u540c\u69d8\u306e\u8ab2\u984c\u3092\u89e3\u6c7a\u3059\u308b\u305f\u3081\u306b\u4f5c\u3089\u308c\u305f\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u88fd\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u7ba1\u7406\u30c4\u30fc\u30eb\u3067\u3059\u3002"),(0,p.kt)("p",null,'!!! note "poetry \u516c\u5f0f\u30b5\u30a4\u30c8"\n',(0,p.kt)("a",{parentName:"p",href:"https://python-poetry.org/"},"https://python-poetry.org/")),(0,p.kt)("p",null,"poetry \u3092\u4f7f\u3063\u305f\u5834\u5408\u306e\u4eee\u60f3\u74b0\u5883\u306e\u4f5c\u6210\u304b\u3089\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u307e\u3067\u306e\u624b\u9806\u306f\u4e0b\u8a18\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c"),(0,p.kt)("th",{parentName:"tr",align:null},"\u30b3\u30de\u30f3\u30c9"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"\u4eee\u60f3\u74b0\u5883\u306e\u4f5c\u6210"),(0,p.kt)("td",{parentName:"tr",align:null},"\u306a\u3057\uff08\u6697\u9ed9\u7684\u306b\u4f5c\u3089\u308c\u308b\uff09")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"\u4eee\u60f3\u74b0\u5883\u3092\u6709\u52b9\u306b\u3059\u308b"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"poetry shell"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"\u4eee\u60f3\u74b0\u5883\u3092\u7121\u52b9\u306b\u3059\u308b"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"exit"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"poetry add [name]"))))),(0,p.kt)("h2",{id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"poetry")," \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306f\u4e0b\u8a18\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,p.kt)("p",null,'=== "macOS"'),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"```shell\n$ curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python3\n```\n")),(0,p.kt)("p",null,'=== "Windows"'),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"PowerShell \u4e0a\u3067\u4e0b\u8a18\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\n\n```shell\n(Invoke-WebRequest -Uri https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py -UseBasicParsing).Content | python3\n```\n")),(0,p.kt)("h2",{id:"\u4f7f\u3044\u65b9"},"\u4f7f\u3044\u65b9"),(0,p.kt)("p",null,"\u307e\u305a\u4f5c\u696d\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u7528\u610f\u3057\u307e\u3059\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ mkdir sandbox\n")),(0,p.kt)("p",null,"\u6b21\u306b poetry \u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u751f\u6210\u3059\u308b\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ poetry init -n\n")),(0,p.kt)("p",null,"\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3068 ",(0,p.kt)("inlineCode",{parentName:"p"},"pyproject.toml")," \u3068\u3044\u3046\u30d5\u30a1\u30a4\u30eb\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"),(0,p.kt)("p",null,"\u6b21\u306b ",(0,p.kt)("inlineCode",{parentName:"p"},"pipenv")," \u306e\u3068\u304d\u3068\u540c\u69d8\u306b ",(0,p.kt)("inlineCode",{parentName:"p"},"requests")," \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u307f\u307e\u3059\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ poetry add requests\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pipenv")," \u306e\u4f7f\u3044\u65b9\u3067\u4f7f\u7528\u3057\u305f\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b\u306b\u306f\u4e0b\u8a18\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ poetry shell\n(.venv) $ python main.py\n")),(0,p.kt)("p",null,"\u4e0a\u8a18\u306e 2 \u884c\u306e\u30b3\u30de\u30f3\u30c9\u306f\u6b21\u306e\u3088\u3046\u306b 1 \u884c\u3067\u5b9f\u884c\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ poetry run python main.py\n")),(0,p.kt)("h2",{id:"pyprojecttoml-\u3068-poetrylock"},"pyproject.toml \u3068 poetry.lock"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pyproject.toml")," \u306f poetry \u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3067\u3059\u3002",(0,p.kt)("inlineCode",{parentName:"p"},"pipenv")," \u3067\u3044\u3046\u3068\u3053\u308d\u306e ",(0,p.kt)("inlineCode",{parentName:"p"},"Pipfile")," \u3068\u540c\u3058\u4f4d\u7f6e\u3065\u3051\u306e\u30d5\u30a1\u30a4\u30eb\u306b\u306a\u308a\u307e\u3059\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"pyproject.toml")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-toml"},'[tool.poetry]\nname = "sandbox"\nversion = "0.1.0"\ndescription = ""\nauthors = ["..."]\n\n[tool.poetry.dependencies]\npython = "^3.6"\nrequests = "^2.24.0"\n\n[tool.poetry.dev-dependencies]\n\n[build-system]\nrequires = ["poetry>=0.12"]\nbuild-backend = "poetry.masonry.api"\n')),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"poetry.lock")," \u306f\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4fdd\u5b58\u3057\u3066\u3044\u308b\u30d5\u30a1\u30a4\u30eb\u3067\u3059\u3002",(0,p.kt)("inlineCode",{parentName:"p"},"pipenv")," \u3067\u3044\u3046\u3068\u3053\u308d\u306e ",(0,p.kt)("inlineCode",{parentName:"p"},"Pipfile.lock")," \u3068\u540c\u3058\u4f4d\u7f6e\u3065\u3051\u306e\u30d5\u30a1\u30a4\u30eb\u306b\u306a\u308a\u307e\u3059\u3002"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pipenv")," \u306e\u5834\u5408 ",(0,p.kt)("inlineCode",{parentName:"p"},"Pipfile")," \u3084 ",(0,p.kt)("inlineCode",{parentName:"p"},"Pipfile.lock")," \u306e\u5185\u5bb9\u3092\u3082\u3068\u306b\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u306b\u306f\u4e0b\u8a18\u306e\u3088\u3046\u306b\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u3044\u5206\u3051\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3057\u305f\u3002"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"\u4f7f\u7528\u30d5\u30a1\u30a4\u30eb"),(0,p.kt)("th",{parentName:"tr",align:null},"\u30b3\u30de\u30f3\u30c9"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"Pipfile")),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"pipenv install"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"Pipfile.lock")),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"pipenv sync"))))),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"poetry")," \u306b\u3082\u540c\u7b49\u306e\u6a5f\u80fd\u304c\u3042\u308b\u306e\u3067\u3059\u304c ",(0,p.kt)("inlineCode",{parentName:"p"},"pyproject.toml")," \u306e\u5185\u5bb9\u3092\u3082\u3068\u306b\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5834\u5408\u3082 ",(0,p.kt)("inlineCode",{parentName:"p"},"poetry.lock")," \u306e\u5185\u5bb9\u3092\u3082\u3068\u306b\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5834\u5408\u3082\u30b3\u30de\u30f3\u30c9\u306f\u540c\u3058\u3067\u3059\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ poetry install\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pyproject.toml")," \u3068 ",(0,p.kt)("inlineCode",{parentName:"p"},"poetry.lock")," \u306e\u4e21\u65b9\u304c\u3042\u308b\u5834\u5408\u306f ",(0,p.kt)("inlineCode",{parentName:"p"},"poetry.lock")," \u306e\u5185\u5bb9\u304c\u512a\u5148\u3055\u308c\u308b\u3068\u3044\u3046\u4ed5\u7d44\u307f\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,p.kt)("h2",{id:"pipenv-\u3068\u306e\u9055\u3044"},"pipenv \u3068\u306e\u9055\u3044"),(0,p.kt)("p",null,"\u8a73\u7d30\u306f\u5272\u611b\u3057\u307e\u3059\u304c ",(0,p.kt)("inlineCode",{parentName:"p"},"poetry")," \u306e\u65b9\u304c ",(0,p.kt)("inlineCode",{parentName:"p"},"pipenv")," \u3088\u308a\u3082\u6a5f\u80fd\u304c\u8c4a\u5bcc\u3067\u3059\u3002\u307e\u305f ",(0,p.kt)("inlineCode",{parentName:"p"},"pyproject.toml")," \u306f ",(0,p.kt)("inlineCode",{parentName:"p"},"poetry")," \u5c02\u7528\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3067\u306f\u306a\u304f Python \u304c\u516c\u5f0f\u306b\u7b56\u5b9a\u3057\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u7ba1\u7406\u7528\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306b\u306a\u3063\u3066\u3044\u308b\u305f\u3081\u3001\u4ed6\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u7ba1\u7406\u30c4\u30fc\u30eb\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3068\u3057\u3066\u3082\u4f7f\u308f\u308c\u307e\u3059\u3002",(0,p.kt)("inlineCode",{parentName:"p"},"pip")," \u3082\u65b0\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u3067\u306f ",(0,p.kt)("inlineCode",{parentName:"p"},"pyproject.toml")," \u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"))}d.isMDXComponent=!0}}]);