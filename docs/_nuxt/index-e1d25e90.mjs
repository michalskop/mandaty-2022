import{_ as f}from"./ChartLinks-845b83ec.mjs";import{_ as s,o as a,c as e,a as l,t as o,F as _,r as h,e as r,f as M,p as V,g as P,h as D,i as S,b as t}from"./entry-e1cb3eee.mjs";var R=[{name:"Babi\u0161 Andrej",perc:34,perc_floor:34,perc_tens:0,family_name:"Babi\u0161",other_names:"Andrej"},{name:"Pavel Petr",perc:24.9,perc_floor:24,perc_tens:8,family_name:"Pavel",other_names:"Petr"},{name:"Nerudov\xE1 Danu\u0161e",perc:7.5,perc_floor:7,perc_tens:5,family_name:"Nerudov\xE1",other_names:"Danu\u0161e"},{name:"Fischer Pavel",perc:6.2,perc_floor:6,perc_tens:2,family_name:"Fischer",other_names:"Pavel"},{name:"St\u0159edula Josef",perc:5.8,perc_floor:5,perc_tens:7,family_name:"St\u0159edula",other_names:"Josef"},{name:"N\u011Bmcov\xE1 Miroslava",perc:3.4,perc_floor:3,perc_tens:3,family_name:"N\u011Bmcov\xE1",other_names:"Miroslava"},{name:"Vystr\u010Dil Milo\u0161",perc:3.4,perc_floor:3,perc_tens:3,family_name:"Vystr\u010Dil",other_names:"Milo\u0161"},{name:"Jane\u010Dek Karel",perc:2.2,perc_floor:2,perc_tens:2,family_name:"Jane\u010Dek",other_names:"Karel"},{name:"Vit\xE1skov\xE1 Alena",perc:2.2,perc_floor:2,perc_tens:2,family_name:"Vit\xE1skov\xE1",other_names:"Alena"},{name:"Zima Tom\xE1\u0161",perc:2.2,perc_floor:2,perc_tens:2,family_name:"Zima",other_names:"Tom\xE1\u0161"},{name:"Raku\u0161an V\xEDt",perc:2,perc_floor:2,perc_tens:0,family_name:"Raku\u0161an",other_names:"V\xEDt"},{name:"Hil\u0161er Marek",perc:1.9,perc_floor:1,perc_tens:9,family_name:"Hil\u0161er",other_names:"Marek"},{name:"Klaus V\xE1clav",perc:1.7,perc_floor:1,perc_tens:7,family_name:"Klaus",other_names:"V\xE1clav"},{name:"B\u0159ezina Tom\xE1\u0161",perc:1.4,perc_floor:1,perc_tens:3,family_name:"B\u0159ezina",other_names:"Tom\xE1\u0161"},{name:"Draho\u0161 Ji\u0159\xED",perc:1.4,perc_floor:1,perc_tens:3,family_name:"Draho\u0161",other_names:"Ji\u0159\xED"}],y=[{date:"2022-06-21"}];const A={data:function(){return{candidates:R,date:new Date(y[0].date).toLocaleDateString("cs")}}},B=r(" \u0160ance na v\xFDhru ve volb\xE1ch "),j=r("dle s\xE1zkov\xFDch kancel\xE1\u0159\xED "),F={class:"fs-5 fw-bolder"},T={class:"container"},w={class:"row"},N={class:"card text-center mb-2"},$={class:"card-header card-title"},H={class:"card-body"},z={class:"number fs-2"},g={key:0},L=r(" %");function O(n,d,c,v,m,k){return a(),e("div",null,[l("h3",null,[B,l("small",null,[j,l("span",F,o(n.date),1)])]),l("div",T,[l("div",w,[(a(!0),e(_,null,h(n.candidates,(u,i)=>(a(),e("div",{key:i,class:"col-xl-3 col-lg-4 col-sm-6"},[l("div",N,[l("h4",$,[r(o(u.family_name)+" ",1),l("small",null,o(u.other_names),1)]),l("div",H,[l("div",z,[r(o(u.perc_floor),1),u.perc_floor<5?(a(),e("small",g,"."+o(u.perc_tens),1)):M("",!0),L])])])]))),128))])])])}var U=s(A,[["render",O]]);const E={},I=l("a",{href:"https://www.tipsport.cz/kurzy?&matchId=2878450&pid=10661&sid=29099&tid=2161&bid=8836",target:"_blank"},"Vsadit si na v\xFDsledek voleb",-1),Z=[I];function x(n,d){return a(),e("div",null,Z)}var C=s(E,[["render",x]]);const q={},b=n=>(V("data-v-9e1f0398"),n=n(),P(),n),Q={id:"image-wrapper"},X=b(()=>l("h3",null,[r(" V\xFDvoj \u0161ance na v\xFDhru ve volb\xE1ch "),l("small",null,"dle s\xE1zkov\xFDch kancel\xE1\u0159\xED ")],-1)),G=b(()=>l("img",{src:D,class:"image"},null,-1)),W=b(()=>l("img",{src:S,class:"image-small"},null,-1)),Y=[X,G,W];function ll(n,d){return a(),e("div",Q,Y)}var nl=s(q,[["render",ll],["__scopeId","data-v-9e1f0398"]]);const al={props:["decNumber"],data:function(){return{floor:" ",decimal:0,hasDecimal:!1}},mounted(){this.decNumber&&this.decNumber!=""&&(this.floor=Math.floor(this.decNumber)),this.decimal=Math.round(10*(this.decNumber-this.floor)),this.decimal>0&&(this.hasDecimal=!0)}},el={key:0};function ol(n,d,c,v,m,k){return a(),e("span",null,[r(o(n.floor),1),n.hasDecimal?(a(),e("small",el,"."+o(n.decimal),1)):M("",!0)])}var ul=s(al,[["render",ol]]),rl=[{identifier:"2022-05","pollster:id":"Median",link:"https://www.median.eu/cs/wp-content/uploads/2022/06/Volby_prezident_2022_05_v04IC.pdf",start_date:"2022-05-01",end_date:"2022-06-04",published_date:"2022-06-03",n:1008,sponsor:null,middle_date:"2022-05-18","Unnamed: 9":null,model_n:null,"Unnamed: 11":null,note:null,"Andrej Babi\u0161":28.5,"Petr Pavel":19.5,"jin\xE1 osoba":10,"Josef St\u0159edula":7.5,"Pavel Fisher":6.5,"Miroslava N\u011Bmcov\xE1":6,"Marek Hil\u0161er":5,"Karel Jane\u010Dek":4,"Danu\u0161e Nerudov\xE1":3.5,"V\xE1clav Klaus st.":3,"Lenka Brad\xE1\u010Dov\xE1":2.5,"Vladim\xEDr Dlouh\xFD":2,"Alena Vit\xE1skov\xE1":2,"Michael Koc\xE1b":null,"Jarom\xEDr Soukup":null,"Ji\u0159\xED Rusnok":null,"V\xEDt Raku\u0161an":null,"Dana Dr\xE1bov\xE1":null,"Denisa Rohanov\xE1":null,"Ivan Barto\u0161":null,"Jakub Olbert":null,"Jan Ham\xE1\u010Dek":null,"Jan \u0160vejnar":null,"Ji\u0159\xED Draho\u0161":null,"Ji\u0159\xED Paroubek":null,"Josef Sk\xE1la":null,"Karel Divi\u0161":null,"Karel Havl\xED\u010Dek":null,"Kate\u0159ina \u0160im\xE1\u010Dkov\xE1":null,"Kl\xE1ra Long Sl\xE1mov\xE1":null,"Marek Eben":null,"Marian Jure\u010Dka":null,"Mark\xE9ta Pekarov\xE1 Adamov\xE1":null,"Martin Stropnick\xFD":null,"Milo\u0161 Knor":null,"Milo\u0161 Vystr\u010Dil":null,"Miroslav Kalousek":null,"Pavel Rychetsk\xFD":null,"Petr Fiala":null,"Robert \u0160lachta":null,"Tomio Okamura":null,"Tom\xE1\u0161 Sedl\xE1\u010Dek":null,"Tom\xE1\u0161 Zima":null,"Vladim\xEDr Bo\u0161t\xEDk":null,"Vojt\u011Bch Filip":null,"V\xE1clav Klaus ml.":null,nev\u00EDm:null,"\u0160imon P\xE1nek":null},{identifier:"2022-03","pollster:id":"Median",link:"https://www.median.eu/cs/wp-content/uploads/2022/04/Volby_prezident_2022_03_v04IC.pdf",start_date:"2022-03-01",end_date:"2022-04-04",published_date:"2022-04-11",n:1093,sponsor:null,middle_date:"2022-03-18","Unnamed: 9":null,model_n:null,"Unnamed: 11":null,note:null,"Andrej Babi\u0161":25,"Petr Pavel":20,"jin\xE1 osoba":13.5,"Josef St\u0159edula":5,"Pavel Fisher":7.5,"Miroslava N\u011Bmcov\xE1":3.5,"Marek Hil\u0161er":4,"Karel Jane\u010Dek":5,"Danu\u0161e Nerudov\xE1":5,"V\xE1clav Klaus st.":3,"Lenka Brad\xE1\u010Dov\xE1":null,"Vladim\xEDr Dlouh\xFD":2.5,"Alena Vit\xE1skov\xE1":null,"Michael Koc\xE1b":1,"Jarom\xEDr Soukup":.5,"Ji\u0159\xED Rusnok":null,"V\xEDt Raku\u0161an":null,"Dana Dr\xE1bov\xE1":null,"Denisa Rohanov\xE1":null,"Ivan Barto\u0161":null,"Jakub Olbert":null,"Jan Ham\xE1\u010Dek":null,"Jan \u0160vejnar":null,"Ji\u0159\xED Draho\u0161":null,"Ji\u0159\xED Paroubek":null,"Josef Sk\xE1la":null,"Karel Divi\u0161":null,"Karel Havl\xED\u010Dek":null,"Kate\u0159ina \u0160im\xE1\u010Dkov\xE1":null,"Kl\xE1ra Long Sl\xE1mov\xE1":null,"Marek Eben":null,"Marian Jure\u010Dka":null,"Mark\xE9ta Pekarov\xE1 Adamov\xE1":null,"Martin Stropnick\xFD":null,"Milo\u0161 Knor":null,"Milo\u0161 Vystr\u010Dil":null,"Miroslav Kalousek":null,"Pavel Rychetsk\xFD":null,"Petr Fiala":null,"Robert \u0160lachta":null,"Tomio Okamura":null,"Tom\xE1\u0161 Sedl\xE1\u010Dek":null,"Tom\xE1\u0161 Zima":null,"Vladim\xEDr Bo\u0161t\xEDk":null,"Vojt\u011Bch Filip":null,"V\xE1clav Klaus ml.":null,nev\u00EDm:null,"\u0160imon P\xE1nek":null},{identifier:"2022-02","pollster:id":"Median",link:"https://www.median.eu/cs/wp-content/uploads/2022/03/Volby_prezident_2022_02_v05MK.pdf",start_date:"2022-03-02",end_date:"2022-03-04",published_date:"2022-03-07",n:2036,sponsor:null,middle_date:"2022-03-03","Unnamed: 9":null,model_n:null,"Unnamed: 11":null,note:null,"Andrej Babi\u0161":26,"Petr Pavel":16,"jin\xE1 osoba":3,"Josef St\u0159edula":3.5,"Pavel Fisher":7,"Miroslava N\u011Bmcov\xE1":8,"Marek Hil\u0161er":5,"Karel Jane\u010Dek":5,"Danu\u0161e Nerudov\xE1":5.5,"V\xE1clav Klaus st.":4.5,"Lenka Brad\xE1\u010Dov\xE1":null,"Vladim\xEDr Dlouh\xFD":3,"Alena Vit\xE1skov\xE1":3.5,"Michael Koc\xE1b":2,"Jarom\xEDr Soukup":1,"Ji\u0159\xED Rusnok":3.5,"V\xEDt Raku\u0161an":3.5,"Dana Dr\xE1bov\xE1":null,"Denisa Rohanov\xE1":null,"Ivan Barto\u0161":null,"Jakub Olbert":null,"Jan Ham\xE1\u010Dek":null,"Jan \u0160vejnar":null,"Ji\u0159\xED Draho\u0161":null,"Ji\u0159\xED Paroubek":null,"Josef Sk\xE1la":null,"Karel Divi\u0161":null,"Karel Havl\xED\u010Dek":null,"Kate\u0159ina \u0160im\xE1\u010Dkov\xE1":null,"Kl\xE1ra Long Sl\xE1mov\xE1":null,"Marek Eben":null,"Marian Jure\u010Dka":null,"Mark\xE9ta Pekarov\xE1 Adamov\xE1":null,"Martin Stropnick\xFD":null,"Milo\u0161 Knor":null,"Milo\u0161 Vystr\u010Dil":null,"Miroslav Kalousek":null,"Pavel Rychetsk\xFD":null,"Petr Fiala":null,"Robert \u0160lachta":null,"Tomio Okamura":null,"Tom\xE1\u0161 Sedl\xE1\u010Dek":null,"Tom\xE1\u0161 Zima":null,"Vladim\xEDr Bo\u0161t\xEDk":null,"Vojt\u011Bch Filip":null,"V\xE1clav Klaus ml.":null,nev\u00EDm:null,"\u0160imon P\xE1nek":null},{identifier:"2022-02","pollster:id":"STEM/MARK",link:"https://www.stemmark.cz/prezidentem-muze-byt-zena-relevantnim-kandidatkam-vzrostla-mira-volitelnosti/",start_date:"2022-02-17",end_date:"2022-02-22",published_date:"2022-03-23",n:1e3,sponsor:null,middle_date:"2022-02-20","Unnamed: 9":null,model_n:null,"Unnamed: 11":null,note:null,"Andrej Babi\u0161":17.43,"Petr Pavel":12.6,"jin\xE1 osoba":null,"Josef St\u0159edula":2.79,"Pavel Fisher":10.43,"Miroslava N\u011Bmcov\xE1":11.27,"Marek Hil\u0161er":9.35,"Karel Jane\u010Dek":3,"Danu\u0161e Nerudov\xE1":6.55,"V\xE1clav Klaus st.":5.71,"Lenka Brad\xE1\u010Dov\xE1":7.08,"Vladim\xEDr Dlouh\xFD":4.6,"Alena Vit\xE1skov\xE1":3.52,"Michael Koc\xE1b":4.02,"Jarom\xEDr Soukup":1.41,"Ji\u0159\xED Rusnok":null,"V\xEDt Raku\u0161an":null,"Dana Dr\xE1bov\xE1":8.95,"Denisa Rohanov\xE1":1.26,"Ivan Barto\u0161":null,"Jakub Olbert":1.13,"Jan Ham\xE1\u010Dek":null,"Jan \u0160vejnar":6.85,"Ji\u0159\xED Draho\u0161":9.39,"Ji\u0159\xED Paroubek":1.24,"Josef Sk\xE1la":.8,"Karel Divi\u0161":.48,"Karel Havl\xED\u010Dek":3.34,"Kate\u0159ina \u0160im\xE1\u010Dkov\xE1":null,"Kl\xE1ra Long Sl\xE1mov\xE1":2.9,"Marek Eben":14,"Marian Jure\u010Dka":null,"Mark\xE9ta Pekarov\xE1 Adamov\xE1":null,"Martin Stropnick\xFD":3.79,"Milo\u0161 Knor":2.13,"Milo\u0161 Vystr\u010Dil":9.51,"Miroslav Kalousek":null,"Pavel Rychetsk\xFD":null,"Petr Fiala":null,"Robert \u0160lachta":3.3,"Tomio Okamura":8.33,"Tom\xE1\u0161 Sedl\xE1\u010Dek":null,"Tom\xE1\u0161 Zima":null,"Vladim\xEDr Bo\u0161t\xEDk":.72,"Vojt\u011Bch Filip":null,"V\xE1clav Klaus ml.":null,nev\u00EDm:null,"\u0160imon P\xE1nek":null},{identifier:"2022-01","pollster:id":"Kantar",link:"https://www.forum24.cz/oligarcha-vs-general-tydenik-forum-prinasi-prezidentsky-pruzkum-rok-pred-volbami/",start_date:"2022-01-17",end_date:"2022-01-19",published_date:null,n:800,sponsor:"Forum 24",middle_date:"2022-01-18","Unnamed: 9":null,model_n:null,"Unnamed: 11":null,note:null,"Andrej Babi\u0161":26,"Petr Pavel":15,"jin\xE1 osoba":20,"Josef St\u0159edula":null,"Pavel Fisher":5,"Miroslava N\u011Bmcov\xE1":4,"Marek Hil\u0161er":5,"Karel Jane\u010Dek":null,"Danu\u0161e Nerudov\xE1":5,"V\xE1clav Klaus st.":null,"Lenka Brad\xE1\u010Dov\xE1":null,"Vladim\xEDr Dlouh\xFD":null,"Alena Vit\xE1skov\xE1":null,"Michael Koc\xE1b":null,"Jarom\xEDr Soukup":null,"Ji\u0159\xED Rusnok":null,"V\xEDt Raku\u0161an":null,"Dana Dr\xE1bov\xE1":null,"Denisa Rohanov\xE1":null,"Ivan Barto\u0161":null,"Jakub Olbert":null,"Jan Ham\xE1\u010Dek":null,"Jan \u0160vejnar":null,"Ji\u0159\xED Draho\u0161":8,"Ji\u0159\xED Paroubek":null,"Josef Sk\xE1la":null,"Karel Divi\u0161":null,"Karel Havl\xED\u010Dek":null,"Kate\u0159ina \u0160im\xE1\u010Dkov\xE1":null,"Kl\xE1ra Long Sl\xE1mov\xE1":null,"Marek Eben":null,"Marian Jure\u010Dka":null,"Mark\xE9ta Pekarov\xE1 Adamov\xE1":null,"Martin Stropnick\xFD":null,"Milo\u0161 Knor":null,"Milo\u0161 Vystr\u010Dil":3,"Miroslav Kalousek":null,"Pavel Rychetsk\xFD":null,"Petr Fiala":null,"Robert \u0160lachta":null,"Tomio Okamura":9,"Tom\xE1\u0161 Sedl\xE1\u010Dek":null,"Tom\xE1\u0161 Zima":null,"Vladim\xEDr Bo\u0161t\xEDk":null,"Vojt\u011Bch Filip":null,"V\xE1clav Klaus ml.":null,nev\u00EDm:null,"\u0160imon P\xE1nek":null},{identifier:"2021-12","pollster:id":"Ipsos",link:"https://denikn.cz/783683/pruzkum-spolu-babise-by-porazil-petr-pavel-koalice-hleda-dal/?ref=inc&cst=7d5f819de40657bc551af4ae51f03cf6a8bfddb5",start_date:null,end_date:null,published_date:null,n:null,sponsor:"Spolu",middle_date:"2021-12-24","Unnamed: 9":null,model_n:null,"Unnamed: 11":null,note:'"koncem roku"',"Andrej Babi\u0161":23.2,"Petr Pavel":12.5,"jin\xE1 osoba":3.7,"Josef St\u0159edula":2.5,"Pavel Fisher":6,"Miroslava N\u011Bmcov\xE1":6.8,"Marek Hil\u0161er":6.6,"Karel Jane\u010Dek":5.2,"Danu\u0161e Nerudov\xE1":2.3,"V\xE1clav Klaus st.":null,"Lenka Brad\xE1\u010Dov\xE1":4.9,"Vladim\xEDr Dlouh\xFD":2.5,"Alena Vit\xE1skov\xE1":null,"Michael Koc\xE1b":null,"Jarom\xEDr Soukup":null,"Ji\u0159\xED Rusnok":null,"V\xEDt Raku\u0161an":8.5,"Dana Dr\xE1bov\xE1":null,"Denisa Rohanov\xE1":null,"Ivan Barto\u0161":null,"Jakub Olbert":null,"Jan Ham\xE1\u010Dek":null,"Jan \u0160vejnar":null,"Ji\u0159\xED Draho\u0161":null,"Ji\u0159\xED Paroubek":null,"Josef Sk\xE1la":null,"Karel Divi\u0161":null,"Karel Havl\xED\u010Dek":null,"Kate\u0159ina \u0160im\xE1\u010Dkov\xE1":null,"Kl\xE1ra Long Sl\xE1mov\xE1":null,"Marek Eben":null,"Marian Jure\u010Dka":null,"Mark\xE9ta Pekarov\xE1 Adamov\xE1":null,"Martin Stropnick\xFD":null,"Milo\u0161 Knor":null,"Milo\u0161 Vystr\u010Dil":4.2,"Miroslav Kalousek":3,"Pavel Rychetsk\xFD":null,"Petr Fiala":null,"Robert \u0160lachta":null,"Tomio Okamura":7.1,"Tom\xE1\u0161 Sedl\xE1\u010Dek":null,"Tom\xE1\u0161 Zima":null,"Vladim\xEDr Bo\u0161t\xEDk":null,"Vojt\u011Bch Filip":null,"V\xE1clav Klaus ml.":null,nev\u00EDm:null,"\u0160imon P\xE1nek":.8},{identifier:"2021-11","pollster:id":"STEM+Median",link:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.idnes.cz%2Fzpravy%2Fdomaci%2Fprezident-volby-babis-pavel-rakusan-pruzkum-kandidatura.A211129_190737_domaci_albe&psig=AOvVaw23Jlg6eXX1nq7svCFdTxgX&ust=1639270151773000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMiJxqvD2vQCFQAAAAAdAAAAABAD",start_date:"2021-11-15",end_date:"2021-11-23",published_date:"2021-11-30",n:2482,sponsor:"MF DNES",middle_date:"2021-11-19","Unnamed: 9":null,model_n:null,"Unnamed: 11":null,note:null,"Andrej Babi\u0161":26.5,"Petr Pavel":15.5,"jin\xE1 osoba":3.5,"Josef St\u0159edula":2,"Pavel Fisher":6.5,"Miroslava N\u011Bmcov\xE1":7,"Marek Hil\u0161er":4.5,"Karel Jane\u010Dek":2,"Danu\u0161e Nerudov\xE1":3,"V\xE1clav Klaus st.":5,"Lenka Brad\xE1\u010Dov\xE1":null,"Vladim\xEDr Dlouh\xFD":2,"Alena Vit\xE1skov\xE1":null,"Michael Koc\xE1b":2,"Jarom\xEDr Soukup":1,"Ji\u0159\xED Rusnok":null,"V\xEDt Raku\u0161an":8.5,"Dana Dr\xE1bov\xE1":null,"Denisa Rohanov\xE1":null,"Ivan Barto\u0161":null,"Jakub Olbert":null,"Jan Ham\xE1\u010Dek":null,"Jan \u0160vejnar":null,"Ji\u0159\xED Draho\u0161":7.5,"Ji\u0159\xED Paroubek":null,"Josef Sk\xE1la":null,"Karel Divi\u0161":null,"Karel Havl\xED\u010Dek":null,"Kate\u0159ina \u0160im\xE1\u010Dkov\xE1":null,"Kl\xE1ra Long Sl\xE1mov\xE1":null,"Marek Eben":null,"Marian Jure\u010Dka":null,"Mark\xE9ta Pekarov\xE1 Adamov\xE1":null,"Martin Stropnick\xFD":null,"Milo\u0161 Knor":null,"Milo\u0161 Vystr\u010Dil":null,"Miroslav Kalousek":3.5,"Pavel Rychetsk\xFD":null,"Petr Fiala":null,"Robert \u0160lachta":null,"Tomio Okamura":null,"Tom\xE1\u0161 Sedl\xE1\u010Dek":null,"Tom\xE1\u0161 Zima":null,"Vladim\xEDr Bo\u0161t\xEDk":null,"Vojt\u011Bch Filip":null,"V\xE1clav Klaus ml.":null,nev\u00EDm:null,"\u0160imon P\xE1nek":null},{identifier:"2021-10","pollster:id":"STEM/MARK",link:"https://www.stemmark.cz/soucasne-udalosti-se-promitaji-do-pohledu-na-prezidentsky-urad/",start_date:null,end_date:null,published_date:"2021-11-03",n:1003,sponsor:null,middle_date:"2021-10-23","Unnamed: 9":null,model_n:null,"Unnamed: 11":null,note:null,"Andrej Babi\u0161":16,"Petr Pavel":12,"jin\xE1 osoba":null,"Josef St\u0159edula":null,"Pavel Fisher":9,"Miroslava N\u011Bmcov\xE1":10,"Marek Hil\u0161er":8,"Karel Jane\u010Dek":null,"Danu\u0161e Nerudov\xE1":null,"V\xE1clav Klaus st.":null,"Lenka Brad\xE1\u010Dov\xE1":null,"Vladim\xEDr Dlouh\xFD":null,"Alena Vit\xE1skov\xE1":null,"Michael Koc\xE1b":null,"Jarom\xEDr Soukup":null,"Ji\u0159\xED Rusnok":null,"V\xEDt Raku\u0161an":12,"Dana Dr\xE1bov\xE1":null,"Denisa Rohanov\xE1":null,"Ivan Barto\u0161":null,"Jakub Olbert":null,"Jan Ham\xE1\u010Dek":null,"Jan \u0160vejnar":null,"Ji\u0159\xED Draho\u0161":9,"Ji\u0159\xED Paroubek":null,"Josef Sk\xE1la":null,"Karel Divi\u0161":null,"Karel Havl\xED\u010Dek":null,"Kate\u0159ina \u0160im\xE1\u010Dkov\xE1":null,"Kl\xE1ra Long Sl\xE1mov\xE1":null,"Marek Eben":16,"Marian Jure\u010Dka":null,"Mark\xE9ta Pekarov\xE1 Adamov\xE1":null,"Martin Stropnick\xFD":null,"Milo\u0161 Knor":null,"Milo\u0161 Vystr\u010Dil":10,"Miroslav Kalousek":null,"Pavel Rychetsk\xFD":null,"Petr Fiala":8,"Robert \u0160lachta":null,"Tomio Okamura":null,"Tom\xE1\u0161 Sedl\xE1\u010Dek":null,"Tom\xE1\u0161 Zima":null,"Vladim\xEDr Bo\u0161t\xEDk":null,"Vojt\u011Bch Filip":null,"V\xE1clav Klaus ml.":null,nev\u00EDm:null,"\u0160imon P\xE1nek":null},{identifier:"2021-09","pollster:id":"Median",link:"https://www.seznamzpravy.cz/clanek/novy-prezident-ctvrtina-cechu-nevi-nejvic-se-zatim-libi-general-pavel-178134",start_date:"2021-09-25",end_date:"2021-09-30",published_date:"2021-10-19",n:null,sponsor:null,middle_date:"2021-09-28","Unnamed: 9":null,model_n:null,"Unnamed: 11":null,note:null,"Andrej Babi\u0161":8,"Petr Pavel":13,"jin\xE1 osoba":5,"Josef St\u0159edula":2,"Pavel Fisher":7,"Miroslava N\u011Bmcov\xE1":6,"Marek Hil\u0161er":6,"Karel Jane\u010Dek":null,"Danu\u0161e Nerudov\xE1":2,"V\xE1clav Klaus st.":7,"Lenka Brad\xE1\u010Dov\xE1":5,"Vladim\xEDr Dlouh\xFD":null,"Alena Vit\xE1skov\xE1":null,"Michael Koc\xE1b":5,"Jarom\xEDr Soukup":null,"Ji\u0159\xED Rusnok":null,"V\xEDt Raku\u0161an":null,"Dana Dr\xE1bov\xE1":null,"Denisa Rohanov\xE1":null,"Ivan Barto\u0161":null,"Jakub Olbert":null,"Jan Ham\xE1\u010Dek":null,"Jan \u0160vejnar":null,"Ji\u0159\xED Draho\u0161":7,"Ji\u0159\xED Paroubek":null,"Josef Sk\xE1la":null,"Karel Divi\u0161":null,"Karel Havl\xED\u010Dek":null,"Kate\u0159ina \u0160im\xE1\u010Dkov\xE1":1,"Kl\xE1ra Long Sl\xE1mov\xE1":null,"Marek Eben":null,"Marian Jure\u010Dka":null,"Mark\xE9ta Pekarov\xE1 Adamov\xE1":null,"Martin Stropnick\xFD":null,"Milo\u0161 Knor":null,"Milo\u0161 Vystr\u010Dil":null,"Miroslav Kalousek":null,"Pavel Rychetsk\xFD":null,"Petr Fiala":null,"Robert \u0160lachta":null,"Tomio Okamura":null,"Tom\xE1\u0161 Sedl\xE1\u010Dek":2,"Tom\xE1\u0161 Zima":1,"Vladim\xEDr Bo\u0161t\xEDk":null,"Vojt\u011Bch Filip":null,"V\xE1clav Klaus ml.":null,nev\u00EDm:25,"\u0160imon P\xE1nek":null},{identifier:"2021-04","pollster:id":"STEM/MARK",link:"https://www.stemmark.cz/ctvrtina-lidi-veri-ze-andrej-babis-bude-kandidovat-na-prezidenta/",start_date:null,end_date:null,published_date:null,n:802,sponsor:null,middle_date:"2021-04-01","Unnamed: 9":null,model_n:null,"Unnamed: 11":null,note:null,"Andrej Babi\u0161":6,"Petr Pavel":10,"jin\xE1 osoba":null,"Josef St\u0159edula":null,"Pavel Fisher":8,"Miroslava N\u011Bmcov\xE1":12,"Marek Hil\u0161er":9,"Karel Jane\u010Dek":null,"Danu\u0161e Nerudov\xE1":null,"V\xE1clav Klaus st.":null,"Lenka Brad\xE1\u010Dov\xE1":7,"Vladim\xEDr Dlouh\xFD":null,"Alena Vit\xE1skov\xE1":null,"Michael Koc\xE1b":null,"Jarom\xEDr Soukup":null,"Ji\u0159\xED Rusnok":null,"V\xEDt Raku\u0161an":6,"Dana Dr\xE1bov\xE1":8,"Denisa Rohanov\xE1":null,"Ivan Barto\u0161":5,"Jakub Olbert":null,"Jan Ham\xE1\u010Dek":2,"Jan \u0160vejnar":null,"Ji\u0159\xED Draho\u0161":9,"Ji\u0159\xED Paroubek":null,"Josef Sk\xE1la":null,"Karel Divi\u0161":null,"Karel Havl\xED\u010Dek":null,"Kate\u0159ina \u0160im\xE1\u010Dkov\xE1":null,"Kl\xE1ra Long Sl\xE1mov\xE1":null,"Marek Eben":16,"Marian Jure\u010Dka":1,"Mark\xE9ta Pekarov\xE1 Adamov\xE1":4,"Martin Stropnick\xFD":null,"Milo\u0161 Knor":null,"Milo\u0161 Vystr\u010Dil":6,"Miroslav Kalousek":null,"Pavel Rychetsk\xFD":7,"Petr Fiala":3,"Robert \u0160lachta":null,"Tomio Okamura":6,"Tom\xE1\u0161 Sedl\xE1\u010Dek":null,"Tom\xE1\u0161 Zima":null,"Vladim\xEDr Bo\u0161t\xEDk":null,"Vojt\u011Bch Filip":2,"V\xE1clav Klaus ml.":null,nev\u00EDm:null,"\u0160imon P\xE1nek":null},{identifier:"2020-10","pollster:id":"STEM/MARK",link:"https://www.stemmark.cz/2020/10/",start_date:"2020-10-16",end_date:"2020-10-18",published_date:null,n:1416,sponsor:null,middle_date:"2020-10-17","Unnamed: 9":null,model_n:null,"Unnamed: 11":null,note:null,"Andrej Babi\u0161":9,"Petr Pavel":11,"jin\xE1 osoba":null,"Josef St\u0159edula":null,"Pavel Fisher":10,"Miroslava N\u011Bmcov\xE1":9,"Marek Hil\u0161er":8,"Karel Jane\u010Dek":null,"Danu\u0161e Nerudov\xE1":null,"V\xE1clav Klaus st.":null,"Lenka Brad\xE1\u010Dov\xE1":null,"Vladim\xEDr Dlouh\xFD":null,"Alena Vit\xE1skov\xE1":null,"Michael Koc\xE1b":null,"Jarom\xEDr Soukup":null,"Ji\u0159\xED Rusnok":null,"V\xEDt Raku\u0161an":null,"Dana Dr\xE1bov\xE1":5,"Denisa Rohanov\xE1":null,"Ivan Barto\u0161":null,"Jakub Olbert":null,"Jan Ham\xE1\u010Dek":null,"Jan \u0160vejnar":null,"Ji\u0159\xED Draho\u0161":10,"Ji\u0159\xED Paroubek":null,"Josef Sk\xE1la":null,"Karel Divi\u0161":null,"Karel Havl\xED\u010Dek":null,"Kate\u0159ina \u0160im\xE1\u010Dkov\xE1":null,"Kl\xE1ra Long Sl\xE1mov\xE1":null,"Marek Eben":11,"Marian Jure\u010Dka":null,"Mark\xE9ta Pekarov\xE1 Adamov\xE1":null,"Martin Stropnick\xFD":null,"Milo\u0161 Knor":null,"Milo\u0161 Vystr\u010Dil":7,"Miroslav Kalousek":null,"Pavel Rychetsk\xFD":null,"Petr Fiala":null,"Robert \u0160lachta":null,"Tomio Okamura":6,"Tom\xE1\u0161 Sedl\xE1\u010Dek":null,"Tom\xE1\u0161 Zima":null,"Vladim\xEDr Bo\u0161t\xEDk":null,"Vojt\u011Bch Filip":null,"V\xE1clav Klaus ml.":null,nev\u00EDm:null,"\u0160imon P\xE1nek":null},{identifier:"2020-03","pollster:id":"STEM/MARK",link:"https://www.stemmark.cz/cesi-budouci-kandidati-na-prezidenta-kde-jste-ukazte-se/",start_date:null,end_date:null,published_date:null,n:830,sponsor:null,middle_date:"2020-03-15","Unnamed: 9":null,model_n:null,"Unnamed: 11":null,note:null,"Andrej Babi\u0161":15,"Petr Pavel":12,"jin\xE1 osoba":null,"Josef St\u0159edula":null,"Pavel Fisher":13,"Miroslava N\u011Bmcov\xE1":8,"Marek Hil\u0161er":11,"Karel Jane\u010Dek":null,"Danu\u0161e Nerudov\xE1":null,"V\xE1clav Klaus st.":null,"Lenka Brad\xE1\u010Dov\xE1":8,"Vladim\xEDr Dlouh\xFD":null,"Alena Vit\xE1skov\xE1":null,"Michael Koc\xE1b":null,"Jarom\xEDr Soukup":null,"Ji\u0159\xED Rusnok":null,"V\xEDt Raku\u0161an":null,"Dana Dr\xE1bov\xE1":null,"Denisa Rohanov\xE1":null,"Ivan Barto\u0161":null,"Jakub Olbert":null,"Jan Ham\xE1\u010Dek":null,"Jan \u0160vejnar":null,"Ji\u0159\xED Draho\u0161":11,"Ji\u0159\xED Paroubek":null,"Josef Sk\xE1la":null,"Karel Divi\u0161":null,"Karel Havl\xED\u010Dek":null,"Kate\u0159ina \u0160im\xE1\u010Dkov\xE1":null,"Kl\xE1ra Long Sl\xE1mov\xE1":null,"Marek Eben":14,"Marian Jure\u010Dka":null,"Mark\xE9ta Pekarov\xE1 Adamov\xE1":null,"Martin Stropnick\xFD":null,"Milo\u0161 Knor":null,"Milo\u0161 Vystr\u010Dil":null,"Miroslav Kalousek":null,"Pavel Rychetsk\xFD":9,"Petr Fiala":null,"Robert \u0160lachta":null,"Tomio Okamura":null,"Tom\xE1\u0161 Sedl\xE1\u010Dek":null,"Tom\xE1\u0161 Zima":null,"Vladim\xEDr Bo\u0161t\xEDk":null,"Vojt\u011Bch Filip":null,"V\xE1clav Klaus ml.":7,nev\u00EDm:null,"\u0160imon P\xE1nek":null}],il=[{names:["Andrej Babi\u0161","Petr Pavel","Josef St\u0159edula","Pavel Fisher","Miroslava N\u011Bmcov\xE1","Marek Hil\u0161er","Karel Jane\u010Dek","Danu\u0161e Nerudov\xE1","V\xE1clav Klaus st.","Lenka Brad\xE1\u010Dov\xE1","Vladim\xEDr Dlouh\xFD","Alena Vit\xE1skov\xE1","Michael Koc\xE1b","Jarom\xEDr Soukup","Ji\u0159\xED Rusnok","V\xEDt Raku\u0161an","Dana Dr\xE1bov\xE1","Denisa Rohanov\xE1","Ivan Barto\u0161","Jakub Olbert","Jan Ham\xE1\u010Dek","Jan \u0160vejnar","Ji\u0159\xED Draho\u0161","Ji\u0159\xED Paroubek","Josef Sk\xE1la","Karel Divi\u0161","Karel Havl\xED\u010Dek","Kate\u0159ina \u0160im\xE1\u010Dkov\xE1","Kl\xE1ra Long Sl\xE1mov\xE1","Marek Eben","Marian Jure\u010Dka","Mark\xE9ta Pekarov\xE1 Adamov\xE1","Martin Stropnick\xFD","Milo\u0161 Knor","Milo\u0161 Vystr\u010Dil","Miroslav Kalousek","Pavel Rychetsk\xFD","Petr Fiala","Robert \u0160lachta","Tomio Okamura","Tom\xE1\u0161 Sedl\xE1\u010Dek","Tom\xE1\u0161 Zima","Vladim\xEDr Bo\u0161t\xEDk","Vojt\u011Bch Filip","V\xE1clav Klaus ml.","\u0160imon P\xE1nek"]}];const tl={data:function(){return{polls:rl,candidates:il[0].names}},methods:{formatDate(n){return new Date(n).toLocaleDateString("cs")}}},sl={class:"container"},dl=l("h3",null,[r(" Zve\u0159ejn\u011Bn\xE9 pr\u016Fzkumy "),l("small",null,"1. kolo")],-1),ml={class:"table-responsive"},kl={class:"table table-striped table-hover table-condensed"},cl=l("th",null,null,-1),vl=l("th",null,[r("Datum\xA0"),l("small",null,"(st\u0159ed)")],-1);function _l(n,d,c,v,m,k){const u=ul;return a(),e("div",sl,[dl,l("div",ml,[l("table",kl,[l("thead",null,[l("tr",null,[cl,vl,(a(!0),e(_,null,h(n.candidates,(i,p)=>(a(),e("th",{key:p},[l("small",null,o(i),1)]))),128))])]),l("tbody",null,[(a(!0),e(_,null,h(n.polls,(i,p)=>(a(),e("tr",{key:p},[l("th",null,o(i["pollster:id"]),1),l("td",null,o(k.formatDate(i.middle_date)),1),(a(!0),e(_,null,h(n.candidates,(J,K)=>(a(),e("td",{key:K},[t(u,{decNumber:i[J]},null,8,["decNumber"])]))),128))]))),128))])])])])}var hl=s(tl,[["render",_l]]);const pl={},bl={class:"container"},Ml=l("h1",{class:"pt-4"},"Prezidentsk\xE9 volby 2023",-1),Jl=l("hr",null,null,-1),Kl=l("hr",null,null,-1),fl=l("hr",null,null,-1);function Vl(n,d){const c=f,v=U,m=C,k=nl,u=hl;return a(),e("div",bl,[t(c),Ml,Jl,t(v),t(m),Kl,t(k),t(m),fl,t(u)])}var Sl=s(pl,[["render",Vl]]);export{Sl as default};
