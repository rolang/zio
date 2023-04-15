"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[91624],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),u=o,g=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88692:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={id:"index",title:"Introduction to ZIO JDBC",sidebar_label:"ZIO JDBC"},a=void 0,s={unversionedId:"zio-jdbc/index",id:"zio-jdbc/index",title:"Introduction to ZIO JDBC",description:"ZIO JDBC is a ZIO library for JDBC access, providing a small, unopinionated, and ergonomic foundation for directly interacting with JDBC.",source:"@site/docs/zio-jdbc/index.md",sourceDirName:"zio-jdbc",slug:"/zio-jdbc/",permalink:"/zio-jdbc/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-jdbc/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZIO JDBC",sidebar_label:"ZIO JDBC"},sidebar:"ecosystem-sidebar",previous:{title:"izmumi-reflect",permalink:"/izumi-reflect/"},next:{title:"ZIO JDBC",permalink:"/zio-jdbc/"}},c={},l=[],p={toc:l},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"ZIO JDBC")," is a ZIO library for JDBC access, providing a small, unopinionated, and ergonomic foundation for directly interacting with JDBC."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/zio/zio/wiki/Project-Stages"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Project%20Stage-Research-yellow.svg",alt:"Research"}))," ",(0,o.kt)("img",{parentName:"p",src:"https://github.com/zio/zio-jdbc/workflows/CI/badge.svg",alt:"CI Badge"})," ",(0,o.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/releases/dev/zio/zio-jdbc_2.13/"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/nexus/r/https/oss.sonatype.org/dev.zio/zio-jdbc_2.13.svg?label=Sonatype%20Release",alt:"Sonatype Releases"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/dev/zio/zio-jdbc_2.13/"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/dev.zio/zio-jdbc_2.13.svg?label=Sonatype%20Snapshot",alt:"Sonatype Snapshots"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/dev.zio/zio-jdbc-docs_2.13"},(0,o.kt)("img",{parentName:"a",src:"https://javadoc.io/badge2/dev.zio/zio-jdbc-docs_2.13/javadoc.svg",alt:"javadoc"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-jdbc"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/zio/zio-jdbc?style=social",alt:"ZIO JDBC"}))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Idiomatic ZIO 2.0 interface to JDBC"),(0,o.kt)("li",{parentName:"ul"},"Secure, with protection against SQL-injection"),(0,o.kt)("li",{parentName:"ul"},"Fully integrated with core libraries including ",(0,o.kt)("em",{parentName:"li"},"ZIO Schema"),", ",(0,o.kt)("em",{parentName:"li"},"ZIO Config"),", ",(0,o.kt)("em",{parentName:"li"},"ZIO Logging"))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"ZIO JDBC")," provides the following components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A SQL interpolator to prevent SQL injection attacks"),(0,o.kt)("li",{parentName:"ul"},"A connection pool powered by ZIO's async, resource-safe pool"),(0,o.kt)("li",{parentName:"ul"},"Lightweight decoding values from result sets "),(0,o.kt)("li",{parentName:"ul"},"Lightweight encoding values into SQL fragments for ",(0,o.kt)("inlineCode",{parentName:"li"},"INSERT")),(0,o.kt)("li",{parentName:"ul"},"Integration with ZIO Schema, ZIO Config, and ZIO Logging"),(0,o.kt)("li",{parentName:"ul"},"Built-in metrics")))}m.isMDXComponent=!0}}]);