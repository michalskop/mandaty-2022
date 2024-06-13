import{_ as f}from"./ChartLinks-ece97631.mjs";import{_ as c,o as e,c as i,a as l,t as a,F as O,r as _,e as D,p as m,f as h,n as y,s as E,h as M,b as s,i as N,v as C,k as L,u as j}from"./entry-62da2241.mjs";import{_ as K}from"./DecNumber-e3007e4a.mjs";const V=[{party:"ANO",median:81,lo:67,hi:93,in:1,id:"ANO",name:"Hnut\xED ANO",abbreviation:"ANO",color:"#261060",needs:.05,mps:72,seats:80,difference:8},{party:"SPOLU",median:54,lo:41,hi:66,in:1,id:"SPOLU",name:"Koalice ODS, KDU-\u010CSL, TOP 09",abbreviation:"SPOLU",color:"#004494",needs:.11,mps:71,seats:55,difference:-16},{party:"Pir\xE1ti",median:25,lo:16,hi:33,in:.996,id:"Pir\xE1ti",name:"\u010Cesk\xE1 pir\xE1tsk\xE1 strana",abbreviation:"Pir\xE1ti",color:"#000000",needs:.05,mps:4,seats:25,difference:21},{party:"SPD",median:21,lo:12,hi:29,in:.969,id:"SPD",name:"Svoboda a p\u0159\xEDm\xE1 demokracie - Tomio Okamura",abbreviation:"SPD",color:"#EA2329",needs:.05,mps:20,seats:23,difference:3},{party:"STAN",median:16,lo:0,hi:24,in:.873,id:"STAN",name:"Starostov\xE9 a nez\xE1visl\xED",abbreviation:"STAN",color:"#CE0F68",needs:.05,mps:33,seats:17,difference:-16},{party:"SOCDEM",median:0,lo:0,hi:13,in:.185,id:"SOCDEM",name:"\u010Cesk\xE1 strana soci\xE1ln\u011B demokratick\xE1",abbreviation:"SOCDEM",color:"#F07D00",needs:.05,mps:0,seats:0,difference:0},{party:"KS\u010CM",median:0,lo:0,hi:11,in:.106,id:"KS\u010CM",name:"Komunistick\xE1 strana \u010Cech a Moravy",abbreviation:"KS\u010CM",color:"#8C0000",needs:.05,mps:0,seats:0,difference:0},{party:"P\u0159\xEDsaha",median:0,lo:0,hi:10,in:.076,id:"P\u0159\xEDsaha",name:"P\u0159\xEDsaha",abbreviation:"P\u0159\xEDsaha",color:"#0033FF",needs:.05,mps:0,seats:0,difference:0}],U="2024-05-01";var A={data:V,date:U};const R={data:function(){return{seats:A.data,date:new Date(A.date).toLocaleDateString("cs-CZ")}},filters:{abs(n){return Math.abs(n)}}},k=n=>(m("data-v-afe46c60"),n=n(),h(),n),Z=D("Po\u010Det mand\xE1t\u016F "),$=k(()=>l("small",null,"s odhadem chyby",-1)),g=D(),x={class:"badge"},I={class:"container"},w={class:"row"},F={class:"card text-center mb-2"},z={class:"card-header"},B={class:"card-body"},H={class:"row"},W=k(()=>l("div",{class:"col-3"},null,-1)),q={class:"col-6 text-center"},G={class:"number"},J={key:0},Q={class:"text-success"},X={key:1},Y={class:"text-danger"},ll={key:2},nl=k(()=>l("span",{class:"text-muted"},null,-1)),el=[nl],il={class:"lo-hi"};function ol(n,u,r,P,d,p){return e(),i("div",null,[l("h3",null,[Z,$,g,l("span",x,a(n.date),1)]),l("div",I,[l("div",w,[(e(!0),i(O,null,_(n.seats,(o,t)=>(e(),i("div",{key:t,class:"col-xl-3 col-lg-4 col-sm-6"},[l("div",F,[l("div",z,[l("h4",{style:y({color:o.color})},a(o.abbreviation),5)]),l("div",B,[l("div",H,[W,l("div",q,[l("div",null,[l("span",G,a(o.seats),1),o.difference>0?(e(),i("span",J,[l("span",Q,"+"+a(o.difference),1)])):o.difference<0?(e(),i("span",X,[l("span",Y,a(o.difference),1)])):(e(),i("span",ll,el))])])]),l("div",il,[l("strong",null,a(o.lo)+" - "+a(o.hi),1)])])])]))),128))])])])}var tl=c(R,[["render",ol],["__scopeId","data-v-afe46c60"]]);const al={},rl=n=>(m("data-v-6d68b17d"),n=n(),h(),n),dl={id:"image-wrapper"},Sl=rl(()=>l("img",{src:E,class:"image-small"},null,-1)),sl=[Sl];function ul(n,u){return e(),i("div",dl,sl)}var v=c(al,[["render",ul],["__scopeId","data-v-6d68b17d"]]),Pl=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"}));const Ol={name:"SnemovnaPollsChart",data(){return{isMobile:!1}},mounted(){this.isMobile=window.innerWidth<666,console.log("isMobile:",this.isMobile)},components:{SnemovnaPollsPictureChart:()=>M(()=>Promise.resolve().then(function(){return Pl}),void 0),SnemovnaPollsInteractiveChart:()=>M(()=>import("./entry-62da2241.mjs").then(function(n){return n.S}),["entry-62da2241.mjs","entry.6bdde12a.css"])}},_l=n=>(m("data-v-c7c0d9ea"),n=n(),h(),n),Dl={id:"image-wrapper"},pl=_l(()=>l("h3",null,[D(" V\xFDvoj volebn\xEDch model\u016F "),l("small",null,"dle pr\u016Fzkum\u016F ve\u0159ejn\xE9ho m\xEDn\u011Bn\xED ")],-1)),cl={key:0},Tl={key:1};function bl(n,u,r,P,d,p){const o=v,t=C;return e(),i("div",Dl,[pl,d.isMobile?(e(),i("div",cl,[s(o)])):N("",!0),d.isMobile?N("",!0):(e(),i("div",Tl,[s(t)]))])}var ml=c(Ol,[["render",bl],["__scopeId","data-v-c7c0d9ea"]]),hl=[{"poll:identifier":"2024-04","pollster:id":"Kantar",middle_date:"2024-05-01",ANO:32,ODS:15.5,Pir\u00E1ti:11,SPD:9,STAN:7.5,"TOP 09":5,"jin\xE9 strany":5,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:3.5,SOCDEM:3,KS\u010CM:2.5,Zelen\u00ED:2.5,PRO:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2024-04","pollster:id":"Median",middle_date:"2024-04-15",ANO:32.5,ODS:13,Pir\u00E1ti:10,SPD:10,STAN:8,"TOP 09":3.5,"jin\xE9 strany":2,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:2.5,SOCDEM:4.5,KS\u010CM:3.5,Zelen\u00ED:2.5,PRO:3,Trikol\u00F3ra:1.5,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2024-03","pollster:id":"Kantar",middle_date:"2024-03-27",ANO:34.5,ODS:16,Pir\u00E1ti:10.5,SPD:8,STAN:6.5,"TOP 09":4.5,"jin\xE9 strany":2,"KDU-\u010CSL":3,P\u0159\u00EDsaha:2.5,SOCDEM:3,KS\u010CM:3,Zelen\u00ED:2,PRO:2,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:2.5},{"poll:identifier":"2024-03","pollster:id":"STEM",middle_date:"2024-03-20",ANO:32.9,ODS:14.5,Pir\u00E1ti:10.5,SPD:9.3,STAN:6.6,"TOP 09":5.2,"jin\xE9 strany":.4,"KDU-\u010CSL":3.1,P\u0159\u00EDsaha:2.8,SOCDEM:3.6,KS\u010CM:4.5,Zelen\u00ED:2.1,PRO:1.9,Trikol\u00F3ra:.8,"Voln\xFD blok":null,Svobodn\u00ED:1.9},{"poll:identifier":"2024-03","pollster:id":"Median",middle_date:"2024-03-19",ANO:32,ODS:14,Pir\u00E1ti:10.5,SPD:7,STAN:6,"TOP 09":3.5,"jin\xE9 strany":2,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:3.5,SOCDEM:4.5,KS\u010CM:4.5,Zelen\u00ED:3,PRO:4,Trikol\u00F3ra:2,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2024-02","pollster:id":"Kantar",middle_date:"2024-02-21",ANO:38.5,ODS:14.5,Pir\u00E1ti:9.5,SPD:9,STAN:7,"TOP 09":5,"jin\xE9 strany":9.5,"KDU-\u010CSL":2,P\u0159\u00EDsaha:null,SOCDEM:2.5,KS\u010CM:2.5,Zelen\u00ED:null,PRO:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2024-02","pollster:id":"Median",middle_date:"2024-02-17",ANO:31,ODS:12.5,Pir\u00E1ti:11,SPD:9.5,STAN:9,"TOP 09":5.5,"jin\xE9 strany":3,"KDU-\u010CSL":3,P\u0159\u00EDsaha:3,SOCDEM:4.5,KS\u010CM:4,Zelen\u00ED:2,PRO:2,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2024-01","pollster:id":"Kantar",middle_date:"2024-01-24",ANO:35,ODS:15.5,Pir\u00E1ti:9.5,SPD:9.5,STAN:6.5,"TOP 09":5,"jin\xE9 strany":2.5,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:3.5,SOCDEM:4,KS\u010CM:3,Zelen\u00ED:null,PRO:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:2.5},{"poll:identifier":"2024-01","pollster:id":"Median",middle_date:"2024-01-23",ANO:31.5,ODS:12,Pir\u00E1ti:13,SPD:10.5,STAN:7,"TOP 09":5.5,"jin\xE9 strany":1.5,"KDU-\u010CSL":3,P\u0159\u00EDsaha:3,SOCDEM:4,KS\u010CM:4.5,Zelen\u00ED:1.5,PRO:3,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2024-01","pollster:id":"STEM",middle_date:"2024-01-22",ANO:33.4,ODS:13.2,Pir\u00E1ti:11.3,SPD:10,STAN:7,"TOP 09":5,"jin\xE9 strany":1.2,"KDU-\u010CSL":2.7,P\u0159\u00EDsaha:2.6,SOCDEM:3.1,KS\u010CM:4.8,Zelen\u00ED:2.5,PRO:null,Trikol\u00F3ra:1.4,"Voln\xFD blok":null,Svobodn\u00ED:1.7},{"poll:identifier":"2023-12","pollster:id":"Median",middle_date:"2023-12-14",ANO:35,ODS:13,Pir\u00E1ti:10.5,SPD:9,STAN:6.5,"TOP 09":6,"jin\xE9 strany":2,"KDU-\u010CSL":2.5,P\u0159\u00EDsaha:2.5,SOCDEM:4.5,KS\u010CM:4.5,Zelen\u00ED:1.5,PRO:2.5,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2023-11","pollster:id":"IPSOS",middle_date:"2023-11-24",ANO:34.3,ODS:13.3,Pir\u00E1ti:10.5,SPD:9.2,STAN:6.6,"TOP 09":5.1,"jin\xE9 strany":1.1,"KDU-\u010CSL":4.3,P\u0159\u00EDsaha:2.8,SOCDEM:4.1,KS\u010CM:2.5,Zelen\u00ED:1,PRO:1.8,Trikol\u00F3ra:1.2,"Voln\xFD blok":null,Svobodn\u00ED:2.2},{"poll:identifier":"2023-11","pollster:id":"Kantar",middle_date:"2023-11-22",ANO:34.5,ODS:12.5,Pir\u00E1ti:11.5,SPD:10,STAN:7,"TOP 09":5,"jin\xE9 strany":2,"KDU-\u010CSL":2,P\u0159\u00EDsaha:2.5,SOCDEM:3.5,KS\u010CM:2.5,Zelen\u00ED:3,PRO:null,Trikol\u00F3ra:2,"Voln\xFD blok":null,Svobodn\u00ED:2},{"poll:identifier":"2023-11","pollster:id":"Median",middle_date:"2023-11-20",ANO:34.5,ODS:15.5,Pir\u00E1ti:11,SPD:8.5,STAN:6,"TOP 09":5.5,"jin\xE9 strany":1,"KDU-\u010CSL":4,P\u0159\u00EDsaha:1.5,SOCDEM:4.5,KS\u010CM:3.5,Zelen\u00ED:1.5,PRO:1.5,Trikol\u00F3ra:1.5,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2023-11","pollster:id":"STEM",middle_date:"2023-11-08",ANO:33.2,ODS:11.6,Pir\u00E1ti:10.2,SPD:12,STAN:6.4,"TOP 09":5.2,"jin\xE9 strany":.4,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:2.9,SOCDEM:4.5,KS\u010CM:3,Zelen\u00ED:1.6,PRO:1.9,Trikol\u00F3ra:1.2,"Voln\xFD blok":null,Svobodn\u00ED:2.3},{"poll:identifier":"2023-10","pollster:id":"Kantar",middle_date:"2023-10-25",ANO:32.5,ODS:15.5,Pir\u00E1ti:10.5,SPD:10.5,STAN:7,"TOP 09":4.5,"jin\xE9 strany":5.5,"KDU-\u010CSL":2.5,P\u0159\u00EDsaha:2.5,SOCDEM:3.5,KS\u010CM:3.5,Zelen\u00ED:null,PRO:2,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2023-10","pollster:id":"Median",middle_date:"2023-10-17",ANO:35,ODS:13.5,Pir\u00E1ti:9,SPD:10.5,STAN:6,"TOP 09":6,"jin\xE9 strany":3,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:3,SOCDEM:3.5,KS\u010CM:3,Zelen\u00ED:1.5,PRO:2.5,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2023-09","pollster:id":"Kantar",middle_date:"2023-09-20",ANO:33.5,ODS:12,Pir\u00E1ti:8.5,SPD:9.5,STAN:7.5,"TOP 09":5,"jin\xE9 strany":2,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:4,SOCDEM:3.5,KS\u010CM:3,Zelen\u00ED:2,PRO:3,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:3},{"poll:identifier":"2023-09","pollster:id":"Median",middle_date:"2023-09-18",ANO:34,ODS:13,Pir\u00E1ti:11.5,SPD:9.5,STAN:6.5,"TOP 09":5.5,"jin\xE9 strany":3,"KDU-\u010CSL":4,P\u0159\u00EDsaha:null,SOCDEM:4,KS\u010CM:4.5,Zelen\u00ED:2,PRO:2.5,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2023-09","pollster:id":"STEM",middle_date:"2023-09-12",ANO:30.8,ODS:13.1,Pir\u00E1ti:9.6,SPD:10.9,STAN:5.3,"TOP 09":5.4,"jin\xE9 strany":.6,"KDU-\u010CSL":5,P\u0159\u00EDsaha:3.2,SOCDEM:4,KS\u010CM:4.3,Zelen\u00ED:2.7,PRO:1.2,Trikol\u00F3ra:1.1,"Voln\xFD blok":null,Svobodn\u00ED:2.8},{"poll:identifier":"2023-07","pollster:id":"Median",middle_date:"2023-07-20",ANO:33,ODS:15,Pir\u00E1ti:12,SPD:8,STAN:6.5,"TOP 09":5.5,"jin\xE9 strany":1.5,"KDU-\u010CSL":4,P\u0159\u00EDsaha:3,SOCDEM:5,KS\u010CM:3,Zelen\u00ED:1.5,PRO:1.5,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2023-06","pollster:id":"Median",middle_date:"2023-06-21",ANO:35.5,ODS:14,Pir\u00E1ti:11,SPD:10,STAN:5.5,"TOP 09":5,"jin\xE9 strany":1.5,"KDU-\u010CSL":2,P\u0159\u00EDsaha:2.5,SOCDEM:4,KS\u010CM:2.5,Zelen\u00ED:2.5,PRO:1.5,Trikol\u00F3ra:2.5,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2023-05","pollster:id":"Kantar",middle_date:"2023-05-24",ANO:33.5,ODS:17,Pir\u00E1ti:11.5,SPD:8,STAN:6.5,"TOP 09":3.5,"jin\xE9 strany":3,"KDU-\u010CSL":4,P\u0159\u00EDsaha:2.5,SOCDEM:3,KS\u010CM:3.5,Zelen\u00ED:2,PRO:2,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2023-05","pollster:id":"STEM",middle_date:"2023-05-23",ANO:33.5,ODS:14.6,Pir\u00E1ti:10.8,SPD:9.3,STAN:5.8,"TOP 09":4.7,"jin\xE9 strany":.2,"KDU-\u010CSL":3.4,P\u0159\u00EDsaha:2.9,SOCDEM:4.1,KS\u010CM:3.8,Zelen\u00ED:2.3,PRO:1.2,Trikol\u00F3ra:1.4,"Voln\xFD blok":null,Svobodn\u00ED:2.2},{"poll:identifier":"2023-05","pollster:id":"Median",middle_date:"2023-05-17",ANO:34.5,ODS:15,Pir\u00E1ti:10.5,SPD:8.5,STAN:6,"TOP 09":5.5,"jin\xE9 strany":3,"KDU-\u010CSL":4,P\u0159\u00EDsaha:2,SOCDEM:4,KS\u010CM:3.5,Zelen\u00ED:null,PRO:null,Trikol\u00F3ra:2.5,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2023-04","pollster:id":"Kantar",middle_date:"2023-04-26",ANO:30.5,ODS:17,Pir\u00E1ti:11,SPD:9,STAN:6,"TOP 09":5,"jin\xE9 strany":2,"KDU-\u010CSL":5,P\u0159\u00EDsaha:2.5,SOCDEM:5.5,KS\u010CM:2.5,Zelen\u00ED:2,PRO:2,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2023-04","pollster:id":"Median",middle_date:"2023-04-16",ANO:31,ODS:15,Pir\u00E1ti:10.5,SPD:8.5,STAN:7.5,"TOP 09":4.5,"jin\xE9 strany":4,"KDU-\u010CSL":5.5,P\u0159\u00EDsaha:2,SOCDEM:4,KS\u010CM:4,Zelen\u00ED:2,PRO:null,Trikol\u00F3ra:1.5,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2023-03","pollster:id":"Kantar",middle_date:"2023-03-28",ANO:29.5,ODS:20,Pir\u00E1ti:11,SPD:8,STAN:5.5,"TOP 09":4,"jin\xE9 strany":5,"KDU-\u010CSL":3,P\u0159\u00EDsaha:3.5,SOCDEM:5,KS\u010CM:2.5,Zelen\u00ED:null,PRO:3,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2023-03","pollster:id":"Median",middle_date:"2023-03-18",ANO:34.5,ODS:15.5,Pir\u00E1ti:8.5,SPD:10,STAN:8,"TOP 09":5,"jin\xE9 strany":1.5,"KDU-\u010CSL":4,P\u0159\u00EDsaha:2,SOCDEM:4,KS\u010CM:3,Zelen\u00ED:2,PRO:null,Trikol\u00F3ra:3,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2023-02","pollster:id":"Median",middle_date:"2023-02-23",ANO:32,ODS:14.5,Pir\u00E1ti:11.5,SPD:9.5,STAN:7,"TOP 09":5,"jin\xE9 strany":2.5,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:2.5,SOCDEM:5,KS\u010CM:3.5,Zelen\u00ED:2,PRO:null,Trikol\u00F3ra:1.5,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2023-02","pollster:id":"Kantar",middle_date:"2023-02-22",ANO:29.5,ODS:21.5,Pir\u00E1ti:9,SPD:8.5,STAN:7,"TOP 09":5,"jin\xE9 strany":6.5,"KDU-\u010CSL":4,P\u0159\u00EDsaha:2.5,SOCDEM:4.5,KS\u010CM:2,Zelen\u00ED:null,PRO:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2022-12","pollster:id":"STEM",middle_date:"2022-12-02",ANO:30.8,ODS:13.9,Pir\u00E1ti:9.4,SPD:12.4,STAN:6.4,"TOP 09":4.6,"jin\xE9 strany":9.5,"KDU-\u010CSL":4.9,P\u0159\u00EDsaha:null,SOCDEM:4,KS\u010CM:4.2,Zelen\u00ED:null,PRO:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2022-10","pollster:id":"Kantar",middle_date:"2022-10-26",ANO:26.5,ODS:21.5,Pir\u00E1ti:11.5,SPD:11,STAN:6,"TOP 09":5.5,"jin\xE9 strany":4,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:2.5,SOCDEM:3.5,KS\u010CM:2.5,Zelen\u00ED:null,PRO:null,Trikol\u00F3ra:2,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2022-10","pollster:id":"Median",middle_date:"2022-10-16",ANO:31.5,ODS:13.5,Pir\u00E1ti:11,SPD:12,STAN:5.5,"TOP 09":5,"jin\xE9 strany":2.5,"KDU-\u010CSL":6,P\u0159\u00EDsaha:2,SOCDEM:5.5,KS\u010CM:2,Zelen\u00ED:2,PRO:null,Trikol\u00F3ra:1.5,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2022-09","pollster:id":"Kantar",middle_date:"2022-09-21",ANO:29.5,ODS:18,Pir\u00E1ti:9,SPD:11.5,STAN:7.5,"TOP 09":4,"jin\xE9 strany":4,"KDU-\u010CSL":6,P\u0159\u00EDsaha:4,SOCDEM:2.5,KS\u010CM:2,Zelen\u00ED:2,PRO:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2022-09","pollster:id":"Median",middle_date:"2022-09-15",ANO:30.5,ODS:16,Pir\u00E1ti:11,SPD:11.5,STAN:5.5,"TOP 09":6,"jin\xE9 strany":2.5,"KDU-\u010CSL":2.5,P\u0159\u00EDsaha:3,SOCDEM:4.5,KS\u010CM:2.5,Zelen\u00ED:2,PRO:null,Trikol\u00F3ra:2,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2022-09","pollster:id":"STEM",middle_date:"2022-09-04",ANO:30,ODS:14.2,Pir\u00E1ti:9.4,SPD:14.3,STAN:5,"TOP 09":5,"jin\xE9 strany":10.2,"KDU-\u010CSL":4.5,P\u0159\u00EDsaha:3.5,SOCDEM:4,KS\u010CM:null,Zelen\u00ED:null,PRO:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2022-08","pollster:id":"Kantar",middle_date:"2022-08-24",ANO:30.5,ODS:19.5,Pir\u00E1ti:8.5,SPD:11,STAN:6.5,"TOP 09":4.5,"jin\xE9 strany":4,"KDU-\u010CSL":4,P\u0159\u00EDsaha:3,SOCDEM:3,KS\u010CM:3.5,Zelen\u00ED:null,PRO:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:2},{"poll:identifier":"2022-08","pollster:id":"Median",middle_date:"2022-08-16",ANO:29,ODS:16,Pir\u00E1ti:11.5,SPD:14,STAN:4,"TOP 09":3.5,"jin\xE9 strany":2.5,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:3.5,SOCDEM:5,KS\u010CM:3.5,Zelen\u00ED:2,PRO:null,Trikol\u00F3ra:2,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2022-07","pollster:id":"STEM",middle_date:"2022-08-07",ANO:31.1,ODS:15.5,Pir\u00E1ti:9.3,SPD:11.9,STAN:5.5,"TOP 09":5.6,"jin\xE9 strany":.7,"KDU-\u010CSL":3.4,P\u0159\u00EDsaha:3.3,SOCDEM:4.8,KS\u010CM:3.4,Zelen\u00ED:2.5,PRO:null,Trikol\u00F3ra:1.4,"Voln\xFD blok":null,Svobodn\u00ED:1.7},{"poll:identifier":"2022-07","pollster:id":"Median",middle_date:"2022-07-20",ANO:30,ODS:15.5,Pir\u00E1ti:10.5,SPD:12.5,STAN:5.5,"TOP 09":5,"jin\xE9 strany":1.5,"KDU-\u010CSL":4.5,P\u0159\u00EDsaha:3,SOCDEM:5,KS\u010CM:2.5,Zelen\u00ED:2,PRO:null,Trikol\u00F3ra:2.5,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2022-06","pollster:id":"Median",middle_date:"2022-06-11",ANO:29,ODS:16.1,Pir\u00E1ti:11.8,SPD:12.5,STAN:4.8,"TOP 09":5.2,"jin\xE9 strany":1.8,"KDU-\u010CSL":4.6,P\u0159\u00EDsaha:2.2,SOCDEM:5.6,KS\u010CM:2.8,Zelen\u00ED:1.8,PRO:null,Trikol\u00F3ra:1.6,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2022-05","pollster:id":"Kantar",middle_date:"2022-05-24",ANO:28,ODS:22.5,Pir\u00E1ti:8.5,SPD:11,STAN:6.5,"TOP 09":4,"jin\xE9 strany":5,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:2,SOCDEM:4.5,KS\u010CM:2.5,Zelen\u00ED:2,PRO:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2022-05","pollster:id":"Median",middle_date:"2022-05-17",ANO:28.5,ODS:16.5,Pir\u00E1ti:9,SPD:11.5,STAN:8.5,"TOP 09":4.5,"jin\xE9 strany":3,"KDU-\u010CSL":4.5,P\u0159\u00EDsaha:3,SOCDEM:5.5,KS\u010CM:3,Zelen\u00ED:null,PRO:null,Trikol\u00F3ra:2.5,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2022-04","pollster:id":"Kantar",middle_date:"2022-04-18",ANO:27.5,ODS:26,Pir\u00E1ti:5,SPD:11,STAN:10,"TOP 09":3,"jin\xE9 strany":3.5,"KDU-\u010CSL":4.5,P\u0159\u00EDsaha:3,SOCDEM:2.5,KS\u010CM:2,Zelen\u00ED:2,PRO:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2022-03","pollster:id":"Kantar",middle_date:"2022-03-23",ANO:27.5,ODS:22.5,Pir\u00E1ti:7.5,SPD:9.5,STAN:10,"TOP 09":5,"jin\xE9 strany":3.5,"KDU-\u010CSL":4,P\u0159\u00EDsaha:3.5,SOCDEM:2.5,KS\u010CM:2.5,Zelen\u00ED:null,PRO:null,Trikol\u00F3ra:2,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2022-02","pollster:id":"Kantar",middle_date:"2022-02-23",ANO:25,ODS:21,Pir\u00E1ti:7.5,SPD:11.5,STAN:11,"TOP 09":6.5,"jin\xE9 strany":4,"KDU-\u010CSL":5.5,P\u0159\u00EDsaha:3,SOCDEM:3,KS\u010CM:2,Zelen\u00ED:null,PRO:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2021-11","pollster:id":"Kantar",middle_date:"2021-11-10",ANO:27,ODS:15.5,Pir\u00E1ti:8,SPD:9.5,STAN:13,"TOP 09":7,"jin\xE9 strany":4,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:2.5,SOCDEM:4,KS\u010CM:3.5,Zelen\u00ED:null,PRO:null,Trikol\u00F3ra:2.5,"Voln\xFD blok":null,Svobodn\u00ED:null},{"poll:identifier":"2021-10","pollster:id":"volby+STEM",middle_date:"2021-10-09",ANO:27.1,ODS:13.6,Pir\u00E1ti:9.5,SPD:9.6,STAN:6.1,"TOP 09":7.2,"jin\xE9 strany":1.9,"KDU-\u010CSL":6.9,P\u0159\u00EDsaha:4.7,SOCDEM:4.7,KS\u010CM:3.6,Zelen\u00ED:1,PRO:null,Trikol\u00F3ra:2.8,"Voln\xFD blok":1.3,Svobodn\u00ED:null}],kl=[{names:["ANO","ODS","Pir\xE1ti","SPD","STAN","TOP 09","jin\xE9 strany","KDU-\u010CSL","P\u0159\xEDsaha","SOCDEM","KS\u010CM","Zelen\xED","PRO","Trikol\xF3ra","Voln\xFD blok","Svobodn\xED"]}];const Ml={data:function(){return{polls:hl,candidates:kl[0].names}},methods:{formatDate(n){return new Date(n).toLocaleDateString("cs")}}},Nl={class:"container"},Al=l("h3",null,[D(" Zve\u0159ejn\u011Bn\xE9 pr\u016Fzkumy "),l("small",null,"Strany")],-1),Kl={class:"table-responsive"},vl={class:"table table-striped table-hover table-condensed"},fl=l("th",null,null,-1),yl=l("th",null,[D("Datum\xA0"),l("small",null,"(st\u0159ed)")],-1);function El(n,u,r,P,d,p){const o=K;return e(),i("div",Nl,[Al,l("div",Kl,[l("table",vl,[l("thead",null,[l("tr",null,[fl,yl,(e(!0),i(O,null,_(n.candidates,(t,S)=>(e(),i("th",{key:S},[l("small",null,a(t),1)]))),128))])]),l("tbody",null,[(e(!0),i(O,null,_(n.polls,(t,S)=>(e(),i("tr",{key:S},[l("th",null,a(t["pollster:id"]),1),l("td",null,a(p.formatDate(t.middle_date)),1),(e(!0),i(O,null,_(n.candidates,(T,b)=>(e(),i("td",{key:b},[s(o,{decNumber:t[T]},null,8,["decNumber"])]))),128))]))),128))])])])])}var Cl=c(Ml,[["render",El]]),Ll=[{"poll:identifier":"2024-04","pollster:id":"Kantar",middle_date:"2024-05-01",ANO:32.5,SPOLU:22.5,Pir\u00E1ti:11,SPD:9,STAN:7.5,"jin\xE9 strany":6,P\u0159\u00EDsaha:3.5,SOCDEM:3,KS\u010CM:2.5,Zelen\u00ED:2.5,Svobodn\u00ED:null,PRO:null,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2024-03","pollster:id":"Kantar",middle_date:"2024-03-27",ANO:35.5,SPOLU:21.5,Pir\u00E1ti:11,SPD:8,STAN:6.5,"jin\xE9 strany":2.5,P\u0159\u00EDsaha:2.5,SOCDEM:3,KS\u010CM:3,Zelen\u00ED:2,Svobodn\u00ED:2.5,PRO:2,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2024-02","pollster:id":"Kantar",middle_date:"2024-02-21",ANO:39,SPOLU:20,Pir\u00E1ti:10,SPD:9,STAN:7.5,"jin\xE9 strany":5.5,P\u0159\u00EDsaha:null,SOCDEM:2.5,KS\u010CM:2.5,Zelen\u00ED:2,Svobodn\u00ED:2,PRO:null,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2024-01","pollster:id":"Kantar",middle_date:"2024-01-24",ANO:35.5,SPOLU:22.5,Pir\u00E1ti:10,SPD:10,STAN:7,"jin\xE9 strany":2,P\u0159\u00EDsaha:3.5,SOCDEM:4,KS\u010CM:3,Zelen\u00ED:null,Svobodn\u00ED:2.5,PRO:null,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2023-11","pollster:id":"Kantar",middle_date:"2023-11-22",ANO:34.5,SPOLU:18.5,Pir\u00E1ti:12,SPD:10,STAN:7,"jin\xE9 strany":2,P\u0159\u00EDsaha:2.5,SOCDEM:4,KS\u010CM:2.5,Zelen\u00ED:3,Svobodn\u00ED:2,PRO:null,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:2,"Voln\xFD blok":null},{"poll:identifier":"2023-10","pollster:id":"Kantar",middle_date:"2023-10-25",ANO:33,SPOLU:21.5,Pir\u00E1ti:10.5,SPD:10.5,STAN:7,"jin\xE9 strany":6,P\u0159\u00EDsaha:2.5,SOCDEM:3.5,KS\u010CM:3.5,Zelen\u00ED:null,Svobodn\u00ED:null,PRO:2,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2023-09","pollster:id":"Kantar",middle_date:"2023-09-20",ANO:33.5,SPOLU:19.5,Pir\u00E1ti:8.5,SPD:9.5,STAN:7.5,"jin\xE9 strany":3,P\u0159\u00EDsaha:4,SOCDEM:3.5,KS\u010CM:3,Zelen\u00ED:2,Svobodn\u00ED:3,PRO:3,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2023-05","pollster:id":"Kantar",middle_date:"2023-05-24",ANO:33.5,SPOLU:24,Pir\u00E1ti:11.5,SPD:8,STAN:6,"jin\xE9 strany":3,P\u0159\u00EDsaha:2.5,SOCDEM:3.5,KS\u010CM:3.5,Zelen\u00ED:2.5,Svobodn\u00ED:null,PRO:2,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2023-04","pollster:id":"Kantar",middle_date:"2023-04-26",ANO:31,SPOLU:25,Pir\u00E1ti:11.5,SPD:9.5,STAN:6.5,"jin\xE9 strany":2,P\u0159\u00EDsaha:2.5,SOCDEM:5.5,KS\u010CM:2.5,Zelen\u00ED:2,Svobodn\u00ED:null,PRO:2,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2023-03","pollster:id":"Kantar",middle_date:"2023-03-28",ANO:29.5,SPOLU:27.5,Pir\u00E1ti:10.5,SPD:8,STAN:5.5,"jin\xE9 strany":5,P\u0159\u00EDsaha:3.5,SOCDEM:5,KS\u010CM:2.5,Zelen\u00ED:null,Svobodn\u00ED:null,PRO:3,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2023-02","pollster:id":"Kantar",middle_date:"2023-02-22",ANO:30.5,SPOLU:31,Pir\u00E1ti:null,SPD:9,STAN:null,"jin\xE9 strany":7,P\u0159\u00EDsaha:2.5,SOCDEM:5,KS\u010CM:2,Zelen\u00ED:null,Svobodn\u00ED:null,PRO:null,"Pir\xE1ti+STAN":13,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2022-10","pollster:id":"Kantar",middle_date:"2022-10-26",ANO:28,SPOLU:31.5,Pir\u00E1ti:null,SPD:11.5,STAN:null,"jin\xE9 strany":3.5,P\u0159\u00EDsaha:2.5,SOCDEM:4,KS\u010CM:3,Zelen\u00ED:null,Svobodn\u00ED:null,PRO:null,"Pir\xE1ti+STAN":14,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:2,"Voln\xFD blok":null},{"poll:identifier":"2022-09","pollster:id":"Kantar",middle_date:"2022-09-21",ANO:31.5,SPOLU:28.5,Pir\u00E1ti:null,SPD:12,STAN:null,"jin\xE9 strany":5,P\u0159\u00EDsaha:4.5,SOCDEM:2.5,KS\u010CM:2,Zelen\u00ED:2,Svobodn\u00ED:null,PRO:null,"Pir\xE1ti+STAN":12,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2022-08","pollster:id":"Kantar",middle_date:"2022-08-24",ANO:32,SPOLU:29,Pir\u00E1ti:null,SPD:11,STAN:null,"jin\xE9 strany":7,P\u0159\u00EDsaha:3.5,SOCDEM:3.5,KS\u010CM:4,Zelen\u00ED:null,Svobodn\u00ED:null,PRO:null,"Pir\xE1ti+STAN":10,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2022-05","pollster:id":"Kantar",middle_date:"2022-05-24",ANO:29.5,SPOLU:28.5,Pir\u00E1ti:null,SPD:11.5,STAN:null,"jin\xE9 strany":5.5,P\u0159\u00EDsaha:2.5,SOCDEM:5,KS\u010CM:2.5,Zelen\u00ED:2.5,Svobodn\u00ED:null,PRO:null,"Pir\xE1ti+STAN":12.5,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2022-04","pollster:id":"Kantar",middle_date:"2022-04-18",ANO:28.5,SPOLU:33.5,Pir\u00E1ti:null,SPD:11,STAN:null,"jin\xE9 strany":4.5,P\u0159\u00EDsaha:3,SOCDEM:4,KS\u010CM:2,Zelen\u00ED:2,Svobodn\u00ED:null,PRO:null,"Pir\xE1ti+STAN":11.5,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2022-03","pollster:id":"Kantar",middle_date:"2022-03-23",ANO:29,SPOLU:31.5,Pir\u00E1ti:null,SPD:9.5,STAN:null,"jin\xE9 strany":2.5,P\u0159\u00EDsaha:4,SOCDEM:3,KS\u010CM:2.5,Zelen\u00ED:null,Svobodn\u00ED:null,PRO:null,"Pir\xE1ti+STAN":15.5,"Trikol\xF3ra+S+S":2.5,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2022-03","pollster:id":"Median",middle_date:"2022-03-17",ANO:27.5,SPOLU:26.5,Pir\u00E1ti:null,SPD:10,STAN:null,"jin\xE9 strany":4,P\u0159\u00EDsaha:3,SOCDEM:5.5,KS\u010CM:4,Zelen\u00ED:null,Svobodn\u00ED:null,PRO:null,"Pir\xE1ti+STAN":16.5,"Trikol\xF3ra+S+S":3,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2022-02","pollster:id":"Kantar",middle_date:"2022-02-23",ANO:27.5,SPOLU:32.5,Pir\u00E1ti:null,SPD:12,STAN:null,"jin\xE9 strany":2,P\u0159\u00EDsaha:3.5,SOCDEM:3,KS\u010CM:2,Zelen\u00ED:null,Svobodn\u00ED:null,PRO:null,"Pir\xE1ti+STAN":14.5,"Trikol\xF3ra+S+S":3,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2021-11","pollster:id":"Median",middle_date:"2021-11-16",ANO:29.5,SPOLU:26,Pir\u00E1ti:null,SPD:8.5,STAN:null,"jin\xE9 strany":3.5,P\u0159\u00EDsaha:3,SOCDEM:4.5,KS\u010CM:4.5,Zelen\u00ED:null,Svobodn\u00ED:null,PRO:null,"Pir\xE1ti+STAN":16.5,"Trikol\xF3ra+S+S":4,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2021-11","pollster:id":"Kantar",middle_date:"2021-11-10",ANO:28,SPOLU:28,Pir\u00E1ti:null,SPD:9.5,STAN:null,"jin\xE9 strany":3,P\u0159\u00EDsaha:3.5,SOCDEM:4,KS\u010CM:3.5,Zelen\u00ED:null,Svobodn\u00ED:null,PRO:null,"Pir\xE1ti+STAN":17,"Trikol\xF3ra+S+S":3.5,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2021-10","pollster:id":"volby",middle_date:"2021-10-09",ANO:27.1,SPOLU:27.8,Pir\u00E1ti:null,SPD:9.6,STAN:null,"jin\xE9 strany":1.9,P\u0159\u00EDsaha:4.7,SOCDEM:4.7,KS\u010CM:3.6,Zelen\u00ED:1,Svobodn\u00ED:null,PRO:null,"Pir\xE1ti+STAN":15.6,"Trikol\xF3ra+S+S":2.8,Trikol\u00F3ra:null,"Voln\xFD blok":1.3}],jl=[{names:["ANO","SPOLU","Pir\xE1ti","SPD","STAN","jin\xE9 strany","P\u0159\xEDsaha","SOCDEM","KS\u010CM","Zelen\xED","Svobodn\xED","PRO","Pir\xE1ti+STAN","Trikol\xF3ra+S+S","Trikol\xF3ra","Voln\xFD blok"]}];const Vl={data:function(){return{polls:Ll,candidates:jl[0].names}},methods:{formatDate(n){return new Date(n).toLocaleDateString("cs")}}},Ul={class:"container"},Rl=l("h3",null,[D(" Zve\u0159ejn\u011Bn\xE9 pr\u016Fzkumy "),l("small",null,"Koalice")],-1),Zl={class:"table-responsive"},$l={class:"table table-striped table-hover table-condensed"},gl=l("th",null,null,-1),xl=l("th",null,[D("Datum\xA0"),l("small",null,"(st\u0159ed)")],-1);function Il(n,u,r,P,d,p){const o=K;return e(),i("div",Ul,[Rl,l("div",Zl,[l("table",$l,[l("thead",null,[l("tr",null,[gl,xl,(e(!0),i(O,null,_(n.candidates,(t,S)=>(e(),i("th",{key:S},[l("small",null,a(t),1)]))),128))])]),l("tbody",null,[(e(!0),i(O,null,_(n.polls,(t,S)=>(e(),i("tr",{key:S},[l("th",null,a(t["pollster:id"]),1),l("td",null,a(p.formatDate(t.middle_date)),1),(e(!0),i(O,null,_(n.candidates,(T,b)=>(e(),i("td",{key:b},[s(o,{decNumber:t[T]},null,8,["decNumber"])]))),128))]))),128))])])])])}var wl=c(Vl,[["render",Il]]);const Fl="shares/2024-05-19T15:31:02.456618_psp.png";var zl={filename:Fl};const Bl=L({setup(n,{expose:u}){u();const r="https://mandaty.cz/",P="493242628099686";j({title:"Mand\xE1ty.cz",meta:[{hid:"og:name",property:"og:image",content:r+zl.filename},{hid:"og:url",property:"og:url",content:r},{hid:"og:type",property:"og:type",content:"website"},{hid:"og:title",property:"og:title",content:"Mand\xE1ty.cz"},{hid:"og:description",property:"og:description",content:"V\xFDvoj volebn\xEDch model\u016F dle pr\u016Fzkum\u016F ve\u0159ejn\xE9ho m\xEDn\u011Bn\xED"},{hid:"fb:app_id",property:"fb:app_id",content:P}],link:[{rel:"icon",type:"image/x-icon",href:r+"favicon.svg"}]});const d={BASE_URL:r,FB_APP_ID:P};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}),Hl={class:"container"},Wl=l("h1",{class:"pt-4"},"Sn\u011Bmovna 2021-2025",-1),ql=l("hr",null,null,-1),Gl=l("hr",null,null,-1),Jl=l("hr",null,null,-1),Ql=l("hr",null,null,-1);function Xl(n,u,r,P,d,p){const o=f,t=tl,S=ml,T=Cl,b=wl;return e(),i("div",Hl,[s(o),Wl,ql,s(t),Gl,s(S),Jl,s(T),Ql,s(b)])}var en=c(Bl,[["render",Xl]]);export{en as default};
