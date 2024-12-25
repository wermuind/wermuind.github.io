"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[5256],{176:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>t,frontMatter:()=>d,metadata:()=>i,toc:()=>h});var r=s(4848),x=s(8453);const d={},c="\u0414\u0435\u0440\u0435\u0432\u043e \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0433\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f",i={id:"compiler/lexer/regex-tree",title:"\u0414\u0435\u0440\u0435\u0432\u043e \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0433\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f",description:"Regex AST",source:"@site/notes/compiler/lexer/regex-tree.md",sourceDirName:"compiler/lexer",slug:"/compiler/lexer/regex-tree",permalink:"/notes/compiler/lexer/regex-tree",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0414\u041a\u0410 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0433\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f",permalink:"/notes/compiler/lexer/regex-to-dfa"},next:{title:"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u043d\u0430\u043b\u0438\u0437",permalink:"/notes/compiler/parser/"}},l={},h=[{value:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 Unicode",id:"\u0440\u0430\u0431\u043e\u0442\u0430-\u0441-unicode",level:2},{value:"\u041f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",id:"\u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c-\u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",level:3},{value:"\u041a\u043b\u0430\u0441\u0441\u044b \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0438 \u043e\u0442\u0440\u0438\u0446\u0430\u043d\u0438\u044f",id:"\u043a\u043b\u0430\u0441\u0441\u044b-\u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432-\u0438-\u043e\u0442\u0440\u0438\u0446\u0430\u043d\u0438\u044f",level:3},{value:"\u0414\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c:",id:"\u0434\u043b\u044f-\u0440\u0435\u0448\u0435\u043d\u0438\u044f-\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f-\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439-\u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c",level:4}];function j(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,x.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u0434\u0435\u0440\u0435\u0432\u043e-\u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0433\u043e-\u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f",children:"\u0414\u0435\u0440\u0435\u0432\u043e \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0433\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Regex AST",src:s(6573).A+""})}),"\n",(0,r.jsx)(n.h2,{id:"\u0440\u0430\u0431\u043e\u0442\u0430-\u0441-unicode",children:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 Unicode"}),"\n",(0,r.jsx)(n.p,{children:"Unicode 15 \u0432\u0435\u0440\u0441\u0438\u0438 \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044f \u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e 150 \u0442\u044b\u0441\u044f\u0447 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.\n\u0423\u0447\u0438\u0442\u044b\u0432\u0430\u044f, \u0447\u0442\u043e \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043e\u0432 \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0433\u043e \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u0443\n\u043d\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 \u0441\u0438\u043c\u0432\u043e\u043b \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0430, \u044d\u0442\u043e \u043e\u0447\u0435\u043d\u044c \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u043e."}),"\n",(0,r.jsx)(n.p,{children:"\u041a\u0440\u043e\u043c\u0435 \u044d\u0442\u043e\u0433\u043e, \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u0437\u0430\u043d\u0438\u043c\u0430\u044e\u0442 \u043a\u043e\u0434\u043e\u0432\u043e\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u043d\u0435\u0440\u0430\u0432\u043d\u043e\u043c\u0435\u0440\u043d\u043e, \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442\n\u043d\u0435\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u044b \u0447\u0442\u043e \u043d\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u0434 \u0441\u0438\u043c\u0432\u043e\u043b\u0430 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u043a\u0430\u043a\n\u0438\u043d\u0434\u0435\u043a\u0441 \u0432 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b."}),"\n",(0,r.jsxs)(n.p,{children:["\u0420\u0435\u0448\u0435\u043d\u0438\u0435\u043c \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0447\u0442\u0435\u043d\u0438\u0435 \u0432\u0445\u043e\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 ",(0,r.jsx)(n.strong,{children:"\u0432 \u0431\u0438\u043d\u0430\u0440\u043d\u043e\u043c \u0432\u0438\u0434\u0435"}),". \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435\n\u0430\u043b\u0444\u0430\u0432\u0438\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0430 \u0441\u0442\u0430\u043d\u0435\u0442 \u0440\u0430\u0432\u0435\u043d 256 \u0441\u0438\u043c\u0432\u043e\u043b\u0430\u043c: \u0447\u0438\u0441\u043b\u0430 \u043e\u0442 0 \u0434\u043e 255. \u041b\u0435\u043a\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439\n\u0430\u043d\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u043d\u0430 \u0432\u0445\u043e\u0434 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0431\u0430\u0439\u0442, \u0430 \u043f\u043e\u0441\u043b\u0435\n\u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u043d\u0438\u044f \u0442\u043e\u043a\u0435\u043d\u0430 \u043b\u0435\u043a\u0441\u0435\u043c\u0430 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0430 \u0432 \u0441\u0442\u0440\u043e\u043a\u0443."]}),"\n",(0,r.jsx)(n.p,{children:"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u043e\u0439 \u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0441\u0442\u0430\u043d\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430 \u0441 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0439 \u0433\u0440\u0430\u043c\u043c\u0430\u0442\u0438\u043a\u043e\u0439: \u043a\u0430\u0436\u0434\u044b\u0439\n\u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0441\u0438\u043c\u0432\u043e\u043b \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u0432 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0431\u0430\u0439\u0442, \u0447\u0442\u043e\n\u0432 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0435 \u0441\u043b\u0443\u0447\u0430\u0435\u0432 \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0442 \u0440\u0430\u0437\u043c\u0435\u0440 \u0434\u0435\u0440\u0435\u0432\u0430."}),"\n",(0,r.jsx)(n.h3,{id:"\u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c-\u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",children:"\u041f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}),"\n",(0,r.jsxs)(n.p,{children:["\u041f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 (",(0,r.jsx)(n.code,{children:"'#'"}),", ",(0,r.jsx)(n.code,{children:"'\u0442\u0435\u043a\u0441\u0442'"})," \u0438 \u0442.\u043f.) \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0435\u0442\u0441\u044f\n\u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0435\u0439 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0431\u0430\u0439\u0442, \u043e\u0431\u0440\u0430\u0437\u0443\u044f \u0446\u0435\u043f\u043e\u0447\u043a\u0443 \u0443\u0437\u043b\u043e\u0432\n\u043a\u043e\u043d\u043a\u0430\u0442\u0435\u043d\u0430\u0446\u0438\u0438."]}),"\n",(0,r.jsx)(n.h3,{id:"\u043a\u043b\u0430\u0441\u0441\u044b-\u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432-\u0438-\u043e\u0442\u0440\u0438\u0446\u0430\u043d\u0438\u044f",children:"\u041a\u043b\u0430\u0441\u0441\u044b \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0438 \u043e\u0442\u0440\u0438\u0446\u0430\u043d\u0438\u044f"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"\u041a\u043b\u0430\u0441\u0441\u044b (\u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043a\u0438)"})," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435\u043c \u0434\u043b\u044f \u043a\u0430\u043d\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438\n\u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0433\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u044b \u0432 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0435 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e\n\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432. ",(0,r.jsx)(n.em,{children:"\u041e\u0442\u0440\u0438\u0446\u0430\u043d\u0438\u0435"})," \u0442\u0430\u043a\u0436\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435\u043c \u0438 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0435\u0442\u0441\u044f \u0432\u043e\n\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432."]}),"\n",(0,r.jsxs)(n.p,{children:['\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043b\u0430\u0441\u0441\u0430 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0432 \u043e\u0434\u0438\u043d \u043e\u0433\u0440\u043e\u043c\u043d\u044b\u0439 "\u0438\u043b\u0438" \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e\n\u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0442 \u0440\u0430\u0437\u043c\u0435\u0440 \u0434\u0435\u0440\u0435\u0432\u0430. \u041e\u0441\u043e\u0431\u043e\u0439 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043e\u0439 \u043f\u0440\u0438 \u0440\u0430\u0431\u043e\u0442\u0435 \u0441 \u042e\u043d\u0438\u043a\u043e\u0434\u043e\u043c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f\n\u043e\u0442\u0440\u0438\u0446\u0430\u043d\u0438\u0435. \u041a\u043e\u043d\u043a\u0430\u0442\u0435\u043d\u0430\u0446\u0438\u044f ',(0,r.jsx)(n.code,{children:"n"})," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0438\u043b\u0438 \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430 \u043d\u0430 ",(0,r.jsx)(n.code,{children:"n"})," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432 \u0434\u0430\u044e\u0442\n",(0,r.jsx)(n.code,{children:"2n - 1"})," \u0443\u0437\u043b\u043e\u0432."]}),"\n",(0,r.jsx)(n.h4,{id:"\u0434\u043b\u044f-\u0440\u0435\u0448\u0435\u043d\u0438\u044f-\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f-\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439-\u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c",children:"\u0414\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c:"}),"\n",(0,r.jsx)(n.p,{children:"\u0410\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043d \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0443 \u0441 \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u043a\u043e\u0439 UTF-8."}),"\n",(0,r.jsxs)(n.p,{children:["\u041d\u0430 \u043f\u0435\u0440\u0432\u043e\u043c \u044d\u0442\u0430\u043f\u0435 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u043a \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u0434\u0432\u0443\u043c\u044f \u043a\u043e\u0434\u043e\u0432\u044b\u043c\u0438 \u0442\u043e\u0447\u043a\u0430\u043c\u0438 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.\n\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043b\u044f ",(0,r.jsx)(n.code,{children:"'a'..'z'"})," \u043f\u043e\u043b\u0443\u0447\u0438\u043c ",(0,r.jsx)(n.code,{children:"[0x61, 0x7A]"}),". \u0421\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f, \u0447\u0442\u043e \u043f\u0435\u0440\u0432\u0430\u044f \u043a\u043e\u0434\u043e\u0432\u0430\u044f\n\u0442\u043e\u0447\u043a\u0430 (\u043d\u0430\u0447\u0430\u043b\u043e) \u0431\u043e\u043b\u044c\u0448\u0435 \u043b\u0438\u0431\u043e \u0440\u0430\u0432\u043d\u0430 \u0432\u0442\u043e\u0440\u043e\u0439 (\u043a\u043e\u043d\u0435\u0446)."]}),"\n",(0,r.jsx)(n.p,{children:"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043a\u043e\u0432, \u0437\u0430\u0434\u0430\u044e\u0449\u0438\u0445 \u0432\u0441\u0435 \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b.\n\u0414\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u042e\u043d\u0438\u043a\u043e\u0434\u0430 \u044d\u0442\u0438 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043a\u0438 \u0431\u0443\u0434\u0443\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437\u043b\u0438\u0447\u0430\u0442\u044c\u0441\u044f."}),"\n",(0,r.jsx)(n.p,{children:"\u041e\u0442\u0440\u0438\u0446\u0430\u043d\u0438\u0435 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0435\u0442\u0441\u044f \u0432\u043e \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043a\u043e\u0432, \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u043e\u0442 \u0432\u0441\u0435\u0445\n\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432, \u043f\u0443\u0442\u0451\u043c \u0432\u044b\u0447\u0438\u0442\u0430\u043d\u0438\u044f \u0438\u0437 \u043d\u0435\u0433\u043e \u043e\u0442\u0440\u0438\u0446\u0430\u0435\u043c\u044b\u043c \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432."}),"\n",(0,r.jsx)(n.p,{children:"\u041a\u0430\u0436\u0434\u044b\u0439 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u043a \u043f\u0435\u0440\u0435\u0434 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0432 \u043d\u0430\u0431\u043e\u0440 \u0443\u0437\u043b\u043e\u0432 \u0434\u0435\u0440\u0435\u0432\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c\n\u0434\u043e\u043f\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0440\u0430\u0437\u0431\u0438\u0442 \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u043b\u043e \u0438 \u043a\u043e\u043d\u0435\u0446 \u043a\u0430\u0436\u0434\u043e\u0439 \u0447\u0430\u0441\u0442\u0438\n\u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u0431\u0430\u0439\u0442."}),"\n",(0,r.jsxs)(n.p,{children:["\u041f\u0440\u0438\u043c\u0435\u0440: ",(0,r.jsx)(n.code,{children:"[0x0, 0xFFFF] => [0x0, 0x7F], [0x80, 0x7FF], [0x800, 0xFFFF]"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["\u0414\u0430\u043b\u0435\u0435 \u0432 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043a\u0430\u0445 \u043a\u043e\u0434\u043e\u0432\u044b\u0435 \u0442\u043e\u0447\u043a\u0438 \u0437\u0430\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c\u044e\n\u0431\u0430\u0439\u0442. \u0414\u043b\u044f ",(0,r.jsx)(n.code,{children:"[0x80, 0x7FF]"})," \u043f\u043e\u043b\u0443\u0447\u0438\u043c ",(0,r.jsx)(n.code,{children:"[[0xC2, 0x80], [0xDF, 0xBF]]"}),"."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u0411\u0430\u0439\u0442"}),(0,r.jsx)(n.th,{children:"\u041f\u0430\u0442\u0442\u0435\u0440\u043d"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"0xxxxxxx"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"110xxxxx 10xxxxxx"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"1110xxxx 10xxxxxx 10xxxxxx"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"11110xxx 10xxxxxx 10xxxxxx 10xxxxxx"})})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"\u0412 UTF-8 \u0441\u0438\u043c\u0432\u043e\u043b \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0437\u0430\u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0430\u043d \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442 1 \u0434\u043e 4 \u0431\u0430\u0439\u0442.\n\u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0438\u043c\u0435\u0435\u043c 4 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0445 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"r1(s1, e1)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"r2(s1, s2, e1, e2)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"r3(s1, s2, s3, e1, e2, e3)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"r4(s1, s2, s3, s4, e1, e2, e3, e4)"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u041a\u0430\u0436\u0434\u043e\u043c\u0443 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0443 \u0434\u043b\u044f \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043a\u0430\u043a\u0430\u044f-\u0442\u043e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0443\u0437\u043b\u043e\u0432\n\u0434\u0435\u0440\u0435\u0432\u0430 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0433\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,r.jsx)(n.p,{children:"\u0414\u0430\u043b\u0435\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"&"})," \u2014 \u0443\u0437\u0435\u043b \u043a\u043e\u043d\u043a\u0430\u0442\u0435\u043d\u0430\u0446\u0438\u0438"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"|"}),' \u2014 \u0443\u0437\u0435\u043b "\u0438\u043b\u0438"']}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"r1(s1, e1)"}),":"]}),"\n",(0,r.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 ",(0,r.jsx)(n.code,{children:"s1 == e1"}),", \u044d\u0442\u043e \u043e\u0431\u044b\u0447\u043d\u044b\u0439 \u0441\u0438\u043c\u0432\u043e\u043b\u044c\u043d\u044b\u0439 \u0443\u0437\u0435\u043b:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"s1\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 ",(0,r.jsx)(n.code,{children:"e1 - s1 == 1"}),', \u044d\u0442\u043e \u0443\u0437\u0435\u043b "\u0438\u043b\u0438":']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"s1 | e1\n"})}),"\n",(0,r.jsx)(n.p,{children:'\u0412\u043e \u0432\u0441\u0435\u0445 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u043e\u0431\u0440\u0430\u0437\u0443\u0435\u0442\u0441\u044f \u0446\u0435\u043f\u043e\u0447\u043a\u0430 \u0443\u0437\u043b\u043e\u0432 "\u0438\u043b\u0438":'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"(((s1 | s1+1) | ...) | e1-1) | e1\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"r2(s1, s2, e1, e2)"}),":"]}),"\n",(0,r.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 ",(0,r.jsx)(n.code,{children:"s1 == e1"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"s1 & r1(s2, e2)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 ",(0,r.jsx)(n.code,{children:"e1 - s1 == 1"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"s1 & r1(s2, 192) |\ne1 & r1(128, e2)\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u0412\u043e \u0432\u0441\u0435\u0445 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"s1             & r1(s2, 192)  |\nr1(s1+1, e1-1) & r1(128, 191) |\ne1             & r1(128, e2)\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"r3(s1, s2, s3, e1, e2, s3)"}),":"]}),"\n",(0,r.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 ",(0,r.jsx)(n.code,{children:"s1 == e1"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"s1 & r2(s2, s3, e2, e3)\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u0412\u043e \u0432\u0441\u0435\u0445 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"s1 & s2 & r1(s3, 191)                 |\nr2(s1, s2+1, e1, e2-1) & r1(128, 191) |\ne1 & e2 & r1(128, e3)\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"r4(s1, s2, s3, s4, e1, e2, s3, s4)"}),":"]}),"\n",(0,r.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 ",(0,r.jsx)(n.code,{children:"s1 == e1"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"s1 & r3(s2, s3, s4, e2, e3, e4)\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u0412\u043e \u0432\u0441\u0435\u0445 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"s1 & s2 & s3 & r1(s4, 191)                    |\nr3(s1, s2, s3+1, e1, e2, e3-1) & r1(128, 191) |\ne1 & e2 & e3 & r1(128, e4)\n"})})]})}function t(e={}){const{wrapper:n}={...(0,x.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},6573:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/regex-ast-d302113a0f185b1c4e690df7d14e6d98.svg"},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>i});var r=s(6540);const x={},d=r.createContext(x);function c(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(x):e.components||x:c(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);