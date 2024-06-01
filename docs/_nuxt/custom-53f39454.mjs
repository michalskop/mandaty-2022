import{_ as u,o as _,c as i,a as t,b as c,w as p,e as a,d as $,F as w,r as g,B as f,t as m,p as v,f as b,C as x}from"./entry-6d18b495.mjs";const D={},z={class:"navbar navbar-dark bg-primary"},M={class:"container-fluid"},B=t("a",{class:"navbar-brand h1",href:"/"},[a("Mand\xE1ty.cz"),t("small",{class:"d-none d-sm-inline"}," v\xE1\u0161 prst na tepu doby")],-1),C={class:"dropdown"},I=t("button",{class:"btn btn-dark dropdown-toggle",type:"button",id:"dropdownMenu","data-bs-toggle":"dropdown","aria-expanded":"false"}," ... ",-1),S={class:"dropdown-menu dropdown-menu-end","aria-labelledby":"dropdownMenu"},N={class:"dropdown-item",type:"button"},V=a("\u{1F3DB}\uFE0F "),q=a("Sn\u011Bmovna 2021-2025"),T={class:"dropdown-item",type:"button"},E=a("\u{1F1EA}\u{1F1FA} "),F=a("Evropsk\xFD parlament \u010CR 2024"),H={class:"dropdown-item",type:"button"},K=a("\u{1F64B} "),L=a("Prezident/ka 2028"),A={class:"dropdown-item",type:"button"},O=a("\u{1F5C4}\uFE0F "),P=a("Archiv"),R=t("li",null,[t("hr")],-1),G=t("li",null,[t("button",{class:"dropdown-item",type:"button"},[a("\u{1F1F8}\u{1F1F0} "),t("a",{href:"https://mandaty.sk/"},"Mand\xE1ty.sk")])],-1);function J(e,s){const n=$;return _(),i("div",null,[t("header",z,[t("div",M,[B,t("div",C,[I,t("ul",S,[t("li",null,[t("button",N,[V,c(n,{to:"/"},{default:p(()=>[q]),_:1})])]),t("li",null,[t("button",T,[E,c(n,{to:"/ep-2024"},{default:p(()=>[F]),_:1})])]),t("li",null,[t("button",H,[K,c(n,{to:"/president-2028"},{default:p(()=>[L]),_:1})])]),t("li",null,[t("button",A,[O,c(n,{to:"/archiv"},{default:p(()=>[P]),_:1})])]),R,G])])])])])}var Q=u(D,[["render",J]]);const U={data:function(){return{supporters:[],url_darujme:"https://projects.kohovolit.eu/api/?projectId=1200738"}},mounted(){var e=this;fetch(this.url_darujme).then(function(s){return s.json()}).then(function(s){e.supporters=s.reverse().filter(function(n){return n.last})})},methods:{diffDays:function(e,s){return Math.ceil(Math.abs(e-s)/(1e3*3600*24))},bgClass:function(e){var s=Date.parse(e),n=new Date,o=n.getTime();return this.diffDays(s,o)>540?"bg-light":this.diffDays(s,o)>270?"bg-secondary":"bg-warning"},textClass:function(e){var s=Date.parse(e),n=new Date,o=n.getTime();return this.diffDays(s,o)>540?"text-secondary":this.diffDays(s,o)>270?"text-light":"text-dark"}}},y=e=>(v("data-v-31a8a56c"),e=e(),b(),e),W={class:""},X={class:"container alert alert-success"},Y=y(()=>t("h3",{class:"p-4"},[a("\u2764\uFE0F "),t("small",null,"Tento projekt vznikl jen d\xEDky podpo\u0159e:")],-1)),Z={class:"d-flex flex-row flex-wrap justify-content-around"},tt=y(()=>t("div",{class:"mt-5"},[t("a",{href:"https://www.darujme.cz/projekt/1200738",target:"_blank"},[t("h4",{class:"outlink"},"Bu\u010Fte jako oni, podpo\u0159te dal\u0161\xED rozvoj Mand\xE1ty.cz")])],-1));function et(e,s,n,o,d,r){return _(),i("div",W,[t("div",X,[Y,t("div",Z,[(_(!0),i(w,null,g(e.supporters,(l,h)=>(_(),i("div",{key:h,class:f(["card p-2 m-2",r.bgClass(l.date)])},[t("h6",{class:f(r.textClass(l.date))},m(l.given_name)+" "+m(l.family_name),3)],2))),128))]),tt])])}var st=u(U,[["render",et],["__scopeId","data-v-31a8a56c"]]);const nt={mounted(){+function(e,s,n,o,d,r){e.DarujmeObject=o,e[o]=e[o]||function(){(e[o].q=e[o].q||[]).push(arguments)},d=s.createElement(n),r=s.getElementsByTagName(n)[0],d.async=1,d.src="https://www.darujme.cz/assets/scripts/widget.js",r.parentNode.insertBefore(d,r)}(window,document,"script","Darujme"),Darujme(1,"e2esjcadvq7fynj6","render","https://www.darujme.cz/widget?token=e2esjcadvq7fynj6","100%")}},ot=e=>(v("data-v-4a5580ae"),e=e(),b(),e),at={class:"container"},rt=ot(()=>t("div",{"data-darujme-widget-token":"e2esjcadvq7fynj6"},"\xA0",-1)),ct=[rt];function dt(e,s,n,o,d,r){return _(),i("div",at,ct)}var _t=u(nt,[["render",dt],["__scopeId","data-v-4a5580ae"]]);const it={},lt={class:"navbar navbar-light bg-light"},ut=t("div",{class:"container d-flex justify-content-between"},[t("span",null,[a("Michal \u0160kop, KohoVolit.eu, autor "),t("a",{href:"https://volebnikalkulacka.cz",class:"m-1"},"Volebn\xED kalkula\u010Dky")]),t("span",null,[t("a",{href:"https://projects.kohovolit.eu"},"Dal\u0161\xED projekty autora"),a(" \u2022 Kontakt: "),t("a",{href:"http://kohovolit.eu/kontakt"},"KohoVolit.eu")])],-1),pt=[ut];function ht(e,s){return _(),i("footer",lt,pt)}var ft=u(it,[["render",ht]]);const mt={head(){return{script:[{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"}],link:[{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/united/bootstrap.min.css"}]}}},vt=t("hr",null,null,-1);function bt(e,s,n,o,d,r){const l=Q,h=st,j=_t,k=ft;return _(),i("div",null,[c(l),x(e.$slots,"default"),vt,c(h),c(j),c(k)])}var jt=u(mt,[["render",bt]]);export{jt as default};
