import{_ as u,o as c,c as d,a as e,b as _,w as h,e as l,d as g,F as k,r as w,n as f,t as m,p as v,g as b,j as x}from"./entry-17df4ddc.mjs";const D={},z={class:"navbar navbar-dark bg-primary"},I={class:"container-fluid"},M=e("a",{class:"navbar-brand h1",href:"/"},[l("Mand\xE1ty.cz"),e("small",{class:"d-none d-sm-inline"}," v\xE1\u0161 prst na tepu doby")],-1),B={class:"dropdown"},C=e("button",{class:"btn btn-primary dropdown-toggle",type:"button",id:"dropdownMenu","data-bs-toggle":"dropdown","aria-expanded":"false"}," ... ",-1),N={class:"dropdown-menu dropdown-menu-end","aria-labelledby":"dropdownMenu"},S={class:"dropdown-item",type:"button"},V=l("Prezidentsk\xE9 volby 2023"),q={class:"dropdown-item",type:"button"},T=l("Archiv");function E(t,n){const s=g;return c(),d("div",null,[e("header",z,[e("div",I,[M,e("div",B,[C,e("ul",N,[e("li",null,[e("button",S,[_(s,{to:"/"},{default:h(()=>[V]),_:1})])]),e("li",null,[e("button",q,[_(s,{to:"/archiv"},{default:h(()=>[T]),_:1})])])])])])])])}var F=u(D,[["render",E]]);const H={data:function(){return{supporters:[],url_darujme:"https://projects.kohovolit.eu/api/?projectId=1200738"}},mounted(){var t=this;fetch(this.url_darujme).then(function(n){return n.json()}).then(function(n){t.supporters=n.reverse().filter(function(s){return s.last})})},methods:{diffDays:function(t,n){return Math.ceil(Math.abs(t-n)/(1e3*3600*24))},bgClass:function(t){var n=Date.parse(t),s=new Date,o=s.getTime();return this.diffDays(n,o)>540?"bg-light":this.diffDays(n,o)>270?"bg-secondary":"bg-warning"},textClass:function(t){var n=Date.parse(t),s=new Date,o=s.getTime();return this.diffDays(n,o)>540?"text-secondary":this.diffDays(n,o)>270?"text-light":"text-dark"}}},j=t=>(v("data-v-31a8a56c"),t=t(),b(),t),K={class:""},L={class:"container alert alert-success"},A=j(()=>e("h3",{class:"p-4"},[l("\u2764\uFE0F "),e("small",null,"Tento projekt vznikl jen d\xEDky podpo\u0159e:")],-1)),O={class:"d-flex flex-row flex-wrap justify-content-around"},P=j(()=>e("div",{class:"mt-5"},[e("a",{href:"https://www.darujme.cz/projekt/1200738",target:"_blank"},[e("h4",{class:"outlink"},"Bu\u010Fte jako oni, podpo\u0159te dal\u0161\xED rozvoj Mand\xE1ty.cz")])],-1));function G(t,n,s,o,r,a){return c(),d("div",K,[e("div",L,[A,e("div",O,[(c(!0),d(k,null,w(t.supporters,(i,p)=>(c(),d("div",{key:p,class:f(["card p-2 m-2",a.bgClass(i.date)])},[e("h6",{class:f(a.textClass(i.date))},m(i.given_name)+" "+m(i.family_name),3)],2))),128))]),P])])}var J=u(H,[["render",G],["__scopeId","data-v-31a8a56c"]]);const Q={mounted(){+function(t,n,s,o,r,a){t.DarujmeObject=o,t[o]=t[o]||function(){(t[o].q=t[o].q||[]).push(arguments)},r=n.createElement(s),a=n.getElementsByTagName(s)[0],r.async=1,r.src="https://www.darujme.cz/assets/scripts/widget.js",a.parentNode.insertBefore(r,a)}(window,document,"script","Darujme"),Darujme(1,"e2esjcadvq7fynj6","render","https://www.darujme.cz/widget?token=e2esjcadvq7fynj6","100%")}},R=t=>(v("data-v-4a5580ae"),t=t(),b(),t),U={class:"container"},W=R(()=>e("div",{"data-darujme-widget-token":"e2esjcadvq7fynj6"},"\xA0",-1)),X=[W];function Y(t,n,s,o,r,a){return c(),d("div",U,X)}var Z=u(Q,[["render",Y],["__scopeId","data-v-4a5580ae"]]);const tt={},et={class:"navbar navbar-light bg-light"},nt=e("div",{class:"container d-flex justify-content-between"},[e("span",null,[l("Michal \u0160kop, KohoVolit.eu, autor "),e("a",{href:"https://volebnikalkulacka.cz",class:"m-1"},"Volebn\xED kalkula\u010Dky")]),e("span",null,[e("a",{href:"https://projects.kohovolit.eu"},"Dal\u0161\xED projekty autora"),l(" \u2022 Kontakt: "),e("a",{href:"http://kohovolit.eu/kontakt"},"KohoVolit.eu")])],-1),st=[nt];function ot(t,n){return c(),d("footer",et,st)}var at=u(tt,[["render",ot]]);const rt={head(){return{script:[{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"}],link:[{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/united/bootstrap.min.css"}]}}},ct=e("hr",null,null,-1);function dt(t,n,s,o,r,a){const i=F,p=J,y=Z,$=at;return c(),d("div",null,[_(i),x(t.$slots,"default"),ct,_(p),_(y),_($)])}var _t=u(rt,[["render",dt]]);export{_t as default};
