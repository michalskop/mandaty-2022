import{_ as f}from"./ChartLinks-506f0523.mjs";import{_ as p,o as i,c as e,a as l,t as r,F as O,r as _,e as D,p as b,f as m,n as y,q as E,h,b as S,i as N,s as C,k as L,u as j}from"./entry-6458de09.mjs";import{_ as K}from"./DecNumber-816bf8e1.mjs";const V=[{party:"ANO",median:82,lo:68,hi:97,in:1,id:"ANO",name:"Hnut\xED ANO",abbreviation:"ANO",color:"#261060",needs:.05,mps:72,seats:83,difference:11},{party:"SPOLU",median:55,lo:41,hi:67,in:1,id:"SPOLU",name:"Koalice ODS, KDU-\u010CSL, TOP 09",abbreviation:"SPOLU",color:"#004494",needs:.11,mps:71,seats:57,difference:-14},{party:"Pir\xE1ti",median:22,lo:13,hi:31,in:.984,id:"Pir\xE1ti",name:"\u010Cesk\xE1 pir\xE1tsk\xE1 strana",abbreviation:"Pir\xE1ti",color:"#000000",needs:.05,mps:4,seats:23,difference:19},{party:"STAN",median:18,lo:0,hi:26,in:.92,id:"STAN",name:"Starostov\xE9 a nez\xE1visl\xED",abbreviation:"STAN",color:"#CE0F68",needs:.05,mps:33,seats:19,difference:-14},{party:"SPD",median:17,lo:0,hi:26,in:.879,id:"SPD",name:"Svoboda a p\u0159\xEDm\xE1 demokracie - Tomio Okamura",abbreviation:"SPD",color:"#EA2329",needs:.05,mps:20,seats:18,difference:-2},{party:"P\u0159\xEDsaha+Motor",median:0,lo:0,hi:16,in:.388,id:"P\u0159\xEDsaha+Motor",name:"P\u0159\xEDsaha - Motorist\xE9 sob\u011B",abbreviation:"P\u0159\xEDsaha a Motor.",color:"#0033FF",needs:.05,mps:0,seats:0,difference:0},{party:"KS\u010CM",median:0,lo:0,hi:13,in:.208,id:"KS\u010CM",name:"Komunistick\xE1 strana \u010Cech a Moravy",abbreviation:"KS\u010CM",color:"#8C0000",needs:.05,mps:0,seats:0,difference:0},{party:"SOCDEM",median:0,lo:0,hi:11,in:.073,id:"SOCDEM",name:"\u010Cesk\xE1 strana soci\xE1ln\u011B demokratick\xE1",abbreviation:"SOCDEM",color:"#F07D00",needs:.05,mps:0,seats:0,difference:0}],U="2024-06-15";var A={data:V,date:U};const R={data:function(){return{seats:A.data,date:new Date(A.date).toLocaleDateString("cs-CZ")}},filters:{abs(n){return Math.abs(n)}}},k=n=>(b("data-v-afe46c60"),n=n(),m(),n),Z=D("Po\u010Det mand\xE1t\u016F "),$=k(()=>l("small",null,"s odhadem chyby",-1)),g=D(),x={class:"badge"},I={class:"container"},w={class:"row"},F={class:"card text-center mb-2"},z={class:"card-header"},B={class:"card-body"},H={class:"row"},q=k(()=>l("div",{class:"col-3"},null,-1)),W={class:"col-6 text-center"},G={class:"number"},J={key:0},Q={class:"text-success"},X={key:1},Y={class:"text-danger"},ll={key:2},nl=k(()=>l("span",{class:"text-muted"},null,-1)),il=[nl],el={class:"lo-hi"};function ol(n,u,a,P,d,T){return i(),e("div",null,[l("h3",null,[Z,$,g,l("span",x,r(n.date),1)]),l("div",I,[l("div",w,[(i(!0),e(O,null,_(n.seats,(o,t)=>(i(),e("div",{key:t,class:"col-xl-3 col-lg-4 col-sm-6"},[l("div",F,[l("div",z,[l("h4",{style:y({color:o.color})},r(o.abbreviation),5)]),l("div",B,[l("div",H,[q,l("div",W,[l("div",null,[l("span",G,r(o.seats),1),o.difference>0?(i(),e("span",J,[l("span",Q,"+"+r(o.difference),1)])):o.difference<0?(i(),e("span",X,[l("span",Y,r(o.difference),1)])):(i(),e("span",ll,il))])])]),l("div",el,[l("strong",null,r(o.lo)+" - "+r(o.hi),1)])])])]))),128))])])])}var tl=p(R,[["render",ol],["__scopeId","data-v-afe46c60"]]);const rl={},al=n=>(b("data-v-6d68b17d"),n=n(),m(),n),dl={id:"image-wrapper"},sl=al(()=>l("img",{src:E,class:"image-small"},null,-1)),Sl=[sl];function ul(n,u){return i(),e("div",dl,Sl)}var v=p(rl,[["render",ul],["__scopeId","data-v-6d68b17d"]]),Pl=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"}));const Ol={name:"SnemovnaPollsChart",data(){return{isMobile:!1}},mounted(){this.isMobile=window.innerWidth<666,console.log("isMobile:",this.isMobile)},components:{SnemovnaPollsPictureChart:()=>h(()=>Promise.resolve().then(function(){return Pl}),void 0),SnemovnaPollsInteractiveChart:()=>h(()=>import("./entry-6458de09.mjs").then(function(n){return n.S}),["entry-6458de09.mjs","entry.e616280e.css"])}},_l=n=>(b("data-v-c7c0d9ea"),n=n(),m(),n),Dl={id:"image-wrapper"},Tl=_l(()=>l("h3",null,[D(" V\xFDvoj volebn\xEDch model\u016F "),l("small",null,"dle pr\u016Fzkum\u016F ve\u0159ejn\xE9ho m\xEDn\u011Bn\xED ")],-1)),pl={key:0},cl={key:1};function Ml(n,u,a,P,d,T){const o=v,t=C;return i(),e("div",Dl,[Tl,d.isMobile?(i(),e("div",pl,[S(o)])):N("",!0),d.isMobile?N("",!0):(i(),e("div",cl,[S(t)]))])}var bl=p(Ol,[["render",Ml],["__scopeId","data-v-c7c0d9ea"]]),ml=[{"poll:identifier":"2024-06","pollster:id":"Kantar",middle_date:"2024-06-15",ANO:34,ODS:16,Pir\u00E1ti:9,STAN:8.5,SPD:6,"TOP 09":4,KS\u010CM:3,SOCDEM:2.5,PRO:null,P\u0159\u00EDsaha:4.5,"jin\xE9 strany":4.5,"KDU-\u010CSL":3,Zelen\u00ED:2.5,Trikol\u00F3ra:null,Svobodn\u00ED:2.5,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2024-06","pollster:id":"STEM",middle_date:"2024-06-11",ANO:32.9,ODS:14.8,Pir\u00E1ti:8.7,STAN:6.8,SPD:7.3,"TOP 09":4.5,KS\u010CM:5.1,SOCDEM:2.5,PRO:1.9,P\u0159\u00EDsaha:3.7,"jin\xE9 strany":.9,"KDU-\u010CSL":2.5,Zelen\u00ED:2,Trikol\u00F3ra:1.7,Svobodn\u00ED:2,"Voln\xFD blok":null,Motorist\u00E9:2.7},{"poll:identifier":"2024-05","pollster:id":"Median",middle_date:"2024-05-18",ANO:33,ODS:14.5,Pir\u00E1ti:10,STAN:8.5,SPD:7.5,"TOP 09":5.5,KS\u010CM:4,SOCDEM:3.5,PRO:3.5,P\u0159\u00EDsaha:3,"jin\xE9 strany":2,"KDU-\u010CSL":2,Zelen\u00ED:1.5,Trikol\u00F3ra:1.5,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2024-04","pollster:id":"Kantar",middle_date:"2024-05-01",ANO:32,ODS:15.5,Pir\u00E1ti:11,STAN:7.5,SPD:9,"TOP 09":5,KS\u010CM:2.5,SOCDEM:3,PRO:null,P\u0159\u00EDsaha:3.5,"jin\xE9 strany":5,"KDU-\u010CSL":3.5,Zelen\u00ED:2.5,Trikol\u00F3ra:null,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2024-04","pollster:id":"Median",middle_date:"2024-04-15",ANO:32.5,ODS:13,Pir\u00E1ti:10,STAN:8,SPD:10,"TOP 09":3.5,KS\u010CM:3.5,SOCDEM:4.5,PRO:3,P\u0159\u00EDsaha:2.5,"jin\xE9 strany":2,"KDU-\u010CSL":3.5,Zelen\u00ED:2.5,Trikol\u00F3ra:1.5,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2024-03","pollster:id":"Kantar",middle_date:"2024-03-27",ANO:34.5,ODS:16,Pir\u00E1ti:10.5,STAN:6.5,SPD:8,"TOP 09":4.5,KS\u010CM:3,SOCDEM:3,PRO:2,P\u0159\u00EDsaha:2.5,"jin\xE9 strany":2,"KDU-\u010CSL":3,Zelen\u00ED:2,Trikol\u00F3ra:null,Svobodn\u00ED:2.5,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2024-03","pollster:id":"STEM",middle_date:"2024-03-20",ANO:32.9,ODS:14.5,Pir\u00E1ti:10.5,STAN:6.6,SPD:9.3,"TOP 09":5.2,KS\u010CM:4.5,SOCDEM:3.6,PRO:1.9,P\u0159\u00EDsaha:2.8,"jin\xE9 strany":.4,"KDU-\u010CSL":3.1,Zelen\u00ED:2.1,Trikol\u00F3ra:.8,Svobodn\u00ED:1.9,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2024-03","pollster:id":"Median",middle_date:"2024-03-19",ANO:32,ODS:14,Pir\u00E1ti:10.5,STAN:6,SPD:7,"TOP 09":3.5,KS\u010CM:4.5,SOCDEM:4.5,PRO:4,P\u0159\u00EDsaha:3.5,"jin\xE9 strany":2,"KDU-\u010CSL":3.5,Zelen\u00ED:3,Trikol\u00F3ra:2,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2024-02","pollster:id":"Kantar",middle_date:"2024-02-21",ANO:38.5,ODS:14.5,Pir\u00E1ti:9.5,STAN:7,SPD:9,"TOP 09":5,KS\u010CM:2.5,SOCDEM:2.5,PRO:null,P\u0159\u00EDsaha:null,"jin\xE9 strany":9.5,"KDU-\u010CSL":2,Zelen\u00ED:null,Trikol\u00F3ra:null,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2024-02","pollster:id":"Median",middle_date:"2024-02-17",ANO:31,ODS:12.5,Pir\u00E1ti:11,STAN:9,SPD:9.5,"TOP 09":5.5,KS\u010CM:4,SOCDEM:4.5,PRO:2,P\u0159\u00EDsaha:3,"jin\xE9 strany":3,"KDU-\u010CSL":3,Zelen\u00ED:2,Trikol\u00F3ra:null,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2024-01","pollster:id":"Kantar",middle_date:"2024-01-24",ANO:35,ODS:15.5,Pir\u00E1ti:9.5,STAN:6.5,SPD:9.5,"TOP 09":5,KS\u010CM:3,SOCDEM:4,PRO:null,P\u0159\u00EDsaha:3.5,"jin\xE9 strany":2.5,"KDU-\u010CSL":3.5,Zelen\u00ED:null,Trikol\u00F3ra:null,Svobodn\u00ED:2.5,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2024-01","pollster:id":"Median",middle_date:"2024-01-23",ANO:31.5,ODS:12,Pir\u00E1ti:13,STAN:7,SPD:10.5,"TOP 09":5.5,KS\u010CM:4.5,SOCDEM:4,PRO:3,P\u0159\u00EDsaha:3,"jin\xE9 strany":1.5,"KDU-\u010CSL":3,Zelen\u00ED:1.5,Trikol\u00F3ra:null,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2024-01","pollster:id":"STEM",middle_date:"2024-01-22",ANO:33.4,ODS:13.2,Pir\u00E1ti:11.3,STAN:7,SPD:10,"TOP 09":5,KS\u010CM:4.8,SOCDEM:3.1,PRO:null,P\u0159\u00EDsaha:2.6,"jin\xE9 strany":1.2,"KDU-\u010CSL":2.7,Zelen\u00ED:2.5,Trikol\u00F3ra:1.4,Svobodn\u00ED:1.7,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2023-12","pollster:id":"Median",middle_date:"2023-12-14",ANO:35,ODS:13,Pir\u00E1ti:10.5,STAN:6.5,SPD:9,"TOP 09":6,KS\u010CM:4.5,SOCDEM:4.5,PRO:2.5,P\u0159\u00EDsaha:2.5,"jin\xE9 strany":2,"KDU-\u010CSL":2.5,Zelen\u00ED:1.5,Trikol\u00F3ra:null,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2023-11","pollster:id":"IPSOS",middle_date:"2023-11-24",ANO:34.3,ODS:13.3,Pir\u00E1ti:10.5,STAN:6.6,SPD:9.2,"TOP 09":5.1,KS\u010CM:2.5,SOCDEM:4.1,PRO:1.8,P\u0159\u00EDsaha:2.8,"jin\xE9 strany":1.1,"KDU-\u010CSL":4.3,Zelen\u00ED:1,Trikol\u00F3ra:1.2,Svobodn\u00ED:2.2,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2023-11","pollster:id":"Kantar",middle_date:"2023-11-22",ANO:34.5,ODS:12.5,Pir\u00E1ti:11.5,STAN:7,SPD:10,"TOP 09":5,KS\u010CM:2.5,SOCDEM:3.5,PRO:null,P\u0159\u00EDsaha:2.5,"jin\xE9 strany":2,"KDU-\u010CSL":2,Zelen\u00ED:3,Trikol\u00F3ra:2,Svobodn\u00ED:2,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2023-11","pollster:id":"Median",middle_date:"2023-11-20",ANO:34.5,ODS:15.5,Pir\u00E1ti:11,STAN:6,SPD:8.5,"TOP 09":5.5,KS\u010CM:3.5,SOCDEM:4.5,PRO:1.5,P\u0159\u00EDsaha:1.5,"jin\xE9 strany":1,"KDU-\u010CSL":4,Zelen\u00ED:1.5,Trikol\u00F3ra:1.5,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2023-11","pollster:id":"STEM",middle_date:"2023-11-08",ANO:33.2,ODS:11.6,Pir\u00E1ti:10.2,STAN:6.4,SPD:12,"TOP 09":5.2,KS\u010CM:3,SOCDEM:4.5,PRO:1.9,P\u0159\u00EDsaha:2.9,"jin\xE9 strany":.4,"KDU-\u010CSL":3.5,Zelen\u00ED:1.6,Trikol\u00F3ra:1.2,Svobodn\u00ED:2.3,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2023-10","pollster:id":"Kantar",middle_date:"2023-10-25",ANO:32.5,ODS:15.5,Pir\u00E1ti:10.5,STAN:7,SPD:10.5,"TOP 09":4.5,KS\u010CM:3.5,SOCDEM:3.5,PRO:2,P\u0159\u00EDsaha:2.5,"jin\xE9 strany":5.5,"KDU-\u010CSL":2.5,Zelen\u00ED:null,Trikol\u00F3ra:null,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2023-10","pollster:id":"Median",middle_date:"2023-10-17",ANO:35,ODS:13.5,Pir\u00E1ti:9,STAN:6,SPD:10.5,"TOP 09":6,KS\u010CM:3,SOCDEM:3.5,PRO:2.5,P\u0159\u00EDsaha:3,"jin\xE9 strany":3,"KDU-\u010CSL":3.5,Zelen\u00ED:1.5,Trikol\u00F3ra:null,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2023-09","pollster:id":"Kantar",middle_date:"2023-09-20",ANO:33.5,ODS:12,Pir\u00E1ti:8.5,STAN:7.5,SPD:9.5,"TOP 09":5,KS\u010CM:3,SOCDEM:3.5,PRO:3,P\u0159\u00EDsaha:4,"jin\xE9 strany":2,"KDU-\u010CSL":3.5,Zelen\u00ED:2,Trikol\u00F3ra:null,Svobodn\u00ED:3,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2023-09","pollster:id":"Median",middle_date:"2023-09-18",ANO:34,ODS:13,Pir\u00E1ti:11.5,STAN:6.5,SPD:9.5,"TOP 09":5.5,KS\u010CM:4.5,SOCDEM:4,PRO:2.5,P\u0159\u00EDsaha:null,"jin\xE9 strany":3,"KDU-\u010CSL":4,Zelen\u00ED:2,Trikol\u00F3ra:null,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2023-09","pollster:id":"STEM",middle_date:"2023-09-12",ANO:30.8,ODS:13.1,Pir\u00E1ti:9.6,STAN:5.3,SPD:10.9,"TOP 09":5.4,KS\u010CM:4.3,SOCDEM:4,PRO:1.2,P\u0159\u00EDsaha:3.2,"jin\xE9 strany":.6,"KDU-\u010CSL":5,Zelen\u00ED:2.7,Trikol\u00F3ra:1.1,Svobodn\u00ED:2.8,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2023-07","pollster:id":"Median",middle_date:"2023-07-20",ANO:33,ODS:15,Pir\u00E1ti:12,STAN:6.5,SPD:8,"TOP 09":5.5,KS\u010CM:3,SOCDEM:5,PRO:1.5,P\u0159\u00EDsaha:3,"jin\xE9 strany":1.5,"KDU-\u010CSL":4,Zelen\u00ED:1.5,Trikol\u00F3ra:null,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2023-06","pollster:id":"Median",middle_date:"2023-06-21",ANO:35.5,ODS:14,Pir\u00E1ti:11,STAN:5.5,SPD:10,"TOP 09":5,KS\u010CM:2.5,SOCDEM:4,PRO:1.5,P\u0159\u00EDsaha:2.5,"jin\xE9 strany":1.5,"KDU-\u010CSL":2,Zelen\u00ED:2.5,Trikol\u00F3ra:2.5,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2023-05","pollster:id":"Kantar",middle_date:"2023-05-24",ANO:33.5,ODS:17,Pir\u00E1ti:11.5,STAN:6.5,SPD:8,"TOP 09":3.5,KS\u010CM:3.5,SOCDEM:3,PRO:2,P\u0159\u00EDsaha:2.5,"jin\xE9 strany":3,"KDU-\u010CSL":4,Zelen\u00ED:2,Trikol\u00F3ra:null,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2023-05","pollster:id":"STEM",middle_date:"2023-05-23",ANO:33.5,ODS:14.6,Pir\u00E1ti:10.8,STAN:5.8,SPD:9.3,"TOP 09":4.7,KS\u010CM:3.8,SOCDEM:4.1,PRO:1.2,P\u0159\u00EDsaha:2.9,"jin\xE9 strany":.2,"KDU-\u010CSL":3.4,Zelen\u00ED:2.3,Trikol\u00F3ra:1.4,Svobodn\u00ED:2.2,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2023-05","pollster:id":"Median",middle_date:"2023-05-17",ANO:34.5,ODS:15,Pir\u00E1ti:10.5,STAN:6,SPD:8.5,"TOP 09":5.5,KS\u010CM:3.5,SOCDEM:4,PRO:null,P\u0159\u00EDsaha:2,"jin\xE9 strany":3,"KDU-\u010CSL":4,Zelen\u00ED:null,Trikol\u00F3ra:2.5,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2023-04","pollster:id":"Kantar",middle_date:"2023-04-26",ANO:30.5,ODS:17,Pir\u00E1ti:11,STAN:6,SPD:9,"TOP 09":5,KS\u010CM:2.5,SOCDEM:5.5,PRO:2,P\u0159\u00EDsaha:2.5,"jin\xE9 strany":2,"KDU-\u010CSL":5,Zelen\u00ED:2,Trikol\u00F3ra:null,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2023-04","pollster:id":"Median",middle_date:"2023-04-16",ANO:31,ODS:15,Pir\u00E1ti:10.5,STAN:7.5,SPD:8.5,"TOP 09":4.5,KS\u010CM:4,SOCDEM:4,PRO:null,P\u0159\u00EDsaha:2,"jin\xE9 strany":4,"KDU-\u010CSL":5.5,Zelen\u00ED:2,Trikol\u00F3ra:1.5,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2023-03","pollster:id":"Kantar",middle_date:"2023-03-28",ANO:29.5,ODS:20,Pir\u00E1ti:11,STAN:5.5,SPD:8,"TOP 09":4,KS\u010CM:2.5,SOCDEM:5,PRO:3,P\u0159\u00EDsaha:3.5,"jin\xE9 strany":5,"KDU-\u010CSL":3,Zelen\u00ED:null,Trikol\u00F3ra:null,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2023-03","pollster:id":"Median",middle_date:"2023-03-18",ANO:34.5,ODS:15.5,Pir\u00E1ti:8.5,STAN:8,SPD:10,"TOP 09":5,KS\u010CM:3,SOCDEM:4,PRO:null,P\u0159\u00EDsaha:2,"jin\xE9 strany":1.5,"KDU-\u010CSL":4,Zelen\u00ED:2,Trikol\u00F3ra:3,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2023-02","pollster:id":"Median",middle_date:"2023-02-23",ANO:32,ODS:14.5,Pir\u00E1ti:11.5,STAN:7,SPD:9.5,"TOP 09":5,KS\u010CM:3.5,SOCDEM:5,PRO:null,P\u0159\u00EDsaha:2.5,"jin\xE9 strany":2.5,"KDU-\u010CSL":3.5,Zelen\u00ED:2,Trikol\u00F3ra:1.5,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2023-02","pollster:id":"Kantar",middle_date:"2023-02-22",ANO:29.5,ODS:21.5,Pir\u00E1ti:9,STAN:7,SPD:8.5,"TOP 09":5,KS\u010CM:2,SOCDEM:4.5,PRO:null,P\u0159\u00EDsaha:2.5,"jin\xE9 strany":6.5,"KDU-\u010CSL":4,Zelen\u00ED:null,Trikol\u00F3ra:null,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2022-12","pollster:id":"STEM",middle_date:"2022-12-02",ANO:30.8,ODS:13.9,Pir\u00E1ti:9.4,STAN:6.4,SPD:12.4,"TOP 09":4.6,KS\u010CM:4.2,SOCDEM:4,PRO:null,P\u0159\u00EDsaha:null,"jin\xE9 strany":9.5,"KDU-\u010CSL":4.9,Zelen\u00ED:null,Trikol\u00F3ra:null,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2022-10","pollster:id":"Kantar",middle_date:"2022-10-26",ANO:26.5,ODS:21.5,Pir\u00E1ti:11.5,STAN:6,SPD:11,"TOP 09":5.5,KS\u010CM:2.5,SOCDEM:3.5,PRO:null,P\u0159\u00EDsaha:2.5,"jin\xE9 strany":4,"KDU-\u010CSL":3.5,Zelen\u00ED:null,Trikol\u00F3ra:2,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2022-10","pollster:id":"Median",middle_date:"2022-10-16",ANO:31.5,ODS:13.5,Pir\u00E1ti:11,STAN:5.5,SPD:12,"TOP 09":5,KS\u010CM:2,SOCDEM:5.5,PRO:null,P\u0159\u00EDsaha:2,"jin\xE9 strany":2.5,"KDU-\u010CSL":6,Zelen\u00ED:2,Trikol\u00F3ra:1.5,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2022-09","pollster:id":"Kantar",middle_date:"2022-09-21",ANO:29.5,ODS:18,Pir\u00E1ti:9,STAN:7.5,SPD:11.5,"TOP 09":4,KS\u010CM:2,SOCDEM:2.5,PRO:null,P\u0159\u00EDsaha:4,"jin\xE9 strany":4,"KDU-\u010CSL":6,Zelen\u00ED:2,Trikol\u00F3ra:null,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2022-09","pollster:id":"Median",middle_date:"2022-09-15",ANO:30.5,ODS:16,Pir\u00E1ti:11,STAN:5.5,SPD:11.5,"TOP 09":6,KS\u010CM:2.5,SOCDEM:4.5,PRO:null,P\u0159\u00EDsaha:3,"jin\xE9 strany":2.5,"KDU-\u010CSL":2.5,Zelen\u00ED:2,Trikol\u00F3ra:2,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2022-09","pollster:id":"STEM",middle_date:"2022-09-04",ANO:30,ODS:14.2,Pir\u00E1ti:9.4,STAN:5,SPD:14.3,"TOP 09":5,KS\u010CM:null,SOCDEM:4,PRO:null,P\u0159\u00EDsaha:3.5,"jin\xE9 strany":10.2,"KDU-\u010CSL":4.5,Zelen\u00ED:null,Trikol\u00F3ra:null,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2022-08","pollster:id":"Kantar",middle_date:"2022-08-24",ANO:30.5,ODS:19.5,Pir\u00E1ti:8.5,STAN:6.5,SPD:11,"TOP 09":4.5,KS\u010CM:3.5,SOCDEM:3,PRO:null,P\u0159\u00EDsaha:3,"jin\xE9 strany":4,"KDU-\u010CSL":4,Zelen\u00ED:null,Trikol\u00F3ra:null,Svobodn\u00ED:2,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2022-08","pollster:id":"Median",middle_date:"2022-08-16",ANO:29,ODS:16,Pir\u00E1ti:11.5,STAN:4,SPD:14,"TOP 09":3.5,KS\u010CM:3.5,SOCDEM:5,PRO:null,P\u0159\u00EDsaha:3.5,"jin\xE9 strany":2.5,"KDU-\u010CSL":3.5,Zelen\u00ED:2,Trikol\u00F3ra:2,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2022-07","pollster:id":"STEM",middle_date:"2022-08-07",ANO:31.1,ODS:15.5,Pir\u00E1ti:9.3,STAN:5.5,SPD:11.9,"TOP 09":5.6,KS\u010CM:3.4,SOCDEM:4.8,PRO:null,P\u0159\u00EDsaha:3.3,"jin\xE9 strany":.7,"KDU-\u010CSL":3.4,Zelen\u00ED:2.5,Trikol\u00F3ra:1.4,Svobodn\u00ED:1.7,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2022-07","pollster:id":"Median",middle_date:"2022-07-20",ANO:30,ODS:15.5,Pir\u00E1ti:10.5,STAN:5.5,SPD:12.5,"TOP 09":5,KS\u010CM:2.5,SOCDEM:5,PRO:null,P\u0159\u00EDsaha:3,"jin\xE9 strany":1.5,"KDU-\u010CSL":4.5,Zelen\u00ED:2,Trikol\u00F3ra:2.5,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2022-06","pollster:id":"Median",middle_date:"2022-06-11",ANO:29,ODS:16.1,Pir\u00E1ti:11.8,STAN:4.8,SPD:12.5,"TOP 09":5.2,KS\u010CM:2.8,SOCDEM:5.6,PRO:null,P\u0159\u00EDsaha:2.2,"jin\xE9 strany":1.8,"KDU-\u010CSL":4.6,Zelen\u00ED:1.8,Trikol\u00F3ra:1.6,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2022-05","pollster:id":"Kantar",middle_date:"2022-05-24",ANO:28,ODS:22.5,Pir\u00E1ti:8.5,STAN:6.5,SPD:11,"TOP 09":4,KS\u010CM:2.5,SOCDEM:4.5,PRO:null,P\u0159\u00EDsaha:2,"jin\xE9 strany":5,"KDU-\u010CSL":3.5,Zelen\u00ED:2,Trikol\u00F3ra:null,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2022-05","pollster:id":"Median",middle_date:"2022-05-17",ANO:28.5,ODS:16.5,Pir\u00E1ti:9,STAN:8.5,SPD:11.5,"TOP 09":4.5,KS\u010CM:3,SOCDEM:5.5,PRO:null,P\u0159\u00EDsaha:3,"jin\xE9 strany":3,"KDU-\u010CSL":4.5,Zelen\u00ED:null,Trikol\u00F3ra:2.5,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2022-04","pollster:id":"Kantar",middle_date:"2022-04-18",ANO:27.5,ODS:26,Pir\u00E1ti:5,STAN:10,SPD:11,"TOP 09":3,KS\u010CM:2,SOCDEM:2.5,PRO:null,P\u0159\u00EDsaha:3,"jin\xE9 strany":3.5,"KDU-\u010CSL":4.5,Zelen\u00ED:2,Trikol\u00F3ra:null,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2022-03","pollster:id":"Kantar",middle_date:"2022-03-23",ANO:27.5,ODS:22.5,Pir\u00E1ti:7.5,STAN:10,SPD:9.5,"TOP 09":5,KS\u010CM:2.5,SOCDEM:2.5,PRO:null,P\u0159\u00EDsaha:3.5,"jin\xE9 strany":3.5,"KDU-\u010CSL":4,Zelen\u00ED:null,Trikol\u00F3ra:2,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2022-02","pollster:id":"Kantar",middle_date:"2022-02-23",ANO:25,ODS:21,Pir\u00E1ti:7.5,STAN:11,SPD:11.5,"TOP 09":6.5,KS\u010CM:2,SOCDEM:3,PRO:null,P\u0159\u00EDsaha:3,"jin\xE9 strany":4,"KDU-\u010CSL":5.5,Zelen\u00ED:null,Trikol\u00F3ra:null,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2021-11","pollster:id":"Kantar",middle_date:"2021-11-10",ANO:27,ODS:15.5,Pir\u00E1ti:8,STAN:13,SPD:9.5,"TOP 09":7,KS\u010CM:3.5,SOCDEM:4,PRO:null,P\u0159\u00EDsaha:2.5,"jin\xE9 strany":4,"KDU-\u010CSL":3.5,Zelen\u00ED:null,Trikol\u00F3ra:2.5,Svobodn\u00ED:null,"Voln\xFD blok":null,Motorist\u00E9:null},{"poll:identifier":"2021-10","pollster:id":"volby+STEM",middle_date:"2021-10-09",ANO:27.1,ODS:13.6,Pir\u00E1ti:9.5,STAN:6.1,SPD:9.6,"TOP 09":7.2,KS\u010CM:3.6,SOCDEM:4.7,PRO:null,P\u0159\u00EDsaha:4.7,"jin\xE9 strany":1.9,"KDU-\u010CSL":6.9,Zelen\u00ED:1,Trikol\u00F3ra:2.8,Svobodn\u00ED:null,"Voln\xFD blok":1.3,Motorist\u00E9:null}],kl=[{names:["ANO","ODS","Pir\xE1ti","STAN","SPD","TOP 09","KS\u010CM","SOCDEM","PRO","P\u0159\xEDsaha","jin\xE9 strany","KDU-\u010CSL","Zelen\xED","Trikol\xF3ra","Svobodn\xED","Voln\xFD blok","Motorist\xE9"]}];const hl={data:function(){return{polls:ml,candidates:kl[0].names}},methods:{formatDate(n){return new Date(n).toLocaleDateString("cs")}}},Nl={class:"container"},Al=l("h3",null,[D(" Zve\u0159ejn\u011Bn\xE9 pr\u016Fzkumy "),l("small",null,"Strany")],-1),Kl={class:"table-responsive"},vl={class:"table table-striped table-hover table-condensed"},fl=l("th",null,null,-1),yl=l("th",null,[D("Datum\xA0"),l("small",null,"(st\u0159ed)")],-1);function El(n,u,a,P,d,T){const o=K;return i(),e("div",Nl,[Al,l("div",Kl,[l("table",vl,[l("thead",null,[l("tr",null,[fl,yl,(i(!0),e(O,null,_(n.candidates,(t,s)=>(i(),e("th",{key:s},[l("small",null,r(t),1)]))),128))])]),l("tbody",null,[(i(!0),e(O,null,_(n.polls,(t,s)=>(i(),e("tr",{key:s},[l("th",null,r(t["pollster:id"]),1),l("td",null,r(T.formatDate(t.middle_date)),1),(i(!0),e(O,null,_(n.candidates,(c,M)=>(i(),e("td",{key:M},[S(o,{decNumber:t[c]},null,8,["decNumber"])]))),128))]))),128))])])])])}var Cl=p(hl,[["render",El]]),Ll=[{"poll:identifier":"2024-06","pollster:id":"Kantar",middle_date:"2024-06-15",ANO:34.5,SPOLU:22.5,Pir\u00E1ti:9,STAN:8.5,SPD:6,"jin\xE9 strany":4.5,P\u0159\u00EDsaha:4.5,KS\u010CM:3,SOCDEM:2.5,Zelen\u00ED:2.5,Svobodn\u00ED:2.5,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2024-04","pollster:id":"Kantar",middle_date:"2024-05-01",ANO:32.5,SPOLU:22.5,Pir\u00E1ti:11,STAN:7.5,SPD:9,"jin\xE9 strany":6,P\u0159\u00EDsaha:3.5,KS\u010CM:2.5,SOCDEM:3,Zelen\u00ED:2.5,Svobodn\u00ED:null,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2024-03","pollster:id":"Kantar",middle_date:"2024-03-27",ANO:35.5,SPOLU:21.5,Pir\u00E1ti:11,STAN:6.5,SPD:8,"jin\xE9 strany":2.5,P\u0159\u00EDsaha:2.5,KS\u010CM:3,SOCDEM:3,Zelen\u00ED:2,Svobodn\u00ED:2.5,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:2},{"poll:identifier":"2024-02","pollster:id":"Kantar",middle_date:"2024-02-21",ANO:39,SPOLU:20,Pir\u00E1ti:10,STAN:7.5,SPD:9,"jin\xE9 strany":5.5,P\u0159\u00EDsaha:null,KS\u010CM:2.5,SOCDEM:2.5,Zelen\u00ED:2,Svobodn\u00ED:2,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2024-01","pollster:id":"Kantar",middle_date:"2024-01-24",ANO:35.5,SPOLU:22.5,Pir\u00E1ti:10,STAN:7,SPD:10,"jin\xE9 strany":2,P\u0159\u00EDsaha:3.5,KS\u010CM:3,SOCDEM:4,Zelen\u00ED:null,Svobodn\u00ED:2.5,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2023-11","pollster:id":"Kantar",middle_date:"2023-11-22",ANO:34.5,SPOLU:18.5,Pir\u00E1ti:12,STAN:7,SPD:10,"jin\xE9 strany":2,P\u0159\u00EDsaha:2.5,KS\u010CM:2.5,SOCDEM:4,Zelen\u00ED:3,Svobodn\u00ED:2,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:2,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2023-10","pollster:id":"Kantar",middle_date:"2023-10-25",ANO:33,SPOLU:21.5,Pir\u00E1ti:10.5,STAN:7,SPD:10.5,"jin\xE9 strany":6,P\u0159\u00EDsaha:2.5,KS\u010CM:3.5,SOCDEM:3.5,Zelen\u00ED:null,Svobodn\u00ED:null,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:2},{"poll:identifier":"2023-09","pollster:id":"Kantar",middle_date:"2023-09-20",ANO:33.5,SPOLU:19.5,Pir\u00E1ti:8.5,STAN:7.5,SPD:9.5,"jin\xE9 strany":3,P\u0159\u00EDsaha:4,KS\u010CM:3,SOCDEM:3.5,Zelen\u00ED:2,Svobodn\u00ED:3,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:3},{"poll:identifier":"2023-05","pollster:id":"Kantar",middle_date:"2023-05-24",ANO:33.5,SPOLU:24,Pir\u00E1ti:11.5,STAN:6,SPD:8,"jin\xE9 strany":3,P\u0159\u00EDsaha:2.5,KS\u010CM:3.5,SOCDEM:3.5,Zelen\u00ED:2.5,Svobodn\u00ED:null,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:2},{"poll:identifier":"2023-04","pollster:id":"Kantar",middle_date:"2023-04-26",ANO:31,SPOLU:25,Pir\u00E1ti:11.5,STAN:6.5,SPD:9.5,"jin\xE9 strany":2,P\u0159\u00EDsaha:2.5,KS\u010CM:2.5,SOCDEM:5.5,Zelen\u00ED:2,Svobodn\u00ED:null,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:2},{"poll:identifier":"2023-03","pollster:id":"Kantar",middle_date:"2023-03-28",ANO:29.5,SPOLU:27.5,Pir\u00E1ti:10.5,STAN:5.5,SPD:8,"jin\xE9 strany":5,P\u0159\u00EDsaha:3.5,KS\u010CM:2.5,SOCDEM:5,Zelen\u00ED:null,Svobodn\u00ED:null,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:3},{"poll:identifier":"2023-02","pollster:id":"Kantar",middle_date:"2023-02-22",ANO:30.5,SPOLU:31,Pir\u00E1ti:null,STAN:null,SPD:9,"jin\xE9 strany":7,P\u0159\u00EDsaha:2.5,KS\u010CM:2,SOCDEM:5,Zelen\u00ED:null,Svobodn\u00ED:null,"Pir\xE1ti+STAN":13,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-10","pollster:id":"Kantar",middle_date:"2022-10-26",ANO:28,SPOLU:31.5,Pir\u00E1ti:null,STAN:null,SPD:11.5,"jin\xE9 strany":3.5,P\u0159\u00EDsaha:2.5,KS\u010CM:3,SOCDEM:4,Zelen\u00ED:null,Svobodn\u00ED:null,"Pir\xE1ti+STAN":14,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:2,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-09","pollster:id":"Kantar",middle_date:"2022-09-21",ANO:31.5,SPOLU:28.5,Pir\u00E1ti:null,STAN:null,SPD:12,"jin\xE9 strany":5,P\u0159\u00EDsaha:4.5,KS\u010CM:2,SOCDEM:2.5,Zelen\u00ED:2,Svobodn\u00ED:null,"Pir\xE1ti+STAN":12,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-08","pollster:id":"Kantar",middle_date:"2022-08-24",ANO:32,SPOLU:29,Pir\u00E1ti:null,STAN:null,SPD:11,"jin\xE9 strany":7,P\u0159\u00EDsaha:3.5,KS\u010CM:4,SOCDEM:3.5,Zelen\u00ED:null,Svobodn\u00ED:null,"Pir\xE1ti+STAN":10,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-05","pollster:id":"Kantar",middle_date:"2022-05-24",ANO:29.5,SPOLU:28.5,Pir\u00E1ti:null,STAN:null,SPD:11.5,"jin\xE9 strany":5.5,P\u0159\u00EDsaha:2.5,KS\u010CM:2.5,SOCDEM:5,Zelen\u00ED:2.5,Svobodn\u00ED:null,"Pir\xE1ti+STAN":12.5,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-04","pollster:id":"Kantar",middle_date:"2022-04-18",ANO:28.5,SPOLU:33.5,Pir\u00E1ti:null,STAN:null,SPD:11,"jin\xE9 strany":4.5,P\u0159\u00EDsaha:3,KS\u010CM:2,SOCDEM:4,Zelen\u00ED:2,Svobodn\u00ED:null,"Pir\xE1ti+STAN":11.5,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-03","pollster:id":"Kantar",middle_date:"2022-03-23",ANO:29,SPOLU:31.5,Pir\u00E1ti:null,STAN:null,SPD:9.5,"jin\xE9 strany":2.5,P\u0159\u00EDsaha:4,KS\u010CM:2.5,SOCDEM:3,Zelen\u00ED:null,Svobodn\u00ED:null,"Pir\xE1ti+STAN":15.5,"Trikol\xF3ra+S+S":2.5,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-03","pollster:id":"Median",middle_date:"2022-03-17",ANO:27.5,SPOLU:26.5,Pir\u00E1ti:null,STAN:null,SPD:10,"jin\xE9 strany":4,P\u0159\u00EDsaha:3,KS\u010CM:4,SOCDEM:5.5,Zelen\u00ED:null,Svobodn\u00ED:null,"Pir\xE1ti+STAN":16.5,"Trikol\xF3ra+S+S":3,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-02","pollster:id":"Kantar",middle_date:"2022-02-23",ANO:27.5,SPOLU:32.5,Pir\u00E1ti:null,STAN:null,SPD:12,"jin\xE9 strany":2,P\u0159\u00EDsaha:3.5,KS\u010CM:2,SOCDEM:3,Zelen\u00ED:null,Svobodn\u00ED:null,"Pir\xE1ti+STAN":14.5,"Trikol\xF3ra+S+S":3,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2021-11","pollster:id":"Median",middle_date:"2021-11-16",ANO:29.5,SPOLU:26,Pir\u00E1ti:null,STAN:null,SPD:8.5,"jin\xE9 strany":3.5,P\u0159\u00EDsaha:3,KS\u010CM:4.5,SOCDEM:4.5,Zelen\u00ED:null,Svobodn\u00ED:null,"Pir\xE1ti+STAN":16.5,"Trikol\xF3ra+S+S":4,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2021-11","pollster:id":"Kantar",middle_date:"2021-11-10",ANO:28,SPOLU:28,Pir\u00E1ti:null,STAN:null,SPD:9.5,"jin\xE9 strany":3,P\u0159\u00EDsaha:3.5,KS\u010CM:3.5,SOCDEM:4,Zelen\u00ED:null,Svobodn\u00ED:null,"Pir\xE1ti+STAN":17,"Trikol\xF3ra+S+S":3.5,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2021-10","pollster:id":"volby",middle_date:"2021-10-09",ANO:27.1,SPOLU:27.8,Pir\u00E1ti:null,STAN:null,SPD:9.6,"jin\xE9 strany":1.9,P\u0159\u00EDsaha:4.7,KS\u010CM:3.6,SOCDEM:4.7,Zelen\u00ED:1,Svobodn\u00ED:null,"Pir\xE1ti+STAN":15.6,"Trikol\xF3ra+S+S":2.8,Trikol\u00F3ra:null,"Voln\xFD blok":1.3,PRO:null}],jl=[{names:["ANO","SPOLU","Pir\xE1ti","STAN","SPD","jin\xE9 strany","P\u0159\xEDsaha","KS\u010CM","SOCDEM","Zelen\xED","Svobodn\xED","Pir\xE1ti+STAN","Trikol\xF3ra+S+S","Trikol\xF3ra","Voln\xFD blok","PRO"]}];const Vl={data:function(){return{polls:Ll,candidates:jl[0].names}},methods:{formatDate(n){return new Date(n).toLocaleDateString("cs")}}},Ul={class:"container"},Rl=l("h3",null,[D(" Zve\u0159ejn\u011Bn\xE9 pr\u016Fzkumy "),l("small",null,"Koalice")],-1),Zl={class:"table-responsive"},$l={class:"table table-striped table-hover table-condensed"},gl=l("th",null,null,-1),xl=l("th",null,[D("Datum\xA0"),l("small",null,"(st\u0159ed)")],-1);function Il(n,u,a,P,d,T){const o=K;return i(),e("div",Ul,[Rl,l("div",Zl,[l("table",$l,[l("thead",null,[l("tr",null,[gl,xl,(i(!0),e(O,null,_(n.candidates,(t,s)=>(i(),e("th",{key:s},[l("small",null,r(t),1)]))),128))])]),l("tbody",null,[(i(!0),e(O,null,_(n.polls,(t,s)=>(i(),e("tr",{key:s},[l("th",null,r(t["pollster:id"]),1),l("td",null,r(T.formatDate(t.middle_date)),1),(i(!0),e(O,null,_(n.candidates,(c,M)=>(i(),e("td",{key:M},[S(o,{decNumber:t[c]},null,8,["decNumber"])]))),128))]))),128))])])])])}var wl=p(Vl,[["render",Il]]);const Fl="shares/2024-07-10T10:41:02.270404_psp.png";var zl={filename:Fl};const Bl=L({setup(n,{expose:u}){u();const a="https://mandaty.cz/",P="493242628099686";j({title:"Mand\xE1ty.cz",meta:[{hid:"og:name",property:"og:image",content:a+zl.filename},{hid:"og:url",property:"og:url",content:a},{hid:"og:type",property:"og:type",content:"website"},{hid:"og:title",property:"og:title",content:"Mand\xE1ty.cz"},{hid:"og:description",property:"og:description",content:"V\xFDvoj volebn\xEDch model\u016F dle pr\u016Fzkum\u016F ve\u0159ejn\xE9ho m\xEDn\u011Bn\xED"},{hid:"fb:app_id",property:"fb:app_id",content:P}],link:[{rel:"icon",type:"image/x-icon",href:a+"favicon.svg"}]});const d={BASE_URL:a,FB_APP_ID:P};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}),Hl={class:"container"},ql=l("h1",{class:"pt-4"},"Sn\u011Bmovna 2021-2025",-1),Wl=l("hr",null,null,-1),Gl=l("hr",null,null,-1),Jl=l("hr",null,null,-1),Ql=l("hr",null,null,-1);function Xl(n,u,a,P,d,T){const o=f,t=tl,s=bl,c=Cl,M=wl;return i(),e("div",Hl,[S(o),ql,Wl,S(t),Gl,S(s),Jl,S(c),Ql,S(M)])}var en=p(Bl,[["render",Xl]]);export{en as default};
