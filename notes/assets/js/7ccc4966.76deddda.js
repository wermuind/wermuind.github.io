"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[2126],{2472:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>d,default:()=>x,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var t=n(4848),l=n(8453),i=n(6463);const s={},d="\u0420\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f",c={id:"js/regex",title:"\u0420\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f",description:"\u041e\u0431\u0437\u043e\u0440",source:"@site/notes/js/regex.mdx",sourceDirName:"js",slug:"/js/regex",permalink:"/notes/js/regex",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"\u0418\u0442\u0435\u0440\u0430\u0442\u043e\u0440\u044b",permalink:"/notes/js/iterator"},next:{title:"\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u044b \u044f\u0437\u044b\u043a\u0430",permalink:"/notes/js/standards"}},a={},o=[{value:"\u041e\u0431\u0437\u043e\u0440",id:"overview",level:2},{value:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438",id:"capabilities",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u043e\u0438\u0441\u043a\u0430 \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439 \u0432 \u0442\u0435\u043a\u0441\u0442\u0435:",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043f\u043e\u0438\u0441\u043a\u0430-\u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439-\u0432-\u0442\u0435\u043a\u0441\u0442\u0435",level:4},{value:"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441",id:"syntax",level:2},{value:"\u041a\u0432\u0430\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u044b",id:"quantifiers",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b:",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:4},{value:"\u041c\u0435\u0442\u0430\u0441\u0438\u043c\u0432\u043e\u043b\u044b",id:"metacharacters",level:3},{value:"Lookarounds",id:"lookarounds",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b:",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b-1",level:4},{value:"\u0413\u0440\u0443\u043f\u043f\u044b",id:"groups",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b:",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b-2",level:4},{value:"\u0424\u043b\u0430\u0433\u0438",id:"flags",level:3},{value:"JavaScript RegExp",id:"regexp",level:2},{value:"\u041c\u0435\u0442\u043e\u0434\u044b \u0441\u0442\u0440\u043e\u043a",id:"string-methods",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b:",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b-3",level:4},{value:"\u041c\u0435\u0442\u043e\u0434\u044b RegExp",id:"regexp-methods",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b:",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b-4",level:4},{value:"\u0421\u0441\u044b\u043b\u043a\u0438:",id:"\u0441\u0441\u044b\u043b\u043a\u0438",level:4}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"\u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u044b\u0435-\u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f",children:"\u0420\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f"})}),"\n",(0,t.jsx)(r.h2,{id:"overview",children:"\u041e\u0431\u0437\u043e\u0440"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)("dfn",{children:"Regular Expression"})," (regex) \u2014 \u0448\u0430\u0431\u043b\u043e\u043d\u044b, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0434\u043b\u044f \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f\n\u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0435\u0439 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0432 \u0441\u0442\u0440\u043e\u043a\u0430\u0445."]}),"\n",(0,t.jsx)(r.p,{children:"\u0420\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043f\u043e\u0432\u0441\u0435\u043c\u0435\u0441\u0442\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u043f\u0440\u0438 \u0440\u0430\u0431\u043e\u0442\u0435 \u0441\u043e \u0441\u0442\u0440\u043e\u043a\u0430\u043c\u0438\n\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u044b (\u043d\u0430\u0442\u0438\u0432\u043d\u043e \u0438\u043b\u0438 \u0447\u0435\u0440\u0435\u0437 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438) \u0432\u043e \u0432\u0441\u0435\u0445 \u0440\u0430\u0437\u0432\u0438\u0442\u044b\u0445 \u044f\u0437\u044b\u043a\u0430\u0445."}),"\n",(0,t.jsx)(r.h3,{id:"capabilities",children:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"\u043f\u043e\u0438\u0441\u043a \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439 \u0432 \u0441\u0442\u0440\u043e\u043a\u0435"}),"\n",(0,t.jsx)(r.li,{children:"\u043f\u043e\u0438\u0441\u043a \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439 \u0441 \u0437\u0430\u043c\u0435\u043d\u043e\u0439"}),"\n",(0,t.jsx)(r.li,{children:"\u0440\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u043d\u0430 \u0447\u0430\u0441\u0442\u0438"}),"\n",(0,t.jsx)(r.li,{children:"\u0442\u0435\u0441\u0442 \u0441\u0442\u0440\u043e\u043a\u0438 \u043d\u0430 \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0435 \u0448\u0430\u0431\u043b\u043e\u043d\u0443"}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043f\u043e\u0438\u0441\u043a\u0430-\u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439-\u0432-\u0442\u0435\u043a\u0441\u0442\u0435",children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u043e\u0438\u0441\u043a\u0430 \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439 \u0432 \u0442\u0435\u043a\u0441\u0442\u0435:"}),"\n",(0,t.jsx)(i.N,{theme:"idea",tokens:[{type:"string.regex.js",value:"/"},{type:"",value:"("},{type:"string.regex.text.js",value:"the"},{type:"string.regex.operator.js",value:"|"},{type:"string.regex.text.js",value:"an"},{type:"string.regex.quantifier.js",value:"?"},{type:"",value:")"},{type:"string.regex.metacharacter.js",value:"\\s"},{type:"",value:"("},{type:"string.regex.metacharacter.js",value:"\\w"},{type:"string.regex.quantifier.js",value:"+"},{type:"",value:")"},{type:"string.regex.js",value:"/gi"}]}),"\n",(0,t.jsx)(i.N,{theme:"idea",styles:{g1:{backgroundColor:"#517533",borderRadius:"0.1em",padding:"0.1em 0.2em"},g2:{backgroundColor:"#405c77",borderRadius:"0.1em",padding:"0.1em 0.2em"},g3:{backgroundColor:"#684230",borderRadius:"0.1em",padding:"0.1em 0.2em"}},tokens:[{type:"",value:"Even after you did "},{style:"g1",value:"the"},{style:"g2",value:" "},{style:"g3",value:"initial"},{type:"",value:" work and had "},{style:"g1",value:"a"},{style:"g2",value:" "},{style:"g3",value:"specific"},{type:"",value:" architecture\nin mind, "},{type:"",value:"you need to continuously monitor how "},{style:"g1",value:"the"},{style:"g2",value:" "},{style:"g3",value:"system"},{type:"",value:" evolves\nand whether it still "},{type:"",value:"aligns with its users' needs, as those may also\n"},{type:"",value:"change during "},{style:"g1",value:"the"},{style:"g2",value:" "},{style:"g3",value:"development"},{type:"",value:" and lifetime of your software. "},{type:"",value:"Software\ndecay, sometimes also called erosion, occurs when "},{style:"g1",value:"the"},{style:"g2",value:" "},{style:"g3",value:"implementation"},{type:"",value:"\ndecisions don't correspond to "},{style:"g1",value:"the"},{style:"g2",value:" "},{style:"g3",value:"planned"},{type:"",value:" architecture."}]}),"\n",(0,t.jsx)(r.h2,{id:"syntax",children:"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441"}),"\n",(0,t.jsxs)(r.p,{children:["\u0428\u0430\u0431\u043b\u043e\u043d \u0441\u0442\u0440\u043e\u0438\u0442\u0441\u044f \u0438\u0437 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0432\u043b\u044f\u044e\u0442 \u0438\u0437 \u0441\u0435\u0431\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e\u0435\n\u043f\u043e\u0434\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u0447\u0438\u0441\u043b\u043e\u043c \u043f\u043e\u0432\u0442\u043e\u0440\u0435\u043d\u0438\u0439 \u0438/\u0438\u043b\u0438 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445\n\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439. \u042d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u044b \u0432 ",(0,t.jsx)(r.strong,{children:"\u0433\u0440\u0443\u043f\u043f\u044b"})," \u0441 \u0446\u0435\u043b\u044c\u044e \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f\n\u0431\u043e\u043b\u0435\u0435 \u0441\u043b\u043e\u0436\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0438\u043b\u0438 \u0437\u0430\u0445\u0432\u0430\u0442\u0430 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u0447\u0430\u0441\u0442\u0435\u0439 \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u044f."]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"\u0412\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}),(0,t.jsx)(r.th,{children:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435"}),(0,t.jsx)(r.th,{children:"\u041f\u0440\u0438\u043c\u0435\u0440"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"\\"})}),(0,t.jsx)(r.td,{children:"\u044d\u043a\u0440\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"\\[0\\]"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"|"})}),(0,t.jsx)(r.td,{children:'\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 "\u0438\u043b\u0438"'}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"yes|no"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"[]"})}),(0,t.jsx)(r.td,{children:"\u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"[Rr]eg[Ee]xp?"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"-"})}),(0,t.jsxs)(r.td,{children:["\u0432\u043d\u0443\u0442\u0440\u0438 ",(0,t.jsx)(r.code,{children:"[]"})," \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d"]}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"[a-f]"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"^"})}),(0,t.jsxs)(r.td,{children:["\u0432\u043d\u0443\u0442\u0440\u0438 ",(0,t.jsx)(r.code,{children:"[]"})," \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u043e\u0442\u0440\u0438\u0446\u0430\u043d\u0438\u0435"]}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"[^a-f]"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"()"})}),(0,t.jsx)(r.td,{children:"\u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440 \u0433\u0440\u0443\u043f\u043f\u044b"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"([a-z])\\.com"})})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"quantifiers",children:"\u041a\u0432\u0430\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u044b"}),"\n",(0,t.jsx)(r.p,{children:"\u041a\u0432\u0430\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0435\u0442 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u0430\u0437;\n\u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044f \u043f\u043e\u0441\u043b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430, \u043a \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u043e\u043d \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0441\u044f."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"\u041a\u0432\u0430\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440"}),(0,t.jsx)(r.th,{children:"\u0427\u0438\u0441\u043b\u043e \u043f\u043e\u0432\u0442\u043e\u0440\u0435\u043d\u0438\u0439"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"?"})}),(0,t.jsx)(r.td,{children:"0 \u0438\u043b\u0438 1"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"*"})}),(0,t.jsx)(r.td,{children:"0 \u0438\u043b\u0438 \u0431\u043e\u043b\u0435\u0435"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"+"})}),(0,t.jsx)(r.td,{children:"1 \u0438\u043b\u0438 \u0431\u043e\u043b\u0435\u0435"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"{n}"})}),(0,t.jsx)(r.td,{children:"\u0440\u043e\u0432\u043d\u043e n \u0440\u0430\u0437"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"{m,n}"})}),(0,t.jsx)(r.td,{children:"\u043e\u0442 m \u0434\u043e n \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"{m,}"})}),(0,t.jsx)(r.td,{children:"\u043d\u0435 \u043c\u0435\u043d\u0435\u0435 m"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"{,n}"})}),(0,t.jsx)(r.td,{children:"\u043d\u0435 \u0431\u043e\u043b\u0435\u0435 n"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"an?"})," \u2014 \u0431\u0443\u043a\u0432\u0430 a, \u0437\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043c\u043e\u0436\u0435\u0442 \u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u044c n"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"[01]*"})," \u2014 \u043b\u044e\u0431\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u0443\u043b\u0435\u0439 \u0438/\u0438\u043b\u0438 \u0435\u0434\u0438\u043d\u0438\u0446"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"#[0-9a-f]{6}"})," \u2014 \u0440\u0435\u0448\u0451\u0442\u043a\u0430, \u0437\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 6 \u0446\u0438\u0444\u0440 \u0438/\u0438\u043b\u0438 \u0431\u0443\u043a\u0432 \u043e\u0442 a \u0434\u043e f"]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"metacharacters",children:"\u041c\u0435\u0442\u0430\u0441\u0438\u043c\u0432\u043e\u043b\u044b"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"\u041c\u0435\u0442\u0430\u0441\u0438\u043c\u0432\u043e\u043b"})," (\u0441\u0438\u043c\u0432\u043e\u043b\u044c\u043d\u044b\u0439 \u043a\u043b\u0430\u0441\u0441) \u2014 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435\n\u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043b\u044e\u0431\u043e\u043c\u0443 \u0441\u0438\u043c\u0432\u043e\u043b\u0443 \u0438\u0437 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e\u0433\u043e \u043d\u0430\u0431\u043e\u0440\u0430."]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"\u041c\u0435\u0442\u0430\u0441\u0438\u043c\u0432\u043e\u043b"}),(0,t.jsx)("td",{children:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435"}),(0,t.jsx)("td",{children:"\u041e\u0442\u0440\u0438\u0446\u0430\u043d\u0438\u0435"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"."})}),(0,t.jsx)("td",{colSpan:"2",children:"\u041b\u044e\u0431\u043e\u0439 \u0441\u0438\u043c\u0432\u043e\u043b"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"\\d"})}),(0,t.jsxs)("td",{children:["\u0426\u0438\u0444\u0440\u043e\u0432\u043e\u0439 \u0441\u0438\u043c\u0432\u043e\u043b: ",(0,t.jsx)("code",{children:"[0-9]"})]}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"\\D"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"\\s"})}),(0,t.jsxs)("td",{children:["\u041f\u0440\u043e\u0431\u0435\u043b\u044c\u043d\u044b\u0439 \u0441\u0438\u043c\u0432\u043e\u043b: ",(0,t.jsx)("code",{children:"[\\f\\n\\r\\t\\v]"})]}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"\\S"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"\\w"})}),(0,t.jsx)("td",{children:"\u0411\u0443\u043a\u0432\u044b \u0438\u043b\u0438 \u0446\u0438\u0444\u0440\u044b \u0438\u043b\u0438 \u043d\u0438\u0436\u043d\u0435\u0435 \u043f\u043e\u0434\u0447\u0451\u0440\u043a\u0438\u0432\u0430\u043d\u0438\u0435"}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"\\W"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"\\b"})}),(0,t.jsx)("td",{children:"\u0413\u0440\u0430\u043d\u0438\u0446\u0430 \u0441\u043b\u043e\u0432\u0430"}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"\\B"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"^"})}),(0,t.jsx)("td",{colSpan:"2",children:"\u041d\u0430\u0447\u0430\u043b\u043e \u0441\u0442\u0440\u043e\u043a\u0438"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"$"})}),(0,t.jsx)("td",{colSpan:"2",children:"\u041a\u043e\u043d\u0435\u0446 \u0441\u0442\u0440\u043e\u043a\u0438"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"lookarounds",children:"Lookarounds"}),"\n",(0,t.jsx)(r.p,{children:"\u041d\u0430\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u044e\u0442 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u043d\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442:\n\u0435\u0441\u043b\u0438 \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e, \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442\u0441\u044f, \u0447\u0442\u043e \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0434\u043e \u0438\u043b\u0438 \u043f\u043e\u0441\u043b\u0435 \u043d\u0435\u0433\u043e."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"\u0412\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}),(0,t.jsx)(r.th,{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"(?= )"})}),(0,t.jsx)(r.td,{children:"lookahead"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"(?! )"})}),(0,t.jsx)(r.td,{children:"negative lookahead"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"(?<= )"})}),(0,t.jsx)(r.td,{children:"lookbehind"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"(?<! )"})}),(0,t.jsx)(r.td,{children:"negative lookbehind"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b-1",children:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"look(?= for)"})," \u2014 \u043d\u0430\u0445\u043e\u0434\u0438\u0442 ",(0,t.jsx)(r.code,{children:"look"}),", \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u043b\u0438 \u043f\u043e\u0441\u043b\u0435 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 ",(0,t.jsx)(r.code,{children:" for"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"Java(?!Script)"})," \u2014 \u043d\u0430\u0445\u043e\u0434\u0438\u0442 ",(0,t.jsx)(r.code,{children:"Java"}),", \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u043b\u0438 \u043f\u043e\u0441\u043b\u0435 \u041d\u0415 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 ",(0,t.jsx)(r.code,{children:"Script"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:'(?<= ")[\\w ]+(?=" )'})," \u2014 \u043d\u0430\u0445\u043e\u0434\u0438\u0442 \u0441\u043b\u043e\u0432\u0430, \u043f\u0435\u0440\u0435\u0434 \u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u0441\u0442\u043e\u0438\u0442 ",(0,t.jsx)(r.code,{children:' "'})," \u0438 \u043f\u043e\u0441\u043b\u0435\n\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0442\u043e\u0438\u0442 ",(0,t.jsx)(r.code,{children:'" '})]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"groups",children:"\u0413\u0440\u0443\u043f\u043f\u044b"}),"\n",(0,t.jsx)(r.p,{children:'\u0413\u0440\u0443\u043f\u043f\u0430 \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u043a\u043e\u0431\u043e\u043a. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043a\u0430\u0436\u0434\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430 "\u0437\u0430\u0445\u0432\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f"\n(\u0442.\u0435. \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u0442 \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442), \u0430 \u0435\u0451 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u043c \u0441\u043b\u0443\u0436\u0438\u0442 \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u0432\u044b\u0439 \u043d\u043e\u043c\u0435\u0440.\n\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043c\u043e\u0436\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0433\u043e \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441\u0430:'}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"(?<name> )"})," \u2014 \u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430 (named group)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"(?: )"})," \u2014 \u0433\u0440\u0443\u043f\u043f\u0430 \u0431\u0435\u0437 \u0437\u0430\u0445\u0432\u0430\u0442\u0430 (non-capturing group)"]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b-2",children:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"(?:an? )(?<word>\\w+)"})," \u2014 \u043d\u0430\u0445\u043e\u0434\u0438\u0442 \u0441\u043b\u043e\u0432\u0430, \u043f\u0435\u0440\u0435\u0434 \u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u0441\u0442\u043e\u0438\u0442\n\u043d\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0439 \u0430\u0440\u0442\u0438\u043a\u043b\u044c \u0438 \u0437\u0430\u043d\u043e\u0441\u0438\u0442 \u0438\u0445 \u0432 \u0438\u043c\u0435\u043d\u043d\u0443\u044e \u0433\u0440\u0443\u043f\u043f\u0443 ",(0,t.jsx)(r.code,{children:"word"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"(\\w+)(?: +\\n)(\\w+)"})," \u2014 \u043d\u0430\u0445\u043e\u0434\u0438\u0442 2 \u0441\u043b\u043e\u0432\u0430 \u043d\u0430 \u0440\u0430\u0437\u043d\u044b\u0445 \u0441\u0442\u0440\u043e\u043a\u0430\u0445, \u043c\u0435\u0436\u0434\u0443 \u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438\n\u043f\u0435\u0440\u0435\u0434 \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u043e\u043c \u0441\u0442\u043e\u044f\u0442 \u043f\u0440\u043e\u0431\u0435\u043b\u044b; \u0432 \u043c\u0430\u0441\u0441\u0438\u0432 \u0433\u0440\u0443\u043f\u043f \u043f\u043e\u043f\u0430\u0434\u0430\u044e\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043b\u043e\u0432\u0430"]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"flags",children:"\u0424\u043b\u0430\u0433\u0438"}),"\n",(0,t.jsx)(r.p,{children:"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u043c\u043e\u0434\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d \u0446\u0435\u043b\u0438\u043a\u043e\u043c \u0438 \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044c \u0435\u043c\u0443 \u043a\u0430\u043a\u043e\u0435-\u043b\u0438\u0431\u043e \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"g"})," (",(0,t.jsx)("span",{style:{color:"#52b0ce"},children:"g"}),"lobal) \u2014 \u043f\u043e\u0438\u0441\u043a \u043d\u0435 \u043e\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f\n\u043f\u043e\u0441\u043b\u0435 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u043d\u0430\u0439\u0434\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u044f"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"i"})," (",(0,t.jsx)("span",{style:{color:"#52b0ce"},children:"i"}),"nsensitive) \u2014 \u0434\u0435\u043b\u0430\u0435\u0442 \u0448\u0430\u0431\u043b\u043e\u043d\n\u043d\u0435\u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u043a \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0443"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"u"})," (",(0,t.jsx)("span",{style:{color:"#52b0ce"},children:"u"}),"nicode) \u2014 \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043f\u043e\u043b\u043d\u0443\u044e\n\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 \u042e\u043d\u0438\u043a\u043e\u0434\u0430"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"y"})," (stick",(0,t.jsx)("span",{style:{color:"#52b0ce"},children:"y"}),") \u2014 \u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0430 \u043a \u043d\u0430\u0447\u0430\u043b\u0443\n\u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u0438\u043b\u0438 \u043a \u043a\u043e\u043d\u0446\u0443 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0433\u043e \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u044f"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"regexp",children:"JavaScript RegExp"}),"\n",(0,t.jsxs)(r.p,{children:["\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u044b\u0445 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0432 JavaScript \u0432\u0434\u043e\u0445\u043d\u043e\u0432\u043b\u0435\u043d\n",(0,t.jsx)(r.a,{href:"https://www.perl.org",children:"Perl"}),".",(0,t.jsx)("br",{}),"\n\u0415\u0441\u0442\u044c \u0434\u0432\u0430 \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0433\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f: \u043b\u0438\u0442\u0435\u0440\u0430\u043b \u0438 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440 \u043a\u043b\u0430\u0441\u0441\u0430."]}),"\n",(0,t.jsx)(i.N,{theme:"idea",tokens:[{type:"keyword.js",value:"const"},{type:"",value:" re1 = "},{type:"string.regex.js",value:"/"},{type:"string.regex.anchor.js",value:"^"},{type:"",value:"["},{type:"string.regex.text.js",value:"a"},{type:"string.regex.operator.js",value:"-"},{type:"string.regex.text.js",value:"z\u0430"},{type:"string.regex.operator.js",value:"-"},{type:"string.regex.text.js",value:"\u044f"},{type:"",value:"]"},{type:"string.regex.quantifier.js",value:"+"},{type:"string.regex.anchor.js",value:"$"},{type:"string.regex.js",value:"/iu"},{type:"",value:";"},{type:"",value:"\n"},{type:"keyword.js",value:"const"},{type:"",value:" re2 = "},{type:"keyword.operator.js",value:"new"},{type:"",value:" RegExp("},{type:"string.js",value:"'"},{type:"string.regex.anchor.js",value:"^"},{type:"",value:"["},{type:"string.regex.text.js",value:"a"},{type:"string.regex.operator.js",value:"-"},{type:"string.regex.text.js",value:"z\u0430"},{type:"string.regex.operator.js",value:"-"},{type:"string.regex.text.js",value:"\u044f"},{type:"",value:"]"},{type:"string.regex.quantifier.js",value:"+"},{type:"string.regex.anchor.js",value:"$"},{type:"string.js",value:"'"},{type:"",value:", "},{type:"string.js",value:"'iu'"},{type:"",value:");"},{type:"",value:"\n"}]}),"\n",(0,t.jsx)(r.h3,{id:"string-methods",children:"\u041c\u0435\u0442\u043e\u0434\u044b \u0441\u0442\u0440\u043e\u043a"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:".match"})," \u2014 \u043f\u043e\u0438\u0441\u043a \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u044f \u0432 \u0441\u0442\u0440\u043e\u043a\u0435 (\u0432\u0435\u0440\u043d\u0451\u0442 \u043c\u0430\u0441\u0441\u0438\u0432)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:".search"})," \u2014 \u043f\u043e\u0438\u0441\u043a \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u044f \u0432 \u0441\u0442\u0440\u043e\u043a\u0435 (\u0432\u0435\u0440\u043d\u0451\u0442 \u0438\u043d\u0434\u0435\u043a\u0441)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:".replace"})," \u2014 \u043f\u043e\u0438\u0441\u043a \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u044f \u0438 \u0437\u0430\u043c\u0435\u043d\u0430"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:".split"})," \u2014 \u0440\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u043d\u0430 \u043c\u0430\u0441\u0441\u0438\u0432 \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a"]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b-3",children:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b:"}),"\n",(0,t.jsx)(i.N,{theme:"idea",tokens:[{type:"string.js",value:"'a b_c'"},{type:"",value:"."},{type:"identifier.method.js",value:"match"},{type:"",value:"("},{type:"string.regex.js",value:"/"},{type:"",value:"["},{type:"string.regex.text.js",value:" _"},{type:"",value:"]"},{type:"string.regex.js",value:"/g"},{type:"",value:");  "},{type:"comment.js",value:"// [' ', '_']"},{type:"",value:"\n"},{type:"string.js",value:"'a b_c'"},{type:"",value:"."},{type:"identifier.method.js",value:"search"},{type:"",value:"("},{type:"string.regex.js",value:"/"},{type:"",value:"["},{type:"string.regex.text.js",value:" _"},{type:"",value:"]"},{type:"string.regex.js",value:"/"},{type:"",value:");  "},{type:"comment.js",value:"// 1"},{type:"",value:"\n"},{type:"string.js",value:"'a b_c'"},{type:"",value:"."},{type:"identifier.method.js",value:"split"},{type:"",value:"("},{type:"string.regex.js",value:"/"},{type:"",value:"["},{type:"string.regex.text.js",value:" _"},{type:"",value:"]"},{type:"string.regex.js",value:"/"},{type:"",value:");   "},{type:"comment.js",value:"// ['a', 'b', 'c']"},{type:"",value:"\n"}]}),"\n",(0,t.jsx)(r.h3,{id:"regexp-methods",children:"\u041c\u0435\u0442\u043e\u0434\u044b RegExp"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:".test"})," \u2014 \u0442\u0435\u0441\u0442 \u0441\u0442\u0440\u043e\u043a\u0438 \u043d\u0430 \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0435 \u0448\u0430\u0431\u043b\u043e\u043d\u0443"]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b-4",children:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b:"}),"\n",(0,t.jsx)(i.N,{theme:"idea",tokens:[{type:"string.regex.js",value:"/"},{type:"string.regex.anchor.js",value:"^"},{type:"string.regex.text.js",value:"0b"},{type:"",value:"["},{type:"string.regex.text.js",value:"01"},{type:"",value:"]"},{type:"string.regex.quantifier.js",value:"+"},{type:"string.regex.anchor.js",value:"$"},{type:"string.regex.js",value:"/"},{type:"",value:"."},{type:"identifier.method.js",value:"test"},{type:"",value:"("},{type:"string.js",value:"'0b10011010'"},{type:"",value:");  "},{type:"comment.js",value:"// true"},{type:"",value:"\n"},{type:"string.regex.js",value:"/"},{type:"string.regex.anchor.js",value:"^"},{type:"string.regex.text.js",value:"0b"},{type:"",value:"["},{type:"string.regex.text.js",value:"01"},{type:"",value:"]"},{type:"string.regex.quantifier.js",value:"+"},{type:"string.regex.anchor.js",value:"$"},{type:"string.regex.js",value:"/"},{type:"",value:"."},{type:"identifier.method.js",value:"test"},{type:"",value:"("},{type:"string.js",value:"'0x20A1D014'"},{type:"",value:");  "},{type:"comment.js",value:"// false"},{type:"",value:"\n"}]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h4,{id:"\u0441\u0441\u044b\u043b\u043a\u0438",children:"\u0421\u0441\u044b\u043b\u043a\u0438:"}),"\n",(0,t.jsxs)("div",{style:{display:"flex",gap:"2em"},children:[(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://regex101.com",target:"_blank",children:"regex101.com"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://regexr.com",target:"_blank",children:"regexr.com"})})]}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions",target:"_blank",children:"RegExp MDN"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://learn.javascript.ru/regular-expressions",target:"_blank",children:"RegExp JavaScript.ru"})})]})]})]})}function x(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},6463:(e,r,n)=>{n.d(r,{N:()=>l});var t=n(4848);const l=e=>{let{theme:r,tokens:n,styles:l,ligatures:c}=e;const a="idea"===r?s:d,o=i.bind(a),h=!1===c?{fontVariantLigatures:"none"}:void 0;return(0,t.jsx)("div",{className:"code-block",children:(0,t.jsx)("pre",{className:r,style:h,children:n.map(((e,r)=>{const n=o(e.type),i=e.style&&l?l[e.style]:void 0;return(0,t.jsx)("span",{className:n,style:i,children:e.value},r)}))})})};function i(e){for(;e;){const r=this[e];if(void 0!==r)return r;e=e.substring(0,e.lastIndexOf("."))}}const s={comment:"gray","comment.doc":"dark-green italic","comment.doc.tag":"shamrock italic","comment.doc.value":"light-gray italic",keyword:"orange",boolean:"orange",number:"turquoise",string:"green","string.escape":"orange","string.regex":"light-blue","string.regex.text":"green","string.regex.escape":"orange","string.regex.metacharacter":"yellow","string.regex.quantifier":"turquoise","string.regex.operator":"orange","string.regex.anchor":"orange","string.regex.punctuation":"","string.url":"green underline","identifier.constant.global":"magenta italic","identifier.this":"orange","identifier.field":"magenta","identifier.field.cpp":"dark-purple","identifier.field.static":"magenta italic","identifier.field.static.cpp":"dark-purple italic","identifier.function":"yellow","identifier.method":"yellow","identifier.method.static":"yellow italic","identifier.type.struct.cpp":"purple","identifier.type.class.cpp":"purple","identifier.type.enum.cpp":"purple","identifier.type.generic":"teal","identifier.enum-member":"magenta italic","identifier.namespace.cpp":"purple","identifier.template-value.cpp":"magenta italic","punctuation.operator.overload.cpp":"teal","preprocessor.cpp":"olive-green","preprocessor.macro.cpp":"pear","preprocessor.argument.cpp":"pear","preprocessor.argument.include.cpp":"green","tag.name":"yellow","punctuation.xml":"green","punctuation.tag":"yellow","attribute.value":"green","entity-reference":"blue",decorator:"yellow",selector:"yellow","markup.heading":"magenta","markup.list-marker":"orange","markup.code":"green","markup.code.block":"green","markup.code.block.meta":"magenta","markup.link.text":"orange","markup.link.label":"orange","markup.link.href":"yellow","markup.blockquote":"green","markup.horizontal-rule":"orange","punctuation.markup":"orange"},d={comment:"gray-90","comment.doc.tag":"cyan",keyword:"cyan",boolean:"cyan",number:"yellow",string:"pink","string.escape":"cyan","string.regex":"cyan","string.url":"pink underline","identifier.constant":"violet","identifier.this":"coral","identifier.field":"violet","identifier.field.json":"cyan","identifier.field.static":"violet inline","identifier.function":"yellow","identifier.method":"yellow","identifier.method.static":"yellow inline","identifier.type":"blue","identifier.enum-member":"violet","identifier.template-value.cpp":"","preprocessor.cpp":"lime","preprocessor.macro.cpp":"","preprocessor.argument.include.cpp":"pink","tag.name":"blue","punctuation.tag":"gray-90",attribute:"violet","attribute.value":"pink","entity-reference":"orange","markup.heading":"blue","markup.bold":"bold","markup.italic":"italic","markup.list-marker":"cyan","markup.code":"pink","markup.label":"cyan","markup.link.text":"cyan","markup.link.label":"violet","markup.link.href":"pink underline","markup.blockquote":"pink","markup.horizontal-rule":"violet","punctuation.tag.md":"cyan","punctuation.markup":"cyan","punctuation.markup.link":"","punctuation.markup.table":""}},8453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>d});var t=n(6540);const l={},i=t.createContext(l);function s(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);