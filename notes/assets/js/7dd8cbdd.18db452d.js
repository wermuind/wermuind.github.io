"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[5182],{6118:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var r=t(5893),l=t(1151);const o={},s="\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b",i={id:"low-level/program-structure",title:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b",description:"\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f, \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0435 \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0432 \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u0438.",source:"@site/notes/low-level/program-structure.md",sourceDirName:"low-level",slug:"/low-level/program-structure",permalink:"/notes/low-level/program-structure",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"\u0410\u043f\u043f\u0430\u0440\u0430\u0442\u043d\u044b\u0439 \u0441\u0442\u0435\u043a",permalink:"/notes/low-level/call-stack"},next:{title:"\u0417\u0430\u043a\u043b\u0430\u0434\u043a\u0438",permalink:"/notes/category/\u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"}},c={},a=[{value:"\u0421\u0435\u043a\u0446\u0438\u044f \u043a\u043e\u0434\u0430",id:"\u0441\u0435\u043a\u0446\u0438\u044f-\u043a\u043e\u0434\u0430",level:2},{value:"\u0421\u0435\u043a\u0446\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445",id:"\u0441\u0435\u043a\u0446\u0438\u044f-\u0434\u0430\u043d\u043d\u044b\u0445",level:2},{value:"\u0421\u0435\u043a\u0446\u0438\u044f \u043d\u0435\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445",id:"\u0441\u0435\u043a\u0446\u0438\u044f-\u043d\u0435\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445-\u0434\u0430\u043d\u043d\u044b\u0445",level:2},{value:"\u0421\u0435\u043a\u0446\u0438\u044f \u0441\u0442\u0435\u043a\u0430",id:"\u0441\u0435\u043a\u0446\u0438\u044f-\u0441\u0442\u0435\u043a\u0430",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",hr:"hr",p:"p",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430-\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b",children:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b"}),"\n",(0,r.jsx)(n.p,{children:"\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f, \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0435 \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0432 \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u0438.\n\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043c\u043e\u0436\u0435\u0442 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0440\u0430\u0437\u043d\u044b\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u043f\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u0443 \u043a \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u043c\n\u043e\u0431\u043b\u0430\u0441\u0442\u044f\u043c \u043f\u0430\u043c\u044f\u0442\u0438 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0447\u0442\u0435\u043d\u0438\u044f)."}),"\n",(0,r.jsx)(n.p,{children:"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0432\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u044e\u0442 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0435 \u0430\u0434\u0440\u0435\u0441\u043d\u043e\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e\n\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0438, \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0432 \u0435\u0433\u043e \u043d\u0430 4 \u0441\u0435\u043a\u0446\u0438\u0438."}),"\n",(0,r.jsx)(n.h2,{id:"\u0441\u0435\u043a\u0446\u0438\u044f-\u043a\u043e\u0434\u0430",children:"\u0421\u0435\u043a\u0446\u0438\u044f \u043a\u043e\u0434\u0430"}),"\n",(0,r.jsx)(n.p,{children:"\u0412 \u043d\u0435\u0439 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u043c\u0430\u0448\u0438\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f.\n\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0447\u0442\u0435\u043d\u0438\u044f."}),"\n",(0,r.jsx)(n.h2,{id:"\u0441\u0435\u043a\u0446\u0438\u044f-\u0434\u0430\u043d\u043d\u044b\u0445",children:"\u0421\u0435\u043a\u0446\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445"}),"\n",(0,r.jsx)(n.p,{children:"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0432 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0435 \u0437\u0430\u0434\u0430\u043d\u043e\n\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. \u041e\u0431\u0440\u0430\u0437 \u0441\u0435\u043a\u0446\u0438\u0438 \u0434\u043e\u043b\u0436\u0435\u043d \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0432 \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u043e\u043c \u0444\u0430\u0439\u043b\u0435."}),"\n",(0,r.jsx)(n.h2,{id:"\u0441\u0435\u043a\u0446\u0438\u044f-\u043d\u0435\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445-\u0434\u0430\u043d\u043d\u044b\u0445",children:"\u0421\u0435\u043a\u0446\u0438\u044f \u043d\u0435\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"}),"\n",(0,r.jsx)(n.p,{children:"\u0427\u0430\u0441\u0442\u043e \u0435\u0449\u0451 \u043d\u0430\u0437\u044b\u0432\u0430\u044e\u0442 \u0441\u0435\u043a\u0446\u0438\u044f BSS (Blank Static Storage).\n\u041f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0430 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445, \u0447\u044c\u0451 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 \u0437\u0430\u0434\u0430\u043d\u043e.\n\u0412 \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437\u043c\u0435\u0440 \u0441\u0435\u043a\u0446\u0438\u0438."}),"\n",(0,r.jsx)(n.p,{children:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 \u0441\u0435\u043a\u0446\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0437\u0430\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u043f\u043e \u0445\u043e\u0434\u0443\n\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0440\u0430\u0437\u043c\u0435\u0440 \u0441\u0435\u043a\u0446\u0438\u0438 BSS \u043c\u043e\u0436\u0435\u0442 \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u0442\u044c\u0441\u044f, \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442\n\u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f. \u0412\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439\n\u043f\u0430\u043c\u044f\u0442\u0438 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0445 \u0432\u044b\u0437\u043e\u0432\u043e\u0432."}),"\n",(0,r.jsx)(n.h2,{id:"\u0441\u0435\u043a\u0446\u0438\u044f-\u0441\u0442\u0435\u043a\u0430",children:"\u0421\u0435\u043a\u0446\u0438\u044f \u0441\u0442\u0435\u043a\u0430"}),"\n",(0,r.jsx)(n.p,{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0432 \u043f\u043e\u0434\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430\u0445\n\u0438 \u0430\u0434\u0440\u0435\u0441\u043e\u0432 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430 \u0438\u0437 \u043f\u043e\u0434\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c.\n\u0418\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0439 \u0444\u0430\u0439\u043b \u043d\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043d\u0438\u043a\u0430\u043a\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0441\u0435\u043a\u0446\u0438\u0438 \u0441\u0442\u0435\u043a\u0430."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:["\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a: ",(0,r.jsx)(n.a,{href:"http://stolyarov.info/books/programming_intro/",children:"\u0421\u0442\u043e\u043b\u044f\u0440\u043e\u0432 \u2014 \u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"}),", \u0442\u043e\u043c 2, \u0440\u0430\u0437\u0434\u0435\u043b 3.3.2."]})]})}function u(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var r=t(7294);const l={},o=r.createContext(l);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);