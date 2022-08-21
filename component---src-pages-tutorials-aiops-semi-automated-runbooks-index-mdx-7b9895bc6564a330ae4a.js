"use strict";(self.webpackChunktech_academy_aiops_2022=self.webpackChunktech_academy_aiops_2022||[]).push([[7437,1532],{3624:function(e,t,a){a.d(t,{Z:function(){return B}});var n=a(7294),i=a(8650),s=a.n(i),o=a(1597),r=a(4799),l=a(3448),c=a(5900),p=a.n(c),g=function(e){var t,a=e.title,i=e.theme,s=e.tabs,o=void 0===s?[]:s;return n.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=o.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===i,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},m=function(e){var t=e.relativePagePath,a=e.repository,i=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,s=a||i,r=s.baseUrl,l=s.subDirectory,c=r+"/edit/"+s.branch+l+"/src/pages"+t;return r?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},d=a(4703),A=a(1721),b=function(e){function t(){return e.apply(this,arguments)||this}return(0,A.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,r=i.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var t,a=s()(e,{lower:!0,strict:!0}),l=a===r,c=new RegExp(r+"/?(#.*)?$"),g=i.replace(c,a);return n.createElement("li",{key:e,className:p()((t={},t["PageTabs-module--selected-item--aBB0K"]=l,t),"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+g},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(n.Component),u=b,f=a(7296),k=a(5387),h=a(3732),y=function(e){var t=e.date,a=new Date(t);return t?n.createElement(h.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(h.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},B=function(e){var t=e.pageContext,a=e.children,i=e.location,c=e.Title,p=t.frontmatter,A=void 0===p?{}:p,b=t.relativePagePath,h=t.titleType,B=A.tabs,w=A.title,R=A.theme,v=A.description,C=A.keywords,N=A.date,x=(0,k.Z)().interiorTheme,_=(0,o.useStaticQuery)("2456312558").site.pathPrefix,I=_?i.pathname.replace(_,""):i.pathname,E=B?I.split("/").filter(Boolean).slice(-1)[0]||s()(B[0],{lower:!0}):"",S=R||x;return n.createElement(l.Z,{tabs:B,homepage:!1,theme:S,pageTitle:w,pageDescription:v,pageKeywords:C,titleType:h},n.createElement(g,{title:c?n.createElement(c,null):w,label:"label",tabs:B,theme:S}),B&&n.createElement(u,{title:w,slug:I,tabs:B,currentTab:E}),n.createElement(f.Z,{padded:!0},a,n.createElement(m,{relativePagePath:b}),n.createElement(y,{date:N})),n.createElement(d.Z,{pageContext:t,location:i,slug:I,tabs:B,currentTab:E}),n.createElement(r.Z,null))}},698:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return d}});var n=a(3366),i=(a(7294),a(4983)),s=a(3624),o=["components"],r={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},c=l("AnchorLinks"),p=l("AnchorLink"),g={_frontmatter:r},m=s.Z;function d(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)(m,Object.assign({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c,{mdxType:"AnchorLinks"},(0,i.kt)(p,{mdxType:"AnchorLink"},"11-1: Overview"),(0,i.kt)(p,{mdxType:"AnchorLink"},"11-2: Configure Integration with other systems"),(0,i.kt)(p,{mdxType:"AnchorLink"},"11-3: Create Automation "),(0,i.kt)(p,{mdxType:"AnchorLink"},"11-4: Create Runbook"),(0,i.kt)(p,{mdxType:"AnchorLink"},"11-5: Create Trigger"),(0,i.kt)(p,{mdxType:"AnchorLink"},"11-6: Test runbook")),(0,i.kt)("h2",null,"11-1: Overview"),(0,i.kt)("p",null,"IBM Runbook Automation can automate procedures that can help IT staff solve everyday operational problems and do not require human interaction, thereby increasing the efficiency of IT operational processes."),(0,i.kt)("p",null,"Runbooks start as documented procedures on a piece of paper that can become fully automated procedures. "),(0,i.kt)("p",null,"This module focuses on the creation of a simple Semi-automated runbook. "),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"720px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"18.75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA20lEQVQY002Py26DMBBF+f+faj8gm9Iki/KyCOAQBAQsbIPBpzKLqlc6qxmdmRtVWYYUAqzFm4A5wa4c2vBIUr4uF5Ik4TgOQrz3/I8QgjiOKYqCaM0L1jRnut1xecGW5bhcoH8S5tsdnWbUH58s8sliLW5zpzjgnGOeZ7TWdF2HtZZIh4E/EFXFslpGpVDGoIymG3q099TfV/b2RdnUTNP7lCilMMZQluUpapqGbduInPcc+36+/h5HmrrmKSXj0OP3nVBSlw9c+zp35mlCSknbtgx9/1c/HAnCX/i1MKGL+AlKAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"RunbookLifeCycle",title:"RunbookLifeCycle",src:"/static/bb207f2cf1d0e01a9573b7f3d85c094e/b85f6/RunbookLifeCycle.png",srcSet:["/static/bb207f2cf1d0e01a9573b7f3d85c094e/7fc1e/RunbookLifeCycle.png 288w","/static/bb207f2cf1d0e01a9573b7f3d85c094e/a5df1/RunbookLifeCycle.png 576w","/static/bb207f2cf1d0e01a9573b7f3d85c094e/b85f6/RunbookLifeCycle.png 720w"],sizes:"(max-width: 720px) 100vw, 720px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Scenario:")," There is a httpd server running on HOST . The httpd process is monitored and configured to generate an alert when the Httpd API service goes UP/DOWN."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Objective:")," Create a runbook to restart httpd API service and associate it with “Httpd API Service Down” alert."),(0,i.kt)("p",null,"By the end of this module, you will have a fully functional semi-automated runbook ready in the Watson AIOPs Event Manager environment."),(0,i.kt)("hr",null),(0,i.kt)("h2",null,"11-2: Configure Integration with other systems"),(0,i.kt)("p",null,"For executing runbooks, users need to choose the type of automation provider from  Ansible Tower, SCRIPT or  BigFix.  A connection must be set up to connect to your target endpoints."),(0,i.kt)("p",null,"The SCRIPT automation provider allows to execute scripts (bash, ksh, perl ) on a target system. In this example, we will use the SCRIPT automation provider to establish an ssh session to target the endpoint. To allow RBA to log in without needing to specify a password, we need to copy RBA’s public key into the user’s SSH authorized_keys of the target host. We can get the RBA public key by accessing the Watson AIOps — Event Manager User Interface as follows:"),(0,i.kt)("p",null,"Navigate to:  ",(0,i.kt)("strong",{parentName:"p"},"Administration → Integration with other systems > automation type > script > configure")),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"34.02777777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA7ElEQVQY04WQS04DMRBE5/43YsMGNjkBM0gIAdIkcfzv6rY9kT3IRomy4+m55E21P1MpBR0CUGvb/6OU8vry/HQ4HT72iZmJSERSSkyeoifq4pZA4G6fDhbIlre2bddat8ka671nFhGQ+4z2O7oujQz2i/xPphVkiUAdxEiRENZ1ut+ntR0sfUpKIjnlkv8s29jkUnJKqa+BGDPtbW+tP7XWaq022viOCyHEIcWeIQS+Mf4ILPJ48pXd4s6zv7w7NXu1ODU7tbjL4tQbBQXcaoAwmPFQrjX4s9WrM8foFaIemqFmxHvTBZw0a8u/WYOPytsQNa4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"RB script conn configure",title:"RB script conn configure",src:"/static/cfa7fc2c61fc436c7d2c072327afef00/3cbba/RB_script_conn_configure.png",srcSet:["/static/cfa7fc2c61fc436c7d2c072327afef00/7fc1e/RB_script_conn_configure.png 288w","/static/cfa7fc2c61fc436c7d2c072327afef00/a5df1/RB_script_conn_configure.png 576w","/static/cfa7fc2c61fc436c7d2c072327afef00/3cbba/RB_script_conn_configure.png 1152w","/static/cfa7fc2c61fc436c7d2c072327afef00/b1877/RB_script_conn_configure.png 1401w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("p",null,"Copy the public key to ~/.ssh/authorized_key  on the remote host where we want to execute the command."),(0,i.kt)("hr",null),(0,i.kt)("h2",null,"11-3: Create Automation"),(0,i.kt)("p",null,"Automation is a unit of programmatic instructions in RBA. Automation can be a script that is run through an SSH session on a remote system, an HTTP(s) API call, a BigFix call, or an Ansible tower Job or Job Workflow call.  A Runbook is formed by combining one or more automation. You can create new automation using Watson AIOps — Event Manager UI as follows:"),(0,i.kt)("p",null,"Navigate to:  ",(0,i.kt)("strong",{parentName:"p"}," Automations → Runbooks → Automations → Create Automation ")),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.65277777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAA1ElEQVQoz4WSTU4DMQyF5/63YAVI3AAJFU7AARAbukCZnzh2XprUkwalYYGGCXwLy5b8/JzIAzOIXIyxlHLpk3MupRyPH7d394L09llunvMQgHmeR2OIyDnn/4OZAYiABUOrW2zJ34QQvhP4KiYiEYlXTn0AbAZVsbWWyLWO2GdfzMwiHDpcXyjig2PZEU9jxVbq/hu896qaFekksuMs0sbvfs84TYenx4eX6fU9Vf2PrgEA22U2Bs3hF6pq7WLcunCCl63zOaVVNa9ru4Qe5xQ3230BF1c80FYnAYAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"RB Create automation",title:"RB Create automation",src:"/static/86f9db1661bed709f63bdffbd7659f52/3cbba/RB_Create_automation.png",srcSet:["/static/86f9db1661bed709f63bdffbd7659f52/7fc1e/RB_Create_automation.png 288w","/static/86f9db1661bed709f63bdffbd7659f52/a5df1/RB_Create_automation.png 576w","/static/86f9db1661bed709f63bdffbd7659f52/3cbba/RB_Create_automation.png 1152w","/static/86f9db1661bed709f63bdffbd7659f52/6640c/RB_Create_automation.png 1386w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("p",null,"Script :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'echo "Restarting the HTTPD service"\nsudo systemctl restart httpd\nsudo systemctl status httpd | grep Active\n')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Automation Parameters:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"target"),"  and ",(0,i.kt)("strong",{parentName:"p"},"user")," are default parameters are required to execute automation on the remote system. Add another parameter ",(0,i.kt)("strong",{parentName:"p"},"Identifier")," of String type that we can use later for updating alarm based on runbook results."),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"20.13888888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAIAAAABPYjBAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAk0lEQVQI11XNQQrCMBAF0FzLhefwLuIZvF43jRJoozEtREiaTmYyEUYL9a0+w+ePCiG8d5LIO4uQkAvkKeTTdTle0uGcVNd1Wuub6HVvjBmG0Xv/Et5759zD2nmep83TTXczjtYpRGTmtoF1jTGmlKL8J6JKVEpp/6hy5apyzgDQWmNBoorvKCICAPOvIEdeCxfkD2KQ4eVu3eJNAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"RB Automation Params",title:"RB Automation Params",src:"/static/941f5264720cff7a062ece69b0c3c593/3cbba/RB_Automation_Params.png",srcSet:["/static/941f5264720cff7a062ece69b0c3c593/7fc1e/RB_Automation_Params.png 288w","/static/941f5264720cff7a062ece69b0c3c593/a5df1/RB_Automation_Params.png 576w","/static/941f5264720cff7a062ece69b0c3c593/3cbba/RB_Automation_Params.png 1152w","/static/941f5264720cff7a062ece69b0c3c593/b2f7c/RB_Automation_Params.png 1173w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("p",null,"Save the automation. "),(0,i.kt)("h2",null,"11-4: Create Runbook"),(0,i.kt)("p",null,"Navigate to: ",(0,i.kt)("strong",{parentName:"p"}," Automations → Runbooks → Library → Create Runbook ")),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"25.34722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAIAAADKYVtkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAjUlEQVQY023PMQ7CMBAEQP+Zmppf0FHxDp5Aj9K4QBDn7ta+2LEvkpEQKBltuyutS0mJSFXNrP2zPbkYUhmGwXvvQgcgbmBfJBYiVlVHnarOP3LOAKZp2s6xgFFiKnlpTlPqzdxqNfumfe7slkUEgOrsXgHPd2TBw8vpGo6X8XAeb3daZmGWLQBLV2tdAVTgHphfv+qZAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"RB Create RB",title:"RB Create RB",src:"/static/ce8e2f61c70e918a10944917be3bf33b/3cbba/RB_Create_RB.png",srcSet:["/static/ce8e2f61c70e918a10944917be3bf33b/7fc1e/RB_Create_RB.png 288w","/static/ce8e2f61c70e918a10944917be3bf33b/a5df1/RB_Create_RB.png 576w","/static/ce8e2f61c70e918a10944917be3bf33b/3cbba/RB_Create_RB.png 1152w","/static/ce8e2f61c70e918a10944917be3bf33b/0b124/RB_Create_RB.png 1728w","/static/ce8e2f61c70e918a10944917be3bf33b/27540/RB_Create_RB.png 1862w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("p",null,"Add automated Step > Select “Restart API Service” Automation"),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"25.34722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAIAAADKYVtkAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAmklEQVQY043OPQ7CMAwF4FwVDsOOhFRWxIxgQDCwMSBxBsROaCs1IbSNYz8jysDPgPrpLbbfYBNCaDopJekBENVX2LRtW9c1EQH46XHnYxSFuDtnuzRapvlejL/5i7XWXouidN/yPC/L97Jyzntni2q2OU8Wp/XBmhgbajzHoEo93wYHkFclszrG4RSDTMZbqOJ5/UsAFggD0AcVlB3ABge9XQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"RB Create RB add auto",title:"RB Create RB add auto",src:"/static/c8f8b5eae05b22a39bb4690633c45aaa/3cbba/RB_Create_RB_add_auto.png",srcSet:["/static/c8f8b5eae05b22a39bb4690633c45aaa/7fc1e/RB_Create_RB_add_auto.png 288w","/static/c8f8b5eae05b22a39bb4690633c45aaa/a5df1/RB_Create_RB_add_auto.png 576w","/static/c8f8b5eae05b22a39bb4690633c45aaa/3cbba/RB_Create_RB_add_auto.png 1152w","/static/c8f8b5eae05b22a39bb4690633c45aaa/152d6/RB_Create_RB_add_auto.png 1422w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("p",null,"Map Automation parameters as follows:"),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"998px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.388888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABJUlEQVQoz5XQS07DMBAAUB8ke46B1EJXOQMHoCy4LyxakkBaxb+xx3+7yI2K2lIWPI0sa6wZa4ZIKSmljDIACPF/CACAAjTonDv8oZQSQiilXOXJ3OP3w1Wxc+5GsQS52+9BqXDivUfEEOoQP0nnnPc+nEkpEUppP/TjODLGOOfiaLvZDMOw2+8YY5RSzvl4xDlnR9M0ISJxzhrEGGNt7KtSilLAGBNCIKLW2lrrvJcg8URrXX82xkgpja2MMSmlnDNjdJomrbVSGkAhGjRWCKmUnqOOGSOZ93G1idoRQCnIweSAOboUrBJTqneTo0kBS0mk7/uu6z4ubWfd5/uY377K7RgPpG3b1Wq1XC4fLjw+LO4X7dPdq29eDs06N+vSPJd6nsU378gdoKwf8n0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"RB Create RB map params",title:"RB Create RB map params",src:"/static/0fbc367a19ff11b2793e957e2cbed841/e2fd6/RB_Create_RB_map_params.png",srcSet:["/static/0fbc367a19ff11b2793e957e2cbed841/7fc1e/RB_Create_RB_map_params.png 288w","/static/0fbc367a19ff11b2793e957e2cbed841/a5df1/RB_Create_RB_map_params.png 576w","/static/0fbc367a19ff11b2793e957e2cbed841/e2fd6/RB_Create_RB_map_params.png 998w"],sizes:"(max-width: 998px) 100vw, 998px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("p",null,"Publish runbook by clicking ",(0,i.kt)("strong",{parentName:"p"}," Actions > Publish ")),(0,i.kt)("hr",null),(0,i.kt)("h2",null,"11-5: Create Trigger"),(0,i.kt)("p",null,"Triggers are used to associate runbook to the alerts.  It looks for events in which their Summary fields match the string pattern.\nFor more information on triggers : ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/noi/1.6.5?topic=triggers-create-trigger"},"https://www.ibm.com/docs/en/noi/1.6.5?topic=triggers-create-trigger")),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.66666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAx0lEQVQY05XQ24oDIQwGYN//QWetp5hMPI26Luq0lMJe9LsQIZqfRDyktNZ478H78A1mFogYQogxppTKN2KMwjkHAETEzPHN7viR9l6fyUoprZW1FsAx8/nE/ztPxpnFYvcDgOM4jDFusdbKuQurlJJSaq0fizHGTu74mVWxmxGRg/nNL4iIaxAi8t7TgoivcAfzyf05pcghpCXn3HsfT7/LGKO1dl/6KHWUUsSecO/DKCTPrbfWWq11n9d15ZxrrXuj7VZTSn+2ZMokNo1RgQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"RB Create Trigger",title:"RB Create Trigger",src:"/static/f9b3dfb1c4f3083d06993d016df0f6eb/3cbba/RB_Create_Trigger.png",srcSet:["/static/f9b3dfb1c4f3083d06993d016df0f6eb/7fc1e/RB_Create_Trigger.png 288w","/static/f9b3dfb1c4f3083d06993d016df0f6eb/a5df1/RB_Create_Trigger.png 576w","/static/f9b3dfb1c4f3083d06993d016df0f6eb/3cbba/RB_Create_Trigger.png 1152w","/static/f9b3dfb1c4f3083d06993d016df0f6eb/0b124/RB_Create_Trigger.png 1728w","/static/f9b3dfb1c4f3083d06993d016df0f6eb/ecc69/RB_Create_Trigger.png 1742w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"33.68055555555555%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAArUlEQVQY042QSw7DIAwFuf8dm1XaRe2aiGCwY0I/IUGRqkqd1cOyYB5uuAzjON4+XAHu8DdE5OIcVXXZKAc5Z1Vt2cxSSmZWTphZztmVUmqtz9/UWkXke0dVXQhhnmdmVlWVXUFEloPu1XI/ppQcIhKR9x4RAWCaJu89ACB+WhHRlrHltvPYCCG4s17rs65ru7g/2EXMjJnbF+yd107dUdUYOR/0vM0jM4vIW/sFLcyT1sejlggAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"RB Create Trigger assign RB",title:"RB Create Trigger assign RB",src:"/static/fc944ea061089719a5eaf2ed5d9130ed/3cbba/RB_Create_Trigger_assign_RB.png",srcSet:["/static/fc944ea061089719a5eaf2ed5d9130ed/7fc1e/RB_Create_Trigger_assign_RB.png 288w","/static/fc944ea061089719a5eaf2ed5d9130ed/a5df1/RB_Create_Trigger_assign_RB.png 576w","/static/fc944ea061089719a5eaf2ed5d9130ed/3cbba/RB_Create_Trigger_assign_RB.png 1152w","/static/fc944ea061089719a5eaf2ed5d9130ed/0b124/RB_Create_Trigger_assign_RB.png 1728w","/static/fc944ea061089719a5eaf2ed5d9130ed/5e5f9/RB_Create_Trigger_assign_RB.png 1757w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("hr",null),(0,i.kt)("h2",null,"11-6: Test runbook"),(0,i.kt)("p",null,"Connect to OCP Infra node."),(0,i.kt)("p",null,"Install & start httpd service on OCP Infra node."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"yum install httpd\nsystemctl start httpd\nsystemctl status httpd\n")),(0,i.kt)("p",null,"Login to OCP cluster"),(0,i.kt)("p",null,"Now stop httpd Service and insert some test alert for httpd Service. (In live monitoring this alert is automatically generated when Service goes down)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl stop httpd\nsystemctl status httpd\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"oc exec -it evtmanager-ncoprimary-0 -- /bin/bash -c '/opt/IBM/tivoli/netcool/omnibus/bin/nco_sql -server AGG_P -user root -pass $OMNIBUS_ROOT_PWD'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"insert into alerts.status (Identifier,Severity,Type,AlertGroup,Node,FirstOccurrence,LastOccurrence,Manager,Class,Summary) values('Demo API Server <HOSTNAME> 1',5,1,'Demo','<HOSTNAME>',getdate,getdate,'Tivoli EIF Probe',6601,'API Server on <HOST>:<PORT> is DOWN');\ngo\n")),(0,i.kt)("p",null,"Launch Alert Viewer and check alert with Summary = “API Server on HOST is DOWN”. There should be a runbook associated with this alert automatically."),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"38.888888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA+0lEQVQY013PTU7DMBAF4FybBdyENQgOwY5DpFGiVGLRliYZJ/b82ONB2Cq0/RaWvHjzZhoAUFUzyxdW5Fup0FvNfhwPh8PpdJzn2TkHAOfzeZomAFivEJGIMDMihUBVs9t1fd/3wzCO475o23Yo37Ztu677KrZtMzPvPTOr1l20iUntFiISUYwRAJxzzCwiiGhmVN7LXdoQx+v76vgQAjPP8wwAWxFCKHODavrLNyLprjmEgIg17JxDRO99bcbgLf9v2rDcN4eCmZdlqWEiYmbLdvxePClHo2iSfsP3zXVtEZmmaV1XEYkpZdWo9vyRH9/y03t+eMmvn/kH0PnMTtv/Kv4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"RB Test",title:"RB Test",src:"/static/887579d3d256393f5766cbbb86203e9a/3cbba/RB_Test.png",srcSet:["/static/887579d3d256393f5766cbbb86203e9a/7fc1e/RB_Test.png 288w","/static/887579d3d256393f5766cbbb86203e9a/a5df1/RB_Test.png 576w","/static/887579d3d256393f5766cbbb86203e9a/3cbba/RB_Test.png 1152w","/static/887579d3d256393f5766cbbb86203e9a/0b124/RB_Test.png 1728w","/static/887579d3d256393f5766cbbb86203e9a/70721/RB_Test.png 1843w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," Execute runbook > Start Runbook ")),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"26.38888888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAIAAADKYVtkAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAe0lEQVQY043OsQ7CMAwE0Pz/d/EFIHVDTCCxhCh17PjsJCgguhX16dazL6SUYoz4SyrqTBX1++N5Xq6ny2u5pVBKYWYza/tEm8LdnVlUMUYfA70h5Jy/n/0AZs7rKlLnEUUgImbWDwC2D5jLSylEpKpmNstEtB6wdfrPG86hIkxjJywOAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"RB Run runbook",title:"RB Run runbook",src:"/static/5ae9569855245184c9d21ccacd9332d5/3cbba/RB_Run_runbook.png",srcSet:["/static/5ae9569855245184c9d21ccacd9332d5/7fc1e/RB_Run_runbook.png 288w","/static/5ae9569855245184c9d21ccacd9332d5/a5df1/RB_Run_runbook.png 576w","/static/5ae9569855245184c9d21ccacd9332d5/3cbba/RB_Run_runbook.png 1152w","/static/5ae9569855245184c9d21ccacd9332d5/0b124/RB_Run_runbook.png 1728w","/static/5ae9569855245184c9d21ccacd9332d5/22681/RB_Run_runbook.png 1840w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.09722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABZ0lEQVQoz33RvWvCUBAA8DeFoBAy6OhoJ1Mr+H+4WMGxirjYoQkWnXR0VLq19P9oC4VCC9V+DIVKaaGDKFV8ica8BJP4PorRlBapv+FxHLy74w4YhmVZFqWUbIW9l1KKMWGM9fv9VqsFpjPk2DbbivqBgUzbJS5mEKqDwQC8f3xWq9V6vV6r1SqVyrGnXC4riiL7jmSlVDpsNBpQhepEt22H0mVB0O487kSjsVgsEomEQiFRFAVBCAQCPM9zPp7nAQCSJA2HX2N1qk1007Lm8zlod552JSmRSMTje+FwOBgMChtEUeQ4LplMjkajxcKFmq4bJiEEvHbfcrmDs9Pzy4vrZvMkn88Xi8VCoZDNZtPp9L4nk8mkUilZljVNo5SsZl6OrRsWMhHG+N9trTCGCUUIeZn1CgHUZhBCx7f466cJY5hS1zTR77rAQJbj2HQDIct79nq9u9vb+4fnmy6+eqFjbd159fkbC9aSLhYLes4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"RB exe result",title:"RB exe result",src:"/static/16793f2b1baf3084fdb31bf7cb886029/3cbba/RB_exe_result.png",srcSet:["/static/16793f2b1baf3084fdb31bf7cb886029/7fc1e/RB_exe_result.png 288w","/static/16793f2b1baf3084fdb31bf7cb886029/a5df1/RB_exe_result.png 576w","/static/16793f2b1baf3084fdb31bf7cb886029/3cbba/RB_exe_result.png 1152w","/static/16793f2b1baf3084fdb31bf7cb886029/0b124/RB_exe_result.png 1728w","/static/16793f2b1baf3084fdb31bf7cb886029/5e957/RB_exe_result.png 1822w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("p",null,"Connect to OCP Infra node."),(0,i.kt)("p",null,"Check Status of httpd  service on OCP Infra node."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl status httpd\n")),(0,i.kt)("p",null,"It should return running status , as runbook automatically started this service "),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"695px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.18055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABG0lEQVQoz42R3W7DIAxG8/5vV6nrFpSU/ABJg5JgMBAgSSe6m12ts44+WbKOLNmFn2ZsheUPN0jsBPYDdgN2IgAmdAldNDYn2ozJPM/z+aoCG6Y+KvVZr7dqvRJdNYYyc+9NwwzlOXPPo8ZkbDI26l+yGyZz73XV6brXdbfJNaELYLYFwqLCCmHVGWWC0hEwAoZFebnszhdukJryvI2yLM9qk8s2qyOmTEpHiLn5yRiPlM60HzGdx1Fgy4FQIA02wrIxWb/7bQ/x+Y8qLH8AobpqbT+6Qb4uN+3OHzG9l7dZ6arFfjQN1zTfRhMKJfVyfS87MS2XLyipulXqVgOh6kqWS+mEzPPzTzmsYChzQtp+zPAH5vewMMPbzd/2hgJQzvzHYgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"RB result output",title:"RB result output",src:"/static/d4302783c9988fe3e0b580b83e365e44/03efe/RB_result_output.png",srcSet:["/static/d4302783c9988fe3e0b580b83e365e44/7fc1e/RB_result_output.png 288w","/static/d4302783c9988fe3e0b580b83e365e44/a5df1/RB_result_output.png 576w","/static/d4302783c9988fe3e0b580b83e365e44/03efe/RB_result_output.png 695w"],sizes:"(max-width: 695px) 100vw, 695px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("hr",null),(0,i.kt)("p",null,"For more details on Runbooks, see the documentation link: ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/noi/1.6.5?topic=systems-managing-runbooks-automations"},"https://www.ibm.com/docs/en/noi/1.6.5?topic=systems-managing-runbooks-automations")),(0,i.kt)("p",null,"You have now completed this module and learned how Semi automated runbooks work in Event Manager. In next module we will cover fully automated runbook with event journal update."),(0,i.kt)("p",null,"Proceed to the next section."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-aiops-semi-automated-runbooks-index-mdx-7b9895bc6564a330ae4a.js.map