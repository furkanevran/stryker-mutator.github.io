"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[6103],{8665:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(7294),l=a(6010),r=a(1287),i=a(9960),s="sidebar_2ahu",m="sidebarItemTitle_2hhb",o="sidebarItemList_2xAf",c="sidebarItem_2UVv",d="sidebarItemLink_1RT6",u="sidebarItemLinkActive_12pM",g=a(5999);function p(e){let{sidebar:t}=e;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:o},t.items.map((e=>n.createElement("li",{key:e.permalink,className:c},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:u},e.title))))))}var v=function(e){const{sidebar:t,toc:a,children:i,...s}=e,m=t&&t.items.length>0;return n.createElement(r.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},m&&n.createElement("aside",{className:"col col--3"},n.createElement(p,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&n.createElement("div",{className:"col col--2"},a))))}},8561:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(7294),l=a(6010),r=a(3905),i=a(5999),s=a(9960),m=a(4996),o=a(2822),c=a(7707),d=a(6753),u="blogPostTitle_GeHD",g="blogPostData_291c",p="blogPostDetailsFull_3kfx",v=a(62),h="image_1yU8";var E=function(e){let{author:t}=e;const{name:a,title:l,url:r,imageURL:i}=t;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:r},n.createElement("img",{className:h,src:i,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(s.Z,{href:r,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),l&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))},b="authorCol_1R69";function _(e){let{authors:t,assets:a}=e;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map(((e,t)=>{var r;return n.createElement("div",{className:(0,l.Z)("col col--6",b),key:t},n.createElement(E,{author:{...e,imageURL:null!=(r=a.authorsImageUrls[t])?r:e.imageURL}}))})))}var f=function(e){var t;const a=function(){const{selectMessage:e}=(0,o.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:h}=(0,m.C)(),{children:E,frontMatter:b,assets:f,metadata:N,truncated:k,isBlogPostPage:Z=!1}=e,{date:P,formattedDate:C,permalink:L,tags:T,readingTime:y,title:w,editUrl:x,authors:I}=N,M=null!=(t=f.image)?t:b.image,H=!Z&&k,U=T.length>0;return n.createElement("article",{className:Z?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(()=>{const e=Z?"h1":"h2";return n.createElement("header",null,n.createElement(e,{className:u,itemProp:"headline"},Z?w:n.createElement(s.Z,{itemProp:"url",to:L},w)),n.createElement("div",{className:(0,l.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:P,itemProp:"datePublished"},C),void 0!==y&&n.createElement(n.Fragment,null," \xb7 ",a(y))),n.createElement(_,{authors:I,assets:f}))})(),M&&n.createElement("meta",{itemProp:"image",content:h(M,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(r.Zo,{components:c.Z},E)),(U||k)&&n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",{[p]:Z})},U&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":H})},n.createElement(v.Z,{tags:T})),Z&&x&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:x})),H&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":U})},n.createElement(s.Z,{to:N.permalink,"aria-label":"Read more about "+w},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9360:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(7294),l=a(1217),r=a(8665),i=a(8561),s=a(5999),m=a(9960);var o=function(e){const{nextItem:t,prevItem:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(m.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(m.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},c=a(2822),d=a(1575);var u=function(e){var t;const{content:a,sidebar:s}=e,{frontMatter:m,assets:u,metadata:g}=a,{title:p,description:v,nextItem:h,prevItem:E,date:b,tags:_,authors:f}=g,{hide_table_of_contents:N,keywords:k,toc_min_heading_level:Z,toc_max_heading_level:P}=m,C=null!=(t=u.image)?t:m.image;return n.createElement(r.Z,{wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogPostPage,sidebar:s,toc:!N&&a.toc&&a.toc.length>0?n.createElement(d.Z,{toc:a.toc,minHeadingLevel:Z,maxHeadingLevel:P}):void 0},n.createElement(l.Z,{title:p,description:v,keywords:k,image:C},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:b}),f.some((e=>e.url))&&n.createElement("meta",{property:"article:author",content:f.map((e=>e.url)).filter(Boolean).join(",")}),_.length>0&&n.createElement("meta",{property:"article:tag",content:_.map((e=>e.label)).join(",")})),n.createElement(i.Z,{frontMatter:m,assets:u,metadata:g,isBlogPostPage:!0},n.createElement(a,null)),(h||E)&&n.createElement(o,{nextItem:h,prevItem:E}))}},6753:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),l=a(5999),r=a(7462),i=a(6010),s="iconEdit_2_ui";var m=e=>{let{className:t,...a}=e;return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},o=a(2822);function c(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.kM.common.editThisPage},n.createElement(m,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1575:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7462),l=a(7294),r=a(6010),i=a(5002),s="tableOfContents_35-E";var m=function(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,r.Z)(s,"thin-scrollbar",t)},l.createElement(i.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7462),l=a(7294),r=a(2822);function i(e){let{toc:t,className:a,linkClassName:n,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(i,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}function s(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:o,maxHeadingLevel:c,...d}=e;const u=(0,r.LU)(),g=null!=o?o:u.tableOfContents.minHeadingLevel,p=null!=c?c:u.tableOfContents.maxHeadingLevel,v=(0,r.DA)({toc:t,minHeadingLevel:g,maxHeadingLevel:p}),h=(0,l.useMemo)((()=>{if(s&&m)return{linkClassName:s,linkActiveClassName:m,minHeadingLevel:g,maxHeadingLevel:p}}),[s,m,g,p]);return(0,r.Si)(h),l.createElement(i,(0,n.Z)({toc:v,className:a,linkClassName:s},d))}},7774:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(6010),r=a(9960),i="tag_1Okp",s="tagRegular_3MiF",m="tagWithCount_1HU1";var o=function(e){const{permalink:t,name:a,count:o}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(i,{[s]:!o,[m]:o})},a,o&&n.createElement("span",null,o))}},62:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(6010),r=a(5999),i=a(7774),s="tags_2ga9",m="tag_11ep";function o(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(s,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:m},n.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);