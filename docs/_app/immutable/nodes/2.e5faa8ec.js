import{s as oe,n as G,r as he,f as fe}from"../chunks/scheduler.63274e7e.js";import{S as ce,i as de,g as a,s as O,m as se,h as i,j as y,f as v,c as R,y as Q,n as le,k as r,l as ve,a as re,x as t,z as P,o as ne,r as K,u as W,v as X,d as Z,t as ee,w as te}from"../chunks/index.443e41d3.js";const ge=!0,we=Object.freeze(Object.defineProperty({__proto__:null,prerender:ge},Symbol.toStringTag,{value:"Module"}));function pe(h){let l,e,d,s,n,c,p="Текущий счёт:",U,x,C,f,o,m,u,S="",M,I,b,V="",N,_,L,q='<div class="tablet__blockname svelte-7l3s3">Кошелёк</div>',F,g,w,T,z,E;return{c(){l=a("div"),e=a("div"),d=O(),s=a("div"),n=a("div"),c=a("div"),c.textContent=p,U=O(),x=a("div"),C=se(h[0]),f=O(),o=a("div"),m=a("div"),u=a("button"),u.innerHTML=S,M=O(),I=a("div"),b=a("button"),b.innerHTML=V,N=O(),_=a("div"),L=a("div"),L.innerHTML=q,F=O(),g=a("button"),w=a("div"),T=se(h[2]),this.h()},l(k){l=i(k,"DIV",{class:!0});var D=y(l);e=i(D,"DIV",{class:!0,style:!0}),y(e).forEach(v),d=R(D),s=i(D,"DIV",{class:!0});var j=y(s);n=i(j,"DIV",{class:!0});var $=y(n);c=i($,"DIV",{class:!0,"data-svelte-h":!0}),Q(c)!=="svelte-u6wu0a"&&(c.textContent=p),U=R($),x=i($,"DIV",{class:!0});var H=y(x);C=le(H,h[0]),H.forEach(v),$.forEach(v),f=R(j),o=i(j,"DIV",{class:!0});var A=y(o);m=i(A,"DIV",{class:!0});var Y=y(m);u=i(Y,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(u)!=="svelte-p2nn5v"&&(u.innerHTML=S),Y.forEach(v),M=R(A),I=i(A,"DIV",{class:!0});var B=y(I);b=i(B,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(b)!=="svelte-113x5ef"&&(b.innerHTML=V),B.forEach(v),A.forEach(v),j.forEach(v),N=R(D),_=i(D,"DIV",{class:!0});var J=y(_);L=i(J,"DIV",{class:!0,"data-svelte-h":!0}),Q(L)!=="svelte-yg3p9r"&&(L.innerHTML=q),F=R(J),g=i(J,"BUTTON",{class:!0});var ue=y(g);w=i(ue,"DIV",{class:!0});var _e=y(w);T=le(_e,h[2]),_e.forEach(v),ue.forEach(v),J.forEach(v),D.forEach(v),this.h()},h(){r(e,"class","tablet__coins svelte-7l3s3"),ve(e,"--image","url("+h[1]+")"),r(c,"class","tablet__blockname svelte-7l3s3"),r(x,"class","amount__button svelte-7l3s3"),r(n,"class","tablet__elemtitle svelte-7l3s3"),r(u,"class","reset__button svelte-7l3s3"),r(m,"class","amount__reset reset svelte-7l3s3"),r(b,"class","increment__button svelte-7l3s3"),r(I,"class","amount__increment increment svelte-7l3s3"),r(o,"class","amount__control svelte-7l3s3"),r(s,"class","tablet__element amount svelte-7l3s3"),r(L,"class","tablet__elemtitle svelte-7l3s3"),r(w,"class","bank__amount svelte-7l3s3"),r(g,"class","bank__wallet svelte-7l3s3"),r(_,"class","tablet__element bank svelte-7l3s3"),r(l,"class","tablet svelte-7l3s3")},m(k,D){re(k,l,D),t(l,e),t(l,d),t(l,s),t(s,n),t(n,c),t(n,U),t(n,x),t(x,C),t(s,f),t(s,o),t(o,m),t(m,u),t(o,M),t(o,I),t(I,b),t(l,N),t(l,_),t(_,L),t(_,F),t(_,g),t(g,w),t(w,T),z||(E=[P(u,"click",h[5]),P(b,"click",h[3]),P(g,"click",h[4])],z=!0)},p(k,[D]){D&2&&ve(e,"--image","url("+k[1]+")"),D&1&&ne(C,k[0]),D&4&&ne(T,k[2])},i:G,o:G,d(k){k&&v(l),z=!1,he(E)}}}function xe(h,l,e){const d=[100,200,400,800,1600,3200,6400,12800,25600,51200,102400];let s=0,n=`https://storage.yandexcloud.net/rzd-universitet/${s}.png`,c=[],p=0,U=0;return[s,n,U,()=>{s==0?(e(0,s+=d[0]),e(1,n=`https://storage.yandexcloud.net/rzd-universitet/${s}.png`),c.push({id:p}),p++):(console.log(s,d[d.findIndex(()=>s)]),e(0,s+=d[d.indexOf(s)]),e(1,n=`https://storage.yandexcloud.net/rzd-universitet/${s}.png`),c.push({id:p}),p++),console.log(c)},o=>{e(2,U+=s),e(0,s=0),e(1,n=`https://storage.yandexcloud.net/rzd-universitet/${s}.png`),c=[],p=0},()=>{e(0,s=0),e(1,n=`https://storage.yandexcloud.net/rzd-universitet/${s}.png`)}]}class ae extends ce{constructor(l){super(),de(this,l,xe,pe,oe,{})}}function me(h){let l,e,d;return{c(){l=a("a"),e=a("img"),this.h()},l(s){l=i(s,"A",{href:!0,target:!0});var n=y(l);e=i(n,"IMG",{src:!0,alt:!0,class:!0}),n.forEach(v),this.h()},h(){fe(e.src,d=h[2])||r(e,"src",d),r(e,"alt",""),r(e,"class","tablet__image svelte-53ma32"),r(l,"href",h[2]),r(l,"target","_blank")},m(s,n){re(s,l,n),t(l,e)},p(s,n){n&4&&!fe(e.src,d=s[2])&&r(e,"src",d),n&4&&r(l,"href",s[2])},d(s){s&&v(l)}}}function ye(h){let l,e,d,s="Предыдущий вопрос",n,c,p="Ответ",U,x,C="Следующий вопрос",f,o,m,u,S,M,I,b,V="Правильный ответ:",N,_,L,q,F,g=h[2]&&me(h);return{c(){l=a("div"),e=a("div"),d=a("button"),d.textContent=s,n=O(),c=a("button"),c.textContent=p,U=O(),x=a("button"),x.textContent=C,f=O(),o=a("div"),m=a("div"),u=se(h[0]),S=O(),g&&g.c(),M=O(),I=a("div"),b=a("div"),b.textContent=V,N=O(),_=a("div"),L=se(h[1]),this.h()},l(w){l=i(w,"DIV",{class:!0});var T=y(l);e=i(T,"DIV",{class:!0});var z=y(e);d=i(z,"BUTTON",{"data-svelte-h":!0}),Q(d)!=="svelte-eaock9"&&(d.textContent=s),n=R(z),c=i(z,"BUTTON",{"data-svelte-h":!0}),Q(c)!=="svelte-1fw20kw"&&(c.textContent=p),U=R(z),x=i(z,"BUTTON",{"data-svelte-h":!0}),Q(x)!=="svelte-1mo4sp7"&&(x.textContent=C),z.forEach(v),f=R(T),o=i(T,"DIV",{class:!0});var E=y(o);m=i(E,"DIV",{class:!0});var k=y(m);u=le(k,h[0]),k.forEach(v),S=R(E),g&&g.l(E),E.forEach(v),M=R(T),I=i(T,"DIV",{class:!0});var D=y(I);b=i(D,"DIV",{class:!0,"data-svelte-h":!0}),Q(b)!=="svelte-1xh1pyk"&&(b.textContent=V),N=R(D),_=i(D,"DIV",{class:!0});var j=y(_);L=le(j,h[1]),j.forEach(v),D.forEach(v),T.forEach(v),this.h()},h(){r(e,"class","tablet__control svelte-53ma32"),r(m,"class","tablet__text svelte-53ma32"),r(o,"class","tablet__element tablet__element_question svelte-53ma32"),r(b,"class","tablet__text svelte-53ma32"),r(_,"class","tablet__text svelte-53ma32"),r(I,"class","tablet__element tablet__element_answer svelte-53ma32"),r(l,"class","tablet svelte-53ma32")},m(w,T){re(w,l,T),t(l,e),t(e,d),t(e,n),t(e,c),t(e,U),t(e,x),t(l,f),t(l,o),t(o,m),t(m,u),t(o,S),g&&g.m(o,null),t(l,M),t(l,I),t(I,b),t(I,N),t(I,_),t(_,L),q||(F=[P(d,"click",h[4]),P(c,"click",h[5]),P(x,"click",h[3])],q=!0)},p(w,[T]){T&1&&ne(u,w[0]),w[2]?g?g.p(w,T):(g=me(w),g.c(),g.m(o,null)):g&&(g.d(1),g=null),T&2&&ne(L,w[1])},i:G,o:G,d(w){w&&v(l),g&&g.d(),q=!1,he(F)}}}const ie=3;function Ie(h,l,e){let d="Игра скоро начнётся!",s="",n;const c={question_list:[{id:0,text:"Какое количество пикетов содержится в одном километре жд-линии?",correct_answer:"9",difficulty:"medium"},{id:1,text:"Чему равна ширина «стефановской» колеи? ",correct_answer:"1435 мм",difficulty:"medium"},{id:2,text:"Как называется самый длинный железнодорожный тоннель в России?",correct_answer:"Северомуйский тоннель",difficulty:"medium"},{id:3,text:"Назовите «столицу» БАМа",correct_answer:"город Тында",difficulty:"medium"},{id:4,text:"Сколько разновидностей белого огня применяется в сигнализации на железной дороге? ",correct_answer:"три: лунно-белый, молочно-белый, прозрачно-белый",difficulty:"medium"},{id:5,text:"Как называется данное устройство?",correct_answer:"локомотивный светофор, АЛС",difficulty:"medium",image:"https://storage.yandexcloud.net/rzd-universitet/20230818_0410.png"},{id:6,text:"Каково предназначение путевой машины, изображенной на фото? ",correct_answer:"кусторез, для срезания поросли вдоль железнодорожного пути",difficulty:"medium",image:"https://storage.yandexcloud.net/rzd-universitet/20230818_0411.png"},{id:7,text:"Что изображено на фотографии?",correct_answer:"сигнальная железнодорожная петарда",difficulty:"medium",image:"https://storage.yandexcloud.net/rzd-universitet/20230818_0412.jpg"},{id:8,text:"Как называется устройство, изображенное на фотографии?",correct_answer:"предохранительное устройство, сбрасывающий остряк",difficulty:"medium",image:"https://storage.yandexcloud.net/rzd-universitet/20230818_0413.jpg"},{id:9,text:"Как называется элемент промежуточного скрепления необходимый для крепления рельсов к деревянным шпалам?",correct_answer:"костыль",difficulty:"easy"},{id:10,text:"На какие элементы разделяется межстанционный перегон проходными светофорами? ",correct_answer:"на блок-участки",difficulty:"easy"},{id:11,text:"Сколько поездов может находится между станциями на однопутном перегоне, оборудованным полуавтоматической блокировкой? ",correct_answer:"один",difficulty:"easy"},{id:12,text:"Как называется электрический аппарат, размещаемый на крыше электроподвижного состава, и предназначенный для токосъёма? ",correct_answer:"токоприёмник, пантограф",difficulty:"easy",image:"https://storage.yandexcloud.net/rzd-universitet/20230818_0414.jpg"},{id:13,text:"Сколько систем электрификации применяется на Российских железных дорогах?",correct_answer:"две",difficulty:"easy"},{id:14,text:"Как называется время, в течение которого прекращается движение поездов по перегону или путям железнодорожной станции для производства ремонтно-строительных работ? ",correct_answer:"окно",difficulty:"easy"},{id:15,text:"Как называется путевая машина, изображенная на фото?",correct_answer:"струг, снегоочиститель",difficulty:"easy",image:"https://storage.yandexcloud.net/rzd-universitet/20230818_0415.jpg"},{id:16,text:"Каково предназначение путевой машины, изображенной на фото?",correct_answer:"для восстановления формы головки рельсов, для шлифовки рельсов",difficulty:"easy",image:"https://storage.yandexcloud.net/rzd-universitet/20230818_0416.jpg"},{id:17,text:"Как называется вагон, предназначенный для сплошного ультразвукового контроля рельс под нагрузкой, уложенных в путь, и выявления в них наружных и скрытых дефектов? ",correct_answer:"вагон-дефектоскоп",difficulty:"easy"},{id:18,text:"Как называется невысокий земляной вал вдоль верхнего края выемки земляного полотна? ",correct_answer:"банкет",difficulty:"hard"},{id:19,text:"В какой области России применялась «капская» колея? ",correct_answer:"Сахалинская область",difficulty:"hard"},{id:20,text:"Как называется путейская однорельсовая тележка для грузов? ",correct_answer:"модерон",difficulty:"hard",image:"https://storage.yandexcloud.net/rzd-universitet/20230818_0418.jpg"},{id:21,text:"Как называется сплетённый проволочный ящик, заполненный камнем, применяемый для укрепления откосов?",correct_answer:"габион",difficulty:"hard",image:"https://storage.yandexcloud.net/rzd-universitet/20230818_0421.jpg"},{id:22,text:"Как называется рукоятка для ручного перевода централизованных стрелочных переводов? ",correct_answer:"курбель, курбельная рукоятка",difficulty:"hard",image:"https://storage.yandexcloud.net/rzd-universitet/20230818_0422.png"},{id:23,text:"Как называется съёмная вышка для обслуживания и ремонта контактной сети? ",correct_answer:"лейтер",difficulty:"hard",image:"https://storage.yandexcloud.net/rzd-universitet/20230818_04222.jpg"},{id:24,text:"Как называется такая опора контактной сети? ",correct_answer:"анкерная опора",difficulty:"hard",image:"https://storage.yandexcloud.net/rzd-universitet/20230818_0423.png"},{id:25,text:"Как называют количество шпал, приходящихся на 1 километр железнодорожного пути?",correct_answer:"эпюра шпал",difficulty:"hard"},{id:26,text:"Как называется наибольший затяжной подъем, по значению которого устанавливается норма массы поезда при одиночной тяге и расчетной минимальной равномерной скорости движения?",correct_answer:"руководящий, расчетный",difficulty:"hard"}]};let p=[];const U=()=>{p=[],c.question_list.forEach(V=>{!p.includes(V.difficulty)&&!u.includes(V.id)&&p.push(V.difficulty)}),console.log(p)};let x="easy",C=1,f=0,o,m,u=[];const S=c.question_list.length;return U(),[d,s,n,()=>{if(f++,u.length===c.question_list.length){e(0,d="Вопросы кончились, игра закончена!"),e(1,s="");return}const V=()=>{for(e(1,s=""),m=Math.floor(Math.random()*S);u.includes(m)||x!==c.question_list[m].difficulty;)m=Math.floor(Math.random()*S);console.log("ID вопроса:",m),u.push(m),e(0,d=c.question_list[m].text),c.question_list[m].image?e(2,n=c.question_list[m].image):e(2,n=void 0),console.log("CURRENT_ROUND: ",C),console.log("CURRENT_ROUND_QUESTION: ",f),console.log("CURRENT_DIFFICULTY: ",x),console.log("DIFFICULTY_LIST:",p),console.log("passedQuestionsIds",u)};f<=ie&&V(),f>ie&&(C++,f=1,U(),x=p[Math.floor(Math.random()*p.length)],V())},()=>{e(1,s="");const V=N=>{const _=c.question_list.find(L=>L.id===N);console.log(N),e(0,d=_.text),m=N,_.image?e(2,n=_.image):e(2,n=void 0),console.log("CURRENT_ROUND: ",C),console.log("CURRENT_ROUND_QUESTION: ",f),console.log("CURRENT_DIFFICULTY: ",x),console.log("DIFFICULTY_LIST:",p),console.log("passedQuestionsIds",u)};if(f<=ie&&f!==1?(f--,u.pop(),o=u[u.length-1],console.log("LAST_QUESTION_ID: ",o),V(o)):f===1&&(C--,f=3,u.pop(),o=u[u.length-1],console.log("LAST_QUESTION_ID: ",o),x=c.question_list.find(_=>_.id===o).difficulty,V(o)),f===3){o=u[u.length-1];const N=c.question_list.find(_=>_.id===o).difficulty;p.includes(N)||p.push(N),x=N}},()=>{e(1,s=c.question_list[m].correct_answer)}]}class be extends ce{constructor(l){super(),de(this,l,Ie,ye,oe,{})}}function Te(h){let l,e,d,s,n,c="Вопрос",p,U,x,C,f,o,m="Команда №1",u,S,M,I,b,V="Команда №2",N,_,L,q,F,g="Команда №3",w,T,z;return U=new be({}),S=new ae({}),_=new ae({}),T=new ae({}),{c(){l=a("main"),e=a("div"),d=a("div"),s=a("div"),n=a("h3"),n.textContent=c,p=O(),K(U.$$.fragment),x=O(),C=a("div"),f=a("div"),o=a("h3"),o.textContent=m,u=O(),K(S.$$.fragment),M=O(),I=a("div"),b=a("h3"),b.textContent=V,N=O(),K(_.$$.fragment),L=O(),q=a("div"),F=a("h3"),F.textContent=g,w=O(),K(T.$$.fragment),this.h()},l(E){l=i(E,"MAIN",{});var k=y(l);e=i(k,"DIV",{class:!0});var D=y(e);d=i(D,"DIV",{class:!0});var j=y(d);s=i(j,"DIV",{class:!0});var $=y(s);n=i($,"H3",{class:!0,"data-svelte-h":!0}),Q(n)!=="svelte-1as704c"&&(n.textContent=c),p=R($),W(U.$$.fragment,$),$.forEach(v),j.forEach(v),x=R(D),C=i(D,"DIV",{class:!0});var H=y(C);f=i(H,"DIV",{class:!0});var A=y(f);o=i(A,"H3",{class:!0,"data-svelte-h":!0}),Q(o)!=="svelte-1di5kj6"&&(o.textContent=m),u=R(A),W(S.$$.fragment,A),A.forEach(v),M=R(H),I=i(H,"DIV",{class:!0});var Y=y(I);b=i(Y,"H3",{class:!0,"data-svelte-h":!0}),Q(b)!=="svelte-x37mt5"&&(b.textContent=V),N=R(Y),W(_.$$.fragment,Y),Y.forEach(v),L=R(H),q=i(H,"DIV",{class:!0});var B=y(q);F=i(B,"H3",{class:!0,"data-svelte-h":!0}),Q(F)!=="svelte-hhhbvc"&&(F.textContent=g),w=R(B),W(T.$$.fragment,B),B.forEach(v),H.forEach(v),D.forEach(v),k.forEach(v),this.h()},h(){r(n,"class","card__comandname svelte-eru07b"),r(s,"class","question__card card svelte-eru07b"),r(d,"class","gameboard__question question svelte-eru07b"),r(o,"class","card__comandname svelte-eru07b"),r(f,"class","score__card card svelte-eru07b"),r(b,"class","card__comandname svelte-eru07b"),r(I,"class","score__card card svelte-eru07b"),r(F,"class","card__comandname svelte-eru07b"),r(q,"class","score__card card svelte-eru07b"),r(C,"class","gameboard__score score svelte-eru07b"),r(e,"class","gameboard svelte-eru07b")},m(E,k){re(E,l,k),t(l,e),t(e,d),t(d,s),t(s,n),t(s,p),X(U,s,null),t(e,x),t(e,C),t(C,f),t(f,o),t(f,u),X(S,f,null),t(C,M),t(C,I),t(I,b),t(I,N),X(_,I,null),t(C,L),t(C,q),t(q,F),t(q,w),X(T,q,null),z=!0},p:G,i(E){z||(Z(U.$$.fragment,E),Z(S.$$.fragment,E),Z(_.$$.fragment,E),Z(T.$$.fragment,E),z=!0)},o(E){ee(U.$$.fragment,E),ee(S.$$.fragment,E),ee(_.$$.fragment,E),ee(T.$$.fragment,E),z=!1},d(E){E&&v(l),te(U),te(S),te(_),te(T)}}}class De extends ce{constructor(l){super(),de(this,l,null,Te,oe,{})}}export{De as component,we as universal};
