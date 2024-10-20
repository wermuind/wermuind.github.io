"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[9550],{8025:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var c=r(4848),t=r(8453);const i={},s="\u0421\u0441\u044b\u043b\u043a\u0438",o={id:"cpp/language/reference",title:"\u0421\u0441\u044b\u043b\u043a\u0438",description:"\u0421\u0441\u044b\u043b\u043a\u0430 \u0432 \u0421++ \u2014 \u044d\u0442\u043e \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f, \u0445\u0440\u0430\u043d\u044f\u0449\u0430\u044f \u0430\u0434\u0440\u0435\u0441 \u043a\u0430\u043a\u043e\u0439-\u043b\u0438\u0431\u043e \u0434\u0440\u0443\u0433\u043e\u0439",source:"@site/notes/cpp/language/reference.md",sourceDirName:"cpp/language",slug:"/cpp/language/reference",permalink:"/notes/cpp/language/reference",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"\u042f\u0437\u044b\u043a",permalink:"/notes/category/\u044f\u0437\u044b\u043a"},next:{title:"\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440\u044b \u0438 \u0434\u0435\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440",permalink:"/notes/cpp/language/constructor"}},a={},l=[{value:"\u041f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435",id:"passing-by-reference",level:2}];function p(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.header,{children:(0,c.jsx)(e.h1,{id:"\u0441\u0441\u044b\u043b\u043a\u0438",children:"\u0421\u0441\u044b\u043b\u043a\u0438"})}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)("dfn",{children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u0432 \u0421++"})," \u2014 \u044d\u0442\u043e \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f, \u0445\u0440\u0430\u043d\u044f\u0449\u0430\u044f \u0430\u0434\u0440\u0435\u0441 \u043a\u0430\u043a\u043e\u0439-\u043b\u0438\u0431\u043e \u0434\u0440\u0443\u0433\u043e\u0439\n\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439, \u043d\u043e, \u0432 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 \u0443\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044f, \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u0430 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439,\n\u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043e\u043d\u0430 \u0441\u0441\u044b\u043b\u0430\u0435\u0442\u0441\u044f. \u0422.\u0435. \u043b\u044e\u0431\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u043d\u0430\u0434 \u0441\u0441\u044b\u043b\u043a\u043e\u0439 \u043d\u0430 \u0441\u0430\u043c\u043e\u043c \u0434\u0435\u043b\u0435 \u0431\u0443\u0434\u0443\u0442\n\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u043d\u0430\u0434 \u0442\u043e\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043e\u043d\u0430 \u0441\u0441\u044b\u043b\u0430\u0435\u0442\u0441\u044f.\n\u042d\u0442\u043e \u043a\u0430\u0441\u0430\u0435\u0442\u0441\u044f \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u0432 ",(0,c.jsx)(e.code,{children:"sizeof"})," \u0438 ",(0,c.jsx)(e.code,{children:"typeid"}),"."]}),"\n",(0,c.jsx)(e.p,{children:"\u0418\u0437-\u0437\u0430 \u044d\u0442\u043e\u0433\u043e \u0441\u0430\u043c\u0443 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c (\u0435\u0451 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0451\u0442\u0441\u044f \u0432 \u043c\u043e\u043c\u0435\u043d\u0442\n\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0438 \u043e\u0441\u0442\u0430\u0451\u0442\u0441\u044f \u043d\u0435\u0438\u0437\u043c\u0435\u043d\u043d\u044b\u043c) \u0438 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u043e\u0431\u044a\u044f\u0432\u0438\u0442\u044c \u0431\u0435\u0437 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0433\u043e\n\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f."}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:"int x = 1;   // integer variable\nint* p = &x; // pointer to x\nint& r = x;  // x reference\n\nx++;         // increment x\n(*p)++;      // increment x using pointer\nr++;         // increment x using reference\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u041f\u0440\u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e ",(0,c.jsx)(e.code,{children:"auto"}),":"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:"auto p = Point{0, 0};\n\nauto c = p;   // copy p to c\nauto& rp = p; // initializing a reference to Point\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u0421\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u043c\u0430\u0441\u0441\u0438\u0432 \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0442\u0430\u043a:"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:"int a[4];\nint(&ra)[4] = a;\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u0410 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0442\u0430\u043a:"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:"void fn(int);\nvoid(&fnRef)(int) = fn;\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u0413\u043b\u0430\u0432\u043d\u044b\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0441\u0441\u044b\u043b\u043a\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438\n\u0438, \u0440\u0435\u0436\u0435, \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430 \u0438\u0437 \u0444\u0443\u043d\u043a\u0446\u0438\u0438."}),"\n",(0,c.jsx)(e.h2,{id:"passing-by-reference",children:"\u041f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435"}),"\n",(0,c.jsx)(e.p,{children:"\u041f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u043c\u043e\u0436\u0435\u0442\n\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u043a \u0431\u043e\u043b\u0435\u0435 \u0443\u0434\u043e\u0431\u043d\u0430\u044f \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u0443\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044f \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\n\u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043d\u0430 \u043c\u0435\u0441\u0442\u0435 \u043b\u0438\u0431\u043e \u0434\u043b\u044f \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u044f \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u043a\u043e\u0433\u0434\u0430 \u0440\u0430\u0437\u043c\u0435\u0440 \u043e\u0431\u044a\u0435\u043a\u0442\u0430\n\u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442 \u0440\u0430\u0437\u043c\u0435\u0440 \u0430\u0434\u0440\u0435\u0441\u0430."}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:'#include <iostream>\n\nstruct Point {\n  float x;\n  float y;\n};\n\nvoid scale(Point& p, float k) {\n  p.x *= k;\n  p.y *= k;\n}\n\nvoid print(const Point& p) {\n  std::cout << "{x: " << p.x << ", y: " << p.y << \'}\';\n}\n\nint main() {\n  auto point = Point{1, 2};\n  scale(point, 2);\n  print(point); // expected "{x: 2, y: 4}"\n}\n'})}),"\n",(0,c.jsxs)(e.p,{children:["\u0417\u0434\u0435\u0441\u044c \u0432 \u043e\u0431\u0435\u0438\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,c.jsx)(e.code,{children:"p"}),' \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 "\u0441\u0438\u043d\u043e\u043d\u0438\u043c" \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0439\n\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0442\u0438\u043f\u0430 ',(0,c.jsx)(e.code,{children:"Point"})," \u0438 \u0432\u0441\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441 \u043d\u0438\u043c \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u044f\u0442 \u043d\u0430 \u0441\u0430\u043c\u043e\u043c\n\u0434\u0435\u043b\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u043a \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u044d\u0442\u043e\u0442 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u0441\u0441\u044b\u043b\u0430\u0435\u0442\u0441\u044f."]}),"\n",(0,c.jsxs)(e.p,{children:["\u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,c.jsx)(e.code,{children:"scale"})," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043d\u0430 \u043c\u0435\u0441\u0442\u0435,\n\u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u0438\u043c\u0435\u044f \u0431\u043e\u043b\u0435\u0435 \u043f\u0440\u0438\u044f\u0442\u043d\u044b\u0439 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u043f\u043e \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044e \u0441 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0435\u0439 \u0443\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044f\n\u0432 \u0441\u0442\u0438\u043b\u0435 \u0447\u0438\u0441\u0442\u043e\u0433\u043e \u0421\u0438."]}),"\n",(0,c.jsxs)(e.p,{children:["\u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,c.jsx)(e.code,{children:"print"})," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0441\u0441\u044b\u043b\u043a\u0443 \u0434\u043b\u044f \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u0427\u0430\u0441\u0442\u043e \u0431\u0443\u0434\u0435\u0442\n\u043f\u043e\u043b\u0435\u0437\u043d\u043e \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0438\u0442\u044c \u0442\u0438\u043f \u043a\u0430\u043a \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0443 (",(0,c.jsx)(e.code,{children:"const Type&"})," \u2014 \u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0443 \u0442\u0438\u043f\u0430\nType), \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0442\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0441\u0441\u044b\u043b\u0430\u044e\u0442\u0441\u044f."]}),"\n",(0,c.jsx)(e.hr,{}),"\n",(0,c.jsx)(e.p,{children:"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438:"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.a,{href:"https://habr.com/ru/articles/646005/",children:"https://habr.com/ru/articles/646005/"})}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(p,{...n})}):p(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>s,x:()=>o});var c=r(6540);const t={},i=c.createContext(t);function s(n){const e=c.useContext(i);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),c.createElement(i.Provider,{value:e},n.children)}}}]);