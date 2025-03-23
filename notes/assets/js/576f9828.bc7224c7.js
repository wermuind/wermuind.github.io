"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[1698],{730:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=i(4848),l=i(8453);const r={},t="SOLID",c={id:"common/solid",title:"SOLID",description:"SOLID \u2014 \u044d\u0442\u043e \u043d\u0430\u0431\u043e\u0440 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u043e\u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f,",source:"@site/notes/common/solid.md",sourceDirName:"common",slug:"/common/solid",permalink:"/notes/common/solid",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"Semantic Versioning",permalink:"/notes/common/semver"},next:{title:"Git",permalink:"/notes/common/git"}},d={},a=[{value:"Single responsibility",id:"single-responsibility",level:2},{value:"\u041d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435:",id:"\u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435",level:4},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",level:4},{value:"Open-closed",id:"open-closed",level:2},{value:"Liskov substitution",id:"liskov-substitution",level:2},{value:"\u041d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435:",id:"\u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435-1",level:4},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",level:4},{value:"Interface segregation",id:"interface-segregation",level:2},{value:"\u041d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435:",id:"\u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435-2",level:4},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2",level:4},{value:"Dependency inversion",id:"dependency-inversion",level:2},{value:"\u041d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435:",id:"\u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435-3",level:4},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-3",level:4}];function o(n){const e={code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"solid",children:"SOLID"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"SOLID"})," \u2014 \u044d\u0442\u043e \u043d\u0430\u0431\u043e\u0440 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u043e\u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f,\n\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u043c\u043e\u0433\u0430\u044e\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0433\u0438\u0431\u043a\u0438\u0439, \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0439 \u0438 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u044b\u0439 \u043a\u043e\u0434.\n\u041a\u0430\u0436\u0434\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0432 \u0430\u0431\u0431\u0440\u0435\u0432\u0438\u0430\u0442\u0443\u0440\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043e\u0434\u043d\u043e\u043c\u0443 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0443."]}),"\n",(0,s.jsx)(e.h2,{id:"single-responsibility",children:"Single responsibility"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)("dfn",{children:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438"})," \u0434\u0435\u043a\u043b\u0430\u0440\u0438\u0440\u0443\u0435\u0442, \u0447\u0442\u043e \u043a\u0430\u0436\u0434\u0430\u044f\n\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u0430\u044f \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044c \u0434\u043e\u043b\u0436\u043d\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u043e\u0434\u043d\u0443 (\u043a\u043e\u043d\u0446\u0435\u043f\u0442\u0443\u0430\u043b\u044c\u043d\u043e, \u0430 \u043d\u0435 \u0431\u0443\u043a\u0432\u0430\u043b\u044c\u043d\u043e)\n\u0437\u0430\u0434\u0430\u0447\u0443."]}),"\n",(0,s.jsx)(e.p,{children:"\u041d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435 \u043f\u0440\u043e\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432 \u0434\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u043a\u043b\u0430\u0441\u0441\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\n\u0441\u0440\u0430\u0437\u0443 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0437\u0430\u0434\u0430\u0447, \u043d\u0430 \u043f\u0440\u043e\u0441\u0442\u044b\u0435."}),"\n",(0,s.jsx)(e.h4,{id:"\u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435",children:"\u041d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"class Order {\n  public calculateTotal(): number {}\n  public saveToDatabase(): Promise<void> {}\n}\n"})}),"\n",(0,s.jsx)(e.h4,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"class Order {\n  public calculateTotal(): number {}\n}\nclass OrderRepository {\n  public save(order: Order): Promise<void> {}\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"open-closed",children:"Open-closed"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)("dfn",{children:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438/\u0437\u0430\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438"})," \u0434\u0435\u043a\u043b\u0430\u0440\u0438\u0440\u0443\u0435\u0442, \u0447\u0442\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u044b\u0435 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438\n\u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043e\u0442\u043a\u0440\u044b\u0442\u044b \u0434\u043b\u044f \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f, \u043d\u043e \u0437\u0430\u043a\u0440\u044b\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f."]}),"\n",(0,s.jsx)(e.p,{children:"\u041d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435 \u043f\u0440\u043e\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0435 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0435 \u0447\u0435\u0440\u0435\u0437\n\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u0434\u0430, \u0430 \u0447\u0435\u0440\u0435\u0437 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u043a\u043e\u0434\u0430."}),"\n",(0,s.jsx)(e.h2,{id:"liskov-substitution",children:"Liskov substitution"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)("dfn",{children:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u041b\u0438\u0441\u043a\u043e\u0432"})," \u0434\u0435\u043a\u043b\u0430\u0440\u0438\u0440\u0443\u0435\u0442, \u0447\u0442\u043e \u043a\u043e\u0434, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\n\u0431\u0430\u0437\u043e\u0432\u044b\u0439 \u0442\u0438\u043f, \u0434\u043e\u043b\u0436\u0435\u043d \u0438\u043c\u0435\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0434\u0442\u0438\u043f\u044b \u0431\u0430\u0437\u043e\u0432\u043e\u0433\u043e \u0442\u0438\u043f\u0430\n\u043d\u0435 \u0437\u043d\u0430\u044f \u043e\u0431 \u044d\u0442\u043e\u043c."]}),"\n",(0,s.jsx)(e.p,{children:"\u041d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435 \u043f\u0440\u043e\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u043f\u0440\u0438 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0438 \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0439 \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f\n\u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0435 \u043d\u0430\u0441\u043b\u0435\u0434\u043d\u0438\u043a\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0431\u0430\u0437\u043e\u0432\u043e\u0433\u043e \u0442\u0438\u043f\u0430."}),"\n",(0,s.jsx)(e.h4,{id:"\u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435-1",children:"\u041d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"class Rectangle {\n  public setWidth(w: number) { this.width = w; }\n  public setHeight(h: number) { this.height = h; }\n}\nclass Square extends Rectangle {\n  public setWidth(w: number) { this.width = w; this.height = w; }\n}\n"})}),"\n",(0,s.jsx)(e.h4,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"abstract class Shape {\n  // ...\n}\nclass Rectangle extends Shape {\n  public setWidth(w: number) { this.width = w; }\n  public setHeight(h: number) { this.height = h; }\n}\nclass Square extends Shape {\n  public setSide(s: number) { this.side = s; }\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"interface-segregation",children:"Interface segregation"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)("dfn",{children:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430"})," \u0434\u0435\u043a\u043b\u0430\u0440\u0438\u0440\u0443\u0435\u0442, \u0447\u0442\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u044b \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b\n\u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u043e\u0442 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u043d\u0438 \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442."]}),"\n",(0,s.jsx)(e.p,{children:"\u041d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435 \u043f\u0440\u043e\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u0432\u043c\u0435\u0441\u0442\u043e \u043e\u0434\u043d\u043e\u0433\u043e \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f\n\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0445, \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432."}),"\n",(0,s.jsx)(e.h4,{id:"\u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435-2",children:"\u041d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"interface Printer {\n  print(): void;\n  scan(): void;\n}\n\nclass BasicPrinter implements Printer {\n  public print() {}\n  public scan() { throw new Error('Scan is not supported'); }\n}\nclass AdvancedPrinter implements Printer {\n  public print() {}\n  public scan() {}\n}\n"})}),"\n",(0,s.jsx)(e.h4,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"interface Printable {\n  print(): void;\n}\ninterface Scannable {\n  scan(): void;\n}\n\nclass BasicPrinter implements Printable {\n  public print() {}\n}\nclass AdvancedPrinter implements Printable, Scannable {\n  public print() {}\n  public scan() {}\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"dependency-inversion",children:"Dependency inversion"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)("dfn",{children:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0438\u043d\u0432\u0435\u0440\u0441\u0438\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439"})," \u0434\u0435\u043a\u043b\u0430\u0440\u0438\u0440\u0443\u0435\u0442, \u0447\u0442\u043e \u043c\u043e\u0434\u0443\u043b\u0438 \u0432\u0435\u0440\u0445\u043d\u0435\u0433\u043e\n\u0443\u0440\u043e\u0432\u043d\u044f \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u043e\u0442 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u043d\u0438\u0436\u043d\u0435\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f; \u043e\u0431\u0430 \u0434\u043e\u043b\u0436\u043d\u044b \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c\n\u043e\u0442 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0439. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0438 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u043e\u0442 \u0434\u0435\u0442\u0430\u043b\u0435\u0439; \u0434\u0435\u0442\u0430\u043b\u0438 \u0434\u043e\u043b\u0436\u043d\u044b\n\u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u043e\u0442 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0439."]}),"\n",(0,s.jsx)(e.p,{children:"\u041d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435 \u043f\u0440\u043e\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u044e\u0442\u0441\u044f \u0438\u0437\u0432\u043d\u0435\n(\u0447\u0435\u0440\u0435\u0437 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440, \u043c\u0435\u0442\u043e\u0434\u044b \u0438\u043b\u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430), \u0430 \u043d\u0435 \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0432\u043d\u0443\u0442\u0440\u0438.\n\u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u0434\u043c\u0435\u043d\u044f\u0442\u044c \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0431\u0435\u0437 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u0434\u0430."}),"\n",(0,s.jsx)(e.h4,{id:"\u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435-3",children:"\u041d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"function analyzeData() {\n  const logger = new ConsoleLogger();\n  // ...\n}\n"})}),"\n",(0,s.jsx)(e.h4,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-3",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"interface Logger {\n  // ...\n}\nfunction analyzeData(logger: Logger) {\n  // ...\n}\n"})})]})}function h(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>c});var s=i(6540);const l={},r=s.createContext(l);function t(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:t(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);