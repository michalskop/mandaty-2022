import{_ as n,o as s,c as o,a as t,b as _,w as d,p as l,f as m,d as p,i as u,e as h,t as c,j as f}from"./entry-fcb6f57e.mjs";const b={},r=e=>(l("data-v-cb72fb60"),e=e(),m(),e),N={class:"row justify-content-center pt-2"},$={class:"col-md-4"},v=r(()=>t("img",{src:u,class:"image"},null,-1)),x=r(()=>t("span",{class:"text-image"},"Sn\u011Bmovna 2021-2025",-1));function S(e,i){const a=p;return s(),o("div",null,[t("div",N,[t("div",$,[_(a,{to:"/"},{default:d(()=>[v,x]),_:1})])])])}var B=n(b,[["render",S],["__scopeId","data-v-cb72fb60"]]);const g={props:["decNumber"],data:function(){return{floor:" ",decimal:0,hasDecimal:!1}},mounted(){this.decNumber&&this.decNumber!=""&&(this.floor=Math.floor(this.decNumber)),this.decimal=Math.round(10*(this.decNumber-this.floor)),this.decimal>0&&(this.hasDecimal=!0)}},k={key:0};function w(e,i,a,D,I,V){return s(),o("span",null,[h(c(e.floor),1),e.hasDecimal?(s(),o("small",k,"."+c(e.decimal),1)):f("",!0)])}var j=n(g,[["render",w]]);export{j as _,B as a};
