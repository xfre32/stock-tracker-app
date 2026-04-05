import{a as ue}from"./chunk-4SU52WNG.js";import{a as he}from"./chunk-U6KRWSCP.js";import{$ as ce,Y as se,_ as me,aa as de,ba as pe,h as W,i as X,k as J,m as $,n as ee,o as te,q as oe,r as ne,s as re,t as ie,u as ae,z as le}from"./chunk-ZKTY6L43.js";import{$b as Z,Ab as m,Ac as K,Bb as c,Cb as p,D as w,Db as f,Ea as F,Eb as g,M as C,Nb as H,Pb as U,Qb as v,Rb as V,Ta as h,Tb as Q,U as A,Ub as Y,X as E,Xa as I,Y as T,_ as D,_a as N,_b as G,aa as i,ac as s,ba as R,bb as j,cc as b,gb as d,hb as B,ib as z,ic as q,ja as S,ka as u,oa as O,p as _,sa as k,ya as P,z as M,zb as L}from"./chunk-XJN2IBSM.js";var Ae=["*",[["mat-toolbar-row"]]],Ee=["*","mat-toolbar-row"],Te=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=z({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),fe=(()=>{class n{_elementRef=i(P);_platform=i(ae);_document=i(u);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=d({type:n,selectors:[["mat-toolbar"]],contentQueries:function(e,o,a){if(e&1&&V(a,Te,5),e&2){let l;Q(l=Y())&&(o._toolbarRows=l)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,o){e&2&&(Z(o.color?"mat-"+o.color:""),G("mat-toolbar-multiple-rows",o._toolbarRows.length>0)("mat-toolbar-single-row",o._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Ee,decls:2,vars:0,template:function(e,o){e&1&&(U(Ae),v(0),v(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var ge=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=B({type:n});static \u0275inj=T({imports:[le]})}return n})();var Re=()=>({exact:!0}),be=(()=>{class n{constructor(){this.themeService=i(he)}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=d({type:n,selectors:[["app-header"]],decls:15,vars:3,consts:[[1,"header"],["routerLink","/",1,"header__brand"],[1,"header__logo"],[1,"header__title"],[1,"header__spacer"],[1,"header__nav"],["mat-button","","routerLink","/","routerLinkActive","active",3,"routerLinkActiveOptions"],["mat-icon-button","","aria-label","Toggle theme",1,"header__theme-toggle",3,"click"],[1,"theme-icon"]],template:function(e,o){e&1&&(m(0,"mat-toolbar",0)(1,"a",1)(2,"mat-icon",2),s(3,"show_chart"),c(),m(4,"span",3),s(5,"StockTracker"),c()(),p(6,"span",4),m(7,"nav",5)(8,"a",6)(9,"mat-icon"),s(10,"dashboard"),c(),s(11," Dashboard "),c()(),m(12,"button",7),H("click",function(){return o.themeService.toggle()}),m(13,"mat-icon",8),s(14),c()()()),e&2&&(h(8),L("routerLinkActiveOptions",q(2,Re)),h(6),b(" ",o.themeService.isDark()?"light_mode":"dark_mode"," "))},dependencies:[oe,ne,ge,fe,ce,me,se,pe,de],styles:[".header[_ngcontent-%COMP%]{position:sticky;top:0;z-index:100;gap:8px;box-shadow:var(--shadow-sm)}.header__brand[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;text-decoration:none;color:inherit}.header__logo[_ngcontent-%COMP%]{color:var(--mat-sys-primary);font-size:28px;width:28px;height:28px}.header__title[_ngcontent-%COMP%]{font-family:Geologica,sans-serif;font-weight:700;font-size:1.25rem;letter-spacing:-.02em}.header__spacer[_ngcontent-%COMP%]{flex:1}.header__nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:var(--mat-sys-primary)}.header__theme-toggle[_ngcontent-%COMP%]   .theme-icon[_ngcontent-%COMP%]{transition:transform .3s ease}.header__theme-toggle[_ngcontent-%COMP%]:hover   .theme-icon[_ngcontent-%COMP%]{transform:rotate(30deg)}@media(max-width:600px){.header__title[_ngcontent-%COMP%]{font-size:1rem}.header__nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}}"]})}}return n})();var ye=(()=>{class n{constructor(){this.year=new Date().getFullYear()}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=d({type:n,selectors:[["app-footer"]],decls:7,vars:1,consts:[[1,"footer"],[1,"footer__divider"]],template:function(e,o){e&1&&(f(0,"footer",0)(1,"span"),s(2,"Built with Angular & Material"),g(),f(3,"span",1),s(4,"\xB7"),g(),f(5,"span"),s(6),g()()),e&2&&(h(6),b("\xA9 ",o.year," StockTracker"))},styles:[".footer[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:8px;padding:16px 24px;font-size:.8rem;color:var(--color-neutral);border-top:1px solid var(--mat-sys-outline-variant)}.footer__divider[_ngcontent-%COMP%]{opacity:.5}"]})}}return n})();var _e=(()=>{class n{static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=d({type:n,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"app-shell"],[1,"app-content"]],template:function(e,o){e&1&&(m(0,"div",0),p(1,"app-header"),m(2,"main",1),p(3,"router-outlet"),c(),p(4,"app-footer"),c())},dependencies:[te,be,ye],styles:[".app-shell[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100vh}.app-content[_ngcontent-%COMP%]{flex:1;padding:24px;max-width:1200px;margin:0 auto;width:100%}"]})}}return n})();var Se="@",Oe=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=i(S);loadingSchedulerFn=i(ke,{optional:!0});_engine;constructor(t,e,o,a,l){this.doc=t,this.delegate=e,this.zone=o,this.animationType=a,this.moduleImpl=l}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-6LYB5XZW.js").then(o=>o),e;return this.loadingSchedulerFn?e=this.loadingSchedulerFn(t):e=t(),e.catch(o=>{throw new A(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:a})=>{this._engine=o(this.animationType,this.doc);let l=new a(this.delegate,this._engine,this.zone);return this.delegate=l,l})}createRenderer(t,e){let o=this.delegate.createRenderer(t,e);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let a=new x(o);return e?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(l=>{let Ce=l.createRenderer(t,e);a.use(Ce),this.scheduler??=this.injector.get(k,null,{optional:!0}),this.scheduler?.notify(10)}).catch(l=>{a.use(o)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(t){this._engine?.flush(),this.delegate.componentReplaced?.(t)}static \u0275fac=function(e){j()};static \u0275prov=E({token:n,factory:n.\u0275fac})}return n})(),x=class{delegate;replay=[];\u0275type=1;constructor(r){this.delegate=r}use(r){if(this.delegate=r,this.replay!==null){for(let t of this.replay)t(r);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(r,t){return this.delegate.createElement(r,t)}createComment(r){return this.delegate.createComment(r)}createText(r){return this.delegate.createText(r)}get destroyNode(){return this.delegate.destroyNode}appendChild(r,t){this.delegate.appendChild(r,t)}insertBefore(r,t,e,o){this.delegate.insertBefore(r,t,e,o)}removeChild(r,t,e,o){this.delegate.removeChild(r,t,e,o)}selectRootElement(r,t){return this.delegate.selectRootElement(r,t)}parentNode(r){return this.delegate.parentNode(r)}nextSibling(r){return this.delegate.nextSibling(r)}setAttribute(r,t,e,o){this.delegate.setAttribute(r,t,e,o)}removeAttribute(r,t,e){this.delegate.removeAttribute(r,t,e)}addClass(r,t){this.delegate.addClass(r,t)}removeClass(r,t){this.delegate.removeClass(r,t)}setStyle(r,t,e,o){this.delegate.setStyle(r,t,e,o)}removeStyle(r,t,e){this.delegate.removeStyle(r,t,e)}setProperty(r,t,e){this.shouldReplay(t)&&this.replay.push(o=>o.setProperty(r,t,e)),this.delegate.setProperty(r,t,e)}setValue(r,t){this.delegate.setValue(r,t)}listen(r,t,e,o){return this.shouldReplay(t)&&this.replay.push(a=>a.listen(r,t,e,o)),this.delegate.listen(r,t,e,o)}shouldReplay(r){return this.replay!==null&&r.startsWith(Se)}},ke=new D("");function ve(n="animations"){return I("NgAsyncAnimations"),R([{provide:N,useFactory:()=>new Oe(i(u),i(W),i(O),n)},{provide:F,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var xe=[{path:"",loadChildren:()=>import("./chunk-T7WGJJ2R.js").then(n=>n.DASHBOARD_ROUTES)},{path:"stock/:symbol",loadChildren:()=>import("./chunk-HB4LIHPH.js").then(n=>n.STOCK_DETAIL_ROUTES)},{path:"**",redirectTo:""}];var Me=(n,r)=>{let t=i(ue);return r(n).pipe(C({count:2,delay:(e,o)=>e instanceof J&&(e.status===429||e.status>=500)?M(o*1e3):_(()=>e)}),w(e=>{let o="An unexpected error occurred";return e.status===0?o="Network error \u2014 please check your internet connection":e.status===401?o="Invalid API key \u2014 please check your Finnhub configuration":e.status===429?o="Rate limit exceeded \u2014 please wait a moment and try again":e.status>=500&&(o="Server error \u2014 Finnhub may be experiencing issues"),t.error(o),_(()=>e)}))};var we={providers:[K({eventCoalescing:!0}),re(xe,ie()),$(ee([Me])),ve()]};X(_e,we).catch(n=>console.error(n));
