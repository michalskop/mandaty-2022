import{_ as u,o as d,c as i,a as t,b as c,w as h,e as _,d as g,F as k,r as w,q as f,t as m,p as v,g as b,s as x}from"./entry-88112ab3.mjs";const D={},z={class:"navbar navbar-dark bg-primary"},I={class:"container-fluid"},M=t("a",{class:"navbar-brand h1",href:"/"},[_("Mand\xE1ty.cz"),t("small",{class:"d-none d-sm-inline"}," v\xE1\u0161 prst na tepu doby")],-1),S={class:"dropdown"},q=t("button",{class:"btn btn-primary dropdown-toggle",type:"button",id:"dropdownMenu","data-bs-toggle":"dropdown","aria-expanded":"false"}," ... ",-1),B={class:"dropdown-menu dropdown-menu-end","aria-labelledby":"dropdownMenu"},C={class:"dropdown-item",type:"button"},N=_("Prezidentsk\xE9 volby 2023"),V={class:"dropdown-item",type:"button"},T=_("Sn\u011Bmovna 2021-2025"),E={class:"dropdown-item",type:"button"},F=_("Archiv");function H(e,n){const s=g;return d(),i("div",null,[t("header",z,[t("div",I,[M,t("div",S,[q,t("ul",B,[t("li",null,[t("button",C,[c(s,{to:"/"},{default:h(()=>[N]),_:1})])]),t("li",null,[t("button",V,[c(s,{to:"/snemovna"},{default:h(()=>[T]),_:1})])]),t("li",null,[t("button",E,[c(s,{to:"/archiv"},{default:h(()=>[F]),_:1})])])])])])])])}var K=u(D,[["render",H]]);const L={data:function(){return{supporters:[],url_darujme:"https://projects.kohovolit.eu/api/?projectId=1200738"}},mounted(){var e=this;fetch(this.url_darujme).then(function(n){return n.json()}).then(function(n){e.supporters=n.reverse().filter(function(s){return s.last})})},methods:{diffDays:function(e,n){return Math.ceil(Math.abs(e-n)/(1e3*3600*24))},bgClass:function(e){var n=Date.parse(e),s=new Date,o=s.getTime();return this.diffDays(n,o)>540?"bg-light":this.diffDays(n,o)>270?"bg-secondary":"bg-warning"},textClass:function(e){var n=Date.parse(e),s=new Date,o=s.getTime();return this.diffDays(n,o)>540?"text-secondary":this.diffDays(n,o)>270?"text-light":"text-dark"}}},y=e=>(v("data-v-31a8a56c"),e=e(),b(),e),A={class:""},O={class:"container alert alert-success"},P=y(()=>t("h3",{class:"p-4"},[_("\u2764\uFE0F "),t("small",null,"Tento projekt vznikl jen d\xEDky podpo\u0159e:")],-1)),G={class:"d-flex flex-row flex-wrap justify-content-around"},J=y(()=>t("div",{class:"mt-5"},[t("a",{href:"https://www.darujme.cz/projekt/1200738",target:"_blank"},[t("h4",{class:"outlink"},"Bu\u010Fte jako oni, podpo\u0159te dal\u0161\xED rozvoj Mand\xE1ty.cz")])],-1));function Q(e,n,s,o,r,a){return d(),i("div",A,[t("div",O,[P,t("div",G,[(d(!0),i(k,null,w(e.supporters,(l,p)=>(d(),i("div",{key:p,class:f(["card p-2 m-2",a.bgClass(l.date)])},[t("h6",{class:f(a.textClass(l.date))},m(l.given_name)+" "+m(l.family_name),3)],2))),128))]),J])])}var R=u(L,[["render",Q],["__scopeId","data-v-31a8a56c"]]);const U={mounted(){+function(e,n,s,o,r,a){e.DarujmeObject=o,e[o]=e[o]||function(){(e[o].q=e[o].q||[]).push(arguments)},r=n.createElement(s),a=n.getElementsByTagName(s)[0],r.async=1,r.src="https://www.darujme.cz/assets/scripts/widget.js",a.parentNode.insertBefore(r,a)}(window,document,"script","Darujme"),Darujme(1,"e2esjcadvq7fynj6","render","https://www.darujme.cz/widget?token=e2esjcadvq7fynj6","100%")}},W=e=>(v("data-v-4a5580ae"),e=e(),b(),e),X={class:"container"},Y=W(()=>t("div",{"data-darujme-widget-token":"e2esjcadvq7fynj6"},"\xA0",-1)),Z=[Y];function tt(e,n,s,o,r,a){return d(),i("div",X,Z)}var et=u(U,[["render",tt],["__scopeId","data-v-4a5580ae"]]);const nt={},st={class:"navbar navbar-light bg-light"},ot=t("div",{class:"container d-flex justify-content-between"},[t("span",null,[_("Michal \u0160kop, KohoVolit.eu, autor "),t("a",{href:"https://volebnikalkulacka.cz",class:"m-1"},"Volebn\xED kalkula\u010Dky")]),t("span",null,[t("a",{href:"https://projects.kohovolit.eu"},"Dal\u0161\xED projekty autora"),_(" \u2022 Kontakt: "),t("a",{href:"http://kohovolit.eu/kontakt"},"KohoVolit.eu")])],-1),at=[ot];function rt(e,n){return d(),i("footer",st,at)}var ct=u(nt,[["render",rt]]);const dt={head(){return{script:[{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"}],link:[{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/united/bootstrap.min.css"}]}}},it=t("hr",null,null,-1);function _t(e,n,s,o,r,a){const l=K,p=R,j=et,$=ct;return d(),i("div",null,[c(l),x(e.$slots,"default"),it,c(p),c(j),c($)])}var ut=u(dt,[["render",_t]]);export{ut as default};
