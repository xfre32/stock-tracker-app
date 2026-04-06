import{a as Re,b as Le,e as Fe,f as Ne,h as ze}from"./chunk-DUCOPRTW.js";import{a as $e,b as nt,d as Ue,g as at,h as Ye}from"./chunk-RALNTXWK.js";import{b as we}from"./chunk-4SRQRRMA.js";import{a as Et,b as Bt,c as Xe,d as Qt,e as Je,f as tn,g as en,h as nn,i as an,j as on,k as rn,l as sn,m as ln,n as dn,o as cn,p as mn,q as bn}from"./chunk-AMKA2B4C.js";import{a as Ee,c as Ve}from"./chunk-3K2V6IHF.js";import{a as je,k as qe,m as Ze,p as Ke}from"./chunk-VGGMGV7J.js";import{Ca as Qe,D as Me,Da as We,Ea as Vt,I as St,K as Se,L as ct,P as mt,Q as Dt,X as De,Y as Pe,ca as et,d as xe,e as ke,fa as bt,g as Te,ga as Pt,h as It,ha as Be,ra as Oe,t as Ht,ta as Ae,ua as N,va as z,w as Gt,x as Ie,y as Mt,ya as He,za as Ge}from"./chunk-DNM4VKQD.js";import{$b as l,Ab as u,B as se,Bc as Z,Eb as yt,Ec as h,Fb as Ct,Fc as wt,Hb as F,Lb as f,N as le,Nb as p,O as ht,Ob as X,P as de,Pa as K,Pb as J,Q as ot,Qb as tt,Ra as s,Rb as q,Sb as y,Tb as C,U as ce,W as gt,Wa as Y,Xa as ft,Xb as lt,Y as O,Yb as fe,Za as Ft,Zb as w,_ as m,_b as xt,a as V,ab as ue,ac as g,bc as $,c as ne,cc as kt,da as S,dc as ve,e as pt,ea as D,eb as v,ec as ye,fb as vt,fc as Ce,gb as A,gc as U,ha as At,hb as he,i as ae,ib as st,ic as T,jb as M,jc as Tt,k as Q,kb as ge,kc as R,la as I,lc as dt,ma as rt,pa as P,qb as _e,rb as E,sa as me,sb as x,ta as be,tb as k,u as ie,ua as _t,ub as Nt,uc as zt,v as oe,vb as W,w as ut,wa as L,wb as j,x as re,xa as pe,xb as b,xc as B,yb as o,z as it,zb as r}from"./chunk-PQWFABJZ.js";import"./chunk-4CLCTAJ7.js";var Kt=["*"];function Bn(a,c){a&1&&J(0)}var Rn=["tabListContainer"],Ln=["tabList"],On=["tabListInner"],An=["nextPaginator"],Fn=["previousPaginator"],Nn=["content"];function zn(a,c){}var Hn=["tabBodyWrapper"],Gn=["tabHeader"];function Vn(a,c){}function Qn(a,c){if(a&1&&M(0,Vn,0,0,"ng-template",12),a&2){let t=p().$implicit;b("cdkPortalOutlet",t.templateLabel)}}function Wn(a,c){if(a&1&&l(0),a&2){let t=p().$implicit;g(t.textLabel)}}function jn(a,c){if(a&1){let t=F();o(0,"div",7,2),f("click",function(){let n=S(t),i=n.$implicit,d=n.$index,_=p(),G=lt(1);return D(_._handleClick(i,G,d))})("cdkFocusChange",function(n){let i=S(t).$index,d=p();return D(d._tabFocusChanged(n,i))}),u(2,"span",8)(3,"div",9),o(4,"span",10)(5,"span",11),x(6,Qn,1,1,null,12)(7,Wn,1,1),r()()()}if(a&2){let t=c.$implicit,e=c.$index,n=lt(1),i=p();xt(t.labelClass),w("mdc-tab--active",i.selectedIndex===e),b("id",i._getTabLabelId(t,e))("disabled",t.disabled)("fitInkBarToContent",i.fitInkBarToContent),E("tabIndex",i._getTabIndex(e))("aria-posinset",e+1)("aria-setsize",i._tabs.length)("aria-controls",i._getTabContentId(e))("aria-selected",i.selectedIndex===e)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),s(3),b("matRippleTrigger",n)("matRippleDisabled",t.disabled||i.disableRipple),s(3),k(t.templateLabel?6:7)}}function qn(a,c){a&1&&J(0)}function $n(a,c){if(a&1){let t=F();o(0,"mat-tab-body",13),f("_onCentered",function(){S(t);let n=p();return D(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){S(t);let i=p();return D(i._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){S(t);let i=p();return D(i._bodyCentered(n))}),r()}if(a&2){let t=c.$implicit,e=c.$index,n=p();xt(t.bodyClass),b("id",n._getTabContentId(e))("content",t.content)("position",t.position)("animationDuration",n.animationDuration)("preserveContent",n.preserveContent),E("tabindex",n.contentTabIndex!=null&&n.selectedIndex===e?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(t,e))("aria-hidden",n.selectedIndex!==e)}}var Un=new O("MatTabContent"),Yt=(()=>{class a{template=m(ft);constructor(){}static \u0275fac=function(e){return new(e||a)};static \u0275dir=A({type:a,selectors:[["","matTabContent",""]],features:[U([{provide:Un,useExisting:a}])]})}return a})(),Zn=new O("MatTabLabel"),gn=new O("MAT_TAB"),Kn=(()=>{class a extends We{_closestTab=m(gn,{optional:!0});static \u0275fac=(()=>{let t;return function(n){return(t||(t=_t(a)))(n||a)}})();static \u0275dir=A({type:a,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[U([{provide:Zn,useExisting:a}]),st]})}return a})(),_n=new O("MAT_TAB_GROUP"),Xt=(()=>{class a{_viewContainerRef=m(ue);_closestTabGroup=m(_n,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new pt;position=null;origin=null;isActive=!1;constructor(){m(Mt).load(Pt)}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Qe(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=v({type:a,selectors:[["mat-tab"]],contentQueries:function(e,n,i){if(e&1&&tt(i,Kn,5)(i,Yt,7,ft),e&2){let d;y(d=C())&&(n.templateLabel=d.first),y(d=C())&&(n._explicitContent=d.first)}},viewQuery:function(e,n){if(e&1&&q(ft,7),e&2){let i;y(i=C())&&(n._implicitContent=i.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(e,n){e&2&&E("id",null)},inputs:{disabled:[2,"disabled","disabled",h],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[U([{provide:gn,useExisting:a}]),be],ngContentSelectors:Kt,decls:1,vars:0,template:function(e,n){e&1&&(X(),ge(0,Bn,1,0,"ng-template"))},encapsulation:2})}return a})(),Wt="mdc-tab-indicator--active",pn="mdc-tab-indicator--no-transition",jt=class{_items;_currentItem;constructor(c){this._items=c}hide(){this._items.forEach(c=>c.deactivateInkBar()),this._currentItem=void 0}alignToElement(c){let t=this._items.find(n=>n.elementRef.nativeElement===c),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}},Yn=(()=>{class a{_elementRef=m(L);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(Wt);return}let n=e.getBoundingClientRect(),i=t.width/n.width,d=t.left-n.left;e.classList.add(pn),this._inkBarContentElement.style.setProperty("transform",`translateX(${d}px) scaleX(${i})`),e.getBoundingClientRect(),e.classList.remove(pn),e.classList.add(Wt),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Wt)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement("span"),n=this._inkBarContentElement=t.createElement("span");e.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement)}static \u0275fac=function(e){return new(e||a)};static \u0275dir=A({type:a,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",h]}})}return a})();var fn=(()=>{class a extends Yn{elementRef=m(L);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let t;return function(n){return(t||(t=_t(a)))(n||a)}})();static \u0275dir=A({type:a,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(e,n){e&2&&(E("aria-disabled",!!n.disabled),w("mat-mdc-tab-disabled",n.disabled))},inputs:{disabled:[2,"disabled","disabled",h]},features:[st]})}return a})(),un={passive:!0},Xn=650,Jn=100,ta=(()=>{class a{_elementRef=m(L);_changeDetectorRef=m(Z);_viewportRuler=m(Pe);_dir=m(mt,{optional:!0});_ngZone=m(rt);_platform=m(Ht);_sharedResizeObserver=m(je);_injector=m(At);_renderer=m(Ft);_animationsDisabled=et();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new pt;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new pt;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new I;indexFocused=new I;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),un),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),un))}ngAfterContentInit(){let t=this._dir?this._dir.change:Q("ltr"),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(se(32),ot(this._destroyed)),n=this._viewportRuler.change(150).pipe(ot(this._destroyed)),i=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Se(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Y(i,{injector:this._injector}),ut(t,n,e,this._items.changes,this._itemsResized()).pipe(ot(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),i()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(d=>{this.indexFocused.emit(d),this._setTabFocus(d)})}_itemsResized(){return typeof ResizeObserver!="function"?ae:this._items.changes.pipe(ht(this._items),de(t=>new ne(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(i=>e.next(i));return t.forEach(i=>n.observe(i.elementRef.nativeElement)),()=>{n.disconnect()}}))),le(1),re(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!St(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t=="before"?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:i,offsetWidth:d}=e.elementRef.nativeElement,_,G;this._getLayoutDirection()=="ltr"?(_=i,G=_+d):(G=this._tabListInner.nativeElement.offsetWidth-i,_=G-d);let Ot=this.scrollDistance,ee=this.scrollDistance+n;_<Ot?this.scrollDistance-=Ot-_:G>ee&&(this.scrollDistance+=Math.min(G-ee,_-Ot))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let t=this._tabListInner.nativeElement.scrollWidth,e=this._elementRef.nativeElement.offsetWidth,n=t-e>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,e=this._tabListContainer.nativeElement.offsetWidth;return t-e||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),oe(Xn,Jn).pipe(ot(ut(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:i}=this._scrollHeader(t);(i===0||i>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static \u0275fac=function(e){return new(e||a)};static \u0275dir=A({type:a,inputs:{disablePagination:[2,"disablePagination","disablePagination",h],selectedIndex:[2,"selectedIndex","selectedIndex",wt]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return a})(),ea=(()=>{class a extends ta{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new jt(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=_t(a)))(n||a)}})();static \u0275cmp=v({type:a,selectors:[["mat-tab-header"]],contentQueries:function(e,n,i){if(e&1&&tt(i,fn,4),e&2){let d;y(d=C())&&(n._items=d)}},viewQuery:function(e,n){if(e&1&&q(Rn,7)(Ln,7)(On,7)(An,5)(Fn,5),e&2){let i;y(i=C())&&(n._tabListContainer=i.first),y(i=C())&&(n._tabList=i.first),y(i=C())&&(n._tabListInner=i.first),y(i=C())&&(n._nextPaginator=i.first),y(i=C())&&(n._previousPaginator=i.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(e,n){e&2&&w("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",h]},features:[st],ngContentSelectors:Kt,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(e,n){e&1&&(X(),o(0,"div",5,0),f("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(d){return n._handlePaginatorPress("before",d)})("touchend",function(){return n._stopInterval()}),u(2,"div",6),r(),o(3,"div",7,1),f("keydown",function(d){return n._handleKeydown(d)}),o(5,"div",8,2),f("cdkObserveContent",function(){return n._onContentChanges()}),o(7,"div",9,3),J(9),r()()(),o(10,"div",10,4),f("mousedown",function(d){return n._handlePaginatorPress("after",d)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),u(12,"div",6),r()),e&2&&(w("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),b("matRippleDisabled",n._disableScrollBefore||n.disableRipple),s(3),w("_mat-animation-noopable",n._animationsDisabled),s(2),E("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),s(5),w("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),b("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[bt,Me],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return a})(),na=new O("MAT_TABS_CONFIG"),hn=(()=>{class a extends Vt{_host=m(qt);_ngZone=m(rt);_centeringSub=V.EMPTY;_leavingSub=V.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(ht(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(e){return new(e||a)};static \u0275dir=A({type:a,selectors:[["","matTabBodyHost",""]],features:[st]})}return a})(),qt=(()=>{class a{_elementRef=m(L);_dir=m(mt,{optional:!0});_ngZone=m(rt);_injector=m(At);_renderer=m(Ft);_diAnimationsDisabled=et();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=V.EMPTY;_position;_previousPosition;_onCentering=new I;_beforeCentering=new I;_afterLeavingCenter=new I;_onCentered=new I(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=m(Z);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Y(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(t,"transitionend",e),this._renderer.listen(t,"transitioncancel",e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position==="center";this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",t)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t=="ltr"?"left":"right":this._positionIndex>0?this._position=t=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Y(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=v({type:a,selectors:[["mat-tab-body"]],viewQuery:function(e,n){if(e&1&&q(hn,5)(Nn,5),e&2){let i;y(i=C())&&(n._portalHost=i.first),y(i=C())&&(n._contentElement=i.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(e,n){e&2&&E("inert",n._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(e,n){e&1&&(o(0,"div",1,0),M(2,zn,0,0,"ng-template",2),r()),e&2&&w("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center")},dependencies:[hn,De],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return a})(),vn=(()=>{class a{_elementRef=m(L);_changeDetectorRef=m(Z);_ngZone=m(rt);_tabsSubscription=V.EMPTY;_tabLabelSubscription=V.EMPTY;_tabBodySubscription=V.EMPTY;_diAnimationsDisabled=et();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new pe;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(t){let e=t+"";this._animationDuration=/^\d+$/.test(e)?t+"ms":e}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new I;focusChange=new I;animationDone=new I;selectedTabChange=new I(!0);_groupId;_isServer=!m(Ht).isBrowser;constructor(){let t=m(na,{optional:!0});this._groupId=m(ct).getId("mat-tab-group-"),this.animationDuration=t&&t.animationDuration?t.animationDuration:"500ms",this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,i)=>n.isActive=i===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let i=0;i<e.length;i++)if(e[i].isActive){this._indexToSelect=this._selectedIndex=i,this._lastFocusedTabIndex=null,n=e[i];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(ht(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new $t;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=ut(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px")}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n)}_getTabIndex(t){let e=this._lastFocusedTabIndex??this.selectedIndex;return t===e?0:-1}_tabFocusChanged(t,e){t&&t!=="mouse"&&t!=="touch"&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=v({type:a,selectors:[["mat-tab-group"]],contentQueries:function(e,n,i){if(e&1&&tt(i,Xt,5),e&2){let d;y(d=C())&&(n._allTabs=d)}},viewQuery:function(e,n){if(e&1&&q(Hn,5)(Gn,5)(qt,5),e&2){let i;y(i=C())&&(n._tabBodyWrapper=i.first),y(i=C())&&(n._tabHeader=i.first),y(i=C())&&(n._tabBodies=i)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(e,n){e&2&&(E("mat-align-tabs",n.alignTabs),xt("mat-"+(n.color||"primary")),fe("--mat-tab-animation-duration",n.animationDuration),w("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",h],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",h],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",h],selectedIndex:[2,"selectedIndex","selectedIndex",wt],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",wt],disablePagination:[2,"disablePagination","disablePagination",h],disableRipple:[2,"disableRipple","disableRipple",h],preserveContent:[2,"preserveContent","preserveContent",h],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[U([{provide:_n,useExisting:a}])],ngContentSelectors:Kt,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(e,n){e&1&&(X(),o(0,"mat-tab-header",3,0),f("indexFocused",function(d){return n._focusChanged(d)})("selectFocusedIndex",function(d){return n.selectedIndex=d}),W(2,jn,8,17,"div",4,Nt),r(),x(4,qn,1,0),o(5,"div",5,1),W(7,$n,1,10,"mat-tab-body",6,Nt),r()),e&2&&(b("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),_e("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),s(2),j(n._tabs),s(2),k(n._isServer?4:-1),s(),w("_mat-animation-noopable",n._animationsDisabled()),s(2),j(n._tabs))},dependencies:[ea,fn,Ie,bt,Vt,qt],styles:[`.mdc-tab {
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
`],encapsulation:2})}return a})(),$t=class{index;tab};var yn=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=vt({type:a});static \u0275inj=gt({imports:[Dt]})}return a})();function ia(a,c){if(a&1&&u(0,"img",2),a&2){let t=p();b("src",t.profile().logo,K)("alt",t.profile().name+" logo")}}function oa(a,c){a&1&&(o(0,"div",3)(1,"mat-icon"),l(2,"business"),r()())}function ra(a,c){if(a&1&&(o(0,"div",6)(1,"mat-icon"),l(2,"language"),r(),o(3,"span",7),l(4,"Website"),r(),o(5,"a",10),l(6),T(7,"slice"),r()()),a&2){let t=p();s(5),b("href",t.profile().weburl,K),s(),$(" ",dt(7,2,t.profile().weburl,0,40)," ")}}var xn=(()=>{class a{constructor(){this.profile=B.required()}static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275cmp=v({type:a,selectors:[["app-company-profile"]],inputs:{profile:[1,"profile"]},decls:48,vars:11,consts:[["appearance","outlined",1,"profile-card"],[1,"profile-card__header"],[1,"profile-card__logo",3,"src","alt"],[1,"profile-card__logo-placeholder"],[1,"profile-card__title"],[1,"profile-card__details"],[1,"detail-row"],[1,"detail-row__label"],[1,"detail-row__value"],[1,"detail-row__value","price"],["target","_blank","rel","noopener",1,"detail-row__value","detail-row__link",3,"href"]],template:function(e,n){e&1&&(o(0,"mat-card",0)(1,"mat-card-content")(2,"div",1),x(3,ia,1,2,"img",2)(4,oa,3,0,"div",3),o(5,"div",4)(6,"h2"),l(7),r(),o(8,"mat-chip"),l(9),r()()(),o(10,"div",5)(11,"div",6)(12,"mat-icon"),l(13,"category"),r(),o(14,"span",7),l(15,"Industry"),r(),o(16,"span",8),l(17),r()(),o(18,"div",6)(19,"mat-icon"),l(20,"public"),r(),o(21,"span",7),l(22,"Country"),r(),o(23,"span",8),l(24),r()(),o(25,"div",6)(26,"mat-icon"),l(27,"account_balance"),r(),o(28,"span",7),l(29,"Exchange"),r(),o(30,"span",8),l(31),r()(),o(32,"div",6)(33,"mat-icon"),l(34,"pie_chart"),r(),o(35,"span",7),l(36,"Market Cap"),r(),o(37,"span",9),l(38),T(39,"marketCap"),r()(),o(40,"div",6)(41,"mat-icon"),l(42,"event"),r(),o(43,"span",7),l(44,"IPO Date"),r(),o(45,"span",8),l(46),r()(),x(47,ra,8,6,"div",6),r()()()),e&2&&(s(3),k(n.profile().logo?3:4),s(4),g(n.profile().name),s(2),g(n.profile().ticker),s(8),g(n.profile().finnhubIndustry),s(7),g(n.profile().country),s(7),g(n.profile().exchange),s(7),g(Tt(39,9,n.profile().marketCapitalization)),s(8),g(n.profile().ipo),s(),k(n.profile().weburl?47:-1))},dependencies:[at,nt,Ue,z,N,Ke,Ze,It,Xe],styles:[".profile-card__header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;margin-bottom:24px}.profile-card__logo[_ngcontent-%COMP%]{width:56px;height:56px;border-radius:var(--radius-md);object-fit:contain;background:var(--mat-sys-surface-variant);padding:4px}.profile-card__logo-placeholder[_ngcontent-%COMP%]{width:56px;height:56px;border-radius:var(--radius-md);background:var(--mat-sys-surface-variant);display:flex;align-items:center;justify-content:center}.profile-card__title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:600;margin-bottom:4px}.profile-card__details[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.detail-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.detail-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--mat-sys-outline);font-size:20px;width:20px;height:20px}.detail-row__label[_ngcontent-%COMP%]{min-width:100px;color:var(--color-neutral);font-size:.85rem}.detail-row__value[_ngcontent-%COMP%]{font-weight:500}.detail-row__link[_ngcontent-%COMP%]{color:var(--mat-sys-primary);text-decoration:none}.detail-row__link[_ngcontent-%COMP%]:hover{text-decoration:underline}"]})}}return a})();var kn=(()=>{class a{constructor(){this.quote=B.required()}static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275cmp=v({type:a,selectors:[["app-key-metrics"]],inputs:{quote:[1,"quote"]},decls:35,vars:21,consts:[[1,"metrics-grid"],["appearance","outlined",1,"metric-card","metric-card--highlight"],[1,"metric-card__label"],[1,"metric-card__value","price"],["appearance","outlined",1,"metric-card"],[3,"value"]],template:function(e,n){e&1&&(o(0,"div",0)(1,"mat-card",1)(2,"span",2),l(3,"Current Price"),r(),o(4,"span",3),l(5),T(6,"currency"),r()(),o(7,"mat-card",4)(8,"span",2),l(9,"Change Today"),r(),u(10,"app-trend-indicator",5),r(),o(11,"mat-card",4)(12,"span",2),l(13,"Open"),r(),o(14,"span",3),l(15),T(16,"currency"),r()(),o(17,"mat-card",4)(18,"span",2),l(19,"High"),r(),o(20,"span",3),l(21),T(22,"currency"),r()(),o(23,"mat-card",4)(24,"span",2),l(25,"Low"),r(),o(26,"span",3),l(27),T(28,"currency"),r()(),o(29,"mat-card",4)(30,"span",2),l(31,"Previous Close"),r(),o(32,"span",3),l(33),T(34,"currency"),r()()()),e&2&&(s(5),g(R(6,6,n.quote().c,"USD")),s(5),b("value",n.quote().dp),s(5),g(R(16,9,n.quote().o,"USD")),s(6),g(R(22,12,n.quote().h,"USD")),s(6),g(R(28,15,n.quote().l,"USD")),s(6),g(R(34,18,n.quote().pc,"USD")))},dependencies:[at,nt,Ye,Te],styles:[".metrics-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px}.metric-card[_ngcontent-%COMP%]{padding:16px;display:flex;flex-direction:column;gap:8px}.metric-card--highlight[_ngcontent-%COMP%]{grid-column:span 2}.metric-card--highlight[_ngcontent-%COMP%]   .metric-card__value[_ngcontent-%COMP%]{font-size:1.75rem}.metric-card__label[_ngcontent-%COMP%]{font-size:.75rem;color:var(--color-neutral);text-transform:uppercase;letter-spacing:.05em}.metric-card__value[_ngcontent-%COMP%]{font-size:1.1rem}@media(max-width:600px){.metrics-grid[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}"]})}}return a})();var ma=["button"],ba=["*"];function pa(a,c){if(a&1&&(o(0,"div",2),u(1,"mat-pseudo-checkbox",6),r()),a&2){let t=p();s(),b("disabled",t.disabled)}}var Tn=new O("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),wn=new O("MatButtonToggleGroup"),ua={provide:Be,useExisting:ce(()=>te),multi:!0},Rt=class{source;value;constructor(c,t){this.source=c,this.value=t}},te=(()=>{class a{_changeDetector=m(Z);_dir=m(mt,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(t){this._name=t,this._markButtonsForCheck()}_name=m(ct).getId("mat-button-toggle-group-");vertical=!1;get value(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t.map(e=>e.value):t[0]?t[0].value:void 0}set value(t){this._setSelectionByValue(t),this.valueChange.emit(this.value)}valueChange=new I;get selected(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t:t[0]||null}get multiple(){return this._multiple}set multiple(t){this._multiple=t,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new I;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(t){this._hideMultipleSelectionIndicator=t,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let t=m(Tn,{optional:!0});this.appearance=t&&t.appearance?t.appearance:"standard",this._hideSingleSelectionIndicator=t?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=t?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new Ee(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(t=>t.checked)),this.multiple||this._initializeTabIndex()}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_keydown(t){if(this.multiple||this.disabled||St(t))return;let n=t.target.id,i=this._buttonToggles.toArray().findIndex(_=>_.buttonId===n),d=null;switch(t.keyCode){case 32:case 13:d=this._buttonToggles.get(i)||null;break;case 38:d=this._getNextButton(i,-1);break;case 37:d=this._getNextButton(i,this.dir==="ltr"?-1:1);break;case 40:d=this._getNextButton(i,1);break;case 39:d=this._getNextButton(i,this.dir==="ltr"?1:-1);break;default:return}d&&(t.preventDefault(),d._onButtonClick(),d.focus())}_emitChangeEvent(t){let e=new Rt(t,this.value);this._rawValue=e.value,this._controlValueAccessorChangeFn(e.value),this.change.emit(e)}_syncButtonToggle(t,e,n=!1,i=!1){!this.multiple&&this.selected&&!t.checked&&(this.selected.checked=!1),this._selectionModel?e?this._selectionModel.select(t):this._selectionModel.deselect(t):i=!0,i?Promise.resolve().then(()=>this._updateModelValue(t,n)):this._updateModelValue(t,n)}_isSelected(t){return this._selectionModel&&this._selectionModel.isSelected(t)}_isPrechecked(t){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(e=>t.value!=null&&e===t.value):t.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(t=>{t.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let t=0;t<this._buttonToggles.length;t++){let e=this._buttonToggles.get(t);if(!e.disabled){e.tabIndex=0;break}}}_getNextButton(t,e){let n=this._buttonToggles;for(let i=1;i<=n.length;i++){let d=(t+e*i+n.length)%n.length,_=n.get(d);if(_&&!_.disabled)return _}return null}_setSelectionByValue(t){if(this._rawValue=t,!this._buttonToggles)return;let e=this._buttonToggles.toArray();if(this.multiple&&t?(Array.isArray(t),this._clearSelection(),t.forEach(n=>this._selectValue(n,e))):(this._clearSelection(),this._selectValue(t,e)),!this.multiple&&e.every(n=>n.tabIndex===-1)){for(let n of e)if(!n.disabled){n.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(t=>{t.checked=!1,this.multiple||(t.tabIndex=-1)})}_selectValue(t,e){for(let n of e)if(n.value===t){n.checked=!0,this._selectionModel.select(n),this.multiple||(n.tabIndex=0);break}}_updateModelValue(t,e){e&&this._emitChangeEvent(t),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(t=>t._markForCheck())}static \u0275fac=function(e){return new(e||a)};static \u0275dir=A({type:a,selectors:[["mat-button-toggle-group"]],contentQueries:function(e,n,i){if(e&1&&tt(i,Lt,5),e&2){let d;y(d=C())&&(n._buttonToggles=d)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(e,n){e&1&&f("keydown",function(d){return n._keydown(d)}),e&2&&(E("role",n.multiple?"group":"radiogroup")("aria-disabled",n.disabled),w("mat-button-toggle-vertical",n.vertical)("mat-button-toggle-group-appearance-standard",n.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",h],value:"value",multiple:[2,"multiple","multiple",h],disabled:[2,"disabled","disabled",h],disabledInteractive:[2,"disabledInteractive","disabledInteractive",h],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",h],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",h]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[U([ua,{provide:wn,useExisting:a}])]})}return a})(),Lt=(()=>{class a{_changeDetectorRef=m(Z);_elementRef=m(L);_focusMonitor=m(Gt);_idGenerator=m(ct);_animationDisabled=et();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(t){this._tabIndex.set(t)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(t){this._appearance=t}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(t){t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(t){this._disabled=t}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t}_disabledInteractive;change=new I;constructor(){m(Mt).load(Pt);let t=m(wn,{optional:!0}),e=m(new zt("tabindex"),{optional:!0})||"",n=m(Tn,{optional:!0});this._tabIndex=P(parseInt(e)||0),this.buttonToggleGroup=t,this._appearance=n&&n.appearance?n.appearance:"standard",this._disabledInteractive=n?.disabledInteractive??!1}ngOnInit(){let t=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),t&&(t._isPrechecked(this)?this.checked=!0:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,!1,!1,!0)}focus(t){this._buttonElement.nativeElement.focus(t)}_onButtonClick(){if(this.disabled)return;let t=this.isSingleSelector()?!0:!this._checked;if(t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let e=this.buttonToggleGroup._buttonToggles.find(n=>n.tabIndex===0);e&&(e.tabIndex=-1),this.tabIndex=0}this.change.emit(new Rt(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=v({type:a,selectors:[["mat-button-toggle"]],viewQuery:function(e,n){if(e&1&&q(ma,5),e&2){let i;y(i=C())&&(n._buttonElement=i.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(e,n){e&1&&f("focus",function(){return n.focus()}),e&2&&(E("aria-label",null)("aria-labelledby",null)("id",n.id)("name",null),w("mat-button-toggle-standalone",!n.buttonToggleGroup)("mat-button-toggle-checked",n.checked)("mat-button-toggle-disabled",n.disabled)("mat-button-toggle-disabled-interactive",n.disabledInteractive)("mat-button-toggle-appearance-standard",n.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",h],appearance:"appearance",checked:[2,"checked","checked",h],disabled:[2,"disabled","disabled",h],disabledInteractive:[2,"disabledInteractive","disabledInteractive",h]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:ba,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(e,n){if(e&1&&(X(),o(0,"button",1,0),f("click",function(){return n._onButtonClick()}),x(2,pa,2,1,"div",2),o(3,"span",3),J(4),r()(),u(5,"span",4)(6,"span",5)),e&2){let i=lt(1);b("id",n.buttonId)("disabled",n.disabled&&!n.disabledInteractive||null),E("role",n.isSingleSelector()?"radio":"button")("tabindex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("aria-pressed",n.isSingleSelector()?null:n.checked)("aria-checked",n.isSingleSelector()?n.checked:null)("name",n._getButtonName())("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),s(2),k(n.buttonToggleGroup&&(!n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideSingleSelectionIndicator||n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),s(4),b("matRippleTrigger",i)("matRippleDisabled",n.disableRipple||n.disabled)}},dependencies:[bt,Oe],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2,changeDetection:0})}return a})(),In=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=vt({type:a});static \u0275inj=gt({imports:[Ae,Lt,Dt]})}return a})();var _a=(a,c)=>c.label;function fa(a,c){if(a&1&&(o(0,"mat-button-toggle",5),l(1),r()),a&2){let t=c.$implicit;b("value",t),s(),g(t.label)}}function va(a,c){a&1&&(o(0,"div",11),u(1,"mat-spinner",12),r())}var Mn=(()=>{class a{constructor(){this.symbol=B.required(),this.elRef=m(L),this.themeService=m(Ve),this.twelveDataApi=m(tn),this.chart=null,this.series=null,this.resizeObserver=null,this.dataSubscription=null,this.chartType="area",this.chartLoading=P(!1),this.timeframes=[{label:"1D",interval:"5min",outputsize:78,isIntraday:!0},{label:"1W",interval:"15min",outputsize:140,isIntraday:!0},{label:"1M",interval:"1day",outputsize:22,isIntraday:!1},{label:"3M",interval:"1day",outputsize:66,isIntraday:!1},{label:"6M",interval:"1day",outputsize:130,isIntraday:!1},{label:"1Y",interval:"1day",outputsize:252,isIntraday:!1}],this.selectedTimeframe=P(this.timeframes[3]),Y(()=>{this.initChart()}),me(()=>{this.themeService.isDark(),this.chart&&this.applyTheme()})}onTimeframeToggle(t){this.selectedTimeframe.set(t.value),this.loadChartData()}loadChartData(){this.dataSubscription&&this.dataSubscription.unsubscribe(),this.chartLoading.set(!0);let t=this.selectedTimeframe();this.dataSubscription=this.twelveDataApi.getTimeSeries(this.symbol(),t.interval,t.outputsize).subscribe({next:e=>{this.chartLoading.set(!1),e.length>0&&this.chart&&(this.updateChartOptions(t.isIntraday),this.rebuildSeries(e))},error:()=>{this.chartLoading.set(!1)}})}updateChartOptions(t){this.chart&&this.chart.applyOptions({timeScale:{timeVisible:t,secondsVisible:!1}})}initChart(){let t=this.elRef.nativeElement.querySelector(".chart-card__container");if(!t)return;this.chart=Je(t,{width:t.clientWidth,height:400,layout:{textColor:this.themeService.isDark()?"#d1d5db":"#374151",background:{type:Qt.Solid,color:"transparent"}},grid:{vertLines:{color:this.themeService.isDark()?"#374151":"#e5e7eb"},horzLines:{color:this.themeService.isDark()?"#374151":"#e5e7eb"}},crosshair:{mode:0},rightPriceScale:{borderColor:this.themeService.isDark()?"#374151":"#e5e7eb"},timeScale:{borderColor:this.themeService.isDark()?"#374151":"#e5e7eb",timeVisible:this.selectedTimeframe().isIntraday}}),this.loadChartData();let e=t.clientWidth;this.resizeObserver=new ResizeObserver(n=>{if(this.chart&&n[0]){let i=n[0].contentRect.width;this.chart.applyOptions({width:i}),e===0&&i>0&&this.chart.timeScale().fitContent(),e=i}}),this.resizeObserver.observe(t)}rebuildSeries(t){if(!this.chart)return;this.series&&(this.chart.removeSeries(this.series),this.series=null);let e=t;!e||e.length===0||(this.chartType==="candlestick"?(this.series=this.chart.addCandlestickSeries({upColor:"#16a34a",downColor:"#dc2626",borderUpColor:"#16a34a",borderDownColor:"#dc2626",wickUpColor:"#16a34a",wickDownColor:"#dc2626"}),this.series?.setData(e)):(this.series=this.chart.addAreaSeries({lineColor:"#3b82f6",topColor:"rgba(59, 130, 246, 0.4)",bottomColor:"rgba(59, 130, 246, 0.0)",lineWidth:2}),this.series?.setData(e.map(n=>({time:n.time,value:n.close})))),this.chart.timeScale().fitContent())}applyTheme(){if(!this.chart)return;let t=this.themeService.isDark();this.chart.applyOptions({layout:{textColor:t?"#d1d5db":"#374151",background:{type:Qt.Solid,color:"transparent"}},grid:{vertLines:{color:t?"#374151":"#e5e7eb"},horzLines:{color:t?"#374151":"#e5e7eb"}},rightPriceScale:{borderColor:t?"#374151":"#e5e7eb"},timeScale:{borderColor:t?"#374151":"#e5e7eb"}})}ngOnDestroy(){this.resizeObserver?.disconnect(),this.dataSubscription?.unsubscribe(),this.chart?.remove(),this.chart=null,this.series=null}static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275cmp=v({type:a,selectors:[["app-price-chart"]],inputs:{symbol:[1,"symbol"]},decls:17,vars:3,consts:[["chartContainer",""],["appearance","outlined",1,"chart-card"],[1,"chart-card__header"],[1,"chart-card__controls"],[1,"timeframe-group",3,"change","value"],[3,"value"],[3,"valueChange","change","value"],["value","area"],["value","candlestick"],[1,"chart-card__container-wrapper"],[1,"chart-card__container"],[1,"chart-card__loader"],["diameter","40"]],template:function(e,n){if(e&1){let i=F();o(0,"mat-card",1)(1,"div",2)(2,"div",3)(3,"mat-button-toggle-group",4),f("change",function(_){return n.onTimeframeToggle(_)}),W(4,fa,2,2,"mat-button-toggle",5,_a),r(),o(6,"mat-button-toggle-group",6),Ce("valueChange",function(_){return S(i),ye(n.chartType,_)||(n.chartType=_),D(_)}),f("change",function(){return n.loadChartData()}),o(7,"mat-button-toggle",7)(8,"mat-icon"),l(9,"show_chart"),r()(),o(10,"mat-button-toggle",8)(11,"mat-icon"),l(12,"candlestick_chart"),r()()()()(),o(13,"div",9),u(14,"div",10,0),x(16,va,2,0,"div",11),r()()}e&2&&(s(3),b("value",n.selectedTimeframe()),s(),j(n.timeframes),s(2),ve("value",n.chartType),s(10),k(n.chartLoading()?16:-1))},dependencies:[In,te,Lt,at,nt,z,N,Bt,Et],styles:[".chart-card[_ngcontent-%COMP%]{padding:16px;position:relative;overflow:hidden}.chart-card__header[_ngcontent-%COMP%]{margin-bottom:16px}.chart-card__controls[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px}.timeframe-group[_ngcontent-%COMP%]{box-shadow:none}.chart-card__container-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;height:400px}.chart-card__container[_ngcontent-%COMP%]{width:100%;height:100%}.chart-card__loader[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background-color:color-mix(in srgb,var(--mat-sys-surface) 60%,transparent);-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);z-index:10}@media(max-width:600px){.chart-card__controls[_ngcontent-%COMP%]{justify-content:center}}"]})}}return a})();var Sn=(()=>{class a{transform(t){return new Intl.DateTimeFormat("en-US",{month:"long"}).format(new Date(2e3,t-1))}static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275pipe=he({name:"monthName",type:a,pure:!0})}}return a})();function ya(a,c){a&1&&(o(0,"th",9),l(1,"Month"),r())}function Ca(a,c){if(a&1&&(o(0,"td",10),l(1),T(2,"monthName"),r()),a&2){let t=c.$implicit;s(),kt(" ",Tt(2,2,t.month)," ",t.year," ")}}function xa(a,c){a&1&&(o(0,"th",9),l(1,"Change"),r())}function ka(a,c){if(a&1&&(o(0,"td",10)(1,"span",11),l(2),T(3,"number"),r()()),a&2){let t=c.$implicit;s(),w("positive",t.change>0)("negative",t.change<0),s(),kt(" ",t.change>0?"+":"","",R(3,6,t.change,"1.0-0")," ")}}function Ta(a,c){a&1&&(o(0,"th",9),l(1,"MSPR"),r())}function wa(a,c){if(a&1&&(o(0,"td",10)(1,"span",11),l(2),T(3,"number"),r()()),a&2){let t=c.$implicit;s(),w("positive",t.mspr>0)("negative",t.mspr<0),s(),kt(" ",t.mspr>0?"+":"","",R(3,6,t.mspr,"1.2-2")," ")}}function Ia(a,c){a&1&&u(0,"tr",12)}function Ma(a,c){a&1&&u(0,"tr",13)}function Sa(a,c){if(a&1&&(o(0,"table",0),yt(1,2),M(2,ya,2,0,"th",3)(3,Ca,3,4,"td",4),Ct(),yt(4,5),M(5,xa,2,0,"th",3)(6,ka,4,9,"td",4),Ct(),yt(7,6),M(8,Ta,2,0,"th",3)(9,wa,4,9,"td",4),Ct(),M(10,Ia,1,0,"tr",7)(11,Ma,1,0,"tr",8),r()),a&2){let t=p();b("dataSource",t.sentiment()),s(10),b("matHeaderRowDef",t.displayedColumns),s(),b("matRowDefColumns",t.displayedColumns)}}function Da(a,c){a&1&&(o(0,"p",1),l(1,"No insider sentiment data available for this period."),r())}var Dn=(()=>{class a{constructor(){this.sentiment=B.required(),this.displayedColumns=["month","change","mspr"]}static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275cmp=v({type:a,selectors:[["app-insider-sentiment"]],inputs:{sentiment:[1,"sentiment"]},decls:2,vars:1,consts:[["mat-table","",1,"sentiment-table",3,"dataSource"],[1,"no-data"],["matColumnDef","month"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","change"],["matColumnDef","mspr"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[1,"price"],["mat-header-row",""],["mat-row",""]],template:function(e,n){e&1&&x(0,Sa,12,3,"table",0)(1,Da,2,0,"p",1),e&2&&k(n.sentiment().length>0?0:1)},dependencies:[bn,en,an,ln,on,nn,dn,rn,sn,cn,mn,ke,Sn],styles:[".sentiment-table[_ngcontent-%COMP%]{width:100%}.no-data[_ngcontent-%COMP%]{text-align:center;padding:32px;color:var(--color-neutral)}"]})}}return a})();var Pa=(a,c)=>c.id;function Ea(a,c){if(a&1){let t=F();o(0,"img",12),f("error",function(n){S(t);let i=p(3);return D(i.onImageError(n))}),r()}if(a&2){let t=p().$implicit;b("src",t.image,K)("alt",t.headline)}}function Ba(a,c){a&1&&(o(0,"div",5)(1,"mat-icon"),l(2,"article"),r()())}function Ra(a,c){if(a&1&&(o(0,"a",2)(1,"div",3),x(2,Ea,1,2,"img",4)(3,Ba,3,0,"div",5),o(4,"div",6)(5,"h4",7),l(6),r(),o(7,"div",8)(8,"span",9),l(9),r(),o(10,"span",10),l(11),T(12,"date"),r()(),o(13,"p",11),l(14),T(15,"slice"),r()()()(),u(16,"mat-divider")),a&2){let t=c.$implicit;b("href",t.url,K),s(2),k(t.image?2:3),s(4),g(t.headline),s(3),g(t.source),s(2),g(R(12,6,t.datetime*1e3,"MMM d, y \xB7 h:mm a")),s(3),$(" ",dt(15,9,t.summary,0,150),"... ")}}function La(a,c){if(a&1&&(o(0,"mat-list",0),W(1,Ra,17,13,null,null,Pa),T(3,"slice"),r()),a&2){let t=p();s(),j(dt(3,0,t.news(),0,15))}}function Oa(a,c){a&1&&(o(0,"p",1),l(1,"No recent news available."),r())}var Pn=(()=>{class a{constructor(){this.news=B.required()}onImageError(t){t.target.style.display="none"}static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275cmp=v({type:a,selectors:[["app-news-feed"]],inputs:{news:[1,"news"]},decls:2,vars:1,consts:[[1,"news-list"],[1,"no-data"],["mat-list-item","","target","_blank","rel","noopener",1,"news-item",3,"href"],[1,"news-item__content"],[1,"news-item__image",3,"src","alt"],[1,"news-item__image-placeholder"],[1,"news-item__text"],[1,"news-item__headline"],[1,"news-item__meta"],[1,"news-item__source"],[1,"news-item__date"],[1,"news-item__summary"],[1,"news-item__image",3,"error","src","alt"]],template:function(e,n){e&1&&x(0,La,4,4,"mat-list",0)(1,Oa,2,0,"p",1),e&2&&k(n.news().length>0?0:1)},dependencies:[ze,Fe,Ne,Re,z,N,Le,xe,It],styles:[".news-list[_ngcontent-%COMP%]{padding:0}.news-item[_ngcontent-%COMP%]{text-decoration:none;color:inherit;height:auto!important;padding:16px 0!important}.news-item__content[_ngcontent-%COMP%]{display:flex;gap:16px;width:100%}.news-item__image[_ngcontent-%COMP%]{width:80px;height:60px;object-fit:cover;border-radius:var(--radius-sm);flex-shrink:0}.news-item__image-placeholder[_ngcontent-%COMP%]{width:80px;height:60px;border-radius:var(--radius-sm);background:var(--mat-sys-surface-variant);display:flex;align-items:center;justify-content:center;flex-shrink:0}.news-item__text[_ngcontent-%COMP%]{flex:1;min-width:0}.news-item__headline[_ngcontent-%COMP%]{font-size:.95rem;font-weight:600;line-height:1.3;margin-bottom:4px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.news-item__meta[_ngcontent-%COMP%]{display:flex;gap:8px;font-size:.75rem;color:var(--color-neutral);margin-bottom:4px}.news-item__source[_ngcontent-%COMP%]{font-weight:500;color:var(--mat-sys-primary)}.news-item__summary[_ngcontent-%COMP%]{font-size:.8rem;color:var(--color-neutral);line-height:1.4}.no-data[_ngcontent-%COMP%]{text-align:center;padding:32px;color:var(--color-neutral)}"]})}}return a})();function Aa(a,c){if(a&1&&(o(0,"div",2),u(1,"mat-spinner",5),o(2,"p"),l(3),r()()),a&2){let t=p();s(3),$("Loading ",t.symbol()," data...")}}function Fa(a,c){if(a&1&&(o(0,"div",11),u(1,"app-company-profile",12)(2,"app-key-metrics",13),r()),a&2){let t=p(2);s(),b("profile",t.profile()),s(),b("quote",t.quote())}}function Na(a,c){if(a&1&&(o(0,"div",11),u(1,"app-price-chart",14),r()),a&2){let t=p(2);s(),b("symbol",t.symbol())}}function za(a,c){if(a&1&&(o(0,"div",11),u(1,"app-insider-sentiment",15),r()),a&2){let t=p(2);s(),b("sentiment",t.sentiment())}}function Ha(a,c){if(a&1&&(o(0,"div",11),u(1,"app-news-feed",16),r()),a&2){let t=p(2);s(),b("news",t.news())}}function Ga(a,c){a&1&&(o(0,"mat-tab-group",3)(1,"mat-tab",6),M(2,Fa,3,2,"ng-template",7),r(),o(3,"mat-tab",8),M(4,Na,2,1,"ng-template",7),r(),o(5,"mat-tab",9),M(6,za,2,1,"ng-template",7),r(),o(7,"mat-tab",10),M(8,Ha,2,1,"ng-template",7),r()())}function Va(a,c){if(a&1){let t=F();o(0,"div",4)(1,"mat-icon"),l(2,"error_outline"),r(),o(3,"h3"),l(4),r(),o(5,"p"),l(6,"The stock symbol may be invalid or the service is unavailable."),r(),o(7,"button",17),f("click",function(){S(t);let n=p();return D(n.goBack())}),l(8," Return to Dashboard "),r()()}if(a&2){let t=p();s(4),$("Unable to load data for ",t.symbol())}}var En=(()=>{class a{constructor(){this.symbol=B.required(),this.api=m(qe),this.router=m(we),this.watchlistStore=m($e),this.loading=P(!0),this.profile=P(null),this.quote=P(null),this.sentiment=P([]),this.news=P([])}ngOnInit(){this.loadData()}goBack(){this.router.navigate(["/"])}loadData(){let t=this.symbol(),e=this.watchlistStore.items().find(d=>d.symbol===t);e&&this.quote.set({c:e.currentPrice,d:e.change,dp:e.percentChange,h:e.highPrice,l:e.lowPrice,o:e.openPrice,pc:e.previousClose,t:0});let n=new Date().toISOString().split("T")[0],i=new Date(Date.now()-4320*60*60*1e3).toISOString().split("T")[0];ie({profile:this.api.getCompanyProfile(t).pipe(it(()=>Q(null))),quote:this.api.getQuote(t).pipe(it(()=>Q(null))),sentiment:this.api.getInsiderSentiment(t,i,n).pipe(it(()=>Q({data:[],symbol:t}))),news:this.api.getCompanyNews(t,i,n).pipe(it(()=>Q([])))}).subscribe({next:d=>{this.profile.set(d.profile),this.quote.set(d.quote),this.sentiment.set(d.sentiment?.data??[]),this.news.set(d.news??[]),this.loading.set(!1)},error:()=>{this.loading.set(!1)}})}static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275cmp=v({type:a,selectors:[["app-stock-detail-page"]],inputs:{symbol:[1,"symbol"]},decls:8,vars:1,consts:[[1,"stock-detail"],["mat-button","",1,"stock-detail__back",3,"click"],[1,"stock-detail__loading"],["animationDuration","200ms",1,"stock-detail__tabs"],[1,"stock-detail__error"],["diameter","48"],["label","Overview"],["matTabContent",""],["label","Chart"],["label","Sentiment"],["label","News"],[1,"tab-content"],[3,"profile"],[3,"quote"],[3,"symbol"],[3,"sentiment"],[3,"news"],["mat-flat-button","","color","primary",3,"click"]],template:function(e,n){e&1&&(o(0,"section",0)(1,"button",1),f("click",function(){return n.goBack()}),o(2,"mat-icon"),l(3,"arrow_back"),r(),l(4," Back to Dashboard "),r(),x(5,Aa,4,1,"div",2)(6,Ga,9,0,"mat-tab-group",3)(7,Va,9,1,"div",4),r()),e&2&&(s(5),k(n.loading()?5:n.profile()&&n.quote()?6:7))},dependencies:[yn,Yt,Xt,vn,Ge,He,z,N,Bt,Et,xn,kn,Mn,Dn,Pn],styles:[".stock-detail[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.stock-detail__back[_ngcontent-%COMP%]{align-self:flex-start}.stock-detail__loading[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:16px;padding:64px 0;color:var(--color-neutral)}.tab-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;padding:20px 0}.stock-detail__error[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:12px;padding:64px 24px;text-align:center;color:var(--color-neutral)}.stock-detail__error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:56px;width:56px;height:56px;color:var(--color-negative)}.stock-detail__error[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface)}"]})}}return a})();var $o=[{path:"",component:En}];export{$o as STOCK_DETAIL_ROUTES};
