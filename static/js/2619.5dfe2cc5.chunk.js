(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2619],{61532:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=61532,e.exports=n},13094:function(e,n,t){"use strict";t.d(n,{Z:function(){return M}});var r=t(33028),o=t(59740),i=t(9249),a=t(87371),l=t(45754),c=t(37687),s=t(56976),u=t(21237),d=t(32463),f=t(1834),h=t(14218),p=["dependencies","codePen"];function m(e){var n=e.dependencies,t=e.codePen,i=(0,o.Z)(e,p),a=(0,r.Z)({},i);return t&&(a.codeSandboxOption={files:{"sandbox.config.json":{content:'{\n        "template": "node",\n        "container": {\n          "startScript": "start",\n          "node": "14"\n        }\n      }'},"public/index.html":{content:'<div id="container"></div>'},"src/index.js":{content:a.code.replace("_mount_",'document.getElementById("container")')},".kktrc.js":{content:'import webpack from "webpack";\nimport lessModules from "@kkt/less-modules";\nexport default (conf, env, options) => {\nconf = lessModules(conf, env, options);\nreturn conf;\n};'},"package.json":{content:{name:"react-baidu-map-demo",description:"\u767e\u5ea6\u5730\u56fe React \u7ec4\u4ef6 - demo",dependencies:{react:"latest","react-dom":"latest","@uiw/react-baidu-map":"latest"},devDependencies:{"@kkt/less-modules":"7.1.1",kkt:"7.1.5",typescript:"4.3.5"},license:"MIT",scripts:{start:"kkt start",build:"kkt build",test:"kkt test --env=jsdom"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}}}}),(0,h.jsx)(f.Z,(0,r.Z)((0,r.Z)({},a),{},{dependencies:(0,r.Z)((0,r.Z)({},n),{},{React:s},s),style:{marginBottom:0}}))}var v="index_footer__Fp4ea",x=function(e){var n=(e||{}).editorUrl;return(0,h.jsxs)("div",{className:v,children:[n&&(0,h.jsx)("a",{title:"Editor Current Page",target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/uiw-admin/edit/master".concat(n),children:"\u7f16\u8f91\u5f53\u524d\u9875\u9762"}),(0,h.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw-admin/issues/new",children:"\u63d0\u4ea4 Bug"}),(0,h.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw-admin",children:"GitHub"}),(0,h.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kktjs/kkt",children:"kkt"}),(0,h.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw",children:"uiwjs"})]})},g="index_markdown__hcQCp",j=t(68079),y=t(96234),b=t(7896),w="esm_navbox__Zvl4q",k="esm_active__jkS6S",S=t(60460),Z=function(e){var n,t;for(n=0;n<e.length&&!e[n];n++);for(t=e.length-1;t>=0&&!e[t];t--);return e.slice(n,t+1)},C=function(e){var n=e.markdown,t=e.headingTopOffset,r=void 0===t?100:t,o=e.routerType,i=void 0===o?"bower":o,a=(0,s.useState)(0),l=(0,y.Z)(a,2),c=l[0],u=l[1],d=(0,s.useRef)(null),f=(0,s.useMemo)((function(){var e=n.replace(/^[^#]+\n/g,"").replace(/(?:[^\n#]+)#+\s([^#\n]+)\n*/g,"").replace(/^#\s[^#\n]*\n+/,"").replace(/```[^`\n]*\n+[^```]+```\n+/g,"").replace(/`([^`\n]+)`/g,"$1").replace(/\*\*?([^*\n]+)\*\*?/g,"$1").replace(/__?([^_\n]+)__?/g,"$1").trim(),t=/#+\s([^#\n]+)\n*/g,r=e.match(t);if(!r)return[];var o=r.map((function(e,n){return{index:n,level:e.match(/^#+/g)[0].length,text:e.replace(t,"$1"),listNo:0}})),i=0;o.forEach((function(e){e.level>i&&(i=e.level)}));for(var a=[],l=0;l<o.length;l++){for(var c=o[l],s=c.level;a.length&&a[a.length-1].level>s;)a.pop();if(0!==a.length){var u=a[a.length-1].arr.slice();u[s-1]+=1,a.push({level:s,arr:u}),c.listNo=Z(u).join(".")}else{var d=new Array(i).fill(0);d[s-1]+=1,a.push({level:s,arr:d}),c.listNo=Z(d).join(".")}}return o}),[n]);(0,s.useEffect)((function(){f&&(d.current&&clearTimeout(d.current),d.current=setTimeout((function(){g(),document.addEventListener("scroll",x,!1)}),500))}),[f]);var p=(0,s.useCallback)((function(){var e=[];return f&&f.forEach((function(n){var t=(0,j.Z)(document.querySelectorAll("h"+n.level)).find((function(e){return e.innerText.trim()===n.text.trim()}));t&&e.push({dataId:n.text,offsetTop:t.offsetTop,listNo:n.listNo})})),e}),[f]),m=function(e){var n=(""+decodeURIComponent(e)).replace(/\./g,""),t=document.querySelector("#"+n);t&&"number"===typeof t.offsetTop&&function(e,n,t){if(void 0===t&&(t=0),e)if("function"===typeof e.scrollTo){var r={top:n,left:t};e.scrollTo(r)}else e===window?(document.documentElement.scrollTop=n,document.documentElement.scrollLeft=t):(e.scrollTop=n,e.scrollLeft=t)}(window,t.offsetTop-r,0)},v=function(e){var n=window.location.href,t="";if("bower"===i)t=""+window.location.pathname+window.location.search+"#"+e;else if(n.includes("?title=")){var r=n.indexOf("?title=");t=n.slice(0,r)+"?title="+e}else t=n+"?title="+e;window.history.replaceState({},"",t)},x=(0,S.Z)((function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,n=p().map((function(n){return(0,b.Z)({},n,{distanceToTop:Math.abs(e+r-n.offsetTop)})})),t=n.map((function(e){return e.distanceToTop})),o=Math.min.apply(Math,(0,j.Z)(t)),i=n.find((function(e){return e.distanceToTop===o}));i&&(v(i.dataId.toLowerCase().replace(" ","-")),u(i.listNo))}),200),g=function(){if(window.location.hash)if("bower"===i)m(window.location.hash.replace("#",""));else{var e=window.location.href.indexOf("?title=");if(e>-1){var n=window.location.href.slice(e+7);m(n)}}};return(0,h.jsx)("div",{className:w,children:f&&f.map((function(e,n){return(0,h.jsxs)("div",{style:{paddingLeft:5*e.level,paddingRight:5,lineHeight:"25px",cursor:"pointer"},className:c===e.listNo?k:"",onClick:function(){var n=e.text.toLowerCase().replace(" ","-");m(n),v(n),u(e.listNo)},children:[e.listNo," ",e.text]},n)}))})},E=["inline","node"],F=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.forEach((function(n){"text"===n.type?t+=n.value:n.children&&Array.isArray(n.children)&&(t+=e(n.children))})),t},M=function(e){(0,l.Z)(t,e);var n=(0,c.Z)(t);function t(e){var r;return(0,i.Z)(this,t),(r=n.call(this,e)).editorUrl=void 0,r.getMdStr=void 0,r.dependencies=void 0,r.state={mdStr:""},r}return(0,a.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(n){e.setState({mdStr:n.default||n})}))}},{key:"render",value:function(){var e=this;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(d.X2,{children:[(0,h.jsx)(d.JX,{children:(0,h.jsx)(u.Z,{style:{padding:"15px 15px"},source:this.state.mdStr,className:g,components:{code:function(n){var t=n.inline,i=n.node,a=(0,o.Z)(n,E),l=a,c=l.noPreview,s=l.noScroll,u=l.bgWhite,d=l.noCode,f=l.codePen,p=l.codeSandboxOption;if(t)return(0,h.jsx)("code",(0,r.Z)({},a));var v={noPreview:c,noScroll:s,bgWhite:u,noCode:d,codePen:f,codeSandboxOption:p};return 0===Object.keys(v).filter((function(e){return void 0!==v[e]})).length?(0,h.jsx)("code",(0,r.Z)({},a)):(0,h.jsx)(m,{code:F(i.children),dependencies:e.dependencies,noPreview:c,noScroll:s,bgWhite:u,noCode:d,codePen:f,codeSandboxOption:p})}}})}),(0,h.jsx)(d.JX,{fixed:!0,style:{width:150},children:(0,h.jsx)(C,{markdown:this.state.mdStr,routerType:"hash"})})]}),(0,h.jsx)(x,{editorUrl:this.editorUrl})]})}}]),t}(s.Component)},92453:function(e,n,t){"use strict";t.d(n,{Z:function(){return J},J:function(){return B}});var r=t(96234),o=t(56976),i=t(44103),a=t(41546),l=t(43763),c=t.n(l),s=t(35553),u=t(51462),d=o.createContext({headerLayout:"top",headerBackground:"#fff",headerFontColor:"#000"}),f=function(){return o.useContext(d)},h=t(14218),p=function(e){void 0===e&&(e={});var n=f(),t=n.headerFontColor,r=n.headerLayout,i=(0,o.useMemo)((function(){return e.logo&&(0,h.jsx)("img",{src:e.logo,alt:e.projectName||"logo"})}),[e.logo]),a=(0,o.useMemo)((function(){return e.projectName&&(0,h.jsx)("h1",{style:"top"===r?{color:t}:{},children:e.projectName})}),[e.projectName,t]);return(0,o.useMemo)((function(){return(0,h.jsx)("div",{className:"default"===r?"uiw-admin-global-title":"uiw-admin-global-title-top",children:(0,h.jsxs)(u.rU,{to:"/",style:e.collapsed?{justifyContent:"center"}:{},children:[i,!e.collapsed&&a]})})}),[e.collapsed])},m=t(7896),v=t(5596),x=t(90800),g=t(9249),j=t(87371),y=t(31461),b=["element","component","children","path"];function w(e){void 0===e&&(e=[]);var n=[];return e.forEach((function(e){var t=(0,m.Z)({},e);if(e.routes){var r=w(t.routes);t.routes=r}if(e.path&&"*"!==e.path){var o=t.path,i=(0,y.Z)(t,b);n.push((0,m.Z)({},i,{path:o,key:o}))}})),n}var k=function e(n,t){return void 0===n&&(n=[]),void 0===t&&(t=[]),n.forEach((function(n){n.routes?e(n.routes,t):t.push(n)})),t},S=function(){function e(n){(0,g.Z)(this,e),this.breadcrumb=new Map([]),this.flat=[],this.init(n)}return(0,j.Z)(e,[{key:"init",value:function(e,n){var t=this;e.forEach((function(e){var r=(n||[]).concat([e]);e.routes&&t.init(e.routes,r),e.path&&"*"!==e.path&&t.breadcrumb.set(e.path,r),t.flat.push(e)}))}}]),e}(),Z=t(32463),C=t(56247),E=t.n(C),F=function(e,n){if(!Reflect.has(e,"navigate")||!e.navigate)return!0;if("function"!==typeof e.navigate){var t=new Function("return "+e.navigate)();"function"===typeof t&&t(n)}else e.navigate(n)};function M(e,n,t,r,i){return void 0===e&&(e=[]),e.map((function(e,a){var l={key:a,icon:e.icon},s=!0;return Reflect.has(e,"isAuth")&&(s=Reflect.get(e,"isAuth")),e.index||e.hideInMenu||!s||"*"===e.path?(0,h.jsx)(o.Fragment,{},a):(i&&(l.className=c()({"uiw-admin-global-sider-menu-collapsed":n})),(0,x.LX)({path:e.path},t)&&(l.active=!0),e.routes?(n&&(l.overlayProps={isOutside:!0,usePortal:!0}),e.routes.find((function(e){return e.path===t}))&&(l.overlayProps={isOpen:!0}),(0,h.jsx)(v.ZP.SubMenu,(0,m.Z)({},l,{text:e.name||"-",collapse:n,children:M(e.routes,n,t,r)}))):(0,h.jsx)(v.ZP.Item,(0,m.Z)({},l,{onClick:function(){F(e,r)&&r(e.path,{replace:!0})},text:e.name||"-"})))}))}var N=function(e){var n=(e||{}).routes,t=void 0===n?[]:n,i=(0,x.s0)(),a=o.useMemo((function(){return k(t)}),[t]),l=o.useMemo((function(){return a.filter((function(e){return e&&"name"in e&&!e.hideInMenu&&!e.index&&"*"!==e.path})).map((function(e){var n=E()(e.name||"",{style:E().STYLE_FIRST_LETTER}),t=E()(e.name||"",{style:E().STYLE_NORMAL}),r="",o="";return Array.isArray(t)&&(o=t.join("")),Array.isArray(n)&&(r=n.join("")),{label:e.name,value:e.path,py:o,pyInitials:r}}))}),[a]),c=o.useState(l),s=(0,r.Z)(c,2),u=s[0],d=s[1];return(0,h.jsx)("div",{style:{marginBottom:10,padding:"0px 10px"},children:(0,h.jsx)(Z.ul,{placeholder:"\u8bf7\u8f93\u5165",mode:"single",labelInValue:!0,showSearch:!0,option:u,onSearch:function(e){if(e){var n=l.filter((function(n){var t=new RegExp(""+e);return!!(t.test(n.label)||t.test(n.py)||t.test(n.pyInitials))}));d(n)}else d(l)},onChange:function(e){if(Array.isArray(e)){var n=(0,r.Z)(e,1)[0];if(n&&"object"===typeof n&&n.value){var t=a.find((function(e){return e.path===n.value}));if(!F(t,i))return;i(t.path,{replace:!0})}}}})})},T=function(e){void 0===e&&(e={});var n=e,t=n.routes,r=void 0===t?[]:t,i=n.collapsed,a=(0,x.TH)(),l=(0,x.s0)(),c=a.pathname,s=SEARCH_MENU&&(0,h.jsx)(N,{routes:r});return(0,h.jsxs)(o.Fragment,{children:[s,(0,h.jsx)(v.ZP,{theme:"dark",inlineCollapsed:!!i,style:{padding:"0 12px"},children:M(r,!!i,c,l,!0)})]})},R=function(e){var n=e.routeMap,t=(0,x.TH)(),r=o.useMemo((function(){var e,r=n.breadcrumb.get(t.pathname);return r||(n.breadcrumb.forEach((function(n,r){(0,x.LX)(r,t.pathname)&&(e=r)})),e&&n.breadcrumb.get(e)||[])}),[t.pathname]);return(0,h.jsx)(Z.aG,{children:null==r?void 0:r.map((function(e,n){return(0,h.jsx)(Z.aG.Item,{children:e.name},n)}))})},_=function(e){return(0,h.jsx)("div",{style:{height:"100%",overflow:"auto"},children:e.children})},I=t(68079),L=["title","icon","onClick","divider","render"];function P(e){var n=e.menus,t=void 0===n?[]:n,r=e.profile,i=void 0===r?{}:r,a=e.onReloadAuth,l=e.layouts,c=e.hideReloadButton,s=e.hideLogoutButton,u=e.hideUserInfo,d=l||{},f=d.headerRightvisible,p=d.updateStore,v=(0,x.s0)(),g=[].concat((0,I.Z)(u?[]:[{title:(0,h.jsxs)("span",{style:{fontSize:15},children:["\u8d26\u53f7 ",(null==i?void 0:i.userName)||"admin"]}),icon:"user"},{divider:!0}]),(0,I.Z)(t),[{title:"\u5237\u65b0\u6743\u9650",icon:"reload",onClick:function(){return a()},style:{display:c?"none":""}},{title:"\u9000\u51fa\u767b\u5f55",icon:"logout",style:{display:s?"none":""},onClick:function(){v("/login",{replace:!0}),sessionStorage.removeItem("token"),sessionStorage.removeItem("auth"),localStorage.removeItem("token"),localStorage.removeItem("auth")}}]),j=(0,h.jsx)("div",{style:{width:150},children:(0,h.jsx)(Z.v2,{children:g.map((function(e,n){var t=e.title,r=e.icon,i=e.onClick,a=e.divider,l=e.render,c=(0,y.Z)(e,L);return a?(0,h.jsx)(Z.v2.Divider,{},n):l?(0,h.jsx)(o.Fragment,{children:l},n):(0,h.jsx)(Z.v2.Item,(0,m.Z)({text:t,icon:r},c,{onClick:i&&i}),n)}))})});return(0,h.jsx)("div",{className:"uiw-global-header-menu",children:(0,h.jsx)("span",{className:"uiw-global-header-menu",children:(0,h.jsx)(Z.J2,{isOpen:!!f,onVisibleChange:function(e){return null==p?void 0:p({headerRightvisible:e})},trigger:"click",placement:"bottomRight",content:j,children:null!=i&&i.avatar?(0,h.jsx)("img",{src:i.avatar}):(0,h.jsx)(Z.qE,{icon:"user",size:"default"})})})})}function O(){var e=document;return e.mozFullScreen||e.webkitIsFullScreen||e.webkitFullScreen||e.msFullScreen}var A=function(){if(!function(){var e=document;return e.fullscreenEnabled||e.mozFullScreenEnabled||e.webkitFullscreenEnabled||e.msFullscreenEnabled}())return null;var e=(0,o.useState)(!1),n=(0,r.Z)(e,2),t=n[0],i=n[1];if(t){var a=document.documentElement;a.requestFullscreen?a.requestFullscreen():a.webkitRequestFullScreen?a.webkitRequestFullScreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.msRequestFullscreen&&a.msRequestFullscreen()}else if(O()){var l=document;l.exitFullscreen?l.exitFullscreen():l.webkitCancelFullScreen?l.webkitCancelFullScreen():l.mozCancelFullScreen?l.mozCancelFullScreen():l.msExitFullscreen&&l.msExitFullscreen()}var c=f().headerFontColor,s=function(){!O()&&t&&i(!1)};return(0,o.useEffect)((function(){return window.addEventListener("resize",s),function(){window.removeEventListener("resize",s,!1)}})),(0,o.useMemo)((function(){return(0,h.jsx)("span",{onClick:function(){return i(!t)},style:{fontSize:18,marginRight:15,cursor:"pointer"},children:(0,h.jsx)(Z.JO,{type:t?"shrink":"arrows-alt",color:c})})}),[t])},B=function(){var e=(0,o.useState)({headerRightvisible:!1}),n=(0,r.Z)(e,2),t=n[0],i=n[1],a=function(e){i((0,m.Z)({},t,e))};return(0,m.Z)({closeMenu:function(){return a({headerRightvisible:!1})},updateStore:a},t)},U=i.ZP.Header,q=i.ZP.Sider,z=i.ZP.Content;var J=function(e){var n=e||{},t=n.routes,l=void 0===t?[]:t,u=n.projectName,f=void 0===u?"UIW Admin":u,m=n.profile,v=void 0===m?{}:m,x=n.menus,g=void 0===x?[]:x,j=n.onReloadAuth,y=n.layouts,b=n.headerLayout,k=void 0===b?"default":b,C=n.headerBackground,E=void 0===C?"#fff":C,F=n.headerFontColor,M=void 0===F?"#000":F,N=n.menuHide,I=n.isDefaultContentStyle,L=void 0===I||I,O=n.hideReloadButton,B=n.hideLogoutButton,J=n.hideUserInfo,H=(0,o.useState)(!1),D=(0,r.Z)(H,2),X=D[0],W=D[1],$=w(l),G=o.useMemo((function(){return(0,h.jsx)(T,{collapsed:X,routes:$})}),[JSON.stringify($),X]),Q=o.useMemo((function(){return new S($)}),[JSON.stringify($)]),V=(0,o.useMemo)((function(){return(0,h.jsxs)("div",{style:{display:"flex",justifyItems:"center",alignItems:"center"},children:[null==v?void 0:v.menuLeft,(0,h.jsx)(A,{}),(0,h.jsx)(P,{onReloadAuth:j,profile:v,menus:g,layouts:y,hideReloadButton:O,hideLogoutButton:B,hideUserInfo:J})]})}),[v,g,JSON.stringify(y)]),Y=(0,h.jsxs)(U,{className:"uiw-admin-global-header",style:{background:E,color:M},children:[(0,h.jsxs)("div",{style:{display:"flex"},children:["top"===k&&(0,h.jsx)("div",{style:{minWidth:200},children:(0,h.jsx)(p,{collapsed:!1,projectName:f,logo:e.logo})}),!N&&(0,h.jsxs)("div",{children:[(0,h.jsx)(a.Z,{basic:!0,icon:(0,h.jsx)(Z.JO,{type:X?"menu-unfold":"menu-fold",color:M}),style:{fontSize:12,marginRight:20},onClick:function(){return W(!X)}}),(0,h.jsx)(R,{routeMap:Q})]})]}),V]});return(0,h.jsx)(o.Fragment,{children:(0,h.jsxs)(d.Provider,{value:{headerLayout:k,headerBackground:E,headerFontColor:M},children:[(0,h.jsx)(s.Z,{title:f||""}),(0,h.jsxs)(i.ZP,{style:{height:"100%"},children:["top"===k&&Y,(0,h.jsxs)(i.ZP,{children:[!N&&(0,h.jsxs)(q,{collapsed:X,className:c()("uiw-admin-global-sider-menu",{}),children:["default"===k?(0,h.jsx)(p,{collapsed:X,projectName:f,logo:e.logo}):(0,h.jsx)("div",{style:{marginTop:10}}),G]}),(0,h.jsxs)(i.ZP,{children:["default"===k&&Y,L?(0,h.jsx)(z,{className:"uiw-admin-global-content",children:(0,h.jsx)(_,{children:e.children})}):e.children]})]})]})]})})}},35553:function(e,n,t){"use strict";var r=t(7896),o=t(56976),i=t(14218);n.Z=function(e){return void 0===e&&(e={}),(0,o.useEffect)((function(){document.title=e.title||""}),[e.title]),(0,i.jsx)(o.Fragment,{children:o.Children.toArray(e.children).map((function(e){return o.isValidElement(e)?o.cloneElement(e,(0,r.Z)({},e.props||{})):null}))})}},90640:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r=t(68079),o=t(96234),i=t(7896),a=t(56976),l=t(32463),c=t(90800),s=function e(n,t){return void 0===n&&(n=[]),void 0===t&&(t=[]),n.forEach((function(n){n.routes?e(n.routes,t):t.push(n)})),t},u=function(e,n){return e.find((function(e){return"/"===n.pathname&&e.index&&e.redirect?e.index:!!(n&&n.pathname&&e.path&&"/"!==n.pathname)&&n.pathname===e.path}))},d=function(e,n){return e.find((function(e){return"/"===n.pathname&&e.index&&e.redirect?e.index:!!(n&&n.pathname&&e.path&&"/"!==n.pathname)&&(0,c.LX)({path:e.path},n.pathname)}))},f=t(14218),h=function(e){var n=e.routes,t=(0,c.TH)(),h=(0,c.s0)(),p=a.useState([]),m=(0,o.Z)(p,2),v=m[0],x=m[1],g=function(e,n){var t=u(e,n);if(t)return{current:t,isMatch:!1};var r=d(e,n);return{current:r,isMatch:!!r}}(a.useMemo((function(){return s(n)}),[n]),t);a.useEffect((function(){if(g.current)if(g.current&&g.current.redirect)h(g.current.redirect);else{var e=function(e,n,t){return t?d(e,n):u(e,n)}(v,t,g.isMatch);e?e&&g.isMatch&&(e.location.pathname!==t.pathname||e.location.search!==t.search)&&x((function(n){return n.map((function(n){return e.location.pathname===n.location.pathname?(0,i.Z)({},n,{location:t}):n}))})):x((function(e){return e.concat([(0,i.Z)({},g.current,{isMatch:g.isMatch,location:t})]).filter((function(e){return!!e}))}))}else h("/404")}),[t.pathname]),a.useMemo((function(){var e=(0,r.Z)(v).map((function(e){return e.location.pathname===t.pathname&&t.search!==e.location.search&&(e.location=t),e}));x((function(){return(0,r.Z)(e)}))}),[t.search]);return(0,f.jsxs)("div",{className:"uiw-layout-tabs-warp",children:[(0,f.jsx)(l.mQ,{type:"card",activeKey:t.pathname,onTabClick:function(e){var n=v.find((function(n){return n.location.pathname===e}));n&&t.pathname!==e&&h(""+e+n.location.search,{state:n.location.state,replace:!0})},children:v.map((function(e,n){return(0,f.jsx)(l.mQ.Pane,{label:(0,f.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.name,e.location.pathname,v.length>1?(0,f.jsx)(l.JO,{type:"close",tagName:"span",style:{marginLeft:10},onClick:function(r){return function(e,n,r){e.stopPropagation(),e.preventDefault();var o=v.length-1,i=(0,c.LX)({path:r.path},t.pathname);if(i){var a,l=!1;o>n&&i?(a=v.find((function(e,t){return t===n+1})),l=!0):o===n&&n>0&&i?(a=v.find((function(e,t){return t===n-1})),l=!0):i&&(l=!0),l&&x((function(e){return e.filter((function(e,t){return t!==n}))})),a&&h(""+a.path+a.location.search,{state:a.location.state,replace:!0})}else x((function(e){return e.filter((function(e,t){return t!==n}))}))}(r,n,e)}}):(0,f.jsx)(a.Fragment,{})]})},e.location.pathname)}))}),(0,f.jsx)("div",{className:"uiw-layout-tabs-body",children:v.map((function(e){var n=e.location.pathname===t.pathname;return(0,f.jsx)("div",{style:{display:n?"block":"none",overflow:"auto"},children:e.element},e.location.pathname)}))})]})}}}]);
//# sourceMappingURL=2619.5dfe2cc5.chunk.js.map