import{_ as h}from"./ChartLinks-97417f88.mjs";import{_ as c,o as a,c as o,a as e,t as s,F as v,r as u,e as n,i as y,p as k,f as $,y as g,z as P,b as t}from"./entry-3e69351b.mjs";var S=[{name:"Petr Pavel",perc:45.9,perc_floor:45,perc_tens:8,family_name:"Pavel",other_names:"Petr"},{name:"Andrej Babi\u0161",perc:7.1,perc_floor:7,perc_tens:0,family_name:"Babi\u0161",other_names:"Andrej"},{name:"Danu\u0161e Nerudov\xE1",perc:7.1,perc_floor:7,perc_tens:0,family_name:"Nerudov\xE1",other_names:"Danu\u0161e"},{name:"Petr Fiala",perc:6.1,perc_floor:6,perc_tens:0,family_name:"Fiala",other_names:"Petr"},{name:"V\xEDt Raku\u0161an",perc:4.6,perc_floor:4,perc_tens:5,family_name:"Raku\u0161an",other_names:"V\xEDt"},{name:"Milo\u0161 Vystr\u010Dil",perc:3.7,perc_floor:3,perc_tens:7,family_name:"Vystr\u010Dil",other_names:"Milo\u0161"},{name:"Pavel Fischer",perc:3.1,perc_floor:3,perc_tens:1,family_name:"Fischer",other_names:"Pavel"},{name:"Ivan Barto\u0161",perc:2.3,perc_floor:2,perc_tens:2,family_name:"Barto\u0161",other_names:"Ivan"},{name:"Filip Turek",perc:2.3,perc_floor:2,perc_tens:2,family_name:"Turek",other_names:"Filip"},{name:"Mark\xE9ta Pekarov\xE1 Adamov\xE1",perc:1.7,perc_floor:1,perc_tens:7,family_name:"Pekarov\xE1 Adamov\xE1",other_names:"Mark\xE9ta"},{name:"Martin Stropnick\xFD",perc:1.7,perc_floor:1,perc_tens:7,family_name:"Stropnick\xFD",other_names:"Martin"},{name:"Marek Hil\u0161er",perc:1.7,perc_floor:1,perc_tens:7,family_name:"Hil\u0161er",other_names:"Marek"},{name:"Kl\xE1ra Lauren\u010D\xEDkov\xE1",perc:1.5,perc_floor:1,perc_tens:5,family_name:"Lauren\u010D\xEDkov\xE1",other_names:"Kl\xE1ra"},{name:"Lenka Brad\xE1\u010Dov\xE1",perc:1.5,perc_floor:1,perc_tens:5,family_name:"Brad\xE1\u010Dov\xE1",other_names:"Lenka"},{name:"Josef St\u0159edula",perc:1.4,perc_floor:1,perc_tens:3,family_name:"St\u0159edula",other_names:"Josef"},{name:"Jarom\xEDr J\xE1gr",perc:1.4,perc_floor:1,perc_tens:3,family_name:"J\xE1gr",other_names:"Jarom\xEDr"},{name:"Tomio Okamura",perc:1.3,perc_floor:1,perc_tens:3,family_name:"Okamura",other_names:"Tomio"},{name:"Ad\xE9la \u0160\xEDpov\xE1",perc:1.3,perc_floor:1,perc_tens:3,family_name:"\u0160\xEDpov\xE1",other_names:"Ad\xE9la"},{name:"Miroslava N\u011Bmcov\xE1",perc:1.1,perc_floor:1,perc_tens:1,family_name:"N\u011Bmcov\xE1",other_names:"Miroslava"},{name:"Alena Schillerov\xE1",perc:1.1,perc_floor:1,perc_tens:1,family_name:"Schillerov\xE1",other_names:"Alena"},{name:"Karel Havl\xED\u010Dek",perc:1.1,perc_floor:1,perc_tens:1,family_name:"Havl\xED\u010Dek",other_names:"Karel"},{name:"V\u011Bra Jourov\xE1",perc:1.1,perc_floor:1,perc_tens:1,family_name:"Jourov\xE1",other_names:"V\u011Bra"}],V=[{date:"2024-07-18"}];const b={data:function(){return{candidates:S,date:new Date(V[0].date).toLocaleDateString("cs")}}},M=n(" \u0160ance na v\xFDhru ve volb\xE1ch "),x=n("dle s\xE1zkov\xFDch kancel\xE1\u0159\xED "),B={class:"fs-5 fw-bolder"},A={class:"container"},F={class:"row"},J={class:"card text-center mb-2"},N={class:"card-header card-title"},L={class:"card-body"},I={class:"number fs-2"},w={key:0},D=n(" %");function T(r,m,i,p,d,Z){return a(),o("div",null,[e("h3",null,[M,e("small",null,[x,e("span",B,s(r.date),1)])]),e("div",A,[e("div",F,[(a(!0),o(v,null,u(r.candidates,(_,f)=>(a(),o("div",{key:f,class:"col-xl-3 col-lg-4 col-sm-6"},[e("div",J,[e("h4",N,[n(s(_.family_name)+" ",1),e("small",null,s(_.other_names),1)]),e("div",L,[e("div",I,[n(s(_.perc_floor),1),_.perc_floor<5?(a(),o("small",w,"."+s(_.perc_tens),1)):y("",!0),D])])])]))),128))])])])}var z=c(b,[["render",T]]);const H={},l=r=>(k("data-v-06813cd6"),r=r(),$(),r),K={id:"image-wrapper"},j=l(()=>e("h3",null,[n(" V\xFDvoj \u0161ance na v\xFDhru ve volb\xE1ch "),e("small",null,"dle s\xE1zkov\xFDch kancel\xE1\u0159\xED ")],-1)),C=l(()=>e("img",{src:g,class:"image"},null,-1)),O=l(()=>e("img",{src:P,class:"image-small"},null,-1)),R=[j,C,O];function E(r,m){return a(),o("div",K,R)}var q=c(H,[["render",E],["__scopeId","data-v-06813cd6"]]);const G={},Q={class:"container"},U=e("h1",{class:"pt-4"},"Prezidentsk\xE9 volby 2028",-1),W=e("hr",null,null,-1),X=e("hr",null,null,-1);function Y(r,m){const i=h,p=z,d=q;return a(),o("div",Q,[t(i),U,W,t(p),X,t(d)])}var ae=c(G,[["render",Y]]);export{ae as default};
