import{_ as u,o as d,c as i,a as t,b as l,w as h,e as a,d as k,F as w,r as g,s as f,t as m,p as v,f as b,v as x}from"./entry-347a3e2b.mjs";const D={},z={class:"navbar navbar-dark bg-primary"},M={class:"container-fluid"},I=t("a",{class:"navbar-brand h1",href:"/"},[a("Mand\xE1ty.cz"),t("small",{class:"d-none d-sm-inline"}," v\xE1\u0161 prst na tepu doby")],-1),S={class:"dropdown"},B=t("button",{class:"btn btn-dark dropdown-toggle",type:"button",id:"dropdownMenu","data-bs-toggle":"dropdown","aria-expanded":"false"}," ... ",-1),C={class:"dropdown-menu dropdown-menu-end","aria-labelledby":"dropdownMenu"},N={class:"dropdown-item",type:"button"},V=a("\u{1F3DB}\uFE0F "),q=a("Sn\u011Bmovna 2021-2025"),T={class:"dropdown-item",type:"button"},E=a("\u{1F5C4}\uFE0F "),F=a("Archiv"),H=t("li",null,[t("hr")],-1),K=t("li",null,[t("button",{class:"dropdown-item",type:"button"},[a("\u{1F1F8}\u{1F1F0} "),t("a",{href:"https://mandaty.sk/"},"Mand\xE1ty.sk")])],-1);function L(e,s){const n=k;return d(),i("div",null,[t("header",z,[t("div",M,[I,t("div",S,[B,t("ul",C,[t("li",null,[t("button",N,[V,l(n,{to:"/"},{default:h(()=>[q]),_:1})])]),t("li",null,[t("button",T,[E,l(n,{to:"/archiv"},{default:h(()=>[F]),_:1})])]),H,K])])])])])}var A=u(D,[["render",L]]);const O={data:function(){return{supporters:[],url_darujme:"https://projects.kohovolit.eu/api/?projectId=1200738"}},mounted(){var e=this;fetch(this.url_darujme).then(function(s){return s.json()}).then(function(s){e.supporters=s.reverse().filter(function(n){return n.last})})},methods:{diffDays:function(e,s){return Math.ceil(Math.abs(e-s)/(1e3*3600*24))},bgClass:function(e){var s=Date.parse(e),n=new Date,o=n.getTime();return this.diffDays(s,o)>540?"bg-light":this.diffDays(s,o)>270?"bg-secondary":"bg-warning"},textClass:function(e){var s=Date.parse(e),n=new Date,o=n.getTime();return this.diffDays(s,o)>540?"text-secondary":this.diffDays(s,o)>270?"text-light":"text-dark"}}},y=e=>(v("data-v-31a8a56c"),e=e(),b(),e),G={class:""},J={class:"container alert alert-success"},P=y(()=>t("h3",{class:"p-4"},[a("\u2764\uFE0F "),t("small",null,"Tento projekt vznikl jen d\xEDky podpo\u0159e:")],-1)),Q={class:"d-flex flex-row flex-wrap justify-content-around"},R=y(()=>t("div",{class:"mt-5"},[t("a",{href:"https://www.darujme.cz/projekt/1200738",target:"_blank"},[t("h4",{class:"outlink"},"Bu\u010Fte jako oni, podpo\u0159te dal\u0161\xED rozvoj Mand\xE1ty.cz")])],-1));function U(e,s,n,o,c,r){return d(),i("div",G,[t("div",J,[P,t("div",Q,[(d(!0),i(w,null,g(e.supporters,(_,p)=>(d(),i("div",{key:p,class:f(["card p-2 m-2",r.bgClass(_.date)])},[t("h6",{class:f(r.textClass(_.date))},m(_.given_name)+" "+m(_.family_name),3)],2))),128))]),R])])}var W=u(O,[["render",U],["__scopeId","data-v-31a8a56c"]]);const X={mounted(){+function(e,s,n,o,c,r){e.DarujmeObject=o,e[o]=e[o]||function(){(e[o].q=e[o].q||[]).push(arguments)},c=s.createElement(n),r=s.getElementsByTagName(n)[0],c.async=1,c.src="https://www.darujme.cz/assets/scripts/widget.js",r.parentNode.insertBefore(c,r)}(window,document,"script","Darujme"),Darujme(1,"e2esjcadvq7fynj6","render","https://www.darujme.cz/widget?token=e2esjcadvq7fynj6","100%")}},Y=e=>(v("data-v-4a5580ae"),e=e(),b(),e),Z={class:"container"},tt=Y(()=>t("div",{"data-darujme-widget-token":"e2esjcadvq7fynj6"},"\xA0",-1)),et=[tt];function st(e,s,n,o,c,r){return d(),i("div",Z,et)}var nt=u(X,[["render",st],["__scopeId","data-v-4a5580ae"]]);const ot={},at={class:"navbar navbar-light bg-light"},rt=t("div",{class:"container d-flex justify-content-between"},[t("span",null,[a("Michal \u0160kop, KohoVolit.eu, autor "),t("a",{href:"https://volebnikalkulacka.cz",class:"m-1"},"Volebn\xED kalkula\u010Dky")]),t("span",null,[t("a",{href:"https://projects.kohovolit.eu"},"Dal\u0161\xED projekty autora"),a(" \u2022 Kontakt: "),t("a",{href:"http://kohovolit.eu/kontakt"},"KohoVolit.eu")])],-1),ct=[rt];function dt(e,s){return d(),i("footer",at,ct)}var it=u(ot,[["render",dt]]);const _t={head(){return{script:[{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"}],link:[{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/united/bootstrap.min.css"}]}}},lt=t("hr",null,null,-1);function ut(e,s,n,o,c,r){const _=A,p=W,j=nt,$=it;return d(),i("div",null,[l(_),x(e.$slots,"default"),lt,l(p),l(j),l($)])}var ht=u(_t,[["render",ut]]);export{ht as default};
