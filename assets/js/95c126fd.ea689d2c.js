"use strict";(self.webpackChunkwebsite_with_docusaurus=self.webpackChunkwebsite_with_docusaurus||[]).push([[9320],{3905:(n,e,t)=>{t.d(e,{Zo:()=>m,kt:()=>d});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var l=r.createContext({}),s=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},m=function(n){var e=s(n.components);return r.createElement(l.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,l=n.parentName,m=p(n,["components","mdxType","originalType","parentName"]),c=s(t),d=a,g=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return t?r.createElement(g,i(i({ref:e},m),{},{components:t})):r.createElement(g,i({ref:e},m))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,i=new Array(o);i[0]=c;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=n,p.mdxType="string"==typeof n?n:a,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},771:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={},i="\u8fdb\u7a0b",p={unversionedId:"python13/3",id:"python13/3",title:"\u8fdb\u7a0b",description:"Python \u4e2d\u7684\u591a\u7ebf\u7a0b\u5176\u5b9e\u5e76\u4e0d\u662f\u771f\u6b63\u7684\u591a\u7ebf\u7a0b\uff0c\u5982\u679c\u60f3\u8981\u5145\u5206\u5730\u4f7f\u7528\u591a\u6838 CPU \u7684\u8d44\u6e90\uff0c\u5728 Python \u4e2d\u5927\u90e8\u5206\u60c5\u51b5\u9700\u8981\u4f7f\u7528\u591a\u8fdb\u7a0b\u3002",source:"@site/back/PythonBasis/python13/3.md",sourceDirName:"python13",slug:"/python13/3",permalink:"/pythonbasis/python13/3",draft:!1,tags:[],version:"current",lastUpdatedBy:"kevin",lastUpdatedAt:1668420632,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u591a\u7ebf\u7a0b\u7f16\u7a0b",permalink:"/pythonbasis/python13/2"},next:{title:"\u524d\u8a00",permalink:"/pythonbasis/python13/Preface"}},l={},s=[{value:"1\u3001\u7c7b Process",id:"1\u7c7b-process",level:2},{value:"2\u3001\u628a\u8fdb\u7a0b\u521b\u5efa\u6210\u7c7b",id:"2\u628a\u8fdb\u7a0b\u521b\u5efa\u6210\u7c7b",level:2},{value:"3\u3001daemon \u5c5e\u6027",id:"3daemon-\u5c5e\u6027",level:2},{value:"4\u3001join \u65b9\u6cd5",id:"4join-\u65b9\u6cd5",level:2},{value:"5\u3001Pool",id:"5pool",level:2},{value:"6\u3001\u8fdb\u7a0b\u95f4\u901a\u4fe1",id:"6\u8fdb\u7a0b\u95f4\u901a\u4fe1",level:2}],m={toc:s};function u(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8fdb\u7a0b"},"\u8fdb\u7a0b"),(0,a.kt)("p",null,"Python \u4e2d\u7684\u591a\u7ebf\u7a0b\u5176\u5b9e\u5e76\u4e0d\u662f\u771f\u6b63\u7684\u591a\u7ebf\u7a0b\uff0c\u5982\u679c\u60f3\u8981\u5145\u5206\u5730\u4f7f\u7528\u591a\u6838 CPU \u7684\u8d44\u6e90\uff0c\u5728 Python \u4e2d\u5927\u90e8\u5206\u60c5\u51b5\u9700\u8981\u4f7f\u7528\u591a\u8fdb\u7a0b\u3002"),(0,a.kt)("p",null,"Python \u63d0\u4f9b\u4e86\u975e\u5e38\u597d\u7528\u7684\u591a\u8fdb\u7a0b\u5305 multiprocessing\uff0c\u53ea\u9700\u8981\u5b9a\u4e49\u4e00\u4e2a\u51fd\u6570\uff0cPython \u4f1a\u5b8c\u6210\u5176\u4ed6\u6240\u6709\u4e8b\u60c5\u3002"),(0,a.kt)("p",null,"\u501f\u52a9\u8fd9\u4e2a\u5305\uff0c\u53ef\u4ee5\u8f7b\u677e\u5b8c\u6210\u4ece\u5355\u8fdb\u7a0b\u5230\u5e76\u53d1\u6267\u884c\u7684\u8f6c\u6362\u3002multiprocessing \u652f\u6301\u5b50\u8fdb\u7a0b\u3001\u901a\u4fe1\u548c\u5171\u4eab\u6570\u636e\u3001\u6267\u884c\u4e0d\u540c\u5f62\u5f0f\u7684\u540c\u6b65\uff0c\u63d0\u4f9b\u4e86 Process\u3001Queue\u3001Pipe\u3001Lock \u7b49\u7ec4\u4ef6\u3002"),(0,a.kt)("h2",{id:"1\u7c7b-process"},"1\u3001\u7c7b Process"),(0,a.kt)("p",null,"\u521b\u5efa\u8fdb\u7a0b\u7684\u7c7b\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"Process([group [, target [, name [, args [, kwargs]]]]])")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"target \u8868\u793a\u8c03\u7528\u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ul"},"args \u8868\u793a\u8c03\u7528\u5bf9\u8c61\u7684\u4f4d\u7f6e\u53c2\u6570\u5143\u7ec4"),(0,a.kt)("li",{parentName:"ul"},"kwargs\u8868\u793a\u8c03\u7528\u5bf9\u8c61\u7684\u5b57\u5178"),(0,a.kt)("li",{parentName:"ul"},"name\u4e3a\u522b\u540d"),(0,a.kt)("li",{parentName:"ul"},"group\u5b9e\u8d28\u4e0a\u4e0d\u4f7f\u7528")),(0,a.kt)("p",null,"\u4e0b\u9762\u770b\u4e00\u4e2a\u521b\u5efa\u51fd\u6570\u5e76\u5c06\u5176\u4f5c\u4e3a\u591a\u4e2a\u8fdb\u7a0b\u7684\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"#!/usr/bin/env python3\n# -*- coding: UTF-8 -*-\n\nimport multiprocessing\nimport time\n\n\ndef worker(interval, name):\n    print(name + '\u3010start\u3011')\n    time.sleep(interval)\n    print(name + '\u3010end\u3011')\n\n\nif __name__ == \"__main__\":\n    p1 = multiprocessing.Process(target=worker, args=(2, '\u4e24\u70b9\u6c341'))\n    p2 = multiprocessing.Process(target=worker, args=(3, '\u4e24\u70b9\u6c342'))\n    p3 = multiprocessing.Process(target=worker, args=(4, '\u4e24\u70b9\u6c343'))\n\n    p1.start()\n    p2.start()\n    p3.start()\n\n    print(\"The number of CPU is:\" + str(multiprocessing.cpu_count()))\n    for p in multiprocessing.active_children():\n        print(\"child   p.name:\" + p.name + \"\\tp.id\" + str(p.pid))\n    print(\"END!!!!!!!!!!!!!!!!!\")\n\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u7684\u7ed3\u679c\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-10-14-%E5%A4%9A%E8%BF%9B%E7%A8%8B%E8%BE%93%E5%87%BA%E7%BB%93%E6%9E%9C.gif",alt:null})),(0,a.kt)("h2",{id:"2\u628a\u8fdb\u7a0b\u521b\u5efa\u6210\u7c7b"},"2\u3001\u628a\u8fdb\u7a0b\u521b\u5efa\u6210\u7c7b"),(0,a.kt)("p",null,"\u5f53\u7136\u6211\u4eec\u4e5f\u53ef\u4ee5\u628a\u8fdb\u7a0b\u521b\u5efa\u6210\u4e00\u4e2a\u7c7b\uff0c\u5982\u4e0b\u9762\u7684\u4f8b\u5b50\uff0c\u5f53\u8fdb\u7a0b p \u8c03\u7528 start() \u65f6\uff0c\u81ea\u52a8\u8c03\u7528 run() \u65b9\u6cd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# -*- coding: UTF-8 -*-\n\nimport multiprocessing\nimport time\n\n\nclass ClockProcess(multiprocessing.Process):\n    def __init__(self, interval):\n        multiprocessing.Process.__init__(self)\n        self.interval = interval\n\n    def run(self):\n        n = 5\n        while n > 0:\n            print(\"\u5f53\u524d\u65f6\u95f4: {0}\".format(time.ctime()))\n            time.sleep(self.interval)\n            n -= 1\n\n\nif __name__ == '__main__':\n    p = ClockProcess(3)\n    p.start()\n\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-10-14-%E5%88%9B%E5%BB%BA%E8%BF%9B%E7%A8%8B%E7%B1%BB.gif",alt:null})),(0,a.kt)("h2",{id:"3daemon-\u5c5e\u6027"},"3\u3001daemon \u5c5e\u6027"),(0,a.kt)("p",null,"\u60f3\u77e5\u9053 daemon \u5c5e\u6027\u6709\u4ec0\u4e48\u7528\uff0c\u770b\u4e0b\u4e0b\u9762\u4e24\u4e2a\u4f8b\u5b50\u5427\uff0c\u4e00\u4e2a\u52a0\u4e86 daemon \u5c5e\u6027\uff0c\u4e00\u4e2a\u6ca1\u6709\u52a0\uff0c\u5bf9\u6bd4\u8f93\u51fa\u7684\u7ed3\u679c\uff1a"),(0,a.kt)("p",null,"\u6ca1\u6709\u52a0 deamon \u5c5e\u6027\u7684\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# -*- coding: UTF-8 -*-\nimport multiprocessing\nimport time\n\n\ndef worker(interval):\n    print('\u5de5\u4f5c\u5f00\u59cb\u65f6\u95f4\uff1a{0}'.format(time.ctime()))\n    time.sleep(interval)\n    print('\u5de5\u4f5c\u7ed3\u679c\u65f6\u95f4\uff1a{0}'.format(time.ctime()))\n\n\nif __name__ == '__main__':\n    p = multiprocessing.Process(target=worker, args=(3,))\n    p.start()\n    print('\u3010EMD\u3011')\n\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"\u3010EMD\u3011\n\u5de5\u4f5c\u5f00\u59cb\u65f6\u95f4\uff1aMon Oct  9 17:47:06 2017\n\u5de5\u4f5c\u7ed3\u679c\u65f6\u95f4\uff1aMon Oct  9 17:47:09 2017\n")),(0,a.kt)("p",null,"\u5728\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u8fdb\u7a0b p \u6dfb\u52a0 daemon \u5c5e\u6027\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# -*- coding: UTF-8 -*-\n\nimport multiprocessing\nimport time\n\n\ndef worker(interval):\n    print('\u5de5\u4f5c\u5f00\u59cb\u65f6\u95f4\uff1a{0}'.format(time.ctime()))\n    time.sleep(interval)\n    print('\u5de5\u4f5c\u7ed3\u679c\u65f6\u95f4\uff1a{0}'.format(time.ctime()))\n\n\nif __name__ == '__main__':\n    p = multiprocessing.Process(target=worker, args=(3,))\n    p.daemon = True\n    p.start()\n    print('\u3010EMD\u3011')\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"\u3010EMD\u3011\n")),(0,a.kt)("p",null,"\u6839\u636e\u8f93\u51fa\u7ed3\u679c\u53ef\u89c1\uff0c\u5982\u679c\u5728\u5b50\u8fdb\u7a0b\u4e2d\u6dfb\u52a0\u4e86 daemon \u5c5e\u6027\uff0c\u90a3\u4e48\u5f53\u4e3b\u8fdb\u7a0b\u7ed3\u675f\u7684\u65f6\u5019\uff0c\u5b50\u8fdb\u7a0b\u4e5f\u4f1a\u8ddf\u7740\u7ed3\u675f\u3002\u6240\u4ee5\u6ca1\u6709\u6253\u5370\u5b50\u8fdb\u7a0b\u7684\u4fe1\u606f\u3002"),(0,a.kt)("h2",{id:"4join-\u65b9\u6cd5"},"4\u3001join \u65b9\u6cd5"),(0,a.kt)("p",null,"\u7ed3\u5408\u4e0a\u9762\u7684\u4f8b\u5b50\u7ee7\u7eed\uff0c\u5982\u679c\u6211\u4eec\u60f3\u8981\u8ba9\u5b50\u7ebf\u7a0b\u6267\u884c\u5b8c\u8be5\u600e\u4e48\u505a\u5462\uff1f"),(0,a.kt)("p",null,"\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u7528\u5230 join \u65b9\u6cd5\uff0cjoin \u65b9\u6cd5\u7684\u4e3b\u8981\u4f5c\u7528\u662f\uff1a\u963b\u585e\u5f53\u524d\u8fdb\u7a0b\uff0c\u76f4\u5230\u8c03\u7528 join \u65b9\u6cd5\u7684\u90a3\u4e2a\u8fdb\u7a0b\u6267\u884c\u5b8c\uff0c\u518d\u7ee7\u7eed\u6267\u884c\u5f53\u524d\u8fdb\u7a0b\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\u770b\u4e0b\u52a0\u4e86 join \u65b9\u6cd5\u7684\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import multiprocessing\nimport time\n\n\ndef worker(interval):\n    print('\u5de5\u4f5c\u5f00\u59cb\u65f6\u95f4\uff1a{0}'.format(time.ctime()))\n    time.sleep(interval)\n    print('\u5de5\u4f5c\u7ed3\u679c\u65f6\u95f4\uff1a{0}'.format(time.ctime()))\n\n\nif __name__ == '__main__':\n    p = multiprocessing.Process(target=worker, args=(3,))\n    p.daemon = True\n    p.start()\n    p.join()\n    print('\u3010EMD\u3011')\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u7684\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"\u5de5\u4f5c\u5f00\u59cb\u65f6\u95f4\uff1aTue Oct 10 11:30:08 2017\n\u5de5\u4f5c\u7ed3\u679c\u65f6\u95f4\uff1aTue Oct 10 11:30:11 2017\n\u3010EMD\u3011\n")),(0,a.kt)("h2",{id:"5pool"},"5\u3001Pool"),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u5f88\u591a\u7684\u5b50\u8fdb\u7a0b\uff0c\u96be\u9053\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u4e00\u4e2a\u7684\u53bb\u521b\u5efa\u5417\uff1f"),(0,a.kt)("p",null,"\u5f53\u7136\u4e0d\u7528\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u8fdb\u7a0b\u6c60\u7684\u65b9\u6cd5\u6279\u91cf\u521b\u5efa\u5b50\u8fdb\u7a0b\u3002"),(0,a.kt)("p",null,"\u4f8b\u5b50\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# -*- coding: UTF-8 -*-\n\nfrom multiprocessing import Pool\nimport os, time, random\n\n\ndef long_time_task(name):\n    print('\u8fdb\u7a0b\u7684\u540d\u79f0\uff1a{0} \uff1b\u8fdb\u7a0b\u7684PID: {1} '.format(name, os.getpid()))\n    start = time.time()\n    time.sleep(random.random() * 3)\n    end = time.time()\n    print('\u8fdb\u7a0b {0} \u8fd0\u884c\u4e86 {1} \u79d2'.format(name, (end - start)))\n\n\nif __name__ == '__main__':\n    print('\u4e3b\u8fdb\u7a0b\u7684 PID\uff1a{0}'.format(os.getpid()))\n    p = Pool(4)\n    for i in range(6):\n        p.apply_async(long_time_task, args=(i,))\n    p.close()\n    # \u7b49\u5f85\u6240\u6709\u5b50\u8fdb\u7a0b\u7ed3\u675f\u540e\u5728\u5173\u95ed\u4e3b\u8fdb\u7a0b\n    p.join()\n    print('\u3010End\u3011')\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u7684\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"\u4e3b\u8fdb\u7a0b\u7684 PID\uff1a7256\n\u8fdb\u7a0b\u7684\u540d\u79f0\uff1a0 \uff1b\u8fdb\u7a0b\u7684PID: 1492\n\u8fdb\u7a0b\u7684\u540d\u79f0\uff1a1 \uff1b\u8fdb\u7a0b\u7684PID: 12232\n\u8fdb\u7a0b\u7684\u540d\u79f0\uff1a2 \uff1b\u8fdb\u7a0b\u7684PID: 4332\n\u8fdb\u7a0b\u7684\u540d\u79f0\uff1a3 \uff1b\u8fdb\u7a0b\u7684PID: 11604\n\u8fdb\u7a0b 2 \u8fd0\u884c\u4e86 0.6500370502471924 \u79d2\n\u8fdb\u7a0b\u7684\u540d\u79f0\uff1a4 \uff1b\u8fdb\u7a0b\u7684PID: 4332\n\u8fdb\u7a0b 1 \u8fd0\u884c\u4e86 1.0830621719360352 \u79d2\n\u8fdb\u7a0b\u7684\u540d\u79f0\uff1a5 \uff1b\u8fdb\u7a0b\u7684PID: 12232\n\u8fdb\u7a0b 5 \u8fd0\u884c\u4e86 0.029001712799072266 \u79d2\n\u8fdb\u7a0b 4 \u8fd0\u884c\u4e86 0.9720554351806641 \u79d2\n\u8fdb\u7a0b 0 \u8fd0\u884c\u4e86 2.3181326389312744 \u79d2\n\u8fdb\u7a0b 3 \u8fd0\u884c\u4e86 2.5331451892852783 \u79d2\n\u3010End\u3011\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\u6709\u4e00\u70b9\u9700\u8981\u6ce8\u610f\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"Pool")," \u5bf9\u8c61\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"join()")," \u65b9\u6cd5\u4f1a\u7b49\u5f85\u6240\u6709\u5b50\u8fdb\u7a0b\u6267\u884c\u5b8c\u6bd5\uff0c\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"join()")," \u4e4b\u524d\u5fc5\u987b\u5148\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"close()")," \uff0c\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"close()")," \u4e4b\u540e\u5c31\u4e0d\u80fd\u7ee7\u7eed\u6dfb\u52a0\u65b0\u7684 Process \u4e86\u3002"),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f\u8f93\u51fa\u7684\u7ed3\u679c\uff0c\u5b50\u8fdb\u7a0b 0\uff0c1\uff0c2\uff0c3\u662f\u7acb\u523b\u6267\u884c\u7684\uff0c\u800c\u5b50\u8fdb\u7a0b 4 \u8981\u7b49\u5f85\u524d\u9762\u67d0\u4e2a\u5b50\u8fdb\u7a0b\u5b8c\u6210\u540e\u624d\u6267\u884c\uff0c\u8fd9\u662f\u56e0\u4e3a Pool \u7684\u9ed8\u8ba4\u5927\u5c0f\u5728\u6211\u7684\u7535\u8111\u4e0a\u662f 4\uff0c\u56e0\u6b64\uff0c\u6700\u591a\u540c\u65f6\u6267\u884c 4 \u4e2a\u8fdb\u7a0b\u3002\u8fd9\u662f Pool \u6709\u610f\u8bbe\u8ba1\u7684\u9650\u5236\uff0c\u5e76\u4e0d\u662f\u64cd\u4f5c\u7cfb\u7edf\u7684\u9650\u5236\u3002\u5982\u679c\u6539\u6210\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"p = Pool(5)\n")),(0,a.kt)("p",null,"\u5c31\u53ef\u4ee5\u540c\u65f6\u8dd1 5 \u4e2a\u8fdb\u7a0b\u3002"),(0,a.kt)("h2",{id:"6\u8fdb\u7a0b\u95f4\u901a\u4fe1"},"6\u3001\u8fdb\u7a0b\u95f4\u901a\u4fe1"),(0,a.kt)("p",null,"Process \u4e4b\u95f4\u80af\u5b9a\u662f\u9700\u8981\u901a\u4fe1\u7684\uff0c\u64cd\u4f5c\u7cfb\u7edf\u63d0\u4f9b\u4e86\u5f88\u591a\u673a\u5236\u6765\u5b9e\u73b0\u8fdb\u7a0b\u95f4\u7684\u901a\u4fe1\u3002Python \u7684 multiprocessing \u6a21\u5757\u5305\u88c5\u4e86\u5e95\u5c42\u7684\u673a\u5236\uff0c\u63d0\u4f9b\u4e86Queue\u3001Pipes \u7b49\u591a\u79cd\u65b9\u5f0f\u6765\u4ea4\u6362\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u4ee5 Queue \u4e3a\u4f8b\uff0c\u5728\u7236\u8fdb\u7a0b\u4e2d\u521b\u5efa\u4e24\u4e2a\u5b50\u8fdb\u7a0b\uff0c\u4e00\u4e2a\u5f80 Queue \u91cc\u5199\u6570\u636e\uff0c\u4e00\u4e2a\u4ece Queue \u91cc\u8bfb\u6570\u636e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"#!/usr/bin/env python3\n# -*- coding: UTF-8 -*-\n\nfrom multiprocessing import Process, Queue\nimport os, time, random\n\n\ndef write(q):\n    # \u5199\u6570\u636e\u8fdb\u7a0b\n    print('\u5199\u8fdb\u7a0b\u7684PID:{0}'.format(os.getpid()))\n    for value in ['\u4e24\u70b9\u6c34', '\u4e09\u70b9\u6c34', '\u56db\u70b9\u6c34']:\n        print('\u5199\u8fdb Queue \u7684\u503c\u4e3a\uff1a{0}'.format(value))\n        q.put(value)\n        time.sleep(random.random())\n\n\ndef read(q):\n    # \u8bfb\u53d6\u6570\u636e\u8fdb\u7a0b\n    print('\u8bfb\u8fdb\u7a0b\u7684PID:{0}'.format(os.getpid()))\n    while True:\n        value = q.get(True)\n        print('\u4ece Queue \u8bfb\u53d6\u7684\u503c\u4e3a\uff1a{0}'.format(value))\n\n\nif __name__ == '__main__':\n    # \u7236\u8fdb\u7a0b\u521b\u5efa Queue\uff0c\u5e76\u4f20\u7ed9\u5404\u4e2a\u5b50\u8fdb\u7a0b\n    q = Queue()\n    pw = Process(target=write, args=(q,))\n    pr = Process(target=read, args=(q,))\n    # \u542f\u52a8\u5b50\u8fdb\u7a0b pw\n    pw.start()\n    # \u542f\u52a8\u5b50\u8fdb\u7a0bpr\n    pr.start()\n    # \u7b49\u5f85pw\u7ed3\u675f:\n    pw.join()\n    # pr \u8fdb\u7a0b\u91cc\u662f\u6b7b\u5faa\u73af\uff0c\u65e0\u6cd5\u7b49\u5f85\u5176\u7ed3\u675f\uff0c\u53ea\u80fd\u5f3a\u884c\u7ec8\u6b62\n    pr.terminate()\n\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u7684\u7ed3\u679c\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"\u8bfb\u8fdb\u7a0b\u7684PID:13208\n\u5199\u8fdb\u7a0b\u7684PID:10864\n\u5199\u8fdb Queue \u7684\u503c\u4e3a\uff1a\u4e24\u70b9\u6c34\n\u4ece Queue \u8bfb\u53d6\u7684\u503c\u4e3a\uff1a\u4e24\u70b9\u6c34\n\u5199\u8fdb Queue \u7684\u503c\u4e3a\uff1a\u4e09\u70b9\u6c34\n\u4ece Queue \u8bfb\u53d6\u7684\u503c\u4e3a\uff1a\u4e09\u70b9\u6c34\n\u5199\u8fdb Queue \u7684\u503c\u4e3a\uff1a\u56db\u70b9\u6c34\n\u4ece Queue \u8bfb\u53d6\u7684\u503c\u4e3a\uff1a\u56db\u70b9\u6c34\n")))}u.isMDXComponent=!0}}]);