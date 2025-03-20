"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["60083"],{97914:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(85893);n(67294);var s=n(7670),r=n(68007);function a(e){let{metadata:t}=e,{previousPage:n,nextPage:a}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(r.Z,{permalink:n,title:(0,i.jsx)(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),a&&(0,i.jsx)(r.Z,{permalink:a,title:(0,i.jsx)(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},26802:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(85893);n(67294);var s=n(68141),r=n(77675);function a(e){let{items:t,component:n=r.Z}=e;return(0,i.jsx)(i.Fragment,{children:t.map(e=>{let{content:t}=e;return(0,i.jsx)(s.n4,{content:t,children:(0,i.jsx)(n,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)})})}},95975:function(e,t,n){n.r(t),n.d(t,{default:()=>j});var i=n("85893");n("67294");var s=n("67026"),r=n("7670"),a=n("39890"),l=n("66171"),o=n("11107");function c(e){let t=function(){let{selectMessage:e}=(0,o.c)();return t=>e(t,(0,r.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}var d=n("53367"),u=n("60187"),g=n("97914"),h=n("2901"),p=n("26802"),f=n("87739"),m=n("46055");function x(e){let{tag:t}=e,n=c(t);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.d,{title:n,description:t.description}),(0,i.jsx)(h.Z,{tag:"blog_tags_posts"})]})}function b(e){let{tag:t,items:n,sidebar:s,listMetadata:a}=e,l=c(t);return(0,i.jsxs)(u.Z,{sidebar:s,children:[t.unlisted&&(0,i.jsx)(f.Z,{}),(0,i.jsxs)("header",{className:"margin-bottom--xl",children:[(0,i.jsx)(m.Z,{as:"h1",children:l}),t.description&&(0,i.jsx)("p",{children:t.description}),(0,i.jsx)(d.Z,{href:t.allTagsPath,children:(0,i.jsx)(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,i.jsx)(p.Z,{items:n}),(0,i.jsx)(g.Z,{metadata:a})]})}function j(e){return(0,i.jsxs)(a.FG,{className:(0,s.Z)(l.k.wrapper.blogPages,l.k.page.blogTagPostListPage),children:[(0,i.jsx)(x,{...e}),(0,i.jsx)(b,{...e})]})}},87739:function(e,t,n){n.d(t,{Z:function(){return c}});var i=n(85893);n(67294);var s=n(67026),r=n(74385),a=n(66171),l=n(64926);function o(e){let{className:t}=e;return(0,i.jsx)(l.Z,{type:"caution",title:(0,i.jsx)(r.cI,{}),className:(0,s.Z)(t,a.k.common.unlistedBanner),children:(0,i.jsx)(r.eU,{})})}function c(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.T$,{}),(0,i.jsx)(o,{...e})]})}},74385:function(e,t,n){n.d(t,{T$:function(){return o},cI:function(){return a},eU:function(){return l},ht:function(){return c},xo:function(){return d}});var i=n(85893);n(67294);var s=n(7670),r=n(11199);function a(){return(0,i.jsx)(s.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,i.jsx)(s.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,i.jsx)(r.Z,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(s.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(s.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);