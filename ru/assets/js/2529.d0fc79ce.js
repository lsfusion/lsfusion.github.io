"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[2529],{39058:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(67294),l=a(86010),r=a(80584),o=a(87524),i=a(39960),s=a(95999),c="sidebar_re4s",m="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",d="sidebarItem__DBe",g="sidebarItemLink_mo7H",p="sidebarItemLinkActive_I1ZP";function f(e){let{sidebar:t}=e;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:d},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:p},e.title)))))))}var h=a(13102);function E(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function v(e){return n.createElement(h.Zo,{component:E,props:e})}function b(e){let{sidebar:t}=e;const a=(0,o.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(v,{sidebar:t}):n.createElement(f,{sidebar:t}):null}function _(e){const{sidebar:t,toc:a,children:o,...i}=e,s=t&&t.items.length>0;return n.createElement(r.Z,i,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(b,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},a))))}},30390:function(e,t,a){a.d(t,{Z:function(){return R}});var n=a(67294),l=a(86010),r=a(9460),o=a(44996);function i(e){var t;let{children:a,className:l}=e;const{frontMatter:i,assets:s}=(0,r.C)(),{withBaseUrl:c}=(0,o.C)(),m=null!=(t=s.image)?t:i.image;return n.createElement("article",{className:l,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},m&&n.createElement("meta",{itemProp:"image",content:c(m,{absolute:!0})}),a)}var s=a(39960),c="title_f1Hy";function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:o}=(0,r.C)(),{permalink:i,title:m}=a,u=o?"h1":"h2";return n.createElement(u,{className:(0,l.Z)(c,t),itemProp:"headline"},o?m:n.createElement(s.Z,{itemProp:"url",to:i},m))}var u=a(95999),d=a(88824),g="container_mt6G";function p(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return n.createElement(n.Fragment,null,a(t))}function f(e){let{date:t,formattedDate:a}=e;return n.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function h(){return n.createElement(n.Fragment,null," \xb7 ")}function E(e){let{className:t}=e;const{metadata:a}=(0,r.C)(),{date:o,formattedDate:i,readingTime:s}=a;return n.createElement("div",{className:(0,l.Z)(g,"margin-vert--md",t)},n.createElement(f,{date:o,formattedDate:i}),void 0!==s&&n.createElement(n.Fragment,null,n.createElement(h,null),n.createElement(p,{readingTime:s})))}function v(e){return e.href?n.createElement(s.Z,e):n.createElement(n.Fragment,null,e.children)}function b(e){let{author:t,className:a}=e;const{name:r,title:o,url:i,imageURL:s,email:c}=t,m=i||c&&"mailto:"+c||void 0;return n.createElement("div",{className:(0,l.Z)("avatar margin-bottom--sm",a)},s&&n.createElement(v,{href:m,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:s,alt:r})),r&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(v,{href:m,itemProp:"url"},n.createElement("span",{itemProp:"name"},r))),o&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}var _="authorCol_Hf19",N="imageOnlyAuthorRow_pa_O",Z="imageOnlyAuthorCol_G86a";function P(e){let{className:t}=e;const{metadata:{authors:a},assets:o}=(0,r.C)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",i?N:"row",t)},a.map(((e,t)=>{var a;return n.createElement("div",{className:(0,l.Z)(!i&&"col col--6",i?Z:_),key:t},n.createElement(b,{author:{...e,imageURL:null!=(a=o.authorsImageUrls[t])?a:e.imageURL}}))})))}function k(){return n.createElement("header",null,n.createElement(m,null),n.createElement(E,null),n.createElement(P,null))}var T=a(18780),w=a(80210);function C(e){let{children:t,className:a}=e;const{isBlogPostPage:o}=(0,r.C)();return n.createElement("div",{id:o?T.blogPostContainerID:void 0,className:(0,l.Z)("markdown",a),itemProp:"articleBody"},n.createElement(w.Z,null,t))}var y=a(84881),B=a(71526),F=a(83117);function I(){return n.createElement("b",null,n.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function x(e){const{blogPostTitle:t,...a}=e;return n.createElement(s.Z,(0,F.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),n.createElement(I,null))}var L="blogPostFooterDetailsFull_mRVl";function M(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:o,editUrl:i,hasTruncateMarker:s}=e,c=!t&&s,m=a.length>0;return m||c||i?n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",t&&L)},m&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":c})},n.createElement(B.Z,{tags:a})),t&&i&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(y.Z,{editUrl:i})),c&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":m})},n.createElement(x,{blogPostTitle:o,to:e.permalink}))):null}function R(e){let{children:t,className:a}=e;const o=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return n.createElement(i,{className:(0,l.Z)(o,a)},n.createElement(k,null),n.createElement(C,null,t),n.createElement(M,null))}},84881:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(67294),l=a(95999),r=a(35281),o=a(83117),i=a(86010),s="iconEdit_Z9Sw";function c(e){let{className:t,...a}=e;return n.createElement("svg",(0,o.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function m(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},n.createElement(c,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},32244:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),l=a(86010),r=a(39960);function o(e){const{permalink:t,title:a,subLabel:o,isNext:i}=e;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&n.createElement("div",{className:"pagination-nav__sublabel"},o),n.createElement("div",{className:"pagination-nav__label"},a))}},13008:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),l=a(86010),r=a(39960),o="tag_zVej",i="tagRegular_sFm0",s="tagWithCount_h2kH";function c(e){let{permalink:t,label:a,count:c}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(o,c?s:i)},a,c&&n.createElement("span",null,c))}},71526:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),l=a(86010),r=a(95999),o=a(13008),i="tags_jXut",s="tag_QGVx";function c(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(i,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:s},n.createElement(o.Z,{label:t,permalink:a}))}))))}},9460:function(e,t,a){a.d(t,{C:function(){return i},n:function(){return o}});var n=a(67294),l=a(902);const r=n.createContext(null);function o(e){let{children:t,content:a,isBlogPostPage:l=!1}=e;const o=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:l});return n.createElement(r.Provider,{value:o},t)}function i(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("BlogPostProvider");return e}},88824:function(e,t,a){a.d(t,{c:function(){return c}});var n=a(67294),l=a(52263);const r=["zero","one","two","few","many","other"];function o(e){return r.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function s(){const{i18n:{currentLocale:e}}=(0,l.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),i}}),[e])}function c(){const e=s();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+n.length+": "+e);const l=a.select(t),r=a.pluralForms.indexOf(l);return n[Math.min(r,n.length-1)]}(a,t,e)}}}}]);