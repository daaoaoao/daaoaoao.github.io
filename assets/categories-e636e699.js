import{g as x,Y as E,s as Y,k as z,a5 as K,L as N,l as w,o,h as r,b as _,t as f,j as s,F as y,i as P,a6 as T,c as v,w as g,a as B,e as p,a0 as U,C as q,Z as F,T as L,a7 as R,W as V,a3 as W,a4 as D,a2 as H}from"./app-14eae115.js";import{_ as M}from"./YunCard.vue_vue_type_style_index_0_lang-7aa9b8f7.js";import{_ as O}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-b5d6f3e6.js";import{_ as Z}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-0aed86db.js";const A={class:"category-list-item inline-flex items-center cursor-pointer"},G={key:0,"i-ri-folder-add-line":""},J={key:1,style:{color:"var(--va-c-primary)"},"i-ri-folder-reduce-line":""},Q={key:0},X=_("div",{"i-ri-file-text-line":""},null,-1),I={m:"l-1",font:"serif black"},ee=x({__name:"YunCategory",props:{parentKey:{},category:{},level:{},collapsable:{type:Boolean,default:!0}},setup(C){const u=E(),i=Y(!0),{t:c}=z(),{locale:m}=z();function n(e){const t=m.value==="zh-CN"?"zh":m.value;return e[`title_${t}`]?e[`title_${t}`]:e.title}const l=Y(),{show:k}=K(l);function h(e){u.push({query:{category:e}}),k()}return N(()=>{const e=document.querySelector(".post-collapse-container");e&&(l.value=e)}),(e,t)=>{const d=w("YunCategory",!0),b=w("router-link");return o(),r(y,null,[_("li",A,[_("span",{class:"folder-action inline-flex",onClick:t[0]||(t[0]=a=>i.value=!i.value)},[i.value?(o(),r("div",G)):(o(),r("div",J))]),_("span",{class:"category-name",m:"l-1",onClick:t[1]||(t[1]=a=>h(e.parentKey))},f(e.category.name==="Uncategorized"?s(c)("category.uncategorized"):e.category.name)+" ["+f(e.category.total)+"] ",1)]),i.value?B("v-if",!0):(o(),r("ul",Q,[(o(!0),r(y,null,P(e.category.children,(a,$)=>(o(),r("li",{key:$,class:"post-list-item",m:"l-4"},[s(T)(a)?(o(),v(d,{key:0,"parent-key":e.parentKey?`${e.parentKey}/${a.name}`:a.name,category:a},null,8,["parent-key","category"])):(o(),r(y,{key:1},[a.title?(o(),v(b,{key:0,to:a.path||"",class:"inline-flex items-center"},{default:g(()=>[X,_("span",I,f(n(a)),1)]),_:2},1032,["to"])):B("v-if",!0)],64))]))),128))]))],64)}}}),te=x({__name:"YunCategories",props:{categories:{},level:{default:0},collapsable:{type:Boolean,default:!0}},setup(C){const i=Y(C.collapsable);return(c,m)=>{const n=ee;return o(!0),r(y,null,P(c.categories,l=>(o(),r("ul",{key:l.name,class:"category-list",m:"l-4"},[p(n,{"parent-key":l.name,category:l,level:c.level+1,collapsable:i.value},null,8,["parent-key","category","level","collapsable"])]))),128)}}});const oe={text:"center",class:"yun-text-light",p:"2"},re=x({__name:"categories",setup(C){const{t:u}=z(),i=U(),c=q(),m=F(),n=L(()=>m.query.category||""),l=R(),k=L(()=>i.postList.filter(t=>t.categories&&n.value!=="Uncategorized"?typeof t.categories=="string"?t.categories===n.value:t.categories.join("/").startsWith(n.value)&&t.categories[0]===n.value.split("/")[0]:!t.categories&&n.value==="Uncategorized"?t.categories===void 0:!1)),h=V(c);return W([D({"@type":"CollectionPage"})]),(e,t)=>{const d=Z,b=te,a=w("router-view"),$=O,S=M,j=H;return o(),v(j,null,{"main-header":g(()=>[p(d,{title:s(h)||s(u)("menu.categories"),icon:s(c).icon||"i-ri-folder-2-line",color:s(c).color},null,8,["title","icon","color"])]),"main-content":g(()=>[_("div",oe,f(s(u)("counter.categories",s(l).children.length)),1),p(b,{categories:s(l).children},null,8,["categories"]),p(a)]),"main-nav-before":g(()=>[n.value?(o(),v(S,{key:0,class:"post-collapse-container",m:"t-4",w:"full"},{default:g(()=>[p(d,{title:n.value==="Uncategorized"?s(u)("category.uncategorized"):n.value.split("/").join(" / "),icon:"i-ri-folder-open-line"},null,8,["title"]),p($,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:k.value},null,8,["posts"])]),_:1})):B("v-if",!0)]),_:1})}}});export{re as default};
