import{a as ve,b as ke}from"./chunk-QCKRAUU6.js";import{b as ne}from"./chunk-X3RZEHIT.js";import{a as pt,c as ye,f as _t}from"./chunk-SQR5NPDA.js";import{a as Te,b as we,c as Me}from"./chunk-BLTILH7F.js";import{a as fe,j as ge,l as Ce,o as xe}from"./chunk-5KNIWAGA.js";import{c as pe,d as _e,f as he,g as ue,h as It}from"./chunk-ZRWZX5O2.js";import{a as Ie,b as De}from"./chunk-T2QZWJBJ.js";import"./chunk-4N2GRJQR.js";import"./chunk-WHS2OTI6.js";import{b as ce,c as me}from"./chunk-E2VTLSEF.js";import{A as le,I as ct,M as wt,N as be,Z as mt,_ as bt,m as ae,n as ie,r as oe,x as re,z as se}from"./chunk-BMLF3242.js";import{k as te,l as ee,r as kt,v as Tt,w as de}from"./chunk-PT3QJHGI.js";import{$ as l,$b as Yt,A as O,Ab as p,Ac as Q,Bb as o,C as Qt,Cb as r,Db as _,Ec as lt,H as qt,Hc as g,Ic as dt,Kb as V,O as Wt,Ob as C,P as Y,Q as X,Qa as ft,Qb as b,R as q,Rb as it,S as jt,Sa as d,Sb as ot,Tb as rt,Ub as G,Vb as h,Wb as u,X as Vt,Xa as tt,Ya as et,Z as F,_a as gt,_b as xt,a as R,ac as x,bb as Zt,bc as st,c as Ot,cc as s,dc as f,e as K,ea as I,ec as $,fa as D,fb as y,gb as Kt,hb as A,ia as ut,j as Ft,jb as j,jc as Z,kb as M,l as k,lb as H,lc as T,ma as v,mc as Xt,na as W,nc as z,oc as Jt,qa as L,rb as nt,sb as at,tb as Ut,ua as Gt,ub as P,v as Nt,va as J,vb as S,w as Ht,wb as E,x as U,xa as N,xb as vt,y as zt,ya as $t,yb as yt,zb as Ct}from"./chunk-FRIE7V5V.js";import"./chunk-4CLCTAJ7.js";var Bt=["*"];function qe(a,c){a&1&&ot(0)}var We=["tabListContainer"],je=["tabList"],Ve=["tabListInner"],Ge=["nextPaginator"],$e=["previousPaginator"],Ze=["content"];function Ke(a,c){}var Ue=["tabBodyWrapper"],Ye=["tabHeader"];function Xe(a,c){}function Je(a,c){if(a&1&&M(0,Xe,0,0,"ng-template",12),a&2){let t=b().$implicit;p("cdkPortalOutlet",t.templateLabel)}}function tn(a,c){if(a&1&&s(0),a&2){let t=b().$implicit;f(t.textLabel)}}function en(a,c){if(a&1){let t=V();o(0,"div",7,2),C("click",function(){let n=I(t),i=n.$implicit,m=n.$index,w=b(),B=xt(1);return D(w._handleClick(i,B,m))})("cdkFocusChange",function(n){let i=I(t).$index,m=b();return D(m._tabFocusChanged(n,i))}),_(2,"span",8)(3,"div",9),o(4,"span",10)(5,"span",11),S(6,Je,1,1,null,12)(7,tn,1,1),r()()()}if(a&2){let t=c.$implicit,e=c.$index,n=xt(1),i=b();st(t.labelClass),x("mdc-tab--active",i.selectedIndex===e),p("id",i._getTabLabelId(t,e))("disabled",t.disabled)("fitInkBarToContent",i.fitInkBarToContent),P("tabIndex",i._getTabIndex(e))("aria-posinset",e+1)("aria-setsize",i._tabs.length)("aria-controls",i._getTabContentId(e))("aria-selected",i.selectedIndex===e)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),d(3),p("matRippleTrigger",n)("matRippleDisabled",t.disabled||i.disableRipple),d(3),E(t.templateLabel?6:7)}}function nn(a,c){a&1&&ot(0)}function an(a,c){if(a&1){let t=V();o(0,"mat-tab-body",13),C("_onCentered",function(){I(t);let n=b();return D(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){I(t);let i=b();return D(i._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){I(t);let i=b();return D(i._bodyCentered(n))}),r()}if(a&2){let t=c.$implicit,e=c.$index,n=b();st(t.bodyClass),p("id",n._getTabContentId(e))("content",t.content)("position",t.position)("animationDuration",n.animationDuration)("preserveContent",n.preserveContent),P("tabindex",n.contentTabIndex!=null&&n.selectedIndex===e?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(t,e))("aria-hidden",n.selectedIndex!==e)}}var on=new F("MatTabContent"),Rt=(()=>{class a{template=l(et);constructor(){}static \u0275fac=function(e){return new(e||a)};static \u0275dir=A({type:a,selectors:[["","matTabContent",""]],features:[Z([{provide:on,useExisting:a}])]})}return a})(),rn=new F("MatTabLabel"),Be=new F("MAT_TAB"),sn=(()=>{class a extends ue{_closestTab=l(Be,{optional:!0});static \u0275fac=(()=>{let t;return function(n){return(t||(t=J(a)))(n||a)}})();static \u0275dir=A({type:a,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[Z([{provide:rn,useExisting:a}]),j]})}return a})(),Re=new F("MAT_TAB_GROUP"),Lt=(()=>{class a{_viewContainerRef=l(Zt);_closestTabGroup=l(Re,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new K;position=null;origin=null;isActive=!1;constructor(){l(ie).load(be)}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new he(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=y({type:a,selectors:[["mat-tab"]],contentQueries:function(e,n,i){if(e&1&&rt(i,sn,5)(i,Rt,7,et),e&2){let m;h(m=u())&&(n.templateLabel=m.first),h(m=u())&&(n._explicitContent=m.first)}},viewQuery:function(e,n){if(e&1&&G(et,7),e&2){let i;h(i=u())&&(n._implicitContent=i.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(e,n){e&2&&P("id",null)},inputs:{disabled:[2,"disabled","disabled",g],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[Z([{provide:Be,useExisting:a}]),Gt],ngContentSelectors:Bt,decls:1,vars:0,template:function(e,n){e&1&&(it(),H(0,qe,1,0,"ng-template"))},encapsulation:2})}return a})(),Dt="mdc-tab-indicator--active",Pe="mdc-tab-indicator--no-transition",Mt=class{_items;_currentItem;constructor(c){this._items=c}hide(){this._items.forEach(c=>c.deactivateInkBar()),this._currentItem=void 0}alignToElement(c){let t=this._items.find(n=>n.elementRef.nativeElement===c),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}},ln=(()=>{class a{_elementRef=l(N);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(Dt);return}let n=e.getBoundingClientRect(),i=t.width/n.width,m=t.left-n.left;e.classList.add(Pe),this._inkBarContentElement.style.setProperty("transform",`translateX(${m}px) scaleX(${i})`),e.getBoundingClientRect(),e.classList.remove(Pe),e.classList.add(Dt),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Dt)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement("span"),n=this._inkBarContentElement=t.createElement("span");e.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement)}static \u0275fac=function(e){return new(e||a)};static \u0275dir=A({type:a,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",g]}})}return a})();var Le=(()=>{class a extends ln{elementRef=l(N);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let t;return function(n){return(t||(t=J(a)))(n||a)}})();static \u0275dir=A({type:a,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(e,n){e&2&&(P("aria-disabled",!!n.disabled),x("mat-mdc-tab-disabled",n.disabled))},inputs:{disabled:[2,"disabled","disabled",g]},features:[j]})}return a})(),Se={passive:!0},dn=650,cn=100,mn=(()=>{class a{_elementRef=l(N);_changeDetectorRef=l(lt);_viewportRuler=l(me);_dir=l(Tt,{optional:!0});_ngZone=l(W);_platform=l(kt);_sharedResizeObserver=l(fe);_injector=l(ut);_renderer=l(gt);_animationsDisabled=ct();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new K;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new K;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new v;indexFocused=new v;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),Se),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),Se))}ngAfterContentInit(){let t=this._dir?this._dir.change:k("ltr"),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Qt(32),q(this._destroyed)),n=this._viewportRuler.change(150).pipe(q(this._destroyed)),i=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new se(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),tt(i,{injector:this._injector}),U(t,n,e,this._items.changes,this._itemsResized()).pipe(q(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),i()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(m=>{this.indexFocused.emit(m),this._setTabFocus(m)})}_itemsResized(){return typeof ResizeObserver!="function"?Ft:this._items.changes.pipe(Y(this._items),X(t=>new Ot(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(i=>e.next(i));return t.forEach(i=>n.observe(i.elementRef.nativeElement)),()=>{n.disconnect()}}))),Wt(1),zt(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!re(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t=="before"?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:i,offsetWidth:m}=e.elementRef.nativeElement,w,B;this._getLayoutDirection()=="ltr"?(w=i,B=w+m):(B=this._tabListInner.nativeElement.offsetWidth-i,w=B-m);let ht=this.scrollDistance,At=this.scrollDistance+n;w<ht?this.scrollDistance-=ht-w:B>At&&(this.scrollDistance+=Math.min(B-At,w-ht))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let t=this._tabListInner.nativeElement.scrollWidth,e=this._elementRef.nativeElement.offsetWidth,n=t-e>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,e=this._tabListContainer.nativeElement.offsetWidth;return t-e||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),Ht(dn,cn).pipe(q(U(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:i}=this._scrollHeader(t);(i===0||i>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static \u0275fac=function(e){return new(e||a)};static \u0275dir=A({type:a,inputs:{disablePagination:[2,"disablePagination","disablePagination",g],selectedIndex:[2,"selectedIndex","selectedIndex",dt]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return a})(),bn=(()=>{class a extends mn{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Mt(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=J(a)))(n||a)}})();static \u0275cmp=y({type:a,selectors:[["mat-tab-header"]],contentQueries:function(e,n,i){if(e&1&&rt(i,Le,4),e&2){let m;h(m=u())&&(n._items=m)}},viewQuery:function(e,n){if(e&1&&G(We,7)(je,7)(Ve,7)(Ge,5)($e,5),e&2){let i;h(i=u())&&(n._tabListContainer=i.first),h(i=u())&&(n._tabList=i.first),h(i=u())&&(n._tabListInner=i.first),h(i=u())&&(n._nextPaginator=i.first),h(i=u())&&(n._previousPaginator=i.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(e,n){e&2&&x("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",g]},features:[j],ngContentSelectors:Bt,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(e,n){e&1&&(it(),o(0,"div",5,0),C("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(m){return n._handlePaginatorPress("before",m)})("touchend",function(){return n._stopInterval()}),_(2,"div",6),r(),o(3,"div",7,1),C("keydown",function(m){return n._handleKeydown(m)}),o(5,"div",8,2),C("cdkObserveContent",function(){return n._onContentChanges()}),o(7,"div",9,3),ot(9),r()()(),o(10,"div",10,4),C("mousedown",function(m){return n._handlePaginatorPress("after",m)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),_(12,"div",6),r()),e&2&&(x("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),p("matRippleDisabled",n._disableScrollBefore||n.disableRipple),d(3),x("_mat-animation-noopable",n._animationsDisabled),d(2),P("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),d(5),x("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),p("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[wt,oe],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2})}return a})(),pn=new F("MAT_TABS_CONFIG"),Ee=(()=>{class a extends It{_host=l(Pt);_ngZone=l(W);_centeringSub=R.EMPTY;_leavingSub=R.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Y(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(e){return new(e||a)};static \u0275dir=A({type:a,selectors:[["","matTabBodyHost",""]],features:[j]})}return a})(),Pt=(()=>{class a{_elementRef=l(N);_dir=l(Tt,{optional:!0});_ngZone=l(W);_injector=l(ut);_renderer=l(gt);_diAnimationsDisabled=ct();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=R.EMPTY;_position;_previousPosition;_onCentering=new v;_beforeCentering=new v;_afterLeavingCenter=new v;_onCentered=new v(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=l(lt);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),tt(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(t,"transitionend",e),this._renderer.listen(t,"transitioncancel",e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position==="center";this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",t)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t=="ltr"?"left":"right":this._positionIndex>0?this._position=t=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),tt(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=y({type:a,selectors:[["mat-tab-body"]],viewQuery:function(e,n){if(e&1&&G(Ee,5)(Ze,5),e&2){let i;h(i=u())&&(n._portalHost=i.first),h(i=u())&&(n._contentElement=i.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(e,n){e&2&&P("inert",n._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(e,n){e&1&&(o(0,"div",1,0),M(2,Ke,0,0,"ng-template",2),r()),e&2&&x("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center")},dependencies:[Ee,ce],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2})}return a})(),Ae=(()=>{class a{_elementRef=l(N);_changeDetectorRef=l(lt);_ngZone=l(W);_tabsSubscription=R.EMPTY;_tabLabelSubscription=R.EMPTY;_tabBodySubscription=R.EMPTY;_diAnimationsDisabled=ct();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new $t;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(t){let e=t+"";this._animationDuration=/^\d+$/.test(e)?t+"ms":e}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new v;focusChange=new v;animationDone=new v;selectedTabChange=new v(!0);_groupId;_isServer=!l(kt).isBrowser;constructor(){let t=l(pn,{optional:!0});this._groupId=l(le).getId("mat-tab-group-"),this.animationDuration=t&&t.animationDuration?t.animationDuration:"500ms",this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,i)=>n.isActive=i===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let i=0;i<e.length;i++)if(e[i].isActive){this._indexToSelect=this._selectedIndex=i,this._lastFocusedTabIndex=null,n=e[i];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Y(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new St;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=U(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px")}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n)}_getTabIndex(t){let e=this._lastFocusedTabIndex??this.selectedIndex;return t===e?0:-1}_tabFocusChanged(t,e){t&&t!=="mouse"&&t!=="touch"&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=y({type:a,selectors:[["mat-tab-group"]],contentQueries:function(e,n,i){if(e&1&&rt(i,Lt,5),e&2){let m;h(m=u())&&(n._allTabs=m)}},viewQuery:function(e,n){if(e&1&&G(Ue,5)(Ye,5)(Pt,5),e&2){let i;h(i=u())&&(n._tabBodyWrapper=i.first),h(i=u())&&(n._tabHeader=i.first),h(i=u())&&(n._tabBodies=i)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(e,n){e&2&&(P("mat-align-tabs",n.alignTabs),st("mat-"+(n.color||"primary")),Yt("--mat-tab-animation-duration",n.animationDuration),x("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",g],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",g],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",g],selectedIndex:[2,"selectedIndex","selectedIndex",dt],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",dt],disablePagination:[2,"disablePagination","disablePagination",g],disableRipple:[2,"disableRipple","disableRipple",g],preserveContent:[2,"preserveContent","preserveContent",g],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[Z([{provide:Re,useExisting:a}])],ngContentSelectors:Bt,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(e,n){e&1&&(it(),o(0,"mat-tab-header",3,0),C("indexFocused",function(m){return n._focusChanged(m)})("selectFocusedIndex",function(m){return n.selectedIndex=m}),yt(2,en,8,17,"div",4,vt),r(),S(4,nn,1,0),o(5,"div",5,1),yt(7,an,1,10,"mat-tab-body",6,vt),r()),e&2&&(p("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),Ut("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),d(2),Ct(n._tabs),d(2),E(n._isServer?4:-1),d(),x("_mat-animation-noopable",n._animationsDisabled()),d(2),Ct(n._tabs))},dependencies:[bn,Le,ae,wt,It,Pt],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2})}return a})(),St=class{index;tab};var Oe=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=Kt({type:a});static \u0275inj=Vt({imports:[de]})}return a})();function fn(a,c){if(a&1&&_(0,"img",2),a&2){let t=b();p("src",t.profile().logo,ft)("alt",t.profile().name+" logo")}}function gn(a,c){a&1&&(o(0,"div",3)(1,"mat-icon"),s(2,"business"),r()())}function vn(a,c){if(a&1&&(o(0,"div",6)(1,"mat-icon"),s(2,"language"),r(),o(3,"span",7),s(4,"Website"),r(),o(5,"a",10),s(6),T(7,"slice"),r()()),a&2){let t=b();d(5),p("href",t.profile().weburl,ft),d(),$(" ",Jt(7,2,t.profile().weburl,0,40)," ")}}var Fe=(()=>{class a{constructor(){this.profile=Q.required()}static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275cmp=y({type:a,selectors:[["app-company-profile"]],inputs:{profile:[1,"profile"]},decls:48,vars:11,consts:[["appearance","outlined",1,"profile-card"],[1,"profile-card__header"],[1,"profile-card__logo",3,"src","alt"],[1,"profile-card__logo-placeholder"],[1,"profile-card__title"],[1,"profile-card__details"],[1,"detail-row"],[1,"detail-row__label"],[1,"detail-row__value"],[1,"detail-row__value","price"],["target","_blank","rel","noopener noreferrer",1,"detail-row__value","detail-row__link",3,"href"]],template:function(e,n){e&1&&(o(0,"mat-card",0)(1,"mat-card-content")(2,"div",1),S(3,fn,1,2,"img",2)(4,gn,3,0,"div",3),o(5,"div",4)(6,"h2"),s(7),r(),o(8,"mat-chip"),s(9),r()()(),o(10,"div",5)(11,"div",6)(12,"mat-icon"),s(13,"category"),r(),o(14,"span",7),s(15,"Industry"),r(),o(16,"span",8),s(17),r()(),o(18,"div",6)(19,"mat-icon"),s(20,"public"),r(),o(21,"span",7),s(22,"Country"),r(),o(23,"span",8),s(24),r()(),o(25,"div",6)(26,"mat-icon"),s(27,"account_balance"),r(),o(28,"span",7),s(29,"Exchange"),r(),o(30,"span",8),s(31),r()(),o(32,"div",6)(33,"mat-icon"),s(34,"pie_chart"),r(),o(35,"span",7),s(36,"Market Cap"),r(),o(37,"span",9),s(38),T(39,"marketCap"),r()(),o(40,"div",6)(41,"mat-icon"),s(42,"event"),r(),o(43,"span",7),s(44,"IPO Date"),r(),o(45,"span",8),s(46),r()(),S(47,vn,8,6,"div",6),r()()()),e&2&&(d(3),E(n.profile().logo?3:4),d(4),f(n.profile().name),d(2),f(n.profile().ticker),d(8),f(n.profile().finnhubIndustry),d(7),f(n.profile().country),d(7),f(n.profile().exchange),d(7),f(Xt(39,9,n.profile().marketCapitalization)),d(8),f(n.profile().ipo),d(),E(n.profile().weburl?47:-1))},dependencies:[_t,pt,ye,bt,mt,xe,Ce,ee,Me],styles:[".profile-card__header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;margin-bottom:24px}.profile-card__logo[_ngcontent-%COMP%]{width:56px;height:56px;border-radius:var(--radius-md);object-fit:contain;background:var(--mat-sys-surface-variant);padding:4px}.profile-card__logo-placeholder[_ngcontent-%COMP%]{width:56px;height:56px;border-radius:var(--radius-md);background:var(--mat-sys-surface-variant);display:flex;align-items:center;justify-content:center}.profile-card__title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:600;margin-bottom:4px}.profile-card__details[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.detail-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.detail-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--mat-sys-outline);font-size:20px;width:20px;height:20px}.detail-row__label[_ngcontent-%COMP%]{min-width:100px;color:var(--color-neutral);font-size:.85rem}.detail-row__value[_ngcontent-%COMP%]{font-weight:500}.detail-row__link[_ngcontent-%COMP%]{color:var(--mat-sys-primary);text-decoration:none}.detail-row__link[_ngcontent-%COMP%]:hover{text-decoration:underline}"]})}}return a})();var Ne=(()=>{class a{constructor(){this.quote=Q.required()}static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275cmp=y({type:a,selectors:[["app-key-metrics"]],inputs:{quote:[1,"quote"]},decls:35,vars:21,consts:[[1,"metrics-grid"],["appearance","outlined",1,"metric-card","metric-card--highlight"],[1,"metric-card__label"],[1,"metric-card__value","price"],["appearance","outlined",1,"metric-card"],[3,"value"]],template:function(e,n){e&1&&(o(0,"div",0)(1,"mat-card",1)(2,"span",2),s(3,"Current Price"),r(),o(4,"span",3),s(5),T(6,"currency"),r()(),o(7,"mat-card",4)(8,"span",2),s(9,"Change Today"),r(),_(10,"app-trend-indicator",5),r(),o(11,"mat-card",4)(12,"span",2),s(13,"Open"),r(),o(14,"span",3),s(15),T(16,"currency"),r()(),o(17,"mat-card",4)(18,"span",2),s(19,"High"),r(),o(20,"span",3),s(21),T(22,"currency"),r()(),o(23,"mat-card",4)(24,"span",2),s(25,"Low"),r(),o(26,"span",3),s(27),T(28,"currency"),r()(),o(29,"mat-card",4)(30,"span",2),s(31,"Previous Close"),r(),o(32,"span",3),s(33),T(34,"currency"),r()()()),e&2&&(d(5),f(z(6,6,n.quote().c,"USD")),d(5),p("value",n.quote().dp),d(5),f(z(16,9,n.quote().o,"USD")),d(6),f(z(22,12,n.quote().h,"USD")),d(6),f(z(28,15,n.quote().l,"USD")),d(6),f(z(34,18,n.quote().pc,"USD")))},dependencies:[_t,pt,ke,te],styles:[".metrics-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px}.metric-card[_ngcontent-%COMP%]{padding:16px;display:flex;flex-direction:column;gap:8px}.metric-card--highlight[_ngcontent-%COMP%]{grid-column:span 2}.metric-card--highlight[_ngcontent-%COMP%]   .metric-card__value[_ngcontent-%COMP%]{font-size:1.75rem}.metric-card__label[_ngcontent-%COMP%]{font-size:.75rem;color:var(--color-neutral);text-transform:uppercase;letter-spacing:.05em}.metric-card__value[_ngcontent-%COMP%]{font-size:1.1rem}@media(max-width:600px){.metrics-grid[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}"]})}}return a})();var yn=()=>[import("./chunk-W44VJHYZ.js").then(a=>a.PriceChartComponent)],Cn=()=>[import("./chunk-CBPGD6R4.js").then(a=>a.InsiderSentimentComponent)],xn=()=>[import("./chunk-XR7GNDLW.js").then(a=>a.NewsFeedComponent)];function kn(a,c){if(a&1&&(o(0,"div",2),_(1,"mat-spinner",5),o(2,"p"),s(3),r()()),a&2){let t=b();d(3),$("Loading ",t.symbol()," data...")}}function Tn(a,c){if(a&1&&(o(0,"div",11),_(1,"app-company-profile",12)(2,"app-key-metrics",13),r()),a&2){let t=b(2);d(),p("profile",t.profile()),d(),p("quote",t.quote())}}function wn(a,c){if(a&1&&_(0,"app-price-chart",14),a&2){let t=b(3);p("symbol",t.symbol())}}function In(a,c){a&1&&(o(0,"div",15),_(1,"mat-spinner",16),r())}function Dn(a,c){a&1&&(o(0,"div",11),H(1,wn,1,1)(2,In,2,0),nt(3,1,yn,null,2),at(),r())}function Mn(a,c){if(a&1&&_(0,"app-insider-sentiment",17),a&2){let t=b(3);p("sentiment",t.sentiment())}}function Pn(a,c){a&1&&(o(0,"div",15),_(1,"mat-spinner",16),r())}function Sn(a,c){a&1&&(o(0,"div",11),H(1,Mn,1,1)(2,Pn,2,0),nt(3,1,Cn,null,2),at(),r())}function En(a,c){if(a&1&&_(0,"app-news-feed",18),a&2){let t=b(3);p("news",t.news())}}function Bn(a,c){a&1&&(o(0,"div",15),_(1,"mat-spinner",16),r())}function Rn(a,c){a&1&&(o(0,"div",11),H(1,En,1,1)(2,Bn,2,0),nt(3,1,xn,null,2),at(),r())}function Ln(a,c){a&1&&(o(0,"mat-tab-group",3)(1,"mat-tab",6),M(2,Tn,3,2,"ng-template",7),r(),o(3,"mat-tab",8),M(4,Dn,5,0,"ng-template",7),r(),o(5,"mat-tab",9),M(6,Sn,5,0,"ng-template",7),r(),o(7,"mat-tab",10),M(8,Rn,5,0,"ng-template",7),r()())}function An(a,c){if(a&1){let t=V();o(0,"div",4)(1,"mat-icon"),s(2,"error_outline"),r(),o(3,"h3"),s(4),r(),o(5,"p"),s(6,"The stock symbol may be invalid or the service is unavailable."),r(),o(7,"button",19),C("click",function(){I(t);let n=b();return D(n.goBack())}),s(8," Return to Dashboard "),r()()}if(a&2){let t=b();d(4),$("Unable to load data for ",t.symbol())}}var He=(()=>{class a{constructor(){this.symbol=Q.required(),this.api=l(ge),this.router=l(ne),this.watchlistStore=l(ve),this.loading=L(!0),this.profile=L(null),this.quote=L(null),this.sentiment=L([]),this.news=L([]),we(this.symbol).pipe(jt(()=>this.resetState()),X(t=>{if(!t)return k(null);this.loading.set(!0);let e=new Date().toISOString().split("T")[0],n=new Date(Date.now()-4320*60*60*1e3).toISOString().split("T")[0];return Nt({profile:this.api.getCompanyProfile(t).pipe(O(()=>k(null))),quote:this.api.getQuote(t).pipe(O(()=>k(null))),sentiment:this.api.getInsiderSentiment(t,n,e).pipe(O(()=>k({data:[],symbol:t}))),news:this.api.getCompanyNews(t,n,e).pipe(O(()=>k([])))}).pipe(qt(()=>this.loading.set(!1)),O(()=>k(null)))}),Te()).subscribe(t=>{t&&(this.profile.set(t.profile),this.quote.set(t.quote),this.sentiment.set(t.sentiment?.data??[]),this.news.set(t.news??[]))})}resetState(){let t=this.symbol();this.loading.set(!0),this.profile.set(null),this.quote.set(null),this.sentiment.set([]),this.news.set([]);let e=this.watchlistStore.items().find(n=>n.symbol===t);e&&this.quote.set({c:e.currentPrice,d:e.change,dp:e.percentChange,h:e.highPrice,l:e.lowPrice,o:e.openPrice,pc:e.previousClose,t:0})}goBack(){this.router.navigate(["/"])}static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275cmp=y({type:a,selectors:[["app-stock-detail-page"]],inputs:{symbol:[1,"symbol"]},decls:8,vars:1,consts:[[1,"stock-detail"],["mat-button","",1,"stock-detail__back",3,"click"],[1,"stock-detail__loading"],["animationDuration","200ms",1,"stock-detail__tabs"],[1,"stock-detail__error"],["diameter","48"],["label","Overview"],["matTabContent",""],["label","Chart"],["label","Sentiment"],["label","News"],[1,"tab-content"],[3,"profile"],[3,"quote"],[3,"symbol"],[1,"tab-loading"],["diameter","32"],[3,"sentiment"],[3,"news"],["mat-flat-button","","color","primary",3,"click"]],template:function(e,n){e&1&&(o(0,"section",0)(1,"button",1),C("click",function(){return n.goBack()}),o(2,"mat-icon"),s(3,"arrow_back"),r(),s(4," Back to Dashboard "),r(),S(5,kn,4,1,"div",2)(6,Ln,9,0,"mat-tab-group",3)(7,An,9,1,"div",4),r()),e&2&&(d(5),E(n.loading()?5:n.profile()&&n.quote()?6:7))},dependencies:[Oe,Rt,Lt,Ae,_e,pe,bt,mt,De,Ie,Fe,Ne],styles:[".stock-detail[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.stock-detail__back[_ngcontent-%COMP%]{align-self:flex-start}.stock-detail__loading[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:16px;padding:64px 0;color:var(--color-neutral)}.tab-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;padding:20px 0}.stock-detail__error[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:12px;padding:64px 24px;text-align:center;color:var(--color-neutral)}.stock-detail__error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:56px;width:56px;height:56px;color:var(--color-negative)}.stock-detail__error[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface)}"]})}}return a})();var Ga=[{path:"",component:He}];export{Ga as STOCK_DETAIL_ROUTES};
