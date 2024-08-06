"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[7242],{4571:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var l=s(5893),a=s(1151);const r={},d="SQL",c={id:"db/sql",title:"SQL",description:"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 \u0431\u0430\u0437\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445:",source:"@site/notes/db/sql.md",sourceDirName:"db",slug:"/db/sql",permalink:"/notes/db/sql",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"\u0411\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445",permalink:"/notes/db/"},next:{title:"\u0422\u0435\u043e\u0440\u0438\u044f \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0446\u0438\u0438",permalink:"/notes/compiler/"}},t={},i=[{value:"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 \u0431\u0430\u0437\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445:",id:"\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438-\u0441-\u0431\u0430\u0437\u0430\u043c\u0438-\u0434\u0430\u043d\u043d\u044b\u0445",level:4},{value:"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 \u0442\u0430\u0431\u043b\u0438\u0446\u0430\u043c\u0438:",id:"\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438-\u0441-\u0442\u0430\u0431\u043b\u0438\u0446\u0430\u043c\u0438",level:4},{value:"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b:",id:"\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438-\u0441-\u0434\u0430\u043d\u043d\u044b\u043c\u0438-\u0442\u0430\u0431\u043b\u0438\u0446\u044b",level:4},{value:"PostgreSQL",id:"postgresql",level:2},{value:"\u0411\u044b\u0441\u0442\u0440\u044b\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b psql:",id:"\u0431\u044b\u0441\u0442\u0440\u044b\u0435-\u043a\u043e\u043c\u0430\u043d\u0434\u044b-psql",level:4},{value:"\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0438:",id:"\u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435-\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0438",level:4},{value:"\u0414\u0440\u0443\u0433\u043e\u0435:",id:"\u0434\u0440\u0443\u0433\u043e\u0435",level:4}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"sql",children:"SQL"}),"\n",(0,l.jsx)(n.h4,{id:"\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438-\u0441-\u0431\u0430\u0437\u0430\u043c\u0438-\u0434\u0430\u043d\u043d\u044b\u0445",children:"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 \u0431\u0430\u0437\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"-- \u0441\u043e\u0437\u0434\u0430\u0442\u044c:\nCREATE DATABASE db_name OWNER owner_name;\n-- \u0443\u0434\u0430\u043b\u0438\u0442\u044c:\nDROP DATABASE db_name;\n-- \u043f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u0442\u044c:\nALTER DATABASE db_name RENAME TO new_db_name;\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438-\u0441-\u0442\u0430\u0431\u043b\u0438\u0446\u0430\u043c\u0438",children:"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 \u0442\u0430\u0431\u043b\u0438\u0446\u0430\u043c\u0438:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"-- \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443:\nCREATE TABLE table_name(col_1_name col_1_type, ...);\n-- \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443:\nDROP TABLE table_name;\n\n-- \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u043e\u043b\u0431\u0435\u0446:\nALTER TABLE table_name ADD COLUMN column_name;\n-- \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0442\u043e\u043b\u0431\u0435\u0446:\nALTER TABLE table_name DROP COLUMN column_name;\n-- \u043f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u0442\u044c \u0441\u0442\u043e\u043b\u0431\u0435\u0446:\nALTER TABLE table_name RENAME COLUMN old_name TO new_name;\n-- \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u0438\u043f \u0441\u0442\u043e\u043b\u0431\u0446\u0430:\nALTER TABLE table_name ALTER COLUMN column_name datatype;\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438-\u0441-\u0434\u0430\u043d\u043d\u044b\u043c\u0438-\u0442\u0430\u0431\u043b\u0438\u0446\u044b",children:"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"-- \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u0438:\nINSERT INTO table_name (col_1, ...) VALUES (col_1_value, ...), (...);\n-- \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u0438:\nDELETE FROM table_name WHERE ...;\n-- \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u0438:\nUPDATE table_name SET col_1 = col_1_value, col_2 = ... WHERE ...;\n-- \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443:\nTRUNCATE TABLE tablename;\n"})}),"\n",(0,l.jsx)(n.h2,{id:"postgresql",children:"PostgreSQL"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'psql <dbname> <username>\npsql -h <hostname> -p <port> -U <username> -d <database>\npsql "postgresql://<username>:<password>@<hostname>:<port>/<database>"\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u0431\u044b\u0441\u0442\u0440\u044b\u0435-\u043a\u043e\u043c\u0430\u043d\u0434\u044b-psql",children:"\u0411\u044b\u0441\u0442\u0440\u044b\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b psql:"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"\\l"})," \u2014 \u0441\u043f\u0438\u0441\u043e\u043a \u0411\u0414 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.code,{children:"\\dt"})," \u2014 \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446 \u0432 \u0411\u0414",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.code,{children:"\\du"})," \u2014 \u0441\u043f\u0438\u0441\u043e\u043a \u0440\u043e\u043b\u0435\u0439",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.code,{children:"\\d table_name"})," \u2014 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.code,{children:"\\password user_name"})," \u2014 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c",(0,l.jsx)("br",{})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"\\q"})," \u2014 \u0432\u044b\u0439\u0442\u0438 \u0438\u0437 psql",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.code,{children:"\\! clear"})," (Unix) \u0438\u043b\u0438 ",(0,l.jsx)(n.code,{children:"\\! cls"})," (Windows) \u2014 \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u044d\u043a\u0440\u0430\u043d",(0,l.jsx)("br",{})]}),"\n",(0,l.jsx)(n.h4,{id:"\u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435-\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0438",children:"\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0438:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"pg_database"}),": \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u0431\u0430\u0437\u0430\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"pg_attribute"}),": \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u0445 \u0442\u0430\u0431\u043b\u0438\u0446\u044b"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"pg_constraint"}),": \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f (\u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0439 \u043a\u043b\u044e\u0447, unique, \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0438 \u0434\u0440.)"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"pg_index"}),": \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e\u0431 \u0438\u043d\u0434\u0435\u043a\u0441\u0430\u0445"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u0434\u0440\u0443\u0433\u043e\u0435",children:"\u0414\u0440\u0443\u0433\u043e\u0435:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"-- Database Size\nSELECT pg_size_pretty(pg_database_size('db_name'));\n-- Table Size\nSELECT pg_size_pretty(pg_relation_size('table_name'));\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u0420\u0435\u0441\u0442\u0430\u0440\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0434\u043b\u044f Windows:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cmd",children:'pg_ctl -D "C:\\Program Files\\PostgreSQL\\15\\data" restart\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u0422\u0438\u043f\u044b \u043a\u043e\u043b\u043e\u043d\u043e\u043a:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM information_schema.columns WHERE table_name = 'table_name';\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>d});var l=s(7294);const a={},r=l.createContext(a);function d(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);