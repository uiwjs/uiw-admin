(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5622],{61532:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=61532,e.exports=n},13094:function(e,n,t){"use strict";t.d(n,{Z:function(){return E}});var r=t(33028),o=t(59740),i=t(9249),c=t(87371),l=t(45754),s=t(37687),a=t(56976),d=t(21237),u=t(60036),f=t(92080),p=t(14218),h=["dependencies","codePen"];function m(e){var n=e.dependencies,t=e.codePen,i=(0,o.Z)(e,h),c=(0,r.Z)({},i);return t&&(c.codeSandboxOption={files:{"sandbox.config.json":{content:'{\n        "template": "node",\n        "container": {\n          "startScript": "start",\n          "node": "14"\n        }\n      }'},"public/index.html":{content:'<div id="container"></div>'},"src/index.js":{content:c.code.replace("_mount_",'document.getElementById("container")')},".kktrc.js":{content:'import webpack from "webpack";\nimport lessModules from "@kkt/less-modules";\nexport default (conf, env, options) => {\nconf = lessModules(conf, env, options);\nreturn conf;\n};'},"package.json":{content:{name:"react-baidu-map-demo",description:"\u767e\u5ea6\u5730\u56fe React \u7ec4\u4ef6 - demo",dependencies:{react:"latest","react-dom":"latest","@uiw/react-baidu-map":"latest"},devDependencies:{"@kkt/less-modules":"7.1.1",kkt:"7.1.5",typescript:"4.3.5"},license:"MIT",scripts:{start:"kkt start",build:"kkt build",test:"kkt test --env=jsdom"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}}}}),(0,p.jsx)(f.Z,(0,r.Z)((0,r.Z)({},c),{},{dependencies:(0,r.Z)((0,r.Z)({},n),{},{React:a},a),style:{marginBottom:0}}))}var v="index_footer__Fp4ea",w=function(e){var n=(e||{}).editorUrl;return(0,p.jsxs)("div",{className:v,children:[n&&(0,p.jsx)("a",{title:"Editor Current Page",target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/uiw-admin/edit/master".concat(n),children:"\u7f16\u8f91\u5f53\u524d\u9875\u9762"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw-admin/issues/new",children:"\u63d0\u4ea4 Bug"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw-admin",children:"GitHub"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kktjs/kkt",children:"kkt"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw",children:"uiwjs"})]})},g="index_markdown__hcQCp",x=t(68079),k=t(96234),b=t(7896),j="esm_navbox__Zvl4q",Z="esm_active__jkS6S",_=t(60460),y=function(e){var n,t;for(n=0;n<e.length&&!e[n];n++);for(t=e.length-1;t>=0&&!e[t];t--);return e.slice(n,t+1)},T=function(e){var n=e.markdown,t=e.headingTopOffset,r=void 0===t?100:t,o=e.routerType,i=void 0===o?"bower":o,c=(0,a.useState)(0),l=(0,k.Z)(c,2),s=l[0],d=l[1],u=(0,a.useRef)(null),f=(0,a.useMemo)((function(){var e=n.replace(/^[^#]+\n/g,"").replace(/(?:[^\n#]+)#+\s([^#\n]+)\n*/g,"").replace(/^#\s[^#\n]*\n+/,"").replace(/```[^`\n]*\n+[^```]+```\n+/g,"").replace(/`([^`\n]+)`/g,"$1").replace(/\*\*?([^*\n]+)\*\*?/g,"$1").replace(/__?([^_\n]+)__?/g,"$1").trim(),t=/#+\s([^#\n]+)\n*/g,r=e.match(t);if(!r)return[];var o=r.map((function(e,n){return{index:n,level:e.match(/^#+/g)[0].length,text:e.replace(t,"$1"),listNo:0}})),i=0;o.forEach((function(e){e.level>i&&(i=e.level)}));for(var c=[],l=0;l<o.length;l++){for(var s=o[l],a=s.level;c.length&&c[c.length-1].level>a;)c.pop();if(0!==c.length){var d=c[c.length-1].arr.slice();d[a-1]+=1,c.push({level:a,arr:d}),s.listNo=y(d).join(".")}else{var u=new Array(i).fill(0);u[a-1]+=1,c.push({level:a,arr:u}),s.listNo=y(u).join(".")}}return o}),[n]);(0,a.useEffect)((function(){f&&(u.current&&clearTimeout(u.current),u.current=setTimeout((function(){g(),document.addEventListener("scroll",w,!1)}),500))}),[f]);var h=(0,a.useCallback)((function(){var e=[];return f&&f.forEach((function(n){var t=(0,x.Z)(document.querySelectorAll("h"+n.level)).find((function(e){return e.innerText.trim()===n.text.trim()}));t&&e.push({dataId:n.text,offsetTop:t.offsetTop,listNo:n.listNo})})),e}),[f]),m=function(e){var n=document.querySelector("#"+e);n&&"number"===typeof n.offsetTop&&function(e,n,t){if(void 0===t&&(t=0),e)if("function"===typeof e.scrollTo){var r={top:n,left:t};e.scrollTo(r)}else e===window?(document.documentElement.scrollTop=n,document.documentElement.scrollLeft=t):(e.scrollTop=n,e.scrollLeft=t)}(window,n.offsetTop-r,0)},v=function(e){var n=window.location.href,t="";if("bower"===i)t=""+window.location.pathname+window.location.search+"#"+e;else if(n.includes("?title=")){var r=n.indexOf("?title=");t=n.slice(0,r)+"?title="+e}else t=n+"?title="+e;window.history.replaceState({},"",t)},w=(0,_.Z)((function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,n=h().map((function(n){return(0,b.Z)({},n,{distanceToTop:Math.abs(e+r-n.offsetTop)})})),t=n.map((function(e){return e.distanceToTop})),o=Math.min.apply(Math,(0,x.Z)(t)),i=n.find((function(e){return e.distanceToTop===o}));i&&(v(i.dataId.toLowerCase().replace(" ","-")),d(i.listNo))}),200),g=function(){if(window.location.hash)if("bower"===i)m(window.location.hash.replace("#",""));else{var e=window.location.href.indexOf("?title=");if(e>-1){var n=window.location.href.slice(e+7);m(n)}}};return(0,p.jsx)("div",{className:j,children:f&&f.map((function(e,n){return(0,p.jsxs)("div",{style:{paddingLeft:5*e.level,paddingRight:5,lineHeight:"25px",cursor:"pointer"},className:s===e.listNo?Z:"",onClick:function(){var n=e.text.toLowerCase().replace(" ","-");m(n),v(n),d(e.listNo)},children:[e.listNo," ",e.text]},n)}))})},S=["inline","node"],N=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.forEach((function(n){"text"===n.type?t+=n.value:n.children&&Array.isArray(n.children)&&(t+=e(n.children))})),t},E=function(e){(0,l.Z)(t,e);var n=(0,s.Z)(t);function t(e){var r;return(0,i.Z)(this,t),(r=n.call(this,e)).editorUrl=void 0,r.getMdStr=void 0,r.dependencies=void 0,r.state={mdStr:""},r}return(0,c.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(n){e.setState({mdStr:n.default||n})}))}},{key:"render",value:function(){var e=this;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(u.X2,{children:[(0,p.jsx)(u.JX,{children:(0,p.jsx)(d.Z,{style:{padding:"15px 15px"},source:this.state.mdStr,className:g,components:{code:function(n){var t=n.inline,i=n.node,c=(0,o.Z)(n,S),l=c,s=l.noPreview,a=l.noScroll,d=l.bgWhite,u=l.noCode,f=l.codePen,h=l.codeSandboxOption;if(t)return(0,p.jsx)("code",(0,r.Z)({},c));var v={noPreview:s,noScroll:a,bgWhite:d,noCode:u,codePen:f,codeSandboxOption:h};return 0===Object.keys(v).filter((function(e){return void 0!==v[e]})).length?(0,p.jsx)("code",(0,r.Z)({},c)):(0,p.jsx)(m,{code:N(i.children),dependencies:e.dependencies,noPreview:s,noScroll:a,bgWhite:d,noCode:u,codePen:f,codeSandboxOption:h})}}})}),(0,p.jsx)(u.JX,{fixed:!0,style:{width:150},children:(0,p.jsx)(T,{markdown:this.state.mdStr,routerType:"hash"})})]}),(0,p.jsx)(w,{editorUrl:this.editorUrl})]})}}]),t}(a.Component)},88975:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var r=t(87371),o=t(9249),i=t(45754),c=t(37687),l=function(e){(0,i.Z)(l,e);var n=(0,c.Z)(l);function l(){var e;(0,o.Z)(this,l);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=n.call.apply(n,[this].concat(i))).editorUrl="/packages/exceptions/README.md",e.getMdStr=function(){return t.e(7514).then(t.bind(t,67514))},e}return(0,r.Z)(l)}(t(13094).Z)}}]);
//# sourceMappingURL=5622.73f8d7e5.chunk.js.map