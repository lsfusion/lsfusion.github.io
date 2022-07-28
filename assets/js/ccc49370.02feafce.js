"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[46103],{78665:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(67294),l=a(86010),r=a(42773),i=a(39960),o="sidebar_a9qW",s="sidebarItemTitle_uKok",m="sidebarItemList_Kvuv",c="sidebarItem_CF0Q",u="sidebarItemLink_miNk",d="sidebarItemLinkActive_RRTD",g=a(95999);function p(e){let{sidebar:t}=e;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),n.createElement("ul",{className:m},t.items.map((e=>n.createElement("li",{key:e.permalink,className:c},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:d},e.title))))))}function h(e){const{sidebar:t,toc:a,children:i,...o}=e,s=t&&t.items.length>0;return n.createElement(r.Z,o,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},s&&n.createElement("aside",{className:"col col--3"},n.createElement(p,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&n.createElement("div",{className:"col col--2"},a))))}},38561:function(e,t,a){a.d(t,{Z:function(){return P}});var n=a(67294),l=a(86010),r=a(3905),i=a(95999),o=a(39960),s=a(44996),m=a(45860),c=a(18780),u=a(5119),d=a(86753),g="blogPostTitle_rzP5",p="blogPostData_Zg1s",h="blogPostDetailsFull_h6_j",v=a(20062),b="image_o0gy";function E(e){return e.href?n.createElement(o.Z,e):n.createElement(n.Fragment,null,e.children)}function f(e){let{author:t}=e;const{name:a,title:l,url:r,imageURL:i,email:o}=t,s=r||o&&"mailto:"+o||void 0;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement("span",{className:"avatar__photo-link avatar__photo"},n.createElement(E,{href:s},n.createElement("img",{className:b,src:i,alt:a}))),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(E,{href:s,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),l&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}var _="authorCol_FlmR",N="imageOnlyAuthorRow_trpF",Z="imageOnlyAuthorCol_S2np";function k(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const r=t.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",r?N:"row")},t.map(((e,t)=>{var i;return n.createElement("div",{className:(0,l.Z)(!r&&"col col--6",r?Z:_),key:t},n.createElement(f,{author:{...e,imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL}}))})))}function P(e){var t;const a=function(){const{selectMessage:e}=(0,m.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:b}=(0,s.C)(),{children:E,frontMatter:f,assets:_,metadata:N,truncated:Z,isBlogPostPage:P=!1}=e,{date:L,formattedDate:C,permalink:T,tags:y,readingTime:I,title:w,editUrl:x,authors:A}=N,M=null!=(t=_.image)?t:f.image,R=!P&&Z,H=y.length>0,U=P?"h1":"h2";return n.createElement("article",{className:P?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},n.createElement("header",null,n.createElement(U,{className:g,itemProp:"headline"},P?w:n.createElement(o.Z,{itemProp:"url",to:T},w)),n.createElement("div",{className:(0,l.Z)(p,"margin-vert--md")},n.createElement("time",{dateTime:L,itemProp:"datePublished"},C),void 0!==I&&n.createElement(n.Fragment,null," \xb7 ",a(I))),n.createElement(k,{authors:A,assets:_})),M&&n.createElement("meta",{itemProp:"image",content:b(M,{absolute:!0})}),n.createElement("div",{id:P?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},n.createElement(r.Zo,{components:u.Z},E)),(H||Z)&&n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",{[h]:P})},H&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":R})},n.createElement(v.Z,{tags:y})),P&&x&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:x})),R&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":H})},n.createElement(o.Z,{to:N.permalink,"aria-label":(0,i.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:w})},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},39360:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(67294),l=a(41217),r=a(78665),i=a(38561),o=a(83117),s=a(95999),m=a(71750);function c(e){const{nextItem:t,prevItem:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(m.Z,(0,o.Z)({},a,{subLabel:n.createElement(s.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(m.Z,(0,o.Z)({},t,{subLabel:n.createElement(s.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")}))))}var u=a(45860),d=a(51575);function g(e){var t;const{content:a,sidebar:o}=e,{assets:s,metadata:m}=a,{title:g,description:p,nextItem:h,prevItem:v,date:b,tags:E,authors:f,frontMatter:_}=m,{hide_table_of_contents:N,keywords:Z,toc_min_heading_level:k,toc_max_heading_level:P}=_,L=null!=(t=s.image)?t:_.image;return n.createElement(r.Z,{wrapperClassName:u.kM.wrapper.blogPages,pageClassName:u.kM.page.blogPostPage,sidebar:o,toc:!N&&a.toc&&a.toc.length>0?n.createElement(d.Z,{toc:a.toc,minHeadingLevel:k,maxHeadingLevel:P}):void 0},n.createElement(l.Z,{title:g,description:p,keywords:Z,image:L},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:b}),f.some((e=>e.url))&&n.createElement("meta",{property:"article:author",content:f.map((e=>e.url)).filter(Boolean).join(",")}),E.length>0&&n.createElement("meta",{property:"article:tag",content:E.map((e=>e.label)).join(",")})),n.createElement(i.Z,{frontMatter:_,assets:s,metadata:m,isBlogPostPage:!0},n.createElement(a,null)),(h||v)&&n.createElement(c,{nextItem:h,prevItem:v}))}},86753:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),l=a(95999),r=a(83117),i=a(86010),o="iconEdit_dcUD";function s(e){let{className:t,...a}=e;return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(o,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var m=a(45860);function c(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},n.createElement(s,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},71750:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294),l=a(39960);function r(e){const{permalink:t,title:a,subLabel:r}=e;return n.createElement(l.Z,{className:"pagination-nav__link",to:t},r&&n.createElement("div",{className:"pagination-nav__sublabel"},r),n.createElement("div",{className:"pagination-nav__label"},a))}},25002:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(83117),l=a(67294),r=a(45860);function i(e){let{toc:t,className:a,linkClassName:n,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(i,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}function o(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:c,...u}=e;const d=(0,r.LU)(),g=null!=m?m:d.tableOfContents.minHeadingLevel,p=null!=c?c:d.tableOfContents.maxHeadingLevel,h=(0,r.b9)({toc:t,minHeadingLevel:g,maxHeadingLevel:p}),v=(0,l.useMemo)((()=>{if(o&&s)return{linkClassName:o,linkActiveClassName:s,minHeadingLevel:g,maxHeadingLevel:p}}),[o,s,g,p]);return(0,r.Si)(v),l.createElement(i,(0,n.Z)({toc:h,className:a,linkClassName:o},u))}},51575:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(83117),l=a(67294),r=a(86010),i=a(25002),o="tableOfContents_cNA8";function s(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,r.Z)(o,"thin-scrollbar",t)},l.createElement(i.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},7774:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(67294),l=a(86010),r=a(39960),i="tag_hD8n",o="tagRegular_D6E_",s="tagWithCount_i0QQ";function m(e){const{permalink:t,name:a,count:m}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(i,{[o]:!m,[s]:m})},a,m&&n.createElement("span",null,m))}},20062:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(67294),l=a(86010),r=a(95999),i=a(7774),o="tags_XVD_",s="tag_JSN8";function m(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(o,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:s},n.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);