"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["7354"],{35395:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>i,assets:()=>c,toc:()=>l,contentTitle:()=>s});var i=JSON.parse('{"id":"Next_iteration_CONTINUE","title":"Next iteration (CONTINUE)","description":"The next iteration operator creates an action that skips the execution of the remaining code in the current iteration and moves to the next iteration of the loop (normal or recursive). If the created action is not inside a loop, its behavior becomes similar to the action created by the exit operator.","source":"@site/docs/Next_iteration_CONTINUE.md","sourceDirName":".","slug":"/Next_iteration_CONTINUE","permalink":"/Next_iteration_CONTINUE","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/master/docs/en/Next_iteration_CONTINUE.md","tags":[],"version":"current","lastUpdatedAt":1715811948000,"frontMatter":{"title":"Next iteration (CONTINUE)"},"sidebar":"learn","previous":{"title":"Interruption (BREAK)","permalink":"/Interruption_BREAK"},"next":{"title":"Exit (RETURN)","permalink":"/Exit_RETURN"}}'),r=n("85893"),o=n("50065");let a={title:"Next iteration (CONTINUE)"},s=void 0,c={},l=[{value:"Language",id:"language",level:3},{value:"Example",id:"example",level:3}];function d(e){let t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.em,{children:"next iteration"})," operator creates an ",(0,r.jsx)(t.a,{href:"/Actions",children:"action"})," that skips the execution of the remaining code in the current iteration and moves to the next iteration of the loop (",(0,r.jsx)(t.a,{href:"/Loop_FOR",children:"normal"})," or ",(0,r.jsx)(t.a,{href:"/Recursive_loop_WHILE",children:"recursive"}),"). If the created action is not inside a loop, its behavior becomes similar to the action created by the ",(0,r.jsx)(t.a,{href:"/Exit_RETURN",children:"exit operator"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,r.jsxs)(t.p,{children:["The next iteration operator syntax is described by the ",(0,r.jsxs)(t.a,{href:"/CONTINUE_operator",children:[(0,r.jsx)(t.code,{children:"CONTINUE"})," operator"]}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"testContinue ()  {\n    FOR iterate(INTEGER i, 1, 5) DO {\n        MESSAGE 'before';\n        IF i == 3 THEN CONTINUE; // no message 'after' for i == 3\n        MESSAGE 'after';\n}\n"})})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return a}});var i=n(67294);let r={},o=i.createContext(r);function a(e){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);