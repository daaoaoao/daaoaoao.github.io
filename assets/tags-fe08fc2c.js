import{g as q,a3 as F,a4 as L,Z as N,Y as V,q as A,k as E,C as I,aj as R,T as d,a0 as W,s as z,a5 as D,W as H,l as O,o as n,c as h,w as o,e as a,j as e,b as r,t as u,h as y,i as Z,F as G,a as J,a2 as K,n as M}from"./app-14eae115.js";import{_ as Q}from"./YunCard.vue_vue_type_style_index_0_lang-7aa9b8f7.js";import{_ as U}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-b5d6f3e6.js";import{_ as X}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-0aed86db.js";const ee={class:"yun-text-light",text:"center",p:"2"},te={class:"justify-center items-end",flex:"~ wrap",gap:"1"},se=["onClick"],ne={"inline-flex":""},oe={"inline-flex":"",text:"xs"},me=q({__name:"tags",setup(ae){F([L({"@type":"CollectionPage"})]);const v=N(),x=V(),C=A(),{t:m}=E(),i=I(),{tags:_,getTagStyle:w}=R({primary:C.value.colors.primary}),s=d(()=>v.query.tag||""),S=W(),T=d(()=>S.postList.filter(t=>t.tags?typeof t.tags=="string"?t.tags===s.value:t.tags.includes(s.value):!1)),p=z(),{show:b}=D(p);function k(l){x.push({query:{tag:l}}),b()}const P=H(i);return(l,t)=>{const f=X,Y=O("router-view"),B=U,$=Q,j=K;return n(),h(j,null,{"main-header":o(()=>[a(f,{title:e(P)||e(m)("menu.tags"),icon:e(i).icon||"i-ri-tag-line",color:e(i).color},null,8,["title","icon","color"])]),"main-content":o(()=>[r("div",ee,u(e(m)("counter.tags",Array.from(e(_)).length)),1),r("div",te,[(n(!0),y(G,null,Z(Array.from(e(_)).sort(),([c,g])=>(n(),y("span",{key:c,"inline-flex":"",my:"2",class:"post-tag cursor-pointer items-baseline leading-4",style:M(e(w)(g.count)),p:"1",onClick:re=>k(c.toString())},[r("span",ne,"#"+u(c),1),r("span",oe,"["+u(g.count)+"]",1)],12,se))),128))]),a(Y)]),"main-nav-before":o(()=>[s.value?(n(),h($,{key:0,ref_key:"collapse",ref:p,m:"t-4",w:"full"},{default:o(()=>[a(f,{title:s.value,icon:"i-ri-hashtag"},null,8,["title"]),a(B,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:T.value},null,8,["posts"])]),_:1},512)):J("v-if",!0)]),_:1})}}});export{me as default};