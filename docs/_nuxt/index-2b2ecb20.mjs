import{_ as y}from"./ChartLinks-5ad7a694.mjs";import{_,o as i,c as o,a as l,t as r,F as u,r as P,e as T,p as m,f as h,n as E,q as C,h as N,b as s,i as A,s as L,k as j,u as V}from"./entry-d8c5908c.mjs";import{_ as K}from"./DecNumber-f2cc3d02.mjs";const U=[{party:"ANO",median:78,lo:66,hi:92,in:1,id:"ANO",name:"Hnut\xED ANO",abbreviation:"ANO",color:"#261060",needs:.05,mps:72,seats:79,difference:7},{party:"SPOLU",median:46,lo:33,hi:60,in:.996,id:"SPOLU",name:"Koalice ODS, KDU-\u010CSL, TOP 09",abbreviation:"SPOLU",color:"#004494",needs:.11,mps:71,seats:46,difference:-25},{party:"STAN",median:24,lo:16,hi:33,in:1,id:"STAN",name:"Starostov\xE9 a nez\xE1visl\xED",abbreviation:"STAN",color:"#CE0F68",needs:.05,mps:33,seats:23,difference:-10},{party:"P\u0159\xEDsaha+Motor",median:15,lo:0,hi:21,in:.947,id:"P\u0159\xEDsaha+Motor",name:"P\u0159\xEDsaha - Motorist\xE9 sob\u011B",abbreviation:"P\u0159\xEDsaha a Motor.",color:"#0033FF",needs:.05,mps:0,seats:14,difference:14},{party:"Sta\u010Dilo",median:14,lo:0,hi:21,in:.844,id:"Sta\u010Dilo",name:"Koalice KS\u010CM a SOCDEM",abbreviation:"Sta\u010Dilo!",color:"#8C0000",needs:.05,mps:0,seats:14,difference:14},{party:"SPD",median:13,lo:0,hi:23,in:.847,id:"SPD",name:"Svoboda a p\u0159\xEDm\xE1 demokracie - Tomio Okamura",abbreviation:"SPD",color:"#EA2329",needs:.05,mps:20,seats:12,difference:-8},{party:"Pir\xE1ti",median:12,lo:0,hi:22,in:.814,id:"Pir\xE1ti",name:"\u010Cesk\xE1 pir\xE1tsk\xE1 strana",abbreviation:"Pir\xE1ti",color:"#000000",needs:.05,mps:4,seats:12,difference:8}],Z="2024-10-06";var b={data:U,date:Z};const R={data:function(){return{seats:b.data,date:new Date(b.date).toLocaleDateString("cs-CZ")}},filters:{abs(n){return Math.abs(n)}}},k=n=>(m("data-v-afe46c60"),n=n(),h(),n),$=T("Po\u010Det mand\xE1t\u016F "),g=k(()=>l("small",null,"s odhadem chyby",-1)),x=T(),I={class:"badge"},w={class:"container"},F={class:"row"},z={class:"card text-center mb-2"},B={class:"card-header"},H={class:"card-body"},q={class:"row"},W=k(()=>l("div",{class:"col-3"},null,-1)),G={class:"col-6 text-center"},J={class:"number"},Q={key:0},X={class:"text-success"},Y={key:1},ll={class:"text-danger"},nl={key:2},il=k(()=>l("span",{class:"text-muted"},null,-1)),ol=[il],el={class:"lo-hi"};function tl(n,O,a,D,d,M){return i(),o("div",null,[l("h3",null,[$,g,x,l("span",I,r(n.date),1)]),l("div",w,[l("div",F,[(i(!0),o(u,null,P(n.seats,(e,t)=>(i(),o("div",{key:t,class:"col-xl-3 col-lg-4 col-sm-6"},[l("div",z,[l("div",B,[l("h4",{style:E({color:e.color})},r(e.abbreviation),5)]),l("div",H,[l("div",q,[W,l("div",G,[l("div",null,[l("span",J,r(e.seats),1),e.difference>0?(i(),o("span",Q,[l("span",X,"+"+r(e.difference),1)])):e.difference<0?(i(),o("span",Y,[l("span",ll,r(e.difference),1)])):(i(),o("span",nl,ol))])])]),l("div",el,[l("strong",null,r(e.lo)+" - "+r(e.hi),1)])])])]))),128))])])])}var rl=_(R,[["render",tl],["__scopeId","data-v-afe46c60"]]);const al={data:function(){return{seats:b.data,date:new Date(b.date).toLocaleDateString("cs-CZ")}},methods:{formatPercentage(n){return n=parseFloat(n),isNaN(n)?"<&nbsp;1%":n>.99?">&nbsp;99%":n<.03?"<&nbsp;"+Math.round(Math.ceil(n*100))+"%":"~&nbsp;"+Math.round(n*100)+"%"}}},dl=l("h3",null,"\u0160ance na vstup do Sn\u011Bmovny",-1),sl={class:"table-responsive"},Sl={class:"table table-hover table-condensed"},ul=["innerHTML"];function Pl(n,O,a,D,d,M){return i(),o("div",null,[dl,l("div",sl,[l("table",Sl,[l("thead",null,[l("tr",null,[(i(!0),o(u,null,P(n.seats,(e,t)=>(i(),o("th",{key:t},r(e.abbreviation),1))),128))])]),l("tbody",null,[l("tr",null,[(i(!0),o(u,null,P(n.seats,(e,t)=>(i(),o("td",{key:t,innerHTML:M.formatPercentage(e.in)},null,8,ul))),128))])])])])])}var Ol=_(al,[["render",Pl]]);const Dl={},Ml=n=>(m("data-v-6d68b17d"),n=n(),h(),n),_l={id:"image-wrapper"},Tl=Ml(()=>l("img",{src:C,class:"image-small"},null,-1)),pl=[Tl];function cl(n,O){return i(),o("div",_l,pl)}var v=_(Dl,[["render",cl],["__scopeId","data-v-6d68b17d"]]),bl=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"}));const ml={name:"SnemovnaPollsChart",data(){return{isMobile:!1}},mounted(){this.isMobile=window.innerWidth<666,console.log("isMobile:",this.isMobile)},components:{SnemovnaPollsPictureChart:()=>N(()=>Promise.resolve().then(function(){return bl}),void 0),SnemovnaPollsInteractiveChart:()=>N(()=>import("./entry-d8c5908c.mjs").then(function(n){return n.S}),["entry-d8c5908c.mjs","entry.e616280e.css"])}},hl=n=>(m("data-v-c7c0d9ea"),n=n(),h(),n),kl={id:"image-wrapper"},Nl=hl(()=>l("h3",null,[T(" V\xFDvoj volebn\xEDch model\u016F "),l("small",null,"dle pr\u016Fzkum\u016F ve\u0159ejn\xE9ho m\xEDn\u011Bn\xED ")],-1)),Al={key:0},Kl={key:1};function vl(n,O,a,D,d,M){const e=v,t=L;return i(),o("div",kl,[Nl,d.isMobile?(i(),o("div",Al,[s(e)])):A("",!0),d.isMobile?A("",!0):(i(),o("div",Kl,[s(t)]))])}var fl=_(ml,[["render",vl],["__scopeId","data-v-c7c0d9ea"]]),yl=[{"poll:identifier":"2024-10","pollster:id":"NMS",middle_date:"2024-10-06",ANO:32.9,ODS:12.2,STAN:12,SPD:7.5,Pir\u00E1ti:6.8,"jin\xE9 strany":4.7,"TOP 09":3.8,"KDU-\u010CSL":2.7,KS\u010CM:4.6,P\u0159\u00EDsaha:4.3,Motorist\u00E9:3.6,SOCDEM:2.9,Svobodn\u00ED:null,Zelen\u00ED:2,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2024-10","pollster:id":"Kantar",middle_date:"2024-10-05",ANO:35.5,ODS:14.5,STAN:13,SPD:6.5,Pir\u00E1ti:5,"jin\xE9 strany":4.5,"TOP 09":4.5,"KDU-\u010CSL":3.5,KS\u010CM:3,P\u0159\u00EDsaha:3,Motorist\u00E9:2.5,SOCDEM:2.5,Svobodn\u00ED:2,Zelen\u00ED:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2024-09","pollster:id":"Median",middle_date:"2024-09-15",ANO:33,ODS:11.5,STAN:11,SPD:7,Pir\u00E1ti:8.5,"jin\xE9 strany":2,"TOP 09":4.5,"KDU-\u010CSL":2,KS\u010CM:4.5,P\u0159\u00EDsaha:4.5,Motorist\u00E9:3.5,SOCDEM:4,Svobodn\u00ED:null,Zelen\u00ED:2,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:2},{"poll:identifier":"2024-09","pollster:id":"NMS",middle_date:"2024-09-06",ANO:32.1,ODS:11.3,STAN:9.2,SPD:7.7,Pir\u00E1ti:7.8,"jin\xE9 strany":5.2,"TOP 09":4.5,"KDU-\u010CSL":null,KS\u010CM:4.5,P\u0159\u00EDsaha:5.2,Motorist\u00E9:5.5,SOCDEM:2.5,Svobodn\u00ED:2.3,Zelen\u00ED:2.2,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2024-09","pollster:id":"STEM",middle_date:"2024-09-03",ANO:33.4,ODS:14.9,STAN:6.8,SPD:7.4,Pir\u00E1ti:7.8,"jin\xE9 strany":.9,"TOP 09":5.6,"KDU-\u010CSL":3.5,KS\u010CM:4.6,P\u0159\u00EDsaha:3.3,Motorist\u00E9:2.6,SOCDEM:2.8,Svobodn\u00ED:1.8,Zelen\u00ED:2.7,Trikol\u00F3ra:1,"Voln\xFD blok":null,PRO:1},{"poll:identifier":"2024-08","pollster:id":"NMS",middle_date:"2024-08-04",ANO:29.3,ODS:14.3,STAN:9.6,SPD:6,Pir\u00E1ti:8,"jin\xE9 strany":6.2,"TOP 09":4.7,"KDU-\u010CSL":2.4,KS\u010CM:5.7,P\u0159\u00EDsaha:4.6,Motorist\u00E9:4.1,SOCDEM:2.8,Svobodn\u00ED:null,Zelen\u00ED:2.3,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2024-07","pollster:id":"Median",middle_date:"2024-07-16",ANO:33,ODS:14,STAN:9,SPD:8,Pir\u00E1ti:8,"jin\xE9 strany":2.5,"TOP 09":4,"KDU-\u010CSL":2.5,KS\u010CM:4,P\u0159\u00EDsaha:5,Motorist\u00E9:null,SOCDEM:3.5,Svobodn\u00ED:null,Zelen\u00ED:2.5,Trikol\u00F3ra:2,"Voln\xFD blok":null,PRO:2},{"poll:identifier":"2024-07","pollster:id":"NMS",middle_date:"2024-07-08",ANO:28.2,ODS:11.3,STAN:10.1,SPD:6.8,Pir\u00E1ti:9.1,"jin\xE9 strany":6.9,"TOP 09":5.2,"KDU-\u010CSL":3.2,KS\u010CM:5.6,P\u0159\u00EDsaha:7.2,Motorist\u00E9:null,SOCDEM:3.2,Svobodn\u00ED:3.2,Zelen\u00ED:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2024-06","pollster:id":"Median",middle_date:"2024-06-15",ANO:30.5,ODS:12,STAN:9,SPD:8.5,Pir\u00E1ti:10.5,"jin\xE9 strany":3.5,"TOP 09":5,"KDU-\u010CSL":4.5,KS\u010CM:4.5,P\u0159\u00EDsaha:5,Motorist\u00E9:null,SOCDEM:2.5,Svobodn\u00ED:null,Zelen\u00ED:2,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:1.5},{"poll:identifier":"2024-06","pollster:id":"Kantar",middle_date:"2024-06-15",ANO:34,ODS:16,STAN:8.5,SPD:6,Pir\u00E1ti:9,"jin\xE9 strany":4.5,"TOP 09":4,"KDU-\u010CSL":3,KS\u010CM:3,P\u0159\u00EDsaha:4.5,Motorist\u00E9:null,SOCDEM:2.5,Svobodn\u00ED:2.5,Zelen\u00ED:2.5,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2024-06","pollster:id":"STEM",middle_date:"2024-06-11",ANO:32.9,ODS:14.8,STAN:6.8,SPD:7.3,Pir\u00E1ti:8.7,"jin\xE9 strany":.9,"TOP 09":4.5,"KDU-\u010CSL":2.5,KS\u010CM:5.1,P\u0159\u00EDsaha:3.7,Motorist\u00E9:2.7,SOCDEM:2.5,Svobodn\u00ED:2,Zelen\u00ED:2,Trikol\u00F3ra:1.7,"Voln\xFD blok":null,PRO:1.9},{"poll:identifier":"2024-05","pollster:id":"Median",middle_date:"2024-05-18",ANO:33,ODS:14.5,STAN:8.5,SPD:7.5,Pir\u00E1ti:10,"jin\xE9 strany":2,"TOP 09":5.5,"KDU-\u010CSL":2,KS\u010CM:4,P\u0159\u00EDsaha:3,Motorist\u00E9:null,SOCDEM:3.5,Svobodn\u00ED:null,Zelen\u00ED:1.5,Trikol\u00F3ra:1.5,"Voln\xFD blok":null,PRO:3.5},{"poll:identifier":"2024-04","pollster:id":"Kantar",middle_date:"2024-05-01",ANO:32,ODS:15.5,STAN:7.5,SPD:9,Pir\u00E1ti:11,"jin\xE9 strany":5,"TOP 09":5,"KDU-\u010CSL":3.5,KS\u010CM:2.5,P\u0159\u00EDsaha:3.5,Motorist\u00E9:null,SOCDEM:3,Svobodn\u00ED:null,Zelen\u00ED:2.5,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2024-04","pollster:id":"Median",middle_date:"2024-04-15",ANO:32.5,ODS:13,STAN:8,SPD:10,Pir\u00E1ti:10,"jin\xE9 strany":2,"TOP 09":3.5,"KDU-\u010CSL":3.5,KS\u010CM:3.5,P\u0159\u00EDsaha:2.5,Motorist\u00E9:null,SOCDEM:4.5,Svobodn\u00ED:null,Zelen\u00ED:2.5,Trikol\u00F3ra:1.5,"Voln\xFD blok":null,PRO:3},{"poll:identifier":"2024-03","pollster:id":"Kantar",middle_date:"2024-03-27",ANO:34.5,ODS:16,STAN:6.5,SPD:8,Pir\u00E1ti:10.5,"jin\xE9 strany":2,"TOP 09":4.5,"KDU-\u010CSL":3,KS\u010CM:3,P\u0159\u00EDsaha:2.5,Motorist\u00E9:null,SOCDEM:3,Svobodn\u00ED:2.5,Zelen\u00ED:2,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:2},{"poll:identifier":"2024-03","pollster:id":"STEM",middle_date:"2024-03-20",ANO:32.9,ODS:14.5,STAN:6.6,SPD:9.3,Pir\u00E1ti:10.5,"jin\xE9 strany":.4,"TOP 09":5.2,"KDU-\u010CSL":3.1,KS\u010CM:4.5,P\u0159\u00EDsaha:2.8,Motorist\u00E9:null,SOCDEM:3.6,Svobodn\u00ED:1.9,Zelen\u00ED:2.1,Trikol\u00F3ra:.8,"Voln\xFD blok":null,PRO:1.9},{"poll:identifier":"2024-03","pollster:id":"Median",middle_date:"2024-03-19",ANO:32,ODS:14,STAN:6,SPD:7,Pir\u00E1ti:10.5,"jin\xE9 strany":2,"TOP 09":3.5,"KDU-\u010CSL":3.5,KS\u010CM:4.5,P\u0159\u00EDsaha:3.5,Motorist\u00E9:null,SOCDEM:4.5,Svobodn\u00ED:null,Zelen\u00ED:3,Trikol\u00F3ra:2,"Voln\xFD blok":null,PRO:4},{"poll:identifier":"2024-02","pollster:id":"Kantar",middle_date:"2024-02-21",ANO:38.5,ODS:14.5,STAN:7,SPD:9,Pir\u00E1ti:9.5,"jin\xE9 strany":9.5,"TOP 09":5,"KDU-\u010CSL":2,KS\u010CM:2.5,P\u0159\u00EDsaha:null,Motorist\u00E9:null,SOCDEM:2.5,Svobodn\u00ED:null,Zelen\u00ED:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2024-02","pollster:id":"Median",middle_date:"2024-02-17",ANO:31,ODS:12.5,STAN:9,SPD:9.5,Pir\u00E1ti:11,"jin\xE9 strany":3,"TOP 09":5.5,"KDU-\u010CSL":3,KS\u010CM:4,P\u0159\u00EDsaha:3,Motorist\u00E9:null,SOCDEM:4.5,Svobodn\u00ED:null,Zelen\u00ED:2,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:2},{"poll:identifier":"2024-01","pollster:id":"Kantar",middle_date:"2024-01-24",ANO:35,ODS:15.5,STAN:6.5,SPD:9.5,Pir\u00E1ti:9.5,"jin\xE9 strany":2.5,"TOP 09":5,"KDU-\u010CSL":3.5,KS\u010CM:3,P\u0159\u00EDsaha:3.5,Motorist\u00E9:null,SOCDEM:4,Svobodn\u00ED:2.5,Zelen\u00ED:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2024-01","pollster:id":"Median",middle_date:"2024-01-23",ANO:31.5,ODS:12,STAN:7,SPD:10.5,Pir\u00E1ti:13,"jin\xE9 strany":1.5,"TOP 09":5.5,"KDU-\u010CSL":3,KS\u010CM:4.5,P\u0159\u00EDsaha:3,Motorist\u00E9:null,SOCDEM:4,Svobodn\u00ED:null,Zelen\u00ED:1.5,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:3},{"poll:identifier":"2024-01","pollster:id":"STEM",middle_date:"2024-01-22",ANO:33.4,ODS:13.2,STAN:7,SPD:10,Pir\u00E1ti:11.3,"jin\xE9 strany":1.2,"TOP 09":5,"KDU-\u010CSL":2.7,KS\u010CM:4.8,P\u0159\u00EDsaha:2.6,Motorist\u00E9:null,SOCDEM:3.1,Svobodn\u00ED:1.7,Zelen\u00ED:2.5,Trikol\u00F3ra:1.4,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2023-12","pollster:id":"Median",middle_date:"2023-12-14",ANO:35,ODS:13,STAN:6.5,SPD:9,Pir\u00E1ti:10.5,"jin\xE9 strany":2,"TOP 09":6,"KDU-\u010CSL":2.5,KS\u010CM:4.5,P\u0159\u00EDsaha:2.5,Motorist\u00E9:null,SOCDEM:4.5,Svobodn\u00ED:null,Zelen\u00ED:1.5,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:2.5},{"poll:identifier":"2023-11","pollster:id":"IPSOS",middle_date:"2023-11-24",ANO:34.3,ODS:13.3,STAN:6.6,SPD:9.2,Pir\u00E1ti:10.5,"jin\xE9 strany":1.1,"TOP 09":5.1,"KDU-\u010CSL":4.3,KS\u010CM:2.5,P\u0159\u00EDsaha:2.8,Motorist\u00E9:null,SOCDEM:4.1,Svobodn\u00ED:2.2,Zelen\u00ED:1,Trikol\u00F3ra:1.2,"Voln\xFD blok":null,PRO:1.8},{"poll:identifier":"2023-11","pollster:id":"Kantar",middle_date:"2023-11-22",ANO:34.5,ODS:12.5,STAN:7,SPD:10,Pir\u00E1ti:11.5,"jin\xE9 strany":2,"TOP 09":5,"KDU-\u010CSL":2,KS\u010CM:2.5,P\u0159\u00EDsaha:2.5,Motorist\u00E9:null,SOCDEM:3.5,Svobodn\u00ED:2,Zelen\u00ED:3,Trikol\u00F3ra:2,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2023-11","pollster:id":"Median",middle_date:"2023-11-20",ANO:34.5,ODS:15.5,STAN:6,SPD:8.5,Pir\u00E1ti:11,"jin\xE9 strany":1,"TOP 09":5.5,"KDU-\u010CSL":4,KS\u010CM:3.5,P\u0159\u00EDsaha:1.5,Motorist\u00E9:null,SOCDEM:4.5,Svobodn\u00ED:null,Zelen\u00ED:1.5,Trikol\u00F3ra:1.5,"Voln\xFD blok":null,PRO:1.5},{"poll:identifier":"2023-11","pollster:id":"STEM",middle_date:"2023-11-08",ANO:33.2,ODS:11.6,STAN:6.4,SPD:12,Pir\u00E1ti:10.2,"jin\xE9 strany":.4,"TOP 09":5.2,"KDU-\u010CSL":3.5,KS\u010CM:3,P\u0159\u00EDsaha:2.9,Motorist\u00E9:null,SOCDEM:4.5,Svobodn\u00ED:2.3,Zelen\u00ED:1.6,Trikol\u00F3ra:1.2,"Voln\xFD blok":null,PRO:1.9},{"poll:identifier":"2023-10","pollster:id":"Kantar",middle_date:"2023-10-25",ANO:32.5,ODS:15.5,STAN:7,SPD:10.5,Pir\u00E1ti:10.5,"jin\xE9 strany":5.5,"TOP 09":4.5,"KDU-\u010CSL":2.5,KS\u010CM:3.5,P\u0159\u00EDsaha:2.5,Motorist\u00E9:null,SOCDEM:3.5,Svobodn\u00ED:null,Zelen\u00ED:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:2},{"poll:identifier":"2023-10","pollster:id":"Median",middle_date:"2023-10-17",ANO:35,ODS:13.5,STAN:6,SPD:10.5,Pir\u00E1ti:9,"jin\xE9 strany":3,"TOP 09":6,"KDU-\u010CSL":3.5,KS\u010CM:3,P\u0159\u00EDsaha:3,Motorist\u00E9:null,SOCDEM:3.5,Svobodn\u00ED:null,Zelen\u00ED:1.5,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:2.5},{"poll:identifier":"2023-09","pollster:id":"Kantar",middle_date:"2023-09-20",ANO:33.5,ODS:12,STAN:7.5,SPD:9.5,Pir\u00E1ti:8.5,"jin\xE9 strany":2,"TOP 09":5,"KDU-\u010CSL":3.5,KS\u010CM:3,P\u0159\u00EDsaha:4,Motorist\u00E9:null,SOCDEM:3.5,Svobodn\u00ED:3,Zelen\u00ED:2,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:3},{"poll:identifier":"2023-09","pollster:id":"Median",middle_date:"2023-09-18",ANO:34,ODS:13,STAN:6.5,SPD:9.5,Pir\u00E1ti:11.5,"jin\xE9 strany":3,"TOP 09":5.5,"KDU-\u010CSL":4,KS\u010CM:4.5,P\u0159\u00EDsaha:null,Motorist\u00E9:null,SOCDEM:4,Svobodn\u00ED:null,Zelen\u00ED:2,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:2.5},{"poll:identifier":"2023-09","pollster:id":"STEM",middle_date:"2023-09-12",ANO:30.8,ODS:13.1,STAN:5.3,SPD:10.9,Pir\u00E1ti:9.6,"jin\xE9 strany":.6,"TOP 09":5.4,"KDU-\u010CSL":5,KS\u010CM:4.3,P\u0159\u00EDsaha:3.2,Motorist\u00E9:null,SOCDEM:4,Svobodn\u00ED:2.8,Zelen\u00ED:2.7,Trikol\u00F3ra:1.1,"Voln\xFD blok":null,PRO:1.2},{"poll:identifier":"2023-07","pollster:id":"Median",middle_date:"2023-07-20",ANO:33,ODS:15,STAN:6.5,SPD:8,Pir\u00E1ti:12,"jin\xE9 strany":1.5,"TOP 09":5.5,"KDU-\u010CSL":4,KS\u010CM:3,P\u0159\u00EDsaha:3,Motorist\u00E9:null,SOCDEM:5,Svobodn\u00ED:null,Zelen\u00ED:1.5,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:1.5},{"poll:identifier":"2023-06","pollster:id":"Median",middle_date:"2023-06-21",ANO:35.5,ODS:14,STAN:5.5,SPD:10,Pir\u00E1ti:11,"jin\xE9 strany":1.5,"TOP 09":5,"KDU-\u010CSL":2,KS\u010CM:2.5,P\u0159\u00EDsaha:2.5,Motorist\u00E9:null,SOCDEM:4,Svobodn\u00ED:null,Zelen\u00ED:2.5,Trikol\u00F3ra:2.5,"Voln\xFD blok":null,PRO:1.5},{"poll:identifier":"2023-05","pollster:id":"Kantar",middle_date:"2023-05-24",ANO:33.5,ODS:17,STAN:6.5,SPD:8,Pir\u00E1ti:11.5,"jin\xE9 strany":3,"TOP 09":3.5,"KDU-\u010CSL":4,KS\u010CM:3.5,P\u0159\u00EDsaha:2.5,Motorist\u00E9:null,SOCDEM:3,Svobodn\u00ED:null,Zelen\u00ED:2,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:2},{"poll:identifier":"2023-05","pollster:id":"STEM",middle_date:"2023-05-23",ANO:33.5,ODS:14.6,STAN:5.8,SPD:9.3,Pir\u00E1ti:10.8,"jin\xE9 strany":.2,"TOP 09":4.7,"KDU-\u010CSL":3.4,KS\u010CM:3.8,P\u0159\u00EDsaha:2.9,Motorist\u00E9:null,SOCDEM:4.1,Svobodn\u00ED:2.2,Zelen\u00ED:2.3,Trikol\u00F3ra:1.4,"Voln\xFD blok":null,PRO:1.2},{"poll:identifier":"2023-05","pollster:id":"Median",middle_date:"2023-05-17",ANO:34.5,ODS:15,STAN:6,SPD:8.5,Pir\u00E1ti:10.5,"jin\xE9 strany":3,"TOP 09":5.5,"KDU-\u010CSL":4,KS\u010CM:3.5,P\u0159\u00EDsaha:2,Motorist\u00E9:null,SOCDEM:4,Svobodn\u00ED:null,Zelen\u00ED:null,Trikol\u00F3ra:2.5,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2023-04","pollster:id":"Kantar",middle_date:"2023-04-26",ANO:30.5,ODS:17,STAN:6,SPD:9,Pir\u00E1ti:11,"jin\xE9 strany":2,"TOP 09":5,"KDU-\u010CSL":5,KS\u010CM:2.5,P\u0159\u00EDsaha:2.5,Motorist\u00E9:null,SOCDEM:5.5,Svobodn\u00ED:null,Zelen\u00ED:2,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:2},{"poll:identifier":"2023-04","pollster:id":"Median",middle_date:"2023-04-16",ANO:31,ODS:15,STAN:7.5,SPD:8.5,Pir\u00E1ti:10.5,"jin\xE9 strany":4,"TOP 09":4.5,"KDU-\u010CSL":5.5,KS\u010CM:4,P\u0159\u00EDsaha:2,Motorist\u00E9:null,SOCDEM:4,Svobodn\u00ED:null,Zelen\u00ED:2,Trikol\u00F3ra:1.5,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2023-03","pollster:id":"Kantar",middle_date:"2023-03-28",ANO:29.5,ODS:20,STAN:5.5,SPD:8,Pir\u00E1ti:11,"jin\xE9 strany":5,"TOP 09":4,"KDU-\u010CSL":3,KS\u010CM:2.5,P\u0159\u00EDsaha:3.5,Motorist\u00E9:null,SOCDEM:5,Svobodn\u00ED:null,Zelen\u00ED:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:3},{"poll:identifier":"2023-03","pollster:id":"Median",middle_date:"2023-03-18",ANO:34.5,ODS:15.5,STAN:8,SPD:10,Pir\u00E1ti:8.5,"jin\xE9 strany":1.5,"TOP 09":5,"KDU-\u010CSL":4,KS\u010CM:3,P\u0159\u00EDsaha:2,Motorist\u00E9:null,SOCDEM:4,Svobodn\u00ED:null,Zelen\u00ED:2,Trikol\u00F3ra:3,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2023-02","pollster:id":"Median",middle_date:"2023-02-23",ANO:32,ODS:14.5,STAN:7,SPD:9.5,Pir\u00E1ti:11.5,"jin\xE9 strany":2.5,"TOP 09":5,"KDU-\u010CSL":3.5,KS\u010CM:3.5,P\u0159\u00EDsaha:2.5,Motorist\u00E9:null,SOCDEM:5,Svobodn\u00ED:null,Zelen\u00ED:2,Trikol\u00F3ra:1.5,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2023-02","pollster:id":"Kantar",middle_date:"2023-02-22",ANO:29.5,ODS:21.5,STAN:7,SPD:8.5,Pir\u00E1ti:9,"jin\xE9 strany":6.5,"TOP 09":5,"KDU-\u010CSL":4,KS\u010CM:2,P\u0159\u00EDsaha:2.5,Motorist\u00E9:null,SOCDEM:4.5,Svobodn\u00ED:null,Zelen\u00ED:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-12","pollster:id":"STEM",middle_date:"2022-12-02",ANO:30.8,ODS:13.9,STAN:6.4,SPD:12.4,Pir\u00E1ti:9.4,"jin\xE9 strany":9.5,"TOP 09":4.6,"KDU-\u010CSL":4.9,KS\u010CM:4.2,P\u0159\u00EDsaha:null,Motorist\u00E9:null,SOCDEM:4,Svobodn\u00ED:null,Zelen\u00ED:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-10","pollster:id":"Kantar",middle_date:"2022-10-26",ANO:26.5,ODS:21.5,STAN:6,SPD:11,Pir\u00E1ti:11.5,"jin\xE9 strany":4,"TOP 09":5.5,"KDU-\u010CSL":3.5,KS\u010CM:2.5,P\u0159\u00EDsaha:2.5,Motorist\u00E9:null,SOCDEM:3.5,Svobodn\u00ED:null,Zelen\u00ED:null,Trikol\u00F3ra:2,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-10","pollster:id":"Median",middle_date:"2022-10-16",ANO:31.5,ODS:13.5,STAN:5.5,SPD:12,Pir\u00E1ti:11,"jin\xE9 strany":2.5,"TOP 09":5,"KDU-\u010CSL":6,KS\u010CM:2,P\u0159\u00EDsaha:2,Motorist\u00E9:null,SOCDEM:5.5,Svobodn\u00ED:null,Zelen\u00ED:2,Trikol\u00F3ra:1.5,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-09","pollster:id":"Kantar",middle_date:"2022-09-21",ANO:29.5,ODS:18,STAN:7.5,SPD:11.5,Pir\u00E1ti:9,"jin\xE9 strany":4,"TOP 09":4,"KDU-\u010CSL":6,KS\u010CM:2,P\u0159\u00EDsaha:4,Motorist\u00E9:null,SOCDEM:2.5,Svobodn\u00ED:null,Zelen\u00ED:2,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-09","pollster:id":"Median",middle_date:"2022-09-15",ANO:30.5,ODS:16,STAN:5.5,SPD:11.5,Pir\u00E1ti:11,"jin\xE9 strany":2.5,"TOP 09":6,"KDU-\u010CSL":2.5,KS\u010CM:2.5,P\u0159\u00EDsaha:3,Motorist\u00E9:null,SOCDEM:4.5,Svobodn\u00ED:null,Zelen\u00ED:2,Trikol\u00F3ra:2,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-09","pollster:id":"STEM",middle_date:"2022-09-04",ANO:30,ODS:14.2,STAN:5,SPD:14.3,Pir\u00E1ti:9.4,"jin\xE9 strany":10.2,"TOP 09":5,"KDU-\u010CSL":4.5,KS\u010CM:null,P\u0159\u00EDsaha:3.5,Motorist\u00E9:null,SOCDEM:4,Svobodn\u00ED:null,Zelen\u00ED:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-08","pollster:id":"Kantar",middle_date:"2022-08-24",ANO:30.5,ODS:19.5,STAN:6.5,SPD:11,Pir\u00E1ti:8.5,"jin\xE9 strany":4,"TOP 09":4.5,"KDU-\u010CSL":4,KS\u010CM:3.5,P\u0159\u00EDsaha:3,Motorist\u00E9:null,SOCDEM:3,Svobodn\u00ED:2,Zelen\u00ED:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-08","pollster:id":"Median",middle_date:"2022-08-16",ANO:29,ODS:16,STAN:4,SPD:14,Pir\u00E1ti:11.5,"jin\xE9 strany":2.5,"TOP 09":3.5,"KDU-\u010CSL":3.5,KS\u010CM:3.5,P\u0159\u00EDsaha:3.5,Motorist\u00E9:null,SOCDEM:5,Svobodn\u00ED:null,Zelen\u00ED:2,Trikol\u00F3ra:2,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-07","pollster:id":"STEM",middle_date:"2022-08-07",ANO:31.1,ODS:15.5,STAN:5.5,SPD:11.9,Pir\u00E1ti:9.3,"jin\xE9 strany":.7,"TOP 09":5.6,"KDU-\u010CSL":3.4,KS\u010CM:3.4,P\u0159\u00EDsaha:3.3,Motorist\u00E9:null,SOCDEM:4.8,Svobodn\u00ED:1.7,Zelen\u00ED:2.5,Trikol\u00F3ra:1.4,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-07","pollster:id":"Median",middle_date:"2022-07-20",ANO:30,ODS:15.5,STAN:5.5,SPD:12.5,Pir\u00E1ti:10.5,"jin\xE9 strany":1.5,"TOP 09":5,"KDU-\u010CSL":4.5,KS\u010CM:2.5,P\u0159\u00EDsaha:3,Motorist\u00E9:null,SOCDEM:5,Svobodn\u00ED:null,Zelen\u00ED:2,Trikol\u00F3ra:2.5,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-06","pollster:id":"Median",middle_date:"2022-06-11",ANO:29,ODS:16.1,STAN:4.8,SPD:12.5,Pir\u00E1ti:11.8,"jin\xE9 strany":1.8,"TOP 09":5.2,"KDU-\u010CSL":4.6,KS\u010CM:2.8,P\u0159\u00EDsaha:2.2,Motorist\u00E9:null,SOCDEM:5.6,Svobodn\u00ED:null,Zelen\u00ED:1.8,Trikol\u00F3ra:1.6,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-05","pollster:id":"Kantar",middle_date:"2022-05-24",ANO:28,ODS:22.5,STAN:6.5,SPD:11,Pir\u00E1ti:8.5,"jin\xE9 strany":5,"TOP 09":4,"KDU-\u010CSL":3.5,KS\u010CM:2.5,P\u0159\u00EDsaha:2,Motorist\u00E9:null,SOCDEM:4.5,Svobodn\u00ED:null,Zelen\u00ED:2,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-05","pollster:id":"Median",middle_date:"2022-05-17",ANO:28.5,ODS:16.5,STAN:8.5,SPD:11.5,Pir\u00E1ti:9,"jin\xE9 strany":3,"TOP 09":4.5,"KDU-\u010CSL":4.5,KS\u010CM:3,P\u0159\u00EDsaha:3,Motorist\u00E9:null,SOCDEM:5.5,Svobodn\u00ED:null,Zelen\u00ED:null,Trikol\u00F3ra:2.5,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-04","pollster:id":"Kantar",middle_date:"2022-04-18",ANO:27.5,ODS:26,STAN:10,SPD:11,Pir\u00E1ti:5,"jin\xE9 strany":3.5,"TOP 09":3,"KDU-\u010CSL":4.5,KS\u010CM:2,P\u0159\u00EDsaha:3,Motorist\u00E9:null,SOCDEM:2.5,Svobodn\u00ED:null,Zelen\u00ED:2,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-03","pollster:id":"Kantar",middle_date:"2022-03-23",ANO:27.5,ODS:22.5,STAN:10,SPD:9.5,Pir\u00E1ti:7.5,"jin\xE9 strany":3.5,"TOP 09":5,"KDU-\u010CSL":4,KS\u010CM:2.5,P\u0159\u00EDsaha:3.5,Motorist\u00E9:null,SOCDEM:2.5,Svobodn\u00ED:null,Zelen\u00ED:null,Trikol\u00F3ra:2,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-02","pollster:id":"Kantar",middle_date:"2022-02-23",ANO:25,ODS:21,STAN:11,SPD:11.5,Pir\u00E1ti:7.5,"jin\xE9 strany":4,"TOP 09":6.5,"KDU-\u010CSL":5.5,KS\u010CM:2,P\u0159\u00EDsaha:3,Motorist\u00E9:null,SOCDEM:3,Svobodn\u00ED:null,Zelen\u00ED:null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2021-11","pollster:id":"Kantar",middle_date:"2021-11-10",ANO:27,ODS:15.5,STAN:13,SPD:9.5,Pir\u00E1ti:8,"jin\xE9 strany":4,"TOP 09":7,"KDU-\u010CSL":3.5,KS\u010CM:3.5,P\u0159\u00EDsaha:2.5,Motorist\u00E9:null,SOCDEM:4,Svobodn\u00ED:null,Zelen\u00ED:null,Trikol\u00F3ra:2.5,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2021-10","pollster:id":"volby+STEM",middle_date:"2021-10-09",ANO:27.1,ODS:13.6,STAN:6.1,SPD:9.6,Pir\u00E1ti:9.5,"jin\xE9 strany":1.9,"TOP 09":7.2,"KDU-\u010CSL":6.9,KS\u010CM:3.6,P\u0159\u00EDsaha:4.7,Motorist\u00E9:null,SOCDEM:4.7,Svobodn\u00ED:null,Zelen\u00ED:1,Trikol\u00F3ra:2.8,"Voln\xFD blok":1.3,PRO:null}],El=[{names:["ANO","ODS","STAN","SPD","Pir\xE1ti","jin\xE9 strany","TOP 09","KDU-\u010CSL","KS\u010CM","P\u0159\xEDsaha","Motorist\xE9","SOCDEM","Svobodn\xED","Zelen\xED","Trikol\xF3ra","Voln\xFD blok","PRO"]}];const Cl={data:function(){return{polls:yl,candidates:El[0].names}},methods:{formatDate(n){return new Date(n).toLocaleDateString("cs")}}},Ll={class:"container"},jl=l("h3",null,[T(" Zve\u0159ejn\u011Bn\xE9 pr\u016Fzkumy "),l("small",null,"Strany")],-1),Vl={class:"table-responsive"},Ul={class:"table table-striped table-hover table-condensed"},Zl=l("th",null,null,-1),Rl=l("th",null,[T("Datum\xA0"),l("small",null,"(st\u0159ed)")],-1);function $l(n,O,a,D,d,M){const e=K;return i(),o("div",Ll,[jl,l("div",Vl,[l("table",Ul,[l("thead",null,[l("tr",null,[Zl,Rl,(i(!0),o(u,null,P(n.candidates,(t,S)=>(i(),o("th",{key:S},[l("small",null,r(t),1)]))),128))])]),l("tbody",null,[(i(!0),o(u,null,P(n.polls,(t,S)=>(i(),o("tr",{key:S},[l("th",null,r(t["pollster:id"]),1),l("td",null,r(M.formatDate(t.middle_date)),1),(i(!0),o(u,null,P(n.candidates,(p,c)=>(i(),o("td",{key:c},[s(e,{decNumber:t[p]},null,8,["decNumber"])]))),128))]))),128))])])])])}var gl=_(Cl,[["render",$l]]),xl=[{"poll:identifier":"2024-10","pollster:id":"Kantar",middle_date:"2024-10-05",ANO:36.5,SPOLU:20,STAN:14,SPD:7,Pir\u00E1ti:5,"jin\xE9 strany":4.5,P\u0159\u00EDsaha:3,KS\u010CM:3,SOCDEM:2.5,Motorist\u00E9:2.5,Svobodn\u00ED:2,Zelen\u00ED:null,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2024-06","pollster:id":"Kantar",middle_date:"2024-06-15",ANO:34.5,SPOLU:22.5,STAN:8.5,SPD:6,Pir\u00E1ti:9,"jin\xE9 strany":4.5,P\u0159\u00EDsaha:4.5,KS\u010CM:3,SOCDEM:2.5,Motorist\u00E9:null,Svobodn\u00ED:2.5,Zelen\u00ED:2.5,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2024-04","pollster:id":"Kantar",middle_date:"2024-05-01",ANO:32.5,SPOLU:22.5,STAN:7.5,SPD:9,Pir\u00E1ti:11,"jin\xE9 strany":6,P\u0159\u00EDsaha:3.5,KS\u010CM:2.5,SOCDEM:3,Motorist\u00E9:null,Svobodn\u00ED:null,Zelen\u00ED:2.5,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2024-03","pollster:id":"Kantar",middle_date:"2024-03-27",ANO:35.5,SPOLU:21.5,STAN:6.5,SPD:8,Pir\u00E1ti:11,"jin\xE9 strany":2.5,P\u0159\u00EDsaha:2.5,KS\u010CM:3,SOCDEM:3,Motorist\u00E9:null,Svobodn\u00ED:2.5,Zelen\u00ED:2,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:2},{"poll:identifier":"2024-02","pollster:id":"Kantar",middle_date:"2024-02-21",ANO:39,SPOLU:20,STAN:7.5,SPD:9,Pir\u00E1ti:10,"jin\xE9 strany":5.5,P\u0159\u00EDsaha:null,KS\u010CM:2.5,SOCDEM:2.5,Motorist\u00E9:null,Svobodn\u00ED:2,Zelen\u00ED:2,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2024-01","pollster:id":"Kantar",middle_date:"2024-01-24",ANO:35.5,SPOLU:22.5,STAN:7,SPD:10,Pir\u00E1ti:10,"jin\xE9 strany":2,P\u0159\u00EDsaha:3.5,KS\u010CM:3,SOCDEM:4,Motorist\u00E9:null,Svobodn\u00ED:2.5,Zelen\u00ED:null,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2023-11","pollster:id":"Kantar",middle_date:"2023-11-22",ANO:34.5,SPOLU:18.5,STAN:7,SPD:10,Pir\u00E1ti:12,"jin\xE9 strany":2,P\u0159\u00EDsaha:2.5,KS\u010CM:2.5,SOCDEM:4,Motorist\u00E9:null,Svobodn\u00ED:2,Zelen\u00ED:3,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:2,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2023-10","pollster:id":"Kantar",middle_date:"2023-10-25",ANO:33,SPOLU:21.5,STAN:7,SPD:10.5,Pir\u00E1ti:10.5,"jin\xE9 strany":6,P\u0159\u00EDsaha:2.5,KS\u010CM:3.5,SOCDEM:3.5,Motorist\u00E9:null,Svobodn\u00ED:null,Zelen\u00ED:null,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:2},{"poll:identifier":"2023-09","pollster:id":"Kantar",middle_date:"2023-09-20",ANO:33.5,SPOLU:19.5,STAN:7.5,SPD:9.5,Pir\u00E1ti:8.5,"jin\xE9 strany":3,P\u0159\u00EDsaha:4,KS\u010CM:3,SOCDEM:3.5,Motorist\u00E9:null,Svobodn\u00ED:3,Zelen\u00ED:2,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:3},{"poll:identifier":"2023-05","pollster:id":"Kantar",middle_date:"2023-05-24",ANO:33.5,SPOLU:24,STAN:6,SPD:8,Pir\u00E1ti:11.5,"jin\xE9 strany":3,P\u0159\u00EDsaha:2.5,KS\u010CM:3.5,SOCDEM:3.5,Motorist\u00E9:null,Svobodn\u00ED:null,Zelen\u00ED:2.5,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:2},{"poll:identifier":"2023-04","pollster:id":"Kantar",middle_date:"2023-04-26",ANO:31,SPOLU:25,STAN:6.5,SPD:9.5,Pir\u00E1ti:11.5,"jin\xE9 strany":2,P\u0159\u00EDsaha:2.5,KS\u010CM:2.5,SOCDEM:5.5,Motorist\u00E9:null,Svobodn\u00ED:null,Zelen\u00ED:2,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:2},{"poll:identifier":"2023-03","pollster:id":"Kantar",middle_date:"2023-03-28",ANO:29.5,SPOLU:27.5,STAN:5.5,SPD:8,Pir\u00E1ti:10.5,"jin\xE9 strany":5,P\u0159\u00EDsaha:3.5,KS\u010CM:2.5,SOCDEM:5,Motorist\u00E9:null,Svobodn\u00ED:null,Zelen\u00ED:null,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:3},{"poll:identifier":"2023-02","pollster:id":"Kantar",middle_date:"2023-02-22",ANO:30.5,SPOLU:31,STAN:null,SPD:9,Pir\u00E1ti:null,"jin\xE9 strany":7,P\u0159\u00EDsaha:2.5,KS\u010CM:2,SOCDEM:5,Motorist\u00E9:null,Svobodn\u00ED:null,Zelen\u00ED:null,"Pir\xE1ti+STAN":13,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-10","pollster:id":"Kantar",middle_date:"2022-10-26",ANO:28,SPOLU:31.5,STAN:null,SPD:11.5,Pir\u00E1ti:null,"jin\xE9 strany":3.5,P\u0159\u00EDsaha:2.5,KS\u010CM:3,SOCDEM:4,Motorist\u00E9:null,Svobodn\u00ED:null,Zelen\u00ED:null,"Pir\xE1ti+STAN":14,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:2,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-09","pollster:id":"Kantar",middle_date:"2022-09-21",ANO:31.5,SPOLU:28.5,STAN:null,SPD:12,Pir\u00E1ti:null,"jin\xE9 strany":5,P\u0159\u00EDsaha:4.5,KS\u010CM:2,SOCDEM:2.5,Motorist\u00E9:null,Svobodn\u00ED:null,Zelen\u00ED:2,"Pir\xE1ti+STAN":12,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-08","pollster:id":"Kantar",middle_date:"2022-08-24",ANO:32,SPOLU:29,STAN:null,SPD:11,Pir\u00E1ti:null,"jin\xE9 strany":7,P\u0159\u00EDsaha:3.5,KS\u010CM:4,SOCDEM:3.5,Motorist\u00E9:null,Svobodn\u00ED:null,Zelen\u00ED:null,"Pir\xE1ti+STAN":10,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-05","pollster:id":"Kantar",middle_date:"2022-05-24",ANO:29.5,SPOLU:28.5,STAN:null,SPD:11.5,Pir\u00E1ti:null,"jin\xE9 strany":5.5,P\u0159\u00EDsaha:2.5,KS\u010CM:2.5,SOCDEM:5,Motorist\u00E9:null,Svobodn\u00ED:null,Zelen\u00ED:2.5,"Pir\xE1ti+STAN":12.5,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-04","pollster:id":"Kantar",middle_date:"2022-04-18",ANO:28.5,SPOLU:33.5,STAN:null,SPD:11,Pir\u00E1ti:null,"jin\xE9 strany":4.5,P\u0159\u00EDsaha:3,KS\u010CM:2,SOCDEM:4,Motorist\u00E9:null,Svobodn\u00ED:null,Zelen\u00ED:2,"Pir\xE1ti+STAN":11.5,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-03","pollster:id":"Kantar",middle_date:"2022-03-23",ANO:29,SPOLU:31.5,STAN:null,SPD:9.5,Pir\u00E1ti:null,"jin\xE9 strany":2.5,P\u0159\u00EDsaha:4,KS\u010CM:2.5,SOCDEM:3,Motorist\u00E9:null,Svobodn\u00ED:null,Zelen\u00ED:null,"Pir\xE1ti+STAN":15.5,"Trikol\xF3ra+S+S":2.5,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-03","pollster:id":"Median",middle_date:"2022-03-17",ANO:27.5,SPOLU:26.5,STAN:null,SPD:10,Pir\u00E1ti:null,"jin\xE9 strany":4,P\u0159\u00EDsaha:3,KS\u010CM:4,SOCDEM:5.5,Motorist\u00E9:null,Svobodn\u00ED:null,Zelen\u00ED:null,"Pir\xE1ti+STAN":16.5,"Trikol\xF3ra+S+S":3,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2022-02","pollster:id":"Kantar",middle_date:"2022-02-23",ANO:27.5,SPOLU:32.5,STAN:null,SPD:12,Pir\u00E1ti:null,"jin\xE9 strany":2,P\u0159\u00EDsaha:3.5,KS\u010CM:2,SOCDEM:3,Motorist\u00E9:null,Svobodn\u00ED:null,Zelen\u00ED:null,"Pir\xE1ti+STAN":14.5,"Trikol\xF3ra+S+S":3,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2021-11","pollster:id":"Median",middle_date:"2021-11-16",ANO:29.5,SPOLU:26,STAN:null,SPD:8.5,Pir\u00E1ti:null,"jin\xE9 strany":3.5,P\u0159\u00EDsaha:3,KS\u010CM:4.5,SOCDEM:4.5,Motorist\u00E9:null,Svobodn\u00ED:null,Zelen\u00ED:null,"Pir\xE1ti+STAN":16.5,"Trikol\xF3ra+S+S":4,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2021-11","pollster:id":"Kantar",middle_date:"2021-11-10",ANO:28,SPOLU:28,STAN:null,SPD:9.5,Pir\u00E1ti:null,"jin\xE9 strany":3,P\u0159\u00EDsaha:3.5,KS\u010CM:3.5,SOCDEM:4,Motorist\u00E9:null,Svobodn\u00ED:null,Zelen\u00ED:null,"Pir\xE1ti+STAN":17,"Trikol\xF3ra+S+S":3.5,Trikol\u00F3ra:null,"Voln\xFD blok":null,PRO:null},{"poll:identifier":"2021-10","pollster:id":"volby",middle_date:"2021-10-09",ANO:27.1,SPOLU:27.8,STAN:null,SPD:9.6,Pir\u00E1ti:null,"jin\xE9 strany":1.9,P\u0159\u00EDsaha:4.7,KS\u010CM:3.6,SOCDEM:4.7,Motorist\u00E9:null,Svobodn\u00ED:null,Zelen\u00ED:1,"Pir\xE1ti+STAN":15.6,"Trikol\xF3ra+S+S":2.8,Trikol\u00F3ra:null,"Voln\xFD blok":1.3,PRO:null}],Il=[{names:["ANO","SPOLU","STAN","SPD","Pir\xE1ti","jin\xE9 strany","P\u0159\xEDsaha","KS\u010CM","SOCDEM","Motorist\xE9","Svobodn\xED","Zelen\xED","Pir\xE1ti+STAN","Trikol\xF3ra+S+S","Trikol\xF3ra","Voln\xFD blok","PRO"]}];const wl={data:function(){return{polls:xl,candidates:Il[0].names}},methods:{formatDate(n){return new Date(n).toLocaleDateString("cs")}}},Fl={class:"container"},zl=l("h3",null,[T(" Zve\u0159ejn\u011Bn\xE9 pr\u016Fzkumy "),l("small",null,"Koalice")],-1),Bl={class:"table-responsive"},Hl={class:"table table-striped table-hover table-condensed"},ql=l("th",null,null,-1),Wl=l("th",null,[T("Datum\xA0"),l("small",null,"(st\u0159ed)")],-1);function Gl(n,O,a,D,d,M){const e=K;return i(),o("div",Fl,[zl,l("div",Bl,[l("table",Hl,[l("thead",null,[l("tr",null,[ql,Wl,(i(!0),o(u,null,P(n.candidates,(t,S)=>(i(),o("th",{key:S},[l("small",null,r(t),1)]))),128))])]),l("tbody",null,[(i(!0),o(u,null,P(n.polls,(t,S)=>(i(),o("tr",{key:S},[l("th",null,r(t["pollster:id"]),1),l("td",null,r(M.formatDate(t.middle_date)),1),(i(!0),o(u,null,P(n.candidates,(p,c)=>(i(),o("td",{key:c},[s(e,{decNumber:t[p]},null,8,["decNumber"])]))),128))]))),128))])])])])}var Jl=_(wl,[["render",Gl]]);const Ql="/home/michal/dev/mandaty-2022/shares/2024-10-30T16:51:57.398141_psp.png";var Xl={filename:Ql};const Yl=j({setup(n,{expose:O}){O();const a="https://mandaty.cz/",D="493242628099686";V({title:"Mand\xE1ty.cz",meta:[{hid:"og:name",property:"og:image",content:a+Xl.filename},{hid:"og:url",property:"og:url",content:a},{hid:"og:type",property:"og:type",content:"website"},{hid:"og:title",property:"og:title",content:"Mand\xE1ty.cz"},{hid:"og:description",property:"og:description",content:"V\xFDvoj volebn\xEDch model\u016F dle pr\u016Fzkum\u016F ve\u0159ejn\xE9ho m\xEDn\u011Bn\xED"},{hid:"fb:app_id",property:"fb:app_id",content:D}],link:[{rel:"icon",type:"image/x-icon",href:a+"favicon.svg"}]});const d={BASE_URL:a,FB_APP_ID:D};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}),ln={class:"container"},nn=l("h1",{class:"pt-4"},"Sn\u011Bmovna 2021-2025",-1),on=l("hr",null,null,-1),en=l("hr",null,null,-1),tn=l("hr",null,null,-1),rn=l("hr",null,null,-1),an=l("hr",null,null,-1);function dn(n,O,a,D,d,M){const e=y,t=rl,S=Ol,p=fl,c=gl,f=Jl;return i(),o("div",ln,[s(e),nn,on,s(t),en,s(S),tn,s(p),rn,s(c),an,s(f)])}var Pn=_(Yl,[["render",dn]]);export{Pn as default};
