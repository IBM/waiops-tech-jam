"use strict";(self.webpackChunktech_academy_aiops_2022=self.webpackChunktech_academy_aiops_2022||[]).push([[6718,1532],{3624:function(e,t,a){a.d(t,{Z:function(){return E}});var r=a(7294),i=a(8650),n=a.n(i),l=a(1597),o=a(4799),c=a(3448),A=a(5900),s=a.n(A),d=function(e){var t,a=e.title,i=e.theme,n=e.tabs,l=void 0===n?[]:n;return r.createElement("div",{className:s()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=l.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===i,t))},r.createElement("div",{className:"bx--grid"},r.createElement("div",{className:"bx--row"},r.createElement("div",{className:"bx--col-lg-12"},r.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},m=function(e){var t=e.relativePagePath,a=e.repository,i=(0,l.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||i,o=n.baseUrl,c=n.subDirectory,A=o+"/edit/"+n.branch+c+"/src/pages"+t;return o?r.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},r.createElement("div",{className:"bx--col"},r.createElement("a",{className:"EditLink-module--link--IDrl1",href:A},"Edit this page on GitHub"))):null},g=a(4703),p=a(1721),u=function(e){function t(){return e.apply(this,arguments)||this}return(0,p.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,o=i.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=n()(e,{lower:!0,strict:!0}),c=a===o,A=new RegExp(o+"/?(#.*)?$"),d=i.replace(A,a);return r.createElement("li",{key:e,className:s()((t={},t["PageTabs-module--selected-item--aBB0K"]=c,t),"PageTabs-module--list-item--024o6")},r.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:""+d},e))}));return r.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},r.createElement("div",{className:"bx--grid"},r.createElement("div",{className:"bx--row"},r.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},r.createElement("nav",{"aria-label":t},r.createElement("ul",{className:"PageTabs-module--list--xLqxG"},c))))))},t}(r.Component),b=u,h=a(7296),k=a(5387),y=a(3732),w=function(e){var t=e.date,a=new Date(t);return t?r.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},r.createElement(y.sg,null,r.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},E=function(e){var t=e.pageContext,a=e.children,i=e.location,A=e.Title,s=t.frontmatter,p=void 0===s?{}:s,u=t.relativePagePath,y=t.titleType,E=p.tabs,f=p.title,v=p.theme,N=p.description,x=p.keywords,C=p.date,z=(0,k.Z)().interiorTheme,j=(0,l.useStaticQuery)("2456312558").site.pathPrefix,B=j?i.pathname.replace(j,""):i.pathname,T=E?B.split("/").filter(Boolean).slice(-1)[0]||n()(E[0],{lower:!0}):"",Q=v||z;return r.createElement(c.Z,{tabs:E,homepage:!1,theme:Q,pageTitle:f,pageDescription:N,pageKeywords:x,titleType:y},r.createElement(d,{title:A?r.createElement(A,null):f,label:"label",tabs:E,theme:Q}),E&&r.createElement(b,{title:f,slug:B,tabs:E,currentTab:T}),r.createElement(h.Z,{padded:!0},a,r.createElement(m,{relativePagePath:u}),r.createElement(w,{date:C})),r.createElement(g.Z,{pageContext:t,location:i,slug:B,tabs:E,currentTab:T}),r.createElement(o.Z,null))}},9575:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return y}});var r=a(3366),i=(a(7294),a(4983)),n=a(3624),l=["components"],o={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},A=c("PageDescription"),s=c("AnchorLinks"),d=c("AnchorLink"),m=c("Row"),g=c("Column"),p=c("ArticleCard"),u=c("Aside"),b=c("Video"),h={_frontmatter:o},k=n.Z;function y(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)(k,Object.assign({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(A,{mdxType:"PageDescription"},(0,i.kt)("p",null,"This page is meant to demonstrate some of the components in action. You can\ncheck out the markdown used for this page\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/pages/demo/index.mdx"},"on github"),".")),(0,i.kt)(s,{mdxType:"AnchorLinks"},(0,i.kt)(d,{mdxType:"AnchorLink"},"Building bonds"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Global accessibility standards"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Small anchor links"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Videos")),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(g,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},(0,i.kt)(p,{title:"Getting started",href:"/getting-started",actionIcon:"arrowRight",mdxType:"ArticleCard"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACpElEQVQoz03R/S/UARwA4M8xFUVrltVsFbUlwp23nDuce5PNVGheevFSrQ6rTGjK2J0Odzqml7UlvcjL7tCG5JLa2jV2OHdeclznGHKSkQzH+X5aq7X+gOenB/J7CdEwxr5YAEafBUdFClFcoE+Lg9aKQghJMCEIXndm64GltGQoLBgKS24vBKi4EmPJCOb3EvAXVy0C9R2JIgPPhjNkTa6bNtfbwA9e3c/SArWF5CEF90bwbLTwkgK5lVtqFP/DxcMY+2weKK9tzw64SRZOFWzwrmIqbWKvfzfQPsGxtt3pE16VP93LF+2v6MCtmSua/A9rMaZ6ccdFQ/R7LNRhCY+4loLeZUvWCV/sEvX7Cr4nyFZu35yRjGKiEu3Spjj35sSjmN9DgECNeT0b5PJZWr3psR6b3k7zfGU11cuXNehUMOaY8zmmE6s71rKpiicVA7UGDGvddJHMZilW7/QjFA0jM1cJrjWhr0x6E2YmCx2tAg2jKNTjzuh2y0AprwsXVpFOiTrtkzG3gvEfEGgtHkly4RCCcBBdzr2BI7WUymVJJz6Mm7/u0vngvvG8EreFtYGfNKKDeNS+douqbGqfrxjHkAYz+DXbM2v4fQjCITyaIAfn53uSDHFizI7GtEBt1CXdAcE8eNWD+0uHjKmY5vXMih85Gozs2NyVMgmu9Q6cOr4aoXAQ45+OOXDkqbSlvEgi+YaZkvXNlqcHlgZ8G8G7Dhiq7Ym6Q6I5p7wZ6zgtMNRbQ+Thon7hIIJgCPlKU07UpIS+eTfQXEY1OwVpgd5FYmvARwbkKmCrIKgbApRA77ZgqoDazS75Wjr2p+rjRurxnvTDAyImUcwwixjmg6wRYPduCdfbnNTbnNBZRYyTOGoSp4/E6bMMVYO/kisxirW/8S8tA2XtKUcASQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/static/e243060648c8c9dd3fccd6ab17c112d6/3cbba/Article_06.png",srcSet:["/static/e243060648c8c9dd3fccd6ab17c112d6/7fc1e/Article_06.png 288w","/static/e243060648c8c9dd3fccd6ab17c112d6/a5df1/Article_06.png 576w","/static/e243060648c8c9dd3fccd6ab17c112d6/3cbba/Article_06.png 1152w","/static/e243060648c8c9dd3fccd6ab17c112d6/0b124/Article_06.png 1728w","/static/e243060648c8c9dd3fccd6ab17c112d6/0c3f5/Article_06.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)(g,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},(0,i.kt)(p,{title:"Theme configuration",href:"/guides/configuration",actionIcon:"arrowRight",mdxType:"ArticleCard"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACpElEQVQoz03R/S/UARwA4M8xFUVrltVsFbUlwp23nDuce5PNVGheevFSrQ6rTGjK2J0Odzqml7UlvcjL7tCG5JLa2jV2OHdeclznGHKSkQzH+X5aq7X+gOenB/J7CdEwxr5YAEafBUdFClFcoE+Lg9aKQghJMCEIXndm64GltGQoLBgKS24vBKi4EmPJCOb3EvAXVy0C9R2JIgPPhjNkTa6bNtfbwA9e3c/SArWF5CEF90bwbLTwkgK5lVtqFP/DxcMY+2weKK9tzw64SRZOFWzwrmIqbWKvfzfQPsGxtt3pE16VP93LF+2v6MCtmSua/A9rMaZ6ccdFQ/R7LNRhCY+4loLeZUvWCV/sEvX7Cr4nyFZu35yRjGKiEu3Spjj35sSjmN9DgECNeT0b5PJZWr3psR6b3k7zfGU11cuXNehUMOaY8zmmE6s71rKpiicVA7UGDGvddJHMZilW7/QjFA0jM1cJrjWhr0x6E2YmCx2tAg2jKNTjzuh2y0AprwsXVpFOiTrtkzG3gvEfEGgtHkly4RCCcBBdzr2BI7WUymVJJz6Mm7/u0vngvvG8EreFtYGfNKKDeNS+douqbGqfrxjHkAYz+DXbM2v4fQjCITyaIAfn53uSDHFizI7GtEBt1CXdAcE8eNWD+0uHjKmY5vXMih85Gozs2NyVMgmu9Q6cOr4aoXAQ45+OOXDkqbSlvEgi+YaZkvXNlqcHlgZ8G8G7Dhiq7Ym6Q6I5p7wZ6zgtMNRbQ+Thon7hIIJgCPlKU07UpIS+eTfQXEY1OwVpgd5FYmvARwbkKmCrIKgbApRA77ZgqoDazS75Wjr2p+rjRurxnvTDAyImUcwwixjmg6wRYPduCdfbnNTbnNBZRYyTOGoSp4/E6bMMVYO/kisxirW/8S8tA2XtKUcASQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/static/e243060648c8c9dd3fccd6ab17c112d6/3cbba/Article_06.png",srcSet:["/static/e243060648c8c9dd3fccd6ab17c112d6/7fc1e/Article_06.png 288w","/static/e243060648c8c9dd3fccd6ab17c112d6/a5df1/Article_06.png 576w","/static/e243060648c8c9dd3fccd6ab17c112d6/3cbba/Article_06.png 1152w","/static/e243060648c8c9dd3fccd6ab17c112d6/0b124/Article_06.png 1728w","/static/e243060648c8c9dd3fccd6ab17c112d6/0c3f5/Article_06.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)(g,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},(0,i.kt)(p,{title:"Contributions",href:"/contributions",actionIcon:"arrowRight",mdxType:"ArticleCard"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACpElEQVQoz03R/S/UARwA4M8xFUVrltVsFbUlwp23nDuce5PNVGheevFSrQ6rTGjK2J0Odzqml7UlvcjL7tCG5JLa2jV2OHdeclznGHKSkQzH+X5aq7X+gOenB/J7CdEwxr5YAEafBUdFClFcoE+Lg9aKQghJMCEIXndm64GltGQoLBgKS24vBKi4EmPJCOb3EvAXVy0C9R2JIgPPhjNkTa6bNtfbwA9e3c/SArWF5CEF90bwbLTwkgK5lVtqFP/DxcMY+2weKK9tzw64SRZOFWzwrmIqbWKvfzfQPsGxtt3pE16VP93LF+2v6MCtmSua/A9rMaZ6ccdFQ/R7LNRhCY+4loLeZUvWCV/sEvX7Cr4nyFZu35yRjGKiEu3Spjj35sSjmN9DgECNeT0b5PJZWr3psR6b3k7zfGU11cuXNehUMOaY8zmmE6s71rKpiicVA7UGDGvddJHMZilW7/QjFA0jM1cJrjWhr0x6E2YmCx2tAg2jKNTjzuh2y0AprwsXVpFOiTrtkzG3gvEfEGgtHkly4RCCcBBdzr2BI7WUymVJJz6Mm7/u0vngvvG8EreFtYGfNKKDeNS+douqbGqfrxjHkAYz+DXbM2v4fQjCITyaIAfn53uSDHFizI7GtEBt1CXdAcE8eNWD+0uHjKmY5vXMih85Gozs2NyVMgmu9Q6cOr4aoXAQ45+OOXDkqbSlvEgi+YaZkvXNlqcHlgZ8G8G7Dhiq7Ym6Q6I5p7wZ6zgtMNRbQ+Thon7hIIJgCPlKU07UpIS+eTfQXEY1OwVpgd5FYmvARwbkKmCrIKgbApRA77ZgqoDazS75Wjr2p+rjRurxnvTDAyImUcwwixjmg6wRYPduCdfbnNTbnNBZRYyTOGoSp4/E6bMMVYO/kisxirW/8S8tA2XtKUcASQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/static/e243060648c8c9dd3fccd6ab17c112d6/3cbba/Article_06.png",srcSet:["/static/e243060648c8c9dd3fccd6ab17c112d6/7fc1e/Article_06.png 288w","/static/e243060648c8c9dd3fccd6ab17c112d6/a5df1/Article_06.png 576w","/static/e243060648c8c9dd3fccd6ab17c112d6/3cbba/Article_06.png 1152w","/static/e243060648c8c9dd3fccd6ab17c112d6/0b124/Article_06.png 1728w","/static/e243060648c8c9dd3fccd6ab17c112d6/0c3f5/Article_06.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")))),(0,i.kt)(A,{mdxType:"PageDescription"},(0,i.kt)("p",null,"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.\nPinnace holystone mizzenmast quarter crow’s nest nipperkin grog yardarm hempen\nhalter furl. Swab barque interloper chantey doubloon starboard grog black jack\ngangway rutters.")),(0,i.kt)("p",null,"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.\nPinnace holystone mizzenmast quarter crow’s nest nipperkin grog yardarm hempen\nhalter furl. Swab barque interloper chantey doubloon starboard grog black jack\ngangway rutters."),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(g,{colMd:5,colLg:8,mdxType:"Column"},(0,i.kt)("h2",null,"Section heading"),(0,i.kt)("p",null,"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.\nPinnace holystone mizzenmast quarter crow’s nest nipperkin grog yardarm hempen\nhalter furl. Swab barque interloper chantey doubloon starboard grog black jack\ngangway rutters."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Add-on repositories, or repos, are components built for a specific product or\nexperience. The repos are built on top of the core Carbon repo, and enable")),(0,i.kt)("p",null,"IBMers believe in progress—that application of intelligence, reason and science\ncan improve business, society and the human condition.")),(0,i.kt)(g,{colMd:2,colLg:3,offsetMd:1,offsetLg:1,mdxType:"Column"},(0,i.kt)(u,{mdxType:"Aside"},(0,i.kt)("p",null,(0,i.kt)("strong",null,"Good design is always",(0,i.kt)("br",null),"good design.")),(0,i.kt)("p",null,"What we borrow from our own design history is not a mid-century aesthetic in\nstylistic terms, but the modernist attitudes and approach used at the time.")))),(0,i.kt)("h2",null,"Small anchor links"),(0,i.kt)("p",null,"Swab barque interloper™ chantey doubloon starboard grog black jack gangway\nrutters π."),(0,i.kt)(s,{small:!0,mdxType:"AnchorLinks"},(0,i.kt)(d,{mdxType:"AnchorLink"},"Header"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Header again")),(0,i.kt)("h3",null,"Header"),(0,i.kt)("p",null,"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.\nPinnace holystone mizzenmast quarter crow’s nest nipperkin grog yardarm hempen\nhalter furl. Swab barque interloper chantey doubloon starboard grog black jack\ngangway rutters."),(0,i.kt)("h3",null,"Header again"),(0,i.kt)("p",null,"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.\nPinnace holystone mizzenmast quarter crow’s nest nipperkin grog yardarm hempen\nhalter furl. Swab barque interloper chantey doubloon starboard grog black jack\ngangway rutters."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"This is a demonstration of an ordered list item. This list item is\nparticularly long to demonstrate how the text wraps and aligns with the first\nline.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"This is a nested list item, it should wrap in the same way. Typically,\nnested list items should be of the same type (ordered, unordered) as their\nparent."))),(0,i.kt)("li",{parentName:"ol"},"Ordered list item"),(0,i.kt)("li",{parentName:"ol"},"Ordered list item")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This is a demonstration of an unordered list item. This list item is\nparticularly long to demonstrate how the text wraps and aligns with the first\nline.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This is a nested list item, it should wrap in the same way. Typically,\nnested list items should be of the same type (ordered, unordered) as their\nparent."))),(0,i.kt)("li",{parentName:"ul"},"Unordered list item"),(0,i.kt)("li",{parentName:"ul"},"Unordered list item")),(0,i.kt)("h2",null,"Images"),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMFAf/EABUBAQEAAAAAAAAAAAAAAAAAAAQD/9oADAMBAAIQAxAAAAHXzbizxBgqP//EABsQAAEEAwAAAAAAAAAAAAAAAAABAgMREhQz/9oACAEBAAEFAth5Pggt2Ixty9P/xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIR/9oACAEDAQE/AY2kM//EABkRAQACAwAAAAAAAAAAAAAAAAEAAgMSMf/aAAgBAgEBPwHLrREhyf/EAB4QAAIBAwUAAAAAAAAAAAAAAAARIQECEBIxQVFx/9oACAEBAAY/AuCjersnfDUl3p//xAAcEAACAgIDAAAAAAAAAAAAAAAAAREhMVGBkaH/2gAIAQEAAT8hbFFJ0iQmBSZ5JmvtIsinaOz1j//aAAwDAQACAAMAAAAQHw//xAAXEQEBAQEAAAAAAAAAAAAAAAABABFx/9oACAEDAQE/EEoXewxS/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQARMYH/2gAIAQIBAT8QAxW5yOwz/8QAHRABAQABBAMAAAAAAAAAAAAAAREAIVFhcTFB8P/aAAgBAQABPxBdMkqCcmuBpJtY0SHbfEnqHkvOeDvI4UWIoqvvPlb5/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Large blocky illustration",title:"Large blocky illustration",src:"/static/8006174cef307d9cf1a013bc15b3dd6c/2e753/large-image.jpg",srcSet:["/static/8006174cef307d9cf1a013bc15b3dd6c/69549/large-image.jpg 288w","/static/8006174cef307d9cf1a013bc15b3dd6c/473e3/large-image.jpg 576w","/static/8006174cef307d9cf1a013bc15b3dd6c/2e753/large-image.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("h2",null,"Videos"),(0,i.kt)(b,{title:"Eyes",vimeoId:"310583077",mdxType:"Video"}))}y.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-demo-index-mdx-33af95faf9d4c014fab5.js.map