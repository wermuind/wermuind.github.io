"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[2124],{4300:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=r(5893),t=r(1151);const i={},l="\u0412\u043e\u0441\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0430\u043d\u0430\u043b\u0438\u0437",c={id:"compiler/parser/bottom-up",title:"\u0412\u043e\u0441\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0430\u043d\u0430\u043b\u0438\u0437",description:"\u0412\u043e\u0441\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0430\u043d\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440 \u043f\u044b\u0442\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0432\u044b\u0432\u043e\u0434 \u0432 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435, \u0432\u044b\u0432\u043e\u0434\u044f",source:"@site/notes/compiler/parser/bottom-up.md",sourceDirName:"compiler/parser",slug:"/compiler/parser/bottom-up",permalink:"/notes/compiler/parser/bottom-up",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u0433\u0440\u0430\u043c\u043c\u0430\u0442\u0438\u043a\u0438",permalink:"/notes/compiler/parser/grammar-extensions"},next:{title:"LALR",permalink:"/notes/compiler/parser/lalr"}},o={},d=[{value:"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u043e\u0432",id:"conflict-resolving",level:3}];function p(n){const e={em:"em",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u0432\u043e\u0441\u0445\u043e\u0434\u044f\u0449\u0438\u0439-\u0430\u043d\u0430\u043b\u0438\u0437",children:"\u0412\u043e\u0441\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0430\u043d\u0430\u043b\u0438\u0437"}),"\n",(0,s.jsx)(e.p,{children:"\u0412\u043e\u0441\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0430\u043d\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440 \u043f\u044b\u0442\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0432\u044b\u0432\u043e\u0434 \u0432 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435, \u0432\u044b\u0432\u043e\u0434\u044f\n\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0438\u043c\u0432\u043e\u043b \u0438\u0437 \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0435\u043c\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438."}),"\n",(0,s.jsx)(e.p,{children:"\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0442\u0430\u043a\u043e\u0433\u043e \u043f\u0430\u0440\u0441\u0435\u0440\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0441\u0430\u043c\u044b\u0439 \u043f\u0440\u0430\u0432\u044b\u0439 \u0432\u044b\u0432\u043e\u0434 (rightmost derivation).\n\u0421\u0442\u0440\u043e\u043a\u0430 \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044f \u043f\u0443\u0442\u0451\u043c \u0447\u0442\u0435\u043d\u0438\u044f \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 (shifting), \u043f\u043e\u043a\u0430 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043d\u0430\u0439\u0434\u0435\u043d\u0430\n\u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a\u0430, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0430\u044f \u043f\u0440\u0430\u0432\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u0430."}),"\n",(0,s.jsxs)(e.p,{children:["\u0427\u0430\u0441\u0442\u044c \u0444\u043e\u0440\u043c\u044b \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f (sentential form), \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u0440\u0430\u0432\u043e\u0439 \u0447\u0430\u0441\u0442\u0438\n\u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0432\u044b\u0432\u043e\u0434\u0430, \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f ",(0,s.jsx)(e.em,{children:"\u0434\u0435\u0441\u043a\u0440\u0438\u043f\u0442\u043e\u0440\u043e\u043c"})," (handle). \u041a\u0430\u043a \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u0435\u0441\u043a\u0440\u0438\u043f\u0442\u043e\u0440\n\u043d\u0430\u0439\u0434\u0435\u043d, \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a\u0430 \u0432 \u0444\u043e\u0440\u043c\u0435 \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f (reduce) \u043d\u0430 \u043d\u0435\u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b \u0432 \u043b\u0435\u0432\u043e\u0439 \u0447\u0430\u0441\u0442\u0438\n\u043f\u0440\u0430\u0432\u0438\u043b\u0430."]}),"\n",(0,s.jsx)(e.p,{children:"\u0414\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0441\u0447\u0438\u0442\u0430\u043d\u043d\u043e\u0433\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u0430 \u0441\u043e\u0437\u0434\u0430\u0451\u0442\u0441\u044f \u0443\u0437\u0435\u043b, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u044f\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u043b\u0438\u0441\u0442\u043e\u043c\n\u0432 \u0434\u0435\u0440\u0435\u0432\u0435 \u0440\u0430\u0437\u0431\u043e\u0440\u0430. \u041f\u0440\u0438 \u0437\u0430\u043c\u0435\u043d\u0435 (\u0441\u0432\u0451\u0440\u0442\u043a\u0435) \u0441\u043e\u0437\u0434\u0430\u0451\u0442\u0441\u044f \u043d\u043e\u0432\u044b\u0439 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u0439 \u0443\u0437\u0435\u043b,\n\u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0445 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0443\u0437\u043b\u044b, \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u0430\u043c\u0438\n\u0432 \u0434\u0435\u043a\u0441\u0440\u0438\u043f\u0442\u043e\u0440\u0435."}),"\n",(0,s.jsx)(e.p,{children:"\u0412\u0445\u043e\u0434\u043d\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u043d\u0430, \u0435\u0441\u043b\u0438 \u0432 \u0434\u0435\u0440\u0435\u0432\u0435 \u0440\u0430\u0437\u0431\u043e\u0440\u0430 \u0441\u043e\u0437\u0434\u0430\u043d \u0443\u0437\u0435\u043b,\n\u043e\u0442\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u0439 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u043c \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u043c \u0433\u0440\u0430\u043c\u043c\u0430\u0442\u0438\u043a\u0438 \u0438 \u0444\u043e\u0440\u043c\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u044d\u0442\u043e\u0442 \u0441\u0438\u043c\u0432\u043e\u043b."}),"\n",(0,s.jsx)(e.p,{children:"\u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u043f\u0430\u0440\u0441\u0435\u0440 \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"shift"}),": \u0447\u0442\u0435\u043d\u0438\u0435 \u043e\u0447\u0435\u0440\u0435\u0434\u043d\u043e\u0433\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u0430 \u0438\u0437 \u0432\u0445\u043e\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"reduce"}),": \u0437\u0430\u043c\u0435\u043d\u0430 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043e\u0434\u043d\u0438\u043c \u0438\u0437 \u043f\u0440\u0430\u0432\u0438\u043b \u0433\u0440\u0430\u043c\u043c\u0430\u0442\u0438\u043a\u0438"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"accept"}),": \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u043d\u0430"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"error"}),": \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043d\u0435\u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u043d\u0430 \u0438 \u043d\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0432\u0443\u0435\u0442 \u044f\u0437\u044b\u043a\u0443"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u043d\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440, \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0438\u0439 \u043f\u043e \u0442\u0430\u043a\u043e\u043c\u0443 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0443 \u043d\u0430\u0437\u044b\u0432\u0430\u044e\u0442\n\u0430\u043d\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440\u043e\u043c \u0441\u0434\u0432\u0438\u0433\u0430-\u0441\u0432\u0451\u0440\u0442\u043a\u0438 (shift-reduce parser)."}),"\n",(0,s.jsx)(e.h3,{id:"conflict-resolving",children:"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u043e\u0432"}),"\n",(0,s.jsxs)(e.p,{children:["\u0414\u043b\u044f \u043d\u0435\u043e\u0434\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u043e\u0439 \u0433\u0440\u0430\u043c\u043c\u0430\u0442\u0438\u043a\u0438 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0432\u044b\u0431\u043e\u0440\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439.\n\u0422\u0430\u043a\u0438\u0435 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438 \u043d\u0430\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f ",(0,s.jsx)(e.em,{children:"\u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u0430\u043c\u0438"}),". \u041c\u043e\u0436\u043d\u043e \u0432\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0438\u0434\u043e\u0432\n\u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u043e\u0432:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"shift/reduce"}),": \u0432\u044b\u0431\u043e\u0440 \u043c\u0435\u0436\u0434\u0443 \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u043d\u0438\u0435\u043c \u043e\u0447\u0435\u0440\u0435\u0434\u043d\u043e\u0433\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u0430 \u0438 \u0441\u0432\u0451\u0440\u0442\u043a\u043e\u0439"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"reduce/reduce"}),": \u043e\u0434\u043d\u0438 \u0438 \u0442\u0435 \u0436\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0437\u0430\u043c\u0435\u043d\u0435\u043d\u044b \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c\n\u0440\u0430\u0437\u043d\u044b\u0445 \u043f\u0440\u0430\u0432\u0438\u043b \u0432\u044b\u0432\u043e\u0434\u0430"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u0427\u0442\u043e\u0431\u044b \u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f \u0441 \u0442\u0430\u043a\u0438\u043c\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430\u043c\u0438, \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u043d\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440 \u043c\u043e\u0436\u0435\u0442\n\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u0432\u0430 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0438\u0430\u043b\u044c\u043d\u043e \u0440\u0430\u0437\u043d\u044b\u0445 \u043f\u043e\u0434\u0445\u043e\u0434\u0430:"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u043d\u0430 \u044d\u0442\u0430\u043f\u0435 \u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0432\u044b\u0431\u043e\u0440 \u0432 \u043f\u043e\u043b\u044c\u0437\u0443 \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437\n\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0445 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432"}),"\n",(0,s.jsx)(e.li,{children:"\u043d\u0430 \u044d\u0442\u0430\u043f\u0435 \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u0412 \u043f\u0435\u0440\u0432\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0440\u0430\u0437\u0440\u0435\u0448\u0451\u043d \u0431\u0430\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0432\u044b\u0431\u043e\u0440\u043e\u043c \u043f\u0435\u0440\u0432\u043e\u0439\n\u043f\u043e\u043f\u0430\u0432\u0448\u0435\u0439\u0441\u044f \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u044b, \u043b\u0438\u0431\u043e \u0431\u043e\u043b\u0435\u0435 \u043e\u0441\u043c\u044b\u0441\u043b\u0435\u043d\u043d\u044b\u043c \u043c\u0435\u0442\u043e\u0434\u043e\u043c, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0447\u0435\u0440\u0435\u0437\n\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0432\u043f\u0435\u0440\u0451\u0434 (lookahead)."}),"\n",(0,s.jsx)(e.p,{children:"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u043d\u0430\u043b\u0438\u0437, \u043f\u0440\u0438 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u044e\u0442\u0441\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e\n\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432 \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043e\u0431\u043e\u0431\u0449\u0451\u043d\u043d\u044b\u043c (generalized parsing)."})]})}function h(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},1151:(n,e,r)=>{r.d(e,{Z:()=>c,a:()=>l});var s=r(7294);const t={},i=s.createContext(t);function l(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);