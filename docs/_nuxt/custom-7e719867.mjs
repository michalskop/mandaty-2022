import{_ as u,o as i,c as _,a as t,b as d,w as h,e as a,d as $,F as w,r as g,A as f,t as m,p as v,f as b,B as x}from"./entry-d8713a04.mjs";const D={},z={class:"navbar navbar-dark bg-primary"},M={class:"container-fluid"},B=t("a",{class:"navbar-brand h1",href:"/"},[a("Mand\xE1ty.cz"),t("small",{class:"d-none d-sm-inline"}," v\xE1\u0161 prst na tepu doby")],-1),I={class:"dropdown"},S=t("button",{class:"btn btn-dark dropdown-toggle",type:"button",id:"dropdownMenu","data-bs-toggle":"dropdown","aria-expanded":"false"}," ... ",-1),C={class:"dropdown-menu dropdown-menu-end","aria-labelledby":"dropdownMenu"},N={class:"dropdown-item",type:"button"},V=a("\u{1F3DB}\uFE0F "),q=a("Sn\u011Bmovna 2021-2025"),T={class:"dropdown-item",type:"button"},E=a("\u{1F64B} "),F=a("Prezident/ka 2028"),H={class:"dropdown-item",type:"button"},K=a("\u{1F5C4}\uFE0F "),A=a("Archiv"),L=t("li",null,[t("hr")],-1),O=t("li",null,[t("button",{class:"dropdown-item",type:"button"},[a("\u{1F1F8}\u{1F1F0} "),t("a",{href:"https://mandaty.sk/"},"Mand\xE1ty.sk")])],-1);function P(e,n){const s=$;return i(),_("div",null,[t("header",z,[t("div",M,[B,t("div",I,[S,t("ul",C,[t("li",null,[t("button",N,[V,d(s,{to:"/"},{default:h(()=>[q]),_:1})])]),t("li",null,[t("button",T,[E,d(s,{to:"/president-2028"},{default:h(()=>[F]),_:1})])]),t("li",null,[t("button",H,[K,d(s,{to:"/archiv"},{default:h(()=>[A]),_:1})])]),L,O])])])])])}var G=u(D,[["render",P]]);const J={data:function(){return{supporters:[],url_darujme:"https://projects.kohovolit.eu/api/?projectId=1200738"}},mounted(){var e=this;fetch(this.url_darujme).then(function(n){return n.json()}).then(function(n){e.supporters=n.reverse().filter(function(s){return s.last})})},methods:{diffDays:function(e,n){return Math.ceil(Math.abs(e-n)/(1e3*3600*24))},bgClass:function(e){var n=Date.parse(e),s=new Date,o=s.getTime();return this.diffDays(n,o)>540?"bg-light":this.diffDays(n,o)>270?"bg-secondary":"bg-warning"},textClass:function(e){var n=Date.parse(e),s=new Date,o=s.getTime();return this.diffDays(n,o)>540?"text-secondary":this.diffDays(n,o)>270?"text-light":"text-dark"}}},y=e=>(v("data-v-31a8a56c"),e=e(),b(),e),Q={class:""},R={class:"container alert alert-success"},U=y(()=>t("h3",{class:"p-4"},[a("\u2764\uFE0F "),t("small",null,"Tento projekt vznikl jen d\xEDky podpo\u0159e:")],-1)),W={class:"d-flex flex-row flex-wrap justify-content-around"},X=y(()=>t("div",{class:"mt-5"},[t("a",{href:"https://www.darujme.cz/projekt/1200738",target:"_blank"},[t("h4",{class:"outlink"},"Bu\u010Fte jako oni, podpo\u0159te dal\u0161\xED rozvoj Mand\xE1ty.cz")])],-1));function Y(e,n,s,o,c,r){return i(),_("div",Q,[t("div",R,[U,t("div",W,[(i(!0),_(w,null,g(e.supporters,(l,p)=>(i(),_("div",{key:p,class:f(["card p-2 m-2",r.bgClass(l.date)])},[t("h6",{class:f(r.textClass(l.date))},m(l.given_name)+" "+m(l.family_name),3)],2))),128))]),X])])}var Z=u(J,[["render",Y],["__scopeId","data-v-31a8a56c"]]);const tt={mounted(){+function(e,n,s,o,c,r){e.DarujmeObject=o,e[o]=e[o]||function(){(e[o].q=e[o].q||[]).push(arguments)},c=n.createElement(s),r=n.getElementsByTagName(s)[0],c.async=1,c.src="https://www.darujme.cz/assets/scripts/widget.js",r.parentNode.insertBefore(c,r)}(window,document,"script","Darujme"),Darujme(1,"e2esjcadvq7fynj6","render","https://www.darujme.cz/widget?token=e2esjcadvq7fynj6","100%")}},et=e=>(v("data-v-4a5580ae"),e=e(),b(),e),nt={class:"container"},st=et(()=>t("div",{"data-darujme-widget-token":"e2esjcadvq7fynj6"},"\xA0",-1)),ot=[st];function at(e,n,s,o,c,r){return i(),_("div",nt,ot)}var rt=u(tt,[["render",at],["__scopeId","data-v-4a5580ae"]]);const ct={},dt={class:"navbar navbar-light bg-light"},it=t("div",{class:"container d-flex justify-content-between"},[t("span",null,[a("Michal \u0160kop, KohoVolit.eu, autor "),t("a",{href:"https://volebnikalkulacka.cz",class:"m-1"},"Volebn\xED kalkula\u010Dky")]),t("span",null,[t("a",{href:"https://projects.kohovolit.eu"},"Dal\u0161\xED projekty autora"),a(" \u2022 Kontakt: "),t("a",{href:"http://kohovolit.eu/kontakt"},"KohoVolit.eu")])],-1),_t=[it];function lt(e,n){return i(),_("footer",dt,_t)}var ut=u(ct,[["render",lt]]);const pt={head(){return{script:[{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"}],link:[{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/united/bootstrap.min.css"}]}}},ht=t("hr",null,null,-1);function ft(e,n,s,o,c,r){const l=G,p=Z,j=rt,k=ut;return i(),_("div",null,[d(l),x(e.$slots,"default"),ht,d(p),d(j),d(k)])}var vt=u(pt,[["render",ft]]);export{vt as default};
