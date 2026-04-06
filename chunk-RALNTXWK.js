import{j as J,k as K}from"./chunk-VGGMGV7J.js";import{Aa as X,Ka as W,Q as H,e as G,ua as R,va as V}from"./chunk-DNM4VKQD.js";import{$b as c,Bb as L,Cb as B,Nb as b,Ob as D,P as j,Pb as p,Ra as f,V as g,W as E,Y as P,Zb as S,_ as r,bc as y,eb as l,fb as z,gb as h,ic as x,k as T,kc as C,pa as o,sa as w,sb as N,sc as M,tb as O,u as F,xc as $,yb as v,zb as d}from"./chunk-PQWFABJZ.js";import{a as _,b as A}from"./chunk-4CLCTAJ7.js";var Q=(()=>{class a{constructor(){this.socket=null,this.apiKey=J.finnhub.apiKey,this.subscribedSymbols=new Set,this.intentionalDisconnect=!1,this.lastTrade=o(null)}connect(){this.socket||(this.intentionalDisconnect=!1,this.socket=new WebSocket(`wss://ws.finnhub.io?token=${this.apiKey}`),this.socket.onmessage=t=>{let e=JSON.parse(t.data);if(e.type==="trade"&&e.data?.length>0){let n=e.data[e.data.length-1];this.lastTrade.set({symbol:n.s,price:n.p,timestamp:n.t})}},this.socket.onopen=()=>{this.subscribedSymbols.forEach(t=>this.sendSubscriptionStatus(t,"subscribe"))},this.socket.onclose=()=>{this.socket=null,this.intentionalDisconnect||setTimeout(()=>this.connect(),5e3)})}subscribe(t){this.subscribedSymbols.add(t),this.sendSubscriptionStatus(t,"subscribe")}unsubscribe(t){this.subscribedSymbols.delete(t),this.sendSubscriptionStatus(t,"unsubscribe")}sendSubscriptionStatus(t,e){this.socket?.readyState===WebSocket.OPEN&&this.socket.send(JSON.stringify({type:e,symbol:t}))}disconnect(){this.intentionalDisconnect=!0,this.socket?.close(),this.socket=null,this.subscribedSymbols.clear()}static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275prov=g({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})();var gt=(()=>{class a{constructor(){this.api=r(K),this.storage=r(X),this.notification=r(W),this.ws=r(Q),this.items=o([]),this.loading=o(new Set),this.error=o(null),this.initialized=!1,this.count=M(()=>this.items().length),this.isEmpty=M(()=>this.items().length===0&&this.loading().size===0),this.symbols=M(()=>this.items().map(t=>t.symbol)),w(()=>{let t=this.items().map(e=>e.symbol);this.initialized&&this.storage.set("watchlist",t)}),w(()=>{let t=this.ws.lastTrade();t&&this.items.update(e=>e.map(n=>n.symbol===t.symbol?A(_({},n),{currentPrice:t.price,change:t.price-n.previousClose,percentChange:(t.price-n.previousClose)/n.previousClose*100}):n))})}initialize(){let t=this.storage.get("watchlist")??[];this.initialized=!0,t.length!==0&&(this.ws.connect(),t.forEach(e=>{this.addLoadingPlaceholder(e),this.fetchStockData(e),this.ws.subscribe(e)}))}addStock(t){let e=t.toUpperCase().trim();if(!e){this.notification.warning("Please enter a stock symbol");return}if(this.symbols().includes(e)){this.notification.warning(`${e} is already in your watchlist`);return}this.addLoadingPlaceholder(e),this.fetchStockData(e),this.ws.connect(),this.ws.subscribe(e)}removeStock(t){this.items.update(e=>e.filter(n=>n.symbol!==t)),this.notification.success(`${t} removed from watchlist`),this.ws.unsubscribe(t)}addLoadingPlaceholder(t){this.loading.update(e=>new Set(e).add(t))}fetchStockData(t){this.api.searchStock(t).pipe(j(e=>{let n=e.result?.find(i=>i.symbol===t||i.displaySymbol===t);if(!n)throw new Error(`Symbol "${t}" not found`);return F({quote:this.api.getQuote(t),name:T(n.description??t)})})).subscribe({next:({quote:e,name:n})=>{let i={symbol:t,name:n,currentPrice:e.c,openPrice:e.o,highPrice:e.h,lowPrice:e.l,change:e.d,percentChange:e.dp,previousClose:e.pc};this.items.update(s=>{let m=s.findIndex(u=>u.symbol===t);if(m>=0){let u=[...s];return u[m]=i,u}return[...s,i]}),this.loading.update(s=>{let m=new Set(s);return m.delete(t),m})},error:e=>{this.loading.update(n=>{let i=new Set(n);return i.delete(t),i}),this.items.update(n=>n.filter(i=>i.symbol!==t)),this.notification.warning(e.message?.includes("not found")?`"${t}" is not a valid stock symbol`:`Failed to load data for ${t}`)}})}ngOnDestroy(){this.ws.disconnect()}static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275prov=g({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})();var U=["*"];var Y=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],Z=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],q=new P("MAT_CARD_CONFIG"),St=(()=>{class a{appearance;constructor(){let t=r(q,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(e,n){e&2&&S("mat-mdc-card-outlined",n.appearance==="outlined")("mdc-card--outlined",n.appearance==="outlined")("mat-mdc-card-filled",n.appearance==="filled")("mdc-card--filled",n.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:U,decls:1,vars:0,template:function(e,n){e&1&&(D(),p(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return a})(),It=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275dir=h({type:a,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return a})();var kt=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275dir=h({type:a,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return a})();var _t=(()=>{class a{align="start";static \u0275fac=function(e){return new(e||a)};static \u0275dir=h({type:a,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(e,n){e&2&&S("mat-mdc-card-actions-align-end",n.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return a})(),At=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:Z,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(e,n){e&1&&(D(Y),p(0),L(1,"div",0),p(2,1),B(),p(3,2))},encapsulation:2,changeDetection:0})}return a})();var Tt=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=z({type:a});static \u0275inj=E({imports:[H]})}return a})();function tt(a,k){if(a&1&&(v(0,"span",0)(1,"mat-icon"),c(2,"trending_up"),d(),c(3),x(4,"number"),d()),a&2){let t=b();f(3),y(" +",C(4,1,t.value(),"1.2-2"),"% ")}}function et(a,k){if(a&1&&(v(0,"span",1)(1,"mat-icon"),c(2,"trending_down"),d(),c(3),x(4,"number"),d()),a&2){let t=b();f(3),y(" ",C(4,1,t.value(),"1.2-2"),"% ")}}function at(a,k){if(a&1&&(v(0,"span",2)(1,"mat-icon"),c(2,"trending_flat"),d(),c(3),x(4,"number"),d()),a&2){let t=b();f(3),y(" ",C(4,1,t.value(),"1.2-2"),"% ")}}var Ot=(()=>{class a{constructor(){this.value=$.required()}static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275cmp=l({type:a,selectors:[["app-trend-indicator"]],inputs:{value:[1,"value"]},decls:3,vars:1,consts:[[1,"trend","positive"],[1,"trend","negative"],[1,"trend","neutral"]],template:function(e,n){e&1&&N(0,tt,5,4,"span",0)(1,et,5,4,"span",1)(2,at,5,4,"span",2),e&2&&O(n.value()>0?0:n.value()<0?1:2)},dependencies:[V,R,G],styles:[".trend[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;font-family:var(--font-mono);font-weight:500;font-size:.9rem}.trend[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.positive[_ngcontent-%COMP%]{color:var(--color-positive)}.negative[_ngcontent-%COMP%]{color:var(--color-negative)}.neutral[_ngcontent-%COMP%]{color:var(--color-neutral)}"]})}}return a})();export{gt as a,St as b,It as c,kt as d,_t as e,At as f,Tt as g,Ot as h};
