"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[3740],{3124:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var r=i(4848),c=i(8453);const s={},t="\u0418\u0442\u0435\u0440\u0430\u0442\u043e\u0440\u044b",l={id:"cpp/language/iterator",title:"\u0418\u0442\u0435\u0440\u0430\u0442\u043e\u0440\u044b",description:"\u0418\u0442\u0435\u0440\u0430\u0442\u043e\u0440 \u2014 \u044d\u0442\u043e \u043e\u0431\u044a\u0435\u043a\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0435\u0440\u0435\u0431\u0438\u0440\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0432 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0435",source:"@site/notes/cpp/language/iterator.md",sourceDirName:"cpp/language",slug:"/cpp/language/iterator",permalink:"/notes/cpp/language/iterator",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"\u041f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0442\u0438\u043f\u043e\u0432",permalink:"/notes/cpp/language/casting"},next:{title:"Copy elision",permalink:"/notes/cpp/language/copy-elision"}},d={},o=[{value:"\u0412\u0438\u0434\u044b \u0438\u0442\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u0432",id:"kinds",level:2},{value:"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441",id:"interface",level:2},{value:"\u0420\u0430\u0437\u044b\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435",id:"dereference",level:4},{value:"\u0418\u043d\u043a\u0440\u0435\u043c\u0435\u043d\u0442 \u0438 \u0434\u0435\u043a\u0440\u0435\u043c\u0435\u043d\u0442:",id:"increment-decrement",level:4},{value:"\u041f\u0435\u0440\u0435\u0445\u043e\u0434 \u043a \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u043c\u0443 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0443:",id:"move",level:4},{value:"\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435:",id:"comparison",level:4},{value:"STL",id:"stl",level:2},{value:"Range-base loop",id:"range-base-loop",level:2}];function a(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u0438\u0442\u0435\u0440\u0430\u0442\u043e\u0440\u044b",children:"\u0418\u0442\u0435\u0440\u0430\u0442\u043e\u0440\u044b"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("dfn",{children:"\u0418\u0442\u0435\u0440\u0430\u0442\u043e\u0440"})," \u2014 \u044d\u0442\u043e \u043e\u0431\u044a\u0435\u043a\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0435\u0440\u0435\u0431\u0438\u0440\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0432 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0435\n\u0438 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u043c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c. \u0418\u0442\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u044e\u0442\n\u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u044e, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430\u043c\u0438 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c,\n\u043d\u0435 \u0437\u0430\u0432\u0438\u0441\u044f \u043e\u0442 \u0438\u0445 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'std::string s = "123";\nstd::string::iterator s_it = s.begin();\n\nstd::list<int> l = {1, 2, 3};\nstd::list<int>::iterator l_it = l.begin();\n\nstd::vector<int> v = {1, 2, 3};\nstd::vector<int>::iterator v_it = v.begin();\n'})}),"\n",(0,r.jsx)(n.h2,{id:"kinds",children:"\u0412\u0438\u0434\u044b \u0438\u0442\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u0432"}),"\n",(0,r.jsx)(n.p,{children:"\u0415\u0441\u0442\u044c \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043f\u043e \u0434\u0432\u0443\u043c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u043c:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"\u043f\u0440\u044f\u043c\u043e\u0439"})," \u0438 ",(0,r.jsx)(n.em,{children:"\u043e\u0431\u0440\u0430\u0442\u043d\u044b\u0439"})," \u2014 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043f\u0440\u043e\u0445\u043e\u0434\u0430 \u043f\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c; \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0434\u043b\u044f\n\u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0438\u0442\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u0438\u043d\u043a\u0440\u0435\u043c\u0435\u043d\u0442\u0430 \u0441\u043c\u0435\u0449\u0430\u0435\u0442 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u0432 \u0431\u043b\u0438\u0436\u0435 \u043a \u043d\u0430\u0447\u0430\u043b\u0443"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"\u0438\u0437\u043c\u0435\u043d\u044f\u0435\u043c\u044b\u0439"})," \u0438 ",(0,r.jsx)(n.em,{children:"\u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u043d\u044b\u0439"})," \u2014 \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u0435\u0442 \u0438\u043b\u0438 \u0437\u0430\u043f\u0440\u0435\u0449\u0430\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b,\n\u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0438\u0442\u0435\u0440\u0430\u0442\u043e\u0440"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441"}),"\n",(0,r.jsx)(n.p,{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u0442\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u0432 \u043e\u0447\u0435\u043d\u044c \u043f\u043e\u0445\u043e\u0436\u0435 \u043d\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0443\u043a\u0430\u0437\u0430\u0442\u0435\u0439."}),"\n",(0,r.jsx)(n.h4,{id:"dereference",children:"\u0420\u0430\u0437\u044b\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"operator*"})," \u2014 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\n\u0438\u0442\u0435\u0440\u0430\u0442\u043e\u0440"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"operator->"})," \u2014 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u0442\u0435\u0440\u0430\u0442\u043e\u0440, \u043a\u0430\u043a \u0435\u0441\u043b\u0438 \u0431\u044b \u043e\u043d \u0431\u044b\u043b\n\u0443\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0435\u043c \u043d\u0430 \u043e\u0431\u044a\u0435\u043a\u0442"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"struct Point { float x; float y; };\nstd::vector<Point> v = {{0, 0}, {1, 1}};\n\nauto it = v.rbegin();\n*it = {0, 2};\nit->x = 2;\n"})}),"\n",(0,r.jsx)(n.h4,{id:"increment-decrement",children:"\u0418\u043d\u043a\u0440\u0435\u043c\u0435\u043d\u0442 \u0438 \u0434\u0435\u043a\u0440\u0435\u043c\u0435\u043d\u0442:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"operator++"})," \u2014 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0430\u0435\u0442 \u0438\u0442\u0435\u0440\u0430\u0442\u043e\u0440 \u043d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442; \u043f\u0440\u0435\u0444\u0438\u043a\u0441\u043d\u044b\u0439\n\u0438\u043d\u043a\u0440\u0435\u043c\u0435\u043d\u0442 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0439 \u0438\u0442\u0435\u0440\u0430\u0442\u043e\u0440, \u0430 \u043f\u043e\u0441\u0442\u0444\u0438\u043a\u0441\u043d\u044b\u0439 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,r.jsx)(n.em,{children:"\u043a\u043e\u043f\u0438\u044e"}),"\n\u0438\u0442\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u043f\u0435\u0440\u0435\u0434 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435\u043c"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"operator--"})," \u2014 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0430\u0435\u0442 \u0438\u0442\u0435\u0440\u0430\u0442\u043e\u0440 \u043d\u0430 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442; \u043f\u0440\u0435\u0444\u0438\u043a\u0441\u043d\u044b\u0439\n\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0439 \u0438\u0442\u0435\u0440\u0430\u0442\u043e\u0440, \u0430 \u043f\u043e\u0441\u0442\u0444\u0438\u043a\u0441\u043d\u044b\u0439 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,r.jsx)(n.em,{children:"\u043a\u043e\u043f\u0438\u044e"})," \u0438\u0442\u0435\u0440\u0430\u0442\u043e\u0440\u0430\n\u043f\u0435\u0440\u0435\u0434 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435\u043c"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"int i;\nstd::vector<int> v = {1, 2, 3};\n\nauto it = v.begin();\n++it;\ni = *it; // i == 2\n--it;\ni = *it; // i == 1\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f, \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u0435\u0444\u0438\u043a\u0441\u043d\u0443\u044e\n\u0437\u0430\u043f\u0438\u0441\u044c (",(0,r.jsx)(n.code,{children:"++it"})," \u0432\u043c\u0435\u0441\u0442\u043e ",(0,r.jsx)(n.code,{children:"it++"}),"), \u0442.\u043a. \u043e\u043d\u0430 \u043d\u0435 \u0441\u043e\u0437\u0434\u0430\u0451\u0442 \u043a\u043e\u043f\u0438\u0438."]})}),"\n",(0,r.jsx)(n.h4,{id:"move",children:"\u041f\u0435\u0440\u0435\u0445\u043e\u0434 \u043a \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u043c\u0443 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0443:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"operator+"})," \u0438 ",(0,r.jsx)(n.code,{children:"operator-"})," \u2014 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0442 \u043d\u043e\u0432\u044b\u0439 \u0438\u0442\u0435\u0440\u0430\u0442\u043e\u0440, \u0441\u043c\u0435\u0449\u0451\u043d\u043d\u044b\u0439\n\u043d\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u0437\u0438\u0446\u0438\u0439"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"operator+="})," \u0438 ",(0,r.jsx)(n.code,{children:"operator-="})," \u2014 \u0441\u043c\u0435\u0449\u0430\u044e\u0442 \u0438\u0442\u0435\u0440\u0430\u0442\u043e\u0440 \u043d\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e\n\u043f\u043e\u0437\u0438\u0446\u0438\u0439"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"int i;\nstd::vector<int> v = {1, 2, 3};\n\nauto it = v.cbegin();\nit += 2;\ni = *it;       // i == 3\ni = *(it - 2); // i == 1\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u0412\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ",(0,r.jsx)(n.code,{children:"*(it - 2)"}),", \u043a\u0430\u043a \u0438 \u0434\u043b\u044f \u0443\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044f, \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043e \u043a\u0430\u043a ",(0,r.jsx)(n.code,{children:"it[-2]"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"comparison",children:"\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"operator=="})," \u2014 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,r.jsx)(n.code,{children:"true"}),", \u0435\u0441\u043b\u0438 \u0438\u043d\u0442\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442\n\u043d\u0430 \u043e\u0434\u0438\u043d \u0438 \u0442\u043e\u0442 \u0436\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"operator!="})," \u2014 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,r.jsx)(n.code,{children:"true"}),", \u0435\u0441\u043b\u0438 \u0438\u043d\u0442\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442\n\u043d\u0430 \u0440\u0430\u0437\u043d\u044b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"stl",children:"STL"}),"\n",(0,r.jsx)(n.p,{children:"\u0411\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0439 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442 \u0438\u0442\u0435\u0440\u0430\u0442\u043e\u0440\u044b\n\u0434\u043b\u044f \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u043f\u043e \u0441\u0432\u043e\u0438\u043c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c \u0438 \u0438\u043c\u0435\u044e\u0442 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u0438\u0442\u0435\u0440\u0430\u0442\u043e\u0440\u044b: ",(0,r.jsx)(n.code,{children:"begin"})," \u0438 ",(0,r.jsx)(n.code,{children:"end"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u043d\u044b\u0435 \u0438\u0442\u0435\u0440\u0430\u0442\u043e\u0440\u044b: ",(0,r.jsx)(n.code,{children:"cbegin"})," \u0438 ",(0,r.jsx)(n.code,{children:"cend"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u043e\u0431\u0440\u0430\u0442\u043d\u044b\u0435 \u0438\u043d\u0442\u0435\u0440\u0430\u0442\u043e\u0440\u044b: ",(0,r.jsx)(n.code,{children:"rbegin"})," \u0438 ",(0,r.jsx)(n.code,{children:"rend"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u043d\u044b\u0435 \u043e\u0431\u0440\u0430\u0442\u043d\u044b\u0435 \u0438\u0442\u0435\u0440\u0430\u0442\u043e\u0440\u044b: ",(0,r.jsx)(n.code,{children:"crbegin"})," \u0438 ",(0,r.jsx)(n.code,{children:"crend"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'\u0417\u0434\u0435\u0441\u044c "c" \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 "const", \u0430 "r" \u2014 "reverse".'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"std::list<int> l = {1, 2, 3};\n\n// iterator\nl.begin(); l.end();\n\n// const iterator\nl.cbegin(); l.cend();\n\n// reverse iterator\nl.rbegin(); l.rend();\n\n// const reverse iterator\nl.crbegin(); l.crend();\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u041c\u0435\u0442\u043e\u0434\u044b \u0432\u0438\u0434\u0430 ",(0,r.jsx)(n.code,{children:"begin"})," \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442 \u043d\u0430 \u043f\u0435\u0440\u0432\u044b\u0439 (\u0441 \u0443\u0447\u0451\u0442\u043e\u043c \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f) \u044d\u043b\u0435\u043c\u0435\u043d\u0442\n\u0432 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0435, \u0430 ",(0,r.jsx)(n.code,{children:"end"}),' \u2014 \u043d\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442, "\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u043c". \u042d\u0442\u043e \u043d\u0443\u0436\u043d\u043e\n\u0434\u043b\u044f \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u0446\u0438\u043a\u043b\u0430.']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"for (auto it = l.begin(); it != l.end(); ++it) {\n  // forward direction\n}\n\nfor (auto rit = l.rbegin(); rit != l.rend(); ++rit) {\n  // backward direction\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u041a\u043b\u0430\u0441\u0441 \u0438\u0442\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0441\u0430\u043c \u043f\u043e \u0441\u0435\u0431\u0435, \u0431\u0435\u0437 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u044d\u0442\u0438\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432, \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d\n\u0447\u0435\u0440\u0435\u0437 ",(0,r.jsx)(n.code,{children:"*::iterator"}),"; \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0434\u043b\u044f \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 ",(0,r.jsx)(n.code,{children:"std::map<int, int>"})," \u043a\u043b\u0430\u0441\u0441\n\u0438\u0442\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u043a\u0430\u043a ",(0,r.jsx)(n.code,{children:"std::map<int, int>::iterator"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"range-base-loop",children:"Range-base loop"}),"\n",(0,r.jsx)(n.p,{children:"\u0417\u0430\u043f\u0438\u0441\u044c \u0432\u0438\u0434\u0430"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"for (auto it = container.begin(); it != container.end(); ++it) {\n  auto& element = *it;\n  // some actions with the element\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0443\u043f\u0440\u043e\u0449\u0435\u043d\u0430 \u0434\u043e \u0432\u0438\u0434\u0430"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"for (auto& element : container) {\n  // some actions with the element\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u0438 \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f ",(0,r.jsx)(n.strong,{children:"range-based loop"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var r=i(6540);const c={},s=r.createContext(c);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);