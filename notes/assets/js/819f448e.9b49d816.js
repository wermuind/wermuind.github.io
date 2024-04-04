"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[5169],{5432:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=c(5893),s=c(1151);const r={},i="\u041f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0442\u0438\u043f\u043e\u0432",a={id:"cpp/language/casting",title:"\u041f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0442\u0438\u043f\u043e\u0432",description:"C++ \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 4 \u0432\u0438\u0434\u0430 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u043e\u0432: staticcast, dynamiccast,",source:"@site/notes/cpp/language/casting.md",sourceDirName:"cpp/language",slug:"/cpp/language/casting",permalink:"/notes/cpp/language/casting",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440\u044b \u0438 \u0434\u0435\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440",permalink:"/notes/cpp/language/constructor"},next:{title:"\u0418\u0442\u0435\u0440\u0430\u0442\u043e\u0440\u044b",permalink:"/notes/cpp/language/iterator"}},l={},d=[{value:"C-style cast",id:"c-style-cast",level:3},{value:"Static cast",id:"static-cast",level:3},{value:"Const cast",id:"const-cast",level:3},{value:"Reinterpret cast",id:"reinterpret-cast",level:3},{value:"Dynamic cast",id:"dynamic-cast",level:3},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:3}];function p(n){const e={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"\u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u0435-\u0442\u0438\u043f\u043e\u0432",children:"\u041f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0442\u0438\u043f\u043e\u0432"}),"\n",(0,t.jsxs)(e.p,{children:["C++ \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 4 \u0432\u0438\u0434\u0430 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u043e\u0432: ",(0,t.jsx)(e.code,{children:"static_cast"}),", ",(0,t.jsx)(e.code,{children:"dynamic_cast"}),",\n",(0,t.jsx)(e.code,{children:"const_cast"}),", ",(0,t.jsx)(e.code,{children:"reinterpret_cast"}),", \u0430 \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 \u0441\u0442\u0438\u043b\u0435 \u0421\u0438."]}),"\n",(0,t.jsx)(e.h3,{id:"c-style-cast",children:"C-style cast"}),"\n",(0,t.jsx)(e.p,{children:"\u041f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0442\u0438\u043f\u043e\u0432 \u0432 \u0441\u0442\u0438\u043b\u0435 \u0421\u0438 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043b\u044e\u0431\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u043a \u043b\u044e\u0431\u043e\u043c\u0443\n\u0434\u0440\u0443\u0433\u043e\u043c\u0443 \u0442\u0438\u043f\u0443, \u0437\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u0442\u0438\u043f\u043e\u0432\n\u043f\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e, \u0435\u0441\u043b\u0438 \u043d\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u044b \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0438\u0445 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u044f, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u044f\n\u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u043a \u0443\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044e \u0438\u043b\u0438 \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"float x = 0.9;\nstd::cout << (int)x << std::endl;    // 0\nstd::cout << (double)x << std::endl; // 0.9\n"})}),"\n",(0,t.jsx)(e.h3,{id:"static-cast",children:"Static cast"}),"\n",(0,t.jsxs)(e.p,{children:["\u041f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043d\u0435\u043f\u043e\u043b\u0438\u043c\u043e\u0440\u0444\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u043e\u0432 \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0446\u0438\u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b.\n\u041e\u0442\u043b\u0438\u0447\u0438\u0435 ",(0,t.jsx)(e.code,{children:"static_cast"})," \u043e\u0442 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0432 \u0441\u0442\u0438\u043b\u0435 \u0421\u0438 \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0439\n\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u043c\u043e\u0436\u0435\u0442 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0442\u044c \u043d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f (\u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0434\u0430\u043d\u0430 \u043e\u0448\u0438\u0431\u043a\u0430\n\u043d\u0430 \u044d\u0442\u0430\u043f\u0435 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0446\u0438\u0438)."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"enum class Encoding { ASCII, UTF8, UTF16 };\nstd::cout << static_cast<int>(Encoding::UTF8); // 1\n"})}),"\n",(0,t.jsx)(e.h3,{id:"const-cast",children:"Const cast"}),"\n",(0,t.jsxs)(e.p,{children:["\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u0438\u043b\u0438 \u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b ",(0,t.jsx)(e.code,{children:"const"})," \u0438 ",(0,t.jsx)(e.code,{children:"volatile"})," (",(0,t.jsx)(e.em,{children:"cv-qualifiers"}),")\n\u0443 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f. \u0414\u0440\u0443\u0433\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u043e\u0432 \u043d\u0435 \u0432\u043b\u0438\u044f\u044e\u0442 \u043d\u0430 \u044d\u0442\u0438 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:'const std::string s = "const";\nconst_cast<std::string&>(s).insert(0, "no ");\nstd::cout << s; // "no const"\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u041d\u0435 \u043a\u043e\u043c\u043f\u0438\u043b\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0432 \u043a\u0430\u043a\u0438\u0435-\u043b\u0438\u0431\u043e \u043c\u0430\u0448\u0438\u043d\u043d\u044b\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438."}),"\n",(0,t.jsx)(e.h3,{id:"reinterpret-cast",children:"Reinterpret cast"}),"\n",(0,t.jsx)(e.p,{children:'"\u041f\u0435\u0440\u0435\u043e\u0441\u043c\u044b\u0441\u043b\u0438\u0432\u0430\u0435\u0442" \u0442\u0438\u043f; \u044d\u0442\u043e \u0434\u0438\u0440\u0435\u043a\u0442\u0438\u0432\u0430 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\n\u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u0443 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0442\u0430\u043a, \u043a\u0430\u043a \u0435\u0441\u043b\u0438 \u0431\u044b \u043e\u043d\u043e \u0438\u043c\u0435\u043b\u043e \u0446\u0435\u043b\u0435\u0432\u043e\u0439 \u0442\u0438\u043f.'}),"\n",(0,t.jsx)(e.p,{children:"\u041c\u043e\u0436\u0435\u0442 \u0434\u0435\u043b\u0430\u0442\u044c \u043d\u0435\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0442\u0438\u043f\u043e\u0432 \u0447\u0435\u0440\u0435\u0437 \u0441\u0441\u044b\u043b\u043a\u0438 \u0438 \u0443\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0438,\n\u043d\u043e \u043d\u0435 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u043f\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"struct Point  { float x; float y; };\nstruct Vector { float x; float y; };\n\nauto* p = new Point{1, 2};\nauto* v = reinterpret_cast<Vector*>(p);\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u041d\u0435 \u043a\u043e\u043c\u043f\u0438\u043b\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0432 \u043a\u0430\u043a\u0438\u0435-\u043b\u0438\u0431\u043e \u043c\u0430\u0448\u0438\u043d\u043d\u044b\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438."}),"\n",(0,t.jsx)(e.h3,{id:"dynamic-cast",children:"Dynamic cast"}),"\n",(0,t.jsx)(e.p,{children:"\u041f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u0438\u043c\u043e\u0440\u0444\u043d\u044b\u0445 \u0442\u0438\u043f\u043e\u0432 \u043f\u043e \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0438 \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f (\u043a\u043b\u0430\u0441\u0441\n\u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u043b\u0438\u043c\u043e\u0440\u0444\u043d\u044b\u043c, \u0435\u0441\u043b\u0438 \u0432 \u043d\u0435\u043c \u0435\u0441\u0442\u044c \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0430 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f)."}),"\n",(0,t.jsx)(e.p,{children:"\u0415\u0441\u043b\u0438 \u0443\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c \u0438\u043b\u0438 \u0441\u0441\u044b\u043b\u043a\u0430, \u043f\u043e\u0434\u043b\u0435\u0436\u0430\u0449\u0438\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u044e, \u0441\u0441\u044b\u043b\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\n\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u044e\u0449\u0435\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430 \u0438\u043b\u0438 \u043e\u0431\u044a\u0435\u043a\u0442 \u043a\u043b\u0430\u0441\u0441\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u043d\u044b\u0439 \u043e\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u044e\u0449\u0435\u0433\u043e,\n\u0442\u043e \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u044b\u043c."}),"\n",(0,t.jsxs)(e.p,{children:["\u0415\u0441\u043b\u0438 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u0442\u043e \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0431\u0443\u0434\u0435\u0442 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d\n",(0,t.jsx)(e.code,{children:"nullptr"}),", \u0435\u0441\u043b\u0438 \u043f\u0440\u0438\u0432\u043e\u0434\u044f\u0442\u0441\u044f \u0443\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0438. \u0415\u0441\u043b\u0438 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f\n\u043d\u0430\u0434 \u0441\u0441\u044b\u043b\u043a\u0430\u043c\u0438, \u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 ",(0,t.jsx)(e.code,{children:"std::bad_cast"}),"."]}),"\n",(0,t.jsx)(e.p,{children:"\u0421\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442\u044c \u043f\u043e\u043b\u0438\u043c\u043e\u0440\u0444\u043d\u044b\u0435 \u0442\u0438\u043f\u044b \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 RTTI\n(Run-Time Type Identification), \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u0438\u043f \u043e\u0431\u044a\u0435\u043a\u0442\u0430\n\u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b."}),"\n",(0,t.jsx)(e.h3,{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u0434\u043b\u044f \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0439 \u0430\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0442\u0438\u043f\u043e\u0432 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0435\u0435 \u0432\u0441\u0435\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\n\u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u0432 \u0444\u0438\u0433\u0443\u0440\u043d\u044b\u0445 \u0441\u043a\u043e\u0431\u043a\u0430\u0445 ",(0,t.jsx)(e.code,{children:"int{x}"}),"; \u043a\u043e\u0434 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043a\u043e\u043c\u043f\u0438\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f,\n\u0435\u0441\u043b\u0438 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u043f\u043e\u0442\u0435\u0440\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"static_cast"})," \u043e\u0431\u044b\u0447\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0432 \u0441\u0442\u0438\u043b\u0435 \u0421\u0438"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"const_cast"})," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0441\u043d\u044f\u0442\u0438\u044f \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 ",(0,t.jsx)(e.code,{children:"const"})," \u0438\u043b\u0438 ",(0,t.jsx)(e.code,{children:"volatile"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"reinterpret_cast"})," \u043e\u0431\u044b\u0447\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043d\u0435\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u0445 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0439\n\u0442\u0438\u043f\u043e\u0432 \u0443\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0435\u0439 \u0432 \u0446\u0435\u043b\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0435 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0442\u0438\u043f\u044b \u0443\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0435\u0439, \u0432\u043a\u043b\u044e\u0447\u0430\u044f ",(0,t.jsx)(e.code,{children:"void*"}),"\n\u0438 \u043e\u0431\u0440\u0430\u0442\u043d\u043e; \u0435\u0433\u043e \u043d\u0443\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c, \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u0442\u044c \u0447\u0451\u0442\u043a\u043e\u0435 \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u0435\n\u0447\u0442\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.p,{children:"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://habr.com/ru/articles/266747/",children:"https://habr.com/ru/articles/266747/"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://en.cppreference.com/w/cpp/language/static_cast",children:"https://en.cppreference.com/w/cpp/language/static_cast"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://en.cppreference.com/w/cpp/language/dynamic_cast",children:"https://en.cppreference.com/w/cpp/language/dynamic_cast"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://en.cppreference.com/w/cpp/language/const_cast",children:"https://en.cppreference.com/w/cpp/language/const_cast"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://en.cppreference.com/w/cpp/language/reinterpret_cast",children:"https://en.cppreference.com/w/cpp/language/reinterpret_cast"})}),"\n"]})]})}function o(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}},1151:(n,e,c)=>{c.d(e,{Z:()=>a,a:()=>i});var t=c(7294);const s={},r=t.createContext(s);function i(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);