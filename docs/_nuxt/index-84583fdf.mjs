import{_ as f}from"./ChartLinks-d841a352.mjs";import{_ as T,o as i,c as o,a as l,t as r,F as u,r as P,e as _,p as k,f as m,n as U,q as y,h,b as S,i as A,s as E,k as C,u as j}from"./entry-1d1a0835.mjs";import{_ as K}from"./DecNumber-84c1a7b4.mjs";const V=[{party:"ANO",median:81,lo:68,hi:94,in:1,id:"ANO",name:"Hnut\xED ANO",abbreviation:"ANO",color:"#261060",needs:.05,mps:72,seats:81,difference:9},{party:"SPOLU",median:44,lo:31,hi:58,in:.994,id:"SPOLU",name:"Koalice ODS, KDU-\u010CSL, TOP 09",abbreviation:"SPOLU",color:"#004494",needs:.11,mps:71,seats:43,difference:-28},{party:"STAN",median:25,lo:17,hi:34,in:1,id:"STAN",name:"Starostov\xE9 a nez\xE1visl\xED",abbreviation:"STAN",color:"#CE0F68",needs:.05,mps:33,seats:25,difference:-8},{party:"P\u0159\xEDsaha+Motor",median:16,lo:9,hi:22,in:.957,id:"P\u0159\xEDsaha+Motor",name:"P\u0159\xEDsaha - Motorist\xE9 sob\u011B",abbreviation:"P\u0159\xEDsaha a Motor.",color:"#0033FF",needs:.05,mps:0,seats:15,difference:15},{party:"SPD",median:16,lo:0,hi:24,in:.851,id:"SPD",name:"Svoboda a p\u0159\xEDm\xE1 demokracie - Tomio Okamura",abbreviation:"SPD",color:"#EA2329",needs:.05,mps:20,seats:14,difference:-6},{party:"Pir\xE1ti",median:13,lo:0,hi:22,in:.752,id:"Pir\xE1ti",name:"\u010Cesk\xE1 pir\xE1tsk\xE1 strana",abbreviation:"Pir\xE1ti",color:"#000000",needs:.05,mps:4,seats:13,difference:9},{party:"KS\u010CM",median:9,lo:0,hi:17,in:.56,id:"KS\u010CM",name:"Komunistick\xE1 strana \u010Cech a Moravy",abbreviation:"KS\u010CM",color:"#8C0000",needs:.05,mps:0,seats:9,difference:9},{party:"SOCDEM",median:0,lo:0,hi:11,in:.131,id:"SOCDEM",name:"\u010Cesk\xE1 strana soci\xE1ln\u011B demokratick\xE1",abbreviation:"SOCDEM",color:"#F07D00",needs:.05,mps:0,seats:0,difference:0}],Z="2024-12-06";var b={data:V,date:Z};const R={data:function(){return{seats:b.data,date:new Date(b.date).toLocaleDateString("cs-CZ")}},filters:{abs(n){return Math.abs(n)}}},N=n=>(k("data-v-afe46c60"),n=n(),m(),n),$=_("Po\u010Det mand\xE1t\u016F "),g=N(()=>l("small",null,"s odhadem chyby",-1)),x=_(),I={class:"badge"},w={class:"container"},F={class:"row"},z={class:"card text-center mb-2"},B={class:"card-header"},H={class:"card-body"},q={class:"row"},W=N(()=>l("div",{class:"col-3"},null,-1)),G={class:"col-6 text-center"},J={class:"number"},Q={key:0},X={class:"text-success"},Y={key:1},ll={class:"text-danger"},nl={key:2},il=N(()=>l("span",{class:"text-muted"},null,-1)),ol=[il],el={class:"lo-hi"};function tl(n,O,a,D,d,M){return i(),o("div",null,[l("h3",null,[$,g,x,l("span",I,r(n.date),1)]),l("div",w,[l("div",F,[(i(!0),o(u,null,P(n.seats,(e,t)=>(i(),o("div",{key:t,class:"col-xl-3 col-lg-4 col-sm-6"},[l("div",z,[l("div",B,[l("h4",{style:U({color:e.color})},r(e.abbreviation),5)]),l("div",H,[l("div",q,[W,l("div",G,[l("div",null,[l("span",J,r(e.seats),1),e.difference>0?(i(),o("span",Q,[l("span",X,"+"+r(e.difference),1)])):e.difference<0?(i(),o("span",Y,[l("span",ll,r(e.difference),1)])):(i(),o("span",nl,ol))])])]),l("div",el,[l("strong",null,r(e.lo)+" - "+r(e.hi),1)])])])]))),128))])])])}var rl=T(R,[["render",tl],["__scopeId","data-v-afe46c60"]]);const al={data:function(){return{seats:b.data,date:new Date(b.date).toLocaleDateString("cs-CZ")}},methods:{formatPercentage(n){return n=parseFloat(n),isNaN(n)?"<&nbsp;1%":n>.99?">&nbsp;99%":n<.03?"<&nbsp;"+Math.round(Math.ceil(n*100))+"%":"~&nbsp;"+Math.round(n*100)+"%"}}},dl=l("h3",null,"\u0160ance na vstup do Sn\u011Bmovny",-1),Sl={class:"table-responsive"},sl={class:"table table-hover table-condensed"},ul=["innerHTML"];function Pl(n,O,a,D,d,M){return i(),o("div",null,[dl,l("div",Sl,[l("table",sl,[l("thead",null,[l("tr",null,[(i(!0),o(u,null,P(n.seats,(e,t)=>(i(),o("th",{key:t},r(e.abbreviation),1))),128))])]),l("tbody",null,[l("tr",null,[(i(!0),o(u,null,P(n.seats,(e,t)=>(i(),o("td",{key:t,innerHTML:M.formatPercentage(e.in)},null,8,ul))),128))])])])])])}var Ol=T(al,[["render",Pl]]);const Dl={},Ml=n=>(k("data-v-6d68b17d"),n=n(),m(),n),Tl={id:"image-wrapper"},_l=Ml(()=>l("img",{src:y,class:"image-small"},null,-1)),pl=[_l];function cl(n,O){return i(),o("div",Tl,pl)}var v=T(Dl,[["render",cl],["__scopeId","data-v-6d68b17d"]]),bl=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"}));const kl={name:"SnemovnaPollsChart",data(){return{isMobile:!1}},mounted(){this.isMobile=window.innerWidth<666,console.log("isMobile:",this.isMobile)},components:{SnemovnaPollsPictureChart:()=>h(()=>Promise.resolve().then(function(){return bl}),void 0),SnemovnaPollsInteractiveChart:()=>h(()=>import("./entry-1d1a0835.mjs").then(function(n){return n.S}),["entry-1d1a0835.mjs","entry.e616280e.css"])}},ml=n=>(k("data-v-c7c0d9ea"),n=n(),m(),n),Nl={id:"image-wrapper"},hl=ml(()=>l("h3",null,[_(" V\xFDvoj volebn\xEDch model\u016F "),l("small",null,"dle pr\u016Fzkum\u016F ve\u0159ejn\xE9ho m\xEDn\u011Bn\xED ")],-1)),Al={key:0},Kl={key:1};function vl(n,O,a,D,d,M){const e=v,t=E;return i(),o("div",Nl,[hl,d.isMobile?(i(),o("div",Al,[S(e)])):A("",!0),d.isMobile?A("",!0):(i(),o("div",Kl,[S(t)]))])}var Ll=T(kl,[["render",vl],["__scopeId","data-v-c7c0d9ea"]]),fl=[{"poll:identifier":"2024-12","pollster:id":"NMS",middle_date:"2024-12-06",ANO:33.6,ODS:null,STAN:11.2,SPD:7.9,Pir\u00E1ti:5.9,Motorist\u00E9:5.3,KS\u010CM:5.2,"TOP 09":null,SOCDEM:3.7,"jin\xE9 strany":1.1,Zelen\u00ED:1.7,"KDU-\u010CSL":null,P\u0159\u00EDsaha:2.3,SPOLU:18.3,Trikol\u00F3ra:1.6,PRO:1.3,Svobodn\u00ED:.9,"Voln\xFD blok":null},{"poll:identifier":"2024-11","pollster:id":"Median",middle_date:"2024-11-15",ANO:33.5,ODS:11.5,STAN:10,SPD:6.5,Pir\u00E1ti:6.5,Motorist\u00E9:6.5,KS\u010CM:6.5,"TOP 09":4.5,SOCDEM:4,"jin\xE9 strany":3,Zelen\u00ED:2.5,"KDU-\u010CSL":2.5,P\u0159\u00EDsaha:2,SPOLU:null,Trikol\u00F3ra:null,PRO:null,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2024-11","pollster:id":"NMS",middle_date:"2024-11-08",ANO:35.3,ODS:10,STAN:11.1,SPD:7,Pir\u00E1ti:5.7,Motorist\u00E9:4.4,KS\u010CM:5.8,"TOP 09":3.8,SOCDEM:3.3,"jin\xE9 strany":5.4,Zelen\u00ED:null,"KDU-\u010CSL":2.8,P\u0159\u00EDsaha:3,SPOLU:null,Trikol\u00F3ra:null,PRO:null,Svobodn\u00ED:2.4,"Voln\xFD blok":null},{"poll:identifier":"2024-11","pollster:id":"Kantar",middle_date:"2024-10-30",ANO:37,ODS:15,STAN:11.5,SPD:7,Pir\u00E1ti:7,Motorist\u00E9:2.5,KS\u010CM:3.5,"TOP 09":3,SOCDEM:2,"jin\xE9 strany":5.5,Zelen\u00ED:2,"KDU-\u010CSL":4,P\u0159\u00EDsaha:null,SPOLU:null,Trikol\u00F3ra:null,PRO:null,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2024-10","pollster:id":"Median",middle_date:"2024-10-16",ANO:33.5,ODS:12,STAN:11,SPD:5,Pir\u00E1ti:6.5,Motorist\u00E9:6,KS\u010CM:5,"TOP 09":4,SOCDEM:3,"jin\xE9 strany":3,Zelen\u00ED:null,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:3.5,SPOLU:null,Trikol\u00F3ra:null,PRO:2,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2024-10","pollster:id":"STEM",middle_date:"2024-10-06",ANO:32.1,ODS:14.2,STAN:10.6,SPD:9.4,Pir\u00E1ti:5.9,Motorist\u00E9:3.2,KS\u010CM:5.3,"TOP 09":3.7,SOCDEM:2.6,"jin\xE9 strany":1.9,Zelen\u00ED:1.1,"KDU-\u010CSL":2.7,P\u0159\u00EDsaha:4.6,SPOLU:null,Trikol\u00F3ra:1.1,PRO:null,Svobodn\u00ED:1.6,"Voln\xFD blok":null},{"poll:identifier":"2024-10","pollster:id":"NMS",middle_date:"2024-10-06",ANO:32.9,ODS:12.2,STAN:12,SPD:7.5,Pir\u00E1ti:6.8,Motorist\u00E9:3.6,KS\u010CM:4.6,"TOP 09":3.8,SOCDEM:2.9,"jin\xE9 strany":4.7,Zelen\u00ED:2,"KDU-\u010CSL":2.7,P\u0159\u00EDsaha:4.3,SPOLU:null,Trikol\u00F3ra:null,PRO:null,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2024-10","pollster:id":"Kantar",middle_date:"2024-10-05",ANO:35.5,ODS:14.5,STAN:13,SPD:6.5,Pir\u00E1ti:5,Motorist\u00E9:2.5,KS\u010CM:3,"TOP 09":4.5,SOCDEM:2.5,"jin\xE9 strany":4.5,Zelen\u00ED:null,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:3,SPOLU:null,Trikol\u00F3ra:null,PRO:null,Svobodn\u00ED:2,"Voln\xFD blok":null},{"poll:identifier":"2024-09","pollster:id":"Median",middle_date:"2024-09-15",ANO:33,ODS:11.5,STAN:11,SPD:7,Pir\u00E1ti:8.5,Motorist\u00E9:3.5,KS\u010CM:4.5,"TOP 09":4.5,SOCDEM:4,"jin\xE9 strany":2,Zelen\u00ED:2,"KDU-\u010CSL":2,P\u0159\u00EDsaha:4.5,SPOLU:null,Trikol\u00F3ra:null,PRO:2,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2024-09","pollster:id":"NMS",middle_date:"2024-09-06",ANO:32.1,ODS:11.3,STAN:9.2,SPD:7.7,Pir\u00E1ti:7.8,Motorist\u00E9:5.5,KS\u010CM:4.5,"TOP 09":4.5,SOCDEM:2.5,"jin\xE9 strany":5.2,Zelen\u00ED:2.2,"KDU-\u010CSL":null,P\u0159\u00EDsaha:5.2,SPOLU:null,Trikol\u00F3ra:null,PRO:null,Svobodn\u00ED:2.3,"Voln\xFD blok":null},{"poll:identifier":"2024-09","pollster:id":"STEM",middle_date:"2024-09-03",ANO:33.4,ODS:14.9,STAN:6.8,SPD:7.4,Pir\u00E1ti:7.8,Motorist\u00E9:2.6,KS\u010CM:4.6,"TOP 09":5.6,SOCDEM:2.8,"jin\xE9 strany":.9,Zelen\u00ED:2.7,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:3.3,SPOLU:null,Trikol\u00F3ra:1,PRO:1,Svobodn\u00ED:1.8,"Voln\xFD blok":null},{"poll:identifier":"2024-08","pollster:id":"NMS",middle_date:"2024-08-04",ANO:29.3,ODS:14.3,STAN:9.6,SPD:6,Pir\u00E1ti:8,Motorist\u00E9:4.1,KS\u010CM:5.7,"TOP 09":4.7,SOCDEM:2.8,"jin\xE9 strany":6.2,Zelen\u00ED:2.3,"KDU-\u010CSL":2.4,P\u0159\u00EDsaha:4.6,SPOLU:null,Trikol\u00F3ra:null,PRO:null,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2024-07","pollster:id":"Median",middle_date:"2024-07-16",ANO:33,ODS:14,STAN:9,SPD:8,Pir\u00E1ti:8,Motorist\u00E9:null,KS\u010CM:4,"TOP 09":4,SOCDEM:3.5,"jin\xE9 strany":2.5,Zelen\u00ED:2.5,"KDU-\u010CSL":2.5,P\u0159\u00EDsaha:5,SPOLU:null,Trikol\u00F3ra:2,PRO:2,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2024-07","pollster:id":"NMS",middle_date:"2024-07-08",ANO:28.2,ODS:11.3,STAN:10.1,SPD:6.8,Pir\u00E1ti:9.1,Motorist\u00E9:null,KS\u010CM:5.6,"TOP 09":5.2,SOCDEM:3.2,"jin\xE9 strany":6.9,Zelen\u00ED:null,"KDU-\u010CSL":3.2,P\u0159\u00EDsaha:7.2,SPOLU:null,Trikol\u00F3ra:null,PRO:null,Svobodn\u00ED:3.2,"Voln\xFD blok":null},{"poll:identifier":"2024-06","pollster:id":"Kantar",middle_date:"2024-06-15",ANO:34,ODS:16,STAN:8.5,SPD:6,Pir\u00E1ti:9,Motorist\u00E9:null,KS\u010CM:3,"TOP 09":4,SOCDEM:2.5,"jin\xE9 strany":4.5,Zelen\u00ED:2.5,"KDU-\u010CSL":3,P\u0159\u00EDsaha:4.5,SPOLU:null,Trikol\u00F3ra:null,PRO:null,Svobodn\u00ED:2.5,"Voln\xFD blok":null},{"poll:identifier":"2024-06","pollster:id":"Median",middle_date:"2024-06-15",ANO:30.5,ODS:12,STAN:9,SPD:8.5,Pir\u00E1ti:10.5,Motorist\u00E9:null,KS\u010CM:4.5,"TOP 09":5,SOCDEM:2.5,"jin\xE9 strany":3.5,Zelen\u00ED:2,"KDU-\u010CSL":4.5,P\u0159\u00EDsaha:5,SPOLU:null,Trikol\u00F3ra:null,PRO:1.5,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2024-06","pollster:id":"STEM",middle_date:"2024-06-11",ANO:32.9,ODS:14.8,STAN:6.8,SPD:7.3,Pir\u00E1ti:8.7,Motorist\u00E9:2.7,KS\u010CM:5.1,"TOP 09":4.5,SOCDEM:2.5,"jin\xE9 strany":.9,Zelen\u00ED:2,"KDU-\u010CSL":2.5,P\u0159\u00EDsaha:3.7,SPOLU:null,Trikol\u00F3ra:1.7,PRO:1.9,Svobodn\u00ED:2,"Voln\xFD blok":null},{"poll:identifier":"2024-05","pollster:id":"Median",middle_date:"2024-05-18",ANO:33,ODS:14.5,STAN:8.5,SPD:7.5,Pir\u00E1ti:10,Motorist\u00E9:null,KS\u010CM:4,"TOP 09":5.5,SOCDEM:3.5,"jin\xE9 strany":2,Zelen\u00ED:1.5,"KDU-\u010CSL":2,P\u0159\u00EDsaha:3,SPOLU:null,Trikol\u00F3ra:1.5,PRO:3.5,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2024-04","pollster:id":"Kantar",middle_date:"2024-05-01",ANO:32,ODS:15.5,STAN:7.5,SPD:9,Pir\u00E1ti:11,Motorist\u00E9:null,KS\u010CM:2.5,"TOP 09":5,SOCDEM:3,"jin\xE9 strany":5,Zelen\u00ED:2.5,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:3.5,SPOLU:null,Trikol\u00F3ra:null,PRO:null,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2024-04","pollster:id":"Median",middle_date:"2024-04-15",ANO:32.5,ODS:13,STAN:8,SPD:10,Pir\u00E1ti:10,Motorist\u00E9:null,KS\u010CM:3.5,"TOP 09":3.5,SOCDEM:4.5,"jin\xE9 strany":2,Zelen\u00ED:2.5,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:2.5,SPOLU:null,Trikol\u00F3ra:1.5,PRO:3,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2024-03","pollster:id":"Kantar",middle_date:"2024-03-27",ANO:34.5,ODS:16,STAN:6.5,SPD:8,Pir\u00E1ti:10.5,Motorist\u00E9:null,KS\u010CM:3,"TOP 09":4.5,SOCDEM:3,"jin\xE9 strany":2,Zelen\u00ED:2,"KDU-\u010CSL":3,P\u0159\u00EDsaha:2.5,SPOLU:null,Trikol\u00F3ra:null,PRO:2,Svobodn\u00ED:2.5,"Voln\xFD blok":null},{"poll:identifier":"2024-03","pollster:id":"STEM",middle_date:"2024-03-20",ANO:32.9,ODS:14.5,STAN:6.6,SPD:9.3,Pir\u00E1ti:10.5,Motorist\u00E9:null,KS\u010CM:4.5,"TOP 09":5.2,SOCDEM:3.6,"jin\xE9 strany":.4,Zelen\u00ED:2.1,"KDU-\u010CSL":3.1,P\u0159\u00EDsaha:2.8,SPOLU:null,Trikol\u00F3ra:.8,PRO:1.9,Svobodn\u00ED:1.9,"Voln\xFD blok":null},{"poll:identifier":"2024-03","pollster:id":"Median",middle_date:"2024-03-19",ANO:32,ODS:14,STAN:6,SPD:7,Pir\u00E1ti:10.5,Motorist\u00E9:null,KS\u010CM:4.5,"TOP 09":3.5,SOCDEM:4.5,"jin\xE9 strany":2,Zelen\u00ED:3,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:3.5,SPOLU:null,Trikol\u00F3ra:2,PRO:4,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2024-02","pollster:id":"Kantar",middle_date:"2024-02-21",ANO:38.5,ODS:14.5,STAN:7,SPD:9,Pir\u00E1ti:9.5,Motorist\u00E9:null,KS\u010CM:2.5,"TOP 09":5,SOCDEM:2.5,"jin\xE9 strany":9.5,Zelen\u00ED:null,"KDU-\u010CSL":2,P\u0159\u00EDsaha:null,SPOLU:null,Trikol\u00F3ra:null,PRO:null,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2024-02","pollster:id":"Median",middle_date:"2024-02-17",ANO:31,ODS:12.5,STAN:9,SPD:9.5,Pir\u00E1ti:11,Motorist\u00E9:null,KS\u010CM:4,"TOP 09":5.5,SOCDEM:4.5,"jin\xE9 strany":3,Zelen\u00ED:2,"KDU-\u010CSL":3,P\u0159\u00EDsaha:3,SPOLU:null,Trikol\u00F3ra:null,PRO:2,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2024-01","pollster:id":"Kantar",middle_date:"2024-01-24",ANO:35,ODS:15.5,STAN:6.5,SPD:9.5,Pir\u00E1ti:9.5,Motorist\u00E9:null,KS\u010CM:3,"TOP 09":5,SOCDEM:4,"jin\xE9 strany":2.5,Zelen\u00ED:null,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:3.5,SPOLU:null,Trikol\u00F3ra:null,PRO:null,Svobodn\u00ED:2.5,"Voln\xFD blok":null},{"poll:identifier":"2024-01","pollster:id":"Median",middle_date:"2024-01-23",ANO:31.5,ODS:12,STAN:7,SPD:10.5,Pir\u00E1ti:13,Motorist\u00E9:null,KS\u010CM:4.5,"TOP 09":5.5,SOCDEM:4,"jin\xE9 strany":1.5,Zelen\u00ED:1.5,"KDU-\u010CSL":3,P\u0159\u00EDsaha:3,SPOLU:null,Trikol\u00F3ra:null,PRO:3,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2024-01","pollster:id":"STEM",middle_date:"2024-01-22",ANO:33.4,ODS:13.2,STAN:7,SPD:10,Pir\u00E1ti:11.3,Motorist\u00E9:null,KS\u010CM:4.8,"TOP 09":5,SOCDEM:3.1,"jin\xE9 strany":1.2,Zelen\u00ED:2.5,"KDU-\u010CSL":2.7,P\u0159\u00EDsaha:2.6,SPOLU:null,Trikol\u00F3ra:1.4,PRO:null,Svobodn\u00ED:1.7,"Voln\xFD blok":null},{"poll:identifier":"2023-12","pollster:id":"Median",middle_date:"2023-12-14",ANO:35,ODS:13,STAN:6.5,SPD:9,Pir\u00E1ti:10.5,Motorist\u00E9:null,KS\u010CM:4.5,"TOP 09":6,SOCDEM:4.5,"jin\xE9 strany":2,Zelen\u00ED:1.5,"KDU-\u010CSL":2.5,P\u0159\u00EDsaha:2.5,SPOLU:null,Trikol\u00F3ra:null,PRO:2.5,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2023-11","pollster:id":"IPSOS",middle_date:"2023-11-24",ANO:34.3,ODS:13.3,STAN:6.6,SPD:9.2,Pir\u00E1ti:10.5,Motorist\u00E9:null,KS\u010CM:2.5,"TOP 09":5.1,SOCDEM:4.1,"jin\xE9 strany":1.1,Zelen\u00ED:1,"KDU-\u010CSL":4.3,P\u0159\u00EDsaha:2.8,SPOLU:null,Trikol\u00F3ra:1.2,PRO:1.8,Svobodn\u00ED:2.2,"Voln\xFD blok":null},{"poll:identifier":"2023-11","pollster:id":"Kantar",middle_date:"2023-11-22",ANO:34.5,ODS:12.5,STAN:7,SPD:10,Pir\u00E1ti:11.5,Motorist\u00E9:null,KS\u010CM:2.5,"TOP 09":5,SOCDEM:3.5,"jin\xE9 strany":2,Zelen\u00ED:3,"KDU-\u010CSL":2,P\u0159\u00EDsaha:2.5,SPOLU:null,Trikol\u00F3ra:2,PRO:null,Svobodn\u00ED:2,"Voln\xFD blok":null},{"poll:identifier":"2023-11","pollster:id":"Median",middle_date:"2023-11-20",ANO:34.5,ODS:15.5,STAN:6,SPD:8.5,Pir\u00E1ti:11,Motorist\u00E9:null,KS\u010CM:3.5,"TOP 09":5.5,SOCDEM:4.5,"jin\xE9 strany":1,Zelen\u00ED:1.5,"KDU-\u010CSL":4,P\u0159\u00EDsaha:1.5,SPOLU:null,Trikol\u00F3ra:1.5,PRO:1.5,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2023-11","pollster:id":"STEM",middle_date:"2023-11-08",ANO:33.2,ODS:11.6,STAN:6.4,SPD:12,Pir\u00E1ti:10.2,Motorist\u00E9:null,KS\u010CM:3,"TOP 09":5.2,SOCDEM:4.5,"jin\xE9 strany":.4,Zelen\u00ED:1.6,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:2.9,SPOLU:null,Trikol\u00F3ra:1.2,PRO:1.9,Svobodn\u00ED:2.3,"Voln\xFD blok":null},{"poll:identifier":"2023-10","pollster:id":"Kantar",middle_date:"2023-10-25",ANO:32.5,ODS:15.5,STAN:7,SPD:10.5,Pir\u00E1ti:10.5,Motorist\u00E9:null,KS\u010CM:3.5,"TOP 09":4.5,SOCDEM:3.5,"jin\xE9 strany":5.5,Zelen\u00ED:null,"KDU-\u010CSL":2.5,P\u0159\u00EDsaha:2.5,SPOLU:null,Trikol\u00F3ra:null,PRO:2,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2023-10","pollster:id":"Median",middle_date:"2023-10-17",ANO:35,ODS:13.5,STAN:6,SPD:10.5,Pir\u00E1ti:9,Motorist\u00E9:null,KS\u010CM:3,"TOP 09":6,SOCDEM:3.5,"jin\xE9 strany":3,Zelen\u00ED:1.5,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:3,SPOLU:null,Trikol\u00F3ra:null,PRO:2.5,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2023-09","pollster:id":"Kantar",middle_date:"2023-09-20",ANO:33.5,ODS:12,STAN:7.5,SPD:9.5,Pir\u00E1ti:8.5,Motorist\u00E9:null,KS\u010CM:3,"TOP 09":5,SOCDEM:3.5,"jin\xE9 strany":2,Zelen\u00ED:2,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:4,SPOLU:null,Trikol\u00F3ra:null,PRO:3,Svobodn\u00ED:3,"Voln\xFD blok":null},{"poll:identifier":"2023-09","pollster:id":"Median",middle_date:"2023-09-18",ANO:34,ODS:13,STAN:6.5,SPD:9.5,Pir\u00E1ti:11.5,Motorist\u00E9:null,KS\u010CM:4.5,"TOP 09":5.5,SOCDEM:4,"jin\xE9 strany":3,Zelen\u00ED:2,"KDU-\u010CSL":4,P\u0159\u00EDsaha:null,SPOLU:null,Trikol\u00F3ra:null,PRO:2.5,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2023-09","pollster:id":"STEM",middle_date:"2023-09-12",ANO:30.8,ODS:13.1,STAN:5.3,SPD:10.9,Pir\u00E1ti:9.6,Motorist\u00E9:null,KS\u010CM:4.3,"TOP 09":5.4,SOCDEM:4,"jin\xE9 strany":.6,Zelen\u00ED:2.7,"KDU-\u010CSL":5,P\u0159\u00EDsaha:3.2,SPOLU:null,Trikol\u00F3ra:1.1,PRO:1.2,Svobodn\u00ED:2.8,"Voln\xFD blok":null},{"poll:identifier":"2023-07","pollster:id":"Median",middle_date:"2023-07-20",ANO:33,ODS:15,STAN:6.5,SPD:8,Pir\u00E1ti:12,Motorist\u00E9:null,KS\u010CM:3,"TOP 09":5.5,SOCDEM:5,"jin\xE9 strany":1.5,Zelen\u00ED:1.5,"KDU-\u010CSL":4,P\u0159\u00EDsaha:3,SPOLU:null,Trikol\u00F3ra:null,PRO:1.5,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2023-06","pollster:id":"Median",middle_date:"2023-06-21",ANO:35.5,ODS:14,STAN:5.5,SPD:10,Pir\u00E1ti:11,Motorist\u00E9:null,KS\u010CM:2.5,"TOP 09":5,SOCDEM:4,"jin\xE9 strany":1.5,Zelen\u00ED:2.5,"KDU-\u010CSL":2,P\u0159\u00EDsaha:2.5,SPOLU:null,Trikol\u00F3ra:2.5,PRO:1.5,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2023-05","pollster:id":"Kantar",middle_date:"2023-05-24",ANO:33.5,ODS:17,STAN:6.5,SPD:8,Pir\u00E1ti:11.5,Motorist\u00E9:null,KS\u010CM:3.5,"TOP 09":3.5,SOCDEM:3,"jin\xE9 strany":3,Zelen\u00ED:2,"KDU-\u010CSL":4,P\u0159\u00EDsaha:2.5,SPOLU:null,Trikol\u00F3ra:null,PRO:2,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2023-05","pollster:id":"STEM",middle_date:"2023-05-23",ANO:33.5,ODS:14.6,STAN:5.8,SPD:9.3,Pir\u00E1ti:10.8,Motorist\u00E9:null,KS\u010CM:3.8,"TOP 09":4.7,SOCDEM:4.1,"jin\xE9 strany":.2,Zelen\u00ED:2.3,"KDU-\u010CSL":3.4,P\u0159\u00EDsaha:2.9,SPOLU:null,Trikol\u00F3ra:1.4,PRO:1.2,Svobodn\u00ED:2.2,"Voln\xFD blok":null},{"poll:identifier":"2023-05","pollster:id":"Median",middle_date:"2023-05-17",ANO:34.5,ODS:15,STAN:6,SPD:8.5,Pir\u00E1ti:10.5,Motorist\u00E9:null,KS\u010CM:3.5,"TOP 09":5.5,SOCDEM:4,"jin\xE9 strany":3,Zelen\u00ED:null,"KDU-\u010CSL":4,P\u0159\u00EDsaha:2,SPOLU:null,Trikol\u00F3ra:2.5,PRO:null,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2023-04","pollster:id":"Kantar",middle_date:"2023-04-26",ANO:30.5,ODS:17,STAN:6,SPD:9,Pir\u00E1ti:11,Motorist\u00E9:null,KS\u010CM:2.5,"TOP 09":5,SOCDEM:5.5,"jin\xE9 strany":2,Zelen\u00ED:2,"KDU-\u010CSL":5,P\u0159\u00EDsaha:2.5,SPOLU:null,Trikol\u00F3ra:null,PRO:2,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2023-04","pollster:id":"Median",middle_date:"2023-04-16",ANO:31,ODS:15,STAN:7.5,SPD:8.5,Pir\u00E1ti:10.5,Motorist\u00E9:null,KS\u010CM:4,"TOP 09":4.5,SOCDEM:4,"jin\xE9 strany":4,Zelen\u00ED:2,"KDU-\u010CSL":5.5,P\u0159\u00EDsaha:2,SPOLU:null,Trikol\u00F3ra:1.5,PRO:null,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2023-03","pollster:id":"Kantar",middle_date:"2023-03-28",ANO:29.5,ODS:20,STAN:5.5,SPD:8,Pir\u00E1ti:11,Motorist\u00E9:null,KS\u010CM:2.5,"TOP 09":4,SOCDEM:5,"jin\xE9 strany":5,Zelen\u00ED:null,"KDU-\u010CSL":3,P\u0159\u00EDsaha:3.5,SPOLU:null,Trikol\u00F3ra:null,PRO:3,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2023-03","pollster:id":"Median",middle_date:"2023-03-18",ANO:34.5,ODS:15.5,STAN:8,SPD:10,Pir\u00E1ti:8.5,Motorist\u00E9:null,KS\u010CM:3,"TOP 09":5,SOCDEM:4,"jin\xE9 strany":1.5,Zelen\u00ED:2,"KDU-\u010CSL":4,P\u0159\u00EDsaha:2,SPOLU:null,Trikol\u00F3ra:3,PRO:null,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2023-02","pollster:id":"Median",middle_date:"2023-02-23",ANO:32,ODS:14.5,STAN:7,SPD:9.5,Pir\u00E1ti:11.5,Motorist\u00E9:null,KS\u010CM:3.5,"TOP 09":5,SOCDEM:5,"jin\xE9 strany":2.5,Zelen\u00ED:2,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:2.5,SPOLU:null,Trikol\u00F3ra:1.5,PRO:null,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2023-02","pollster:id":"Kantar",middle_date:"2023-02-22",ANO:29.5,ODS:21.5,STAN:7,SPD:8.5,Pir\u00E1ti:9,Motorist\u00E9:null,KS\u010CM:2,"TOP 09":5,SOCDEM:4.5,"jin\xE9 strany":6.5,Zelen\u00ED:null,"KDU-\u010CSL":4,P\u0159\u00EDsaha:2.5,SPOLU:null,Trikol\u00F3ra:null,PRO:null,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2022-12","pollster:id":"STEM",middle_date:"2022-12-02",ANO:30.8,ODS:13.9,STAN:6.4,SPD:12.4,Pir\u00E1ti:9.4,Motorist\u00E9:null,KS\u010CM:4.2,"TOP 09":4.6,SOCDEM:4,"jin\xE9 strany":9.5,Zelen\u00ED:null,"KDU-\u010CSL":4.9,P\u0159\u00EDsaha:null,SPOLU:null,Trikol\u00F3ra:null,PRO:null,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2022-10","pollster:id":"Kantar",middle_date:"2022-10-26",ANO:26.5,ODS:21.5,STAN:6,SPD:11,Pir\u00E1ti:11.5,Motorist\u00E9:null,KS\u010CM:2.5,"TOP 09":5.5,SOCDEM:3.5,"jin\xE9 strany":4,Zelen\u00ED:null,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:2.5,SPOLU:null,Trikol\u00F3ra:2,PRO:null,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2022-10","pollster:id":"Median",middle_date:"2022-10-16",ANO:31.5,ODS:13.5,STAN:5.5,SPD:12,Pir\u00E1ti:11,Motorist\u00E9:null,KS\u010CM:2,"TOP 09":5,SOCDEM:5.5,"jin\xE9 strany":2.5,Zelen\u00ED:2,"KDU-\u010CSL":6,P\u0159\u00EDsaha:2,SPOLU:null,Trikol\u00F3ra:1.5,PRO:null,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2022-09","pollster:id":"Kantar",middle_date:"2022-09-21",ANO:29.5,ODS:18,STAN:7.5,SPD:11.5,Pir\u00E1ti:9,Motorist\u00E9:null,KS\u010CM:2,"TOP 09":4,SOCDEM:2.5,"jin\xE9 strany":4,Zelen\u00ED:2,"KDU-\u010CSL":6,P\u0159\u00EDsaha:4,SPOLU:null,Trikol\u00F3ra:null,PRO:null,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2022-09","pollster:id":"Median",middle_date:"2022-09-15",ANO:30.5,ODS:16,STAN:5.5,SPD:11.5,Pir\u00E1ti:11,Motorist\u00E9:null,KS\u010CM:2.5,"TOP 09":6,SOCDEM:4.5,"jin\xE9 strany":2.5,Zelen\u00ED:2,"KDU-\u010CSL":2.5,P\u0159\u00EDsaha:3,SPOLU:null,Trikol\u00F3ra:2,PRO:null,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2022-09","pollster:id":"STEM",middle_date:"2022-09-04",ANO:30,ODS:14.2,STAN:5,SPD:14.3,Pir\u00E1ti:9.4,Motorist\u00E9:null,KS\u010CM:null,"TOP 09":5,SOCDEM:4,"jin\xE9 strany":10.2,Zelen\u00ED:null,"KDU-\u010CSL":4.5,P\u0159\u00EDsaha:3.5,SPOLU:null,Trikol\u00F3ra:null,PRO:null,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2022-08","pollster:id":"Kantar",middle_date:"2022-08-24",ANO:30.5,ODS:19.5,STAN:6.5,SPD:11,Pir\u00E1ti:8.5,Motorist\u00E9:null,KS\u010CM:3.5,"TOP 09":4.5,SOCDEM:3,"jin\xE9 strany":4,Zelen\u00ED:null,"KDU-\u010CSL":4,P\u0159\u00EDsaha:3,SPOLU:null,Trikol\u00F3ra:null,PRO:null,Svobodn\u00ED:2,"Voln\xFD blok":null},{"poll:identifier":"2022-08","pollster:id":"Median",middle_date:"2022-08-16",ANO:29,ODS:16,STAN:4,SPD:14,Pir\u00E1ti:11.5,Motorist\u00E9:null,KS\u010CM:3.5,"TOP 09":3.5,SOCDEM:5,"jin\xE9 strany":2.5,Zelen\u00ED:2,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:3.5,SPOLU:null,Trikol\u00F3ra:2,PRO:null,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2022-07","pollster:id":"STEM",middle_date:"2022-08-07",ANO:31.1,ODS:15.5,STAN:5.5,SPD:11.9,Pir\u00E1ti:9.3,Motorist\u00E9:null,KS\u010CM:3.4,"TOP 09":5.6,SOCDEM:4.8,"jin\xE9 strany":.7,Zelen\u00ED:2.5,"KDU-\u010CSL":3.4,P\u0159\u00EDsaha:3.3,SPOLU:null,Trikol\u00F3ra:1.4,PRO:null,Svobodn\u00ED:1.7,"Voln\xFD blok":null},{"poll:identifier":"2022-07","pollster:id":"Median",middle_date:"2022-07-20",ANO:30,ODS:15.5,STAN:5.5,SPD:12.5,Pir\u00E1ti:10.5,Motorist\u00E9:null,KS\u010CM:2.5,"TOP 09":5,SOCDEM:5,"jin\xE9 strany":1.5,Zelen\u00ED:2,"KDU-\u010CSL":4.5,P\u0159\u00EDsaha:3,SPOLU:null,Trikol\u00F3ra:2.5,PRO:null,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2022-06","pollster:id":"Median",middle_date:"2022-06-11",ANO:29,ODS:16.1,STAN:4.8,SPD:12.5,Pir\u00E1ti:11.8,Motorist\u00E9:null,KS\u010CM:2.8,"TOP 09":5.2,SOCDEM:5.6,"jin\xE9 strany":1.8,Zelen\u00ED:1.8,"KDU-\u010CSL":4.6,P\u0159\u00EDsaha:2.2,SPOLU:null,Trikol\u00F3ra:1.6,PRO:null,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2022-05","pollster:id":"Kantar",middle_date:"2022-05-24",ANO:28,ODS:22.5,STAN:6.5,SPD:11,Pir\u00E1ti:8.5,Motorist\u00E9:null,KS\u010CM:2.5,"TOP 09":4,SOCDEM:4.5,"jin\xE9 strany":5,Zelen\u00ED:2,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:2,SPOLU:null,Trikol\u00F3ra:null,PRO:null,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2022-05","pollster:id":"Median",middle_date:"2022-05-17",ANO:28.5,ODS:16.5,STAN:8.5,SPD:11.5,Pir\u00E1ti:9,Motorist\u00E9:null,KS\u010CM:3,"TOP 09":4.5,SOCDEM:5.5,"jin\xE9 strany":3,Zelen\u00ED:null,"KDU-\u010CSL":4.5,P\u0159\u00EDsaha:3,SPOLU:null,Trikol\u00F3ra:2.5,PRO:null,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2022-04","pollster:id":"Kantar",middle_date:"2022-04-18",ANO:27.5,ODS:26,STAN:10,SPD:11,Pir\u00E1ti:5,Motorist\u00E9:null,KS\u010CM:2,"TOP 09":3,SOCDEM:2.5,"jin\xE9 strany":3.5,Zelen\u00ED:2,"KDU-\u010CSL":4.5,P\u0159\u00EDsaha:3,SPOLU:null,Trikol\u00F3ra:null,PRO:null,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2022-03","pollster:id":"Kantar",middle_date:"2022-03-23",ANO:27.5,ODS:22.5,STAN:10,SPD:9.5,Pir\u00E1ti:7.5,Motorist\u00E9:null,KS\u010CM:2.5,"TOP 09":5,SOCDEM:2.5,"jin\xE9 strany":3.5,Zelen\u00ED:null,"KDU-\u010CSL":4,P\u0159\u00EDsaha:3.5,SPOLU:null,Trikol\u00F3ra:2,PRO:null,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2022-02","pollster:id":"Kantar",middle_date:"2022-02-23",ANO:25,ODS:21,STAN:11,SPD:11.5,Pir\u00E1ti:7.5,Motorist\u00E9:null,KS\u010CM:2,"TOP 09":6.5,SOCDEM:3,"jin\xE9 strany":4,Zelen\u00ED:null,"KDU-\u010CSL":5.5,P\u0159\u00EDsaha:3,SPOLU:null,Trikol\u00F3ra:null,PRO:null,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2021-11","pollster:id":"Kantar",middle_date:"2021-11-10",ANO:27,ODS:15.5,STAN:13,SPD:9.5,Pir\u00E1ti:8,Motorist\u00E9:null,KS\u010CM:3.5,"TOP 09":7,SOCDEM:4,"jin\xE9 strany":4,Zelen\u00ED:null,"KDU-\u010CSL":3.5,P\u0159\u00EDsaha:2.5,SPOLU:null,Trikol\u00F3ra:2.5,PRO:null,Svobodn\u00ED:null,"Voln\xFD blok":null},{"poll:identifier":"2021-10","pollster:id":"volby+STEM",middle_date:"2021-10-09",ANO:27.1,ODS:13.6,STAN:6.1,SPD:9.6,Pir\u00E1ti:9.5,Motorist\u00E9:null,KS\u010CM:3.6,"TOP 09":7.2,SOCDEM:4.7,"jin\xE9 strany":1.9,Zelen\u00ED:1,"KDU-\u010CSL":6.9,P\u0159\u00EDsaha:4.7,SPOLU:null,Trikol\u00F3ra:2.8,PRO:null,Svobodn\u00ED:null,"Voln\xFD blok":1.3}],Ul=[{names:["ANO","ODS","STAN","SPD","Pir\xE1ti","Motorist\xE9","KS\u010CM","TOP 09","SOCDEM","jin\xE9 strany","Zelen\xED","KDU-\u010CSL","P\u0159\xEDsaha","SPOLU","Trikol\xF3ra","PRO","Svobodn\xED","Voln\xFD blok"]}];const yl={data:function(){return{polls:fl,candidates:Ul[0].names}},methods:{formatDate(n){return new Date(n).toLocaleDateString("cs")}}},El={class:"container"},Cl=l("h3",null,[_(" Zve\u0159ejn\u011Bn\xE9 pr\u016Fzkumy "),l("small",null,"Strany")],-1),jl={class:"table-responsive"},Vl={class:"table table-striped table-hover table-condensed"},Zl=l("th",null,null,-1),Rl=l("th",null,[_("Datum\xA0"),l("small",null,"(st\u0159ed)")],-1);function $l(n,O,a,D,d,M){const e=K;return i(),o("div",El,[Cl,l("div",jl,[l("table",Vl,[l("thead",null,[l("tr",null,[Zl,Rl,(i(!0),o(u,null,P(n.candidates,(t,s)=>(i(),o("th",{key:s},[l("small",null,r(t),1)]))),128))])]),l("tbody",null,[(i(!0),o(u,null,P(n.polls,(t,s)=>(i(),o("tr",{key:s},[l("th",null,r(t["pollster:id"]),1),l("td",null,r(M.formatDate(t.middle_date)),1),(i(!0),o(u,null,P(n.candidates,(p,c)=>(i(),o("td",{key:c},[S(e,{decNumber:t[p]},null,8,["decNumber"])]))),128))]))),128))])])])])}var gl=T(yl,[["render",$l]]),xl=[{"poll:identifier":"2024-11","pollster:id":"STEM",middle_date:"2024-11-04",ANO:33.7,SPOLU:21.1,SPD:8.9,STAN:8.4,Pir\u00E1ti:5.9,KS\u010CM:5.5,Motorist\u00E9:4.1,SOCDEM:3,P\u0159\u00EDsaha:2.6,Zelen\u00ED:2.4,"jin\xE9 strany":2.3,Svobodn\u00ED:2.1,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2024-11","pollster:id":"Kantar",middle_date:"2024-10-30",ANO:37,SPOLU:21,SPD:7,STAN:12,Pir\u00E1ti:7,KS\u010CM:3.5,Motorist\u00E9:2.5,SOCDEM:2,P\u0159\u00EDsaha:null,Zelen\u00ED:2,"jin\xE9 strany":6,Svobodn\u00ED:null,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2024-10","pollster:id":"Kantar",middle_date:"2024-10-05",ANO:36.5,SPOLU:20,SPD:7,STAN:14,Pir\u00E1ti:5,KS\u010CM:3,Motorist\u00E9:2.5,SOCDEM:2.5,P\u0159\u00EDsaha:3,Zelen\u00ED:null,"jin\xE9 strany":4.5,Svobodn\u00ED:2,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2024-06","pollster:id":"Kantar",middle_date:"2024-06-15",ANO:34.5,SPOLU:22.5,SPD:6,STAN:8.5,Pir\u00E1ti:9,KS\u010CM:3,Motorist\u00E9:null,SOCDEM:2.5,P\u0159\u00EDsaha:4.5,Zelen\u00ED:2.5,"jin\xE9 strany":4.5,Svobodn\u00ED:2.5,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2024-04","pollster:id":"Kantar",middle_date:"2024-05-01",ANO:32.5,SPOLU:22.5,SPD:9,STAN:7.5,Pir\u00E1ti:11,KS\u010CM:2.5,Motorist\u00E9:null,SOCDEM:3,P\u0159\u00EDsaha:3.5,Zelen\u00ED:2.5,"jin\xE9 strany":6,Svobodn\u00ED:null,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2024-03","pollster:id":"Kantar",middle_date:"2024-03-27",ANO:35.5,SPOLU:21.5,SPD:8,STAN:6.5,Pir\u00E1ti:11,KS\u010CM:3,Motorist\u00E9:null,SOCDEM:3,P\u0159\u00EDsaha:2.5,Zelen\u00ED:2,"jin\xE9 strany":2.5,Svobodn\u00ED:2.5,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:2},{"poll:identifier":"2024-02","pollster:id":"Kantar",middle_date:"2024-02-21",ANO:39,SPOLU:20,SPD:9,STAN:7.5,Pir\u00E1ti:10,KS\u010CM:2.5,Motorist\u00E9:null,SOCDEM:2.5,P\u0159\u00EDsaha:null,Zelen\u00ED:2,"jin\xE9 strany":5.5,Svobodn\u00ED:2,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2024-01","pollster:id":"Kantar",middle_date:"2024-01-24",ANO:35.5,SPOLU:22.5,SPD:10,STAN:7,Pir\u00E1ti:10,KS\u010CM:3,Motorist\u00E9:null,SOCDEM:4,P\u0159\u00EDsaha:3.5,Zelen\u00ED:null,"jin\xE9 strany":2,Svobodn\u00ED:2.5,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2023-11","pollster:id":"Kantar",middle_date:"2023-11-22",ANO:34.5,SPOLU:18.5,SPD:10,STAN:7,Pir\u00E1ti:12,KS\u010CM:2.5,Motorist\u00E9:null,SOCDEM:4,P\u0159\u00EDsaha:2.5,Zelen\u00ED:3,"jin\xE9 strany":2,Svobodn\u00ED:2,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:2,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2023-10","pollster:id":"Kantar",middle_date:"2023-10-25",ANO:33,SPOLU:21.5,SPD:10.5,STAN:7,Pir\u00E1ti:10.5,KS\u010CM:3.5,Motorist\u00E9:null,SOCDEM:3.5,P\u0159\u00EDsaha:2.5,Zelen\u00ED:null,"jin\xE9 strany":6,Svobodn\u00ED:null,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:2},{"poll:identifier":"2023-09","pollster:id":"Kantar",middle_date:"2023-09-20",ANO:33.5,SPOLU:19.5,SPD:9.5,STAN:7.5,Pir\u00E1ti:8.5,KS\u010CM:3,Motorist\u00E9:null,SOCDEM:3.5,P\u0159\u00EDsaha:4,Zelen\u00ED:2,"jin\xE9 strany":3,Svobodn\u00ED:3,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:3},{"poll:identifier":"2023-05","pollster:id":"Kantar",middle_date:"2023-05-24",ANO:33.5,SPOLU:24,SPD:8,STAN:6,Pir\u00E1ti:11.5,KS\u010CM:3.5,Motorist\u00E9:null,SOCDEM:3.5,P\u0159\u00EDsaha:2.5,Zelen\u00ED:2.5,"jin\xE9 strany":3,Svobodn\u00ED:null,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:2},{"poll:identifier":"2023-04","pollster:id":"Kantar",middle_date:"2023-04-26",ANO:31,SPOLU:25,SPD:9.5,STAN:6.5,Pir\u00E1ti:11.5,KS\u010CM:2.5,Motorist\u00E9:null,SOCDEM:5.5,P\u0159\u00EDsaha:2.5,Zelen\u00ED:2,"jin\xE9 strany":2,Svobodn\u00ED:null,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:2},{"poll:identifier":"2023-03","pollster:id":"Kantar",middle_date:"2023-03-28",ANO:29.5,SPOLU:27.5,SPD:8,STAN:5.5,Pir\u00E1ti:10.5,KS\u010CM:2.5,Motorist\u00E9:null,SOCDEM:5,P\u0159\u00EDsaha:3.5,Zelen\u00ED:null,"jin\xE9 strany":5,Svobodn\u00ED:null,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:3},{"poll:identifier":"2023-02","pollster:id":"Kantar",middle_date:"2023-02-22",ANO:30.5,SPOLU:31,SPD:9,STAN:null,Pir\u00E1ti:null,KS\u010CM:2,Motorist\u00E9:null,SOCDEM:5,P\u0159\u00EDsaha:2.5,Zelen\u00ED:null,"jin\xE9 strany":7,Svobodn\u00ED:null,"Pir\xE1ti+STAN":13,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-10","pollster:id":"Kantar",middle_date:"2022-10-26",ANO:28,SPOLU:31.5,SPD:11.5,STAN:null,Pir\u00E1ti:null,KS\u010CM:3,Motorist\u00E9:null,SOCDEM:4,P\u0159\u00EDsaha:2.5,Zelen\u00ED:null,"jin\xE9 strany":3.5,Svobodn\u00ED:null,"Pir\xE1ti+STAN":14,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:2,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-09","pollster:id":"Kantar",middle_date:"2022-09-21",ANO:31.5,SPOLU:28.5,SPD:12,STAN:null,Pir\u00E1ti:null,KS\u010CM:2,Motorist\u00E9:null,SOCDEM:2.5,P\u0159\u00EDsaha:4.5,Zelen\u00ED:2,"jin\xE9 strany":5,Svobodn\u00ED:null,"Pir\xE1ti+STAN":12,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-08","pollster:id":"Kantar",middle_date:"2022-08-24",ANO:32,SPOLU:29,SPD:11,STAN:null,Pir\u00E1ti:null,KS\u010CM:4,Motorist\u00E9:null,SOCDEM:3.5,P\u0159\u00EDsaha:3.5,Zelen\u00ED:null,"jin\xE9 strany":7,Svobodn\u00ED:null,"Pir\xE1ti+STAN":10,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-05","pollster:id":"Kantar",middle_date:"2022-05-24",ANO:29.5,SPOLU:28.5,SPD:11.5,STAN:null,Pir\u00E1ti:null,KS\u010CM:2.5,Motorist\u00E9:null,SOCDEM:5,P\u0159\u00EDsaha:2.5,Zelen\u00ED:2.5,"jin\xE9 strany":5.5,Svobodn\u00ED:null,"Pir\xE1ti+STAN":12.5,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-04","pollster:id":"Kantar",middle_date:"2022-04-18",ANO:28.5,SPOLU:33.5,SPD:11,STAN:null,Pir\u00E1ti:null,KS\u010CM:2,Motorist\u00E9:null,SOCDEM:4,P\u0159\u00EDsaha:3,Zelen\u00ED:2,"jin\xE9 strany":4.5,Svobodn\u00ED:null,"Pir\xE1ti+STAN":11.5,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-03","pollster:id":"Kantar",middle_date:"2022-03-23",ANO:29,SPOLU:31.5,SPD:9.5,STAN:null,Pir\u00E1ti:null,KS\u010CM:2.5,Motorist\u00E9:null,SOCDEM:3,P\u0159\u00EDsaha:4,Zelen\u00ED:null,"jin\xE9 strany":2.5,Svobodn\u00ED:null,"Pir\xE1ti+STAN":15.5,"Trikol\xF3ra+S+S":2.5,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-03","pollster:id":"Median",middle_date:"2022-03-17",ANO:27.5,SPOLU:26.5,SPD:10,STAN:null,Pir\u00E1ti:null,KS\u010CM:4,Motorist\u00E9:null,SOCDEM:5.5,P\u0159\u00EDsaha:3,Zelen\u00ED:null,"jin\xE9 strany":4,Svobodn\u00ED:null,"Pir\xE1ti+STAN":16.5,"Trikol\xF3ra+S+S":3,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-02","pollster:id":"Kantar",middle_date:"2022-02-23",ANO:27.5,SPOLU:32.5,SPD:12,STAN:null,Pir\u00E1ti:null,KS\u010CM:2,Motorist\u00E9:null,SOCDEM:3,P\u0159\u00EDsaha:3.5,Zelen\u00ED:null,"jin\xE9 strany":2,Svobodn\u00ED:null,"Pir\xE1ti+STAN":14.5,"Trikol\xF3ra+S+S":3,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2021-11","pollster:id":"Median",middle_date:"2021-11-16",ANO:29.5,SPOLU:26,SPD:8.5,STAN:null,Pir\u00E1ti:null,KS\u010CM:4.5,Motorist\u00E9:null,SOCDEM:4.5,P\u0159\u00EDsaha:3,Zelen\u00ED:null,"jin\xE9 strany":3.5,Svobodn\u00ED:null,"Pir\xE1ti+STAN":16.5,"Trikol\xF3ra+S+S":4,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2021-11","pollster:id":"Kantar",middle_date:"2021-11-10",ANO:28,SPOLU:28,SPD:9.5,STAN:null,Pir\u00E1ti:null,KS\u010CM:3.5,Motorist\u00E9:null,SOCDEM:4,P\u0159\u00EDsaha:3.5,Zelen\u00ED:null,"jin\xE9 strany":3,Svobodn\u00ED:null,"Pir\xE1ti+STAN":17,"Trikol\xF3ra+S+S":3.5,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2021-10","pollster:id":"volby",middle_date:"2021-10-09",ANO:27.1,SPOLU:27.8,SPD:9.6,STAN:null,Pir\u00E1ti:null,KS\u010CM:3.6,Motorist\u00E9:null,SOCDEM:4.7,P\u0159\u00EDsaha:4.7,Zelen\u00ED:1,"jin\xE9 strany":1.9,Svobodn\u00ED:null,"Pir\xE1ti+STAN":15.6,"Trikol\xF3ra+S+S":2.8,Trikol\u00F3ra:null,"Voln\xFD blok":1.3,PRO:null}],Il=[{names:["ANO","SPOLU","SPD","STAN","Pir\xE1ti","KS\u010CM","Motorist\xE9","SOCDEM","P\u0159\xEDsaha","Zelen\xED","jin\xE9 strany","Svobodn\xED","Pir\xE1ti+STAN","Trikol\xF3ra+S+S","Trikol\xF3ra","Voln\xFD blok","PRO"]}];const wl={data:function(){return{polls:xl,candidates:Il[0].names}},methods:{formatDate(n){return new Date(n).toLocaleDateString("cs")}}},Fl={class:"container"},zl=l("h3",null,[_(" Zve\u0159ejn\u011Bn\xE9 pr\u016Fzkumy "),l("small",null,"Koalice")],-1),Bl={class:"table-responsive"},Hl={class:"table table-striped table-hover table-condensed"},ql=l("th",null,null,-1),Wl=l("th",null,[_("Datum\xA0"),l("small",null,"(st\u0159ed)")],-1);function Gl(n,O,a,D,d,M){const e=K;return i(),o("div",Fl,[zl,l("div",Bl,[l("table",Hl,[l("thead",null,[l("tr",null,[ql,Wl,(i(!0),o(u,null,P(n.candidates,(t,s)=>(i(),o("th",{key:s},[l("small",null,r(t),1)]))),128))])]),l("tbody",null,[(i(!0),o(u,null,P(n.polls,(t,s)=>(i(),o("tr",{key:s},[l("th",null,r(t["pollster:id"]),1),l("td",null,r(M.formatDate(t.middle_date)),1),(i(!0),o(u,null,P(n.candidates,(p,c)=>(i(),o("td",{key:c},[S(e,{decNumber:t[p]},null,8,["decNumber"])]))),128))]))),128))])])])])}var Jl=T(wl,[["render",Gl]]);const Ql="/home/michal/dev/mandaty-2022/shares/2024-12-22T01:26:49.261392_psp.png";var Xl={filename:Ql};const Yl=C({setup(n,{expose:O}){O();const a="https://mandaty.cz/",D="493242628099686";j({title:"Mand\xE1ty.cz",meta:[{hid:"og:name",property:"og:image",content:a+Xl.filename},{hid:"og:url",property:"og:url",content:a},{hid:"og:type",property:"og:type",content:"website"},{hid:"og:title",property:"og:title",content:"Mand\xE1ty.cz"},{hid:"og:description",property:"og:description",content:"V\xFDvoj volebn\xEDch model\u016F dle pr\u016Fzkum\u016F ve\u0159ejn\xE9ho m\xEDn\u011Bn\xED"},{hid:"fb:app_id",property:"fb:app_id",content:D}],link:[{rel:"icon",type:"image/x-icon",href:a+"favicon.svg"}]});const d={BASE_URL:a,FB_APP_ID:D};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}),ln={class:"container"},nn=l("h1",{class:"pt-4"},"Sn\u011Bmovna 2021-2025",-1),on=l("hr",null,null,-1),en=l("hr",null,null,-1),tn=l("hr",null,null,-1),rn=l("hr",null,null,-1),an=l("hr",null,null,-1);function dn(n,O,a,D,d,M){const e=f,t=rl,s=Ol,p=Ll,c=gl,L=Jl;return i(),o("div",ln,[S(e),nn,on,S(t),en,S(s),tn,S(p),rn,S(c),an,S(L)])}var Pn=T(Yl,[["render",dn]]);export{Pn as default};
