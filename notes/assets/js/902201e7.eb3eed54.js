"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[9557],{3757:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var a=s(5893),i=s(1151);const l={},c="std::map",r={id:"cpp/std/map",title:"std::map",description:"std::map \u2014 \u044d\u0442\u043e \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0435\u043d\u043d\u044b\u0439 \u0430\u0441\u0441\u043e\u0446\u0438\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440, \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0447\u0435\u0440\u0435\u0437",source:"@site/notes/cpp/std/map.md",sourceDirName:"cpp/std",slug:"/cpp/std/map",permalink:"/notes/cpp/std/map",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"std::string",permalink:"/notes/cpp/std/string"},next:{title:"std::optional",permalink:"/notes/cpp/std/optional"}},t={},d=[{value:"\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f",id:"\u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f",level:3},{value:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432",id:"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432",level:3},{value:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432",id:"\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432",level:3},{value:"\u0414\u043e\u0441\u0442\u0443\u043f \u043a \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c",id:"\u0434\u043e\u0441\u0442\u0443\u043f-\u043a-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c",level:3},{value:"\u041f\u0435\u0440\u0435\u0431\u043e\u0440 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432",id:"\u043f\u0435\u0440\u0435\u0431\u043e\u0440-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432",level:3}];function m(n){const e={a:"a",annotation:"annotation",code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"stdmap",children:"std::map"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"std::map"})," \u2014 \u044d\u0442\u043e \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0435\u043d\u043d\u044b\u0439 \u0430\u0441\u0441\u043e\u0446\u0438\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440, \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0447\u0435\u0440\u0435\u0437\n",(0,a.jsx)(e.a,{href:"https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE-%D1%87%D1%91%D1%80%D0%BD%D0%BE%D0%B5_%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE",children:"\u043a\u0440\u0430\u0441\u043d\u043e-\u0447\u0451\u0440\u043d\u043e\u0435 \u0434\u0435\u0440\u0435\u0432\u043e"}),"\n(\u043a\u043b\u044e\u0447\u0438 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b)."]}),"\n",(0,a.jsx)(e.p,{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 4 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430, \u043f\u0435\u0440\u0432\u044b\u0435 \u0434\u0432\u0430 \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u0442\u0438\u043f \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,a.jsx)(e.li,{children:"\u0442\u0438\u043f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f"}),"\n",(0,a.jsx)(e.li,{children:"\u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f"}),"\n",(0,a.jsx)(e.li,{children:"\u0430\u043b\u043b\u043e\u043a\u0430\u0442\u043e\u0440"}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:['\u041f\u0430\u0440\u044b "\u043a\u043b\u044e\u0447-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435" \u043e\u0442\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f. \u0414\u0432\u0430 \u043a\u043b\u044e\u0447\u0430\n\u0441\u0447\u0438\u0442\u0430\u044e\u0442\u0441\u044f \u0440\u0430\u0432\u043d\u044b\u043c\u0438, \u0435\u0441\u043b\u0438 ',(0,a.jsx)(e.code,{children:"!\u0441ompare(k1, k2) && !compare(k2, k1)"}),",\n\u0433\u0434\u0435 ",(0,a.jsx)(e.code,{children:"compare"})," \u2014 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f."]}),"\n",(0,a.jsx)(e.p,{children:"\u0410\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\u043f\u043e\u0438\u0441\u043a: ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mi,{children:"log"}),(0,a.jsx)(e.mo,{children:"\u2061"}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(\\log n)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsxs)(e.span,{className:"mop",children:["lo",(0,a.jsx)(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,a.jsxs)(e.li,{children:["\u0432\u0441\u0442\u0430\u0432\u043a\u0430: ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mi,{children:"log"}),(0,a.jsx)(e.mo,{children:"\u2061"}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(\\log n)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsxs)(e.span,{className:"mop",children:["lo",(0,a.jsx)(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,a.jsxs)(e.li,{children:["\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435: ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mi,{children:"log"}),(0,a.jsx)(e.mo,{children:"\u2061"}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(\\log n)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsxs)(e.span,{className:"mop",children:["lo",(0,a.jsx)(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]})]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"\u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f",children:"\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:'#include <map>\n\n// initializing an empty map\nauto myMap = std::map<std::string, int>();\n\n// using initializer list\nstd::map<std::string, int> myMap = {\n  {"foo", 10},\n  {"bar", 20},\n};\n'})}),"\n",(0,a.jsx)(e.h3,{id:"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432",children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"auto myMap = std::map<int, Point>();\nmyMap[0] = Point{0, 0};\n\nauto point = Point{1, 1};\nmyMap.emplace(1, point);\nmyMap.insert_or_assign(1, point);\n\nauto pair = std::make_pair(2, Point{0, 0});\nmyMap.insert(pair);\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u0415\u0441\u043b\u0438 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\u0434\u043b\u044f ",(0,a.jsx)(e.code,{children:"operator[]"})," \u0438 ",(0,a.jsx)(e.code,{children:"insert_or_assign"})," \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0434\u0451\u0442 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0438\u0441\u044c"]}),"\n",(0,a.jsxs)(e.li,{children:["\u0434\u043b\u044f ",(0,a.jsx)(e.code,{children:"emplace"})," \u0438 ",(0,a.jsx)(e.code,{children:"insert"})," \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0434\u0451\u0442"]}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:'auto myMap = std::map<std::string, int>();\nmyMap["foo"] = 10;\nmyMap["foo"] = 20;\nstd::cout << myMap["foo"]; // expected 20\n'})}),"\n",(0,a.jsx)(e.h3,{id:"\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432",children:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:'myMap.erase("bar");\nmyMap.erase("baz");\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u041f\u0440\u0438 \u043f\u043e\u043f\u044b\u0442\u043a\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043d\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u043a\u043b\u044e\u0447 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442."}),"\n",(0,a.jsx)(e.p,{children:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0432\u0441\u0435\u0445 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"myMap.clear();\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u0434\u043e\u0441\u0442\u0443\u043f-\u043a-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c",children:"\u0414\u043e\u0441\u0442\u0443\u043f \u043a \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c"}),"\n",(0,a.jsx)(e.p,{children:"\u041a\u043e\u0433\u0434\u0430 \u043a\u043b\u044e\u0447 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:'auto value = myMap["foo"];\nauto value = myMap.at("foo");\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e \u043a\u043b\u044e\u0447\u0443:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"auto it = myMap.find(key);\nif (it != myMap.end()) {\n  // found, value is `it->second`\n} else {\n  // not found\n}\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430\u043b\u0438\u0447\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"if (myMap.contains(key)) {\n  // key exists\n} else {\n  // key does not exist\n}\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u0422\u0430\u043a\u0436\u0435 \u0435\u0441\u0442\u044c \u043c\u0435\u0442\u043e\u0434\u044b \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432\n\u0438 \u043d\u0430\u043b\u0438\u0447\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0432\u043e\u043e\u0431\u0449\u0435:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"size_t size = myMap.size();\nbool empty = myMap.empty();\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u043f\u0435\u0440\u0435\u0431\u043e\u0440-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432",children:"\u041f\u0435\u0440\u0435\u0431\u043e\u0440 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"for (auto& pair : myMap) {\n  auto& key = pair.first;\n  auto& value = pair.second;\n}\n\nfor (auto& [key, value] : myMap) {\n  // ...\n}\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u042d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0431\u0443\u0434\u0443\u0442 \u0438\u0434\u0442\u0438 \u0432 \u043f\u043e\u0440\u044f\u0434\u043a\u0435 \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044f \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043a\u043b\u044e\u0447\u0430."}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.p,{children:"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"https://en.cppreference.com/w/cpp/container/map",children:"cppreference.com"})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"https://metanit.com/cpp/tutorial/7.14.php",children:"metanit.com"})}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(m,{...n})}):m(n)}},1151:(n,e,s)=>{s.d(e,{Z:()=>r,a:()=>c});var a=s(7294);const i={},l=a.createContext(i);function c(n){const e=a.useContext(l);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),a.createElement(l.Provider,{value:e},n.children)}}}]);