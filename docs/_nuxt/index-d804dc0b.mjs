import{_ as f}from"./ChartLinks-0e9ddd68.mjs";import{_ as p,o as e,c as i,a as l,t as a,F as O,r as _,e as c,p as b,f as h,n as y,g as E,h as M,b as S,i as N,j as C,k as L,u as j}from"./entry-57a97b5a.mjs";import{_ as v}from"./DecNumber-fccd2ff2.mjs";const V=[{party:"ANO",median:84,lo:70,hi:97,in:1,id:"ANO",name:"Hnut\xED ANO",abbreviation:"ANO",color:"#261060",needs:.05,mps:72,seats:83,difference:11},{party:"SPOLU",median:51,lo:38,hi:64,in:.999,id:"SPOLU",name:"Koalice ODS, KDU-\u010CSL, TOP 09",abbreviation:"SPOLU",color:"#004494",needs:.11,mps:71,seats:51,difference:-20},{party:"Pir\xE1ti",median:24,lo:16,hi:32,in:.995,id:"Pir\xE1ti",name:"\u010Cesk\xE1 pir\xE1tsk\xE1 strana",abbreviation:"Pir\xE1ti",color:"#000000",needs:.05,mps:4,seats:26,difference:22},{party:"SPD",median:22,lo:13,hi:31,in:.981,id:"SPD",name:"Svoboda a p\u0159\xEDm\xE1 demokracie - Tomio Okamura",abbreviation:"SPD",color:"#EA2329",needs:.05,mps:20,seats:22,difference:2},{party:"STAN",median:17,lo:0,hi:25,in:.88,id:"STAN",name:"Starostov\xE9 a nez\xE1visl\xED",abbreviation:"STAN",color:"#5D8C00",needs:.05,mps:33,seats:18,difference:-15},{party:"SOCDEM",median:0,lo:0,hi:12,in:.159,id:"SOCDEM",name:"\u010Cesk\xE1 strana soci\xE1ln\u011B demokratick\xE1",abbreviation:"SOCDEM",color:"#F07D00",needs:.05,mps:0,seats:0,difference:0},{party:"KS\u010CM",median:0,lo:0,hi:11,in:.136,id:"KS\u010CM",name:"Komunistick\xE1 strana \u010Cech a Moravy",abbreviation:"KS\u010CM",color:"#8C0000",needs:.05,mps:0,seats:0,difference:0}],U="2024-02-21";var A={data:V,date:U};const R={data:function(){return{seats:A.data,date:new Date(A.date).toLocaleDateString("cs-CZ")}},filters:{abs(n){return Math.abs(n)}}},k=n=>(b("data-v-afe46c60"),n=n(),h(),n),Z=c("Po\u010Det mand\xE1t\u016F "),$=k(()=>l("small",null,"s odhadem chyby",-1)),g=c(),x={class:"badge"},I={class:"container"},w={class:"row"},z={class:"card text-center mb-2"},F={class:"card-header"},B={class:"card-body"},H={class:"row"},W=k(()=>l("div",{class:"col-3"},null,-1)),q={class:"col-6 text-center"},G={class:"number"},J={key:0},Q={class:"text-success"},X={key:1},Y={class:"text-danger"},ll={key:2},nl=k(()=>l("span",{class:"text-muted"},null,-1)),el=[nl],il={class:"lo-hi"};function ol(n,u,r,P,d,D){return e(),i("div",null,[l("h3",null,[Z,$,g,l("span",x,a(n.date),1)]),l("div",I,[l("div",w,[(e(!0),i(O,null,_(n.seats,(o,t)=>(e(),i("div",{key:t,class:"col-xl-3 col-lg-4 col-sm-6"},[l("div",z,[l("div",F,[l("h4",{style:y({color:o.color})},a(o.abbreviation),5)]),l("div",B,[l("div",H,[W,l("div",q,[l("div",null,[l("span",G,a(o.seats),1),o.difference>0?(e(),i("span",J,[l("span",Q,"+"+a(o.difference),1)])):o.difference<0?(e(),i("span",X,[l("span",Y,a(o.difference),1)])):(e(),i("span",ll,el))])])]),l("div",il,[l("strong",null,a(o.lo)+" - "+a(o.hi),1)])])])]))),128))])])])}var tl=p(R,[["render",ol],["__scopeId","data-v-afe46c60"]]);const al={},rl=n=>(b("data-v-6d68b17d"),n=n(),h(),n),dl={id:"image-wrapper"},sl=rl(()=>l("img",{src:E,class:"image-small"},null,-1)),Sl=[sl];function ul(n,u){return e(),i("div",dl,Sl)}var K=p(al,[["render",ul],["__scopeId","data-v-6d68b17d"]]),Pl=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"}));const Ol={name:"SnemovnaPollsChart",data(){return{isMobile:!1}},mounted(){this.isMobile=window.innerWidth<666,console.log("isMobile:",this.isMobile)},components:{SnemovnaPollsPictureChart:()=>M(()=>Promise.resolve().then(function(){return Pl}),void 0),SnemovnaPollsInteractiveChart:()=>M(()=>import("./entry-57a97b5a.mjs").then(function(n){return n.S}),["entry-57a97b5a.mjs","entry.3bb39d19.css"])}},_l=n=>(b("data-v-c7c0d9ea"),n=n(),h(),n),cl={id:"image-wrapper"},Dl=_l(()=>l("h3",null,[c(" V\xFDvoj volebn\xEDch model\u016F "),l("small",null,"dle pr\u016Fzkum\u016F ve\u0159ejn\xE9ho m\xEDn\u011Bn\xED ")],-1)),pl={key:0},Tl={key:1};function ml(n,u,r,P,d,D){const o=K,t=C;return e(),i("div",cl,[Dl,d.isMobile?(e(),i("div",pl,[S(o)])):N("",!0),d.isMobile?N("",!0):(e(),i("div",Tl,[S(t)]))])}var bl=p(Ol,[["render",ml],["__scopeId","data-v-c7c0d9ea"]]),hl=[{"poll:identifier":"2024-02","pollster:id":"Kantar",middle_date:"2024-02-21",ANO:38.5,ODS:14.5,Pir\u00E1ti:9.5,"jin\xE9 strany":9.5,SPD:9,STAN:7,"TOP 09":5,SOCDEM:2.5,KS\u010CM:2.5,"KDU-\u010CSL":2,P\u0159\u00EDsaha:null,Zelen\u00ED:null,PRO:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2024-02","pollster:id":"Median",middle_date:"2024-02-17",ANO:31,ODS:12.5,Pir\u00E1ti:11,"jin\xE9 strany":3,SPD:9.5,STAN:9,"TOP 09":5.5,SOCDEM:4.5,KS\u010CM:4,"KDU-\u010CSL":3,P\u0159\u00EDsaha:3,Zelen\u00ED:2,PRO:2,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2024-01","pollster:id":"Kantar",middle_date:"2024-01-24",ANO:35,ODS:15.5,Pir\u00E1ti:9.5,"jin\xE9 strany":2.5,SPD:9.5,STAN:6.5,"TOP 09":5,SOCDEM:4,KS\u010CM:3,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:3.5,Zelen\u00ED:null,PRO:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:2.5},{"poll:identifier":"2024-01","pollster:id":"Median",middle_date:"2024-01-23",ANO:31.5,ODS:12,Pir\u00E1ti:13,"jin\xE9 strany":1.5,SPD:10.5,STAN:7,"TOP 09":5.5,SOCDEM:4,KS\u010CM:4.5,"KDU-\u010CSL":3,P\u0159\u00EDsaha:3,Zelen\u00ED:1.5,PRO:3,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2024-01","pollster:id":"STEM",middle_date:"2024-01-22",ANO:33.4,ODS:13.2,Pir\u00E1ti:11.3,"jin\xE9 strany":1.2,SPD:10,STAN:7,"TOP 09":5,SOCDEM:3.1,KS\u010CM:4.8,"KDU-\u010CSL":2.7,P\u0159\u00EDsaha:2.6,Zelen\u00ED:2.5,PRO:null,Trikol\u00F3ra:1.4,"Voln\xFD blok":null,Svobodn\u00ED:1.7},{"poll:identifier":"2023-12","pollster:id":"Median",middle_date:"2023-12-14",ANO:35,ODS:13,Pir\u00E1ti:10.5,"jin\xE9 strany":2,SPD:9,STAN:6.5,"TOP 09":6,SOCDEM:4.5,KS\u010CM:4.5,"KDU-\u010CSL":2.5,P\u0159\u00EDsaha:2.5,Zelen\u00ED:1.5,PRO:2.5,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2023-11","pollster:id":"IPSOS",middle_date:"2023-11-24",ANO:34.3,ODS:13.3,Pir\u00E1ti:10.5,"jin\xE9 strany":1.1,SPD:9.2,STAN:6.6,"TOP 09":5.1,SOCDEM:4.1,KS\u010CM:2.5,"KDU-\u010CSL":4.3,P\u0159\u00EDsaha:2.8,Zelen\u00ED:1,PRO:1.8,Trikol\u00F3ra:1.2,"Voln\xFD blok":null,Svobodn\u00ED:2.2},{"poll:identifier":"2023-11","pollster:id":"Kantar",middle_date:"2023-11-22",ANO:34.5,ODS:12.5,Pir\u00E1ti:11.5,"jin\xE9 strany":2,SPD:10,STAN:7,"TOP 09":5,SOCDEM:3.5,KS\u010CM:2.5,"KDU-\u010CSL":2,P\u0159\u00EDsaha:2.5,Zelen\u00ED:3,PRO:null,Trikol\u00F3ra:2,"Voln\xFD blok":null,Svobodn\u00ED:2},{"poll:identifier":"2023-11","pollster:id":"Median",middle_date:"2023-11-20",ANO:34.5,ODS:15.5,Pir\u00E1ti:11,"jin\xE9 strany":1,SPD:8.5,STAN:6,"TOP 09":5.5,SOCDEM:4.5,KS\u010CM:3.5,"KDU-\u010CSL":4,P\u0159\u00EDsaha:1.5,Zelen\u00ED:1.5,PRO:1.5,Trikol\u00F3ra:1.5,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2023-11","pollster:id":"STEM",middle_date:"2023-11-08",ANO:33.2,ODS:11.6,Pir\u00E1ti:10.2,"jin\xE9 strany":.4,SPD:12,STAN:6.4,"TOP 09":5.2,SOCDEM:4.5,KS\u010CM:3,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:2.9,Zelen\u00ED:1.6,PRO:1.9,Trikol\u00F3ra:1.2,"Voln\xFD blok":null,Svobodn\u00ED:2.3},{"poll:identifier":"2023-10","pollster:id":"Kantar",middle_date:"2023-10-25",ANO:32.5,ODS:15.5,Pir\u00E1ti:10.5,"jin\xE9 strany":5.5,SPD:10.5,STAN:7,"TOP 09":4.5,SOCDEM:3.5,KS\u010CM:3.5,"KDU-\u010CSL":2.5,P\u0159\u00EDsaha:2.5,Zelen\u00ED:null,PRO:2,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2023-10","pollster:id":"Median",middle_date:"2023-10-17",ANO:35,ODS:13.5,Pir\u00E1ti:9,"jin\xE9 strany":3,SPD:10.5,STAN:6,"TOP 09":6,SOCDEM:3.5,KS\u010CM:3,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:3,Zelen\u00ED:1.5,PRO:2.5,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2023-09","pollster:id":"Kantar",middle_date:"2023-09-20",ANO:33.5,ODS:12,Pir\u00E1ti:8.5,"jin\xE9 strany":2,SPD:9.5,STAN:7.5,"TOP 09":5,SOCDEM:3.5,KS\u010CM:3,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:4,Zelen\u00ED:2,PRO:3,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:3},{"poll:identifier":"2023-09","pollster:id":"Median",middle_date:"2023-09-18",ANO:34,ODS:13,Pir\u00E1ti:11.5,"jin\xE9 strany":3,SPD:9.5,STAN:6.5,"TOP 09":5.5,SOCDEM:4,KS\u010CM:4.5,"KDU-\u010CSL":4,P\u0159\u00EDsaha:null,Zelen\u00ED:2,PRO:2.5,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2023-09","pollster:id":"STEM",middle_date:"2023-09-12",ANO:30.8,ODS:13.1,Pir\u00E1ti:9.6,"jin\xE9 strany":.6,SPD:10.9,STAN:5.3,"TOP 09":5.4,SOCDEM:4,KS\u010CM:4.3,"KDU-\u010CSL":5,P\u0159\u00EDsaha:3.2,Zelen\u00ED:2.7,PRO:1.2,Trikol\u00F3ra:1.1,"Voln\xFD blok":null,Svobodn\u00ED:2.8},{"poll:identifier":"2023-07","pollster:id":"Median",middle_date:"2023-07-20",ANO:33,ODS:15,Pir\u00E1ti:12,"jin\xE9 strany":1.5,SPD:8,STAN:6.5,"TOP 09":5.5,SOCDEM:5,KS\u010CM:3,"KDU-\u010CSL":4,P\u0159\u00EDsaha:3,Zelen\u00ED:1.5,PRO:1.5,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2023-06","pollster:id":"Median",middle_date:"2023-06-21",ANO:35.5,ODS:14,Pir\u00E1ti:11,"jin\xE9 strany":1.5,SPD:10,STAN:5.5,"TOP 09":5,SOCDEM:4,KS\u010CM:2.5,"KDU-\u010CSL":2,P\u0159\u00EDsaha:2.5,Zelen\u00ED:2.5,PRO:1.5,Trikol\u00F3ra:2.5,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2023-05","pollster:id":"Kantar",middle_date:"2023-05-24",ANO:33.5,ODS:17,Pir\u00E1ti:11.5,"jin\xE9 strany":3,SPD:8,STAN:6.5,"TOP 09":3.5,SOCDEM:3,KS\u010CM:3.5,"KDU-\u010CSL":4,P\u0159\u00EDsaha:2.5,Zelen\u00ED:2,PRO:2,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2023-05","pollster:id":"STEM",middle_date:"2023-05-23",ANO:33.5,ODS:14.6,Pir\u00E1ti:10.8,"jin\xE9 strany":.2,SPD:9.3,STAN:5.8,"TOP 09":4.7,SOCDEM:4.1,KS\u010CM:3.8,"KDU-\u010CSL":3.4,P\u0159\u00EDsaha:2.9,Zelen\u00ED:2.3,PRO:1.2,Trikol\u00F3ra:1.4,"Voln\xFD blok":null,Svobodn\u00ED:2.2},{"poll:identifier":"2023-05","pollster:id":"Median",middle_date:"2023-05-17",ANO:34.5,ODS:15,Pir\u00E1ti:10.5,"jin\xE9 strany":3,SPD:8.5,STAN:6,"TOP 09":5.5,SOCDEM:4,KS\u010CM:3.5,"KDU-\u010CSL":4,P\u0159\u00EDsaha:2,Zelen\u00ED:null,PRO:null,Trikol\u00F3ra:2.5,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2023-04","pollster:id":"Kantar",middle_date:"2023-04-26",ANO:30.5,ODS:17,Pir\u00E1ti:11,"jin\xE9 strany":2,SPD:9,STAN:6,"TOP 09":5,SOCDEM:5.5,KS\u010CM:2.5,"KDU-\u010CSL":5,P\u0159\u00EDsaha:2.5,Zelen\u00ED:2,PRO:2,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2023-04","pollster:id":"Median",middle_date:"2023-04-16",ANO:31,ODS:15,Pir\u00E1ti:10.5,"jin\xE9 strany":4,SPD:8.5,STAN:7.5,"TOP 09":4.5,SOCDEM:4,KS\u010CM:4,"KDU-\u010CSL":5.5,P\u0159\u00EDsaha:2,Zelen\u00ED:2,PRO:null,Trikol\u00F3ra:1.5,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2023-03","pollster:id":"Kantar",middle_date:"2023-03-28",ANO:29.5,ODS:20,Pir\u00E1ti:11,"jin\xE9 strany":5,SPD:8,STAN:5.5,"TOP 09":4,SOCDEM:5,KS\u010CM:2.5,"KDU-\u010CSL":3,P\u0159\u00EDsaha:3.5,Zelen\u00ED:null,PRO:3,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2023-03","pollster:id":"Median",middle_date:"2023-03-18",ANO:34.5,ODS:15.5,Pir\u00E1ti:8.5,"jin\xE9 strany":1.5,SPD:10,STAN:8,"TOP 09":5,SOCDEM:4,KS\u010CM:3,"KDU-\u010CSL":4,P\u0159\u00EDsaha:2,Zelen\u00ED:2,PRO:null,Trikol\u00F3ra:3,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2023-02","pollster:id":"Median",middle_date:"2023-02-23",ANO:32,ODS:14.5,Pir\u00E1ti:11.5,"jin\xE9 strany":2.5,SPD:9.5,STAN:7,"TOP 09":5,SOCDEM:5,KS\u010CM:3.5,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:2.5,Zelen\u00ED:2,PRO:null,Trikol\u00F3ra:1.5,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2023-02","pollster:id":"Kantar",middle_date:"2023-02-22",ANO:29.5,ODS:21.5,Pir\u00E1ti:9,"jin\xE9 strany":6.5,SPD:8.5,STAN:7,"TOP 09":5,SOCDEM:4.5,KS\u010CM:2,"KDU-\u010CSL":4,P\u0159\u00EDsaha:2.5,Zelen\u00ED:null,PRO:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2022-12","pollster:id":"STEM",middle_date:"2022-12-02",ANO:30.8,ODS:13.9,Pir\u00E1ti:9.4,"jin\xE9 strany":9.5,SPD:12.4,STAN:6.4,"TOP 09":4.6,SOCDEM:4,KS\u010CM:4.2,"KDU-\u010CSL":4.9,P\u0159\u00EDsaha:null,Zelen\u00ED:null,PRO:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2022-10","pollster:id":"Kantar",middle_date:"2022-10-26",ANO:26.5,ODS:21.5,Pir\u00E1ti:11.5,"jin\xE9 strany":4,SPD:11,STAN:6,"TOP 09":5.5,SOCDEM:3.5,KS\u010CM:2.5,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:2.5,Zelen\u00ED:null,PRO:null,Trikol\u00F3ra:2,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2022-10","pollster:id":"Median",middle_date:"2022-10-16",ANO:31.5,ODS:13.5,Pir\u00E1ti:11,"jin\xE9 strany":2.5,SPD:12,STAN:5.5,"TOP 09":5,SOCDEM:5.5,KS\u010CM:2,"KDU-\u010CSL":6,P\u0159\u00EDsaha:2,Zelen\u00ED:2,PRO:null,Trikol\u00F3ra:1.5,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2022-09","pollster:id":"Kantar",middle_date:"2022-09-21",ANO:29.5,ODS:18,Pir\u00E1ti:9,"jin\xE9 strany":4,SPD:11.5,STAN:7.5,"TOP 09":4,SOCDEM:2.5,KS\u010CM:2,"KDU-\u010CSL":6,P\u0159\u00EDsaha:4,Zelen\u00ED:2,PRO:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2022-09","pollster:id":"Median",middle_date:"2022-09-15",ANO:30.5,ODS:16,Pir\u00E1ti:11,"jin\xE9 strany":2.5,SPD:11.5,STAN:5.5,"TOP 09":6,SOCDEM:4.5,KS\u010CM:2.5,"KDU-\u010CSL":2.5,P\u0159\u00EDsaha:3,Zelen\u00ED:2,PRO:null,Trikol\u00F3ra:2,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2022-09","pollster:id":"STEM",middle_date:"2022-09-04",ANO:30,ODS:14.2,Pir\u00E1ti:9.4,"jin\xE9 strany":10.2,SPD:14.3,STAN:5,"TOP 09":5,SOCDEM:4,KS\u010CM:null,"KDU-\u010CSL":4.5,P\u0159\u00EDsaha:3.5,Zelen\u00ED:null,PRO:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2022-08","pollster:id":"Kantar",middle_date:"2022-08-24",ANO:30.5,ODS:19.5,Pir\u00E1ti:8.5,"jin\xE9 strany":4,SPD:11,STAN:6.5,"TOP 09":4.5,SOCDEM:3,KS\u010CM:3.5,"KDU-\u010CSL":4,P\u0159\u00EDsaha:3,Zelen\u00ED:null,PRO:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:2},{"poll:identifier":"2022-08","pollster:id":"Median",middle_date:"2022-08-16",ANO:29,ODS:16,Pir\u00E1ti:11.5,"jin\xE9 strany":2.5,SPD:14,STAN:4,"TOP 09":3.5,SOCDEM:5,KS\u010CM:3.5,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:3.5,Zelen\u00ED:2,PRO:null,Trikol\u00F3ra:2,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2022-07","pollster:id":"STEM",middle_date:"2022-08-07",ANO:31.1,ODS:15.5,Pir\u00E1ti:9.3,"jin\xE9 strany":.7,SPD:11.9,STAN:5.5,"TOP 09":5.6,SOCDEM:4.8,KS\u010CM:3.4,"KDU-\u010CSL":3.4,P\u0159\u00EDsaha:3.3,Zelen\u00ED:2.5,PRO:null,Trikol\u00F3ra:1.4,"Voln\xFD blok":null,Svobodn\u00ED:1.7},{"poll:identifier":"2022-07","pollster:id":"Median",middle_date:"2022-07-20",ANO:30,ODS:15.5,Pir\u00E1ti:10.5,"jin\xE9 strany":1.5,SPD:12.5,STAN:5.5,"TOP 09":5,SOCDEM:5,KS\u010CM:2.5,"KDU-\u010CSL":4.5,P\u0159\u00EDsaha:3,Zelen\u00ED:2,PRO:null,Trikol\u00F3ra:2.5,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2022-06","pollster:id":"Median",middle_date:"2022-06-11",ANO:29,ODS:16.1,Pir\u00E1ti:11.8,"jin\xE9 strany":1.8,SPD:12.5,STAN:4.8,"TOP 09":5.2,SOCDEM:5.6,KS\u010CM:2.8,"KDU-\u010CSL":4.6,P\u0159\u00EDsaha:2.2,Zelen\u00ED:1.8,PRO:null,Trikol\u00F3ra:1.6,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2022-05","pollster:id":"Kantar",middle_date:"2022-05-24",ANO:28,ODS:22.5,Pir\u00E1ti:8.5,"jin\xE9 strany":5,SPD:11,STAN:6.5,"TOP 09":4,SOCDEM:4.5,KS\u010CM:2.5,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:2,Zelen\u00ED:2,PRO:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2022-05","pollster:id":"Median",middle_date:"2022-05-17",ANO:28.5,ODS:16.5,Pir\u00E1ti:9,"jin\xE9 strany":3,SPD:11.5,STAN:8.5,"TOP 09":4.5,SOCDEM:5.5,KS\u010CM:3,"KDU-\u010CSL":4.5,P\u0159\u00EDsaha:3,Zelen\u00ED:null,PRO:null,Trikol\u00F3ra:2.5,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2022-04","pollster:id":"Kantar",middle_date:"2022-04-18",ANO:27.5,ODS:26,Pir\u00E1ti:5,"jin\xE9 strany":3.5,SPD:11,STAN:10,"TOP 09":3,SOCDEM:2.5,KS\u010CM:2,"KDU-\u010CSL":4.5,P\u0159\u00EDsaha:3,Zelen\u00ED:2,PRO:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2022-03","pollster:id":"Kantar",middle_date:"2022-03-23",ANO:27.5,ODS:22.5,Pir\u00E1ti:7.5,"jin\xE9 strany":3.5,SPD:9.5,STAN:10,"TOP 09":5,SOCDEM:2.5,KS\u010CM:2.5,"KDU-\u010CSL":4,P\u0159\u00EDsaha:3.5,Zelen\u00ED:null,PRO:null,Trikol\u00F3ra:2,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2022-02","pollster:id":"Kantar",middle_date:"2022-02-23",ANO:25,ODS:21,Pir\u00E1ti:7.5,"jin\xE9 strany":4,SPD:11.5,STAN:11,"TOP 09":6.5,SOCDEM:3,KS\u010CM:2,"KDU-\u010CSL":5.5,P\u0159\u00EDsaha:3,Zelen\u00ED:null,PRO:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2021-11","pollster:id":"Kantar",middle_date:"2021-11-10",ANO:27,ODS:15.5,Pir\u00E1ti:8,"jin\xE9 strany":4,SPD:9.5,STAN:13,"TOP 09":7,SOCDEM:4,KS\u010CM:3.5,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:2.5,Zelen\u00ED:null,PRO:null,Trikol\u00F3ra:2.5,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2021-10","pollster:id":"volby+STEM",middle_date:"2021-10-09",ANO:27.1,ODS:13.6,Pir\u00E1ti:9.5,"jin\xE9 strany":1.9,SPD:9.6,STAN:6.1,"TOP 09":7.2,SOCDEM:4.7,KS\u010CM:3.6,"KDU-\u010CSL":6.9,P\u0159\u00EDsaha:4.7,Zelen\u00ED:1,PRO:null,Trikol\u00F3ra:2.8,"Voln\xFD blok":1.3,Svobodn\u00ED:null}],kl=[{names:["ANO","ODS","Pir\xE1ti","jin\xE9 strany","SPD","STAN","TOP 09","SOCDEM","KS\u010CM","KDU-\u010CSL","P\u0159\xEDsaha","Zelen\xED","PRO","Trikol\xF3ra","Voln\xFD blok","Svobodn\xED"]}];const Ml={data:function(){return{polls:hl,candidates:kl[0].names}},methods:{formatDate(n){return new Date(n).toLocaleDateString("cs")}}},Nl={class:"container"},Al=l("h3",null,[c(" Zve\u0159ejn\u011Bn\xE9 pr\u016Fzkumy "),l("small",null,"Strany")],-1),vl={class:"table-responsive"},Kl={class:"table table-striped table-hover table-condensed"},fl=l("th",null,null,-1),yl=l("th",null,[c("Datum\xA0"),l("small",null,"(st\u0159ed)")],-1);function El(n,u,r,P,d,D){const o=v;return e(),i("div",Nl,[Al,l("div",vl,[l("table",Kl,[l("thead",null,[l("tr",null,[fl,yl,(e(!0),i(O,null,_(n.candidates,(t,s)=>(e(),i("th",{key:s},[l("small",null,a(t),1)]))),128))])]),l("tbody",null,[(e(!0),i(O,null,_(n.polls,(t,s)=>(e(),i("tr",{key:s},[l("th",null,a(t["pollster:id"]),1),l("td",null,a(D.formatDate(t.middle_date)),1),(e(!0),i(O,null,_(n.candidates,(T,m)=>(e(),i("td",{key:m},[S(o,{decNumber:t[T]},null,8,["decNumber"])]))),128))]))),128))])])])])}var Cl=p(Ml,[["render",El]]),Ll=[{"poll:identifier":"2024-02","pollster:id":"Kantar",middle_date:"2024-02-21",ANO:39,SPOLU:20,Pir\u00E1ti:10,SPD:9,STAN:7.5,"jin\xE9 strany":5.5,SOCDEM:2.5,KS\u010CM:2.5,Svobodn\u00ED:2,Zelen\u00ED:2,P\u0159\u00EDsaha:null,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2024-01","pollster:id":"Kantar",middle_date:"2024-01-24",ANO:35.5,SPOLU:22.5,Pir\u00E1ti:10,SPD:10,STAN:7,"jin\xE9 strany":2,SOCDEM:4,KS\u010CM:3,Svobodn\u00ED:2.5,Zelen\u00ED:null,P\u0159\u00EDsaha:3.5,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2023-11","pollster:id":"Kantar",middle_date:"2023-11-22",ANO:34.5,SPOLU:18.5,Pir\u00E1ti:12,SPD:10,STAN:7,"jin\xE9 strany":2,SOCDEM:4,KS\u010CM:2.5,Svobodn\u00ED:2,Zelen\u00ED:3,P\u0159\u00EDsaha:2.5,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:2,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2023-10","pollster:id":"Kantar",middle_date:"2023-10-25",ANO:33,SPOLU:21.5,Pir\u00E1ti:10.5,SPD:10.5,STAN:7,"jin\xE9 strany":6,SOCDEM:3.5,KS\u010CM:3.5,Svobodn\u00ED:null,Zelen\u00ED:null,P\u0159\u00EDsaha:2.5,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:2},{"poll:identifier":"2023-09","pollster:id":"Kantar",middle_date:"2023-09-20",ANO:33.5,SPOLU:19.5,Pir\u00E1ti:8.5,SPD:9.5,STAN:7.5,"jin\xE9 strany":3,SOCDEM:3.5,KS\u010CM:3,Svobodn\u00ED:3,Zelen\u00ED:2,P\u0159\u00EDsaha:4,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:3},{"poll:identifier":"2023-05","pollster:id":"Kantar",middle_date:"2023-05-24",ANO:33.5,SPOLU:24,Pir\u00E1ti:11.5,SPD:8,STAN:6,"jin\xE9 strany":3,SOCDEM:3.5,KS\u010CM:3.5,Svobodn\u00ED:null,Zelen\u00ED:2.5,P\u0159\u00EDsaha:2.5,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:2},{"poll:identifier":"2023-04","pollster:id":"Kantar",middle_date:"2023-04-26",ANO:31,SPOLU:25,Pir\u00E1ti:11.5,SPD:9.5,STAN:6.5,"jin\xE9 strany":2,SOCDEM:5.5,KS\u010CM:2.5,Svobodn\u00ED:null,Zelen\u00ED:2,P\u0159\u00EDsaha:2.5,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:2},{"poll:identifier":"2023-03","pollster:id":"Kantar",middle_date:"2023-03-28",ANO:29.5,SPOLU:27.5,Pir\u00E1ti:10.5,SPD:8,STAN:5.5,"jin\xE9 strany":5,SOCDEM:5,KS\u010CM:2.5,Svobodn\u00ED:null,Zelen\u00ED:null,P\u0159\u00EDsaha:3.5,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:3},{"poll:identifier":"2023-02","pollster:id":"Kantar",middle_date:"2023-02-22",ANO:30.5,SPOLU:31,Pir\u00E1ti:null,SPD:9,STAN:null,"jin\xE9 strany":7,SOCDEM:5,KS\u010CM:2,Svobodn\u00ED:null,Zelen\u00ED:null,P\u0159\u00EDsaha:2.5,"Pir\xE1ti+STAN":13,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-10","pollster:id":"Kantar",middle_date:"2022-10-26",ANO:28,SPOLU:31.5,Pir\u00E1ti:null,SPD:11.5,STAN:null,"jin\xE9 strany":3.5,SOCDEM:4,KS\u010CM:3,Svobodn\u00ED:null,Zelen\u00ED:null,P\u0159\u00EDsaha:2.5,"Pir\xE1ti+STAN":14,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:2,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-09","pollster:id":"Kantar",middle_date:"2022-09-21",ANO:31.5,SPOLU:28.5,Pir\u00E1ti:null,SPD:12,STAN:null,"jin\xE9 strany":5,SOCDEM:2.5,KS\u010CM:2,Svobodn\u00ED:null,Zelen\u00ED:2,P\u0159\u00EDsaha:4.5,"Pir\xE1ti+STAN":12,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-08","pollster:id":"Kantar",middle_date:"2022-08-24",ANO:32,SPOLU:29,Pir\u00E1ti:null,SPD:11,STAN:null,"jin\xE9 strany":7,SOCDEM:3.5,KS\u010CM:4,Svobodn\u00ED:null,Zelen\u00ED:null,P\u0159\u00EDsaha:3.5,"Pir\xE1ti+STAN":10,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-05","pollster:id":"Kantar",middle_date:"2022-05-24",ANO:29.5,SPOLU:28.5,Pir\u00E1ti:null,SPD:11.5,STAN:null,"jin\xE9 strany":5.5,SOCDEM:5,KS\u010CM:2.5,Svobodn\u00ED:null,Zelen\u00ED:2.5,P\u0159\u00EDsaha:2.5,"Pir\xE1ti+STAN":12.5,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-04","pollster:id":"Kantar",middle_date:"2022-04-18",ANO:28.5,SPOLU:33.5,Pir\u00E1ti:null,SPD:11,STAN:null,"jin\xE9 strany":4.5,SOCDEM:4,KS\u010CM:2,Svobodn\u00ED:null,Zelen\u00ED:2,P\u0159\u00EDsaha:3,"Pir\xE1ti+STAN":11.5,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-03","pollster:id":"Kantar",middle_date:"2022-03-23",ANO:29,SPOLU:31.5,Pir\u00E1ti:null,SPD:9.5,STAN:null,"jin\xE9 strany":2.5,SOCDEM:3,KS\u010CM:2.5,Svobodn\u00ED:null,Zelen\u00ED:null,P\u0159\u00EDsaha:4,"Pir\xE1ti+STAN":15.5,"Trikol\xF3ra+S+S":2.5,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-03","pollster:id":"Median",middle_date:"2022-03-17",ANO:27.5,SPOLU:26.5,Pir\u00E1ti:null,SPD:10,STAN:null,"jin\xE9 strany":4,SOCDEM:5.5,KS\u010CM:4,Svobodn\u00ED:null,Zelen\u00ED:null,P\u0159\u00EDsaha:3,"Pir\xE1ti+STAN":16.5,"Trikol\xF3ra+S+S":3,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-02","pollster:id":"Kantar",middle_date:"2022-02-23",ANO:27.5,SPOLU:32.5,Pir\u00E1ti:null,SPD:12,STAN:null,"jin\xE9 strany":2,SOCDEM:3,KS\u010CM:2,Svobodn\u00ED:null,Zelen\u00ED:null,P\u0159\u00EDsaha:3.5,"Pir\xE1ti+STAN":14.5,"Trikol\xF3ra+S+S":3,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2021-11","pollster:id":"Median",middle_date:"2021-11-16",ANO:29.5,SPOLU:26,Pir\u00E1ti:null,SPD:8.5,STAN:null,"jin\xE9 strany":3.5,SOCDEM:4.5,KS\u010CM:4.5,Svobodn\u00ED:null,Zelen\u00ED:null,P\u0159\u00EDsaha:3,"Pir\xE1ti+STAN":16.5,"Trikol\xF3ra+S+S":4,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2021-11","pollster:id":"Kantar",middle_date:"2021-11-10",ANO:28,SPOLU:28,Pir\u00E1ti:null,SPD:9.5,STAN:null,"jin\xE9 strany":3,SOCDEM:4,KS\u010CM:3.5,Svobodn\u00ED:null,Zelen\u00ED:null,P\u0159\u00EDsaha:3.5,"Pir\xE1ti+STAN":17,"Trikol\xF3ra+S+S":3.5,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2021-10","pollster:id":"volby",middle_date:"2021-10-09",ANO:27.1,SPOLU:27.8,Pir\u00E1ti:null,SPD:9.6,STAN:null,"jin\xE9 strany":1.9,SOCDEM:4.7,KS\u010CM:3.6,Svobodn\u00ED:null,Zelen\u00ED:1,P\u0159\u00EDsaha:4.7,"Pir\xE1ti+STAN":15.6,"Trikol\xF3ra+S+S":2.8,Trikol\u00F3ra:null,"Voln\xFD blok":1.3,PRO:null}],jl=[{names:["ANO","SPOLU","Pir\xE1ti","SPD","STAN","jin\xE9 strany","SOCDEM","KS\u010CM","Svobodn\xED","Zelen\xED","P\u0159\xEDsaha","Pir\xE1ti+STAN","Trikol\xF3ra+S+S","Trikol\xF3ra","Voln\xFD blok","PRO"]}];const Vl={data:function(){return{polls:Ll,candidates:jl[0].names}},methods:{formatDate(n){return new Date(n).toLocaleDateString("cs")}}},Ul={class:"container"},Rl=l("h3",null,[c(" Zve\u0159ejn\u011Bn\xE9 pr\u016Fzkumy "),l("small",null,"Koalice")],-1),Zl={class:"table-responsive"},$l={class:"table table-striped table-hover table-condensed"},gl=l("th",null,null,-1),xl=l("th",null,[c("Datum\xA0"),l("small",null,"(st\u0159ed)")],-1);function Il(n,u,r,P,d,D){const o=v;return e(),i("div",Ul,[Rl,l("div",Zl,[l("table",$l,[l("thead",null,[l("tr",null,[gl,xl,(e(!0),i(O,null,_(n.candidates,(t,s)=>(e(),i("th",{key:s},[l("small",null,a(t),1)]))),128))])]),l("tbody",null,[(e(!0),i(O,null,_(n.polls,(t,s)=>(e(),i("tr",{key:s},[l("th",null,a(t["pollster:id"]),1),l("td",null,a(D.formatDate(t.middle_date)),1),(e(!0),i(O,null,_(n.candidates,(T,m)=>(e(),i("td",{key:m},[S(o,{decNumber:t[T]},null,8,["decNumber"])]))),128))]))),128))])])])])}var wl=p(Vl,[["render",Il]]);const zl="shares/2024-03-14T12:47:33.602886_psp.png";var Fl={filename:zl};const Bl=L({setup(n,{expose:u}){u();const r="https://mandaty.cz/",P="493242628099686";j({title:"Mand\xE1ty.cz",meta:[{hid:"og:name",property:"og:image",content:r+Fl.filename},{hid:"og:url",property:"og:url",content:r},{hid:"og:type",property:"og:type",content:"website"},{hid:"og:title",property:"og:title",content:"Mand\xE1ty.cz"},{hid:"og:description",property:"og:description",content:"V\xFDvoj volebn\xEDch model\u016F dle pr\u016Fzkum\u016F ve\u0159ejn\xE9ho m\xEDn\u011Bn\xED"},{hid:"fb:app_id",property:"fb:app_id",content:P}],link:[{rel:"icon",type:"image/x-icon",href:r+"favicon.svg"}]});const d={BASE_URL:r,FB_APP_ID:P};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}),Hl={class:"container"},Wl=l("h1",{class:"pt-4"},"Sn\u011Bmovna 2021-2025",-1),ql=l("hr",null,null,-1),Gl=l("hr",null,null,-1),Jl=l("hr",null,null,-1),Ql=l("hr",null,null,-1);function Xl(n,u,r,P,d,D){const o=f,t=tl,s=bl,T=Cl,m=wl;return e(),i("div",Hl,[S(o),Wl,ql,S(t),Gl,S(s),Jl,S(T),Ql,S(m)])}var en=p(Bl,[["render",Xl]]);export{en as default};
