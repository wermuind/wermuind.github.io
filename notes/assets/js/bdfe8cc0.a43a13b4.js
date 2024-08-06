"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[71],{7121:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>x,frontMatter:()=>r,metadata:()=>t,toc:()=>d});var s=i(5893),c=i(1151);const r={},l="Semantic Versioning",t={id:"common/semver",title:"Semantic Versioning",description:"\u0421\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0432\u0435\u0440\u0441\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u2014 \u044d\u0442\u043e \u043f\u043e\u0434\u0445\u043e\u0434, \u043d\u0430\u0431\u043e\u0440 \u043f\u0440\u0430\u0432\u0438\u043b \u0438",source:"@site/notes/common/semver.md",sourceDirName:"common",slug:"/common/semver",permalink:"/notes/common/semver",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"\u041a\u043e\u043c\u0430\u043d\u0434\u043d\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430",permalink:"/notes/common/cli"},next:{title:"Git",permalink:"/notes/common/git"}},o={},d=[{value:"\u0421\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f",id:"specification",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0432\u0435\u0440\u0441\u0438\u0439:",id:"examples",level:4}];function h(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",ul:"ul",...(0,c.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"semantic-versioning",children:"Semantic Versioning"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)("dfn",{children:"\u0421\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0432\u0435\u0440\u0441\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"})," \u2014 \u044d\u0442\u043e \u043f\u043e\u0434\u0445\u043e\u0434, \u043d\u0430\u0431\u043e\u0440 \u043f\u0440\u0430\u0432\u0438\u043b \u0438\n\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442, \u043a\u0430\u043a \u043d\u0430\u0437\u043d\u0430\u0447\u0430\u044e\u0442\u0441\u044f \u0438 \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u043d\u043e\u043c\u0435\u0440\u0430 \u0432\u0435\u0440\u0441\u0438\u0439."]}),"\n",(0,s.jsx)(e.p,{children:"\u0421\u0443\u0442\u044c \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 API \u043e\u0442\u0440\u0430\u0436\u0430\u044e\u0442\u0441\u044f \u0432 \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0438\n\u0432\u0435\u0440\u0441\u0438\u0438 \u043e\u0441\u043e\u0431\u044b\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c. \u0422\u043e, \u043a\u0430\u043a \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u0432\u0435\u0440\u0441\u0438\u044f \u0438 \u0442\u043e, \u043a\u0430\u043a \u043e\u043d\u0430 \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f,\n\u043f\u0435\u0440\u0435\u0434\u0430\u0451\u0442 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439, \u0447\u0442\u043e \u0431\u044b\u043b\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043e \u043e\u0442 \u043e\u0434\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043a \u0434\u0440\u0443\u0433\u043e\u0439."}),"\n",(0,s.jsx)(e.h2,{id:"specification",children:"\u0421\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsxs)(e.p,{children:["\u041f\u0435\u0440\u0432\u043e\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a: ",(0,s.jsx)(e.a,{href:"https://semver.org",children:"https://semver.org"})]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u041f\u041e, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0435\u0435 \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0432\u0435\u0440\u0441\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435, \u0434\u043e\u043b\u0436\u043d\u043e \u043e\u0431\u044a\u044f\u0432\u0438\u0442\u044c\n\u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 API."}),"\n",(0,s.jsxs)(e.li,{children:["\u041e\u0431\u044b\u0447\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0432\u0435\u0440\u0441\u0438\u0438 \u0434\u043e\u043b\u0436\u0435\u043d \u0438\u043c\u0435\u0442\u044c \u0444\u043e\u0440\u043c\u0430\u0442 ",(0,s.jsx)(e.code,{children:"X.Y.Z"}),", \u0433\u0434\u0435","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"X \u2014 \u043c\u0430\u0436\u043e\u0440\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f (major)"}),"\n",(0,s.jsx)(e.li,{children:"Y \u2014 \u043c\u0438\u043d\u043e\u0440\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f (minor)"}),"\n",(0,s.jsx)(e.li,{children:"Z \u2014 \u043f\u0430\u0442\u0447-\u0432\u0435\u0440\u0441\u0438\u044f     (patch)"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"\u041f\u043e\u0441\u043b\u0435 \u0440\u0435\u043b\u0438\u0437\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f, \u043b\u044e\u0431\u043e\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u2014\n\u043d\u043e\u0432\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f."}),"\n",(0,s.jsxs)(e.li,{children:["\u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0432\u0435\u0440\u0441\u0438\u0438 \u0432\u0438\u0434\u0430 ",(0,s.jsx)(e.code,{children:"0.Y.Z"}),", \u043a\u043e\u0442\u043e\u0440\u044b\u0435\n\u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u044e\u0442 \u043e\u0431\u0440\u0430\u0442\u043d\u0443\u044e \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c \u0438 \u0447\u0430\u0441\u0442\u043e \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043d\u0435\u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u044b\u043c\u0438."]}),"\n",(0,s.jsxs)(e.li,{children:["\u041d\u0430\u0447\u0438\u043d\u0430\u044f \u0441 \u0432\u0435\u0440\u0441\u0438\u0438 ",(0,s.jsx)(e.code,{children:"1.0.0"})," API \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u044b\u043c, \u0430 \u0432\u0441\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435\n\u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0437\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u043f\u043e \u0441\u0442\u0440\u043e\u0433\u0438\u043c \u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c."]}),"\n",(0,s.jsxs)(e.li,{children:["\u041f\u0430\u0442\u0447-\u0432\u0435\u0440\u0441\u0438\u044f ",(0,s.jsx)(e.code,{children:"x.y.Z"})," \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u043b\u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\n\u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u044b\u0435 \u0431\u0430\u0433-\u0444\u0438\u043a\u0441\u044b, \u0442.\u0435. \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\n\u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435."]}),"\n",(0,s.jsxs)(e.li,{children:["\u041c\u0438\u043d\u043e\u0440\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f ",(0,s.jsx)(e.code,{children:"x.Y.z"})," \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0430, \u0435\u0441\u043b\u0438 \u0432 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u043c API\n\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0430 \u043d\u043e\u0432\u0430\u044f \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c."]}),"\n",(0,s.jsxs)(e.li,{children:["\u041c\u0430\u0436\u043e\u0440\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f ",(0,s.jsx)(e.code,{children:"X.y.z"})," \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0430, \u0435\u0441\u043b\u0438 \u0432 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u043c API \u0435\u0441\u0442\u044c\n\u043e\u0431\u0440\u0430\u0442\u043d\u043e \u043d\u0435\u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f. \u041c\u0438\u043d\u043e\u0440\u043d\u0430\u044f \u0438 \u043f\u0430\u0442\u0447-\u0432\u0435\u0440\u0441\u0438\u044f \u043e\u0431\u043d\u0443\u043b\u044f\u044e\u0442\u0441\u044f."]}),"\n",(0,s.jsx)(e.li,{children:"\u041f\u0440\u0435\u0434\u0440\u0435\u043b\u0438\u0437\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u0434\u0435\u0444\u0438\u0441\u0430 \u0438 \u0441\u0435\u0440\u0438\u0435\u0439\n\u0440\u0430\u0437\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0445 \u0442\u043e\u0447\u043a\u043e\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u0432, \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0441\u0440\u0430\u0437\u0443 \u0437\u0430 \u043f\u0430\u0442\u0447-\u0432\u0435\u0440\u0441\u0438\u0435\u0439."}),"\n",(0,s.jsx)(e.li,{children:"\u0421\u0431\u043e\u0440\u043e\u0447\u043d\u044b\u0435 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u044b \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u0437\u043d\u0430\u043a\u0430 \u043f\u043b\u044e\u0441 \u0438 \u0440\u044f\u0434\u0430\n\u0440\u0430\u0437\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0445 \u0442\u043e\u0447\u043a\u043e\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u0432."}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"examples",children:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0432\u0435\u0440\u0441\u0438\u0439:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"0.1.0"})," \u2014 \u0432\u0435\u0440\u0441\u0438\u044f \u0441\u0442\u0430\u0434\u0438\u0438 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"4.42.2"})," \u2014 \u043e\u0431\u044b\u0447\u043d\u0430\u044f \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"1.0.0-aplha.1"})," \u2014 \u0432\u0435\u0440\u0441\u0438\u044f \u0434\u043b\u044f \u0430\u043b\u044c\u0444\u0430 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"1.2.3-rc1"})," \u2014 release candidate"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"1.0.0-beta.4+202405222303"})," \u2014 \u0432\u0435\u0440\u0441\u0438\u044f \u0441 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0441\u0431\u043e\u0440\u043a\u0438"]}),"\n"]})]})}function x(n={}){const{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>t,a:()=>l});var s=i(7294);const c={},r=s.createContext(c);function l(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);