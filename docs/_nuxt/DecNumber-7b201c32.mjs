import{_ as s,o as t,c as o,e as r,t as a,i}from"./entry-678ac463.mjs";const c={props:["decNumber"],data:function(){return{floor:" ",decimal:0,hasDecimal:!1}},mounted(){this.decNumber&&this.decNumber!=""&&(this.floor=Math.floor(this.decNumber)),this.decimal=Math.round(10*(this.decNumber-this.floor)),this.decimal>0&&(this.hasDecimal=!0)}},n={key:0};function l(e,m,d,h,u,f){return t(),o("span",null,[r(a(e.floor),1),e.hasDecimal?(t(),o("small",n,"."+a(e.decimal),1)):i("",!0)])}var _=s(c,[["render",l]]);export{_};
