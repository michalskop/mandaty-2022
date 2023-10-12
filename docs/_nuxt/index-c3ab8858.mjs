import{_ as K}from"./ChartLinks-de0176d9.mjs";import{_ as D,o as e,c as i,a as l,t as a,F as c,r as _,e as O,p as h,f as b,n as y,g as E,h as M,b as S,i as N,j as C,k as L,u as j}from"./entry-90aecd51.mjs";import{_ as f}from"./DecNumber-713d8115.mjs";const $=[{party:"ANO",median:82,lo:69,hi:97,in:1,id:"ANO",name:"Hnut\xED ANO",abbreviation:"ANO",color:"#261060",needs:.05,mps:72,seats:82,difference:10},{party:"ODS",median:33,lo:21,hi:45,in:.998,id:"ODS",name:"Ob\u010Dansk\xE1 demokratick\xE1 strana",abbreviation:"ODS",color:"#004494",needs:.05,mps:34,seats:33,difference:-1},{party:"SPD",median:26,lo:17,hi:35,in:.987,id:"SPD",name:"Svoboda a p\u0159\xEDm\xE1 demokracie - Tomio Okamura",abbreviation:"SPD",color:"#EA2329",needs:.05,mps:20,seats:27,difference:7},{party:"Pir\xE1ti",median:24,lo:14,hi:33,in:.977,id:"Pir\xE1ti",name:"\u010Cesk\xE1 pir\xE1tsk\xE1 strana",abbreviation:"Pir\xE1ti",color:"#000000",needs:.05,mps:4,seats:25,difference:21},{party:"STAN",median:17,lo:0,hi:25,in:.784,id:"STAN",name:"Starostov\xE9 a nez\xE1visl\xED",abbreviation:"STAN",color:"#5D8C00",needs:.05,mps:33,seats:19,difference:-14},{party:"TOP 09",median:12,lo:0,hi:20,in:.537,id:"TOP 09",name:"TOP 09",abbreviation:"TOP 09",color:"#723769",needs:.05,mps:14,seats:14,difference:0},{party:"KDU-\u010CSL",median:0,lo:0,hi:18,in:.314,id:"KDU-\u010CSL",name:"K\u0159es\u0165ansko demokratick\xE1 unie-\u010Ceskoslovensk\xE1 strana lidov\xE1",abbreviation:"KDU-\u010CSL",color:"#E6AC21",needs:.05,mps:23,seats:0,difference:-23},{party:"SOCDEM",median:0,lo:0,hi:16,in:.192,id:"SOCDEM",name:"\u010Cesk\xE1 strana soci\xE1ln\u011B demokratick\xE1",abbreviation:"SOCDEM",color:"#F07D00",needs:.05,mps:0,seats:0,difference:0},{party:"P\u0159\xEDsaha",median:0,lo:0,hi:15,in:.156,id:"P\u0159\xEDsaha",name:"P\u0159\xEDsaha",abbreviation:"P\u0159\xEDsaha",color:"#0033FF",needs:.05,mps:0,seats:0,difference:0},{party:"KS\u010CM",median:0,lo:0,hi:14,in:.119,id:"KS\u010CM",name:"Komunistick\xE1 strana \u010Cech a Moravy",abbreviation:"KS\u010CM",color:"#8C0000",needs:.05,mps:0,seats:0,difference:0}],V="2023-09-20";var A={data:$,date:V};const U={data:function(){return{seats:A.data,date:new Date(A.date).toLocaleDateString("cs-CZ")}},filters:{abs(n){return Math.abs(n)}}},k=n=>(h("data-v-afe46c60"),n=n(),b(),n),R=O("Po\u010Det mand\xE1t\u016F "),Z=k(()=>l("small",null,"s odhadem chyby",-1)),g=O(),x={class:"badge"},I={class:"container"},w={class:"row"},z={class:"card text-center mb-2"},F={class:"card-header"},B={class:"card-body"},H={class:"row"},W=k(()=>l("div",{class:"col-3"},null,-1)),q={class:"col-6 text-center"},G={class:"number"},J={key:0},Q={class:"text-success"},X={key:1},Y={class:"text-danger"},ll={key:2},nl=k(()=>l("span",{class:"text-muted"},null,-1)),el=[nl],il={class:"lo-hi"};function tl(n,u,r,P,d,p){return e(),i("div",null,[l("h3",null,[R,Z,g,l("span",x,a(n.date),1)]),l("div",I,[l("div",w,[(e(!0),i(c,null,_(n.seats,(t,o)=>(e(),i("div",{key:o,class:"col-xl-3 col-lg-4 col-sm-6"},[l("div",z,[l("div",F,[l("h4",{style:y({color:t.color})},a(t.abbreviation),5)]),l("div",B,[l("div",H,[W,l("div",q,[l("div",null,[l("span",G,a(t.seats),1),t.difference>0?(e(),i("span",J,[l("span",Q,"+"+a(t.difference),1)])):t.difference<0?(e(),i("span",X,[l("span",Y,a(t.difference),1)])):(e(),i("span",ll,el))])])]),l("div",il,[l("strong",null,a(t.lo)+" - "+a(t.hi),1)])])])]))),128))])])])}var ol=D(U,[["render",tl],["__scopeId","data-v-afe46c60"]]);const al={},rl=n=>(h("data-v-6d68b17d"),n=n(),b(),n),dl={id:"image-wrapper"},sl=rl(()=>l("img",{src:E,class:"image-small"},null,-1)),Sl=[sl];function ul(n,u){return e(),i("div",dl,Sl)}var v=D(al,[["render",ul],["__scopeId","data-v-6d68b17d"]]),Pl=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"}));const cl={name:"SnemovnaPollsChart",data(){return{isMobile:!1}},mounted(){this.isMobile=window.innerWidth<666,console.log("isMobile:",this.isMobile)},components:{SnemovnaPollsPictureChart:()=>M(()=>Promise.resolve().then(function(){return Pl}),void 0),SnemovnaPollsInteractiveChart:()=>M(()=>import("./entry-90aecd51.mjs").then(function(n){return n.S}),["entry-90aecd51.mjs","entry.3bb39d19.css"])}},_l=n=>(h("data-v-c7c0d9ea"),n=n(),b(),n),Ol={id:"image-wrapper"},pl=_l(()=>l("h3",null,[O(" V\xFDvoj volebn\xEDch model\u016F "),l("small",null,"dle pr\u016Fzkum\u016F ve\u0159ejn\xE9ho m\xEDn\u011Bn\xED ")],-1)),Dl={key:0},ml={key:1};function Tl(n,u,r,P,d,p){const t=v,o=C;return e(),i("div",Ol,[pl,d.isMobile?(e(),i("div",Dl,[S(t)])):N("",!0),d.isMobile?N("",!0):(e(),i("div",ml,[S(o)]))])}var hl=D(cl,[["render",Tl],["__scopeId","data-v-c7c0d9ea"]]),bl=[{"poll:identifier":"2023-09","pollster:id":"Kantar",middle_date:"2023-09-20",ANO:33.5,ODS:12,SPD:9.5,Pir\u00E1ti:8.5,STAN:7.5,"TOP 09":5,P\u0159\u00EDsaha:4,"KDU-\u010CSL":3.5,SOCDEM:3.5,KS\u010CM:3,Svobodn\u00ED:3,PRO:3,Zelen\u00ED:2,"jin\xE9 strany":2,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2023-09","pollster:id":"STEM",middle_date:"2023-09-12",ANO:30.8,ODS:13.1,SPD:10.9,Pir\u00E1ti:9.6,STAN:5.3,"TOP 09":5.4,P\u0159\u00EDsaha:3.2,"KDU-\u010CSL":5,SOCDEM:4,KS\u010CM:4.3,Svobodn\u00ED:2.8,PRO:1.2,Zelen\u00ED:2.7,"jin\xE9 strany":.6,Trikol\u00F3ra:1.1,"Voln\xFD blok":null},{"poll:identifier":"2023-07","pollster:id":"Median",middle_date:"2023-07-20",ANO:33,ODS:15,SPD:8,Pir\u00E1ti:12,STAN:6.5,"TOP 09":5.5,P\u0159\u00EDsaha:3,"KDU-\u010CSL":4,SOCDEM:5,KS\u010CM:3,Svobodn\u00ED:null,PRO:1.5,Zelen\u00ED:1.5,"jin\xE9 strany":1.5,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2023-06","pollster:id":"Median",middle_date:"2023-06-21",ANO:35.5,ODS:14,SPD:10,Pir\u00E1ti:11,STAN:5.5,"TOP 09":5,P\u0159\u00EDsaha:2.5,"KDU-\u010CSL":2,SOCDEM:4,KS\u010CM:2.5,Svobodn\u00ED:null,PRO:1.5,Zelen\u00ED:2.5,"jin\xE9 strany":1.5,Trikol\u00F3ra:2.5,"Voln\xFD blok":null},{"poll:identifier":"2023-05","pollster:id":"Kantar",middle_date:"2023-05-24",ANO:33.5,ODS:17,SPD:8,Pir\u00E1ti:11.5,STAN:6.5,"TOP 09":3.5,P\u0159\u00EDsaha:2.5,"KDU-\u010CSL":4,SOCDEM:3,KS\u010CM:3.5,Svobodn\u00ED:null,PRO:2,Zelen\u00ED:2,"jin\xE9 strany":3,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2023-05","pollster:id":"STEM",middle_date:"2023-05-23",ANO:33.5,ODS:14.6,SPD:9.3,Pir\u00E1ti:10.8,STAN:5.8,"TOP 09":4.7,P\u0159\u00EDsaha:2.9,"KDU-\u010CSL":3.4,SOCDEM:4.1,KS\u010CM:3.8,Svobodn\u00ED:2.2,PRO:1.2,Zelen\u00ED:2.3,"jin\xE9 strany":.2,Trikol\u00F3ra:1.4,"Voln\xFD blok":null},{"poll:identifier":"2023-05","pollster:id":"Median",middle_date:"2023-05-17",ANO:34.5,ODS:15,SPD:8.5,Pir\u00E1ti:10.5,STAN:6,"TOP 09":5.5,P\u0159\u00EDsaha:2,"KDU-\u010CSL":4,SOCDEM:4,KS\u010CM:3.5,Svobodn\u00ED:null,PRO:null,Zelen\u00ED:null,"jin\xE9 strany":3,Trikol\u00F3ra:2.5,"Voln\xFD blok":null},{"poll:identifier":"2023-04","pollster:id":"Kantar",middle_date:"2023-04-26",ANO:30.5,ODS:17,SPD:9,Pir\u00E1ti:11,STAN:6,"TOP 09":5,P\u0159\u00EDsaha:2.5,"KDU-\u010CSL":5,SOCDEM:5.5,KS\u010CM:2.5,Svobodn\u00ED:null,PRO:2,Zelen\u00ED:2,"jin\xE9 strany":2,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2023-04","pollster:id":"Median",middle_date:"2023-04-16",ANO:31,ODS:15,SPD:8.5,Pir\u00E1ti:10.5,STAN:7.5,"TOP 09":4.5,P\u0159\u00EDsaha:2,"KDU-\u010CSL":5.5,SOCDEM:4,KS\u010CM:4,Svobodn\u00ED:null,PRO:null,Zelen\u00ED:2,"jin\xE9 strany":4,Trikol\u00F3ra:1.5,"Voln\xFD blok":null},{"poll:identifier":"2023-03","pollster:id":"Kantar",middle_date:"2023-03-28",ANO:29.5,ODS:20,SPD:8,Pir\u00E1ti:11,STAN:5.5,"TOP 09":4,P\u0159\u00EDsaha:3.5,"KDU-\u010CSL":3,SOCDEM:5,KS\u010CM:2.5,Svobodn\u00ED:null,PRO:3,Zelen\u00ED:null,"jin\xE9 strany":5,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2023-03","pollster:id":"Median",middle_date:"2023-03-18",ANO:34.5,ODS:15.5,SPD:10,Pir\u00E1ti:8.5,STAN:8,"TOP 09":5,P\u0159\u00EDsaha:2,"KDU-\u010CSL":4,SOCDEM:4,KS\u010CM:3,Svobodn\u00ED:null,PRO:null,Zelen\u00ED:2,"jin\xE9 strany":1.5,Trikol\u00F3ra:3,"Voln\xFD blok":null},{"poll:identifier":"2023-02","pollster:id":"Median",middle_date:"2023-02-23",ANO:32,ODS:14.5,SPD:9.5,Pir\u00E1ti:11.5,STAN:7,"TOP 09":5,P\u0159\u00EDsaha:2.5,"KDU-\u010CSL":3.5,SOCDEM:5,KS\u010CM:3.5,Svobodn\u00ED:null,PRO:null,Zelen\u00ED:2,"jin\xE9 strany":2.5,Trikol\u00F3ra:1.5,"Voln\xFD blok":null},{"poll:identifier":"2023-02","pollster:id":"Kantar",middle_date:"2023-02-22",ANO:29.5,ODS:21.5,SPD:8.5,Pir\u00E1ti:9,STAN:7,"TOP 09":5,P\u0159\u00EDsaha:2.5,"KDU-\u010CSL":4,SOCDEM:4.5,KS\u010CM:2,Svobodn\u00ED:null,PRO:null,Zelen\u00ED:null,"jin\xE9 strany":6.5,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2022-12","pollster:id":"STEM",middle_date:"2022-12-02",ANO:30.8,ODS:13.9,SPD:12.4,Pir\u00E1ti:9.4,STAN:6.4,"TOP 09":4.6,P\u0159\u00EDsaha:null,"KDU-\u010CSL":4.9,SOCDEM:4,KS\u010CM:4.2,Svobodn\u00ED:null,PRO:null,Zelen\u00ED:null,"jin\xE9 strany":9.5,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2022-10","pollster:id":"Kantar",middle_date:"2022-10-26",ANO:26.5,ODS:21.5,SPD:11,Pir\u00E1ti:11.5,STAN:6,"TOP 09":5.5,P\u0159\u00EDsaha:2.5,"KDU-\u010CSL":3.5,SOCDEM:3.5,KS\u010CM:2.5,Svobodn\u00ED:null,PRO:null,Zelen\u00ED:null,"jin\xE9 strany":4,Trikol\u00F3ra:2,"Voln\xFD blok":null},{"poll:identifier":"2022-10","pollster:id":"Median",middle_date:"2022-10-16",ANO:31.5,ODS:13.5,SPD:12,Pir\u00E1ti:11,STAN:5.5,"TOP 09":5,P\u0159\u00EDsaha:2,"KDU-\u010CSL":6,SOCDEM:5.5,KS\u010CM:2,Svobodn\u00ED:null,PRO:null,Zelen\u00ED:2,"jin\xE9 strany":2.5,Trikol\u00F3ra:1.5,"Voln\xFD blok":null},{"poll:identifier":"2022-09","pollster:id":"Kantar",middle_date:"2022-09-21",ANO:29.5,ODS:18,SPD:11.5,Pir\u00E1ti:9,STAN:7.5,"TOP 09":4,P\u0159\u00EDsaha:4,"KDU-\u010CSL":6,SOCDEM:2.5,KS\u010CM:2,Svobodn\u00ED:null,PRO:null,Zelen\u00ED:2,"jin\xE9 strany":4,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2022-09","pollster:id":"Median",middle_date:"2022-09-15",ANO:30.5,ODS:16,SPD:11.5,Pir\u00E1ti:11,STAN:5.5,"TOP 09":6,P\u0159\u00EDsaha:3,"KDU-\u010CSL":2.5,SOCDEM:4.5,KS\u010CM:2.5,Svobodn\u00ED:null,PRO:null,Zelen\u00ED:2,"jin\xE9 strany":2.5,Trikol\u00F3ra:2,"Voln\xFD blok":null},{"poll:identifier":"2022-09","pollster:id":"STEM",middle_date:"2022-09-04",ANO:30,ODS:14.2,SPD:14.3,Pir\u00E1ti:9.4,STAN:5,"TOP 09":5,P\u0159\u00EDsaha:3.5,"KDU-\u010CSL":4.5,SOCDEM:4,KS\u010CM:null,Svobodn\u00ED:null,PRO:null,Zelen\u00ED:null,"jin\xE9 strany":10.2,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2022-08","pollster:id":"Kantar",middle_date:"2022-08-24",ANO:30.5,ODS:19.5,SPD:11,Pir\u00E1ti:8.5,STAN:6.5,"TOP 09":4.5,P\u0159\u00EDsaha:3,"KDU-\u010CSL":4,SOCDEM:3,KS\u010CM:3.5,Svobodn\u00ED:2,PRO:null,Zelen\u00ED:null,"jin\xE9 strany":4,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2022-08","pollster:id":"Median",middle_date:"2022-08-16",ANO:29,ODS:16,SPD:14,Pir\u00E1ti:11.5,STAN:4,"TOP 09":3.5,P\u0159\u00EDsaha:3.5,"KDU-\u010CSL":3.5,SOCDEM:5,KS\u010CM:3.5,Svobodn\u00ED:null,PRO:null,Zelen\u00ED:2,"jin\xE9 strany":2.5,Trikol\u00F3ra:2,"Voln\xFD blok":null},{"poll:identifier":"2022-07","pollster:id":"STEM",middle_date:"2022-08-07",ANO:31.1,ODS:15.5,SPD:11.9,Pir\u00E1ti:9.3,STAN:5.5,"TOP 09":5.6,P\u0159\u00EDsaha:3.3,"KDU-\u010CSL":3.4,SOCDEM:4.8,KS\u010CM:3.4,Svobodn\u00ED:1.7,PRO:null,Zelen\u00ED:2.5,"jin\xE9 strany":.7,Trikol\u00F3ra:1.4,"Voln\xFD blok":null},{"poll:identifier":"2022-07","pollster:id":"Median",middle_date:"2022-07-20",ANO:30,ODS:15.5,SPD:12.5,Pir\u00E1ti:10.5,STAN:5.5,"TOP 09":5,P\u0159\u00EDsaha:3,"KDU-\u010CSL":4.5,SOCDEM:5,KS\u010CM:2.5,Svobodn\u00ED:null,PRO:null,Zelen\u00ED:2,"jin\xE9 strany":1.5,Trikol\u00F3ra:2.5,"Voln\xFD blok":null},{"poll:identifier":"2022-06","pollster:id":"Median",middle_date:"2022-06-11",ANO:29,ODS:16.1,SPD:12.5,Pir\u00E1ti:11.8,STAN:4.8,"TOP 09":5.2,P\u0159\u00EDsaha:2.2,"KDU-\u010CSL":4.6,SOCDEM:5.6,KS\u010CM:2.8,Svobodn\u00ED:null,PRO:null,Zelen\u00ED:1.8,"jin\xE9 strany":1.8,Trikol\u00F3ra:1.6,"Voln\xFD blok":null},{"poll:identifier":"2022-05","pollster:id":"Kantar",middle_date:"2022-05-24",ANO:28,ODS:22.5,SPD:11,Pir\u00E1ti:8.5,STAN:6.5,"TOP 09":4,P\u0159\u00EDsaha:2,"KDU-\u010CSL":3.5,SOCDEM:4.5,KS\u010CM:2.5,Svobodn\u00ED:null,PRO:null,Zelen\u00ED:2,"jin\xE9 strany":5,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2022-05","pollster:id":"Median",middle_date:"2022-05-17",ANO:28.5,ODS:16.5,SPD:11.5,Pir\u00E1ti:9,STAN:8.5,"TOP 09":4.5,P\u0159\u00EDsaha:3,"KDU-\u010CSL":4.5,SOCDEM:5.5,KS\u010CM:3,Svobodn\u00ED:null,PRO:null,Zelen\u00ED:null,"jin\xE9 strany":3,Trikol\u00F3ra:2.5,"Voln\xFD blok":null},{"poll:identifier":"2022-04","pollster:id":"Kantar",middle_date:"2022-04-18",ANO:27.5,ODS:26,SPD:11,Pir\u00E1ti:5,STAN:10,"TOP 09":3,P\u0159\u00EDsaha:3,"KDU-\u010CSL":4.5,SOCDEM:2.5,KS\u010CM:2,Svobodn\u00ED:null,PRO:null,Zelen\u00ED:2,"jin\xE9 strany":3.5,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2022-03","pollster:id":"Kantar",middle_date:"2022-03-23",ANO:27.5,ODS:22.5,SPD:9.5,Pir\u00E1ti:7.5,STAN:10,"TOP 09":5,P\u0159\u00EDsaha:3.5,"KDU-\u010CSL":4,SOCDEM:2.5,KS\u010CM:2.5,Svobodn\u00ED:null,PRO:null,Zelen\u00ED:null,"jin\xE9 strany":3.5,Trikol\u00F3ra:2,"Voln\xFD blok":null},{"poll:identifier":"2022-02","pollster:id":"Kantar",middle_date:"2022-02-23",ANO:25,ODS:21,SPD:11.5,Pir\u00E1ti:7.5,STAN:11,"TOP 09":6.5,P\u0159\u00EDsaha:3,"KDU-\u010CSL":5.5,SOCDEM:3,KS\u010CM:2,Svobodn\u00ED:null,PRO:null,Zelen\u00ED:null,"jin\xE9 strany":4,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2021-11","pollster:id":"Kantar",middle_date:"2021-11-10",ANO:27,ODS:15.5,SPD:9.5,Pir\u00E1ti:8,STAN:13,"TOP 09":7,P\u0159\u00EDsaha:2.5,"KDU-\u010CSL":3.5,SOCDEM:4,KS\u010CM:3.5,Svobodn\u00ED:null,PRO:null,Zelen\u00ED:null,"jin\xE9 strany":4,Trikol\u00F3ra:2.5,"Voln\xFD blok":null},{"poll:identifier":"2021-10","pollster:id":"volby+STEM",middle_date:"2021-10-09",ANO:27.1,ODS:13.6,SPD:9.6,Pir\u00E1ti:9.5,STAN:6.1,"TOP 09":7.2,P\u0159\u00EDsaha:4.7,"KDU-\u010CSL":6.9,SOCDEM:4.7,KS\u010CM:3.6,Svobodn\u00ED:null,PRO:null,Zelen\u00ED:1,"jin\xE9 strany":1.9,Trikol\u00F3ra:2.8,"Voln\xFD blok":1.3}],kl=[{names:["ANO","ODS","SPD","Pir\xE1ti","STAN","TOP 09","P\u0159\xEDsaha","KDU-\u010CSL","SOCDEM","KS\u010CM","Svobodn\xED","PRO","Zelen\xED","jin\xE9 strany","Trikol\xF3ra","Voln\xFD blok"]}];const Ml={data:function(){return{polls:bl,candidates:kl[0].names}},methods:{formatDate(n){return new Date(n).toLocaleDateString("cs")}}},Nl={class:"container"},Al=l("h3",null,[O(" Zve\u0159ejn\u011Bn\xE9 pr\u016Fzkumy "),l("small",null,"Strany")],-1),fl={class:"table-responsive"},vl={class:"table table-striped table-hover table-condensed"},Kl=l("th",null,null,-1),yl=l("th",null,[O("Datum\xA0"),l("small",null,"(st\u0159ed)")],-1);function El(n,u,r,P,d,p){const t=f;return e(),i("div",Nl,[Al,l("div",fl,[l("table",vl,[l("thead",null,[l("tr",null,[Kl,yl,(e(!0),i(c,null,_(n.candidates,(o,s)=>(e(),i("th",{key:s},[l("small",null,a(o),1)]))),128))])]),l("tbody",null,[(e(!0),i(c,null,_(n.polls,(o,s)=>(e(),i("tr",{key:s},[l("th",null,a(o["pollster:id"]),1),l("td",null,a(p.formatDate(o.middle_date)),1),(e(!0),i(c,null,_(n.candidates,(m,T)=>(e(),i("td",{key:T},[S(t,{decNumber:o[m]},null,8,["decNumber"])]))),128))]))),128))])])])])}var Cl=D(Ml,[["render",El]]),Ll=[{"poll:identifier":"2023-05","pollster:id":"Kantar",middle_date:"2023-05-24",ANO:33.5,SPOLU:24,Pir\u00E1ti:11.5,SPD:8,STAN:6,SOCDEM:3.5,KS\u010CM:3.5,"jin\xE9 strany":3,P\u0159\u00EDsaha:2.5,Zelen\u00ED:2.5,PRO:2,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2023-04","pollster:id":"Kantar",middle_date:"2023-04-26",ANO:31,SPOLU:25,Pir\u00E1ti:11.5,SPD:9.5,STAN:6.5,SOCDEM:5.5,KS\u010CM:2.5,"jin\xE9 strany":2,P\u0159\u00EDsaha:2.5,Zelen\u00ED:2,PRO:2,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2023-03","pollster:id":"Kantar",middle_date:"2023-03-28",ANO:29.5,SPOLU:27.5,Pir\u00E1ti:10.5,SPD:8,STAN:5.5,SOCDEM:5,KS\u010CM:2.5,"jin\xE9 strany":5,P\u0159\u00EDsaha:3.5,Zelen\u00ED:null,PRO:3,"Pir\xE1ti+STAN":null,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2023-02","pollster:id":"Kantar",middle_date:"2023-02-22",ANO:30.5,SPOLU:31,Pir\u00E1ti:null,SPD:9,STAN:null,SOCDEM:5,KS\u010CM:2,"jin\xE9 strany":7,P\u0159\u00EDsaha:2.5,Zelen\u00ED:null,PRO:null,"Pir\xE1ti+STAN":13,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2022-10","pollster:id":"Kantar",middle_date:"2022-10-26",ANO:28,SPOLU:31.5,Pir\u00E1ti:null,SPD:11.5,STAN:null,SOCDEM:4,KS\u010CM:3,"jin\xE9 strany":3.5,P\u0159\u00EDsaha:2.5,Zelen\u00ED:null,PRO:null,"Pir\xE1ti+STAN":14,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:2,"Voln\xFD blok":null},{"poll:identifier":"2022-09","pollster:id":"Kantar",middle_date:"2022-09-21",ANO:31.5,SPOLU:28.5,Pir\u00E1ti:null,SPD:12,STAN:null,SOCDEM:2.5,KS\u010CM:2,"jin\xE9 strany":5,P\u0159\u00EDsaha:4.5,Zelen\u00ED:2,PRO:null,"Pir\xE1ti+STAN":12,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2022-08","pollster:id":"Kantar",middle_date:"2022-08-24",ANO:32,SPOLU:29,Pir\u00E1ti:null,SPD:11,STAN:null,SOCDEM:3.5,KS\u010CM:4,"jin\xE9 strany":7,P\u0159\u00EDsaha:3.5,Zelen\u00ED:null,PRO:null,"Pir\xE1ti+STAN":10,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2022-05","pollster:id":"Kantar",middle_date:"2022-05-24",ANO:29.5,SPOLU:28.5,Pir\u00E1ti:null,SPD:11.5,STAN:null,SOCDEM:5,KS\u010CM:2.5,"jin\xE9 strany":5.5,P\u0159\u00EDsaha:2.5,Zelen\u00ED:2.5,PRO:null,"Pir\xE1ti+STAN":12.5,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2022-04","pollster:id":"Kantar",middle_date:"2022-04-18",ANO:28.5,SPOLU:33.5,Pir\u00E1ti:null,SPD:11,STAN:null,SOCDEM:4,KS\u010CM:2,"jin\xE9 strany":4.5,P\u0159\u00EDsaha:3,Zelen\u00ED:2,PRO:null,"Pir\xE1ti+STAN":11.5,"Trikol\xF3ra+S+S":null,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2022-03","pollster:id":"Kantar",middle_date:"2022-03-23",ANO:29,SPOLU:31.5,Pir\u00E1ti:null,SPD:9.5,STAN:null,SOCDEM:3,KS\u010CM:2.5,"jin\xE9 strany":2.5,P\u0159\u00EDsaha:4,Zelen\u00ED:null,PRO:null,"Pir\xE1ti+STAN":15.5,"Trikol\xF3ra+S+S":2.5,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2022-03","pollster:id":"Median",middle_date:"2022-03-17",ANO:27.5,SPOLU:26.5,Pir\u00E1ti:null,SPD:10,STAN:null,SOCDEM:5.5,KS\u010CM:4,"jin\xE9 strany":4,P\u0159\u00EDsaha:3,Zelen\u00ED:null,PRO:null,"Pir\xE1ti+STAN":16.5,"Trikol\xF3ra+S+S":3,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2022-02","pollster:id":"Kantar",middle_date:"2022-02-23",ANO:27.5,SPOLU:32.5,Pir\u00E1ti:null,SPD:12,STAN:null,SOCDEM:3,KS\u010CM:2,"jin\xE9 strany":2,P\u0159\u00EDsaha:3.5,Zelen\u00ED:null,PRO:null,"Pir\xE1ti+STAN":14.5,"Trikol\xF3ra+S+S":3,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2021-11","pollster:id":"Median",middle_date:"2021-11-16",ANO:29.5,SPOLU:26,Pir\u00E1ti:null,SPD:8.5,STAN:null,SOCDEM:4.5,KS\u010CM:4.5,"jin\xE9 strany":3.5,P\u0159\u00EDsaha:3,Zelen\u00ED:null,PRO:null,"Pir\xE1ti+STAN":16.5,"Trikol\xF3ra+S+S":4,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2021-11","pollster:id":"Kantar",middle_date:"2021-11-10",ANO:28,SPOLU:28,Pir\u00E1ti:null,SPD:9.5,STAN:null,SOCDEM:4,KS\u010CM:3.5,"jin\xE9 strany":3,P\u0159\u00EDsaha:3.5,Zelen\u00ED:null,PRO:null,"Pir\xE1ti+STAN":17,"Trikol\xF3ra+S+S":3.5,Trikol\u00F3ra:null,"Voln\xFD blok":null},{"poll:identifier":"2021-10","pollster:id":"volby",middle_date:"2021-10-09",ANO:27.1,SPOLU:27.8,Pir\u00E1ti:null,SPD:9.6,STAN:null,SOCDEM:4.7,KS\u010CM:3.6,"jin\xE9 strany":1.9,P\u0159\u00EDsaha:4.7,Zelen\u00ED:1,PRO:null,"Pir\xE1ti+STAN":15.6,"Trikol\xF3ra+S+S":2.8,Trikol\u00F3ra:null,"Voln\xFD blok":1.3}],jl=[{names:["ANO","SPOLU","Pir\xE1ti","SPD","STAN","SOCDEM","KS\u010CM","jin\xE9 strany","P\u0159\xEDsaha","Zelen\xED","PRO","Pir\xE1ti+STAN","Trikol\xF3ra+S+S","Trikol\xF3ra","Voln\xFD blok"]}];const $l={data:function(){return{polls:Ll,candidates:jl[0].names}},methods:{formatDate(n){return new Date(n).toLocaleDateString("cs")}}},Vl={class:"container"},Ul=l("h3",null,[O(" Zve\u0159ejn\u011Bn\xE9 pr\u016Fzkumy "),l("small",null,"Koalice")],-1),Rl={class:"table-responsive"},Zl={class:"table table-striped table-hover table-condensed"},gl=l("th",null,null,-1),xl=l("th",null,[O("Datum\xA0"),l("small",null,"(st\u0159ed)")],-1);function Il(n,u,r,P,d,p){const t=f;return e(),i("div",Vl,[Ul,l("div",Rl,[l("table",Zl,[l("thead",null,[l("tr",null,[gl,xl,(e(!0),i(c,null,_(n.candidates,(o,s)=>(e(),i("th",{key:s},[l("small",null,a(o),1)]))),128))])]),l("tbody",null,[(e(!0),i(c,null,_(n.polls,(o,s)=>(e(),i("tr",{key:s},[l("th",null,a(o["pollster:id"]),1),l("td",null,a(p.formatDate(o.middle_date)),1),(e(!0),i(c,null,_(n.candidates,(m,T)=>(e(),i("td",{key:T},[S(t,{decNumber:o[m]},null,8,["decNumber"])]))),128))]))),128))])])])])}var wl=D($l,[["render",Il]]);const zl="shares/2023-10-08T18:35:03.139170_psp.png";var Fl={filename:zl};const Bl=L({setup(n,{expose:u}){u();const r="https://mandaty.cz/",P="493242628099686";j({title:"Mand\xE1ty.cz",meta:[{hid:"og:name",property:"og:image",content:r+Fl.filename},{hid:"og:url",property:"og:url",content:r},{hid:"og:type",property:"og:type",content:"website"},{hid:"og:title",property:"og:title",content:"Mand\xE1ty.cz"},{hid:"og:description",property:"og:description",content:"V\xFDvoj volebn\xEDch model\u016F dle pr\u016Fzkum\u016F ve\u0159ejn\xE9ho m\xEDn\u011Bn\xED"},{hid:"fb:app_id",property:"fb:app_id",content:P}],link:[{rel:"icon",type:"image/x-icon",href:r+"favicon.svg"}]});const d={BASE_URL:r,FB_APP_ID:P};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}),Hl={class:"container"},Wl=l("h1",{class:"pt-4"},"Sn\u011Bmovna 2021-2025",-1),ql=l("hr",null,null,-1),Gl=l("hr",null,null,-1),Jl=l("hr",null,null,-1),Ql=l("hr",null,null,-1);function Xl(n,u,r,P,d,p){const t=K,o=ol,s=hl,m=Cl,T=wl;return e(),i("div",Hl,[S(t),Wl,ql,S(o),Gl,S(s),Jl,S(m),Ql,S(T)])}var en=D(Bl,[["render",Xl]]);export{en as default};
