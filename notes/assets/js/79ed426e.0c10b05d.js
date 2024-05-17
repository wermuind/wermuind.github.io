"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[7394],{5773:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var s=t(5893),i=t(1151);const r={},l="\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438",c={id:"cpp/libraries",title:"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438",description:"Boost | Abseil",source:"@site/notes/cpp/libraries.md",sourceDirName:"cpp",slug:"/cpp/libraries",permalink:"/notes/cpp/libraries",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"C++ Style Guide",permalink:"/notes/cpp/cpp-style-guide"},next:{title:"CMake",permalink:"/notes/cpp/cmake"}},o={},h=[{value:"fmt",id:"fmt",level:3},{value:"nlohmann/json",id:"nlohmannjson",level:3},{value:"ctre",id:"ctre",level:3},{value:"glfw",id:"glfw",level:3},{value:"glm",id:"glm",level:3},{value:"ImGui",id:"imgui",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438",children:"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://www.boost.org",children:"Boost"})," | ",(0,s.jsx)(n.a,{href:"https://abseil.io",children:"Abseil"})]}),"\n",(0,s.jsx)(n.h3,{id:"fmt",children:"fmt"}),"\n",(0,s.jsxs)(n.p,{children:["\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0434\u043b\u044f \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u0411\u044b\u0441\u0442\u0440\u0430\u044f \u0438 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u0430\u044f \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430 ",(0,s.jsx)(n.code,{children:"iostream"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/fmtlib/fmt",children:"GitHub"})," |\n",(0,s.jsx)(n.a,{href:"https://fmt.dev/latest/index.html",children:"Docs"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include <fmt/format.h>\n\nstd::string s = fmt::format("The answer is {}.", 42);\n// s == "The answer is 42."\n'})}),"\n",(0,s.jsx)(n.h3,{id:"nlohmannjson",children:"nlohmann/json"}),"\n",(0,s.jsx)(n.p,{children:"\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 JSON."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/nlohmann/json",children:"GitHub"})," |\n",(0,s.jsx)(n.a,{href:"https://json.nlohmann.me",children:"Docs"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include <nlohmann/json.hpp>\nusing json = nlohmann::json;\n\njson example = {\n  {"happy", true},\n  {"pi", 3.141},\n};\n'})}),"\n",(0,s.jsx)(n.h3,{id:"ctre",children:"ctre"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"C"}),"ompile ",(0,s.jsx)(n.strong,{children:"T"}),"ime ",(0,s.jsx)(n.strong,{children:"R"}),"egular ",(0,s.jsx)(n.strong,{children:"E"}),"xpressions.",(0,s.jsx)("br",{}),"\n\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u044b\u043c\u0438 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u043c\u0438."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/hanickadot/compile-time-regular-expressions",children:"GitHub"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include <ctre.hpp>\n\nauto matcher = ctre::match<"regex">;\nif (matcher(input)) ...\n'})}),"\n",(0,s.jsx)(n.h3,{id:"glfw",children:"glfw"}),"\n",(0,s.jsx)(n.p,{children:"\u041a\u0440\u043e\u0441\u0441\u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435\u043d\u043d\u0430\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0434\u043b\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 OpenGL \u0438 Vulkan.\n\u041f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 API \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043e\u043a\u043e\u043d, \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043e\u0432 \u0438 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u0435\u0439, \u0447\u0442\u0435\u043d\u0438\u044f\n\u0432\u0445\u043e\u0434\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0441\u043e\u0431\u044b\u0442\u0438\u0439 \u0438 \u0442.\u0434."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/glfw/glfw",children:"GitHub"})," |\n",(0,s.jsx)(n.a,{href:"https://www.glfw.org/docs/latest",children:"Docs"})]}),"\n",(0,s.jsx)(n.h3,{id:"glm",children:"glm"}),"\n",(0,s.jsx)(n.p,{children:"\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f header only \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0434\u043b\u044f \u0433\u0440\u0430\u0444\u0438\u043a\u0438, \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043d\u0430 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f\u0445\n\u044f\u0437\u044b\u043a\u0430 \u0448\u0435\u0439\u0434\u0438\u043d\u0433\u0430 OpenGL (GLSL)."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/g-truc/glm",children:"GitHub"})," |\n",(0,s.jsx)(n.a,{href:"http://glm.g-truc.net/0.9.9/api/modules.html",children:"Docs"})]}),"\n",(0,s.jsx)(n.h3,{id:"imgui",children:"ImGui"}),"\n",(0,s.jsx)(n.p,{children:"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u0434\u043b\u044f C++."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/ocornut/imgui",children:"GitHub"})," |\n",(0,s.jsx)(n.a,{href:"https://github.com/ocornut/imgui/wiki/Getting-Started",children:"Docs"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'ImGui::Text("Hello, world %d", 123);\nImGui::InputText("string", buf, IM_ARRAYSIZE(buf));\nImGui::SliderFloat("float", &f, 0.0f, 1.0f);\n'})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>l});var s=t(7294);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);