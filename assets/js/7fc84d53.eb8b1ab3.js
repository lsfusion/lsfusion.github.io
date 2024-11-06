"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[84137],{46093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(74848),i=n(28453);const s={title:"Internationalization"},a=void 0,o={id:"Internationalization",title:"Internationalization",description:"Internationalization consists of software development techniques that allow adapting the software to the linguistic and cultural particularities of different countries and regions.",source:"@site/versioned_docs/version-v4/Internationalization.md",sourceDirName:".",slug:"/Internationalization",permalink:"/v4/Internationalization",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Internationalization.md",tags:[],version:"v4",lastUpdatedAt:162446164e4,frontMatter:{title:"Internationalization"},sidebar:"learn",previous:{title:"Migration",permalink:"/v4/Migration"},next:{title:"Execution",permalink:"/v4/Execution"}},l={},c=[{value:"Locale",id:"locale",level:3},{value:"Formats for specifying locale parameters",id:"formats-for-specifying-locale-parameters",level:3},{value:"Determining the current locale",id:"current",level:3},{value:"String data localization",id:"string-data-localization",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"Internationalization"})," consists of software development techniques that allow adapting the software to the linguistic and cultural particularities of different countries and regions."]}),"\n",(0,r.jsx)(t.h3,{id:"locale",children:"Locale"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"Locale"})," is a set of parameters that defines regional settings, such as:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Language"}),"\n",(0,r.jsx)(t.li,{children:"Country (which in turn determines the formats for displaying numbers and dates)"}),"\n",(0,r.jsx)(t.li,{children:"Timezone"}),"\n",(0,r.jsx)(t.li,{children:"The starting year for a 100-year period, if the year is specified by a two-digit number"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"formats-for-specifying-locale-parameters",children:"Formats for specifying locale parameters"}),"\n",(0,r.jsxs)(t.p,{children:["The language and country are specified in ",(0,r.jsx)(t.a,{href:"https://docs.oracle.com/javase/tutorial/i18n/locale/create.html",children:"standard Java"})," format. For example, the language can be specified using the lines ",(0,r.jsx)(t.code,{children:"ru"}),", ",(0,r.jsx)(t.code,{children:"en"}),", and ",(0,r.jsx)(t.code,{children:"fr"}),", and the country, respectively, using ",(0,r.jsx)(t.code,{children:"RU"}),", ",(0,r.jsx)(t.code,{children:"US"}),", and ",(0,r.jsx)(t.code,{children:"CA"}),". The timezone is specified in the format supported by the Java method ",(0,r.jsx)(t.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/util/TimeZone.html#getTimeZone-java.lang.String-",children:(0,r.jsx)(t.code,{children:"TimeZone.getTimeZone"})})," (examples: ",(0,r.jsx)(t.code,{children:"PST"}),", ",(0,r.jsx)(t.code,{children:"Europe/Minsk"}),", ",(0,r.jsx)(t.code,{children:"GMT-8:00"}),").  The year is specified as a number (example: ",(0,r.jsx)(t.code,{children:"1960"}),")."]}),"\n",(0,r.jsx)(t.h3,{id:"current",children:"Determining the current locale"}),"\n",(0,r.jsxs)(t.p,{children:["The server locale is determined by the ",(0,r.jsx)(t.a,{href:"http://www.oracle.com/us/technologies/java/locale-140624.html",children:"default locale"})," of the JVM in which the server starts (namely, the startup parameters ",(0,r.jsx)(t.a,{href:"/v4/Launch_parameters#locale",children:"user.language, user.country, user.timezone, and user.twoDigitYearStart"}),"). When the application server starts, the parameters of this locale are automatically saved in the following properties:"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Locale parameter"}),(0,r.jsx)(t.th,{children:"Start parameter"}),(0,r.jsx)(t.th,{children:"Property"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Language"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"user.language"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Authentication.serverLanguage[]"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Country"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"user.country"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Authentication.serverCountry[]"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Timezone"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"user.timezone"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Authentication.serverTimezone[]"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Starting year of the 100-year period"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"user.twoDigitYearStart"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Authentication.serverTwoDigitYearStart[]"})})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["The server locale is used as ",(0,r.jsx)(t.em,{children:"current"})," when the action in which localization is being performed is initiated by the system, and not by a particular user (i.e., the system user is considered the current user)."]}),"\n",(0,r.jsx)(t.p,{children:"Otherwise, the current locale is determined by the values of the following properties (the user who initiated the action is passed as a parameter):"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Property"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Language"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Authentication.language[CustomUser]"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Country"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Authentication.country[CustomUser]"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Timezone"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Authentication.timezone[CustomUser]"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Starting year of the 100-year period"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Authentication.twoDigitYearStart[CustomUser]"})})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"In the current platform implementation, the above properties allow you both to use the locale parameters of the user's operating system and to set these parameters explicitly for specific users; or, for example, to use the server locale for all users (this is the default behavior)."}),"\n",(0,r.jsx)(t.h3,{id:"string-data-localization",children:"String data localization"}),"\n",(0,r.jsxs)(t.p,{children:["The main task of platform internationalization is to localize the string data that the user sees. When sending text messages, property captions, actions, forms, etc. to the client from the server, these can be translated into another language or otherwise converted depending on the ",(0,r.jsx)(t.a,{href:"#current",children:"current locale"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Localizable strings are created as follows: in the string, in place of the text to be localized, ",(0,r.jsx)(t.em,{children:"the string data ID"})," is specified in curly brackets (e.g., ",(0,r.jsx)(t.code,{children:"'{button.cancel}'"}),"). When this string is sent to the client, all IDs found in the string are searched for on the server, then each is searched for in all ",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Java_resource_bundle",children:"ResourceBundle"})," project files in the required locale. If found, the ID in the brackets is replaced with the corresponding text."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(96540);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);