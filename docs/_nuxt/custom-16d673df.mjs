import{_ as d,o as c,c as _,a,d as u,F as k,r as y,n as p,t as h,p as f,g as m,b as l,k as g}from"./entry-1654123e.mjs";const $={},b={class:"navbar navbar-dark bg-primary"},x=a("div",{class:"container-fluid"},[a("a",{class:"navbar-brand h1",href:"/"},[u("Mand\xE1ty.cz"),a("small",{class:"d-none d-sm-inline"}," v\xE1\u0161 prst na tepu doby")])],-1),w=[x];function D(e,t){return c(),_("header",b,w)}var z=d($,[["render",D]]);const I={data:function(){return{supporters:[],url_darujme:"https://projects.kohovolit.eu/api/?projectId=1200738"}},mounted(){var e=this;fetch(this.url_darujme).then(function(t){return t.json()}).then(function(t){e.supporters=t.reverse().filter(function(n){return n.last})})},methods:{diffDays:function(e,t){return Math.ceil(Math.abs(e-t)/(1e3*3600*24))},bgClass:function(e){var t=Date.parse(e),n=new Date,s=n.getTime();return this.diffDays(t,s)>540?"bg-light":this.diffDays(t,s)>270?"bg-secondary":"bg-warning"},textClass:function(e){var t=Date.parse(e),n=new Date,s=n.getTime();return this.diffDays(t,s)>540?"text-secondary":this.diffDays(t,s)>270?"text-light":"text-dark"}}},v=e=>(f("data-v-31a8a56c"),e=e(),m(),e),B={class:""},S={class:"container alert alert-success"},V=v(()=>a("h3",{class:"p-4"},[u("\u2764\uFE0F "),a("small",null,"Tento projekt vznikl jen d\xEDky podpo\u0159e:")],-1)),q={class:"d-flex flex-row flex-wrap justify-content-around"},C=v(()=>a("div",{class:"mt-5"},[a("a",{href:"https://www.darujme.cz/projekt/1200738",target:"_blank"},[a("h4",{class:"outlink"},"Bu\u010Fte jako oni, podpo\u0159te dal\u0161\xED rozvoj Mand\xE1ty.cz")])],-1));function M(e,t,n,s,r,o){return c(),_("div",B,[a("div",S,[V,a("div",q,[(c(!0),_(k,null,y(e.supporters,(i,j)=>(c(),_("div",{key:j,class:p(["card p-2 m-2",o.bgClass(i.date)])},[a("h6",{class:p(o.textClass(i.date))},h(i.given_name)+" "+h(i.family_name),3)],2))),128))]),C])])}var N=d(I,[["render",M],["__scopeId","data-v-31a8a56c"]]);const T={mounted(){+function(e,t,n,s,r,o){e.DarujmeObject=s,e[s]=e[s]||function(){(e[s].q=e[s].q||[]).push(arguments)},r=t.createElement(n),o=t.getElementsByTagName(n)[0],r.async=1,r.src="https://www.darujme.cz/assets/scripts/widget.js",o.parentNode.insertBefore(r,o)}(window,document,"script","Darujme"),Darujme(1,"e2esjcadvq7fynj6","render","https://www.darujme.cz/widget?token=e2esjcadvq7fynj6","100%")}},E=e=>(f("data-v-4a5580ae"),e=e(),m(),e),F={class:"container"},H=E(()=>a("div",{"data-darujme-widget-token":"e2esjcadvq7fynj6"},"\xA0",-1)),K=[H];function L(e,t,n,s,r,o){return c(),_("div",F,K)}var O=d(T,[["render",L],["__scopeId","data-v-4a5580ae"]]);const A={},G={class:"navbar navbar-light bg-light"},J=a("div",{class:"container d-flex justify-content-between"},[a("span",null,[u("Michal \u0160kop, KohoVolit.eu, autor "),a("a",{href:"https://volebnikalkulacka.cz",class:"m-1"},"Volebn\xED kalkula\u010Dky")]),a("span",null,[a("a",{href:"https://projects.kohovolit.eu"},"Dal\u0161\xED projekty autora"),u(" \u2022 Kontakt: "),a("a",{href:"http://kohovolit.eu/kontakt"},"KohoVolit.eu")])],-1),P=[J];function Q(e,t){return c(),_("footer",G,P)}var R=d(A,[["render",Q]]);const U={},W=a("hr",null,null,-1);function X(e,t){const n=z,s=N,r=O,o=R;return c(),_("div",null,[l(n),g(e.$slots,"default"),W,l(s),l(r),l(o)])}var Z=d(U,[["render",X]]);export{Z as default};
