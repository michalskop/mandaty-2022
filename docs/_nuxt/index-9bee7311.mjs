import{_ as s,o as a,c as e,a as l,t as u,F as v,r as k,d as t,f as J,p as f,g as V,h as P,i as D,b as i}from"./entry-7e1e2324.mjs";var S=[{name:"Pavel Petr",perc:31.6,perc_floor:31,perc_tens:6,family_name:"Pavel",other_names:"Petr"},{name:"Babi\u0161 Andrej",perc:25.6,perc_floor:25,perc_tens:6,family_name:"Babi\u0161",other_names:"Andrej"},{name:"Fischer Pavel",perc:7.3,perc_floor:7,perc_tens:2,family_name:"Fischer",other_names:"Pavel"},{name:"St\u0159edula Josef",perc:7.3,perc_floor:7,perc_tens:2,family_name:"St\u0159edula",other_names:"Josef"},{name:"Nerudov\xE1 Danu\u0161e",perc:5.4,perc_floor:5,perc_tens:4,family_name:"Nerudov\xE1",other_names:"Danu\u0161e"},{name:"N\u011Bmcov\xE1 Miroslava",perc:3.7,perc_floor:3,perc_tens:7,family_name:"N\u011Bmcov\xE1",other_names:"Miroslava"},{name:"Vystr\u010Dil Milo\u0161",perc:3.7,perc_floor:3,perc_tens:7,family_name:"Vystr\u010Dil",other_names:"Milo\u0161"},{name:"Vit\xE1skov\xE1 Alena",perc:3.2,perc_floor:3,perc_tens:2,family_name:"Vit\xE1skov\xE1",other_names:"Alena"},{name:"Jane\u010Dek Karel",perc:3.1,perc_floor:3,perc_tens:1,family_name:"Jane\u010Dek",other_names:"Karel"},{name:"Raku\u0161an V\xEDt",perc:2.2,perc_floor:2,perc_tens:2,family_name:"Raku\u0161an",other_names:"V\xEDt"},{name:"Hil\u0161er Marek",perc:2,perc_floor:2,perc_tens:0,family_name:"Hil\u0161er",other_names:"Marek"},{name:"Klaus V\xE1clav",perc:1.8,perc_floor:1,perc_tens:8,family_name:"Klaus",other_names:"V\xE1clav"},{name:"B\u0159ezina Tom\xE1\u0161",perc:1.6,perc_floor:1,perc_tens:6,family_name:"B\u0159ezina",other_names:"Tom\xE1\u0161"},{name:"Draho\u0161 Ji\u0159\xED",perc:1.5,perc_floor:1,perc_tens:5,family_name:"Draho\u0161",other_names:"Ji\u0159\xED"}],y=[{date:"2022-05-18"}];const R={data:function(){return{candidates:S,date:new Date(y[0].date).toLocaleDateString("cs")}}},j=t(" \u0160ance na v\xFDhru ve volb\xE1ch "),A=t("dle s\xE1zkov\xFDch kancel\xE1\u0159\xED "),B={class:"fs-5 fw-bolder"},N={class:"container"},z={class:"row"},F={class:"card text-center mb-2"},T={class:"card-header card-title"},$={class:"card-body"},g={class:"number fs-2"},w={key:0},H=t(" %");function L(n,d,_,p,h,c){return a(),e("div",null,[l("h3",null,[j,l("small",null,[A,l("span",B,u(n.date),1)])]),l("div",N,[l("div",z,[(a(!0),e(v,null,k(n.candidates,(r,o)=>(a(),e("div",{key:o,class:"col-xl-3 col-lg-4 col-sm-6"},[l("div",F,[l("h4",T,[t(u(r.family_name)+" ",1),l("small",null,u(r.other_names),1)]),l("div",$,[l("div",g,[t(u(r.perc_floor),1),r.perc_floor<5?(a(),e("small",w,"."+u(r.perc_tens),1)):J("",!0),H])])])]))),128))])])])}var O=s(R,[["render",L]]);const U={},E=l("a",{href:"https://www.tipsport.cz/kurzy?&matchId=2878450&pid=10661&sid=29099&tid=2161&bid=8836",target:"_blank"},"Vsadit si na v\xFDsledek voleb",-1),I=[E];function x(n,d){return a(),e("div",null,I)}var Z=s(U,[["render",x]]);const C={},M=n=>(f("data-v-9e1f0398"),n=n(),V(),n),q={id:"image-wrapper"},Q=M(()=>l("h3",null,[t(" V\xFDvoj \u0161ance na v\xFDhru ve volb\xE1ch "),l("small",null,"dle s\xE1zkov\xFDch kancel\xE1\u0159\xED ")],-1)),X=M(()=>l("img",{src:P,class:"image"},null,-1)),G=M(()=>l("img",{src:D,class:"image-small"},null,-1)),W=[Q,X,G];function Y(n,d){return a(),e("div",q,W)}var ll=s(C,[["render",Y],["__scopeId","data-v-9e1f0398"]]);const nl={props:["decNumber"],data:function(){return{floor:" ",decimal:0,hasDecimal:!1}},mounted(){this.decNumber&&this.decNumber!=""&&(this.floor=Math.floor(this.decNumber)),this.decimal=Math.round(10*(this.decNumber-this.floor)),this.decimal>0&&(this.hasDecimal=!0)}},al={key:0};function el(n,d,_,p,h,c){return a(),e("span",null,[t(u(n.floor),1),n.hasDecimal?(a(),e("small",al,"."+u(n.decimal),1)):J("",!0)])}var ol=s(nl,[["render",el]]),ul=[{identifier:"2022-03","pollster:id":"Median",link:"https://www.median.eu/cs/wp-content/uploads/2022/04/Volby_prezident_2022_03_v04IC.pdf",start_date:"2022-03-01",end_date:"2022-04-04",published_date:"2022-04-11",n:1093,sponsor:null,middle_date:"2022-03-18","Unnamed: 9":null,model_n:null,"Unnamed: 11":null,note:null,"Andrej Babi\u0161":25,"Petr Pavel":20,"jin\xE1 osoba":13.5,"Pavel Fisher":7.5,"Danu\u0161e Nerudov\xE1":5,"Karel Jane\u010Dek":5,"Josef St\u0159edula":5,"Marek Hil\u0161er":4,"Miroslava N\u011Bmcov\xE1":3.5,"V\xE1clav Klaus st.":3,"Vladim\xEDr Dlouh\xFD":2.5,"Michael Koc\xE1b":1,"Jarom\xEDr Soukup":.5,"Alena Vit\xE1skov\xE1":null,"Ji\u0159\xED Rusnok":null,"V\xEDt Raku\u0161an":null,"Marek Eben":null,"Milo\u0161 Vystr\u010Dil":null,"Ji\u0159\xED Draho\u0161":null,"Dana Dr\xE1bov\xE1":null,"Tomio Okamura":null,"Lenka Brad\xE1\u010Dov\xE1":null,"Jan \u0160vejnar":null,"Martin Stropnick\xFD":null,"Karel Havl\xED\u010Dek":null,"Robert \u0160lachta":null,"Kl\xE1ra Long Sl\xE1mov\xE1":null,"Milo\u0161 Knor":null,"Denisa Rohanov\xE1":null,"Ji\u0159\xED Paroubek":null,"Jakub Olbert":null,"Josef Sk\xE1la":null,"Vladim\xEDr Bo\u0161t\xEDk":null,"Karel Divi\u0161":null,"Ivan Barto\u0161":null,"Jan Ham\xE1\u010Dek":null,"Kate\u0159ina \u0160im\xE1\u010Dkov\xE1":null,"Marian Jure\u010Dka":null,"Mark\xE9ta Pekarov\xE1 Adamov\xE1":null,"Milu\u0161e Nerudov\xE1":null,"Miroslav Kalousek":null,"Pavel Rychetsk\xFD":null,"Petr Fiala":null,"Tom\xE1\u0161 Sedl\xE1\u010Dek":null,"Tom\xE1\u0161 Zima":null,"Vojt\u011Bch Filip":null,"V\xE1clav Klaus ml.":null,nev\u00EDm:null,"\u0160imon P\xE1nek":null},{identifier:"2022-02","pollster:id":"Median",link:"https://www.median.eu/cs/wp-content/uploads/2022/03/Volby_prezident_2022_02_v05MK.pdf",start_date:"2022-03-02",end_date:"2022-03-04",published_date:"2022-03-07",n:2036,sponsor:null,middle_date:"2022-03-03","Unnamed: 9":null,model_n:null,"Unnamed: 11":null,note:null,"Andrej Babi\u0161":26,"Petr Pavel":16,"jin\xE1 osoba":3,"Pavel Fisher":7,"Danu\u0161e Nerudov\xE1":5.5,"Karel Jane\u010Dek":5,"Josef St\u0159edula":3.5,"Marek Hil\u0161er":5,"Miroslava N\u011Bmcov\xE1":8,"V\xE1clav Klaus st.":4.5,"Vladim\xEDr Dlouh\xFD":3,"Michael Koc\xE1b":2,"Jarom\xEDr Soukup":1,"Alena Vit\xE1skov\xE1":3.5,"Ji\u0159\xED Rusnok":3.5,"V\xEDt Raku\u0161an":3.5,"Marek Eben":null,"Milo\u0161 Vystr\u010Dil":null,"Ji\u0159\xED Draho\u0161":null,"Dana Dr\xE1bov\xE1":null,"Tomio Okamura":null,"Lenka Brad\xE1\u010Dov\xE1":null,"Jan \u0160vejnar":null,"Martin Stropnick\xFD":null,"Karel Havl\xED\u010Dek":null,"Robert \u0160lachta":null,"Kl\xE1ra Long Sl\xE1mov\xE1":null,"Milo\u0161 Knor":null,"Denisa Rohanov\xE1":null,"Ji\u0159\xED Paroubek":null,"Jakub Olbert":null,"Josef Sk\xE1la":null,"Vladim\xEDr Bo\u0161t\xEDk":null,"Karel Divi\u0161":null,"Ivan Barto\u0161":null,"Jan Ham\xE1\u010Dek":null,"Kate\u0159ina \u0160im\xE1\u010Dkov\xE1":null,"Marian Jure\u010Dka":null,"Mark\xE9ta Pekarov\xE1 Adamov\xE1":null,"Milu\u0161e Nerudov\xE1":null,"Miroslav Kalousek":null,"Pavel Rychetsk\xFD":null,"Petr Fiala":null,"Tom\xE1\u0161 Sedl\xE1\u010Dek":null,"Tom\xE1\u0161 Zima":null,"Vojt\u011Bch Filip":null,"V\xE1clav Klaus ml.":null,nev\u00EDm:null,"\u0160imon P\xE1nek":null},{identifier:"2022-02","pollster:id":"STEM/MARK",link:"https://www.stemmark.cz/prezidentem-muze-byt-zena-relevantnim-kandidatkam-vzrostla-mira-volitelnosti/",start_date:"2022-02-17",end_date:"2022-02-22",published_date:"2022-03-23",n:1e3,sponsor:null,middle_date:"2022-02-20","Unnamed: 9":null,model_n:null,"Unnamed: 11":null,note:null,"Andrej Babi\u0161":17.43,"Petr Pavel":12.6,"jin\xE1 osoba":null,"Pavel Fisher":10.43,"Danu\u0161e Nerudov\xE1":6.55,"Karel Jane\u010Dek":3,"Josef St\u0159edula":2.79,"Marek Hil\u0161er":9.35,"Miroslava N\u011Bmcov\xE1":11.27,"V\xE1clav Klaus st.":5.71,"Vladim\xEDr Dlouh\xFD":4.6,"Michael Koc\xE1b":4.02,"Jarom\xEDr Soukup":1.41,"Alena Vit\xE1skov\xE1":3.52,"Ji\u0159\xED Rusnok":null,"V\xEDt Raku\u0161an":null,"Marek Eben":14,"Milo\u0161 Vystr\u010Dil":9.51,"Ji\u0159\xED Draho\u0161":9.39,"Dana Dr\xE1bov\xE1":8.95,"Tomio Okamura":8.33,"Lenka Brad\xE1\u010Dov\xE1":7.08,"Jan \u0160vejnar":6.85,"Martin Stropnick\xFD":3.79,"Karel Havl\xED\u010Dek":3.34,"Robert \u0160lachta":3.3,"Kl\xE1ra Long Sl\xE1mov\xE1":2.9,"Milo\u0161 Knor":2.13,"Denisa Rohanov\xE1":1.26,"Ji\u0159\xED Paroubek":1.24,"Jakub Olbert":1.13,"Josef Sk\xE1la":.8,"Vladim\xEDr Bo\u0161t\xEDk":.72,"Karel Divi\u0161":.48,"Ivan Barto\u0161":null,"Jan Ham\xE1\u010Dek":null,"Kate\u0159ina \u0160im\xE1\u010Dkov\xE1":null,"Marian Jure\u010Dka":null,"Mark\xE9ta Pekarov\xE1 Adamov\xE1":null,"Milu\u0161e Nerudov\xE1":null,"Miroslav Kalousek":null,"Pavel Rychetsk\xFD":null,"Petr Fiala":null,"Tom\xE1\u0161 Sedl\xE1\u010Dek":null,"Tom\xE1\u0161 Zima":null,"Vojt\u011Bch Filip":null,"V\xE1clav Klaus ml.":null,nev\u00EDm:null,"\u0160imon P\xE1nek":null},{identifier:"2022-01","pollster:id":"Kantar",link:"https://www.forum24.cz/oligarcha-vs-general-tydenik-forum-prinasi-prezidentsky-pruzkum-rok-pred-volbami/",start_date:"2022-01-17",end_date:"2022-01-19",published_date:null,n:800,sponsor:"Forum 24",middle_date:"2022-01-18","Unnamed: 9":null,model_n:null,"Unnamed: 11":null,note:null,"Andrej Babi\u0161":26,"Petr Pavel":15,"jin\xE1 osoba":20,"Pavel Fisher":5,"Danu\u0161e Nerudov\xE1":5,"Karel Jane\u010Dek":null,"Josef St\u0159edula":null,"Marek Hil\u0161er":5,"Miroslava N\u011Bmcov\xE1":4,"V\xE1clav Klaus st.":null,"Vladim\xEDr Dlouh\xFD":null,"Michael Koc\xE1b":null,"Jarom\xEDr Soukup":null,"Alena Vit\xE1skov\xE1":null,"Ji\u0159\xED Rusnok":null,"V\xEDt Raku\u0161an":null,"Marek Eben":null,"Milo\u0161 Vystr\u010Dil":3,"Ji\u0159\xED Draho\u0161":8,"Dana Dr\xE1bov\xE1":null,"Tomio Okamura":9,"Lenka Brad\xE1\u010Dov\xE1":null,"Jan \u0160vejnar":null,"Martin Stropnick\xFD":null,"Karel Havl\xED\u010Dek":null,"Robert \u0160lachta":null,"Kl\xE1ra Long Sl\xE1mov\xE1":null,"Milo\u0161 Knor":null,"Denisa Rohanov\xE1":null,"Ji\u0159\xED Paroubek":null,"Jakub Olbert":null,"Josef Sk\xE1la":null,"Vladim\xEDr Bo\u0161t\xEDk":null,"Karel Divi\u0161":null,"Ivan Barto\u0161":null,"Jan Ham\xE1\u010Dek":null,"Kate\u0159ina \u0160im\xE1\u010Dkov\xE1":null,"Marian Jure\u010Dka":null,"Mark\xE9ta Pekarov\xE1 Adamov\xE1":null,"Milu\u0161e Nerudov\xE1":null,"Miroslav Kalousek":null,"Pavel Rychetsk\xFD":null,"Petr Fiala":null,"Tom\xE1\u0161 Sedl\xE1\u010Dek":null,"Tom\xE1\u0161 Zima":null,"Vojt\u011Bch Filip":null,"V\xE1clav Klaus ml.":null,nev\u00EDm:null,"\u0160imon P\xE1nek":null},{identifier:"2021-12","pollster:id":"Ipsos",link:"https://denikn.cz/783683/pruzkum-spolu-babise-by-porazil-petr-pavel-koalice-hleda-dal/?ref=inc&cst=7d5f819de40657bc551af4ae51f03cf6a8bfddb5",start_date:null,end_date:null,published_date:null,n:null,sponsor:"Spolu",middle_date:"2021-12-24","Unnamed: 9":null,model_n:null,"Unnamed: 11":null,note:'"koncem roku"',"Andrej Babi\u0161":23.2,"Petr Pavel":12.5,"jin\xE1 osoba":3.7,"Pavel Fisher":6,"Danu\u0161e Nerudov\xE1":null,"Karel Jane\u010Dek":5.2,"Josef St\u0159edula":2.5,"Marek Hil\u0161er":6.6,"Miroslava N\u011Bmcov\xE1":6.8,"V\xE1clav Klaus st.":null,"Vladim\xEDr Dlouh\xFD":2.5,"Michael Koc\xE1b":null,"Jarom\xEDr Soukup":null,"Alena Vit\xE1skov\xE1":null,"Ji\u0159\xED Rusnok":null,"V\xEDt Raku\u0161an":8.5,"Marek Eben":null,"Milo\u0161 Vystr\u010Dil":4.2,"Ji\u0159\xED Draho\u0161":null,"Dana Dr\xE1bov\xE1":null,"Tomio Okamura":7.1,"Lenka Brad\xE1\u010Dov\xE1":4.9,"Jan \u0160vejnar":null,"Martin Stropnick\xFD":null,"Karel Havl\xED\u010Dek":null,"Robert \u0160lachta":null,"Kl\xE1ra Long Sl\xE1mov\xE1":null,"Milo\u0161 Knor":null,"Denisa Rohanov\xE1":null,"Ji\u0159\xED Paroubek":null,"Jakub Olbert":null,"Josef Sk\xE1la":null,"Vladim\xEDr Bo\u0161t\xEDk":null,"Karel Divi\u0161":null,"Ivan Barto\u0161":null,"Jan Ham\xE1\u010Dek":null,"Kate\u0159ina \u0160im\xE1\u010Dkov\xE1":null,"Marian Jure\u010Dka":null,"Mark\xE9ta Pekarov\xE1 Adamov\xE1":null,"Milu\u0161e Nerudov\xE1":2.3,"Miroslav Kalousek":3,"Pavel Rychetsk\xFD":null,"Petr Fiala":null,"Tom\xE1\u0161 Sedl\xE1\u010Dek":null,"Tom\xE1\u0161 Zima":null,"Vojt\u011Bch Filip":null,"V\xE1clav Klaus ml.":null,nev\u00EDm:null,"\u0160imon P\xE1nek":.8},{identifier:"2021-11","pollster:id":"STEM+Median",link:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.idnes.cz%2Fzpravy%2Fdomaci%2Fprezident-volby-babis-pavel-rakusan-pruzkum-kandidatura.A211129_190737_domaci_albe&psig=AOvVaw23Jlg6eXX1nq7svCFdTxgX&ust=1639270151773000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMiJxqvD2vQCFQAAAAAdAAAAABAD",start_date:"2021-11-15",end_date:"2021-11-23",published_date:"2021-11-30",n:2482,sponsor:"MF DNES",middle_date:"2021-11-19","Unnamed: 9":null,model_n:null,"Unnamed: 11":null,note:null,"Andrej Babi\u0161":26.5,"Petr Pavel":15.5,"jin\xE1 osoba":3.5,"Pavel Fisher":6.5,"Danu\u0161e Nerudov\xE1":3,"Karel Jane\u010Dek":2,"Josef St\u0159edula":2,"Marek Hil\u0161er":4.5,"Miroslava N\u011Bmcov\xE1":7,"V\xE1clav Klaus st.":5,"Vladim\xEDr Dlouh\xFD":2,"Michael Koc\xE1b":2,"Jarom\xEDr Soukup":1,"Alena Vit\xE1skov\xE1":null,"Ji\u0159\xED Rusnok":null,"V\xEDt Raku\u0161an":8.5,"Marek Eben":null,"Milo\u0161 Vystr\u010Dil":null,"Ji\u0159\xED Draho\u0161":7.5,"Dana Dr\xE1bov\xE1":null,"Tomio Okamura":null,"Lenka Brad\xE1\u010Dov\xE1":null,"Jan \u0160vejnar":null,"Martin Stropnick\xFD":null,"Karel Havl\xED\u010Dek":null,"Robert \u0160lachta":null,"Kl\xE1ra Long Sl\xE1mov\xE1":null,"Milo\u0161 Knor":null,"Denisa Rohanov\xE1":null,"Ji\u0159\xED Paroubek":null,"Jakub Olbert":null,"Josef Sk\xE1la":null,"Vladim\xEDr Bo\u0161t\xEDk":null,"Karel Divi\u0161":null,"Ivan Barto\u0161":null,"Jan Ham\xE1\u010Dek":null,"Kate\u0159ina \u0160im\xE1\u010Dkov\xE1":null,"Marian Jure\u010Dka":null,"Mark\xE9ta Pekarov\xE1 Adamov\xE1":null,"Milu\u0161e Nerudov\xE1":null,"Miroslav Kalousek":3.5,"Pavel Rychetsk\xFD":null,"Petr Fiala":null,"Tom\xE1\u0161 Sedl\xE1\u010Dek":null,"Tom\xE1\u0161 Zima":null,"Vojt\u011Bch Filip":null,"V\xE1clav Klaus ml.":null,nev\u00EDm:null,"\u0160imon P\xE1nek":null},{identifier:"2021-10","pollster:id":"STEM/MARK",link:"https://www.stemmark.cz/soucasne-udalosti-se-promitaji-do-pohledu-na-prezidentsky-urad/",start_date:null,end_date:null,published_date:"2021-11-03",n:1003,sponsor:null,middle_date:"2021-10-23","Unnamed: 9":null,model_n:null,"Unnamed: 11":null,note:null,"Andrej Babi\u0161":16,"Petr Pavel":12,"jin\xE1 osoba":null,"Pavel Fisher":9,"Danu\u0161e Nerudov\xE1":null,"Karel Jane\u010Dek":null,"Josef St\u0159edula":null,"Marek Hil\u0161er":8,"Miroslava N\u011Bmcov\xE1":10,"V\xE1clav Klaus st.":null,"Vladim\xEDr Dlouh\xFD":null,"Michael Koc\xE1b":null,"Jarom\xEDr Soukup":null,"Alena Vit\xE1skov\xE1":null,"Ji\u0159\xED Rusnok":null,"V\xEDt Raku\u0161an":12,"Marek Eben":16,"Milo\u0161 Vystr\u010Dil":10,"Ji\u0159\xED Draho\u0161":9,"Dana Dr\xE1bov\xE1":null,"Tomio Okamura":null,"Lenka Brad\xE1\u010Dov\xE1":null,"Jan \u0160vejnar":null,"Martin Stropnick\xFD":null,"Karel Havl\xED\u010Dek":null,"Robert \u0160lachta":null,"Kl\xE1ra Long Sl\xE1mov\xE1":null,"Milo\u0161 Knor":null,"Denisa Rohanov\xE1":null,"Ji\u0159\xED Paroubek":null,"Jakub Olbert":null,"Josef Sk\xE1la":null,"Vladim\xEDr Bo\u0161t\xEDk":null,"Karel Divi\u0161":null,"Ivan Barto\u0161":null,"Jan Ham\xE1\u010Dek":null,"Kate\u0159ina \u0160im\xE1\u010Dkov\xE1":null,"Marian Jure\u010Dka":null,"Mark\xE9ta Pekarov\xE1 Adamov\xE1":null,"Milu\u0161e Nerudov\xE1":null,"Miroslav Kalousek":null,"Pavel Rychetsk\xFD":null,"Petr Fiala":8,"Tom\xE1\u0161 Sedl\xE1\u010Dek":null,"Tom\xE1\u0161 Zima":null,"Vojt\u011Bch Filip":null,"V\xE1clav Klaus ml.":null,nev\u00EDm:null,"\u0160imon P\xE1nek":null},{identifier:"2021-09","pollster:id":"Median",link:"https://www.seznamzpravy.cz/clanek/novy-prezident-ctvrtina-cechu-nevi-nejvic-se-zatim-libi-general-pavel-178134",start_date:"2021-09-25",end_date:"2021-09-30",published_date:"2021-10-19",n:null,sponsor:null,middle_date:"2021-09-28","Unnamed: 9":null,model_n:null,"Unnamed: 11":null,note:null,"Andrej Babi\u0161":8,"Petr Pavel":13,"jin\xE1 osoba":5,"Pavel Fisher":7,"Danu\u0161e Nerudov\xE1":2,"Karel Jane\u010Dek":null,"Josef St\u0159edula":2,"Marek Hil\u0161er":6,"Miroslava N\u011Bmcov\xE1":6,"V\xE1clav Klaus st.":7,"Vladim\xEDr Dlouh\xFD":null,"Michael Koc\xE1b":5,"Jarom\xEDr Soukup":null,"Alena Vit\xE1skov\xE1":null,"Ji\u0159\xED Rusnok":null,"V\xEDt Raku\u0161an":null,"Marek Eben":null,"Milo\u0161 Vystr\u010Dil":null,"Ji\u0159\xED Draho\u0161":7,"Dana Dr\xE1bov\xE1":null,"Tomio Okamura":null,"Lenka Brad\xE1\u010Dov\xE1":5,"Jan \u0160vejnar":null,"Martin Stropnick\xFD":null,"Karel Havl\xED\u010Dek":null,"Robert \u0160lachta":null,"Kl\xE1ra Long Sl\xE1mov\xE1":null,"Milo\u0161 Knor":null,"Denisa Rohanov\xE1":null,"Ji\u0159\xED Paroubek":null,"Jakub Olbert":null,"Josef Sk\xE1la":null,"Vladim\xEDr Bo\u0161t\xEDk":null,"Karel Divi\u0161":null,"Ivan Barto\u0161":null,"Jan Ham\xE1\u010Dek":null,"Kate\u0159ina \u0160im\xE1\u010Dkov\xE1":1,"Marian Jure\u010Dka":null,"Mark\xE9ta Pekarov\xE1 Adamov\xE1":null,"Milu\u0161e Nerudov\xE1":null,"Miroslav Kalousek":null,"Pavel Rychetsk\xFD":null,"Petr Fiala":null,"Tom\xE1\u0161 Sedl\xE1\u010Dek":2,"Tom\xE1\u0161 Zima":1,"Vojt\u011Bch Filip":null,"V\xE1clav Klaus ml.":null,nev\u00EDm:25,"\u0160imon P\xE1nek":null},{identifier:"2021-04","pollster:id":"STEM/MARK",link:"https://www.stemmark.cz/ctvrtina-lidi-veri-ze-andrej-babis-bude-kandidovat-na-prezidenta/",start_date:null,end_date:null,published_date:null,n:802,sponsor:null,middle_date:"2021-04-01","Unnamed: 9":null,model_n:null,"Unnamed: 11":null,note:null,"Andrej Babi\u0161":6,"Petr Pavel":10,"jin\xE1 osoba":null,"Pavel Fisher":8,"Danu\u0161e Nerudov\xE1":null,"Karel Jane\u010Dek":null,"Josef St\u0159edula":null,"Marek Hil\u0161er":9,"Miroslava N\u011Bmcov\xE1":12,"V\xE1clav Klaus st.":null,"Vladim\xEDr Dlouh\xFD":null,"Michael Koc\xE1b":null,"Jarom\xEDr Soukup":null,"Alena Vit\xE1skov\xE1":null,"Ji\u0159\xED Rusnok":null,"V\xEDt Raku\u0161an":6,"Marek Eben":16,"Milo\u0161 Vystr\u010Dil":6,"Ji\u0159\xED Draho\u0161":9,"Dana Dr\xE1bov\xE1":8,"Tomio Okamura":6,"Lenka Brad\xE1\u010Dov\xE1":7,"Jan \u0160vejnar":null,"Martin Stropnick\xFD":null,"Karel Havl\xED\u010Dek":null,"Robert \u0160lachta":null,"Kl\xE1ra Long Sl\xE1mov\xE1":null,"Milo\u0161 Knor":null,"Denisa Rohanov\xE1":null,"Ji\u0159\xED Paroubek":null,"Jakub Olbert":null,"Josef Sk\xE1la":null,"Vladim\xEDr Bo\u0161t\xEDk":null,"Karel Divi\u0161":null,"Ivan Barto\u0161":5,"Jan Ham\xE1\u010Dek":2,"Kate\u0159ina \u0160im\xE1\u010Dkov\xE1":null,"Marian Jure\u010Dka":1,"Mark\xE9ta Pekarov\xE1 Adamov\xE1":4,"Milu\u0161e Nerudov\xE1":null,"Miroslav Kalousek":null,"Pavel Rychetsk\xFD":7,"Petr Fiala":3,"Tom\xE1\u0161 Sedl\xE1\u010Dek":null,"Tom\xE1\u0161 Zima":null,"Vojt\u011Bch Filip":2,"V\xE1clav Klaus ml.":null,nev\u00EDm:null,"\u0160imon P\xE1nek":null},{identifier:"2020-10","pollster:id":"STEM/MARK",link:"https://www.stemmark.cz/2020/10/",start_date:"2020-10-16",end_date:"2020-10-18",published_date:null,n:1416,sponsor:null,middle_date:"2020-10-17","Unnamed: 9":null,model_n:null,"Unnamed: 11":null,note:null,"Andrej Babi\u0161":9,"Petr Pavel":11,"jin\xE1 osoba":null,"Pavel Fisher":10,"Danu\u0161e Nerudov\xE1":null,"Karel Jane\u010Dek":null,"Josef St\u0159edula":null,"Marek Hil\u0161er":8,"Miroslava N\u011Bmcov\xE1":9,"V\xE1clav Klaus st.":null,"Vladim\xEDr Dlouh\xFD":null,"Michael Koc\xE1b":null,"Jarom\xEDr Soukup":null,"Alena Vit\xE1skov\xE1":null,"Ji\u0159\xED Rusnok":null,"V\xEDt Raku\u0161an":null,"Marek Eben":11,"Milo\u0161 Vystr\u010Dil":7,"Ji\u0159\xED Draho\u0161":10,"Dana Dr\xE1bov\xE1":5,"Tomio Okamura":6,"Lenka Brad\xE1\u010Dov\xE1":null,"Jan \u0160vejnar":null,"Martin Stropnick\xFD":null,"Karel Havl\xED\u010Dek":null,"Robert \u0160lachta":null,"Kl\xE1ra Long Sl\xE1mov\xE1":null,"Milo\u0161 Knor":null,"Denisa Rohanov\xE1":null,"Ji\u0159\xED Paroubek":null,"Jakub Olbert":null,"Josef Sk\xE1la":null,"Vladim\xEDr Bo\u0161t\xEDk":null,"Karel Divi\u0161":null,"Ivan Barto\u0161":null,"Jan Ham\xE1\u010Dek":null,"Kate\u0159ina \u0160im\xE1\u010Dkov\xE1":null,"Marian Jure\u010Dka":null,"Mark\xE9ta Pekarov\xE1 Adamov\xE1":null,"Milu\u0161e Nerudov\xE1":null,"Miroslav Kalousek":null,"Pavel Rychetsk\xFD":null,"Petr Fiala":null,"Tom\xE1\u0161 Sedl\xE1\u010Dek":null,"Tom\xE1\u0161 Zima":null,"Vojt\u011Bch Filip":null,"V\xE1clav Klaus ml.":null,nev\u00EDm:null,"\u0160imon P\xE1nek":null},{identifier:"2020-03","pollster:id":"STEM/MARK",link:"https://www.stemmark.cz/cesi-budouci-kandidati-na-prezidenta-kde-jste-ukazte-se/",start_date:null,end_date:null,published_date:null,n:830,sponsor:null,middle_date:"2020-03-15","Unnamed: 9":null,model_n:null,"Unnamed: 11":null,note:null,"Andrej Babi\u0161":15,"Petr Pavel":12,"jin\xE1 osoba":null,"Pavel Fisher":13,"Danu\u0161e Nerudov\xE1":null,"Karel Jane\u010Dek":null,"Josef St\u0159edula":null,"Marek Hil\u0161er":11,"Miroslava N\u011Bmcov\xE1":8,"V\xE1clav Klaus st.":null,"Vladim\xEDr Dlouh\xFD":null,"Michael Koc\xE1b":null,"Jarom\xEDr Soukup":null,"Alena Vit\xE1skov\xE1":null,"Ji\u0159\xED Rusnok":null,"V\xEDt Raku\u0161an":null,"Marek Eben":14,"Milo\u0161 Vystr\u010Dil":null,"Ji\u0159\xED Draho\u0161":11,"Dana Dr\xE1bov\xE1":null,"Tomio Okamura":null,"Lenka Brad\xE1\u010Dov\xE1":8,"Jan \u0160vejnar":null,"Martin Stropnick\xFD":null,"Karel Havl\xED\u010Dek":null,"Robert \u0160lachta":null,"Kl\xE1ra Long Sl\xE1mov\xE1":null,"Milo\u0161 Knor":null,"Denisa Rohanov\xE1":null,"Ji\u0159\xED Paroubek":null,"Jakub Olbert":null,"Josef Sk\xE1la":null,"Vladim\xEDr Bo\u0161t\xEDk":null,"Karel Divi\u0161":null,"Ivan Barto\u0161":null,"Jan Ham\xE1\u010Dek":null,"Kate\u0159ina \u0160im\xE1\u010Dkov\xE1":null,"Marian Jure\u010Dka":null,"Mark\xE9ta Pekarov\xE1 Adamov\xE1":null,"Milu\u0161e Nerudov\xE1":null,"Miroslav Kalousek":null,"Pavel Rychetsk\xFD":9,"Petr Fiala":null,"Tom\xE1\u0161 Sedl\xE1\u010Dek":null,"Tom\xE1\u0161 Zima":null,"Vojt\u011Bch Filip":null,"V\xE1clav Klaus ml.":7,nev\u00EDm:null,"\u0160imon P\xE1nek":null}],rl=[{names:["Andrej Babi\u0161","Petr Pavel","Pavel Fisher","Danu\u0161e Nerudov\xE1","Karel Jane\u010Dek","Josef St\u0159edula","Marek Hil\u0161er","Miroslava N\u011Bmcov\xE1","V\xE1clav Klaus st.","Vladim\xEDr Dlouh\xFD","Michael Koc\xE1b","Jarom\xEDr Soukup","Alena Vit\xE1skov\xE1","Ji\u0159\xED Rusnok","V\xEDt Raku\u0161an","Marek Eben","Milo\u0161 Vystr\u010Dil","Ji\u0159\xED Draho\u0161","Dana Dr\xE1bov\xE1","Tomio Okamura","Lenka Brad\xE1\u010Dov\xE1","Jan \u0160vejnar","Martin Stropnick\xFD","Karel Havl\xED\u010Dek","Robert \u0160lachta","Kl\xE1ra Long Sl\xE1mov\xE1","Milo\u0161 Knor","Denisa Rohanov\xE1","Ji\u0159\xED Paroubek","Jakub Olbert","Josef Sk\xE1la","Vladim\xEDr Bo\u0161t\xEDk","Karel Divi\u0161","Ivan Barto\u0161","Jan Ham\xE1\u010Dek","Kate\u0159ina \u0160im\xE1\u010Dkov\xE1","Marian Jure\u010Dka","Mark\xE9ta Pekarov\xE1 Adamov\xE1","Milu\u0161e Nerudov\xE1","Miroslav Kalousek","Pavel Rychetsk\xFD","Petr Fiala","Tom\xE1\u0161 Sedl\xE1\u010Dek","Tom\xE1\u0161 Zima","Vojt\u011Bch Filip","V\xE1clav Klaus ml.","\u0160imon P\xE1nek"]}];const tl={data:function(){return{polls:ul,candidates:rl[0].names}},methods:{formatDate(n){return new Date(n).toLocaleDateString("cs")}}},il={class:"container"},sl=l("h3",null,[t(" Zve\u0159ejn\u011Bn\xE9 pr\u016Fzkumy "),l("small",null,"1. kolo")],-1),dl={class:"table-responsive"},ml={class:"table table-striped table-hover table-condensed"},cl=l("th",null,null,-1),vl=l("th",null,[t("Datum\xA0"),l("small",null,"(st\u0159ed)")],-1);function kl(n,d,_,p,h,c){const r=ol;return a(),e("div",il,[sl,l("div",dl,[l("table",ml,[l("thead",null,[l("tr",null,[cl,vl,(a(!0),e(v,null,k(n.candidates,(o,m)=>(a(),e("th",{key:m},[l("small",null,u(o),1)]))),128))])]),l("tbody",null,[(a(!0),e(v,null,k(n.polls,(o,m)=>(a(),e("tr",{key:m},[l("th",null,u(o["pollster:id"]),1),l("td",null,u(c.formatDate(o.middle_date)),1),(a(!0),e(v,null,k(n.candidates,(b,K)=>(a(),e("td",{key:K},[i(r,{decNumber:o[b]},null,8,["decNumber"])]))),128))]))),128))])])])])}var _l=s(tl,[["render",kl]]);const pl="shares/2022-05-18T04:44:51.382869_president.png";var hl={filename:pl};const bl={data(){return{fn:hl.filename}},head(){return{title:"Mand\xE1ty.cz - prezidentsk\xE9 volby 2023",meta:[{hid:"description",name:"description",content:"Prezidentsk\xE9 volby 2023 - nejp\u0159esn\u011Bj\u0161\xED denn\u011B aktualizovan\xE9 volebn\xED modely."},{hid:"og:url",name:"og:url",content:"https://mandaty.cz/"},{hid:"og:title",name:"og:title",content:"Mand\xE1ty.cz - prezidentsk\xE9 volby 2023"},{hid:"og:description",name:"og:description",content:"Mand\xE1ty.cz - nejp\u0159esn\u011Bj\u0161\xED denn\u011B aktualizovan\xE9 modely pro prezidentsk\xE9 volby 2023."},{hid:"og:description",name:"og:description",content:"Mand\xE1ty.cz - nejp\u0159esn\u011Bj\u0161\xED denn\u011B aktualizovan\xE9 modely pro prezidentsk\xE9 volby 2023"},{hid:"og:image",name:"og:image",content:"/"+this.data().fn}]}}},Ml={class:"container"},Jl=l("h1",{class:"pt-4"},"Prezidentsk\xE9 volby 2023",-1),Kl=l("hr",null,null,-1),fl=l("hr",null,null,-1),Vl=l("hr",null,null,-1);function Pl(n,d,_,p,h,c){const r=O,o=Z,m=ll,b=_l;return a(),e("div",Ml,[Jl,Kl,i(r),i(o),fl,i(m),i(o),Vl,i(b)])}var Sl=s(bl,[["render",Pl]]);export{Sl as default};
