import{_ as d,o as a,c,a as s,b as n,w as i,p as l,g as m,j as p,d as u,k as h,e as f,t as _,f as v}from"./entry-2dfc35fa.mjs";const N={},t=e=>(l("data-v-40d79d6e"),e=e(),m(),e),x={class:"row justify-content-center pt-2"},$={class:"col-md-4"},g=t(()=>s("img",{src:h,class:"image"},null,-1)),b=t(()=>s("span",{class:"text-image"},"Prezidentsk\xE9 volby 2023",-1)),k={class:"col-md-4"},S=t(()=>s("img",{src:p,class:"image"},null,-1)),w=t(()=>s("span",{class:"text-image"},"Sn\u011Bmovna 2021-2025",-1));function y(e,r){const o=u;return a(),c("div",null,[s("div",x,[s("div",$,[n(o,{to:"/"},{default:i(()=>[g,b]),_:1})]),s("div",k,[n(o,{to:"/snemovna"},{default:i(()=>[S,w]),_:1})])])])}var z=d(N,[["render",y],["__scopeId","data-v-40d79d6e"]]);const D={props:["decNumber"],data:function(){return{floor:" ",decimal:0,hasDecimal:!1}},mounted(){this.decNumber&&this.decNumber!=""&&(this.floor=Math.floor(this.decNumber)),this.decimal=Math.round(10*(this.decNumber-this.floor)),this.decimal>0&&(this.hasDecimal=!0)}},I={key:0};function V(e,r,o,B,j,C){return a(),c("span",null,[f(_(e.floor),1),e.hasDecimal?(a(),c("small",I,"."+_(e.decimal),1)):v("",!0)])}var E=d(D,[["render",V]]);export{E as _,z as a};
