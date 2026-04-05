import{a as ha}from"./chunk-U6KRWSCP.js";import{A as ka,a as da,j as ma,r as ua,s as ge,u as ya,x as _e,y as wa,z as xa}from"./chunk-GL4N7A6L.js";import{$ as ca,A as ia,C as un,D as na,E as pe,I as mi,J as sa,L as ui,M as oa,N as Le,P as aa,Q as Tt,S as Pt,T as ra,U as pn,V as Pe,X as fe,Z as pi,_ as la,aa as $t,ba as Qt,c as Xo,d as Ko,da as fi,e as Jo,ea as be,f as ta,fa as pa,g as di,ga as fa,ha as bi,ia as ba,ja as ga,la as _a,oa as va,p as ea,pa as fn,u as Xt,y as Kt,z as at}from"./chunk-ZKTY6L43.js";import{$a as ci,$b as me,A as re,Ab as g,B as Ao,Bb as _,Bc as Dt,C as No,Cb as L,Cc as ue,D as le,Ec as I,F as Fo,Fc as jt,Gb as he,Hb as de,Ib as Y,Jb as Ot,Nb as $,Ob as E,P as Vo,Pb as ut,Q as ri,Qb as j,R as Wo,Ra as ce,Rb as _t,S as gt,Sb as vt,Ta as y,Tb as M,Ub as D,W as ln,Y as J,Ya as kt,Yb as Wt,Za as dt,Zb as Ht,_ as X,_b as O,aa as b,ac as k,bc as U,cb as Vt,cc as Lt,dc as hi,e as zt,ec as Go,fa as lt,fc as qo,g as Eo,ga as ct,gb as T,gc as Zo,ha as li,hb as tt,hc as G,i as rt,ia as cn,ib as C,j as rn,ja as qt,jb as $o,jc as et,k as Io,ka as Ho,kb as B,kc as Yo,l as zo,lb as mt,lc as Ct,m as Oo,mb as Qo,mc as ze,na as Z,nc as mn,o as xt,oa as Zt,q as Lo,ra as ht,sb as Uo,t as ai,tb as F,ua as hn,ub as V,uc as Oe,va as Yt,vb as W,wa as Q,wb as dn,xb as Ee,xc as pt,y as Po,ya as N,yb as Ie,z as Bo,za as jo,zb as R}from"./chunk-XJN2IBSM.js";var xn=["*"];function Cl(s,t){s&1&&j(0)}var Sl=["tabListContainer"],Ml=["tabList"],Dl=["tabListInner"],Tl=["nextPaginator"],Rl=["previousPaginator"],El=["content"];function Il(s,t){}var zl=["tabBodyWrapper"],Ol=["tabHeader"];function Ll(s,t){}function Pl(s,t){if(s&1&&mt(0,Ll,0,0,"ng-template",12),s&2){let e=E().$implicit;R("cdkPortalOutlet",e.templateLabel)}}function Bl(s,t){if(s&1&&k(0),s&2){let e=E().$implicit;U(e.textLabel)}}function Al(s,t){if(s&1){let e=Ot();g(0,"div",7,2),$("click",function(){let n=lt(e),o=n.$implicit,a=n.$index,r=E(),l=Wt(1);return ct(r._handleClick(o,l,a))})("cdkFocusChange",function(n){let o=lt(e).$index,a=E();return ct(a._tabFocusChanged(n,o))}),L(2,"span",8)(3,"div",9),g(4,"span",10)(5,"span",11),V(6,Pl,1,1,null,12)(7,Bl,1,1),_()()()}if(s&2){let e=t.$implicit,i=t.$index,n=Wt(1),o=E();me(e.labelClass),O("mdc-tab--active",o.selectedIndex===i),R("id",o._getTabLabelId(e,i))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),F("tabIndex",o._getTabIndex(i))("aria-posinset",i+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(i))("aria-selected",o.selectedIndex===i)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),y(3),R("matRippleTrigger",n)("matRippleDisabled",e.disabled||o.disableRipple),y(3),W(e.templateLabel?6:7)}}function Nl(s,t){s&1&&j(0)}function Fl(s,t){if(s&1){let e=Ot();g(0,"mat-tab-body",13),$("_onCentered",function(){lt(e);let n=E();return ct(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){lt(e);let o=E();return ct(o._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){lt(e);let o=E();return ct(o._bodyCentered(n))}),_()}if(s&2){let e=t.$implicit,i=t.$index,n=E();me(e.bodyClass),R("id",n._getTabContentId(i))("content",e.content)("position",e.position)("animationDuration",n.animationDuration)("preserveContent",n.preserveContent),F("tabindex",n.contentTabIndex!=null&&n.selectedIndex===i?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(e,i))("aria-hidden",n.selectedIndex!==i)}}var Vl=new X("MatTabContent"),Wl=(()=>{class s{template=b(dt);constructor(){}static \u0275fac=function(i){return new(i||s)};static \u0275dir=C({type:s,selectors:[["","matTabContent",""]],features:[G([{provide:Vl,useExisting:s}])]})}return s})(),Hl=new X("MatTabLabel"),Da=new X("MAT_TAB"),jl=(()=>{class s extends va{_closestTab=b(Da,{optional:!0});static \u0275fac=(()=>{let e;return function(n){return(e||(e=Q(s)))(n||s)}})();static \u0275dir=C({type:s,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[G([{provide:Hl,useExisting:s}]),B]})}return s})(),Ta=new X("MAT_TAB_GROUP"),kn=(()=>{class s{_viewContainerRef=b(Vt);_closestTabGroup=b(Ta,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new rt;position=null;origin=null;isActive=!1;constructor(){b(pe).load(fe)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new _a(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(i){return new(i||s)};static \u0275cmp=T({type:s,selectors:[["mat-tab"]],contentQueries:function(i,n,o){if(i&1&&_t(o,jl,5)(o,Wl,7,dt),i&2){let a;M(a=D())&&(n.templateLabel=a.first),M(a=D())&&(n._explicitContent=a.first)}},viewQuery:function(i,n){if(i&1&&vt(dt,7),i&2){let o;M(o=D())&&(n._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(i,n){i&2&&F("id",null)},inputs:{disabled:[2,"disabled","disabled",I],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[G([{provide:Da,useExisting:s}]),Yt],ngContentSelectors:xn,decls:1,vars:0,template:function(i,n){i&1&&(ut(),Qo(0,Cl,1,0,"ng-template"))},encapsulation:2})}return s})(),bn="mdc-tab-indicator--active",Ca="mdc-tab-indicator--no-transition",gn=class{_items;_currentItem;constructor(t){this._items=t}hide(){this._items.forEach(t=>t.deactivateInkBar()),this._currentItem=void 0}alignToElement(t){let e=this._items.find(n=>n.elementRef.nativeElement===t),i=this._currentItem;if(e!==i&&(i?.deactivateInkBar(),e)){let n=i?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(n),this._currentItem=e}}},$l=(()=>{class s{_elementRef=b(N);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let i=this._elementRef.nativeElement;if(!e||!i.getBoundingClientRect||!this._inkBarContentElement){i.classList.add(bn);return}let n=i.getBoundingClientRect(),o=e.width/n.width,a=e.left-n.left;i.classList.add(Ca),this._inkBarContentElement.style.setProperty("transform",`translateX(${a}px) scaleX(${o})`),i.getBoundingClientRect(),i.classList.remove(Ca),i.classList.add(bn),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(bn)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,i=this._inkBarElement=e.createElement("span"),n=this._inkBarContentElement=e.createElement("span");i.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",i.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(i){return new(i||s)};static \u0275dir=C({type:s,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",I]}})}return s})();var Ra=(()=>{class s extends $l{elementRef=b(N);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(n){return(e||(e=Q(s)))(n||s)}})();static \u0275dir=C({type:s,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(i,n){i&2&&(F("aria-disabled",!!n.disabled),O("mat-mdc-tab-disabled",n.disabled))},inputs:{disabled:[2,"disabled","disabled",I]},features:[B]})}return s})(),Sa={passive:!0},Ql=650,Ul=100,Gl=(()=>{class s{_elementRef=b(N);_changeDetectorRef=b(Dt);_viewportRuler=b(bi);_dir=b(Kt,{optional:!0});_ngZone=b(Zt);_platform=b(Xt);_sharedResizeObserver=b(ma);_injector=b(qt);_renderer=b(ci);_animationsDisabled=Tt();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new rt;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new rt;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let i=isNaN(e)?0:e;this._selectedIndex!=i&&(this._selectedIndexChanged=!0,this._selectedIndex=i,this._keyManager&&this._keyManager.updateActiveItem(i))}_selectedIndex=0;selectFocusedIndex=new Z;indexFocused=new Z;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),Sa),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),Sa))}ngAfterContentInit(){let e=this._dir?this._dir.change:xt("ltr"),i=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Fo(32),gt(this._destroyed)),n=this._viewportRuler.change(150).pipe(gt(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new oa(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),kt(o,{injector:this._injector}),re(e,n,i,this._items.changes,this._itemsResized()).pipe(gt(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(a=>{this.indexFocused.emit(a),this._setTabFocus(a)})}_itemsResized(){return typeof ResizeObserver!="function"?Oo:this._items.changes.pipe(ri(this._items),Wo(e=>new Eo(i=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(o=>i.next(o));return e.forEach(o=>n.observe(o.elementRef.nativeElement)),()=>{n.disconnect()}}))),Vo(1),Ao(e=>e.some(i=>i.contentRect.width>0&&i.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!ui(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let i=this._items.get(this.focusIndex);i&&!i.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let i=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?i.scrollLeft=0:i.scrollLeft=i.scrollWidth-i.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,i=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let i=this._tabListContainer.nativeElement.offsetWidth,n=(e=="before"?-1:1)*i/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let i=this._items?this._items.toArray()[e]:null;if(!i)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:a}=i.elementRef.nativeElement,r,l;this._getLayoutDirection()=="ltr"?(r=o,l=r+a):(l=this._tabListInner.nativeElement.offsetWidth-o,r=l-a);let c=this.scrollDistance,h=this.scrollDistance+n;r<c?this.scrollDistance-=c-r:l>h&&(this.scrollDistance+=Math.min(l-h,r-c))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,i=this._elementRef.nativeElement.offsetWidth,n=e-i>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,i=this._tabListContainer.nativeElement.offsetWidth;return e-i||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,i=e?e.elementRef.nativeElement:null;i?this._inkBar.alignToElement(i):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,i){i&&i.button!=null&&i.button!==0||(this._stopInterval(),Bo(Ql,Ul).pipe(gt(re(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:o}=this._scrollHeader(e);(o===0||o>=n)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let i=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(i,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:i,distance:this._scrollDistance}}static \u0275fac=function(i){return new(i||s)};static \u0275dir=C({type:s,inputs:{disablePagination:[2,"disablePagination","disablePagination",I],selectedIndex:[2,"selectedIndex","selectedIndex",jt]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return s})(),ql=(()=>{class s extends Gl{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new gn(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=Q(s)))(n||s)}})();static \u0275cmp=T({type:s,selectors:[["mat-tab-header"]],contentQueries:function(i,n,o){if(i&1&&_t(o,Ra,4),i&2){let a;M(a=D())&&(n._items=a)}},viewQuery:function(i,n){if(i&1&&vt(Sl,7)(Ml,7)(Dl,7)(Tl,5)(Rl,5),i&2){let o;M(o=D())&&(n._tabListContainer=o.first),M(o=D())&&(n._tabList=o.first),M(o=D())&&(n._tabListInner=o.first),M(o=D())&&(n._nextPaginator=o.first),M(o=D())&&(n._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(i,n){i&2&&O("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",I]},features:[B],ngContentSelectors:xn,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(i,n){i&1&&(ut(),g(0,"div",5,0),$("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(a){return n._handlePaginatorPress("before",a)})("touchend",function(){return n._stopInterval()}),L(2,"div",6),_(),g(3,"div",7,1),$("keydown",function(a){return n._handleKeydown(a)}),g(5,"div",8,2),$("cdkObserveContent",function(){return n._onContentChanges()}),g(7,"div",9,3),j(9),_()()(),g(10,"div",10,4),$("mousedown",function(a){return n._handlePaginatorPress("after",a)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),L(12,"div",6),_()),i&2&&(O("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),R("matRippleDisabled",n._disableScrollBefore||n.disableRipple),y(3),O("_mat-animation-noopable",n._animationsDisabled),y(2),F("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),y(5),O("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),R("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[Pe,mi],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return s})(),Zl=new X("MAT_TABS_CONFIG"),Ma=(()=>{class s extends fn{_host=b(_n);_ngZone=b(Zt);_centeringSub=zt.EMPTY;_leavingSub=zt.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(ri(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(i){return new(i||s)};static \u0275dir=C({type:s,selectors:[["","matTabBodyHost",""]],features:[B]})}return s})(),_n=(()=>{class s{_elementRef=b(N);_dir=b(Kt,{optional:!0});_ngZone=b(Zt);_injector=b(qt);_renderer=b(ci);_diAnimationsDisabled=Tt();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=zt.EMPTY;_position;_previousPosition;_onCentering=new Z;_beforeCentering=new Z;_afterLeavingCenter=new Z;_onCentered=new Z(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=b(Dt);this._dirChangeSubscription=this._dir.change.subscribe(i=>{this._computePositionAnimationState(i),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),kt(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,i=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",i),this._renderer.listen(e,"transitioncancel",i)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),kt(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(i){return new(i||s)};static \u0275cmp=T({type:s,selectors:[["mat-tab-body"]],viewQuery:function(i,n){if(i&1&&vt(Ma,5)(El,5),i&2){let o;M(o=D())&&(n._portalHost=o.first),M(o=D())&&(n._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(i,n){i&2&&F("inert",n._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(i,n){i&1&&(g(0,"div",1,0),mt(2,Il,0,0,"ng-template",2),_()),i&2&&O("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center")},dependencies:[Ma,fa],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return s})(),Ea=(()=>{class s{_elementRef=b(N);_changeDetectorRef=b(Dt);_ngZone=b(Zt);_tabsSubscription=zt.EMPTY;_tabLabelSubscription=zt.EMPTY;_tabBodySubscription=zt.EMPTY;_diAnimationsDisabled=Tt();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new jo;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let i=e+"";this._animationDuration=/^\d+$/.test(i)?e+"ms":i}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let i=this._elementRef.nativeElement.classList;i.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&i.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new Z;focusChange=new Z;animationDone=new Z;selectedTabChange=new Z(!0);_groupId;_isServer=!b(Xt).isBrowser;constructor(){let e=b(Zl,{optional:!0});this._groupId=b(Le).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let i=this._selectedIndex==null;if(!i){this.selectedTabChange.emit(this._createChangeEvent(e));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,o)=>n.isActive=o===e),i||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((i,n)=>{i.position=n-e,this._selectedIndex!=null&&i.position==0&&!i.origin&&(i.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let i=this._tabs.toArray(),n;for(let o=0;o<i.length;o++)if(i[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,n=i[o];break}!n&&i[e]&&Promise.resolve().then(()=>{i[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(ri(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(i=>i._closestTabGroup===this||!i._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let i=this._tabHeader;i&&(i.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let i=new vn;return i.index=e,this._tabs&&this._tabs.length&&(i.tab=this._tabs.toArray()[e]),i}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=re(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,i){return e.id||`${this._groupId}-label-${i}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let i=this._tabBodyWrapper.nativeElement;i.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(i.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,i,n){i.focusIndex=n,e.disabled||(this.selectedIndex=n)}_getTabIndex(e){let i=this._lastFocusedTabIndex??this.selectedIndex;return e===i?0:-1}_tabFocusChanged(e,i){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=i)}_bodyCentered(e){e&&this._tabBodies?.forEach((i,n)=>i._setActiveClass(n===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(i){return new(i||s)};static \u0275cmp=T({type:s,selectors:[["mat-tab-group"]],contentQueries:function(i,n,o){if(i&1&&_t(o,kn,5),i&2){let a;M(a=D())&&(n._allTabs=a)}},viewQuery:function(i,n){if(i&1&&vt(zl,5)(Ol,5)(_n,5),i&2){let o;M(o=D())&&(n._tabBodyWrapper=o.first),M(o=D())&&(n._tabHeader=o.first),M(o=D())&&(n._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(i,n){i&2&&(F("mat-align-tabs",n.alignTabs),me("mat-"+(n.color||"primary")),Ht("--mat-tab-animation-duration",n.animationDuration),O("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",I],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",I],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",I],selectedIndex:[2,"selectedIndex","selectedIndex",jt],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",jt],disablePagination:[2,"disablePagination","disablePagination",I],disableRipple:[2,"disableRipple","disableRipple",I],preserveContent:[2,"preserveContent","preserveContent",I],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[G([{provide:Ta,useExisting:s}])],ngContentSelectors:xn,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(i,n){i&1&&(ut(),g(0,"mat-tab-header",3,0),$("indexFocused",function(a){return n._focusChanged(a)})("selectFocusedIndex",function(a){return n.selectedIndex=a}),Ee(2,Al,8,17,"div",4,dn),_(),V(4,Nl,1,0),g(5,"div",5,1),Ee(7,Fl,1,10,"mat-tab-body",6,dn),_()),i&2&&(R("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),Uo("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),y(2),Ie(n._tabs),y(2),W(n._isServer?4:-1),y(),O("_mat-animation-noopable",n._animationsDisabled()),y(2),Ie(n._tabs))},dependencies:[ql,Ra,na,Pe,fn,_n],styles:[`.mdc-tab {
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
`],encapsulation:2})}return s})(),vn=class{index;tab};var Ia=(()=>{class s{static \u0275fac=function(i){return new(i||s)};static \u0275mod=tt({type:s});static \u0275inj=J({imports:[at]})}return s})();var Xl=["determinateSpinner"];function Kl(s,t){if(s&1&&(li(),g(0,"svg",11),L(1,"circle",12),_()),s&2){let e=E();F("viewBox",e._viewBox()),y(),Ht("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),F("r",e._circleRadius())}}var Jl=new X("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:za})}),za=100,tc=10,Oa=(()=>{class s{_elementRef=b(N);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=b(Jl),i=aa(),n=this._elementRef.nativeElement;this._noopAnimations=i==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=n.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&i==="reduced-motion"&&n.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=za;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-tc)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(i){return new(i||s)};static \u0275cmp=T({type:s,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(i,n){if(i&1&&vt(Xl,5),i&2){let o;M(o=D())&&(n._determinateCircle=o.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(i,n){i&2&&(F("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",n.mode==="determinate"?n.value:null)("mode",n.mode),me("mat-"+n.color),Ht("width",n.diameter,"px")("height",n.diameter,"px")("--mat-progress-spinner-size",n.diameter+"px")("--mat-progress-spinner-active-indicator-width",n.diameter+"px"),O("_mat-animation-noopable",n._noopAnimations)("mdc-circular-progress--indeterminate",n.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",jt],diameter:[2,"diameter","diameter",jt],strokeWidth:[2,"strokeWidth","strokeWidth",jt]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(i,n){if(i&1&&(mt(0,Kl,2,8,"ng-template",null,0,mn),g(2,"div",2,1),li(),g(4,"svg",3),L(5,"circle",4),_()(),cn(),g(6,"div",5)(7,"div",6)(8,"div",7),Y(9,8),_(),g(10,"div",9),Y(11,8),_(),g(12,"div",10),Y(13,8),_()()()),i&2){let o=Wt(1);y(4),F("viewBox",n._viewBox()),y(),Ht("stroke-dasharray",n._strokeCircumference(),"px")("stroke-dashoffset",n._strokeDashOffset(),"px")("stroke-width",n._circleStrokeWidth(),"%"),F("r",n._circleRadius()),y(4),R("ngTemplateOutlet",o),y(2),R("ngTemplateOutlet",o),y(2),R("ngTemplateOutlet",o)}},dependencies:[Xo],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return s})();var La=(()=>{class s{static \u0275fac=function(i){return new(i||s)};static \u0275mod=tt({type:s});static \u0275inj=J({imports:[at]})}return s})();function ic(s,t){if(s&1&&L(0,"img",2),s&2){let e=E();R("src",e.profile().logo,ce)("alt",e.profile().name+" logo")}}function nc(s,t){s&1&&(g(0,"div",3)(1,"mat-icon"),k(2,"business"),_()())}function sc(s,t){if(s&1&&(g(0,"div",6)(1,"mat-icon"),k(2,"language"),_(),g(3,"span",7),k(4,"Website"),_(),g(5,"a",10),k(6),et(7,"slice"),_()()),s&2){let e=E();y(5),R("href",e.profile().weburl,ce),y(),Lt(" ",ze(7,2,e.profile().weburl,0,40)," ")}}var Ba=(()=>{class s{constructor(){this.profile=pt.required()}formatMarketCap(e){return e>=1e6?`$${(e/1e6).toFixed(2)}T`:e>=1e3?`$${(e/1e3).toFixed(2)}B`:`$${e.toFixed(0)}M`}static{this.\u0275fac=function(i){return new(i||s)}}static{this.\u0275cmp=T({type:s,selectors:[["app-company-profile"]],inputs:{profile:[1,"profile"]},decls:47,vars:9,consts:[["appearance","outlined",1,"profile-card"],[1,"profile-card__header"],[1,"profile-card__logo",3,"src","alt"],[1,"profile-card__logo-placeholder"],[1,"profile-card__title"],[1,"profile-card__details"],[1,"detail-row"],[1,"detail-row__label"],[1,"detail-row__value"],[1,"detail-row__value","price"],["target","_blank","rel","noopener",1,"detail-row__value","detail-row__link",3,"href"]],template:function(i,n){i&1&&(g(0,"mat-card",0)(1,"mat-card-content")(2,"div",1),V(3,ic,1,2,"img",2)(4,nc,3,0,"div",3),g(5,"div",4)(6,"h2"),k(7),_(),g(8,"mat-chip"),k(9),_()()(),g(10,"div",5)(11,"div",6)(12,"mat-icon"),k(13,"category"),_(),g(14,"span",7),k(15,"Industry"),_(),g(16,"span",8),k(17),_()(),g(18,"div",6)(19,"mat-icon"),k(20,"public"),_(),g(21,"span",7),k(22,"Country"),_(),g(23,"span",8),k(24),_()(),g(25,"div",6)(26,"mat-icon"),k(27,"account_balance"),_(),g(28,"span",7),k(29,"Exchange"),_(),g(30,"span",8),k(31),_()(),g(32,"div",6)(33,"mat-icon"),k(34,"pie_chart"),_(),g(35,"span",7),k(36,"Market Cap"),_(),g(37,"span",9),k(38),_()(),g(39,"div",6)(40,"mat-icon"),k(41,"event"),_(),g(42,"span",7),k(43,"IPO Date"),_(),g(44,"span",8),k(45),_()(),V(46,sc,8,6,"div",6),_()()()),i&2&&(y(3),W(n.profile().logo?3:4),y(4),U(n.profile().name),y(2),U(n.profile().ticker),y(8),U(n.profile().finnhubIndustry),y(7),U(n.profile().country),y(7),U(n.profile().exchange),y(7),U(n.formatMarketCap(n.profile().marketCapitalization)),y(7),U(n.profile().ipo),y(),W(n.profile().weburl?46:-1))},dependencies:[_e,ge,ya,Qt,$t,xa,wa,di],styles:[".profile-card__header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;margin-bottom:24px}.profile-card__logo[_ngcontent-%COMP%]{width:56px;height:56px;border-radius:var(--radius-md);object-fit:contain;background:var(--mat-sys-surface-variant);padding:4px}.profile-card__logo-placeholder[_ngcontent-%COMP%]{width:56px;height:56px;border-radius:var(--radius-md);background:var(--mat-sys-surface-variant);display:flex;align-items:center;justify-content:center}.profile-card__title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:600;margin-bottom:4px}.profile-card__details[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.detail-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.detail-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--mat-sys-outline);font-size:20px;width:20px;height:20px}.detail-row__label[_ngcontent-%COMP%]{min-width:100px;color:var(--color-neutral);font-size:.85rem}.detail-row__value[_ngcontent-%COMP%]{font-weight:500}.detail-row__link[_ngcontent-%COMP%]{color:var(--mat-sys-primary);text-decoration:none}.detail-row__link[_ngcontent-%COMP%]:hover{text-decoration:underline}"]})}}return s})();var Aa=(()=>{class s{constructor(){this.quote=pt.required()}static{this.\u0275fac=function(i){return new(i||s)}}static{this.\u0275cmp=T({type:s,selectors:[["app-key-metrics"]],inputs:{quote:[1,"quote"]},decls:35,vars:21,consts:[[1,"metrics-grid"],["appearance","outlined",1,"metric-card","metric-card--highlight"],[1,"metric-card__label"],[1,"metric-card__value","price"],["appearance","outlined",1,"metric-card"],[3,"value"]],template:function(i,n){i&1&&(g(0,"div",0)(1,"mat-card",1)(2,"span",2),k(3,"Current Price"),_(),g(4,"span",3),k(5),et(6,"currency"),_()(),g(7,"mat-card",4)(8,"span",2),k(9,"Change Today"),_(),L(10,"app-trend-indicator",5),_(),g(11,"mat-card",4)(12,"span",2),k(13,"Open"),_(),g(14,"span",3),k(15),et(16,"currency"),_()(),g(17,"mat-card",4)(18,"span",2),k(19,"High"),_(),g(20,"span",3),k(21),et(22,"currency"),_()(),g(23,"mat-card",4)(24,"span",2),k(25,"Low"),_(),g(26,"span",3),k(27),et(28,"currency"),_()(),g(29,"mat-card",4)(30,"span",2),k(31,"Previous Close"),_(),g(32,"span",3),k(33),et(34,"currency"),_()()()),i&2&&(y(5),U(Ct(6,6,n.quote().c,"USD")),y(5),R("value",n.quote().dp),y(5),U(Ct(16,9,n.quote().o,"USD")),y(6),U(Ct(22,12,n.quote().h,"USD")),y(6),U(Ct(28,15,n.quote().l,"USD")),y(6),U(Ct(34,18,n.quote().pc,"USD")))},dependencies:[_e,ge,ka,ta],styles:[".metrics-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px}.metric-card[_ngcontent-%COMP%]{padding:16px;display:flex;flex-direction:column;gap:8px}.metric-card--highlight[_ngcontent-%COMP%]{grid-column:span 2}.metric-card--highlight[_ngcontent-%COMP%]   .metric-card__value[_ngcontent-%COMP%]{font-size:1.75rem}.metric-card__label[_ngcontent-%COMP%]{font-size:.75rem;color:var(--color-neutral);text-transform:uppercase;letter-spacing:.05em}.metric-card__value[_ngcontent-%COMP%]{font-size:1.1rem}@media(max-width:600px){.metrics-grid[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}"]})}}return s})();function P(s){var t=s.width,e=s.height;if(t<0)throw new Error("Negative width is not allowed for Size");if(e<0)throw new Error("Negative height is not allowed for Size");return{width:t,height:e}}function Rt(s,t){return s.width===t.width&&s.height===t.height}var oc=(function(){function s(t){var e=this;this._resolutionListener=function(){return e._onResolutionChanged()},this._resolutionMediaQueryList=null,this._observers=[],this._window=t,this._installResolutionListener()}return s.prototype.dispose=function(){this._uninstallResolutionListener(),this._window=null},Object.defineProperty(s.prototype,"value",{get:function(){return this._window.devicePixelRatio},enumerable:!1,configurable:!0}),s.prototype.subscribe=function(t){var e=this,i={next:t};return this._observers.push(i),{unsubscribe:function(){e._observers=e._observers.filter(function(n){return n!==i})}}},s.prototype._installResolutionListener=function(){if(this._resolutionMediaQueryList!==null)throw new Error("Resolution listener is already installed");var t=this._window.devicePixelRatio;this._resolutionMediaQueryList=this._window.matchMedia("all and (resolution: ".concat(t,"dppx)")),this._resolutionMediaQueryList.addListener(this._resolutionListener)},s.prototype._uninstallResolutionListener=function(){this._resolutionMediaQueryList!==null&&(this._resolutionMediaQueryList.removeListener(this._resolutionListener),this._resolutionMediaQueryList=null)},s.prototype._reinstallResolutionListener=function(){this._uninstallResolutionListener(),this._installResolutionListener()},s.prototype._onResolutionChanged=function(){var t=this;this._observers.forEach(function(e){return e.next(t._window.devicePixelRatio)}),this._reinstallResolutionListener()},s})();function Na(s){return new oc(s)}var ac=(function(){function s(t,e,i){var n;this._canvasElement=null,this._bitmapSizeChangedListeners=[],this._suggestedBitmapSize=null,this._suggestedBitmapSizeChangedListeners=[],this._devicePixelRatioObservable=null,this._canvasElementResizeObserver=null,this._canvasElement=t,this._canvasElementClientSize=P({width:this._canvasElement.clientWidth,height:this._canvasElement.clientHeight}),this._transformBitmapSize=e??function(o){return o},this._allowResizeObserver=(n=i?.allowResizeObserver)!==null&&n!==void 0?n:!0,this._chooseAndInitObserver()}return s.prototype.dispose=function(){var t,e;if(this._canvasElement===null)throw new Error("Object is disposed");(t=this._canvasElementResizeObserver)===null||t===void 0||t.disconnect(),this._canvasElementResizeObserver=null,(e=this._devicePixelRatioObservable)===null||e===void 0||e.dispose(),this._devicePixelRatioObservable=null,this._suggestedBitmapSizeChangedListeners.length=0,this._bitmapSizeChangedListeners.length=0,this._canvasElement=null},Object.defineProperty(s.prototype,"canvasElement",{get:function(){if(this._canvasElement===null)throw new Error("Object is disposed");return this._canvasElement},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"canvasElementClientSize",{get:function(){return this._canvasElementClientSize},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"bitmapSize",{get:function(){return P({width:this.canvasElement.width,height:this.canvasElement.height})},enumerable:!1,configurable:!0}),s.prototype.resizeCanvasElement=function(t){this._canvasElementClientSize=P(t),this.canvasElement.style.width="".concat(this._canvasElementClientSize.width,"px"),this.canvasElement.style.height="".concat(this._canvasElementClientSize.height,"px"),this._invalidateBitmapSize()},s.prototype.subscribeBitmapSizeChanged=function(t){this._bitmapSizeChangedListeners.push(t)},s.prototype.unsubscribeBitmapSizeChanged=function(t){this._bitmapSizeChangedListeners=this._bitmapSizeChangedListeners.filter(function(e){return e!==t})},Object.defineProperty(s.prototype,"suggestedBitmapSize",{get:function(){return this._suggestedBitmapSize},enumerable:!1,configurable:!0}),s.prototype.subscribeSuggestedBitmapSizeChanged=function(t){this._suggestedBitmapSizeChangedListeners.push(t)},s.prototype.unsubscribeSuggestedBitmapSizeChanged=function(t){this._suggestedBitmapSizeChangedListeners=this._suggestedBitmapSizeChangedListeners.filter(function(e){return e!==t})},s.prototype.applySuggestedBitmapSize=function(){if(this._suggestedBitmapSize!==null){var t=this._suggestedBitmapSize;this._suggestedBitmapSize=null,this._resizeBitmap(t),this._emitSuggestedBitmapSizeChanged(t,this._suggestedBitmapSize)}},s.prototype._resizeBitmap=function(t){var e=this.bitmapSize;Rt(e,t)||(this.canvasElement.width=t.width,this.canvasElement.height=t.height,this._emitBitmapSizeChanged(e,t))},s.prototype._emitBitmapSizeChanged=function(t,e){var i=this;this._bitmapSizeChangedListeners.forEach(function(n){return n.call(i,t,e)})},s.prototype._suggestNewBitmapSize=function(t){var e=this._suggestedBitmapSize,i=P(this._transformBitmapSize(t,this._canvasElementClientSize)),n=Rt(this.bitmapSize,i)?null:i;e===null&&n===null||e!==null&&n!==null&&Rt(e,n)||(this._suggestedBitmapSize=n,this._emitSuggestedBitmapSizeChanged(e,n))},s.prototype._emitSuggestedBitmapSizeChanged=function(t,e){var i=this;this._suggestedBitmapSizeChangedListeners.forEach(function(n){return n.call(i,t,e)})},s.prototype._chooseAndInitObserver=function(){var t=this;if(!this._allowResizeObserver){this._initDevicePixelRatioObservable();return}rc().then(function(e){return e?t._initResizeObserver():t._initDevicePixelRatioObservable()})},s.prototype._initDevicePixelRatioObservable=function(){var t=this;if(this._canvasElement!==null){var e=Fa(this._canvasElement);if(e===null)throw new Error("No window is associated with the canvas");this._devicePixelRatioObservable=Na(e),this._devicePixelRatioObservable.subscribe(function(){return t._invalidateBitmapSize()}),this._invalidateBitmapSize()}},s.prototype._invalidateBitmapSize=function(){var t,e;if(this._canvasElement!==null){var i=Fa(this._canvasElement);if(i!==null){var n=(e=(t=this._devicePixelRatioObservable)===null||t===void 0?void 0:t.value)!==null&&e!==void 0?e:i.devicePixelRatio,o=this._canvasElement.getClientRects(),a=o[0]!==void 0?lc(o[0],n):P({width:this._canvasElementClientSize.width*n,height:this._canvasElementClientSize.height*n});this._suggestNewBitmapSize(a)}}},s.prototype._initResizeObserver=function(){var t=this;this._canvasElement!==null&&(this._canvasElementResizeObserver=new ResizeObserver(function(e){var i=e.find(function(a){return a.target===t._canvasElement});if(!(!i||!i.devicePixelContentBoxSize||!i.devicePixelContentBoxSize[0])){var n=i.devicePixelContentBoxSize[0],o=P({width:n.inlineSize,height:n.blockSize});t._suggestNewBitmapSize(o)}}),this._canvasElementResizeObserver.observe(this._canvasElement,{box:"device-pixel-content-box"}))},s})();function Sn(s,t){if(t.type==="device-pixel-content-box")return new ac(s,t.transform,t.options);throw new Error("Unsupported binding target")}function Fa(s){return s.ownerDocument.defaultView}function rc(){return new Promise(function(s){var t=new ResizeObserver(function(e){s(e.every(function(i){return"devicePixelContentBoxSize"in i})),t.disconnect()});t.observe(document.body,{box:"device-pixel-content-box"})}).catch(function(){return!1})}function lc(s,t){return P({width:Math.round(s.left*t+s.width*t)-Math.round(s.left*t),height:Math.round(s.top*t+s.height*t)-Math.round(s.top*t)})}var Va=(function(){function s(t,e,i){if(e.width===0||e.height===0)throw new TypeError("Rendering target could only be created on a media with positive width and height");if(this._mediaSize=e,i.width===0||i.height===0)throw new TypeError("Rendering target could only be created using a bitmap with positive integer width and height");this._bitmapSize=i,this._context=t}return s.prototype.useMediaCoordinateSpace=function(t){try{return this._context.save(),this._context.setTransform(1,0,0,1,0,0),this._context.scale(this._horizontalPixelRatio,this._verticalPixelRatio),t({context:this._context,mediaSize:this._mediaSize})}finally{this._context.restore()}},s.prototype.useBitmapCoordinateSpace=function(t){try{return this._context.save(),this._context.setTransform(1,0,0,1,0,0),t({context:this._context,mediaSize:this._mediaSize,bitmapSize:this._bitmapSize,horizontalPixelRatio:this._horizontalPixelRatio,verticalPixelRatio:this._verticalPixelRatio})}finally{this._context.restore()}},Object.defineProperty(s.prototype,"_horizontalPixelRatio",{get:function(){return this._bitmapSize.width/this._mediaSize.width},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"_verticalPixelRatio",{get:function(){return this._bitmapSize.height/this._mediaSize.height},enumerable:!1,configurable:!0}),s})();function Bt(s,t){var e=s.canvasElementClientSize;if(e.width===0||e.height===0)return null;var i=s.bitmapSize;if(i.width===0||i.height===0)return null;var n=s.canvasElement.getContext("2d",t);return n===null?null:new Va(n,e,i)}var cc={upColor:"#26a69a",downColor:"#ef5350",wickVisible:!0,borderVisible:!0,borderColor:"#378658",borderUpColor:"#26a69a",borderDownColor:"#ef5350",wickColor:"#737375",wickUpColor:"#26a69a",wickDownColor:"#ef5350"},hc={upColor:"#26a69a",downColor:"#ef5350",openVisible:!0,thinBars:!0},dc={color:"#2196f3",lineStyle:0,lineWidth:3,lineType:0,lineVisible:!0,crosshairMarkerVisible:!0,crosshairMarkerRadius:4,crosshairMarkerBorderColor:"",crosshairMarkerBorderWidth:2,crosshairMarkerBackgroundColor:"",lastPriceAnimation:0,pointMarkersVisible:!1},mc={topColor:"rgba( 46, 220, 135, 0.4)",bottomColor:"rgba( 40, 221, 100, 0)",invertFilledArea:!1,lineColor:"#33D778",lineStyle:0,lineWidth:3,lineType:0,lineVisible:!0,crosshairMarkerVisible:!0,crosshairMarkerRadius:4,crosshairMarkerBorderColor:"",crosshairMarkerBorderWidth:2,crosshairMarkerBackgroundColor:"",lastPriceAnimation:0,pointMarkersVisible:!1},uc={baseValue:{type:"price",price:0},topFillColor1:"rgba(38, 166, 154, 0.28)",topFillColor2:"rgba(38, 166, 154, 0.05)",topLineColor:"rgba(38, 166, 154, 1)",bottomFillColor1:"rgba(239, 83, 80, 0.05)",bottomFillColor2:"rgba(239, 83, 80, 0.28)",bottomLineColor:"rgba(239, 83, 80, 1)",lineWidth:3,lineStyle:0,lineType:0,lineVisible:!0,crosshairMarkerVisible:!0,crosshairMarkerRadius:4,crosshairMarkerBorderColor:"",crosshairMarkerBorderWidth:2,crosshairMarkerBackgroundColor:"",lastPriceAnimation:0,pointMarkersVisible:!1},pc={color:"#26a69a",base:0},Dr={color:"#2196f3"},Tr={title:"",visible:!0,lastValueVisible:!0,priceLineVisible:!0,priceLineSource:0,priceLineWidth:1,priceLineColor:"",priceLineStyle:2,baseLineVisible:!0,baseLineWidth:1,baseLineColor:"#B2B5BE",baseLineStyle:0,priceFormat:{type:"price",precision:2,minMove:.01}},Wa,Ha;function ee(s,t){let e={0:[],1:[s.lineWidth,s.lineWidth],2:[2*s.lineWidth,2*s.lineWidth],3:[6*s.lineWidth,6*s.lineWidth],4:[s.lineWidth,4*s.lineWidth]}[t];s.setLineDash(e)}function Rr(s,t,e,i){s.beginPath();let n=s.lineWidth%2?.5:0;s.moveTo(e,t+n),s.lineTo(i,t+n),s.stroke()}function Gt(s,t){if(!s)throw new Error("Assertion failed"+(t?": "+t:""))}function ot(s){if(s===void 0)throw new Error("Value is undefined");return s}function v(s){if(s===null)throw new Error("Value is null");return s}function ye(s){return v(ot(s))}(function(s){s[s.Simple=0]="Simple",s[s.WithSteps=1]="WithSteps",s[s.Curved=2]="Curved"})(Wa||(Wa={})),(function(s){s[s.Solid=0]="Solid",s[s.Dotted=1]="Dotted",s[s.Dashed=2]="Dashed",s[s.LargeDashed=3]="LargeDashed",s[s.SparseDotted=4]="SparseDotted"})(Ha||(Ha={}));var ja={khaki:"#f0e68c",azure:"#f0ffff",aliceblue:"#f0f8ff",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",gray:"#808080",green:"#008000",honeydew:"#f0fff0",floralwhite:"#fffaf0",lightblue:"#add8e6",lightcoral:"#f08080",lemonchiffon:"#fffacd",hotpink:"#ff69b4",lightyellow:"#ffffe0",greenyellow:"#adff2f",lightgoldenrodyellow:"#fafad2",limegreen:"#32cd32",linen:"#faf0e6",lightcyan:"#e0ffff",magenta:"#f0f",maroon:"#800000",olive:"#808000",orange:"#ffa500",oldlace:"#fdf5e6",mediumblue:"#0000cd",transparent:"#0000",lime:"#0f0",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",midnightblue:"#191970",orchid:"#da70d6",mediumorchid:"#ba55d3",mediumturquoise:"#48d1cc",orangered:"#ff4500",royalblue:"#4169e1",powderblue:"#b0e0e6",red:"#f00",coral:"#ff7f50",turquoise:"#40e0d0",white:"#fff",whitesmoke:"#f5f5f5",wheat:"#f5deb3",teal:"#008080",steelblue:"#4682b4",bisque:"#ffe4c4",aquamarine:"#7fffd4",aqua:"#0ff",sienna:"#a0522d",silver:"#c0c0c0",springgreen:"#00ff7f",antiquewhite:"#faebd7",burlywood:"#deb887",brown:"#a52a2a",beige:"#f5f5dc",chocolate:"#d2691e",chartreuse:"#7fff00",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cadetblue:"#5f9ea0",tomato:"#ff6347",fuchsia:"#f0f",blue:"#00f",salmon:"#fa8072",blanchedalmond:"#ffebcd",slateblue:"#6a5acd",slategray:"#708090",thistle:"#d8bfd8",tan:"#d2b48c",cyan:"#0ff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",blueviolet:"#8a2be2",black:"#000",darkmagenta:"#8b008b",darkslateblue:"#483d8b",darkkhaki:"#bdb76b",darkorchid:"#9932cc",darkorange:"#ff8c00",darkgreen:"#006400",darkred:"#8b0000",dodgerblue:"#1e90ff",darkslategray:"#2f4f4f",dimgray:"#696969",deepskyblue:"#00bfff",firebrick:"#b22222",forestgreen:"#228b22",indigo:"#4b0082",ivory:"#fffff0",lavenderblush:"#fff0f5",feldspar:"#d19275",indianred:"#cd5c5c",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightskyblue:"#87cefa",lightslategray:"#789",lightslateblue:"#8470ff",snow:"#fffafa",lightseagreen:"#20b2aa",lightsalmon:"#ffa07a",darksalmon:"#e9967a",darkviolet:"#9400d3",mediumpurple:"#9370d8",mediumaquamarine:"#66cdaa",skyblue:"#87ceeb",lavender:"#e6e6fa",lightsteelblue:"#b0c4de",mediumvioletred:"#c71585",mintcream:"#f5fffa",navajowhite:"#ffdead",navy:"#000080",olivedrab:"#6b8e23",palevioletred:"#d87093",violetred:"#d02090",yellow:"#ff0",yellowgreen:"#9acd32",lawngreen:"#7cfc00",pink:"#ffc0cb",paleturquoise:"#afeeee",palegoldenrod:"#eee8aa",darkolivegreen:"#556b2f",darkseagreen:"#8fbc8f",darkturquoise:"#00ced1",peachpuff:"#ffdab9",deeppink:"#ff1493",violet:"#ee82ee",palegreen:"#98fb98",mediumseagreen:"#3cb371",peru:"#cd853f",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",purple:"#800080",seagreen:"#2e8b57",seashell:"#fff5ee",papayawhip:"#ffefd5",mediumslateblue:"#7b68ee",plum:"#dda0dd",mediumspringgreen:"#00fa9a"};function yt(s){return s<0?0:s>255?255:Math.round(s)||0}function Er(s){return s<=0||s>0?s<0?0:s>1?1:Math.round(1e4*s)/1e4:0}var fc=/^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,bc=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,gc=/^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,_c=/^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/;function Ti(s){(s=s.toLowerCase())in ja&&(s=ja[s]);{let t=_c.exec(s)||gc.exec(s);if(t)return[yt(parseInt(t[1],10)),yt(parseInt(t[2],10)),yt(parseInt(t[3],10)),Er(t.length<5?1:parseFloat(t[4]))]}{let t=bc.exec(s);if(t)return[yt(parseInt(t[1],16)),yt(parseInt(t[2],16)),yt(parseInt(t[3],16)),1]}{let t=fc.exec(s);if(t)return[yt(17*parseInt(t[1],16)),yt(17*parseInt(t[2],16)),yt(17*parseInt(t[3],16)),1]}throw new Error(`Cannot parse color: ${s}`)}function $i(s){let t=Ti(s);return{t:`rgb(${t[0]}, ${t[1]}, ${t[2]})`,i:(e=t,.199*e[0]+.687*e[1]+.114*e[2]>160?"black":"white")};var e}var H=class{constructor(){this.h=[]}l(t,e,i){let n={o:t,_:e,u:i===!0};this.h.push(n)}v(t){let e=this.h.findIndex(i=>t===i.o);e>-1&&this.h.splice(e,1)}p(t){this.h=this.h.filter(e=>e._!==t)}m(t,e,i){let n=[...this.h];this.h=this.h.filter(o=>!o.u),n.forEach(o=>o.o(t,e,i))}M(){return this.h.length>0}S(){this.h=[]}};function St(s,...t){for(let e of t)for(let i in e)e[i]!==void 0&&(typeof e[i]!="object"||s[i]===void 0||Array.isArray(e[i])?s[i]=e[i]:St(s[i],e[i]));return s}function It(s){return typeof s=="number"&&isFinite(s)}function je(s){return typeof s=="number"&&s%1==0}function ti(s){return typeof s=="string"}function gi(s){return typeof s=="boolean"}function At(s){let t=s;if(!t||typeof t!="object")return t;let e,i,n;for(i in e=Array.isArray(t)?[]:{},t)t.hasOwnProperty(i)&&(n=t[i],e[i]=n&&typeof n=="object"?At(n):n);return e}function vc(s){return s!==null}function $e(s){return s===null?void 0:s}var lo="-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";function ke(s,t,e){return t===void 0&&(t=lo),`${e=e!==void 0?`${e} `:""}${s}px ${t}`}var jn=class{constructor(t){this.k={C:1,T:5,P:NaN,R:"",D:"",O:"",A:"",V:0,B:0,I:0,L:0,N:0},this.F=t}W(){let t=this.k,e=this.j(),i=this.H();return t.P===e&&t.D===i||(t.P=e,t.D=i,t.R=ke(e,i),t.L=2.5/12*e,t.V=t.L,t.B=e/12*t.T,t.I=e/12*t.T,t.N=0),t.O=this.$(),t.A=this.U(),this.k}$(){return this.F.W().layout.textColor}U(){return this.F.q()}j(){return this.F.W().layout.fontSize}H(){return this.F.W().layout.fontFamily}},Qe=class{constructor(){this.Y=[]}X(t){this.Y=t}K(t,e,i){this.Y.forEach(n=>{n.K(t,e,i)})}},ft=class{K(t,e,i){t.useBitmapCoordinateSpace(n=>this.Z(n,e,i))}},$n=class extends ft{constructor(){super(...arguments),this.G=null}J(t){this.G=t}Z({context:t,horizontalPixelRatio:e,verticalPixelRatio:i}){if(this.G===null||this.G.tt===null)return;let n=this.G.tt,o=this.G,a=Math.max(1,Math.floor(e))%2/2,r=l=>{t.beginPath();for(let c=n.to-1;c>=n.from;--c){let h=o.it[c],d=Math.round(h.nt*e)+a,m=h.st*i,u=l*i+a;t.moveTo(d,m),t.arc(d,m,u,0,2*Math.PI)}t.fill()};o.et>0&&(t.fillStyle=o.rt,r(o.ht+o.et)),t.fillStyle=o.lt,r(o.ht)}};function yc(){return{it:[{nt:0,st:0,ot:0,_t:0}],lt:"",rt:"",ht:0,et:0,tt:null}}var wc={from:0,to:1},Qn=class{constructor(t,e){this.ut=new Qe,this.ct=[],this.dt=[],this.ft=!0,this.F=t,this.vt=e,this.ut.X(this.ct)}bt(t){let e=this.F.wt();e.length!==this.ct.length&&(this.dt=e.map(yc),this.ct=this.dt.map(i=>{let n=new $n;return n.J(i),n}),this.ut.X(this.ct)),this.ft=!0}gt(){return this.ft&&(this.Mt(),this.ft=!1),this.ut}Mt(){let t=this.vt.W().mode===2,e=this.F.wt(),i=this.vt.xt(),n=this.F.St();e.forEach((o,a)=>{var r;let l=this.dt[a],c=o.kt(i);if(t||c===null||!o.yt())return void(l.tt=null);let h=v(o.Ct());l.lt=c.Tt,l.ht=c.ht,l.et=c.Pt,l.it[0]._t=c._t,l.it[0].st=o.Dt().Rt(c._t,h.Ot),l.rt=(r=c.At)!==null&&r!==void 0?r:this.F.Vt(l.it[0].st/o.Dt().Bt()),l.it[0].ot=i,l.it[0].nt=n.It(i),l.tt=wc})}},Un=class extends ft{constructor(t){super(),this.zt=t}Z({context:t,bitmapSize:e,horizontalPixelRatio:i,verticalPixelRatio:n}){if(this.zt===null)return;let o=this.zt.Lt.yt,a=this.zt.Et.yt;if(!o&&!a)return;let r=Math.round(this.zt.nt*i),l=Math.round(this.zt.st*n);t.lineCap="butt",o&&r>=0&&(t.lineWidth=Math.floor(this.zt.Lt.et*i),t.strokeStyle=this.zt.Lt.O,t.fillStyle=this.zt.Lt.O,ee(t,this.zt.Lt.Nt),(function(c,h,d,m){c.beginPath();let u=c.lineWidth%2?.5:0;c.moveTo(h+u,d),c.lineTo(h+u,m),c.stroke()})(t,r,0,e.height)),a&&l>=0&&(t.lineWidth=Math.floor(this.zt.Et.et*n),t.strokeStyle=this.zt.Et.O,t.fillStyle=this.zt.Et.O,ee(t,this.zt.Et.Nt),Rr(t,l,0,e.width))}},Gn=class{constructor(t){this.ft=!0,this.Ft={Lt:{et:1,Nt:0,O:"",yt:!1},Et:{et:1,Nt:0,O:"",yt:!1},nt:0,st:0},this.Wt=new Un(this.Ft),this.jt=t}bt(){this.ft=!0}gt(){return this.ft&&(this.Mt(),this.ft=!1),this.Wt}Mt(){let t=this.jt.yt(),e=v(this.jt.Ht()),i=e.$t().W().crosshair,n=this.Ft;if(i.mode===2)return n.Et.yt=!1,void(n.Lt.yt=!1);n.Et.yt=t&&this.jt.Ut(e),n.Lt.yt=t&&this.jt.qt(),n.Et.et=i.horzLine.width,n.Et.Nt=i.horzLine.style,n.Et.O=i.horzLine.color,n.Lt.et=i.vertLine.width,n.Lt.Nt=i.vertLine.style,n.Lt.O=i.vertLine.color,n.nt=this.jt.Yt(),n.st=this.jt.Xt()}};function xc(s,t,e,i,n,o){s.fillRect(t+o,e,i-2*o,o),s.fillRect(t+o,e+n-o,i-2*o,o),s.fillRect(t,e,o,n),s.fillRect(t+i-o,e,o,n)}function Qi(s,t,e,i,n,o){s.save(),s.globalCompositeOperation="copy",s.fillStyle=o,s.fillRect(t,e,i,n),s.restore()}function $a(s,t){return s.map(e=>e===0?e:e+t)}function Mn(s,t,e,i,n,o){s.beginPath(),s.lineTo(t+i-o[1],e),o[1]!==0&&s.arcTo(t+i,e,t+i,e+o[1],o[1]),s.lineTo(t+i,e+n-o[2]),o[2]!==0&&s.arcTo(t+i,e+n,t+i-o[2],e+n,o[2]),s.lineTo(t+o[3],e+n),o[3]!==0&&s.arcTo(t,e+n,t,e+n-o[3],o[3]),s.lineTo(t,e+o[0]),o[0]!==0&&s.arcTo(t,e,t+o[0],e,o[0])}function Qa(s,t,e,i,n,o,a=0,r=[0,0,0,0],l=""){if(s.save(),!a||!l||l===o)return Mn(s,t,e,i,n,r),s.fillStyle=o,s.fill(),void s.restore();let c=a/2;o!=="transparent"&&(Mn(s,t+a,e+a,i-2*a,n-2*a,$a(r,-a)),s.fillStyle=o,s.fill()),l!=="transparent"&&(Mn(s,t+c,e+c,i-a,n-a,$a(r,-c)),s.lineWidth=a,s.strokeStyle=l,s.closePath(),s.stroke()),s.restore()}function Ir(s,t,e,i,n,o,a){s.save(),s.globalCompositeOperation="copy";let r=s.createLinearGradient(0,0,0,n);r.addColorStop(0,o),r.addColorStop(1,a),s.fillStyle=r,s.fillRect(t,e,i,n),s.restore()}var Ri=class{constructor(t,e){this.J(t,e)}J(t,e){this.zt=t,this.Kt=e}Bt(t,e){return this.zt.yt?t.P+t.L+t.V:0}K(t,e,i,n){if(!this.zt.yt||this.zt.Zt.length===0)return;let o=this.zt.O,a=this.Kt.t,r=t.useBitmapCoordinateSpace(l=>{let c=l.context;c.font=e.R;let h=this.Gt(l,e,i,n),d=h.Jt,m=(u,p)=>{h.Qt?Qa(c,d.ti,d.ii,d.ni,d.si,u,d.ei,[d.ht,0,0,d.ht],p):Qa(c,d.ri,d.ii,d.ni,d.si,u,d.ei,[0,d.ht,d.ht,0],p)};return m(a,"transparent"),this.zt.hi&&(c.fillStyle=o,c.fillRect(d.ri,d.li,d.ai-d.ri,d.oi)),m("transparent",a),this.zt._i&&(c.fillStyle=e.A,c.fillRect(h.Qt?d.ui-d.ei:0,d.ii,d.ei,d.ci-d.ii)),h});t.useMediaCoordinateSpace(({context:l})=>{let c=r.di;l.font=e.R,l.textAlign=r.Qt?"right":"left",l.textBaseline="middle",l.fillStyle=o,l.fillText(this.zt.Zt,c.fi,(c.ii+c.ci)/2+c.vi)})}Gt(t,e,i,n){var o;let{context:a,bitmapSize:r,mediaSize:l,horizontalPixelRatio:c,verticalPixelRatio:h}=t,d=this.zt.hi||!this.zt.pi?e.T:0,m=this.zt.mi?e.C:0,u=e.L+this.Kt.bi,p=e.V+this.Kt.wi,f=e.B,w=e.I,x=this.zt.Zt,S=e.P,A=i.gi(a,x),z=Math.ceil(i.Mi(a,x)),q=S+u+p,bt=e.C+f+w+z+d,nt=Math.max(1,Math.floor(h)),K=Math.round(q*h);K%2!=nt%2&&(K+=1);let Ft=m>0?Math.max(1,Math.floor(m*c)):0,ae=Math.round(bt*c),Mo=Math.round(d*c),kl=(o=this.Kt.xi)!==null&&o!==void 0?o:this.Kt.Si,Do=Math.round(kl*h)-Math.floor(.5*h),nn=Math.floor(Do+nt/2-K/2),To=nn+K,oi=n==="right",Ro=oi?l.width-m:m,Re=oi?r.width-Ft:Ft,sn,on,an;return oi?(sn=Re-ae,on=Re-Mo,an=Ro-d-f-m):(sn=Re+ae,on=Re+Mo,an=Ro+d+f),{Qt:oi,Jt:{ii:nn,li:Do,ci:To,ni:ae,si:K,ht:2*c,ei:Ft,ti:sn,ri:Re,ai:on,oi:nt,ui:r.width},di:{ii:nn/h,ci:To/h,fi:an,vi:A}}}},Ce=class{constructor(t){this.ki={Si:0,t:"#000",wi:0,bi:0},this.yi={Zt:"",yt:!1,hi:!0,pi:!1,At:"",O:"#FFF",_i:!1,mi:!1},this.Ci={Zt:"",yt:!1,hi:!1,pi:!0,At:"",O:"#FFF",_i:!0,mi:!0},this.ft=!0,this.Ti=new(t||Ri)(this.yi,this.ki),this.Pi=new(t||Ri)(this.Ci,this.ki)}Zt(){return this.Ri(),this.yi.Zt}Si(){return this.Ri(),this.ki.Si}bt(){this.ft=!0}Bt(t,e=!1){return Math.max(this.Ti.Bt(t,e),this.Pi.Bt(t,e))}Di(){return this.ki.xi||0}Oi(t){this.ki.xi=t}Ai(){return this.Ri(),this.yi.yt||this.Ci.yt}Vi(){return this.Ri(),this.yi.yt}gt(t){return this.Ri(),this.yi.hi=this.yi.hi&&t.W().ticksVisible,this.Ci.hi=this.Ci.hi&&t.W().ticksVisible,this.Ti.J(this.yi,this.ki),this.Pi.J(this.Ci,this.ki),this.Ti}Bi(){return this.Ri(),this.Ti.J(this.yi,this.ki),this.Pi.J(this.Ci,this.ki),this.Pi}Ri(){this.ft&&(this.yi.hi=!0,this.Ci.hi=!1,this.Ii(this.yi,this.Ci,this.ki))}},qn=class extends Ce{constructor(t,e,i){super(),this.jt=t,this.zi=e,this.Li=i}Ii(t,e,i){if(t.yt=!1,this.jt.W().mode===2)return;let n=this.jt.W().horzLine;if(!n.labelVisible)return;let o=this.zi.Ct();if(!this.jt.yt()||this.zi.Ei()||o===null)return;let a=$i(n.labelBackgroundColor);i.t=a.t,t.O=a.i;let r=2/12*this.zi.P();i.bi=r,i.wi=r;let l=this.Li(this.zi);i.Si=l.Si,t.Zt=this.zi.Ni(l._t,o),t.yt=!0}},kc=/[1-9]/g,Ei=class{constructor(){this.zt=null}J(t){this.zt=t}K(t,e){if(this.zt===null||this.zt.yt===!1||this.zt.Zt.length===0)return;let i=t.useMediaCoordinateSpace(({context:m})=>(m.font=e.R,Math.round(e.Fi.Mi(m,v(this.zt).Zt,kc))));if(i<=0)return;let n=e.Wi,o=i+2*n,a=o/2,r=this.zt.ji,l=this.zt.Si,c=Math.floor(l-a)+.5;c<0?(l+=Math.abs(0-c),c=Math.floor(l-a)+.5):c+o>r&&(l-=Math.abs(r-(c+o)),c=Math.floor(l-a)+.5);let h=c+o,d=Math.ceil(0+e.C+e.T+e.L+e.P+e.V);t.useBitmapCoordinateSpace(({context:m,horizontalPixelRatio:u,verticalPixelRatio:p})=>{let f=v(this.zt);m.fillStyle=f.t;let w=Math.round(c*u),x=Math.round(0*p),S=Math.round(h*u),A=Math.round(d*p),z=Math.round(2*u);if(m.beginPath(),m.moveTo(w,x),m.lineTo(w,A-z),m.arcTo(w,A,w+z,A,z),m.lineTo(S-z,A),m.arcTo(S,A,S,A-z,z),m.lineTo(S,x),m.fill(),f.hi){let q=Math.round(f.Si*u),bt=x,nt=Math.round((bt+e.T)*p);m.fillStyle=f.O;let K=Math.max(1,Math.floor(u)),Ft=Math.floor(.5*u);m.fillRect(q-Ft,bt,K,nt-bt)}}),t.useMediaCoordinateSpace(({context:m})=>{let u=v(this.zt),p=0+e.C+e.T+e.L+e.P/2;m.font=e.R,m.textAlign="left",m.textBaseline="middle",m.fillStyle=u.O;let f=e.Fi.gi(m,"Apr0");m.translate(c+n,p+f),m.fillText(u.Zt,0,0)})}},Zn=class{constructor(t,e,i){this.ft=!0,this.Wt=new Ei,this.Ft={yt:!1,t:"#4c525e",O:"white",Zt:"",ji:0,Si:NaN,hi:!0},this.vt=t,this.Hi=e,this.Li=i}bt(){this.ft=!0}gt(){return this.ft&&(this.Mt(),this.ft=!1),this.Wt.J(this.Ft),this.Wt}Mt(){let t=this.Ft;if(t.yt=!1,this.vt.W().mode===2)return;let e=this.vt.W().vertLine;if(!e.labelVisible)return;let i=this.Hi.St();if(i.Ei())return;t.ji=i.ji();let n=this.Li();if(n===null)return;t.Si=n.Si;let o=i.$i(this.vt.xt());t.Zt=i.Ui(v(o)),t.yt=!0;let a=$i(e.labelBackgroundColor);t.t=a.t,t.O=a.i,t.hi=i.W().ticksVisible}},Ue=class{constructor(){this.qi=null,this.Yi=0}Xi(){return this.Yi}Ki(t){this.Yi=t}Dt(){return this.qi}Zi(t){this.qi=t}Gi(t){return[]}Ji(){return[]}yt(){return!0}},Ua;(function(s){s[s.Normal=0]="Normal",s[s.Magnet=1]="Magnet",s[s.Hidden=2]="Hidden"})(Ua||(Ua={}));var Yn=class extends Ue{constructor(t,e){super(),this.Qi=null,this.tn=NaN,this.nn=0,this.sn=!0,this.en=new Map,this.rn=!1,this.hn=NaN,this.ln=NaN,this.an=NaN,this.on=NaN,this.Hi=t,this._n=e,this.un=new Qn(t,this),this.cn=((n,o)=>a=>{let r=o(),l=n();if(a===v(this.Qi).dn())return{_t:l,Si:r};{let c=v(a.Ct());return{_t:a.fn(r,c),Si:r}}})(()=>this.tn,()=>this.ln);let i=((n,o)=>()=>{let a=this.Hi.St().vn(n()),r=o();return a&&Number.isFinite(r)?{ot:a,Si:r}:null})(()=>this.nn,()=>this.Yt());this.pn=new Zn(this,t,i),this.mn=new Gn(this)}W(){return this._n}bn(t,e){this.an=t,this.on=e}wn(){this.an=NaN,this.on=NaN}gn(){return this.an}Mn(){return this.on}xn(t,e,i){this.rn||(this.rn=!0),this.sn=!0,this.Sn(t,e,i)}xt(){return this.nn}Yt(){return this.hn}Xt(){return this.ln}yt(){return this.sn}kn(){this.sn=!1,this.yn(),this.tn=NaN,this.hn=NaN,this.ln=NaN,this.Qi=null,this.wn()}Cn(t){return this.Qi!==null?[this.mn,this.un]:[]}Ut(t){return t===this.Qi&&this._n.horzLine.visible}qt(){return this._n.vertLine.visible}Tn(t,e){this.sn&&this.Qi===t||this.en.clear();let i=[];return this.Qi===t&&i.push(this.Pn(this.en,e,this.cn)),i}Ji(){return this.sn?[this.pn]:[]}Ht(){return this.Qi}Rn(){this.mn.bt(),this.en.forEach(t=>t.bt()),this.pn.bt(),this.un.bt()}Dn(t){return t&&!t.dn().Ei()?t.dn():null}Sn(t,e,i){this.On(t,e,i)&&this.Rn()}On(t,e,i){let n=this.hn,o=this.ln,a=this.tn,r=this.nn,l=this.Qi,c=this.Dn(i);this.nn=t,this.hn=isNaN(t)?NaN:this.Hi.St().It(t),this.Qi=i;let h=c!==null?c.Ct():null;return c!==null&&h!==null?(this.tn=e,this.ln=c.Rt(e,h)):(this.tn=NaN,this.ln=NaN),n!==this.hn||o!==this.ln||r!==this.nn||a!==this.tn||l!==this.Qi}yn(){let t=this.Hi.wt().map(i=>i.Vn().An()).filter(vc),e=t.length===0?null:Math.max(...t);this.nn=e!==null?e:NaN}Pn(t,e,i){let n=t.get(e);return n===void 0&&(n=new qn(this,e,i),t.set(e,n)),n}};function Ui(s){return s==="left"||s==="right"}var it=class s{constructor(t){this.Bn=new Map,this.In=[],this.zn=t}Ln(t,e){let i=(function(n,o){return n===void 0?o:{En:Math.max(n.En,o.En),Nn:n.Nn||o.Nn}})(this.Bn.get(t),e);this.Bn.set(t,i)}Fn(){return this.zn}Wn(t){let e=this.Bn.get(t);return e===void 0?{En:this.zn}:{En:Math.max(this.zn,e.En),Nn:e.Nn}}jn(){this.Hn(),this.In=[{$n:0}]}Un(t){this.Hn(),this.In=[{$n:1,Ot:t}]}qn(t){this.Yn(),this.In.push({$n:5,Ot:t})}Hn(){this.Yn(),this.In.push({$n:6})}Xn(){this.Hn(),this.In=[{$n:4}]}Kn(t){this.Hn(),this.In.push({$n:2,Ot:t})}Zn(t){this.Hn(),this.In.push({$n:3,Ot:t})}Gn(){return this.In}Jn(t){for(let e of t.In)this.Qn(e);this.zn=Math.max(this.zn,t.zn),t.Bn.forEach((e,i)=>{this.Ln(i,e)})}static ts(){return new s(2)}static ns(){return new s(3)}Qn(t){switch(t.$n){case 0:this.jn();break;case 1:this.Un(t.Ot);break;case 2:this.Kn(t.Ot);break;case 3:this.Zn(t.Ot);break;case 4:this.Xn();break;case 5:this.qn(t.Ot);break;case 6:this.Yn()}}Yn(){let t=this.In.findIndex(e=>e.$n===5);t!==-1&&this.In.splice(t,1)}},Ga=".";function Nt(s,t){if(!It(s))return"n/a";if(!je(t))throw new TypeError("invalid length");if(t<0||t>16)throw new TypeError("invalid length");return t===0?s.toString():("0000000000000000"+s.toString()).slice(-t)}var Se=class{constructor(t,e){if(e||(e=1),It(t)&&je(t)||(t=100),t<0)throw new TypeError("invalid base");this.zi=t,this.ss=e,this.es()}format(t){let e=t<0?"\u2212":"";return t=Math.abs(t),e+this.rs(t)}es(){if(this.hs=0,this.zi>0&&this.ss>0){let t=this.zi;for(;t>1;)t/=10,this.hs++}}rs(t){let e=this.zi/this.ss,i=Math.floor(t),n="",o=this.hs!==void 0?this.hs:NaN;if(e>1){let a=+(Math.round(t*e)-i*e).toFixed(this.hs);a>=e&&(a-=e,i+=1),n=Ga+Nt(+a.toFixed(this.hs)*this.ss,o)}else i=Math.round(i*e)/e,o>0&&(n=Ga+Nt(0,o));return i.toFixed(0)+n}},Ii=class extends Se{constructor(t=100){super(t)}format(t){return`${super.format(t)}%`}},Xn=class{constructor(t){this.ls=t}format(t){let e="";return t<0&&(e="-",t=-t),t<995?e+this.os(t):t<999995?e+this.os(t/1e3)+"K":t<999999995?(t=1e3*Math.round(t/1e3),e+this.os(t/1e6)+"M"):(t=1e6*Math.round(t/1e6),e+this.os(t/1e9)+"B")}os(t){let e,i=Math.pow(10,this.ls);return e=(t=Math.round(t*i)/i)>=1e-15&&t<1?t.toFixed(this.ls).replace(/\.?0+$/,""):String(t),e.replace(/(\.[1-9]*)0+$/,(n,o)=>o)}};function zr(s,t,e,i,n,o,a){if(t.length===0||i.from>=t.length||i.to<=0)return;let{context:r,horizontalPixelRatio:l,verticalPixelRatio:c}=s,h=t[i.from],d=o(s,h),m=h;if(i.to-i.from<2){let u=n/2;r.beginPath();let p={nt:h.nt-u,st:h.st},f={nt:h.nt+u,st:h.st};r.moveTo(p.nt*l,p.st*c),r.lineTo(f.nt*l,f.st*c),a(s,d,p,f)}else{let u=(f,w)=>{a(s,d,m,w),r.beginPath(),d=f,m=w},p=m;r.beginPath(),r.moveTo(h.nt*l,h.st*c);for(let f=i.from+1;f<i.to;++f){p=t[f];let w=o(s,p);switch(e){case 0:r.lineTo(p.nt*l,p.st*c);break;case 1:r.lineTo(p.nt*l,t[f-1].st*c),w!==d&&(u(w,p),r.lineTo(p.nt*l,t[f-1].st*c)),r.lineTo(p.nt*l,p.st*c);break;case 2:{let[x,S]=Cc(t,f-1,f);r.bezierCurveTo(x.nt*l,x.st*c,S.nt*l,S.st*c,p.nt*l,p.st*c);break}}e!==1&&w!==d&&(u(w,p),r.moveTo(p.nt*l,p.st*c))}(m!==p||m===p&&e===1)&&a(s,d,m,p)}}var qa=6;function Dn(s,t){return{nt:s.nt-t.nt,st:s.st-t.st}}function Za(s,t){return{nt:s.nt/t,st:s.st/t}}function Cc(s,t,e){let i=Math.max(0,t-1),n=Math.min(s.length-1,e+1);var o,a;return[(o=s[t],a=Za(Dn(s[e],s[i]),qa),{nt:o.nt+a.nt,st:o.st+a.st}),Dn(s[e],Za(Dn(s[n],s[t]),qa))]}function Sc(s,t,e,i,n){let{context:o,horizontalPixelRatio:a,verticalPixelRatio:r}=t;o.lineTo(n.nt*a,s*r),o.lineTo(i.nt*a,s*r),o.closePath(),o.fillStyle=e,o.fill()}var zi=class extends ft{constructor(){super(...arguments),this.G=null}J(t){this.G=t}Z(t){var e;if(this.G===null)return;let{it:i,tt:n,_s:o,et:a,Nt:r,us:l}=this.G,c=(e=this.G.cs)!==null&&e!==void 0?e:this.G.ds?0:t.mediaSize.height;if(n===null)return;let h=t.context;h.lineCap="butt",h.lineJoin="round",h.lineWidth=a,ee(h,r),h.lineWidth=1,zr(t,i,l,n,o,this.fs.bind(this),Sc.bind(null,c))}};function Kn(s,t,e){return Math.min(Math.max(s,t),e)}function _i(s,t,e){return t-s<=e}function Or(s){let t=Math.ceil(s);return t%2==0?t-1:t}var Ge=class{vs(t,e){let i=this.ps,{bs:n,ws:o,gs:a,Ms:r,xs:l,cs:c}=e;if(this.Ss===void 0||i===void 0||i.bs!==n||i.ws!==o||i.gs!==a||i.Ms!==r||i.cs!==c||i.xs!==l){let h=t.context.createLinearGradient(0,0,0,l);if(h.addColorStop(0,n),c!=null){let d=Kn(c*t.verticalPixelRatio/l,0,1);h.addColorStop(d,o),h.addColorStop(d,a)}h.addColorStop(1,r),this.Ss=h,this.ps=e}return this.Ss}},Jn=class extends zi{constructor(){super(...arguments),this.ks=new Ge}fs(t,e){return this.ks.vs(t,{bs:e.ys,ws:"",gs:"",Ms:e.Cs,xs:t.bitmapSize.height})}};function Mc(s,t){let e=s.context;e.strokeStyle=t,e.stroke()}var Oi=class extends ft{constructor(){super(...arguments),this.G=null}J(t){this.G=t}Z(t){if(this.G===null)return;let{it:e,tt:i,_s:n,us:o,et:a,Nt:r,Ts:l}=this.G;if(i===null)return;let c=t.context;c.lineCap="butt",c.lineWidth=a*t.verticalPixelRatio,ee(c,r),c.lineJoin="round";let h=this.Ps.bind(this);o!==void 0&&zr(t,e,o,i,n,h,Mc),l&&(function(d,m,u,p,f){let{horizontalPixelRatio:w,verticalPixelRatio:x,context:S}=d,A=null,z=Math.max(1,Math.floor(w))%2/2,q=u*x+z;for(let bt=p.to-1;bt>=p.from;--bt){let nt=m[bt];if(nt){let K=f(d,nt);K!==A&&(S.beginPath(),A!==null&&S.fill(),S.fillStyle=K,A=K);let Ft=Math.round(nt.nt*w)+z,ae=nt.st*x;S.moveTo(Ft,ae),S.arc(Ft,ae,q,0,2*Math.PI)}}S.fill()})(t,e,l,i,h)}},Li=class extends Oi{Ps(t,e){return e.lt}};function Lr(s,t,e,i,n=0,o=t.length){let a=o-n;for(;0<a;){let r=a>>1,l=n+r;i(t[l],e)===s?(n=l+1,a-=r+1):a=r}return n}var ei=Lr.bind(null,!0),Pr=Lr.bind(null,!1);function Dc(s,t){return s.ot<t}function Tc(s,t){return t<s.ot}function Br(s,t,e){let i=t.Rs(),n=t.ui(),o=ei(s,i,Dc),a=Pr(s,n,Tc);if(!e)return{from:o,to:a};let r=o,l=a;return o>0&&o<s.length&&s[o].ot>=i&&(r=o-1),a>0&&a<s.length&&s[a-1].ot<=n&&(l=a+1),{from:r,to:l}}var qe=class{constructor(t,e,i){this.Ds=!0,this.Os=!0,this.As=!0,this.Vs=[],this.Bs=null,this.Is=t,this.zs=e,this.Ls=i}bt(t){this.Ds=!0,t==="data"&&(this.Os=!0),t==="options"&&(this.As=!0)}gt(){return this.Is.yt()?(this.Es(),this.Bs===null?null:this.Ns):null}Fs(){this.Vs=this.Vs.map(t=>Object.assign(Object.assign({},t),this.Is.js().Ws(t.ot)))}Hs(){this.Bs=null}Es(){this.Os&&(this.$s(),this.Os=!1),this.As&&(this.Fs(),this.As=!1),this.Ds&&(this.Us(),this.Ds=!1)}Us(){let t=this.Is.Dt(),e=this.zs.St();if(this.Hs(),e.Ei()||t.Ei())return;let i=e.qs();if(i===null||this.Is.Vn().Ys()===0)return;let n=this.Is.Ct();n!==null&&(this.Bs=Br(this.Vs,i,this.Ls),this.Xs(t,e,n.Ot),this.Ks())}},Me=class extends qe{constructor(t,e){super(t,e,!0)}Xs(t,e,i){e.Zs(this.Vs,$e(this.Bs)),t.Gs(this.Vs,i,$e(this.Bs))}Js(t,e){return{ot:t,_t:e,nt:NaN,st:NaN}}$s(){let t=this.Is.js();this.Vs=this.Is.Vn().Qs().map(e=>{let i=e.Ot[3];return this.te(e.ie,i,t)})}},ts=class extends Me{constructor(t,e){super(t,e),this.Ns=new Qe,this.ne=new Jn,this.se=new Li,this.Ns.X([this.ne,this.se])}te(t,e,i){return Object.assign(Object.assign({},this.Js(t,e)),i.Ws(t))}Ks(){let t=this.Is.W();this.ne.J({us:t.lineType,it:this.Vs,Nt:t.lineStyle,et:t.lineWidth,cs:null,ds:t.invertFilledArea,tt:this.Bs,_s:this.zs.St().ee()}),this.se.J({us:t.lineVisible?t.lineType:void 0,it:this.Vs,Nt:t.lineStyle,et:t.lineWidth,tt:this.Bs,_s:this.zs.St().ee(),Ts:t.pointMarkersVisible?t.pointMarkersRadius||t.lineWidth/2+2:void 0})}},es=class extends ft{constructor(){super(...arguments),this.zt=null,this.re=0,this.he=0}J(t){this.zt=t}Z({context:t,horizontalPixelRatio:e,verticalPixelRatio:i}){if(this.zt===null||this.zt.Vn.length===0||this.zt.tt===null)return;this.re=this.le(e),this.re>=2&&Math.max(1,Math.floor(e))%2!=this.re%2&&this.re--,this.he=this.zt.ae?Math.min(this.re,Math.floor(e)):this.re;let n=null,o=this.he<=this.re&&this.zt.ee>=Math.floor(1.5*e);for(let a=this.zt.tt.from;a<this.zt.tt.to;++a){let r=this.zt.Vn[a];n!==r.oe&&(t.fillStyle=r.oe,n=r.oe);let l=Math.floor(.5*this.he),c=Math.round(r.nt*e),h=c-l,d=this.he,m=h+d-1,u=Math.min(r._e,r.ue),p=Math.max(r._e,r.ue),f=Math.round(u*i)-l,w=Math.round(p*i)+l,x=Math.max(w-f,this.he);t.fillRect(h,f,d,x);let S=Math.ceil(1.5*this.re);if(o){if(this.zt.ce){let bt=c-S,nt=Math.max(f,Math.round(r.de*i)-l),K=nt+d-1;K>f+x-1&&(K=f+x-1,nt=K-d+1),t.fillRect(bt,nt,h-bt,K-nt+1)}let A=c+S,z=Math.max(f,Math.round(r.fe*i)-l),q=z+d-1;q>f+x-1&&(q=f+x-1,z=q-d+1),t.fillRect(m+1,z,A-m,q-z+1)}}}le(t){let e=Math.floor(t);return Math.max(e,Math.floor((function(i,n){return Math.floor(.3*i*n)})(v(this.zt).ee,t)))}},Pi=class extends qe{constructor(t,e){super(t,e,!1)}Xs(t,e,i){e.Zs(this.Vs,$e(this.Bs)),t.ve(this.Vs,i,$e(this.Bs))}pe(t,e,i){return{ot:t,me:e.Ot[0],be:e.Ot[1],we:e.Ot[2],ge:e.Ot[3],nt:NaN,de:NaN,_e:NaN,ue:NaN,fe:NaN}}$s(){let t=this.Is.js();this.Vs=this.Is.Vn().Qs().map(e=>this.te(e.ie,e,t))}},is=class extends Pi{constructor(){super(...arguments),this.Ns=new es}te(t,e,i){return Object.assign(Object.assign({},this.pe(t,e,i)),i.Ws(t))}Ks(){let t=this.Is.W();this.Ns.J({Vn:this.Vs,ee:this.zs.St().ee(),ce:t.openVisible,ae:t.thinBars,tt:this.Bs})}},ns=class extends zi{constructor(){super(...arguments),this.ks=new Ge}fs(t,e){let i=this.G;return this.ks.vs(t,{bs:e.Me,ws:e.xe,gs:e.Se,Ms:e.ke,xs:t.bitmapSize.height,cs:i.cs})}},ss=class extends Oi{constructor(){super(...arguments),this.ye=new Ge}Ps(t,e){let i=this.G;return this.ye.vs(t,{bs:e.Ce,ws:e.Ce,gs:e.Te,Ms:e.Te,xs:t.bitmapSize.height,cs:i.cs})}},os=class extends Me{constructor(t,e){super(t,e),this.Ns=new Qe,this.Pe=new ns,this.Re=new ss,this.Ns.X([this.Pe,this.Re])}te(t,e,i){return Object.assign(Object.assign({},this.Js(t,e)),i.Ws(t))}Ks(){let t=this.Is.Ct();if(t===null)return;let e=this.Is.W(),i=this.Is.Dt().Rt(e.baseValue.price,t.Ot),n=this.zs.St().ee();this.Pe.J({it:this.Vs,et:e.lineWidth,Nt:e.lineStyle,us:e.lineType,cs:i,ds:!1,tt:this.Bs,_s:n}),this.Re.J({it:this.Vs,et:e.lineWidth,Nt:e.lineStyle,us:e.lineVisible?e.lineType:void 0,Ts:e.pointMarkersVisible?e.pointMarkersRadius||e.lineWidth/2+2:void 0,cs:i,tt:this.Bs,_s:n})}},as=class extends ft{constructor(){super(...arguments),this.zt=null,this.re=0}J(t){this.zt=t}Z(t){if(this.zt===null||this.zt.Vn.length===0||this.zt.tt===null)return;let{horizontalPixelRatio:e}=t;this.re=(function(o,a){if(o>=2.5&&o<=4)return Math.floor(3*a);let r=1-.2*Math.atan(Math.max(4,o)-4)/(.5*Math.PI),l=Math.floor(o*r*a),c=Math.floor(o*a),h=Math.min(l,c);return Math.max(Math.floor(a),h)})(this.zt.ee,e),this.re>=2&&Math.floor(e)%2!=this.re%2&&this.re--;let i=this.zt.Vn;this.zt.De&&this.Oe(t,i,this.zt.tt),this.zt._i&&this.Ae(t,i,this.zt.tt);let n=this.Ve(e);(!this.zt._i||this.re>2*n)&&this.Be(t,i,this.zt.tt)}Oe(t,e,i){if(this.zt===null)return;let{context:n,horizontalPixelRatio:o,verticalPixelRatio:a}=t,r="",l=Math.min(Math.floor(o),Math.floor(this.zt.ee*o));l=Math.max(Math.floor(o),Math.min(l,this.re));let c=Math.floor(.5*l),h=null;for(let d=i.from;d<i.to;d++){let m=e[d];m.Ie!==r&&(n.fillStyle=m.Ie,r=m.Ie);let u=Math.round(Math.min(m.de,m.fe)*a),p=Math.round(Math.max(m.de,m.fe)*a),f=Math.round(m._e*a),w=Math.round(m.ue*a),x=Math.round(o*m.nt)-c,S=x+l-1;h!==null&&(x=Math.max(h+1,x),x=Math.min(x,S));let A=S-x+1;n.fillRect(x,f,A,u-f),n.fillRect(x,p+1,A,w-p),h=S}}Ve(t){let e=Math.floor(1*t);this.re<=2*e&&(e=Math.floor(.5*(this.re-1)));let i=Math.max(Math.floor(t),e);return this.re<=2*i?Math.max(Math.floor(t),Math.floor(1*t)):i}Ae(t,e,i){if(this.zt===null)return;let{context:n,horizontalPixelRatio:o,verticalPixelRatio:a}=t,r="",l=this.Ve(o),c=null;for(let h=i.from;h<i.to;h++){let d=e[h];d.ze!==r&&(n.fillStyle=d.ze,r=d.ze);let m=Math.round(d.nt*o)-Math.floor(.5*this.re),u=m+this.re-1,p=Math.round(Math.min(d.de,d.fe)*a),f=Math.round(Math.max(d.de,d.fe)*a);if(c!==null&&(m=Math.max(c+1,m),m=Math.min(m,u)),this.zt.ee*o>2*l)xc(n,m,p,u-m+1,f-p+1,l);else{let w=u-m+1;n.fillRect(m,p,w,f-p+1)}c=u}}Be(t,e,i){if(this.zt===null)return;let{context:n,horizontalPixelRatio:o,verticalPixelRatio:a}=t,r="",l=this.Ve(o);for(let c=i.from;c<i.to;c++){let h=e[c],d=Math.round(Math.min(h.de,h.fe)*a),m=Math.round(Math.max(h.de,h.fe)*a),u=Math.round(h.nt*o)-Math.floor(.5*this.re),p=u+this.re-1;if(h.oe!==r){let f=h.oe;n.fillStyle=f,r=f}this.zt._i&&(u+=l,d+=l,p-=l,m-=l),d>m||n.fillRect(u,d,p-u+1,m-d+1)}}},rs=class extends Pi{constructor(){super(...arguments),this.Ns=new as}te(t,e,i){return Object.assign(Object.assign({},this.pe(t,e,i)),i.Ws(t))}Ks(){let t=this.Is.W();this.Ns.J({Vn:this.Vs,ee:this.zs.St().ee(),De:t.wickVisible,_i:t.borderVisible,tt:this.Bs})}},ls=class{constructor(t,e){this.Le=t,this.zi=e}K(t,e,i){this.Le.draw(t,this.zi,e,i)}},Ae=class extends qe{constructor(t,e,i){super(t,e,!1),this.mn=i,this.Ns=new ls(this.mn.renderer(),n=>{let o=t.Ct();return o===null?null:t.Dt().Rt(n,o.Ot)})}Ee(t){return this.mn.priceValueBuilder(t)}Ne(t){return this.mn.isWhitespace(t)}$s(){let t=this.Is.js();this.Vs=this.Is.Vn().Qs().map(e=>Object.assign(Object.assign({ot:e.ie,nt:NaN},t.Ws(e.ie)),{Fe:e.We}))}Xs(t,e){e.Zs(this.Vs,$e(this.Bs))}Ks(){this.mn.update({bars:this.Vs.map(Rc),barSpacing:this.zs.St().ee(),visibleRange:this.Bs},this.Is.W())}};function Rc(s){return{x:s.nt,time:s.ot,originalData:s.Fe,barColor:s.oe}}var cs=class extends ft{constructor(){super(...arguments),this.zt=null,this.je=[]}J(t){this.zt=t,this.je=[]}Z({context:t,horizontalPixelRatio:e,verticalPixelRatio:i}){if(this.zt===null||this.zt.it.length===0||this.zt.tt===null)return;this.je.length||this.He(e);let n=Math.max(1,Math.floor(i)),o=Math.round(this.zt.$e*i)-Math.floor(n/2),a=o+n;for(let r=this.zt.tt.from;r<this.zt.tt.to;r++){let l=this.zt.it[r],c=this.je[r-this.zt.tt.from],h=Math.round(l.st*i),d,m;t.fillStyle=l.oe,h<=o?(d=h,m=a):(d=o,m=h-Math.floor(n/2)+n),t.fillRect(c.Rs,d,c.ui-c.Rs+1,m-d)}}He(t){if(this.zt===null||this.zt.it.length===0||this.zt.tt===null)return void(this.je=[]);let e=Math.ceil(this.zt.ee*t)<=1?0:Math.max(1,Math.floor(t)),i=Math.round(this.zt.ee*t)-e;this.je=new Array(this.zt.tt.to-this.zt.tt.from);for(let o=this.zt.tt.from;o<this.zt.tt.to;o++){let a=this.zt.it[o],r=Math.round(a.nt*t),l,c;if(i%2){let h=(i-1)/2;l=r-h,c=r+h}else{let h=i/2;l=r-h,c=r+h-1}this.je[o-this.zt.tt.from]={Rs:l,ui:c,Ue:r,qe:a.nt*t,ot:a.ot}}for(let o=this.zt.tt.from+1;o<this.zt.tt.to;o++){let a=this.je[o-this.zt.tt.from],r=this.je[o-this.zt.tt.from-1];a.ot===r.ot+1&&a.Rs-r.ui!==e+1&&(r.Ue>r.qe?r.ui=a.Rs-e-1:a.Rs=r.ui+e+1)}let n=Math.ceil(this.zt.ee*t);for(let o=this.zt.tt.from;o<this.zt.tt.to;o++){let a=this.je[o-this.zt.tt.from];a.ui<a.Rs&&(a.ui=a.Rs);let r=a.ui-a.Rs+1;n=Math.min(r,n)}if(e>0&&n<4)for(let o=this.zt.tt.from;o<this.zt.tt.to;o++){let a=this.je[o-this.zt.tt.from];a.ui-a.Rs+1>n&&(a.Ue>a.qe?a.ui-=1:a.Rs+=1)}}},hs=class extends Me{constructor(){super(...arguments),this.Ns=new cs}te(t,e,i){return Object.assign(Object.assign({},this.Js(t,e)),i.Ws(t))}Ks(){let t={it:this.Vs,ee:this.zs.St().ee(),tt:this.Bs,$e:this.Is.Dt().Rt(this.Is.W().base,v(this.Is.Ct()).Ot)};this.Ns.J(t)}},ds=class extends Me{constructor(){super(...arguments),this.Ns=new Li}te(t,e,i){return Object.assign(Object.assign({},this.Js(t,e)),i.Ws(t))}Ks(){let t=this.Is.W(),e={it:this.Vs,Nt:t.lineStyle,us:t.lineVisible?t.lineType:void 0,et:t.lineWidth,Ts:t.pointMarkersVisible?t.pointMarkersRadius||t.lineWidth/2+2:void 0,tt:this.Bs,_s:this.zs.St().ee()};this.Ns.J(e)}},Ec=/[2-9]/g,ie=class{constructor(t=50){this.Ye=0,this.Xe=1,this.Ke=1,this.Ze={},this.Ge=new Map,this.Je=t}Qe(){this.Ye=0,this.Ge.clear(),this.Xe=1,this.Ke=1,this.Ze={}}Mi(t,e,i){return this.tr(t,e,i).width}gi(t,e,i){let n=this.tr(t,e,i);return((n.actualBoundingBoxAscent||0)-(n.actualBoundingBoxDescent||0))/2}tr(t,e,i){let n=i||Ec,o=String(e).replace(n,"0");if(this.Ge.has(o))return ot(this.Ge.get(o)).ir;if(this.Ye===this.Je){let r=this.Ze[this.Ke];delete this.Ze[this.Ke],this.Ge.delete(r),this.Ke++,this.Ye--}t.save(),t.textBaseline="middle";let a=t.measureText(o);return t.restore(),a.width===0&&e.length||(this.Ge.set(o,{ir:a,nr:this.Xe}),this.Ze[this.Xe]=o,this.Ye++,this.Xe++),a}},ms=class{constructor(t){this.sr=null,this.k=null,this.er="right",this.rr=t}hr(t,e,i){this.sr=t,this.k=e,this.er=i}K(t){this.k!==null&&this.sr!==null&&this.sr.K(t,this.k,this.rr,this.er)}},Bi=class{constructor(t,e,i){this.lr=t,this.rr=new ie(50),this.ar=e,this.F=i,this.j=-1,this.Wt=new ms(this.rr)}gt(){let t=this.F._r(this.ar);if(t===null)return null;let e=t.ur(this.ar)?t.cr():this.ar.Dt();if(e===null)return null;let i=t.dr(e);if(i==="overlay")return null;let n=this.F.vr();return n.P!==this.j&&(this.j=n.P,this.rr.Qe()),this.Wt.hr(this.lr.Bi(),n,i),this.Wt}},us=class extends ft{constructor(){super(...arguments),this.zt=null}J(t){this.zt=t}pr(t,e){var i;if(!(!((i=this.zt)===null||i===void 0)&&i.yt))return null;let{st:n,et:o,mr:a}=this.zt;return e>=n-o-7&&e<=n+o+7?{br:this.zt,mr:a}:null}Z({context:t,bitmapSize:e,horizontalPixelRatio:i,verticalPixelRatio:n}){if(this.zt===null||this.zt.yt===!1)return;let o=Math.round(this.zt.st*n);o<0||o>e.height||(t.lineCap="butt",t.strokeStyle=this.zt.O,t.lineWidth=Math.floor(this.zt.et*i),ee(t,this.zt.Nt),Rr(t,o,0,e.width))}},Ze=class{constructor(t){this.wr={st:0,O:"rgba(0, 0, 0, 0)",et:1,Nt:0,yt:!1},this.gr=new us,this.ft=!0,this.Is=t,this.zs=t.$t(),this.gr.J(this.wr)}bt(){this.ft=!0}gt(){return this.Is.yt()?(this.ft&&(this.Mr(),this.ft=!1),this.gr):null}},ps=class extends Ze{constructor(t){super(t)}Mr(){this.wr.yt=!1;let t=this.Is.Dt(),e=t.Sr().Sr;if(e!==2&&e!==3)return;let i=this.Is.W();if(!i.baseLineVisible||!this.Is.yt())return;let n=this.Is.Ct();n!==null&&(this.wr.yt=!0,this.wr.st=t.Rt(n.Ot,n.Ot),this.wr.O=i.baseLineColor,this.wr.et=i.baseLineWidth,this.wr.Nt=i.baseLineStyle)}},fs=class extends ft{constructor(){super(...arguments),this.zt=null}J(t){this.zt=t}We(){return this.zt}Z({context:t,horizontalPixelRatio:e,verticalPixelRatio:i}){let n=this.zt;if(n===null)return;let o=Math.max(1,Math.floor(e)),a=o%2/2,r=Math.round(n.qe.x*e)+a,l=n.qe.y*i;t.fillStyle=n.kr,t.beginPath();let c=Math.max(2,1.5*n.yr)*e;t.arc(r,l,c,0,2*Math.PI,!1),t.fill(),t.fillStyle=n.Cr,t.beginPath(),t.arc(r,l,n.ht*e,0,2*Math.PI,!1),t.fill(),t.lineWidth=o,t.strokeStyle=n.Tr,t.beginPath(),t.arc(r,l,n.ht*e+o/2,0,2*Math.PI,!1),t.stroke()}},Ic=[{Pr:0,Rr:.25,Dr:4,Or:10,Ar:.25,Vr:0,Br:.4,Ir:.8},{Pr:.25,Rr:.525,Dr:10,Or:14,Ar:0,Vr:0,Br:.8,Ir:0},{Pr:.525,Rr:1,Dr:14,Or:14,Ar:0,Vr:0,Br:0,Ir:0}];function Ya(s,t,e,i){return(function(n,o){if(n==="transparent")return n;let a=Ti(n),r=a[3];return`rgba(${a[0]}, ${a[1]}, ${a[2]}, ${o*r})`})(s,e+(i-e)*t)}function Xa(s,t){let e=s%2600/2600,i;for(let l of Ic)if(e>=l.Pr&&e<=l.Rr){i=l;break}Gt(i!==void 0,"Last price animation internal logic error");let n=(e-i.Pr)/(i.Rr-i.Pr);return{Cr:Ya(t,n,i.Ar,i.Vr),Tr:Ya(t,n,i.Br,i.Ir),ht:(o=n,a=i.Dr,r=i.Or,a+(r-a)*o)};var o,a,r}var bs=class{constructor(t){this.Wt=new fs,this.ft=!0,this.zr=!0,this.Lr=performance.now(),this.Er=this.Lr-1,this.Nr=t}Fr(){this.Er=this.Lr-1,this.bt()}Wr(){if(this.bt(),this.Nr.W().lastPriceAnimation===2){let t=performance.now(),e=this.Er-t;if(e>0)return void(e<650&&(this.Er+=2600));this.Lr=t,this.Er=t+2600}}bt(){this.ft=!0}jr(){this.zr=!0}yt(){return this.Nr.W().lastPriceAnimation!==0}Hr(){switch(this.Nr.W().lastPriceAnimation){case 0:return!1;case 1:return!0;case 2:return performance.now()<=this.Er}}gt(){return this.ft?(this.Mt(),this.ft=!1,this.zr=!1):this.zr&&(this.$r(),this.zr=!1),this.Wt}Mt(){this.Wt.J(null);let t=this.Nr.$t().St(),e=t.qs(),i=this.Nr.Ct();if(e===null||i===null)return;let n=this.Nr.Ur(!0);if(n.qr||!e.Yr(n.ie))return;let o={x:t.It(n.ie),y:this.Nr.Dt().Rt(n._t,i.Ot)},a=n.O,r=this.Nr.W().lineWidth,l=Xa(this.Xr(),a);this.Wt.J({kr:a,yr:r,Cr:l.Cr,Tr:l.Tr,ht:l.ht,qe:o})}$r(){let t=this.Wt.We();if(t!==null){let e=Xa(this.Xr(),t.kr);t.Cr=e.Cr,t.Tr=e.Tr,t.ht=e.ht}}Xr(){return this.Hr()?performance.now()-this.Lr:2599}};function Ne(s,t){return Or(Math.min(Math.max(s,12),30)*t)}function Ye(s,t){switch(s){case"arrowDown":case"arrowUp":return Ne(t,1);case"circle":return Ne(t,.8);case"square":return Ne(t,.7)}}function Ar(s){return(function(t){let e=Math.ceil(t);return e%2!=0?e-1:e})(Ne(s,1))}function Ka(s){return Math.max(Ne(s,.1),3)}function Nr(s,t,e,i,n){let o=Ye("square",e),a=(o-1)/2,r=s-a,l=t-a;return i>=r&&i<=r+o&&n>=l&&n<=l+o}function Ja(s,t,e,i){let n=(Ye("arrowUp",i)-1)/2*e.Kr,o=(Or(i/2)-1)/2*e.Kr;t.beginPath(),s?(t.moveTo(e.nt-n,e.st),t.lineTo(e.nt,e.st-n),t.lineTo(e.nt+n,e.st),t.lineTo(e.nt+o,e.st),t.lineTo(e.nt+o,e.st+n),t.lineTo(e.nt-o,e.st+n),t.lineTo(e.nt-o,e.st)):(t.moveTo(e.nt-n,e.st),t.lineTo(e.nt,e.st+n),t.lineTo(e.nt+n,e.st),t.lineTo(e.nt+o,e.st),t.lineTo(e.nt+o,e.st-n),t.lineTo(e.nt-o,e.st-n),t.lineTo(e.nt-o,e.st)),t.fill()}function zc(s,t,e,i,n,o){return Nr(t,e,i,n,o)}var gs=class extends ft{constructor(){super(...arguments),this.zt=null,this.rr=new ie,this.j=-1,this.H="",this.Zr=""}J(t){this.zt=t}hr(t,e){this.j===t&&this.H===e||(this.j=t,this.H=e,this.Zr=ke(t,e),this.rr.Qe())}pr(t,e){if(this.zt===null||this.zt.tt===null)return null;for(let i=this.zt.tt.from;i<this.zt.tt.to;i++){let n=this.zt.it[i];if(Lc(n,t,e))return{br:n.Gr,mr:n.mr}}return null}Z({context:t,horizontalPixelRatio:e,verticalPixelRatio:i},n,o){if(this.zt!==null&&this.zt.tt!==null){t.textBaseline="middle",t.font=this.Zr;for(let a=this.zt.tt.from;a<this.zt.tt.to;a++){let r=this.zt.it[a];r.Zt!==void 0&&(r.Zt.ji=this.rr.Mi(t,r.Zt.Jr),r.Zt.Bt=this.j,r.Zt.nt=r.nt-r.Zt.ji/2),Oc(r,t,e,i)}}}};function Oc(s,t,e,i){t.fillStyle=s.O,s.Zt!==void 0&&(function(n,o,a,r,l,c){n.save(),n.scale(l,c),n.fillText(o,a,r),n.restore()})(t,s.Zt.Jr,s.Zt.nt,s.Zt.st,e,i),(function(n,o,a){if(n.Ys!==0){switch(n.Qr){case"arrowDown":return void Ja(!1,o,a,n.Ys);case"arrowUp":return void Ja(!0,o,a,n.Ys);case"circle":return void(function(r,l,c){let h=(Ye("circle",c)-1)/2;r.beginPath(),r.arc(l.nt,l.st,h*l.Kr,0,2*Math.PI,!1),r.fill()})(o,a,n.Ys);case"square":return void(function(r,l,c){let h=Ye("square",c),d=(h-1)*l.Kr/2,m=l.nt-d,u=l.st-d;r.fillRect(m,u,h*l.Kr,h*l.Kr)})(o,a,n.Ys)}n.Qr}})(s,t,(function(n,o,a){let r=Math.max(1,Math.floor(o))%2/2;return{nt:Math.round(n.nt*o)+r,st:n.st*a,Kr:o}})(s,e,i))}function Lc(s,t,e){return!(s.Zt===void 0||!(function(i,n,o,a,r,l){let c=a/2;return r>=i&&r<=i+o&&l>=n-c&&l<=n+c})(s.Zt.nt,s.Zt.st,s.Zt.ji,s.Zt.Bt,t,e))||(function(i,n,o){if(i.Ys===0)return!1;switch(i.Qr){case"arrowDown":case"arrowUp":return zc(0,i.nt,i.st,i.Ys,n,o);case"circle":return(function(a,r,l,c,h){let d=2+Ye("circle",l)/2,m=a-c,u=r-h;return Math.sqrt(m*m+u*u)<=d})(i.nt,i.st,i.Ys,n,o);case"square":return Nr(i.nt,i.st,i.Ys,n,o)}})(s,t,e)}function Pc(s,t,e,i,n,o,a,r,l){let c=It(e)?e:e.ge,h=It(e)?e:e.be,d=It(e)?e:e.we,m=It(t.size)?Math.max(t.size,0):1,u=Ar(r.ee())*m,p=u/2;switch(s.Ys=u,t.position){case"inBar":return s.st=a.Rt(c,l),void(s.Zt!==void 0&&(s.Zt.st=s.st+p+o+.6*n));case"aboveBar":return s.st=a.Rt(h,l)-p-i.th,s.Zt!==void 0&&(s.Zt.st=s.st-p-.6*n,i.th+=1.2*n),void(i.th+=u+o);case"belowBar":return s.st=a.Rt(d,l)+p+i.ih,s.Zt!==void 0&&(s.Zt.st=s.st+p+o+.6*n,i.ih+=1.2*n),void(i.ih+=u+o)}t.position}var _s=class{constructor(t,e){this.ft=!0,this.nh=!0,this.sh=!0,this.eh=null,this.Wt=new gs,this.Nr=t,this.Hi=e,this.zt={it:[],tt:null}}bt(t){this.ft=!0,this.sh=!0,t==="data"&&(this.nh=!0)}gt(t){if(!this.Nr.yt())return null;this.ft&&this.rh();let e=this.Hi.W().layout;return this.Wt.hr(e.fontSize,e.fontFamily),this.Wt.J(this.zt),this.Wt}hh(){if(this.sh){if(this.Nr.lh().length>0){let t=this.Hi.St().ee(),e=Ka(t),i=1.5*Ar(t)+2*e;this.eh={above:i,below:i}}else this.eh=null;this.sh=!1}return this.eh}rh(){let t=this.Nr.Dt(),e=this.Hi.St(),i=this.Nr.lh();this.nh&&(this.zt.it=i.map(h=>({ot:h.time,nt:0,st:0,Ys:0,Qr:h.shape,O:h.color,Gr:h.Gr,mr:h.id,Zt:void 0})),this.nh=!1);let n=this.Hi.W().layout;this.zt.tt=null;let o=e.qs();if(o===null)return;let a=this.Nr.Ct();if(a===null||this.zt.it.length===0)return;let r=NaN,l=Ka(e.ee()),c={th:l,ih:l};this.zt.tt=Br(this.zt.it,o,!0);for(let h=this.zt.tt.from;h<this.zt.tt.to;h++){let d=i[h];d.time!==r&&(c.th=l,c.ih=l,r=d.time);let m=this.zt.it[h];m.nt=e.It(d.time),d.text!==void 0&&d.text.length>0&&(m.Zt={Jr:d.text,nt:0,st:0,ji:0,Bt:0});let u=this.Nr.ah(d.time);u!==null&&Pc(m,d,u,c,n.fontSize,l,t,e,a.Ot)}this.ft=!1}},vs=class extends Ze{constructor(t){super(t)}Mr(){let t=this.wr;t.yt=!1;let e=this.Is.W();if(!e.priceLineVisible||!this.Is.yt())return;let i=this.Is.Ur(e.priceLineSource===0);i.qr||(t.yt=!0,t.st=i.Si,t.O=this.Is.oh(i.O),t.et=e.priceLineWidth,t.Nt=e.priceLineStyle)}},ys=class extends Ce{constructor(t){super(),this.jt=t}Ii(t,e,i){t.yt=!1,e.yt=!1;let n=this.jt;if(!n.yt())return;let o=n.W(),a=o.lastValueVisible,r=n._h()!=="",l=o.seriesLastValueMode===0,c=n.Ur(!1);if(c.qr)return;a&&(t.Zt=this.uh(c,a,l),t.yt=t.Zt.length!==0),(r||l)&&(e.Zt=this.dh(c,a,r,l),e.yt=e.Zt.length>0);let h=n.oh(c.O),d=$i(h);i.t=d.t,i.Si=c.Si,e.At=n.$t().Vt(c.Si/n.Dt().Bt()),t.At=h,t.O=d.i,e.O=d.i}dh(t,e,i,n){let o="",a=this.jt._h();return i&&a.length!==0&&(o+=`${a} `),e&&n&&(o+=this.jt.Dt().fh()?t.ph:t.mh),o.trim()}uh(t,e,i){return e?i?this.jt.Dt().fh()?t.mh:t.ph:t.Zt:""}};function tr(s,t,e,i){let n=Number.isFinite(t),o=Number.isFinite(e);return n&&o?s(t,e):n||o?n?t:e:i}var wt=class s{constructor(t,e){this.bh=t,this.wh=e}gh(t){return t!==null&&this.bh===t.bh&&this.wh===t.wh}Mh(){return new s(this.bh,this.wh)}xh(){return this.bh}Sh(){return this.wh}kh(){return this.wh-this.bh}Ei(){return this.wh===this.bh||Number.isNaN(this.wh)||Number.isNaN(this.bh)}Jn(t){return t===null?this:new s(tr(Math.min,this.xh(),t.xh(),-1/0),tr(Math.max,this.Sh(),t.Sh(),1/0))}yh(t){if(!It(t)||this.wh-this.bh===0)return;let e=.5*(this.wh+this.bh),i=this.wh-e,n=this.bh-e;i*=t,n*=t,this.wh=e+i,this.bh=e+n}Ch(t){It(t)&&(this.wh+=t,this.bh+=t)}Th(){return{minValue:this.bh,maxValue:this.wh}}static Ph(t){return t===null?null:new s(t.minValue,t.maxValue)}},Ai=class s{constructor(t,e){this.Rh=t,this.Dh=e||null}Oh(){return this.Rh}Ah(){return this.Dh}Th(){return this.Rh===null?null:{priceRange:this.Rh.Th(),margins:this.Dh||void 0}}static Ph(t){return t===null?null:new s(wt.Ph(t.priceRange),t.margins)}},ws=class extends Ze{constructor(t,e){super(t),this.Vh=e}Mr(){let t=this.wr;t.yt=!1;let e=this.Vh.W();if(!this.Is.yt()||!e.lineVisible)return;let i=this.Vh.Bh();i!==null&&(t.yt=!0,t.st=i,t.O=e.color,t.et=e.lineWidth,t.Nt=e.lineStyle,t.mr=this.Vh.W().id)}},xs=class extends Ce{constructor(t,e){super(),this.Nr=t,this.Vh=e}Ii(t,e,i){t.yt=!1,e.yt=!1;let n=this.Vh.W(),o=n.axisLabelVisible,a=n.title!=="",r=this.Nr;if(!o||!r.yt())return;let l=this.Vh.Bh();if(l===null)return;a&&(e.Zt=n.title,e.yt=!0),e.At=r.$t().Vt(l/r.Dt().Bt()),t.Zt=this.Ih(n.price),t.yt=!0;let c=$i(n.axisLabelColor||n.color);i.t=c.t;let h=n.axisLabelTextColor||c.i;t.O=h,e.O=h,i.Si=l}Ih(t){let e=this.Nr.Ct();return e===null?"":this.Nr.Dt().Ni(t,e.Ot)}},ks=class{constructor(t,e){this.Nr=t,this._n=e,this.zh=new ws(t,this),this.lr=new xs(t,this),this.Lh=new Bi(this.lr,t,t.$t())}Eh(t){St(this._n,t),this.bt(),this.Nr.$t().Nh()}W(){return this._n}Fh(){return this.zh}Wh(){return this.Lh}jh(){return this.lr}bt(){this.zh.bt(),this.lr.bt()}Bh(){let t=this.Nr,e=t.Dt();if(t.$t().St().Ei()||e.Ei())return null;let i=t.Ct();return i===null?null:e.Rt(this._n.price,i.Ot)}},Cs=class extends Ue{constructor(t){super(),this.Hi=t}$t(){return this.Hi}},Bc={Bar:(s,t,e,i)=>{var n;let o=t.upColor,a=t.downColor,r=v(s(e,i)),l=ye(r.Ot[0])<=ye(r.Ot[3]);return{oe:(n=r.O)!==null&&n!==void 0?n:l?o:a}},Candlestick:(s,t,e,i)=>{var n,o,a;let r=t.upColor,l=t.downColor,c=t.borderUpColor,h=t.borderDownColor,d=t.wickUpColor,m=t.wickDownColor,u=v(s(e,i)),p=ye(u.Ot[0])<=ye(u.Ot[3]);return{oe:(n=u.O)!==null&&n!==void 0?n:p?r:l,ze:(o=u.At)!==null&&o!==void 0?o:p?c:h,Ie:(a=u.Hh)!==null&&a!==void 0?a:p?d:m}},Custom:(s,t,e,i)=>{var n;return{oe:(n=v(s(e,i)).O)!==null&&n!==void 0?n:t.color}},Area:(s,t,e,i)=>{var n,o,a,r;let l=v(s(e,i));return{oe:(n=l.lt)!==null&&n!==void 0?n:t.lineColor,lt:(o=l.lt)!==null&&o!==void 0?o:t.lineColor,ys:(a=l.ys)!==null&&a!==void 0?a:t.topColor,Cs:(r=l.Cs)!==null&&r!==void 0?r:t.bottomColor}},Baseline:(s,t,e,i)=>{var n,o,a,r,l,c;let h=v(s(e,i));return{oe:h.Ot[3]>=t.baseValue.price?t.topLineColor:t.bottomLineColor,Ce:(n=h.Ce)!==null&&n!==void 0?n:t.topLineColor,Te:(o=h.Te)!==null&&o!==void 0?o:t.bottomLineColor,Me:(a=h.Me)!==null&&a!==void 0?a:t.topFillColor1,xe:(r=h.xe)!==null&&r!==void 0?r:t.topFillColor2,Se:(l=h.Se)!==null&&l!==void 0?l:t.bottomFillColor1,ke:(c=h.ke)!==null&&c!==void 0?c:t.bottomFillColor2}},Line:(s,t,e,i)=>{var n,o;let a=v(s(e,i));return{oe:(n=a.O)!==null&&n!==void 0?n:t.color,lt:(o=a.O)!==null&&o!==void 0?o:t.color}},Histogram:(s,t,e,i)=>{var n;return{oe:(n=v(s(e,i)).O)!==null&&n!==void 0?n:t.color}}},Ss=class{constructor(t){this.$h=(e,i)=>i!==void 0?i.Ot:this.Nr.Vn().Uh(e),this.Nr=t,this.qh=Bc[t.Yh()]}Ws(t,e){return this.qh(this.$h,this.Nr.W(),t,e)}},er;(function(s){s[s.NearestLeft=-1]="NearestLeft",s[s.None=0]="None",s[s.NearestRight=1]="NearestRight"})(er||(er={}));var Ut=30,Ms=class{constructor(){this.Xh=[],this.Kh=new Map,this.Zh=new Map}Gh(){return this.Ys()>0?this.Xh[this.Xh.length-1]:null}Jh(){return this.Ys()>0?this.Qh(0):null}An(){return this.Ys()>0?this.Qh(this.Xh.length-1):null}Ys(){return this.Xh.length}Ei(){return this.Ys()===0}Yr(t){return this.tl(t,0)!==null}Uh(t){return this.il(t)}il(t,e=0){let i=this.tl(t,e);return i===null?null:Object.assign(Object.assign({},this.nl(i)),{ie:this.Qh(i)})}Qs(){return this.Xh}sl(t,e,i){if(this.Ei())return null;let n=null;for(let o of i)n=vi(n,this.el(t,e,o));return n}J(t){this.Zh.clear(),this.Kh.clear(),this.Xh=t}Qh(t){return this.Xh[t].ie}nl(t){return this.Xh[t]}tl(t,e){let i=this.rl(t);if(i===null&&e!==0)switch(e){case-1:return this.hl(t);case 1:return this.ll(t);default:throw new TypeError("Unknown search mode")}return i}hl(t){let e=this.al(t);return e>0&&(e-=1),e!==this.Xh.length&&this.Qh(e)<t?e:null}ll(t){let e=this.ol(t);return e!==this.Xh.length&&t<this.Qh(e)?e:null}rl(t){let e=this.al(t);return e===this.Xh.length||t<this.Xh[e].ie?null:e}al(t){return ei(this.Xh,t,(e,i)=>e.ie<i)}ol(t){return Pr(this.Xh,t,(e,i)=>e.ie>i)}_l(t,e,i){let n=null;for(let o=t;o<e;o++){let a=this.Xh[o].Ot[i];Number.isNaN(a)||(n===null?n={ul:a,cl:a}:(a<n.ul&&(n.ul=a),a>n.cl&&(n.cl=a)))}return n}el(t,e,i){if(this.Ei())return null;let n=null,o=v(this.Jh()),a=v(this.An()),r=Math.max(t,o),l=Math.min(e,a),c=Math.ceil(r/Ut)*Ut,h=Math.max(c,Math.floor(l/Ut)*Ut);{let m=this.al(r),u=this.ol(Math.min(l,c,e));n=vi(n,this._l(m,u,i))}let d=this.Kh.get(i);d===void 0&&(d=new Map,this.Kh.set(i,d));for(let m=Math.max(c+1,r);m<h;m+=Ut){let u=Math.floor(m/Ut),p=d.get(u);if(p===void 0){let f=this.al(u*Ut),w=this.ol((u+1)*Ut-1);p=this._l(f,w,i),d.set(u,p)}n=vi(n,p)}{let m=this.al(h),u=this.ol(l);n=vi(n,this._l(m,u,i))}return n}};function vi(s,t){return s===null?t:t===null?s:{ul:Math.min(s.ul,t.ul),cl:Math.max(s.cl,t.cl)}}var Ds=class{constructor(t){this.dl=t}K(t,e,i){this.dl.draw(t)}fl(t,e,i){var n,o;(o=(n=this.dl).drawBackground)===null||o===void 0||o.call(n,t)}},Fe=class{constructor(t){this.Ge=null,this.mn=t}gt(){var t;let e=this.mn.renderer();if(e===null)return null;if(((t=this.Ge)===null||t===void 0?void 0:t.vl)===e)return this.Ge.pl;let i=new Ds(e);return this.Ge={vl:e,pl:i},i}ml(){var t,e,i;return(i=(e=(t=this.mn).zOrder)===null||e===void 0?void 0:e.call(t))!==null&&i!==void 0?i:"normal"}};function Fr(s){var t,e,i,n,o;return{Zt:s.text(),Si:s.coordinate(),xi:(t=s.fixedCoordinate)===null||t===void 0?void 0:t.call(s),O:s.textColor(),t:s.backColor(),yt:(i=(e=s.visible)===null||e===void 0?void 0:e.call(s))===null||i===void 0||i,hi:(o=(n=s.tickVisible)===null||n===void 0?void 0:n.call(s))===null||o===void 0||o}}var Ts=class{constructor(t,e){this.Wt=new Ei,this.bl=t,this.wl=e}gt(){return this.Wt.J(Object.assign({ji:this.wl.ji()},Fr(this.bl))),this.Wt}},Rs=class extends Ce{constructor(t,e){super(),this.bl=t,this.zi=e}Ii(t,e,i){let n=Fr(this.bl);i.t=n.t,t.O=n.O;let o=2/12*this.zi.P();i.bi=o,i.wi=o,i.Si=n.Si,i.xi=n.xi,t.Zt=n.Zt,t.yt=n.yt,t.hi=n.hi}},Es=class{constructor(t,e){this.gl=null,this.Ml=null,this.xl=null,this.Sl=null,this.kl=null,this.yl=t,this.Nr=e}Cl(){return this.yl}Rn(){var t,e;(e=(t=this.yl).updateAllViews)===null||e===void 0||e.call(t)}Cn(){var t,e,i,n;let o=(i=(e=(t=this.yl).paneViews)===null||e===void 0?void 0:e.call(t))!==null&&i!==void 0?i:[];if(((n=this.gl)===null||n===void 0?void 0:n.vl)===o)return this.gl.pl;let a=o.map(r=>new Fe(r));return this.gl={vl:o,pl:a},a}Ji(){var t,e,i,n;let o=(i=(e=(t=this.yl).timeAxisViews)===null||e===void 0?void 0:e.call(t))!==null&&i!==void 0?i:[];if(((n=this.Ml)===null||n===void 0?void 0:n.vl)===o)return this.Ml.pl;let a=this.Nr.$t().St(),r=o.map(l=>new Ts(l,a));return this.Ml={vl:o,pl:r},r}Tn(){var t,e,i,n;let o=(i=(e=(t=this.yl).priceAxisViews)===null||e===void 0?void 0:e.call(t))!==null&&i!==void 0?i:[];if(((n=this.xl)===null||n===void 0?void 0:n.vl)===o)return this.xl.pl;let a=this.Nr.Dt(),r=o.map(l=>new Rs(l,a));return this.xl={vl:o,pl:r},r}Tl(){var t,e,i,n;let o=(i=(e=(t=this.yl).priceAxisPaneViews)===null||e===void 0?void 0:e.call(t))!==null&&i!==void 0?i:[];if(((n=this.Sl)===null||n===void 0?void 0:n.vl)===o)return this.Sl.pl;let a=o.map(r=>new Fe(r));return this.Sl={vl:o,pl:a},a}Pl(){var t,e,i,n;let o=(i=(e=(t=this.yl).timeAxisPaneViews)===null||e===void 0?void 0:e.call(t))!==null&&i!==void 0?i:[];if(((n=this.kl)===null||n===void 0?void 0:n.vl)===o)return this.kl.pl;let a=o.map(r=>new Fe(r));return this.kl={vl:o,pl:a},a}Rl(t,e){var i,n,o;return(o=(n=(i=this.yl).autoscaleInfo)===null||n===void 0?void 0:n.call(i,t,e))!==null&&o!==void 0?o:null}pr(t,e){var i,n,o;return(o=(n=(i=this.yl).hitTest)===null||n===void 0?void 0:n.call(i,t,e))!==null&&o!==void 0?o:null}};function Tn(s,t,e,i){s.forEach(n=>{t(n).forEach(o=>{o.ml()===e&&i.push(o)})})}function Rn(s){return s.Cn()}function Ac(s){return s.Tl()}function Nc(s){return s.Pl()}var Xe=class extends Cs{constructor(t,e,i,n,o){super(t),this.zt=new Ms,this.zh=new vs(this),this.Dl=[],this.Ol=new ps(this),this.Al=null,this.Vl=null,this.Bl=[],this.Il=[],this.zl=null,this.Ll=[],this._n=e,this.El=i;let a=new ys(this);this.en=[a],this.Lh=new Bi(a,this,t),i!=="Area"&&i!=="Line"&&i!=="Baseline"||(this.Al=new bs(this)),this.Nl(),this.Fl(o)}S(){this.zl!==null&&clearTimeout(this.zl)}oh(t){return this._n.priceLineColor||t}Ur(t){let e={qr:!0},i=this.Dt();if(this.$t().St().Ei()||i.Ei()||this.zt.Ei())return e;let n=this.$t().St().qs(),o=this.Ct();if(n===null||o===null)return e;let a,r;if(t){let d=this.zt.Gh();if(d===null)return e;a=d,r=d.ie}else{let d=this.zt.il(n.ui(),-1);if(d===null||(a=this.zt.Uh(d.ie),a===null))return e;r=d.ie}let l=a.Ot[3],c=this.js().Ws(r,{Ot:a}),h=i.Rt(l,o.Ot);return{qr:!1,_t:l,Zt:i.Ni(l,o.Ot),ph:i.Wl(l),mh:i.jl(l,o.Ot),O:c.oe,Si:h,ie:r}}js(){return this.Vl!==null||(this.Vl=new Ss(this)),this.Vl}W(){return this._n}Eh(t){let e=t.priceScaleId;e!==void 0&&e!==this._n.priceScaleId&&this.$t().Hl(this,e),St(this._n,t),t.priceFormat!==void 0&&(this.Nl(),this.$t().$l()),this.$t().Ul(this),this.$t().ql(),this.mn.bt("options")}J(t,e){this.zt.J(t),this.Yl(),this.mn.bt("data"),this.un.bt("data"),this.Al!==null&&(e&&e.Xl?this.Al.Wr():t.length===0&&this.Al.Fr());let i=this.$t()._r(this);this.$t().Kl(i),this.$t().Ul(this),this.$t().ql(),this.$t().Nh()}Zl(t){this.Bl=t,this.Yl();let e=this.$t()._r(this);this.un.bt("data"),this.$t().Kl(e),this.$t().Ul(this),this.$t().ql(),this.$t().Nh()}Gl(){return this.Bl}lh(){return this.Il}Jl(t){let e=new ks(this,t);return this.Dl.push(e),this.$t().Ul(this),e}Ql(t){let e=this.Dl.indexOf(t);e!==-1&&this.Dl.splice(e,1),this.$t().Ul(this)}Yh(){return this.El}Ct(){let t=this.ta();return t===null?null:{Ot:t.Ot[3],ia:t.ot}}ta(){let t=this.$t().St().qs();if(t===null)return null;let e=t.Rs();return this.zt.il(e,1)}Vn(){return this.zt}ah(t){let e=this.zt.Uh(t);return e===null?null:this.El==="Bar"||this.El==="Candlestick"||this.El==="Custom"?{me:e.Ot[0],be:e.Ot[1],we:e.Ot[2],ge:e.Ot[3]}:e.Ot[3]}na(t){let e=[];Tn(this.Ll,Rn,"top",e);let i=this.Al;return i!==null&&i.yt()&&(this.zl===null&&i.Hr()&&(this.zl=setTimeout(()=>{this.zl=null,this.$t().sa()},0)),i.jr(),e.push(i)),e}Cn(){let t=[];this.ea()||t.push(this.Ol),t.push(this.mn,this.zh,this.un);let e=this.Dl.map(i=>i.Fh());return t.push(...e),Tn(this.Ll,Rn,"normal",t),t}ra(){return this.ha(Rn,"bottom")}la(t){return this.ha(Ac,t)}aa(t){return this.ha(Nc,t)}oa(t,e){return this.Ll.map(i=>i.pr(t,e)).filter(i=>i!==null)}Gi(t){return[this.Lh,...this.Dl.map(e=>e.Wh())]}Tn(t,e){if(e!==this.qi&&!this.ea())return[];let i=[...this.en];for(let n of this.Dl)i.push(n.jh());return this.Ll.forEach(n=>{i.push(...n.Tn())}),i}Ji(){let t=[];return this.Ll.forEach(e=>{t.push(...e.Ji())}),t}Rl(t,e){if(this._n.autoscaleInfoProvider!==void 0){let i=this._n.autoscaleInfoProvider(()=>{let n=this._a(t,e);return n===null?null:n.Th()});return Ai.Ph(i)}return this._a(t,e)}ua(){return this._n.priceFormat.minMove}ca(){return this.da}Rn(){var t;this.mn.bt(),this.un.bt();for(let e of this.en)e.bt();for(let e of this.Dl)e.bt();this.zh.bt(),this.Ol.bt(),(t=this.Al)===null||t===void 0||t.bt(),this.Ll.forEach(e=>e.Rn())}Dt(){return v(super.Dt())}kt(t){if(!((this.El==="Line"||this.El==="Area"||this.El==="Baseline")&&this._n.crosshairMarkerVisible))return null;let e=this.zt.Uh(t);return e===null?null:{_t:e.Ot[3],ht:this.fa(),At:this.va(),Pt:this.pa(),Tt:this.ma(t)}}_h(){return this._n.title}yt(){return this._n.visible}ba(t){this.Ll.push(new Es(t,this))}wa(t){this.Ll=this.Ll.filter(e=>e.Cl()!==t)}ga(){if(this.mn instanceof Ae)return t=>this.mn.Ee(t)}Ma(){if(this.mn instanceof Ae)return t=>this.mn.Ne(t)}ea(){return!Ui(this.Dt().xa())}_a(t,e){if(!je(t)||!je(e)||this.zt.Ei())return null;let i=this.El==="Line"||this.El==="Area"||this.El==="Baseline"||this.El==="Histogram"?[3]:[2,1],n=this.zt.sl(t,e,i),o=n!==null?new wt(n.ul,n.cl):null;if(this.Yh()==="Histogram"){let r=this._n.base,l=new wt(r,r);o=o!==null?o.Jn(l):l}let a=this.un.hh();return this.Ll.forEach(r=>{let l=r.Rl(t,e);if(l?.priceRange){let u=new wt(l.priceRange.minValue,l.priceRange.maxValue);o=o!==null?o.Jn(u):u}var c,h,d,m;l?.margins&&(c=a,h=l.margins,a={above:Math.max((d=c?.above)!==null&&d!==void 0?d:0,h.above),below:Math.max((m=c?.below)!==null&&m!==void 0?m:0,h.below)})}),new Ai(o,a)}fa(){switch(this.El){case"Line":case"Area":case"Baseline":return this._n.crosshairMarkerRadius}return 0}va(){switch(this.El){case"Line":case"Area":case"Baseline":{let t=this._n.crosshairMarkerBorderColor;if(t.length!==0)return t}}return null}pa(){switch(this.El){case"Line":case"Area":case"Baseline":return this._n.crosshairMarkerBorderWidth}return 0}ma(t){switch(this.El){case"Line":case"Area":case"Baseline":{let e=this._n.crosshairMarkerBackgroundColor;if(e.length!==0)return e}}return this.js().Ws(t).oe}Nl(){switch(this._n.priceFormat.type){case"custom":this.da={format:this._n.priceFormat.formatter};break;case"volume":this.da=new Xn(this._n.priceFormat.precision);break;case"percent":this.da=new Ii(this._n.priceFormat.precision);break;default:{let t=Math.pow(10,this._n.priceFormat.precision);this.da=new Se(t,this._n.priceFormat.minMove*t)}}this.qi!==null&&this.qi.Sa()}Yl(){let t=this.$t().St();if(!t.ka()||this.zt.Ei())return void(this.Il=[]);let e=v(this.zt.Jh());this.Il=this.Bl.map((i,n)=>{let o=v(t.ya(i.time,!0)),a=o<e?1:-1;return{time:v(this.zt.il(o,a)).ie,position:i.position,shape:i.shape,color:i.color,id:i.id,Gr:n,text:i.text,size:i.size,originalTime:i.originalTime}})}Fl(t){switch(this.un=new _s(this,this.$t()),this.El){case"Bar":this.mn=new is(this,this.$t());break;case"Candlestick":this.mn=new rs(this,this.$t());break;case"Line":this.mn=new ds(this,this.$t());break;case"Custom":this.mn=new Ae(this,this.$t(),ot(t));break;case"Area":this.mn=new ts(this,this.$t());break;case"Baseline":this.mn=new os(this,this.$t());break;case"Histogram":this.mn=new hs(this,this.$t());break;default:throw Error("Unknown chart style assigned: "+this.El)}}ha(t,e){let i=[];return Tn(this.Ll,t,e,i),i}},Is=class{constructor(t){this._n=t}Ca(t,e,i){let n=t;if(this._n.mode===0)return n;let o=i.dn(),a=o.Ct();if(a===null)return n;let r=o.Rt(t,a),l=i.Ta().filter(h=>h instanceof Xe).reduce((h,d)=>{if(i.ur(d)||!d.yt())return h;let m=d.Dt(),u=d.Vn();if(m.Ei()||!u.Yr(e))return h;let p=u.Uh(e);if(p===null)return h;let f=ye(d.Ct());return h.concat([m.Rt(p.Ot[3],f.Ot)])},[]);if(l.length===0)return n;l.sort((h,d)=>Math.abs(h-r)-Math.abs(d-r));let c=l[0];return n=o.fn(c,a),n}},zs=class extends ft{constructor(){super(...arguments),this.zt=null}J(t){this.zt=t}Z({context:t,bitmapSize:e,horizontalPixelRatio:i,verticalPixelRatio:n}){if(this.zt===null)return;let o=Math.max(1,Math.floor(i));t.lineWidth=o,(function(a,r){a.save(),a.lineWidth%2&&a.translate(.5,.5),r(),a.restore()})(t,()=>{let a=v(this.zt);if(a.Pa){t.strokeStyle=a.Ra,ee(t,a.Da),t.beginPath();for(let r of a.Oa){let l=Math.round(r.Aa*i);t.moveTo(l,-o),t.lineTo(l,e.height+o)}t.stroke()}if(a.Va){t.strokeStyle=a.Ba,ee(t,a.Ia),t.beginPath();for(let r of a.za){let l=Math.round(r.Aa*n);t.moveTo(-o,l),t.lineTo(e.width+o,l)}t.stroke()}})}},Os=class{constructor(t){this.Wt=new zs,this.ft=!0,this.Qi=t}bt(){this.ft=!0}gt(){if(this.ft){let t=this.Qi.$t().W().grid,e={Va:t.horzLines.visible,Pa:t.vertLines.visible,Ba:t.horzLines.color,Ra:t.vertLines.color,Ia:t.horzLines.style,Da:t.vertLines.style,za:this.Qi.dn().La(),Oa:(this.Qi.$t().St().La()||[]).map(i=>({Aa:i.coord}))};this.Wt.J(e),this.ft=!1}return this.Wt}},Ls=class{constructor(t){this.mn=new Os(t)}Fh(){return this.mn}},En={Ea:4,Na:1e-4};function we(s,t){let e=100*(s-t)/t;return t<0?-e:e}function Fc(s,t){let e=we(s.xh(),t),i=we(s.Sh(),t);return new wt(e,i)}function Ve(s,t){let e=100*(s-t)/t+100;return t<0?-e:e}function Vc(s,t){let e=Ve(s.xh(),t),i=Ve(s.Sh(),t);return new wt(e,i)}function Ni(s,t){let e=Math.abs(s);if(e<1e-15)return 0;let i=Math.log10(e+t.Na)+t.Ea;return s<0?-i:i}function We(s,t){let e=Math.abs(s);if(e<1e-15)return 0;let i=Math.pow(10,e-t.Ea)-t.Na;return s<0?-i:i}function Be(s,t){if(s===null)return null;let e=Ni(s.xh(),t),i=Ni(s.Sh(),t);return new wt(e,i)}function yi(s,t){if(s===null)return null;let e=We(s.xh(),t),i=We(s.Sh(),t);return new wt(e,i)}function In(s){if(s===null)return En;let t=Math.abs(s.Sh()-s.xh());if(t>=1||t<1e-15)return En;let e=Math.ceil(Math.abs(Math.log10(t))),i=En.Ea+e;return{Ea:i,Na:1/Math.pow(10,i)}}var He=class{constructor(t,e){if(this.Fa=t,this.Wa=e,(function(i){if(i<0)return!1;for(let n=i;n>1;n/=10)if(n%10!=0)return!1;return!0})(this.Fa))this.ja=[2,2.5,2];else{this.ja=[];for(let i=this.Fa;i!==1;){if(i%2==0)this.ja.push(2),i/=2;else{if(i%5!=0)throw new Error("unexpected base");this.ja.push(2,2.5),i/=5}if(this.ja.length>100)throw new Error("something wrong with base")}}}Ha(t,e,i){let n=this.Fa===0?0:1/this.Fa,o=Math.pow(10,Math.max(0,Math.ceil(Math.log10(t-e)))),a=0,r=this.Wa[0];for(;;){let d=_i(o,n,1e-14)&&o>n+1e-14,m=_i(o,i*r,1e-14),u=_i(o,1,1e-14);if(!(d&&m&&u))break;o/=r,r=this.Wa[++a%this.Wa.length]}if(o<=n+1e-14&&(o=n),o=Math.max(1,o),this.ja.length>0&&(l=o,c=1,h=1e-14,Math.abs(l-c)<h))for(a=0,r=this.ja[0];_i(o,i*r,1e-14)&&o>n+1e-14;)o/=r,r=this.ja[++a%this.ja.length];var l,c,h;return o}},Fi=class{constructor(t,e,i,n){this.$a=[],this.zi=t,this.Fa=e,this.Ua=i,this.qa=n}Ha(t,e){if(t<e)throw new Error("high < low");let i=this.zi.Bt(),n=(t-e)*this.Ya()/i,o=new He(this.Fa,[2,2.5,2]),a=new He(this.Fa,[2,2,2.5]),r=new He(this.Fa,[2.5,2,2]),l=[];return l.push(o.Ha(t,e,n),a.Ha(t,e,n),r.Ha(t,e,n)),(function(c){if(c.length<1)throw Error("array is empty");let h=c[0];for(let d=1;d<c.length;++d)c[d]<h&&(h=c[d]);return h})(l)}Xa(){let t=this.zi,e=t.Ct();if(e===null)return void(this.$a=[]);let i=t.Bt(),n=this.Ua(i-1,e),o=this.Ua(0,e),a=this.zi.W().entireTextOnly?this.Ka()/2:0,r=a,l=i-1-a,c=Math.max(n,o),h=Math.min(n,o);if(c===h)return void(this.$a=[]);let d=this.Ha(c,h),m=c%d;m+=m<0?d:0;let u=c>=h?1:-1,p=null,f=0;for(let w=c-m;w>h;w-=d){let x=this.qa(w,e,!0);p!==null&&Math.abs(x-p)<this.Ya()||x<r||x>l||(f<this.$a.length?(this.$a[f].Aa=x,this.$a[f].Za=t.Ga(w)):this.$a.push({Aa:x,Za:t.Ga(w)}),f++,p=x,t.Ja()&&(d=this.Ha(w*u,h)))}this.$a.length=f}La(){return this.$a}Ka(){return this.zi.P()}Ya(){return Math.ceil(2.5*this.Ka())}};function Vr(s){return s.slice().sort((t,e)=>v(t.Xi())-v(e.Xi()))}var ir;(function(s){s[s.Normal=0]="Normal",s[s.Logarithmic=1]="Logarithmic",s[s.Percentage=2]="Percentage",s[s.IndexedTo100=3]="IndexedTo100"})(ir||(ir={}));var nr=new Ii,sr=new Se(100,1),Ps=class{constructor(t,e,i,n){this.Qa=0,this.io=null,this.Rh=null,this.no=null,this.so={eo:!1,ro:null},this.ho=0,this.lo=0,this.ao=new H,this.oo=new H,this._o=[],this.uo=null,this.co=null,this.do=null,this.fo=null,this.da=sr,this.vo=In(null),this.po=t,this._n=e,this.mo=i,this.bo=n,this.wo=new Fi(this,100,this.Mo.bind(this),this.xo.bind(this))}xa(){return this.po}W(){return this._n}Eh(t){if(St(this._n,t),this.Sa(),t.mode!==void 0&&this.So({Sr:t.mode}),t.scaleMargins!==void 0){let e=ot(t.scaleMargins.top),i=ot(t.scaleMargins.bottom);if(e<0||e>1)throw new Error(`Invalid top margin - expect value between 0 and 1, given=${e}`);if(i<0||i>1)throw new Error(`Invalid bottom margin - expect value between 0 and 1, given=${i}`);if(e+i>1)throw new Error(`Invalid margins - sum of margins must be less than 1, given=${e+i}`);this.ko(),this.co=null}}yo(){return this._n.autoScale}Ja(){return this._n.mode===1}fh(){return this._n.mode===2}Co(){return this._n.mode===3}Sr(){return{Nn:this._n.autoScale,To:this._n.invertScale,Sr:this._n.mode}}So(t){let e=this.Sr(),i=null;t.Nn!==void 0&&(this._n.autoScale=t.Nn),t.Sr!==void 0&&(this._n.mode=t.Sr,t.Sr!==2&&t.Sr!==3||(this._n.autoScale=!0),this.so.eo=!1),e.Sr===1&&t.Sr!==e.Sr&&((function(o,a){if(o===null)return!1;let r=We(o.xh(),a),l=We(o.Sh(),a);return isFinite(r)&&isFinite(l)})(this.Rh,this.vo)?(i=yi(this.Rh,this.vo),i!==null&&this.Po(i)):this._n.autoScale=!0),t.Sr===1&&t.Sr!==e.Sr&&(i=Be(this.Rh,this.vo),i!==null&&this.Po(i));let n=e.Sr!==this._n.mode;n&&(e.Sr===2||this.fh())&&this.Sa(),n&&(e.Sr===3||this.Co())&&this.Sa(),t.To!==void 0&&e.To!==t.To&&(this._n.invertScale=t.To,this.Ro()),this.oo.m(e,this.Sr())}Do(){return this.oo}P(){return this.mo.fontSize}Bt(){return this.Qa}Oo(t){this.Qa!==t&&(this.Qa=t,this.ko(),this.co=null)}Ao(){if(this.io)return this.io;let t=this.Bt()-this.Vo()-this.Bo();return this.io=t,t}Oh(){return this.Io(),this.Rh}Po(t,e){let i=this.Rh;(e||i===null&&t!==null||i!==null&&!i.gh(t))&&(this.co=null,this.Rh=t)}Ei(){return this.Io(),this.Qa===0||!this.Rh||this.Rh.Ei()}zo(t){return this.To()?t:this.Bt()-1-t}Rt(t,e){return this.fh()?t=we(t,e):this.Co()&&(t=Ve(t,e)),this.xo(t,e)}Gs(t,e,i){this.Io();let n=this.Bo(),o=v(this.Oh()),a=o.xh(),r=o.Sh(),l=this.Ao()-1,c=this.To(),h=l/(r-a),d=i===void 0?0:i.from,m=i===void 0?t.length:i.to,u=this.Lo();for(let p=d;p<m;p++){let f=t[p],w=f._t;if(isNaN(w))continue;let x=w;u!==null&&(x=u(f._t,e));let S=n+h*(x-a),A=c?S:this.Qa-1-S;f.st=A}}ve(t,e,i){this.Io();let n=this.Bo(),o=v(this.Oh()),a=o.xh(),r=o.Sh(),l=this.Ao()-1,c=this.To(),h=l/(r-a),d=i===void 0?0:i.from,m=i===void 0?t.length:i.to,u=this.Lo();for(let p=d;p<m;p++){let f=t[p],w=f.me,x=f.be,S=f.we,A=f.ge;u!==null&&(w=u(f.me,e),x=u(f.be,e),S=u(f.we,e),A=u(f.ge,e));let z=n+h*(w-a),q=c?z:this.Qa-1-z;f.de=q,z=n+h*(x-a),q=c?z:this.Qa-1-z,f._e=q,z=n+h*(S-a),q=c?z:this.Qa-1-z,f.ue=q,z=n+h*(A-a),q=c?z:this.Qa-1-z,f.fe=q}}fn(t,e){let i=this.Mo(t,e);return this.Eo(i,e)}Eo(t,e){let i=t;return this.fh()?i=(function(n,o){return o<0&&(n=-n),n/100*o+o})(i,e):this.Co()&&(i=(function(n,o){return n-=100,o<0&&(n=-n),n/100*o+o})(i,e)),i}Ta(){return this._o}No(){if(this.uo)return this.uo;let t=[];for(let e=0;e<this._o.length;e++){let i=this._o[e];i.Xi()===null&&i.Ki(e+1),t.push(i)}return t=Vr(t),this.uo=t,this.uo}Fo(t){this._o.indexOf(t)===-1&&(this._o.push(t),this.Sa(),this.Wo())}jo(t){let e=this._o.indexOf(t);if(e===-1)throw new Error("source is not attached to scale");this._o.splice(e,1),this._o.length===0&&(this.So({Nn:!0}),this.Po(null)),this.Sa(),this.Wo()}Ct(){let t=null;for(let e of this._o){let i=e.Ct();i!==null&&(t===null||i.ia<t.ia)&&(t=i)}return t===null?null:t.Ot}To(){return this._n.invertScale}La(){let t=this.Ct()===null;if(this.co!==null&&(t||this.co.Ho===t))return this.co.La;this.wo.Xa();let e=this.wo.La();return this.co={La:e,Ho:t},this.ao.m(),e}$o(){return this.ao}Uo(t){this.fh()||this.Co()||this.do===null&&this.no===null&&(this.Ei()||(this.do=this.Qa-t,this.no=v(this.Oh()).Mh()))}qo(t){if(this.fh()||this.Co()||this.do===null)return;this.So({Nn:!1}),(t=this.Qa-t)<0&&(t=0);let e=(this.do+.2*(this.Qa-1))/(t+.2*(this.Qa-1)),i=v(this.no).Mh();e=Math.max(e,.1),i.yh(e),this.Po(i)}Yo(){this.fh()||this.Co()||(this.do=null,this.no=null)}Xo(t){this.yo()||this.fo===null&&this.no===null&&(this.Ei()||(this.fo=t,this.no=v(this.Oh()).Mh()))}Ko(t){if(this.yo()||this.fo===null)return;let e=v(this.Oh()).kh()/(this.Ao()-1),i=t-this.fo;this.To()&&(i*=-1);let n=i*e,o=v(this.no).Mh();o.Ch(n),this.Po(o,!0),this.co=null}Zo(){this.yo()||this.fo!==null&&(this.fo=null,this.no=null)}ca(){return this.da||this.Sa(),this.da}Ni(t,e){switch(this._n.mode){case 2:return this.Go(we(t,e));case 3:return this.ca().format(Ve(t,e));default:return this.Ih(t)}}Ga(t){switch(this._n.mode){case 2:return this.Go(t);case 3:return this.ca().format(t);default:return this.Ih(t)}}Wl(t){return this.Ih(t,v(this.Jo()).ca())}jl(t,e){return t=we(t,e),this.Go(t,nr)}Qo(){return this._o}t_(t){this.so={ro:t,eo:!1}}Rn(){this._o.forEach(t=>t.Rn())}Sa(){this.co=null;let t=this.Jo(),e=100;t!==null&&(e=Math.round(1/t.ua())),this.da=sr,this.fh()?(this.da=nr,e=100):this.Co()?(this.da=new Se(100,1),e=100):t!==null&&(this.da=t.ca()),this.wo=new Fi(this,e,this.Mo.bind(this),this.xo.bind(this)),this.wo.Xa()}Wo(){this.uo=null}Jo(){return this._o[0]||null}Vo(){return this.To()?this._n.scaleMargins.bottom*this.Bt()+this.lo:this._n.scaleMargins.top*this.Bt()+this.ho}Bo(){return this.To()?this._n.scaleMargins.top*this.Bt()+this.ho:this._n.scaleMargins.bottom*this.Bt()+this.lo}Io(){this.so.eo||(this.so.eo=!0,this.i_())}ko(){this.io=null}xo(t,e){if(this.Io(),this.Ei())return 0;t=this.Ja()&&t?Ni(t,this.vo):t;let i=v(this.Oh()),n=this.Bo()+(this.Ao()-1)*(t-i.xh())/i.kh();return this.zo(n)}Mo(t,e){if(this.Io(),this.Ei())return 0;let i=this.zo(t),n=v(this.Oh()),o=n.xh()+n.kh()*((i-this.Bo())/(this.Ao()-1));return this.Ja()?We(o,this.vo):o}Ro(){this.co=null,this.wo.Xa()}i_(){let t=this.so.ro;if(t===null)return;let e=null,i=this.Qo(),n=0,o=0;for(let l of i){if(!l.yt())continue;let c=l.Ct();if(c===null)continue;let h=l.Rl(t.Rs(),t.ui()),d=h&&h.Oh();if(d!==null){switch(this._n.mode){case 1:d=Be(d,this.vo);break;case 2:d=Fc(d,c.Ot);break;case 3:d=Vc(d,c.Ot)}if(e=e===null?d:e.Jn(v(d)),h!==null){let m=h.Ah();m!==null&&(n=Math.max(n,m.above),o=Math.max(n,m.below))}}}if(n===this.ho&&o===this.lo||(this.ho=n,this.lo=o,this.co=null,this.ko()),e!==null){if(e.xh()===e.Sh()){let l=this.Jo(),c=5*(l===null||this.fh()||this.Co()?1:l.ua());this.Ja()&&(e=yi(e,this.vo)),e=new wt(e.xh()-c,e.Sh()+c),this.Ja()&&(e=Be(e,this.vo))}if(this.Ja()){let l=yi(e,this.vo),c=In(l);if(a=c,r=this.vo,a.Ea!==r.Ea||a.Na!==r.Na){let h=this.no!==null?yi(this.no,this.vo):null;this.vo=c,e=Be(l,c),h!==null&&(this.no=Be(h,c))}}this.Po(e)}else this.Rh===null&&(this.Po(new wt(-.5,.5)),this.vo=In(null));var a,r;this.so.eo=!0}Lo(){return this.fh()?we:this.Co()?Ve:this.Ja()?t=>Ni(t,this.vo):null}n_(t,e,i){return e===void 0?(i===void 0&&(i=this.ca()),i.format(t)):e(t)}Ih(t,e){return this.n_(t,this.bo.priceFormatter,e)}Go(t,e){return this.n_(t,this.bo.percentageFormatter,e)}},Bs=class{constructor(t,e){this._o=[],this.s_=new Map,this.Qa=0,this.e_=0,this.r_=1e3,this.uo=null,this.h_=new H,this.wl=t,this.Hi=e,this.l_=new Ls(this);let i=e.W();this.a_=this.o_("left",i.leftPriceScale),this.__=this.o_("right",i.rightPriceScale),this.a_.Do().l(this.u_.bind(this,this.a_),this),this.__.Do().l(this.u_.bind(this,this.__),this),this.c_(i)}c_(t){if(t.leftPriceScale&&this.a_.Eh(t.leftPriceScale),t.rightPriceScale&&this.__.Eh(t.rightPriceScale),t.localization&&(this.a_.Sa(),this.__.Sa()),t.overlayPriceScales){let e=Array.from(this.s_.values());for(let i of e){let n=v(i[0].Dt());n.Eh(t.overlayPriceScales),t.localization&&n.Sa()}}}d_(t){switch(t){case"left":return this.a_;case"right":return this.__}return this.s_.has(t)?ot(this.s_.get(t))[0].Dt():null}S(){this.$t().f_().p(this),this.a_.Do().p(this),this.__.Do().p(this),this._o.forEach(t=>{t.S&&t.S()}),this.h_.m()}v_(){return this.r_}p_(t){this.r_=t}$t(){return this.Hi}ji(){return this.e_}Bt(){return this.Qa}m_(t){this.e_=t,this.b_()}Oo(t){this.Qa=t,this.a_.Oo(t),this.__.Oo(t),this._o.forEach(e=>{if(this.ur(e)){let i=e.Dt();i!==null&&i.Oo(t)}}),this.b_()}Ta(){return this._o}ur(t){let e=t.Dt();return e===null||this.a_!==e&&this.__!==e}Fo(t,e,i){let n=i!==void 0?i:this.g_().w_+1;this.M_(t,e,n)}jo(t){let e=this._o.indexOf(t);Gt(e!==-1,"removeDataSource: invalid data source"),this._o.splice(e,1);let i=v(t.Dt()).xa();if(this.s_.has(i)){let o=ot(this.s_.get(i)),a=o.indexOf(t);a!==-1&&(o.splice(a,1),o.length===0&&this.s_.delete(i))}let n=t.Dt();n&&n.Ta().indexOf(t)>=0&&n.jo(t),n!==null&&(n.Wo(),this.x_(n)),this.uo=null}dr(t){return t===this.a_?"left":t===this.__?"right":"overlay"}S_(){return this.a_}k_(){return this.__}y_(t,e){t.Uo(e)}C_(t,e){t.qo(e),this.b_()}T_(t){t.Yo()}P_(t,e){t.Xo(e)}R_(t,e){t.Ko(e),this.b_()}D_(t){t.Zo()}b_(){this._o.forEach(t=>{t.Rn()})}dn(){let t=null;return this.Hi.W().rightPriceScale.visible&&this.__.Ta().length!==0?t=this.__:this.Hi.W().leftPriceScale.visible&&this.a_.Ta().length!==0?t=this.a_:this._o.length!==0&&(t=this._o[0].Dt()),t===null&&(t=this.__),t}cr(){let t=null;return this.Hi.W().rightPriceScale.visible?t=this.__:this.Hi.W().leftPriceScale.visible&&(t=this.a_),t}x_(t){t!==null&&t.yo()&&this.O_(t)}A_(t){let e=this.wl.qs();t.So({Nn:!0}),e!==null&&t.t_(e),this.b_()}V_(){this.O_(this.a_),this.O_(this.__)}B_(){this.x_(this.a_),this.x_(this.__),this._o.forEach(t=>{this.ur(t)&&this.x_(t.Dt())}),this.b_(),this.Hi.Nh()}No(){return this.uo===null&&(this.uo=Vr(this._o)),this.uo}I_(){return this.h_}z_(){return this.l_}O_(t){let e=t.Qo();if(e&&e.length>0&&!this.wl.Ei()){let i=this.wl.qs();i!==null&&t.t_(i)}t.Rn()}g_(){let t=this.No();if(t.length===0)return{L_:0,w_:0};let e=0,i=0;for(let n=0;n<t.length;n++){let o=t[n].Xi();o!==null&&(o<e&&(e=o),o>i&&(i=o))}return{L_:e,w_:i}}M_(t,e,i){let n=this.d_(e);if(n===null&&(n=this.o_(e,this.Hi.W().overlayPriceScales)),this._o.push(t),!Ui(e)){let o=this.s_.get(e)||[];o.push(t),this.s_.set(e,o)}n.Fo(t),t.Zi(n),t.Ki(i),this.x_(n),this.uo=null}u_(t,e,i){e.Sr!==i.Sr&&this.O_(t)}o_(t,e){let i=Object.assign({visible:!0,autoScale:!0},At(e)),n=new Ps(t,i,this.Hi.W().layout,this.Hi.W().localization);return n.Oo(this.Bt()),n}},As=class{constructor(t,e,i=50){this.Ye=0,this.Xe=1,this.Ke=1,this.Ge=new Map,this.Ze=new Map,this.E_=t,this.N_=e,this.Je=i}F_(t){let e=t.time,i=this.N_.cacheKey(e),n=this.Ge.get(i);if(n!==void 0)return n.W_;if(this.Ye===this.Je){let a=this.Ze.get(this.Ke);this.Ze.delete(this.Ke),this.Ge.delete(ot(a)),this.Ke++,this.Ye--}let o=this.E_(t);return this.Ge.set(i,{W_:o,nr:this.Xe}),this.Ze.set(this.Xe,i),this.Ye++,this.Xe++,o}},te=class{constructor(t,e){Gt(t<=e,"right should be >= left"),this.j_=t,this.H_=e}Rs(){return this.j_}ui(){return this.H_}U_(){return this.H_-this.j_+1}Yr(t){return this.j_<=t&&t<=this.H_}gh(t){return this.j_===t.Rs()&&this.H_===t.ui()}};function or(s,t){return s===null||t===null?s===t:s.gh(t)}var Ns=class{constructor(){this.q_=new Map,this.Ge=null,this.Y_=!1}X_(t){this.Y_=t,this.Ge=null}K_(t,e){this.Z_(e),this.Ge=null;for(let i=e;i<t.length;++i){let n=t[i],o=this.q_.get(n.timeWeight);o===void 0&&(o=[],this.q_.set(n.timeWeight,o)),o.push({index:i,time:n.time,weight:n.timeWeight,originalTime:n.originalTime})}}G_(t,e){let i=Math.ceil(e/t);return this.Ge!==null&&this.Ge.J_===i||(this.Ge={La:this.Q_(i),J_:i}),this.Ge.La}Z_(t){if(t===0)return void this.q_.clear();let e=[];this.q_.forEach((i,n)=>{t<=i[0].index?e.push(n):i.splice(ei(i,t,o=>o.index<t),1/0)});for(let i of e)this.q_.delete(i)}Q_(t){let e=[];for(let i of Array.from(this.q_.keys()).sort((n,o)=>o-n)){if(!this.q_.get(i))continue;let n=e;e=[];let o=n.length,a=0,r=ot(this.q_.get(i)),l=r.length,c=1/0,h=-1/0;for(let d=0;d<l;d++){let m=r[d],u=m.index;for(;a<o;){let p=n[a],f=p.index;if(!(f<u)){c=f;break}a++,e.push(p),h=f,c=1/0}if(c-u>=t&&u-h>=t)e.push(m),h=u;else if(this.Y_)return n}for(;a<o;a++)e.push(n[a])}return e}},xe=class s{constructor(t){this.tu=t}iu(){return this.tu===null?null:new te(Math.floor(this.tu.Rs()),Math.ceil(this.tu.ui()))}nu(){return this.tu}static su(){return new s(null)}};function Wc(s,t){return s.weight>t.weight?s:t}var Fs=class{constructor(t,e,i,n){this.e_=0,this.eu=null,this.ru=[],this.fo=null,this.do=null,this.hu=new Ns,this.lu=new Map,this.au=xe.su(),this.ou=!0,this._u=new H,this.uu=new H,this.cu=new H,this.du=null,this.fu=null,this.vu=[],this._n=e,this.bo=i,this.pu=e.rightOffset,this.mu=e.barSpacing,this.Hi=t,this.N_=n,this.bu(),this.hu.X_(e.uniformDistribution)}W(){return this._n}wu(t){St(this.bo,t),this.gu(),this.bu()}Eh(t,e){var i;St(this._n,t),this._n.fixLeftEdge&&this.Mu(),this._n.fixRightEdge&&this.xu(),t.barSpacing!==void 0&&this.Hi.Kn(t.barSpacing),t.rightOffset!==void 0&&this.Hi.Zn(t.rightOffset),t.minBarSpacing!==void 0&&this.Hi.Kn((i=t.barSpacing)!==null&&i!==void 0?i:this.mu),this.gu(),this.bu(),this.cu.m()}vn(t){var e,i;return(i=(e=this.ru[t])===null||e===void 0?void 0:e.time)!==null&&i!==void 0?i:null}$i(t){var e;return(e=this.ru[t])!==null&&e!==void 0?e:null}ya(t,e){if(this.ru.length<1)return null;if(this.N_.key(t)>this.N_.key(this.ru[this.ru.length-1].time))return e?this.ru.length-1:null;let i=ei(this.ru,this.N_.key(t),(n,o)=>this.N_.key(n.time)<o);return this.N_.key(t)<this.N_.key(this.ru[i].time)?e?i:null:i}Ei(){return this.e_===0||this.ru.length===0||this.eu===null}ka(){return this.ru.length>0}qs(){return this.Su(),this.au.iu()}ku(){return this.Su(),this.au.nu()}yu(){let t=this.qs();if(t===null)return null;let e={from:t.Rs(),to:t.ui()};return this.Cu(e)}Cu(t){let e=Math.round(t.from),i=Math.round(t.to),n=v(this.Tu()),o=v(this.Pu());return{from:v(this.$i(Math.max(n,e))),to:v(this.$i(Math.min(o,i)))}}Ru(t){return{from:v(this.ya(t.from,!0)),to:v(this.ya(t.to,!0))}}ji(){return this.e_}m_(t){if(!isFinite(t)||t<=0||this.e_===t)return;let e=this.ku(),i=this.e_;if(this.e_=t,this.ou=!0,this._n.lockVisibleTimeRangeOnResize&&i!==0){let n=this.mu*t/i;this.mu=n}if(this._n.fixLeftEdge&&e!==null&&e.Rs()<=0){let n=i-t;this.pu-=Math.round(n/this.mu)+1,this.ou=!0}this.Du(),this.Ou()}It(t){if(this.Ei()||!je(t))return 0;let e=this.Au()+this.pu-t;return this.e_-(e+.5)*this.mu-1}Zs(t,e){let i=this.Au(),n=e===void 0?0:e.from,o=e===void 0?t.length:e.to;for(let a=n;a<o;a++){let r=t[a].ot,l=i+this.pu-r,c=this.e_-(l+.5)*this.mu-1;t[a].nt=c}}Vu(t){return Math.ceil(this.Bu(t))}Zn(t){this.ou=!0,this.pu=t,this.Ou(),this.Hi.Iu(),this.Hi.Nh()}ee(){return this.mu}Kn(t){this.zu(t),this.Ou(),this.Hi.Iu(),this.Hi.Nh()}Lu(){return this.pu}La(){if(this.Ei())return null;if(this.fu!==null)return this.fu;let t=this.mu,e=5*(this.Hi.W().layout.fontSize+4)/8*(this._n.tickMarkMaxCharacterLength||8),i=Math.round(e/t),n=v(this.qs()),o=Math.max(n.Rs(),n.Rs()-i),a=Math.max(n.ui(),n.ui()-i),r=this.hu.G_(t,e),l=this.Tu()+i,c=this.Pu()-i,h=this.Eu(),d=this._n.fixLeftEdge||h,m=this._n.fixRightEdge||h,u=0;for(let p of r){if(!(o<=p.index&&p.index<=a))continue;let f;u<this.vu.length?(f=this.vu[u],f.coord=this.It(p.index),f.label=this.Nu(p),f.weight=p.weight):(f={needAlignCoordinate:!1,coord:this.It(p.index),label:this.Nu(p),weight:p.weight},this.vu.push(f)),this.mu>e/2&&!h?f.needAlignCoordinate=!1:f.needAlignCoordinate=d&&p.index<=l||m&&p.index>=c,u++}return this.vu.length=u,this.fu=this.vu,this.vu}Fu(){this.ou=!0,this.Kn(this._n.barSpacing),this.Zn(this._n.rightOffset)}Wu(t){this.ou=!0,this.eu=t,this.Ou(),this.Mu()}ju(t,e){let i=this.Bu(t),n=this.ee(),o=n+e*(n/10);this.Kn(o),this._n.rightBarStaysOnScroll||this.Zn(this.Lu()+(i-this.Bu(t)))}Uo(t){this.fo&&this.Zo(),this.do===null&&this.du===null&&(this.Ei()||(this.do=t,this.Hu()))}qo(t){if(this.du===null)return;let e=Kn(this.e_-t,0,this.e_),i=Kn(this.e_-v(this.do),0,this.e_);e!==0&&i!==0&&this.Kn(this.du.ee*e/i)}Yo(){this.do!==null&&(this.do=null,this.$u())}Xo(t){this.fo===null&&this.du===null&&(this.Ei()||(this.fo=t,this.Hu()))}Ko(t){if(this.fo===null)return;let e=(this.fo-t)/this.ee();this.pu=v(this.du).Lu+e,this.ou=!0,this.Ou()}Zo(){this.fo!==null&&(this.fo=null,this.$u())}Uu(){this.qu(this._n.rightOffset)}qu(t,e=400){if(!isFinite(t))throw new RangeError("offset is required and must be finite number");if(!isFinite(e)||e<=0)throw new RangeError("animationDuration (optional) must be finite positive number");let i=this.pu,n=performance.now();this.Hi.qn({Yu:o=>(o-n)/e>=1,Xu:o=>{let a=(o-n)/e;return a>=1?t:i+(t-i)*a}})}bt(t,e){this.ou=!0,this.ru=t,this.hu.K_(t,e),this.Ou()}Ku(){return this._u}Zu(){return this.uu}Gu(){return this.cu}Au(){return this.eu||0}Ju(t){let e=t.U_();this.zu(this.e_/e),this.pu=t.ui()-this.Au(),this.Ou(),this.ou=!0,this.Hi.Iu(),this.Hi.Nh()}Qu(){let t=this.Tu(),e=this.Pu();t!==null&&e!==null&&this.Ju(new te(t,e+this._n.rightOffset))}tc(t){let e=new te(t.from,t.to);this.Ju(e)}Ui(t){return this.bo.timeFormatter!==void 0?this.bo.timeFormatter(t.originalTime):this.N_.formatHorzItem(t.time)}Eu(){let{handleScroll:t,handleScale:e}=this.Hi.W();return!(t.horzTouchDrag||t.mouseWheel||t.pressedMouseMove||t.vertTouchDrag||e.axisDoubleClickReset.time||e.axisPressedMouseMove.time||e.mouseWheel||e.pinch)}Tu(){return this.ru.length===0?null:0}Pu(){return this.ru.length===0?null:this.ru.length-1}ic(t){return(this.e_-1-t)/this.mu}Bu(t){let e=this.ic(t),i=this.Au()+this.pu-e;return Math.round(1e6*i)/1e6}zu(t){let e=this.mu;this.mu=t,this.Du(),e!==this.mu&&(this.ou=!0,this.nc())}Su(){if(!this.ou)return;if(this.ou=!1,this.Ei())return void this.sc(xe.su());let t=this.Au(),e=this.e_/this.mu,i=this.pu+t,n=new te(i-e+1,i);this.sc(new xe(n))}Du(){let t=this.ec();if(this.mu<t&&(this.mu=t,this.ou=!0),this.e_!==0){let e=.5*this.e_;this.mu>e&&(this.mu=e,this.ou=!0)}}ec(){return this._n.fixLeftEdge&&this._n.fixRightEdge&&this.ru.length!==0?this.e_/this.ru.length:this._n.minBarSpacing}Ou(){let t=this.rc();this.pu>t&&(this.pu=t,this.ou=!0);let e=this.hc();e!==null&&this.pu<e&&(this.pu=e,this.ou=!0)}hc(){let t=this.Tu(),e=this.eu;return t===null||e===null?null:t-e-1+(this._n.fixLeftEdge?this.e_/this.mu:Math.min(2,this.ru.length))}rc(){return this._n.fixRightEdge?0:this.e_/this.mu-Math.min(2,this.ru.length)}Hu(){this.du={ee:this.ee(),Lu:this.Lu()}}$u(){this.du=null}Nu(t){let e=this.lu.get(t.weight);return e===void 0&&(e=new As(i=>this.lc(i),this.N_),this.lu.set(t.weight,e)),e.F_(t)}lc(t){return this.N_.formatTickmark(t,this.bo)}sc(t){let e=this.au;this.au=t,or(e.iu(),this.au.iu())||this._u.m(),or(e.nu(),this.au.nu())||this.uu.m(),this.nc()}nc(){this.fu=null}gu(){this.nc(),this.lu.clear()}bu(){this.N_.updateFormatter(this.bo)}Mu(){if(!this._n.fixLeftEdge)return;let t=this.Tu();if(t===null)return;let e=this.qs();if(e===null)return;let i=e.Rs()-t;if(i<0){let n=this.pu-i-1;this.Zn(n)}this.Du()}xu(){this.Ou(),this.Du()}},Vs=class{K(t,e,i){t.useMediaCoordinateSpace(n=>this.Z(n,e,i))}fl(t,e,i){t.useMediaCoordinateSpace(n=>this.ac(n,e,i))}ac(t,e,i){}},Ws=class extends Vs{constructor(t){super(),this.oc=new Map,this.zt=t}Z(t){}ac(t){if(!this.zt.yt)return;let{context:e,mediaSize:i}=t,n=0;for(let a of this.zt._c){if(a.Zt.length===0)continue;e.font=a.R;let r=this.uc(e,a.Zt);r>i.width?a.ju=i.width/r:a.ju=1,n+=a.cc*a.ju}let o=0;switch(this.zt.dc){case"top":o=0;break;case"center":o=Math.max((i.height-n)/2,0);break;case"bottom":o=Math.max(i.height-n,0)}e.fillStyle=this.zt.O;for(let a of this.zt._c){e.save();let r=0;switch(this.zt.fc){case"left":e.textAlign="left",r=a.cc/2;break;case"center":e.textAlign="center",r=i.width/2;break;case"right":e.textAlign="right",r=i.width-1-a.cc/2}e.translate(r,o),e.textBaseline="top",e.font=a.R,e.scale(a.ju,a.ju),e.fillText(a.Zt,0,a.vc),e.restore(),o+=a.cc*a.ju}}uc(t,e){let i=this.mc(t.font),n=i.get(e);return n===void 0&&(n=t.measureText(e).width,i.set(e,n)),n}mc(t){let e=this.oc.get(t);return e===void 0&&(e=new Map,this.oc.set(t,e)),e}},Hs=class{constructor(t){this.ft=!0,this.Ft={yt:!1,O:"",_c:[],dc:"center",fc:"center"},this.Wt=new Ws(this.Ft),this.jt=t}bt(){this.ft=!0}gt(){return this.ft&&(this.Mt(),this.ft=!1),this.Wt}Mt(){let t=this.jt.W(),e=this.Ft;e.yt=t.visible,e.yt&&(e.O=t.color,e.fc=t.horzAlign,e.dc=t.vertAlign,e._c=[{Zt:t.text,R:ke(t.fontSize,t.fontFamily,t.fontStyle),cc:1.2*t.fontSize,vc:0,ju:0}])}},js=class extends Ue{constructor(t,e){super(),this._n=e,this.mn=new Hs(this)}Tn(){return[]}Cn(){return[this.mn]}W(){return this._n}Rn(){this.mn.bt()}},ar,rr,lr,Ke,cr;(function(s){s[s.OnTouchEnd=0]="OnTouchEnd",s[s.OnNextTap=1]="OnNextTap"})(ar||(ar={}));var $s=class{constructor(t,e,i){this.bc=[],this.wc=[],this.e_=0,this.gc=null,this.Mc=new H,this.xc=new H,this.Sc=null,this.kc=t,this._n=e,this.N_=i,this.yc=new jn(this),this.wl=new Fs(this,e.timeScale,this._n.localization,i),this.vt=new Yn(this,e.crosshair),this.Cc=new Is(e.crosshair),this.Tc=new js(this,e.watermark),this.Pc(),this.bc[0].p_(2e3),this.Rc=this.Dc(0),this.Oc=this.Dc(1)}$l(){this.Ac(it.ns())}Nh(){this.Ac(it.ts())}sa(){this.Ac(new it(1))}Ul(t){let e=this.Vc(t);this.Ac(e)}Bc(){return this.gc}Ic(t){let e=this.gc;this.gc=t,e!==null&&this.Ul(e.zc),t!==null&&this.Ul(t.zc)}W(){return this._n}Eh(t){St(this._n,t),this.bc.forEach(e=>e.c_(t)),t.timeScale!==void 0&&this.wl.Eh(t.timeScale),t.localization!==void 0&&this.wl.wu(t.localization),(t.leftPriceScale||t.rightPriceScale)&&this.Mc.m(),this.Rc=this.Dc(0),this.Oc=this.Dc(1),this.$l()}Lc(t,e){if(t==="left")return void this.Eh({leftPriceScale:e});if(t==="right")return void this.Eh({rightPriceScale:e});let i=this.Ec(t);i!==null&&(i.Dt.Eh(e),this.Mc.m())}Ec(t){for(let e of this.bc){let i=e.d_(t);if(i!==null)return{Ht:e,Dt:i}}return null}St(){return this.wl}Nc(){return this.bc}Fc(){return this.Tc}Wc(){return this.vt}jc(){return this.xc}Hc(t,e){t.Oo(e),this.Iu()}m_(t){this.e_=t,this.wl.m_(this.e_),this.bc.forEach(e=>e.m_(t)),this.Iu()}Pc(t){let e=new Bs(this.wl,this);t!==void 0?this.bc.splice(t,0,e):this.bc.push(e);let i=t===void 0?this.bc.length-1:t,n=it.ns();return n.Ln(i,{En:0,Nn:!0}),this.Ac(n),e}y_(t,e,i){t.y_(e,i)}C_(t,e,i){t.C_(e,i),this.ql(),this.Ac(this.$c(t,2))}T_(t,e){t.T_(e),this.Ac(this.$c(t,2))}P_(t,e,i){e.yo()||t.P_(e,i)}R_(t,e,i){e.yo()||(t.R_(e,i),this.ql(),this.Ac(this.$c(t,2)))}D_(t,e){e.yo()||(t.D_(e),this.Ac(this.$c(t,2)))}A_(t,e){t.A_(e),this.Ac(this.$c(t,2))}Uc(t){this.wl.Uo(t)}qc(t,e){let i=this.St();if(i.Ei()||e===0)return;let n=i.ji();t=Math.max(1,Math.min(t,n)),i.ju(t,e),this.Iu()}Yc(t){this.Xc(0),this.Kc(t),this.Zc()}Gc(t){this.wl.qo(t),this.Iu()}Jc(){this.wl.Yo(),this.Nh()}Xc(t){this.wl.Xo(t)}Kc(t){this.wl.Ko(t),this.Iu()}Zc(){this.wl.Zo(),this.Nh()}wt(){return this.wc}Qc(t,e,i,n,o){this.vt.bn(t,e);let a=NaN,r=this.wl.Vu(t),l=this.wl.qs();l!==null&&(r=Math.min(Math.max(l.Rs(),r),l.ui()));let c=n.dn(),h=c.Ct();h!==null&&(a=c.fn(e,h)),a=this.Cc.Ca(a,r,n),this.vt.xn(r,a,n),this.sa(),o||this.xc.m(this.vt.xt(),{x:t,y:e},i)}td(t,e,i){let n=i.dn(),o=n.Ct(),a=n.Rt(t,v(o)),r=this.wl.ya(e,!0),l=this.wl.It(v(r));this.Qc(l,a,null,i,!0)}nd(t){this.Wc().kn(),this.sa(),t||this.xc.m(null,null,null)}ql(){let t=this.vt.Ht();if(t!==null){let e=this.vt.gn(),i=this.vt.Mn();this.Qc(e,i,null,t)}this.vt.Rn()}sd(t,e,i){let n=this.wl.vn(0);e!==void 0&&i!==void 0&&this.wl.bt(e,i);let o=this.wl.vn(0),a=this.wl.Au(),r=this.wl.qs();if(r!==null&&n!==null&&o!==null){let l=r.Yr(a),c=this.N_.key(n)>this.N_.key(o),h=t!==null&&t>a&&!c,d=this.wl.W().allowShiftVisibleRangeOnWhitespaceReplacement,m=l&&(i!==void 0||d)&&this.wl.W().shiftVisibleRangeOnNewBar;if(h&&!m){let u=t-a;this.wl.Zn(this.wl.Lu()-u)}}this.wl.Wu(t)}Kl(t){t!==null&&t.B_()}_r(t){let e=this.bc.find(i=>i.No().includes(t));return e===void 0?null:e}Iu(){this.Tc.Rn(),this.bc.forEach(t=>t.B_()),this.ql()}S(){this.bc.forEach(t=>t.S()),this.bc.length=0,this._n.localization.priceFormatter=void 0,this._n.localization.percentageFormatter=void 0,this._n.localization.timeFormatter=void 0}ed(){return this.yc}vr(){return this.yc.W()}f_(){return this.Mc}rd(t,e,i){let n=this.bc[0],o=this.hd(e,t,n,i);return this.wc.push(o),this.wc.length===1?this.$l():this.Nh(),o}ld(t){let e=this._r(t),i=this.wc.indexOf(t);Gt(i!==-1,"Series not found"),this.wc.splice(i,1),v(e).jo(t),t.S&&t.S()}Hl(t,e){let i=v(this._r(t));i.jo(t);let n=this.Ec(e);if(n===null){let o=t.Xi();i.Fo(t,e,o)}else{let o=n.Ht===i?t.Xi():void 0;n.Ht.Fo(t,e,o)}}Qu(){let t=it.ts();t.jn(),this.Ac(t)}ad(t){let e=it.ts();e.Un(t),this.Ac(e)}Xn(){let t=it.ts();t.Xn(),this.Ac(t)}Kn(t){let e=it.ts();e.Kn(t),this.Ac(e)}Zn(t){let e=it.ts();e.Zn(t),this.Ac(e)}qn(t){let e=it.ts();e.qn(t),this.Ac(e)}Hn(){let t=it.ts();t.Hn(),this.Ac(t)}od(){return this._n.rightPriceScale.visible?"right":"left"}_d(){return this.Oc}q(){return this.Rc}Vt(t){let e=this.Oc,i=this.Rc;if(e===i)return e;if(t=Math.max(0,Math.min(100,Math.round(100*t))),this.Sc===null||this.Sc.ys!==i||this.Sc.Cs!==e)this.Sc={ys:i,Cs:e,ud:new Map};else{let o=this.Sc.ud.get(t);if(o!==void 0)return o}let n=(function(o,a,r){let[l,c,h,d]=Ti(o),[m,u,p,f]=Ti(a),w=[yt(l+r*(m-l)),yt(c+r*(u-c)),yt(h+r*(p-h)),Er(d+r*(f-d))];return`rgba(${w[0]}, ${w[1]}, ${w[2]}, ${w[3]})`})(i,e,t/100);return this.Sc.ud.set(t,n),n}$c(t,e){let i=new it(e);if(t!==null){let n=this.bc.indexOf(t);i.Ln(n,{En:e})}return i}Vc(t,e){return e===void 0&&(e=2),this.$c(this._r(t),e)}Ac(t){this.kc&&this.kc(t),this.bc.forEach(e=>e.z_().Fh().bt())}hd(t,e,i,n){let o=new Xe(this,t,e,i,n),a=t.priceScaleId!==void 0?t.priceScaleId:this.od();return i.Fo(o,a),Ui(a)||o.Eh(t),o}Dc(t){let e=this._n.layout;return e.background.type==="gradient"?t===0?e.background.topColor:e.background.bottomColor:e.background.color}};function Qs(s){return!It(s)&&!ti(s)}function Wr(s){return It(s)}(function(s){s[s.Disabled=0]="Disabled",s[s.Continuous=1]="Continuous",s[s.OnDataUpdate=2]="OnDataUpdate"})(rr||(rr={})),(function(s){s[s.LastBar=0]="LastBar",s[s.LastVisible=1]="LastVisible"})(lr||(lr={})),(function(s){s.Solid="solid",s.VerticalGradient="gradient"})(Ke||(Ke={})),(function(s){s[s.Year=0]="Year",s[s.Month=1]="Month",s[s.DayOfMonth=2]="DayOfMonth",s[s.Time=3]="Time",s[s.TimeWithSeconds=4]="TimeWithSeconds"})(cr||(cr={}));var hr=s=>s.getUTCFullYear();function Hc(s,t,e){return t.replace(/yyyy/g,(i=>Nt(hr(i),4))(s)).replace(/yy/g,(i=>Nt(hr(i)%100,2))(s)).replace(/MMMM/g,((i,n)=>new Date(i.getUTCFullYear(),i.getUTCMonth(),1).toLocaleString(n,{month:"long"}))(s,e)).replace(/MMM/g,((i,n)=>new Date(i.getUTCFullYear(),i.getUTCMonth(),1).toLocaleString(n,{month:"short"}))(s,e)).replace(/MM/g,(i=>Nt((n=>n.getUTCMonth()+1)(i),2))(s)).replace(/dd/g,(i=>Nt((n=>n.getUTCDate())(i),2))(s))}var Vi=class{constructor(t="yyyy-MM-dd",e="default"){this.dd=t,this.fd=e}F_(t){return Hc(t,this.dd,this.fd)}},Us=class{constructor(t){this.vd=t||"%h:%m:%s"}F_(t){return this.vd.replace("%h",Nt(t.getUTCHours(),2)).replace("%m",Nt(t.getUTCMinutes(),2)).replace("%s",Nt(t.getUTCSeconds(),2))}},jc={pd:"yyyy-MM-dd",md:"%h:%m:%s",bd:" ",wd:"default"},Gs=class{constructor(t={}){let e=Object.assign(Object.assign({},jc),t);this.gd=new Vi(e.pd,e.wd),this.Md=new Us(e.md),this.xd=e.bd}F_(t){return`${this.gd.F_(t)}${this.xd}${this.Md.F_(t)}`}};function wi(s){return 60*s*60*1e3}function zn(s){return 60*s*1e3}var xi=[{Sd:(dr=1,1e3*dr),kd:10},{Sd:zn(1),kd:20},{Sd:zn(5),kd:21},{Sd:zn(30),kd:22},{Sd:wi(1),kd:30},{Sd:wi(3),kd:31},{Sd:wi(6),kd:32},{Sd:wi(12),kd:33}],dr;function mr(s,t){if(s.getUTCFullYear()!==t.getUTCFullYear())return 70;if(s.getUTCMonth()!==t.getUTCMonth())return 60;if(s.getUTCDate()!==t.getUTCDate())return 50;for(let e=xi.length-1;e>=0;--e)if(Math.floor(t.getTime()/xi[e].Sd)!==Math.floor(s.getTime()/xi[e].Sd))return xi[e].kd;return 0}function On(s){let t=s;if(ti(s)&&(t=co(s)),!Qs(t))throw new Error("time must be of type BusinessDay");let e=new Date(Date.UTC(t.year,t.month-1,t.day,0,0,0,0));return{yd:Math.round(e.getTime()/1e3),Cd:t}}function ur(s){if(!Wr(s))throw new Error("time must be of type isUTCTimestamp");return{yd:s}}function co(s){let t=new Date(s);if(isNaN(t.getTime()))throw new Error(`Invalid date string=${s}, expected format=yyyy-mm-dd`);return{day:t.getUTCDate(),month:t.getUTCMonth()+1,year:t.getUTCFullYear()}}function pr(s){ti(s.time)&&(s.time=co(s.time))}var Wi=class{options(){return this._n}setOptions(t){this._n=t,this.updateFormatter(t.localization)}preprocessData(t){Array.isArray(t)?(function(e){e.forEach(pr)})(t):pr(t)}createConverterToInternalObj(t){return v((function(e){return e.length===0?null:Qs(e[0].time)||ti(e[0].time)?On:ur})(t))}key(t){return typeof t=="object"&&"yd"in t?t.yd:this.key(this.convertHorzItemToInternal(t))}cacheKey(t){let e=t;return e.Cd===void 0?new Date(1e3*e.yd).getTime():new Date(Date.UTC(e.Cd.year,e.Cd.month-1,e.Cd.day)).getTime()}convertHorzItemToInternal(t){return Wr(e=t)?ur(e):Qs(e)?On(e):On(co(e));var e}updateFormatter(t){if(!this._n)return;let e=t.dateFormat;this._n.timeScale.timeVisible?this.Td=new Gs({pd:e,md:this._n.timeScale.secondsVisible?"%h:%m:%s":"%h:%m",bd:"   ",wd:t.locale}):this.Td=new Vi(e,t.locale)}formatHorzItem(t){let e=t;return this.Td.F_(new Date(1e3*e.yd))}formatTickmark(t,e){let i=(function(o,a,r){switch(o){case 0:case 10:return a?r?4:3:2;case 20:case 21:case 22:case 30:case 31:case 32:case 33:return a?3:2;case 50:return 2;case 60:return 1;case 70:return 0}})(t.weight,this._n.timeScale.timeVisible,this._n.timeScale.secondsVisible),n=this._n.timeScale;if(n.tickMarkFormatter!==void 0){let o=n.tickMarkFormatter(t.originalTime,i,e.locale);if(o!==null)return o}return(function(o,a,r){let l={};switch(a){case 0:l.year="numeric";break;case 1:l.month="short";break;case 2:l.day="numeric";break;case 3:l.hour12=!1,l.hour="2-digit",l.minute="2-digit";break;case 4:l.hour12=!1,l.hour="2-digit",l.minute="2-digit",l.second="2-digit"}let c=o.Cd===void 0?new Date(1e3*o.yd):new Date(Date.UTC(o.Cd.year,o.Cd.month-1,o.Cd.day));return new Date(c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate(),c.getUTCHours(),c.getUTCMinutes(),c.getUTCSeconds(),c.getUTCMilliseconds()).toLocaleString(r,l)})(t.time,i,e.locale)}maxTickMarkWeight(t){let e=t.reduce(Wc,t[0]).weight;return e>30&&e<50&&(e=30),e}fillWeightsForPoints(t,e){(function(i,n=0){if(i.length===0)return;let o=n===0?null:i[n-1].time.yd,a=o!==null?new Date(1e3*o):null,r=0;for(let l=n;l<i.length;++l){let c=i[l],h=new Date(1e3*c.time.yd);a!==null&&(c.timeWeight=mr(h,a)),r+=c.time.yd-(o||c.time.yd),o=c.time.yd,a=h}if(n===0&&i.length>1){let l=Math.ceil(r/(i.length-1)),c=new Date(1e3*(i[0].time.yd-l));i[0].timeWeight=mr(new Date(1e3*i[0].time.yd),c)}})(t,e)}static Pd(t){return St({localization:{dateFormat:"dd MMM 'yy"}},t??{})}},De=typeof window<"u";function fr(){return!!De&&window.navigator.userAgent.toLowerCase().indexOf("firefox")>-1}function Ln(){return!!De&&/iPhone|iPad|iPod/.test(window.navigator.platform)}function qs(s){return s+s%2}function Pn(s,t){return s.Rd-t.Rd}function Bn(s,t,e){let i=(s.Rd-t.Rd)/(s.ot-t.ot);return Math.sign(i)*Math.min(Math.abs(i),e)}var Zs=class{constructor(t,e,i,n){this.Dd=null,this.Od=null,this.Ad=null,this.Vd=null,this.Bd=null,this.Id=0,this.zd=0,this.Ld=t,this.Ed=e,this.Nd=i,this.ss=n}Fd(t,e){if(this.Dd!==null){if(this.Dd.ot===e)return void(this.Dd.Rd=t);if(Math.abs(this.Dd.Rd-t)<this.ss)return}this.Vd=this.Ad,this.Ad=this.Od,this.Od=this.Dd,this.Dd={ot:e,Rd:t}}Pr(t,e){if(this.Dd===null||this.Od===null||e-this.Dd.ot>50)return;let i=0,n=Bn(this.Dd,this.Od,this.Ed),o=Pn(this.Dd,this.Od),a=[n],r=[o];if(i+=o,this.Ad!==null){let c=Bn(this.Od,this.Ad,this.Ed);if(Math.sign(c)===Math.sign(n)){let h=Pn(this.Od,this.Ad);if(a.push(c),r.push(h),i+=h,this.Vd!==null){let d=Bn(this.Ad,this.Vd,this.Ed);if(Math.sign(d)===Math.sign(n)){let m=Pn(this.Ad,this.Vd);a.push(d),r.push(m),i+=m}}}}let l=0;for(let c=0;c<a.length;++c)l+=r[c]/i*a[c];Math.abs(l)<this.Ld||(this.Bd={Rd:t,ot:e},this.zd=l,this.Id=(function(c,h){let d=Math.log(h);return Math.log(1*d/-c)/d})(Math.abs(l),this.Nd))}Xu(t){let e=v(this.Bd),i=t-e.ot;return e.Rd+this.zd*(Math.pow(this.Nd,i)-1)/Math.log(this.Nd)}Yu(t){return this.Bd===null||this.Wd(t)===this.Id}Wd(t){let e=t-v(this.Bd).ot;return Math.min(e,this.Id)}};function ne(s,t){let e=v(s.ownerDocument).createElement("canvas");s.appendChild(e);let i=Sn(e,{type:"device-pixel-content-box",options:{allowResizeObserver:!1},transform:(n,o)=>({width:Math.max(n.width,o.width),height:Math.max(n.height,o.height)})});return i.resizeCanvasElement(t),i}function se(s){var t;s.width=1,s.height=1,(t=s.getContext("2d"))===null||t===void 0||t.clearRect(0,0,1,1)}function Ys(s,t,e,i){s.fl&&s.fl(t,e,i)}function Di(s,t,e,i){s.K(t,e,i)}function Xs(s,t,e,i){let n=s(e,i);for(let o of n){let a=o.gt();a!==null&&t(a)}}function $c(s){De&&window.chrome!==void 0&&s.addEventListener("mousedown",t=>{if(t.button===1)return t.preventDefault(),!1})}var Je=class{constructor(t,e,i){this.jd=0,this.Hd=null,this.$d={nt:Number.NEGATIVE_INFINITY,st:Number.POSITIVE_INFINITY},this.Ud=0,this.qd=null,this.Yd={nt:Number.NEGATIVE_INFINITY,st:Number.POSITIVE_INFINITY},this.Xd=null,this.Kd=!1,this.Zd=null,this.Gd=null,this.Jd=!1,this.Qd=!1,this.tf=!1,this.if=null,this.nf=null,this.sf=null,this.ef=null,this.rf=null,this.hf=null,this.lf=null,this.af=0,this._f=!1,this.uf=!1,this.cf=!1,this.df=0,this.ff=null,this.vf=!Ln(),this.pf=n=>{this.mf(n)},this.bf=n=>{if(this.wf(n)){let o=this.gf(n);if(++this.Ud,this.qd&&this.Ud>1){let{Mf:a}=this.xf(Et(n),this.Yd);a<30&&!this.tf&&this.Sf(o,this.yf.kf),this.Cf()}}else{let o=this.gf(n);if(++this.jd,this.Hd&&this.jd>1){let{Mf:a}=this.xf(Et(n),this.$d);a<5&&!this.Qd&&this.Tf(o,this.yf.Pf),this.Rf()}}},this.Df=t,this.yf=e,this._n=i,this.Of()}S(){this.if!==null&&(this.if(),this.if=null),this.nf!==null&&(this.nf(),this.nf=null),this.ef!==null&&(this.ef(),this.ef=null),this.rf!==null&&(this.rf(),this.rf=null),this.hf!==null&&(this.hf(),this.hf=null),this.sf!==null&&(this.sf(),this.sf=null),this.Af(),this.Rf()}Vf(t){this.ef&&this.ef();let e=this.Bf.bind(this);if(this.ef=()=>{this.Df.removeEventListener("mousemove",e)},this.Df.addEventListener("mousemove",e),this.wf(t))return;let i=this.gf(t);this.Tf(i,this.yf.If),this.vf=!0}Rf(){this.Hd!==null&&clearTimeout(this.Hd),this.jd=0,this.Hd=null,this.$d={nt:Number.NEGATIVE_INFINITY,st:Number.POSITIVE_INFINITY}}Cf(){this.qd!==null&&clearTimeout(this.qd),this.Ud=0,this.qd=null,this.Yd={nt:Number.NEGATIVE_INFINITY,st:Number.POSITIVE_INFINITY}}Bf(t){if(this.cf||this.Gd!==null||this.wf(t))return;let e=this.gf(t);this.Tf(e,this.yf.zf),this.vf=!0}Lf(t){let e=An(t.changedTouches,v(this.ff));if(e===null||(this.df=ki(t),this.lf!==null)||this.uf)return;this._f=!0;let i=this.xf(Et(e),v(this.Gd)),{Ef:n,Nf:o,Mf:a}=i;if(this.Jd||!(a<5)){if(!this.Jd){let r=.5*n,l=o>=r&&!this._n.Ff(),c=r>o&&!this._n.Wf();l||c||(this.uf=!0),this.Jd=!0,this.tf=!0,this.Af(),this.Cf()}if(!this.uf){let r=this.gf(t,e);this.Sf(r,this.yf.jf),ve(t)}}}Hf(t){if(t.button!==0)return;let e=this.xf(Et(t),v(this.Zd)),{Mf:i}=e;if(i>=5&&(this.Qd=!0,this.Rf()),this.Qd){let n=this.gf(t);this.Tf(n,this.yf.$f)}}xf(t,e){let i=Math.abs(e.nt-t.nt),n=Math.abs(e.st-t.st);return{Ef:i,Nf:n,Mf:i+n}}Uf(t){let e=An(t.changedTouches,v(this.ff));if(e===null&&t.touches.length===0&&(e=t.changedTouches[0]),e===null)return;this.ff=null,this.df=ki(t),this.Af(),this.Gd=null,this.hf&&(this.hf(),this.hf=null);let i=this.gf(t,e);if(this.Sf(i,this.yf.qf),++this.Ud,this.qd&&this.Ud>1){let{Mf:n}=this.xf(Et(e),this.Yd);n<30&&!this.tf&&this.Sf(i,this.yf.kf),this.Cf()}else this.tf||(this.Sf(i,this.yf.Yf),this.yf.Yf&&ve(t));this.Ud===0&&ve(t),t.touches.length===0&&this.Kd&&(this.Kd=!1,ve(t))}mf(t){if(t.button!==0)return;let e=this.gf(t);if(this.Zd=null,this.cf=!1,this.rf&&(this.rf(),this.rf=null),fr()&&this.Df.ownerDocument.documentElement.removeEventListener("mouseleave",this.pf),!this.wf(t))if(this.Tf(e,this.yf.Xf),++this.jd,this.Hd&&this.jd>1){let{Mf:i}=this.xf(Et(t),this.$d);i<5&&!this.Qd&&this.Tf(e,this.yf.Pf),this.Rf()}else this.Qd||this.Tf(e,this.yf.Kf)}Af(){this.Xd!==null&&(clearTimeout(this.Xd),this.Xd=null)}Zf(t){if(this.ff!==null)return;let e=t.changedTouches[0];this.ff=e.identifier,this.df=ki(t);let i=this.Df.ownerDocument.documentElement;this.tf=!1,this.Jd=!1,this.uf=!1,this.Gd=Et(e),this.hf&&(this.hf(),this.hf=null);{let o=this.Lf.bind(this),a=this.Uf.bind(this);this.hf=()=>{i.removeEventListener("touchmove",o),i.removeEventListener("touchend",a)},i.addEventListener("touchmove",o,{passive:!1}),i.addEventListener("touchend",a,{passive:!1}),this.Af(),this.Xd=setTimeout(this.Gf.bind(this,t),240)}let n=this.gf(t,e);this.Sf(n,this.yf.Jf),this.qd||(this.Ud=0,this.qd=setTimeout(this.Cf.bind(this),500),this.Yd=Et(e))}Qf(t){if(t.button!==0)return;let e=this.Df.ownerDocument.documentElement;fr()&&e.addEventListener("mouseleave",this.pf),this.Qd=!1,this.Zd=Et(t),this.rf&&(this.rf(),this.rf=null);{let n=this.Hf.bind(this),o=this.mf.bind(this);this.rf=()=>{e.removeEventListener("mousemove",n),e.removeEventListener("mouseup",o)},e.addEventListener("mousemove",n),e.addEventListener("mouseup",o)}if(this.cf=!0,this.wf(t))return;let i=this.gf(t);this.Tf(i,this.yf.tv),this.Hd||(this.jd=0,this.Hd=setTimeout(this.Rf.bind(this),500),this.$d=Et(t))}Of(){this.Df.addEventListener("mouseenter",this.Vf.bind(this)),this.Df.addEventListener("touchcancel",this.Af.bind(this));{let t=this.Df.ownerDocument,e=i=>{this.yf.iv&&(i.composed&&this.Df.contains(i.composedPath()[0])||i.target&&this.Df.contains(i.target)||this.yf.iv())};this.nf=()=>{t.removeEventListener("touchstart",e)},this.if=()=>{t.removeEventListener("mousedown",e)},t.addEventListener("mousedown",e),t.addEventListener("touchstart",e,{passive:!0})}Ln()&&(this.sf=()=>{this.Df.removeEventListener("dblclick",this.bf)},this.Df.addEventListener("dblclick",this.bf)),this.Df.addEventListener("mouseleave",this.nv.bind(this)),this.Df.addEventListener("touchstart",this.Zf.bind(this),{passive:!0}),$c(this.Df),this.Df.addEventListener("mousedown",this.Qf.bind(this)),this.sv(),this.Df.addEventListener("touchmove",()=>{},{passive:!1})}sv(){this.yf.ev===void 0&&this.yf.rv===void 0&&this.yf.hv===void 0||(this.Df.addEventListener("touchstart",t=>this.lv(t.touches),{passive:!0}),this.Df.addEventListener("touchmove",t=>{if(t.touches.length===2&&this.lf!==null&&this.yf.rv!==void 0){let e=br(t.touches[0],t.touches[1])/this.af;this.yf.rv(this.lf,e),ve(t)}},{passive:!1}),this.Df.addEventListener("touchend",t=>{this.lv(t.touches)}))}lv(t){t.length===1&&(this._f=!1),t.length!==2||this._f||this.Kd?this.av():this.ov(t)}ov(t){let e=this.Df.getBoundingClientRect()||{left:0,top:0};this.lf={nt:(t[0].clientX-e.left+(t[1].clientX-e.left))/2,st:(t[0].clientY-e.top+(t[1].clientY-e.top))/2},this.af=br(t[0],t[1]),this.yf.ev!==void 0&&this.yf.ev(),this.Af()}av(){this.lf!==null&&(this.lf=null,this.yf.hv!==void 0&&this.yf.hv())}nv(t){if(this.ef&&this.ef(),this.wf(t)||!this.vf)return;let e=this.gf(t);this.Tf(e,this.yf._v),this.vf=!Ln()}Gf(t){let e=An(t.touches,v(this.ff));if(e===null)return;let i=this.gf(t,e);this.Sf(i,this.yf.uv),this.tf=!0,this.Kd=!0}wf(t){return t.sourceCapabilities&&t.sourceCapabilities.firesTouchEvents!==void 0?t.sourceCapabilities.firesTouchEvents:ki(t)<this.df+500}Sf(t,e){e&&e.call(this.yf,t)}Tf(t,e){e&&e.call(this.yf,t)}gf(t,e){let i=e||t,n=this.Df.getBoundingClientRect()||{left:0,top:0};return{clientX:i.clientX,clientY:i.clientY,pageX:i.pageX,pageY:i.pageY,screenX:i.screenX,screenY:i.screenY,localX:i.clientX-n.left,localY:i.clientY-n.top,ctrlKey:t.ctrlKey,altKey:t.altKey,shiftKey:t.shiftKey,metaKey:t.metaKey,cv:!t.type.startsWith("mouse")&&t.type!=="contextmenu"&&t.type!=="click",dv:t.type,fv:i.target,vv:t.view,pv:()=>{t.type!=="touchstart"&&ve(t)}}}};function br(s,t){let e=s.clientX-t.clientX,i=s.clientY-t.clientY;return Math.sqrt(e*e+i*i)}function ve(s){s.cancelable&&s.preventDefault()}function Et(s){return{nt:s.pageX,st:s.pageY}}function ki(s){return s.timeStamp||performance.now()}function An(s,t){for(let e=0;e<s.length;++e)if(s[e].identifier===t)return s[e];return null}function Ci(s){return{zc:s.zc,mv:{mr:s.bv.externalId},wv:s.bv.cursorStyle}}function Qc(s,t,e){for(let i of s){let n=i.gt();if(n!==null&&n.pr){let o=n.pr(t,e);if(o!==null)return{vv:i,mv:o}}}return null}function Nn(s,t){return e=>{var i,n,o,a;return((n=(i=e.Dt())===null||i===void 0?void 0:i.xa())!==null&&n!==void 0?n:"")!==t?[]:(a=(o=e.la)===null||o===void 0?void 0:o.call(e,s))!==null&&a!==void 0?a:[]}}var Hi=class{constructor(t,e,i,n){this.zi=null,this.gv=null,this.Mv=!1,this.xv=new ie(200),this.Zr=null,this.Sv=0,this.kv=!1,this.yv=()=>{this.kv||this.Qi.Cv().$t().Nh()},this.Tv=()=>{this.kv||this.Qi.Cv().$t().Nh()},this.Qi=t,this._n=e,this.mo=e.layout,this.yc=i,this.Pv=n==="left",this.Rv=Nn("normal",n),this.Dv=Nn("top",n),this.Ov=Nn("bottom",n),this.Av=document.createElement("div"),this.Av.style.height="100%",this.Av.style.overflow="hidden",this.Av.style.width="25px",this.Av.style.left="0",this.Av.style.position="relative",this.Vv=ne(this.Av,P({width:16,height:16})),this.Vv.subscribeSuggestedBitmapSizeChanged(this.yv);let o=this.Vv.canvasElement;o.style.position="absolute",o.style.zIndex="1",o.style.left="0",o.style.top="0",this.Bv=ne(this.Av,P({width:16,height:16})),this.Bv.subscribeSuggestedBitmapSizeChanged(this.Tv);let a=this.Bv.canvasElement;a.style.position="absolute",a.style.zIndex="2",a.style.left="0",a.style.top="0";let r={tv:this.Iv.bind(this),Jf:this.Iv.bind(this),$f:this.zv.bind(this),jf:this.zv.bind(this),iv:this.Lv.bind(this),Xf:this.Ev.bind(this),qf:this.Ev.bind(this),Pf:this.Nv.bind(this),kf:this.Nv.bind(this),If:this.Fv.bind(this),_v:this.Wv.bind(this)};this.jv=new Je(this.Bv.canvasElement,r,{Ff:()=>!this._n.handleScroll.vertTouchDrag,Wf:()=>!0})}S(){this.jv.S(),this.Bv.unsubscribeSuggestedBitmapSizeChanged(this.Tv),se(this.Bv.canvasElement),this.Bv.dispose(),this.Vv.unsubscribeSuggestedBitmapSizeChanged(this.yv),se(this.Vv.canvasElement),this.Vv.dispose(),this.zi!==null&&this.zi.$o().p(this),this.zi=null}Hv(){return this.Av}P(){return this.mo.fontSize}$v(){let t=this.yc.W();return this.Zr!==t.R&&(this.xv.Qe(),this.Zr=t.R),t}Uv(){if(this.zi===null)return 0;let t=0,e=this.$v(),i=v(this.Vv.canvasElement.getContext("2d"));i.save();let n=this.zi.La();i.font=this.qv(),n.length>0&&(t=Math.max(this.xv.Mi(i,n[0].Za),this.xv.Mi(i,n[n.length-1].Za)));let o=this.Yv();for(let l=o.length;l--;){let c=this.xv.Mi(i,o[l].Zt());c>t&&(t=c)}let a=this.zi.Ct();if(a!==null&&this.gv!==null){let l=this.zi.fn(1,a),c=this.zi.fn(this.gv.height-2,a);t=Math.max(t,this.xv.Mi(i,this.zi.Ni(Math.floor(Math.min(l,c))+.11111111111111,a)),this.xv.Mi(i,this.zi.Ni(Math.ceil(Math.max(l,c))-.11111111111111,a)))}i.restore();let r=t||34;return qs(Math.ceil(e.C+e.T+e.B+e.I+5+r))}Xv(t){this.gv!==null&&Rt(this.gv,t)||(this.gv=t,this.kv=!0,this.Vv.resizeCanvasElement(t),this.Bv.resizeCanvasElement(t),this.kv=!1,this.Av.style.width=`${t.width}px`,this.Av.style.height=`${t.height}px`)}Kv(){return v(this.gv).width}Zi(t){this.zi!==t&&(this.zi!==null&&this.zi.$o().p(this),this.zi=t,t.$o().l(this.ao.bind(this),this))}Dt(){return this.zi}Qe(){let t=this.Qi.Zv();this.Qi.Cv().$t().A_(t,v(this.Dt()))}Gv(t){if(this.gv===null)return;if(t!==1){this.Jv(),this.Vv.applySuggestedBitmapSize();let i=Bt(this.Vv);i!==null&&(i.useBitmapCoordinateSpace(n=>{this.Qv(n),this.Ae(n)}),this.Qi.tp(i,this.Ov),this.ip(i),this.Qi.tp(i,this.Rv),this.np(i))}this.Bv.applySuggestedBitmapSize();let e=Bt(this.Bv);e!==null&&(e.useBitmapCoordinateSpace(({context:i,bitmapSize:n})=>{i.clearRect(0,0,n.width,n.height)}),this.sp(e),this.Qi.tp(e,this.Dv))}ep(){return this.Vv.bitmapSize}rp(t,e,i){let n=this.ep();n.width>0&&n.height>0&&t.drawImage(this.Vv.canvasElement,e,i)}bt(){var t;(t=this.zi)===null||t===void 0||t.La()}Iv(t){if(this.zi===null||this.zi.Ei()||!this._n.handleScale.axisPressedMouseMove.price)return;let e=this.Qi.Cv().$t(),i=this.Qi.Zv();this.Mv=!0,e.y_(i,this.zi,t.localY)}zv(t){if(this.zi===null||!this._n.handleScale.axisPressedMouseMove.price)return;let e=this.Qi.Cv().$t(),i=this.Qi.Zv(),n=this.zi;e.C_(i,n,t.localY)}Lv(){if(this.zi===null||!this._n.handleScale.axisPressedMouseMove.price)return;let t=this.Qi.Cv().$t(),e=this.Qi.Zv(),i=this.zi;this.Mv&&(this.Mv=!1,t.T_(e,i))}Ev(t){if(this.zi===null||!this._n.handleScale.axisPressedMouseMove.price)return;let e=this.Qi.Cv().$t(),i=this.Qi.Zv();this.Mv=!1,e.T_(i,this.zi)}Nv(t){this._n.handleScale.axisDoubleClickReset.price&&this.Qe()}Fv(t){this.zi!==null&&(!this.Qi.Cv().$t().W().handleScale.axisPressedMouseMove.price||this.zi.fh()||this.zi.Co()||this.hp(1))}Wv(t){this.hp(0)}Yv(){let t=[],e=this.zi===null?void 0:this.zi;return(i=>{for(let n=0;n<i.length;++n){let o=i[n].Tn(this.Qi.Zv(),e);for(let a=0;a<o.length;a++)t.push(o[a])}})(this.Qi.Zv().No()),t}Qv({context:t,bitmapSize:e}){let{width:i,height:n}=e,o=this.Qi.Zv().$t(),a=o.q(),r=o._d();a===r?Qi(t,0,0,i,n,a):Ir(t,0,0,i,n,a,r)}Ae({context:t,bitmapSize:e,horizontalPixelRatio:i}){if(this.gv===null||this.zi===null||!this.zi.W().borderVisible)return;t.fillStyle=this.zi.W().borderColor;let n=Math.max(1,Math.floor(this.$v().C*i)),o;o=this.Pv?e.width-n:0,t.fillRect(o,0,n,e.height)}ip(t){if(this.gv===null||this.zi===null)return;let e=this.zi.La(),i=this.zi.W(),n=this.$v(),o=this.Pv?this.gv.width-n.T:0;i.borderVisible&&i.ticksVisible&&t.useBitmapCoordinateSpace(({context:a,horizontalPixelRatio:r,verticalPixelRatio:l})=>{a.fillStyle=i.borderColor;let c=Math.max(1,Math.floor(l)),h=Math.floor(.5*l),d=Math.round(n.T*r);a.beginPath();for(let m of e)a.rect(Math.floor(o*r),Math.round(m.Aa*l)-h,d,c);a.fill()}),t.useMediaCoordinateSpace(({context:a})=>{var r;a.font=this.qv(),a.fillStyle=(r=i.textColor)!==null&&r!==void 0?r:this.mo.textColor,a.textAlign=this.Pv?"right":"left",a.textBaseline="middle";let l=this.Pv?Math.round(o-n.B):Math.round(o+n.T+n.B),c=e.map(h=>this.xv.gi(a,h.Za));for(let h=e.length;h--;){let d=e[h];a.fillText(d.Za,l,d.Aa+c[h])}})}Jv(){if(this.gv===null||this.zi===null)return;let t=this.gv.height/2,e=[],i=this.zi.No().slice(),n=this.Qi.Zv(),o=this.$v();this.zi===n.cr()&&this.Qi.Zv().No().forEach(l=>{n.ur(l)&&i.push(l)});let a=this.zi.Ta()[0],r=this.zi;i.forEach(l=>{let c=l.Tn(n,r);c.forEach(h=>{h.Oi(null),h.Ai()&&e.push(h)}),a===l&&c.length>0&&(t=c[0].Si())}),e.forEach(l=>l.Oi(l.Si())),this.zi.W().alignLabels&&this.lp(e,o,t)}lp(t,e,i){if(this.gv===null)return;let n=t.filter(a=>a.Si()<=i),o=t.filter(a=>a.Si()>i);n.sort((a,r)=>r.Si()-a.Si()),n.length&&o.length&&o.push(n[0]),o.sort((a,r)=>a.Si()-r.Si());for(let a of t){let r=Math.floor(a.Bt(e)/2),l=a.Si();l>-r&&l<r&&a.Oi(r),l>this.gv.height-r&&l<this.gv.height+r&&a.Oi(this.gv.height-r)}for(let a=1;a<n.length;a++){let r=n[a],l=n[a-1],c=l.Bt(e,!1),h=r.Si(),d=l.Di();h>d-c&&r.Oi(d-c)}for(let a=1;a<o.length;a++){let r=o[a],l=o[a-1],c=l.Bt(e,!0),h=r.Si(),d=l.Di();h<d+c&&r.Oi(d+c)}}np(t){if(this.gv===null)return;let e=this.Yv(),i=this.$v(),n=this.Pv?"right":"left";e.forEach(o=>{o.Vi()&&o.gt(v(this.zi)).K(t,i,this.xv,n)})}sp(t){if(this.gv===null||this.zi===null)return;let e=this.Qi.Cv().$t(),i=[],n=this.Qi.Zv(),o=e.Wc().Tn(n,this.zi);o.length&&i.push(o);let a=this.$v(),r=this.Pv?"right":"left";i.forEach(l=>{l.forEach(c=>{c.gt(v(this.zi)).K(t,a,this.xv,r)})})}hp(t){this.Av.style.cursor=t===1?"ns-resize":"default"}ao(){let t=this.Uv();this.Sv<t&&this.Qi.Cv().$t().$l(),this.Sv=t}qv(){return ke(this.mo.fontSize,this.mo.fontFamily)}};function Uc(s,t){var e,i;return(i=(e=s.ra)===null||e===void 0?void 0:e.call(s,t))!==null&&i!==void 0?i:[]}function Si(s,t){var e,i;return(i=(e=s.Cn)===null||e===void 0?void 0:e.call(s,t))!==null&&i!==void 0?i:[]}function Gc(s,t){var e,i;return(i=(e=s.Gi)===null||e===void 0?void 0:e.call(s,t))!==null&&i!==void 0?i:[]}function qc(s,t){var e,i;return(i=(e=s.na)===null||e===void 0?void 0:e.call(s,t))!==null&&i!==void 0?i:[]}var Ks=class s{constructor(t,e){this.gv=P({width:0,height:0}),this.ap=null,this.op=null,this._p=null,this.up=!1,this.cp=new H,this.dp=new H,this.fp=0,this.vp=!1,this.pp=null,this.mp=!1,this.bp=null,this.wp=null,this.kv=!1,this.yv=()=>{this.kv||this.gp===null||this.Hi().Nh()},this.Tv=()=>{this.kv||this.gp===null||this.Hi().Nh()},this.Mp=t,this.gp=e,this.gp.I_().l(this.xp.bind(this),this,!0),this.Sp=document.createElement("td"),this.Sp.style.padding="0",this.Sp.style.position="relative";let i=document.createElement("div");i.style.width="100%",i.style.height="100%",i.style.position="relative",i.style.overflow="hidden",this.kp=document.createElement("td"),this.kp.style.padding="0",this.yp=document.createElement("td"),this.yp.style.padding="0",this.Sp.appendChild(i),this.Vv=ne(i,P({width:16,height:16})),this.Vv.subscribeSuggestedBitmapSizeChanged(this.yv);let n=this.Vv.canvasElement;n.style.position="absolute",n.style.zIndex="1",n.style.left="0",n.style.top="0",this.Bv=ne(i,P({width:16,height:16})),this.Bv.subscribeSuggestedBitmapSizeChanged(this.Tv);let o=this.Bv.canvasElement;o.style.position="absolute",o.style.zIndex="2",o.style.left="0",o.style.top="0",this.Cp=document.createElement("tr"),this.Cp.appendChild(this.kp),this.Cp.appendChild(this.Sp),this.Cp.appendChild(this.yp),this.Tp(),this.jv=new Je(this.Bv.canvasElement,this,{Ff:()=>this.pp===null&&!this.Mp.W().handleScroll.vertTouchDrag,Wf:()=>this.pp===null&&!this.Mp.W().handleScroll.horzTouchDrag})}S(){this.ap!==null&&this.ap.S(),this.op!==null&&this.op.S(),this.Bv.unsubscribeSuggestedBitmapSizeChanged(this.Tv),se(this.Bv.canvasElement),this.Bv.dispose(),this.Vv.unsubscribeSuggestedBitmapSizeChanged(this.yv),se(this.Vv.canvasElement),this.Vv.dispose(),this.gp!==null&&this.gp.I_().p(this),this.jv.S()}Zv(){return v(this.gp)}Pp(t){this.gp!==null&&this.gp.I_().p(this),this.gp=t,this.gp!==null&&this.gp.I_().l(s.prototype.xp.bind(this),this,!0),this.Tp()}Cv(){return this.Mp}Hv(){return this.Cp}Tp(){if(this.gp!==null&&(this.Rp(),this.Hi().wt().length!==0)){if(this.ap!==null){let t=this.gp.S_();this.ap.Zi(v(t))}if(this.op!==null){let t=this.gp.k_();this.op.Zi(v(t))}}}Dp(){this.ap!==null&&this.ap.bt(),this.op!==null&&this.op.bt()}v_(){return this.gp!==null?this.gp.v_():0}p_(t){this.gp&&this.gp.p_(t)}If(t){if(!this.gp)return;this.Op();let e=t.localX,i=t.localY;this.Ap(e,i,t)}tv(t){this.Op(),this.Vp(),this.Ap(t.localX,t.localY,t)}zf(t){var e;if(!this.gp)return;this.Op();let i=t.localX,n=t.localY;this.Ap(i,n,t);let o=this.pr(i,n);this.Mp.Bp((e=o?.wv)!==null&&e!==void 0?e:null),this.Hi().Ic(o&&{zc:o.zc,mv:o.mv})}Kf(t){this.gp!==null&&(this.Op(),this.Ip(t))}Pf(t){this.gp!==null&&this.zp(this.dp,t)}kf(t){this.Pf(t)}$f(t){this.Op(),this.Lp(t),this.Ap(t.localX,t.localY,t)}Xf(t){this.gp!==null&&(this.Op(),this.vp=!1,this.Ep(t))}Yf(t){this.gp!==null&&this.Ip(t)}uv(t){if(this.vp=!0,this.pp===null){let e={x:t.localX,y:t.localY};this.Np(e,e,t)}}_v(t){this.gp!==null&&(this.Op(),this.gp.$t().Ic(null),this.Fp())}Wp(){return this.cp}jp(){return this.dp}ev(){this.fp=1,this.Hi().Hn()}rv(t,e){if(!this.Mp.W().handleScale.pinch)return;let i=5*(e-this.fp);this.fp=e,this.Hi().qc(t.nt,i)}Jf(t){this.vp=!1,this.mp=this.pp!==null,this.Vp();let e=this.Hi().Wc();this.pp!==null&&e.yt()&&(this.bp={x:e.Yt(),y:e.Xt()},this.pp={x:t.localX,y:t.localY})}jf(t){if(this.gp===null)return;let e=t.localX,i=t.localY;if(this.pp===null)this.Lp(t);else{this.mp=!1;let n=v(this.bp),o=n.x+(e-this.pp.x),a=n.y+(i-this.pp.y);this.Ap(o,a,t)}}qf(t){this.Cv().W().trackingMode.exitMode===0&&(this.mp=!0),this.Hp(),this.Ep(t)}pr(t,e){let i=this.gp;return i===null?null:(function(n,o,a){let r=n.No(),l=(function(c,h,d){var m,u;let p,f;for(let S of c){let A=(u=(m=S.oa)===null||m===void 0?void 0:m.call(S,h,d))!==null&&u!==void 0?u:[];for(let z of A)w=z.zOrder,(!(x=p?.zOrder)||w==="top"&&x!=="top"||w==="normal"&&x==="bottom")&&(p=z,f=S)}var w,x;return p&&f?{bv:p,zc:f}:null})(r,o,a);if(l?.bv.zOrder==="top")return Ci(l);for(let c of r){if(l&&l.zc===c&&l.bv.zOrder!=="bottom"&&!l.bv.isBackground)return Ci(l);let h=Qc(c.Cn(n),o,a);if(h!==null)return{zc:c,vv:h.vv,mv:h.mv};if(l&&l.zc===c&&l.bv.zOrder!=="bottom"&&l.bv.isBackground)return Ci(l)}return l?.bv?Ci(l):null})(i,t,e)}$p(t,e){v(e==="left"?this.ap:this.op).Xv(P({width:t,height:this.gv.height}))}Up(){return this.gv}Xv(t){Rt(this.gv,t)||(this.gv=t,this.kv=!0,this.Vv.resizeCanvasElement(t),this.Bv.resizeCanvasElement(t),this.kv=!1,this.Sp.style.width=t.width+"px",this.Sp.style.height=t.height+"px")}qp(){let t=v(this.gp);t.x_(t.S_()),t.x_(t.k_());for(let e of t.Ta())if(t.ur(e)){let i=e.Dt();i!==null&&t.x_(i),e.Rn()}}ep(){return this.Vv.bitmapSize}rp(t,e,i){let n=this.ep();n.width>0&&n.height>0&&t.drawImage(this.Vv.canvasElement,e,i)}Gv(t){if(t===0||this.gp===null)return;if(t>1&&this.qp(),this.ap!==null&&this.ap.Gv(t),this.op!==null&&this.op.Gv(t),t!==1){this.Vv.applySuggestedBitmapSize();let i=Bt(this.Vv);i!==null&&(i.useBitmapCoordinateSpace(n=>{this.Qv(n)}),this.gp&&(this.Yp(i,Uc),this.Xp(i),this.Kp(i),this.Yp(i,Si),this.Yp(i,Gc)))}this.Bv.applySuggestedBitmapSize();let e=Bt(this.Bv);e!==null&&(e.useBitmapCoordinateSpace(({context:i,bitmapSize:n})=>{i.clearRect(0,0,n.width,n.height)}),this.Zp(e),this.Yp(e,qc))}Gp(){return this.ap}Jp(){return this.op}tp(t,e){this.Yp(t,e)}xp(){this.gp!==null&&this.gp.I_().p(this),this.gp=null}Ip(t){this.zp(this.cp,t)}zp(t,e){let i=e.localX,n=e.localY;t.M()&&t.m(this.Hi().St().Vu(i),{x:i,y:n},e)}Qv({context:t,bitmapSize:e}){let{width:i,height:n}=e,o=this.Hi(),a=o.q(),r=o._d();a===r?Qi(t,0,0,i,n,r):Ir(t,0,0,i,n,a,r)}Xp(t){let e=v(this.gp).z_().Fh().gt();e!==null&&e.K(t,!1)}Kp(t){let e=this.Hi().Fc();this.Qp(t,Si,Ys,e),this.Qp(t,Si,Di,e)}Zp(t){this.Qp(t,Si,Di,this.Hi().Wc())}Yp(t,e){let i=v(this.gp).No();for(let n of i)this.Qp(t,e,Ys,n);for(let n of i)this.Qp(t,e,Di,n)}Qp(t,e,i,n){let o=v(this.gp),a=o.$t().Bc(),r=a!==null&&a.zc===n,l=a!==null&&r&&a.mv!==void 0?a.mv.br:void 0;Xs(e,c=>i(c,t,r,l),n,o)}Rp(){if(this.gp===null)return;let t=this.Mp,e=this.gp.S_().W().visible,i=this.gp.k_().W().visible;e||this.ap===null||(this.kp.removeChild(this.ap.Hv()),this.ap.S(),this.ap=null),i||this.op===null||(this.yp.removeChild(this.op.Hv()),this.op.S(),this.op=null);let n=t.$t().ed();e&&this.ap===null&&(this.ap=new Hi(this,t.W(),n,"left"),this.kp.appendChild(this.ap.Hv())),i&&this.op===null&&(this.op=new Hi(this,t.W(),n,"right"),this.yp.appendChild(this.op.Hv()))}tm(t){return t.cv&&this.vp||this.pp!==null}im(t){return Math.max(0,Math.min(t,this.gv.width-1))}nm(t){return Math.max(0,Math.min(t,this.gv.height-1))}Ap(t,e,i){this.Hi().Qc(this.im(t),this.nm(e),i,v(this.gp))}Fp(){this.Hi().nd()}Hp(){this.mp&&(this.pp=null,this.Fp())}Np(t,e,i){this.pp=t,this.mp=!1,this.Ap(e.x,e.y,i);let n=this.Hi().Wc();this.bp={x:n.Yt(),y:n.Xt()}}Hi(){return this.Mp.$t()}Ep(t){if(!this.up)return;let e=this.Hi(),i=this.Zv();if(e.D_(i,i.dn()),this._p=null,this.up=!1,e.Zc(),this.wp!==null){let n=performance.now(),o=e.St();this.wp.Pr(o.Lu(),n),this.wp.Yu(n)||e.qn(this.wp)}}Op(){this.pp=null}Vp(){if(this.gp){if(this.Hi().Hn(),document.activeElement!==document.body&&document.activeElement!==document.documentElement)v(document.activeElement).blur();else{let t=document.getSelection();t!==null&&t.removeAllRanges()}!this.gp.dn().Ei()&&this.Hi().St().Ei()}}Lp(t){if(this.gp===null)return;let e=this.Hi(),i=e.St();if(i.Ei())return;let n=this.Mp.W(),o=n.handleScroll,a=n.kineticScroll;if((!o.pressedMouseMove||t.cv)&&(!o.horzTouchDrag&&!o.vertTouchDrag||!t.cv))return;let r=this.gp.dn(),l=performance.now();if(this._p!==null||this.tm(t)||(this._p={x:t.clientX,y:t.clientY,yd:l,sm:t.localX,rm:t.localY}),this._p!==null&&!this.up&&(this._p.x!==t.clientX||this._p.y!==t.clientY)){if(t.cv&&a.touch||!t.cv&&a.mouse){let c=i.ee();this.wp=new Zs(.2/c,7/c,.997,15/c),this.wp.Fd(i.Lu(),this._p.yd)}else this.wp=null;r.Ei()||e.P_(this.gp,r,t.localY),e.Xc(t.localX),this.up=!0}this.up&&(r.Ei()||e.R_(this.gp,r,t.localY),e.Kc(t.localX),this.wp!==null&&this.wp.Fd(i.Lu(),l))}},ji=class{constructor(t,e,i,n,o){this.ft=!0,this.gv=P({width:0,height:0}),this.yv=()=>this.Gv(3),this.Pv=t==="left",this.yc=i.ed,this._n=e,this.hm=n,this.lm=o,this.Av=document.createElement("div"),this.Av.style.width="25px",this.Av.style.height="100%",this.Av.style.overflow="hidden",this.Vv=ne(this.Av,P({width:16,height:16})),this.Vv.subscribeSuggestedBitmapSizeChanged(this.yv)}S(){this.Vv.unsubscribeSuggestedBitmapSizeChanged(this.yv),se(this.Vv.canvasElement),this.Vv.dispose()}Hv(){return this.Av}Up(){return this.gv}Xv(t){Rt(this.gv,t)||(this.gv=t,this.Vv.resizeCanvasElement(t),this.Av.style.width=`${t.width}px`,this.Av.style.height=`${t.height}px`,this.ft=!0)}Gv(t){if(t<3&&!this.ft||this.gv.width===0||this.gv.height===0)return;this.ft=!1,this.Vv.applySuggestedBitmapSize();let e=Bt(this.Vv);e!==null&&e.useBitmapCoordinateSpace(i=>{this.Qv(i),this.Ae(i)})}ep(){return this.Vv.bitmapSize}rp(t,e,i){let n=this.ep();n.width>0&&n.height>0&&t.drawImage(this.Vv.canvasElement,e,i)}Ae({context:t,bitmapSize:e,horizontalPixelRatio:i,verticalPixelRatio:n}){if(!this.hm())return;t.fillStyle=this._n.timeScale.borderColor;let o=Math.floor(this.yc.W().C*i),a=Math.floor(this.yc.W().C*n),r=this.Pv?e.width-o:0;t.fillRect(r,0,o,a)}Qv({context:t,bitmapSize:e}){Qi(t,0,0,e.width,e.height,this.lm())}};function ho(s){return t=>{var e,i;return(i=(e=t.aa)===null||e===void 0?void 0:e.call(t,s))!==null&&i!==void 0?i:[]}}var Zc=ho("normal"),Yc=ho("top"),Xc=ho("bottom"),Js=class{constructor(t,e){this.am=null,this.om=null,this.k=null,this._m=!1,this.gv=P({width:0,height:0}),this.um=new H,this.xv=new ie(5),this.kv=!1,this.yv=()=>{this.kv||this.Mp.$t().Nh()},this.Tv=()=>{this.kv||this.Mp.$t().Nh()},this.Mp=t,this.N_=e,this._n=t.W().layout,this.dm=document.createElement("tr"),this.fm=document.createElement("td"),this.fm.style.padding="0",this.vm=document.createElement("td"),this.vm.style.padding="0",this.Av=document.createElement("td"),this.Av.style.height="25px",this.Av.style.padding="0",this.pm=document.createElement("div"),this.pm.style.width="100%",this.pm.style.height="100%",this.pm.style.position="relative",this.pm.style.overflow="hidden",this.Av.appendChild(this.pm),this.Vv=ne(this.pm,P({width:16,height:16})),this.Vv.subscribeSuggestedBitmapSizeChanged(this.yv);let i=this.Vv.canvasElement;i.style.position="absolute",i.style.zIndex="1",i.style.left="0",i.style.top="0",this.Bv=ne(this.pm,P({width:16,height:16})),this.Bv.subscribeSuggestedBitmapSizeChanged(this.Tv);let n=this.Bv.canvasElement;n.style.position="absolute",n.style.zIndex="2",n.style.left="0",n.style.top="0",this.dm.appendChild(this.fm),this.dm.appendChild(this.Av),this.dm.appendChild(this.vm),this.bm(),this.Mp.$t().f_().l(this.bm.bind(this),this),this.jv=new Je(this.Bv.canvasElement,this,{Ff:()=>!0,Wf:()=>!this.Mp.W().handleScroll.horzTouchDrag})}S(){this.jv.S(),this.am!==null&&this.am.S(),this.om!==null&&this.om.S(),this.Bv.unsubscribeSuggestedBitmapSizeChanged(this.Tv),se(this.Bv.canvasElement),this.Bv.dispose(),this.Vv.unsubscribeSuggestedBitmapSizeChanged(this.yv),se(this.Vv.canvasElement),this.Vv.dispose()}Hv(){return this.dm}wm(){return this.am}gm(){return this.om}tv(t){if(this._m)return;this._m=!0;let e=this.Mp.$t();!e.St().Ei()&&this.Mp.W().handleScale.axisPressedMouseMove.time&&e.Uc(t.localX)}Jf(t){this.tv(t)}iv(){let t=this.Mp.$t();!t.St().Ei()&&this._m&&(this._m=!1,this.Mp.W().handleScale.axisPressedMouseMove.time&&t.Jc())}$f(t){let e=this.Mp.$t();!e.St().Ei()&&this.Mp.W().handleScale.axisPressedMouseMove.time&&e.Gc(t.localX)}jf(t){this.$f(t)}Xf(){this._m=!1;let t=this.Mp.$t();t.St().Ei()&&!this.Mp.W().handleScale.axisPressedMouseMove.time||t.Jc()}qf(){this.Xf()}Pf(){this.Mp.W().handleScale.axisDoubleClickReset.time&&this.Mp.$t().Xn()}kf(){this.Pf()}If(){this.Mp.$t().W().handleScale.axisPressedMouseMove.time&&this.hp(1)}_v(){this.hp(0)}Up(){return this.gv}Mm(){return this.um}xm(t,e,i){Rt(this.gv,t)||(this.gv=t,this.kv=!0,this.Vv.resizeCanvasElement(t),this.Bv.resizeCanvasElement(t),this.kv=!1,this.Av.style.width=`${t.width}px`,this.Av.style.height=`${t.height}px`,this.um.m(t)),this.am!==null&&this.am.Xv(P({width:e,height:t.height})),this.om!==null&&this.om.Xv(P({width:i,height:t.height}))}Sm(){let t=this.km();return Math.ceil(t.C+t.T+t.P+t.L+t.V+t.ym)}bt(){this.Mp.$t().St().La()}ep(){return this.Vv.bitmapSize}rp(t,e,i){let n=this.ep();n.width>0&&n.height>0&&t.drawImage(this.Vv.canvasElement,e,i)}Gv(t){if(t===0)return;if(t!==1){this.Vv.applySuggestedBitmapSize();let i=Bt(this.Vv);i!==null&&(i.useBitmapCoordinateSpace(n=>{this.Qv(n),this.Ae(n),this.Cm(i,Xc)}),this.ip(i),this.Cm(i,Zc)),this.am!==null&&this.am.Gv(t),this.om!==null&&this.om.Gv(t)}this.Bv.applySuggestedBitmapSize();let e=Bt(this.Bv);e!==null&&(e.useBitmapCoordinateSpace(({context:i,bitmapSize:n})=>{i.clearRect(0,0,n.width,n.height)}),this.Tm([...this.Mp.$t().wt(),this.Mp.$t().Wc()],e),this.Cm(e,Yc))}Cm(t,e){let i=this.Mp.$t().wt();for(let n of i)Xs(e,o=>Ys(o,t,!1,void 0),n,void 0);for(let n of i)Xs(e,o=>Di(o,t,!1,void 0),n,void 0)}Qv({context:t,bitmapSize:e}){Qi(t,0,0,e.width,e.height,this.Mp.$t()._d())}Ae({context:t,bitmapSize:e,verticalPixelRatio:i}){if(this.Mp.W().timeScale.borderVisible){t.fillStyle=this.Pm();let n=Math.max(1,Math.floor(this.km().C*i));t.fillRect(0,0,e.width,n)}}ip(t){let e=this.Mp.$t().St(),i=e.La();if(!i||i.length===0)return;let n=this.N_.maxTickMarkWeight(i),o=this.km(),a=e.W();a.borderVisible&&a.ticksVisible&&t.useBitmapCoordinateSpace(({context:r,horizontalPixelRatio:l,verticalPixelRatio:c})=>{r.strokeStyle=this.Pm(),r.fillStyle=this.Pm();let h=Math.max(1,Math.floor(l)),d=Math.floor(.5*l);r.beginPath();let m=Math.round(o.T*c);for(let u=i.length;u--;){let p=Math.round(i[u].coord*l);r.rect(p-d,0,h,m)}r.fill()}),t.useMediaCoordinateSpace(({context:r})=>{let l=o.C+o.T+o.L+o.P/2;r.textAlign="center",r.textBaseline="middle",r.fillStyle=this.$(),r.font=this.qv();for(let c of i)if(c.weight<n){let h=c.needAlignCoordinate?this.Rm(r,c.coord,c.label):c.coord;r.fillText(c.label,h,l)}this.Mp.W().timeScale.allowBoldLabels&&(r.font=this.Dm());for(let c of i)if(c.weight>=n){let h=c.needAlignCoordinate?this.Rm(r,c.coord,c.label):c.coord;r.fillText(c.label,h,l)}})}Rm(t,e,i){let n=this.xv.Mi(t,i),o=n/2,a=Math.floor(e-o)+.5;return a<0?e+=Math.abs(0-a):a+n>this.gv.width&&(e-=Math.abs(this.gv.width-(a+n))),e}Tm(t,e){let i=this.km();for(let n of t)for(let o of n.Ji())o.gt().K(e,i)}Pm(){return this.Mp.W().timeScale.borderColor}$(){return this._n.textColor}j(){return this._n.fontSize}qv(){return ke(this.j(),this._n.fontFamily)}Dm(){return ke(this.j(),this._n.fontFamily,"bold")}km(){this.k===null&&(this.k={C:1,N:NaN,L:NaN,V:NaN,Wi:NaN,T:5,P:NaN,R:"",Fi:new ie,ym:0});let t=this.k,e=this.qv();if(t.R!==e){let i=this.j();t.P=i,t.R=e,t.L=3*i/12,t.V=3*i/12,t.Wi=9*i/12,t.N=0,t.ym=4*i/12,t.Fi.Qe()}return this.k}hp(t){this.Av.style.cursor=t===1?"ew-resize":"default"}bm(){let t=this.Mp.$t(),e=t.W();e.leftPriceScale.visible||this.am===null||(this.fm.removeChild(this.am.Hv()),this.am.S(),this.am=null),e.rightPriceScale.visible||this.om===null||(this.vm.removeChild(this.om.Hv()),this.om.S(),this.om=null);let i={ed:this.Mp.$t().ed()},n=()=>e.leftPriceScale.borderVisible&&t.St().W().borderVisible,o=()=>t._d();e.leftPriceScale.visible&&this.am===null&&(this.am=new ji("left",e,i,n,o),this.fm.appendChild(this.am.Hv())),e.rightPriceScale.visible&&this.om===null&&(this.om=new ji("right",e,i,n,o),this.vm.appendChild(this.om.Hv()))}},Kc=!!De&&!!navigator.userAgentData&&navigator.userAgentData.brands.some(s=>s.brand.includes("Chromium"))&&!!De&&(!((Fn=navigator?.userAgentData)===null||Fn===void 0)&&Fn.platform?navigator.userAgentData.platform==="Windows":navigator.userAgent.toLowerCase().indexOf("win")>=0),Fn,to=class{constructor(t,e,i){var n;this.Om=[],this.Am=0,this.Qa=0,this.e_=0,this.Vm=0,this.Bm=0,this.Im=null,this.zm=!1,this.cp=new H,this.dp=new H,this.xc=new H,this.Lm=null,this.Em=null,this.Nm=t,this._n=e,this.N_=i,this.dm=document.createElement("div"),this.dm.classList.add("tv-lightweight-charts"),this.dm.style.overflow="hidden",this.dm.style.direction="ltr",this.dm.style.width="100%",this.dm.style.height="100%",(n=this.dm).style.userSelect="none",n.style.webkitUserSelect="none",n.style.msUserSelect="none",n.style.MozUserSelect="none",n.style.webkitTapHighlightColor="transparent",this.Fm=document.createElement("table"),this.Fm.setAttribute("cellspacing","0"),this.dm.appendChild(this.Fm),this.Wm=this.jm.bind(this),Vn(this._n)&&this.Hm(!0),this.Hi=new $s(this.kc.bind(this),this._n,i),this.$t().jc().l(this.$m.bind(this),this),this.Um=new Js(this,this.N_),this.Fm.appendChild(this.Um.Hv());let o=e.autoSize&&this.qm(),a=this._n.width,r=this._n.height;if(o||a===0||r===0){let l=t.getBoundingClientRect();a=a||l.width,r=r||l.height}this.Ym(a,r),this.Xm(),t.appendChild(this.dm),this.Km(),this.Hi.St().Gu().l(this.Hi.$l.bind(this.Hi),this),this.Hi.f_().l(this.Hi.$l.bind(this.Hi),this)}$t(){return this.Hi}W(){return this._n}Zm(){return this.Om}Gm(){return this.Um}S(){this.Hm(!1),this.Am!==0&&window.cancelAnimationFrame(this.Am),this.Hi.jc().p(this),this.Hi.St().Gu().p(this),this.Hi.f_().p(this),this.Hi.S();for(let t of this.Om)this.Fm.removeChild(t.Hv()),t.Wp().p(this),t.jp().p(this),t.S();this.Om=[],v(this.Um).S(),this.dm.parentElement!==null&&this.dm.parentElement.removeChild(this.dm),this.xc.S(),this.cp.S(),this.dp.S(),this.Jm()}Ym(t,e,i=!1){if(this.Qa===e&&this.e_===t)return;let n=(function(r){let l=Math.floor(r.width),c=Math.floor(r.height);return P({width:l-l%2,height:c-c%2})})(P({width:t,height:e}));this.Qa=n.height,this.e_=n.width;let o=this.Qa+"px",a=this.e_+"px";v(this.dm).style.height=o,v(this.dm).style.width=a,this.Fm.style.height=o,this.Fm.style.width=a,i?this.Qm(it.ns(),performance.now()):this.Hi.$l()}Gv(t){t===void 0&&(t=it.ns());for(let e=0;e<this.Om.length;e++)this.Om[e].Gv(t.Wn(e).En);this._n.timeScale.visible&&this.Um.Gv(t.Fn())}Eh(t){let e=Vn(this._n);this.Hi.Eh(t);let i=Vn(this._n);i!==e&&this.Hm(i),this.Km(),this.tb(t)}Wp(){return this.cp}jp(){return this.dp}jc(){return this.xc}ib(){this.Im!==null&&(this.Qm(this.Im,performance.now()),this.Im=null);let t=this.nb(null),e=document.createElement("canvas");e.width=t.width,e.height=t.height;let i=v(e.getContext("2d"));return this.nb(i),e}sb(t){return t==="left"&&!this.eb()||t==="right"&&!this.rb()||this.Om.length===0?0:v(t==="left"?this.Om[0].Gp():this.Om[0].Jp()).Kv()}hb(){return this._n.autoSize&&this.Lm!==null}lb(){return this.dm}Bp(t){this.Em=t,this.Em?this.lb().style.setProperty("cursor",t):this.lb().style.removeProperty("cursor")}ab(){return this.Em}ob(){return ot(this.Om[0]).Up()}tb(t){(t.autoSize!==void 0||!this.Lm||t.width===void 0&&t.height===void 0)&&(t.autoSize&&!this.Lm&&this.qm(),t.autoSize===!1&&this.Lm!==null&&this.Jm(),t.autoSize||t.width===void 0&&t.height===void 0||this.Ym(t.width||this.e_,t.height||this.Qa))}nb(t){let e=0,i=0,n=this.Om[0],o=(r,l)=>{let c=0;for(let h=0;h<this.Om.length;h++){let d=this.Om[h],m=v(r==="left"?d.Gp():d.Jp()),u=m.ep();t!==null&&m.rp(t,l,c),c+=u.height}};this.eb()&&(o("left",0),e+=v(n.Gp()).ep().width);for(let r=0;r<this.Om.length;r++){let l=this.Om[r],c=l.ep();t!==null&&l.rp(t,e,i),i+=c.height}e+=n.ep().width,this.rb()&&(o("right",e),e+=v(n.Jp()).ep().width);let a=(r,l,c)=>{v(r==="left"?this.Um.wm():this.Um.gm()).rp(v(t),l,c)};if(this._n.timeScale.visible){let r=this.Um.ep();if(t!==null){let l=0;this.eb()&&(a("left",l,i),l=v(n.Gp()).ep().width),this.Um.rp(t,l,i),l+=r.width,this.rb()&&a("right",l,i)}i+=r.height}return P({width:e,height:i})}_b(){let t=0,e=0,i=0;for(let p of this.Om)this.eb()&&(e=Math.max(e,v(p.Gp()).Uv(),this._n.leftPriceScale.minimumWidth)),this.rb()&&(i=Math.max(i,v(p.Jp()).Uv(),this._n.rightPriceScale.minimumWidth)),t+=p.v_();e=qs(e),i=qs(i);let n=this.e_,o=this.Qa,a=Math.max(n-e-i,0),r=this._n.timeScale.visible,l=r?Math.max(this.Um.Sm(),this._n.timeScale.minimumHeight):0;var c;l=(c=l)+c%2;let h=0+l,d=o<h?0:o-h,m=d/t,u=0;for(let p=0;p<this.Om.length;++p){let f=this.Om[p];f.Pp(this.Hi.Nc()[p]);let w=0,x=0;x=p===this.Om.length-1?d-u:Math.round(f.v_()*m),w=Math.max(x,2),u+=w,f.Xv(P({width:a,height:w})),this.eb()&&f.$p(e,"left"),this.rb()&&f.$p(i,"right"),f.Zv()&&this.Hi.Hc(f.Zv(),w)}this.Um.xm(P({width:r?a:0,height:l}),r?e:0,r?i:0),this.Hi.m_(a),this.Vm!==e&&(this.Vm=e),this.Bm!==i&&(this.Bm=i)}Hm(t){t?this.dm.addEventListener("wheel",this.Wm,{passive:!1}):this.dm.removeEventListener("wheel",this.Wm)}ub(t){switch(t.deltaMode){case t.DOM_DELTA_PAGE:return 120;case t.DOM_DELTA_LINE:return 32}return Kc?1/window.devicePixelRatio:1}jm(t){if(!(t.deltaX!==0&&this._n.handleScroll.mouseWheel||t.deltaY!==0&&this._n.handleScale.mouseWheel))return;let e=this.ub(t),i=e*t.deltaX/100,n=-e*t.deltaY/100;if(t.cancelable&&t.preventDefault(),n!==0&&this._n.handleScale.mouseWheel){let o=Math.sign(n)*Math.min(1,Math.abs(n)),a=t.clientX-this.dm.getBoundingClientRect().left;this.$t().qc(a,o)}i!==0&&this._n.handleScroll.mouseWheel&&this.$t().Yc(-80*i)}Qm(t,e){var i;let n=t.Fn();n===3&&this.cb(),n!==3&&n!==2||(this.fb(t),this.vb(t,e),this.Um.bt(),this.Om.forEach(o=>{o.Dp()}),((i=this.Im)===null||i===void 0?void 0:i.Fn())===3&&(this.Im.Jn(t),this.cb(),this.fb(this.Im),this.vb(this.Im,e),t=this.Im,this.Im=null)),this.Gv(t)}vb(t,e){for(let i of t.Gn())this.Qn(i,e)}fb(t){let e=this.Hi.Nc();for(let i=0;i<e.length;i++)t.Wn(i).Nn&&e[i].V_()}Qn(t,e){let i=this.Hi.St();switch(t.$n){case 0:i.Qu();break;case 1:i.tc(t.Ot);break;case 2:i.Kn(t.Ot);break;case 3:i.Zn(t.Ot);break;case 4:i.Fu();break;case 5:t.Ot.Yu(e)||i.Zn(t.Ot.Xu(e))}}kc(t){this.Im!==null?this.Im.Jn(t):this.Im=t,this.zm||(this.zm=!0,this.Am=window.requestAnimationFrame(e=>{if(this.zm=!1,this.Am=0,this.Im!==null){let i=this.Im;this.Im=null,this.Qm(i,e);for(let n of i.Gn())if(n.$n===5&&!n.Ot.Yu(e)){this.$t().qn(n.Ot);break}}}))}cb(){this.Xm()}Xm(){let t=this.Hi.Nc(),e=t.length,i=this.Om.length;for(let n=e;n<i;n++){let o=ot(this.Om.pop());this.Fm.removeChild(o.Hv()),o.Wp().p(this),o.jp().p(this),o.S()}for(let n=i;n<e;n++){let o=new Ks(this,t[n]);o.Wp().l(this.pb.bind(this),this),o.jp().l(this.mb.bind(this),this),this.Om.push(o),this.Fm.insertBefore(o.Hv(),this.Um.Hv())}for(let n=0;n<e;n++){let o=t[n],a=this.Om[n];a.Zv()!==o?a.Pp(o):a.Tp()}this.Km(),this._b()}bb(t,e,i){var n;let o=new Map;t!==null&&this.Hi.wt().forEach(h=>{let d=h.Vn().il(t);d!==null&&o.set(h,d)});let a;if(t!==null){let h=(n=this.Hi.St().$i(t))===null||n===void 0?void 0:n.originalTime;h!==void 0&&(a=h)}let r=this.$t().Bc(),l=r!==null&&r.zc instanceof Xe?r.zc:void 0,c=r!==null&&r.mv!==void 0?r.mv.mr:void 0;return{wb:a,ie:t??void 0,gb:e??void 0,Mb:l,xb:o,Sb:c,kb:i??void 0}}pb(t,e,i){this.cp.m(()=>this.bb(t,e,i))}mb(t,e,i){this.dp.m(()=>this.bb(t,e,i))}$m(t,e,i){this.xc.m(()=>this.bb(t,e,i))}Km(){let t=this._n.timeScale.visible?"":"none";this.Um.Hv().style.display=t}eb(){return this.Om[0].Zv().S_().W().visible}rb(){return this.Om[0].Zv().k_().W().visible}qm(){return"ResizeObserver"in window&&(this.Lm=new ResizeObserver(t=>{let e=t.find(i=>i.target===this.Nm);e&&this.Ym(e.contentRect.width,e.contentRect.height)}),this.Lm.observe(this.Nm,{box:"border-box"}),!0)}Jm(){this.Lm!==null&&this.Lm.disconnect(),this.Lm=null}};function Vn(s){return!!(s.handleScroll.mouseWheel||s.handleScale.mouseWheel)}function Hr(s,t){var e={};for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&t.indexOf(i)<0&&(e[i]=s[i]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function"){var n=0;for(i=Object.getOwnPropertySymbols(s);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(s,i[n])&&(e[i[n]]=s[i[n]])}return e}function gr(s,t,e,i){let n=e.value,o={ie:t,ot:s,Ot:[n,n,n,n],wb:i};return e.color!==void 0&&(o.O=e.color),o}function Jc(s,t,e,i){let n=e.value,o={ie:t,ot:s,Ot:[n,n,n,n],wb:i};return e.lineColor!==void 0&&(o.lt=e.lineColor),e.topColor!==void 0&&(o.ys=e.topColor),e.bottomColor!==void 0&&(o.Cs=e.bottomColor),o}function th(s,t,e,i){let n=e.value,o={ie:t,ot:s,Ot:[n,n,n,n],wb:i};return e.topLineColor!==void 0&&(o.Ce=e.topLineColor),e.bottomLineColor!==void 0&&(o.Te=e.bottomLineColor),e.topFillColor1!==void 0&&(o.Me=e.topFillColor1),e.topFillColor2!==void 0&&(o.xe=e.topFillColor2),e.bottomFillColor1!==void 0&&(o.Se=e.bottomFillColor1),e.bottomFillColor2!==void 0&&(o.ke=e.bottomFillColor2),o}function eh(s,t,e,i){let n={ie:t,ot:s,Ot:[e.open,e.high,e.low,e.close],wb:i};return e.color!==void 0&&(n.O=e.color),n}function ih(s,t,e,i){let n={ie:t,ot:s,Ot:[e.open,e.high,e.low,e.close],wb:i};return e.color!==void 0&&(n.O=e.color),e.borderColor!==void 0&&(n.At=e.borderColor),e.wickColor!==void 0&&(n.Hh=e.wickColor),n}function nh(s,t,e,i,n){let o=ot(n)(e),a=Math.max(...o),r=Math.min(...o),l=o[o.length-1],c=[l,a,r,l],h=e,{time:d,color:m}=h;return{ie:t,ot:s,Ot:c,wb:i,We:Hr(h,["time","color"]),O:m}}function Mi(s){return s.Ot!==void 0}function _r(s,t){return t.customValues!==void 0&&(s.yb=t.customValues),s}function Jt(s){return(t,e,i,n,o,a)=>(function(r,l){return l?l(r):(c=r).open===void 0&&c.value===void 0;var c})(i,a)?_r({ot:t,ie:e,wb:n},i):_r(s(t,e,i,n,o),i)}function vr(s){return{Candlestick:Jt(ih),Bar:Jt(eh),Area:Jt(Jc),Baseline:Jt(th),Histogram:Jt(gr),Line:Jt(gr),Custom:Jt(nh)}[s]}function yr(s){return{ie:0,Cb:new Map,ia:s}}function wr(s,t){if(s!==void 0&&s.length!==0)return{Tb:t.key(s[0].ot),Pb:t.key(s[s.length-1].ot)}}function xr(s){let t;return s.forEach(e=>{t===void 0&&(t=e.wb)}),ot(t)}var eo=class{constructor(t){this.Rb=new Map,this.Db=new Map,this.Ob=new Map,this.Ab=[],this.N_=t}S(){this.Rb.clear(),this.Db.clear(),this.Ob.clear(),this.Ab=[]}Vb(t,e){let i=this.Rb.size!==0,n=!1,o=this.Db.get(t);if(o!==void 0)if(this.Db.size===1)i=!1,n=!0,this.Rb.clear();else for(let l of this.Ab)l.pointData.Cb.delete(t)&&(n=!0);let a=[];if(e.length!==0){let l=e.map(u=>u.time),c=this.N_.createConverterToInternalObj(e),h=vr(t.Yh()),d=t.ga(),m=t.Ma();a=e.map((u,p)=>{let f=c(u.time),w=this.N_.key(f),x=this.Rb.get(w);x===void 0&&(x=yr(f),this.Rb.set(w,x),n=!0);let S=h(f,x.ie,u,l[p],d,m);return x.Cb.set(t,S),S})}i&&this.Bb(),this.Ib(t,a);let r=-1;if(n){let l=[];this.Rb.forEach(c=>{l.push({timeWeight:0,time:c.ia,pointData:c,originalTime:xr(c.Cb)})}),l.sort((c,h)=>this.N_.key(c.time)-this.N_.key(h.time)),r=this.zb(l)}return this.Lb(t,r,(function(l,c,h){let d=wr(l,h),m=wr(c,h);if(d!==void 0&&m!==void 0)return{Xl:d.Pb>=m.Pb&&d.Tb>=m.Tb}})(this.Db.get(t),o,this.N_))}ld(t){return this.Vb(t,[])}Eb(t,e){let i=e;(function(f){f.wb===void 0&&(f.wb=f.time)})(i),this.N_.preprocessData(e);let n=this.N_.createConverterToInternalObj([e])(e.time),o=this.Ob.get(t);if(o!==void 0&&this.N_.key(n)<this.N_.key(o))throw new Error(`Cannot update oldest data, last time=${o}, new time=${n}`);let a=this.Rb.get(this.N_.key(n)),r=a===void 0;a===void 0&&(a=yr(n),this.Rb.set(this.N_.key(n),a));let l=vr(t.Yh()),c=t.ga(),h=t.Ma(),d=l(n,a.ie,e,i.wb,c,h);a.Cb.set(t,d),this.Nb(t,d);let m={Xl:Mi(d)};if(!r)return this.Lb(t,-1,m);let u={timeWeight:0,time:a.ia,pointData:a,originalTime:xr(a.Cb)},p=ei(this.Ab,this.N_.key(u.time),(f,w)=>this.N_.key(f.time)<w);this.Ab.splice(p,0,u);for(let f=p;f<this.Ab.length;++f)Wn(this.Ab[f].pointData,f);return this.N_.fillWeightsForPoints(this.Ab,p),this.Lb(t,p,m)}Nb(t,e){let i=this.Db.get(t);i===void 0&&(i=[],this.Db.set(t,i));let n=i.length!==0?i[i.length-1]:null;n===null||this.N_.key(e.ot)>this.N_.key(n.ot)?Mi(e)&&i.push(e):Mi(e)?i[i.length-1]=e:i.splice(-1,1),this.Ob.set(t,e.ot)}Ib(t,e){e.length!==0?(this.Db.set(t,e.filter(Mi)),this.Ob.set(t,e[e.length-1].ot)):(this.Db.delete(t),this.Ob.delete(t))}Bb(){for(let t of this.Ab)t.pointData.Cb.size===0&&this.Rb.delete(this.N_.key(t.time))}zb(t){let e=-1;for(let i=0;i<this.Ab.length&&i<t.length;++i){let n=this.Ab[i],o=t[i];if(this.N_.key(n.time)!==this.N_.key(o.time)){e=i;break}o.timeWeight=n.timeWeight,Wn(o.pointData,i)}if(e===-1&&this.Ab.length!==t.length&&(e=Math.min(this.Ab.length,t.length)),e===-1)return-1;for(let i=e;i<t.length;++i)Wn(t[i].pointData,i);return this.N_.fillWeightsForPoints(t,e),this.Ab=t,e}Fb(){if(this.Db.size===0)return null;let t=0;return this.Db.forEach(e=>{e.length!==0&&(t=Math.max(t,e[e.length-1].ie))}),t}Lb(t,e,i){let n={Wb:new Map,St:{Au:this.Fb()}};if(e!==-1)this.Db.forEach((o,a)=>{n.Wb.set(a,{We:o,jb:a===t?i:void 0})}),this.Db.has(t)||n.Wb.set(t,{We:[],jb:i}),n.St.Hb=this.Ab,n.St.$b=e;else{let o=this.Db.get(t);n.Wb.set(t,{We:o||[],jb:i})}return n}};function Wn(s,t){s.ie=t,s.Cb.forEach(e=>{e.ie=t})}function mo(s){let t={value:s.Ot[3],time:s.wb};return s.yb!==void 0&&(t.customValues=s.yb),t}function kr(s){let t=mo(s);return s.O!==void 0&&(t.color=s.O),t}function sh(s){let t=mo(s);return s.lt!==void 0&&(t.lineColor=s.lt),s.ys!==void 0&&(t.topColor=s.ys),s.Cs!==void 0&&(t.bottomColor=s.Cs),t}function oh(s){let t=mo(s);return s.Ce!==void 0&&(t.topLineColor=s.Ce),s.Te!==void 0&&(t.bottomLineColor=s.Te),s.Me!==void 0&&(t.topFillColor1=s.Me),s.xe!==void 0&&(t.topFillColor2=s.xe),s.Se!==void 0&&(t.bottomFillColor1=s.Se),s.ke!==void 0&&(t.bottomFillColor2=s.ke),t}function jr(s){let t={open:s.Ot[0],high:s.Ot[1],low:s.Ot[2],close:s.Ot[3],time:s.wb};return s.yb!==void 0&&(t.customValues=s.yb),t}function ah(s){let t=jr(s);return s.O!==void 0&&(t.color=s.O),t}function rh(s){let t=jr(s),{O:e,At:i,Hh:n}=s;return e!==void 0&&(t.color=e),i!==void 0&&(t.borderColor=i),n!==void 0&&(t.wickColor=n),t}function io(s){return{Area:sh,Line:kr,Baseline:oh,Histogram:kr,Bar:ah,Candlestick:rh,Custom:lh}[s]}function lh(s){let t=s.wb;return Object.assign(Object.assign({},s.We),{time:t})}var ch={vertLine:{color:"#9598A1",width:1,style:3,visible:!0,labelVisible:!0,labelBackgroundColor:"#131722"},horzLine:{color:"#9598A1",width:1,style:3,visible:!0,labelVisible:!0,labelBackgroundColor:"#131722"},mode:1},hh={vertLines:{color:"#D6DCDE",style:0,visible:!0},horzLines:{color:"#D6DCDE",style:0,visible:!0}},dh={background:{type:"solid",color:"#FFFFFF"},textColor:"#191919",fontSize:12,fontFamily:lo},Hn={autoScale:!0,mode:0,invertScale:!1,alignLabels:!0,borderVisible:!0,borderColor:"#2B2B43",entireTextOnly:!1,visible:!1,ticksVisible:!1,scaleMargins:{bottom:.1,top:.2},minimumWidth:0},mh={rightOffset:0,barSpacing:6,minBarSpacing:.5,fixLeftEdge:!1,fixRightEdge:!1,lockVisibleTimeRangeOnResize:!1,rightBarStaysOnScroll:!1,borderVisible:!0,borderColor:"#2B2B43",visible:!0,timeVisible:!1,secondsVisible:!0,shiftVisibleRangeOnNewBar:!0,allowShiftVisibleRangeOnWhitespaceReplacement:!1,ticksVisible:!1,uniformDistribution:!1,minimumHeight:0,allowBoldLabels:!0},uh={color:"rgba(0, 0, 0, 0)",visible:!1,fontSize:48,fontFamily:lo,fontStyle:"",text:"",horzAlign:"center",vertAlign:"center"};function Cr(){return{width:0,height:0,autoSize:!1,layout:dh,crosshair:ch,grid:hh,overlayPriceScales:Object.assign({},Hn),leftPriceScale:Object.assign(Object.assign({},Hn),{visible:!1}),rightPriceScale:Object.assign(Object.assign({},Hn),{visible:!0}),timeScale:mh,watermark:uh,localization:{locale:De?navigator.language:"",dateFormat:"dd MMM 'yy"},handleScroll:{mouseWheel:!0,pressedMouseMove:!0,horzTouchDrag:!0,vertTouchDrag:!0},handleScale:{axisPressedMouseMove:{time:!0,price:!0},axisDoubleClickReset:{time:!0,price:!0},mouseWheel:!0,pinch:!0},kineticScroll:{mouse:!1,touch:!0},trackingMode:{exitMode:1}}}var no=class{constructor(t,e){this.Ub=t,this.qb=e}applyOptions(t){this.Ub.$t().Lc(this.qb,t)}options(){return this.zi().W()}width(){return Ui(this.qb)?this.Ub.sb(this.qb):0}zi(){return v(this.Ub.$t().Ec(this.qb)).Dt}};function Sr(s,t,e){let i=Hr(s,["time","originalTime"]),n=Object.assign({time:t},i);return e!==void 0&&(n.originalTime=e),n}var ph={color:"#FF0000",price:0,lineStyle:2,lineWidth:1,lineVisible:!0,axisLabelVisible:!0,title:"",axisLabelColor:"",axisLabelTextColor:""},so=class{constructor(t){this.Vh=t}applyOptions(t){this.Vh.Eh(t)}options(){return this.Vh.W()}Yb(){return this.Vh}},oo=class{constructor(t,e,i,n,o){this.Xb=new H,this.Is=t,this.Kb=e,this.Zb=i,this.N_=o,this.Gb=n}S(){this.Xb.S()}priceFormatter(){return this.Is.ca()}priceToCoordinate(t){let e=this.Is.Ct();return e===null?null:this.Is.Dt().Rt(t,e.Ot)}coordinateToPrice(t){let e=this.Is.Ct();return e===null?null:this.Is.Dt().fn(t,e.Ot)}barsInLogicalRange(t){if(t===null)return null;let e=new xe(new te(t.from,t.to)).iu(),i=this.Is.Vn();if(i.Ei())return null;let n=i.il(e.Rs(),1),o=i.il(e.ui(),-1),a=v(i.Jh()),r=v(i.An());if(n!==null&&o!==null&&n.ie>o.ie)return{barsBefore:t.from-a,barsAfter:r-t.to};let l={barsBefore:n===null||n.ie===a?t.from-a:n.ie-a,barsAfter:o===null||o.ie===r?r-t.to:r-o.ie};return n!==null&&o!==null&&(l.from=n.wb,l.to=o.wb),l}setData(t){this.N_,this.Is.Yh(),this.Kb.Jb(this.Is,t),this.Qb("full")}update(t){this.Is.Yh(),this.Kb.tw(this.Is,t),this.Qb("update")}dataByIndex(t,e){let i=this.Is.Vn().il(t,e);return i===null?null:io(this.seriesType())(i)}data(){let t=io(this.seriesType());return this.Is.Vn().Qs().map(e=>t(e))}subscribeDataChanged(t){this.Xb.l(t)}unsubscribeDataChanged(t){this.Xb.v(t)}setMarkers(t){this.N_;let e=t.map(i=>Sr(i,this.N_.convertHorzItemToInternal(i.time),i.time));this.Is.Zl(e)}markers(){return this.Is.Gl().map(t=>Sr(t,t.originalTime,void 0))}applyOptions(t){this.Is.Eh(t)}options(){return At(this.Is.W())}priceScale(){return this.Zb.priceScale(this.Is.Dt().xa())}createPriceLine(t){let e=St(At(ph),t),i=this.Is.Jl(e);return new so(i)}removePriceLine(t){this.Is.Ql(t.Yb())}seriesType(){return this.Is.Yh()}attachPrimitive(t){this.Is.ba(t),t.attached&&t.attached({chart:this.Gb,series:this,requestUpdate:()=>this.Is.$t().$l()})}detachPrimitive(t){this.Is.wa(t),t.detached&&t.detached()}Qb(t){this.Xb.M()&&this.Xb.m(t)}},ao=class{constructor(t,e,i){this.iw=new H,this.uu=new H,this.um=new H,this.Hi=t,this.wl=t.St(),this.Um=e,this.wl.Ku().l(this.nw.bind(this)),this.wl.Zu().l(this.sw.bind(this)),this.Um.Mm().l(this.ew.bind(this)),this.N_=i}S(){this.wl.Ku().p(this),this.wl.Zu().p(this),this.Um.Mm().p(this),this.iw.S(),this.uu.S(),this.um.S()}scrollPosition(){return this.wl.Lu()}scrollToPosition(t,e){e?this.wl.qu(t,1e3):this.Hi.Zn(t)}scrollToRealTime(){this.wl.Uu()}getVisibleRange(){let t=this.wl.yu();return t===null?null:{from:t.from.originalTime,to:t.to.originalTime}}setVisibleRange(t){let e={from:this.N_.convertHorzItemToInternal(t.from),to:this.N_.convertHorzItemToInternal(t.to)},i=this.wl.Ru(e);this.Hi.ad(i)}getVisibleLogicalRange(){let t=this.wl.ku();return t===null?null:{from:t.Rs(),to:t.ui()}}setVisibleLogicalRange(t){Gt(t.from<=t.to,"The from index cannot be after the to index."),this.Hi.ad(t)}resetTimeScale(){this.Hi.Xn()}fitContent(){this.Hi.Qu()}logicalToCoordinate(t){let e=this.Hi.St();return e.Ei()?null:e.It(t)}coordinateToLogical(t){return this.wl.Ei()?null:this.wl.Vu(t)}timeToCoordinate(t){let e=this.N_.convertHorzItemToInternal(t),i=this.wl.ya(e,!1);return i===null?null:this.wl.It(i)}coordinateToTime(t){let e=this.Hi.St(),i=e.Vu(t),n=e.$i(i);return n===null?null:n.originalTime}width(){return this.Um.Up().width}height(){return this.Um.Up().height}subscribeVisibleTimeRangeChange(t){this.iw.l(t)}unsubscribeVisibleTimeRangeChange(t){this.iw.v(t)}subscribeVisibleLogicalRangeChange(t){this.uu.l(t)}unsubscribeVisibleLogicalRangeChange(t){this.uu.v(t)}subscribeSizeChange(t){this.um.l(t)}unsubscribeSizeChange(t){this.um.v(t)}applyOptions(t){this.wl.Eh(t)}options(){return Object.assign(Object.assign({},At(this.wl.W())),{barSpacing:this.wl.ee()})}nw(){this.iw.M()&&this.iw.m(this.getVisibleRange())}sw(){this.uu.M()&&this.uu.m(this.getVisibleLogicalRange())}ew(t){this.um.m(t.width,t.height)}};function fh(s){if(s===void 0||s.type==="custom")return;let t=s;t.minMove!==void 0&&t.precision===void 0&&(t.precision=(function(e){if(e>=1)return 0;let i=0;for(;i<8;i++){let n=Math.round(e);if(Math.abs(n-e)<1e-8)return i;e*=10}return i})(t.minMove))}function Mr(s){return(function(t){if(gi(t.handleScale)){let i=t.handleScale;t.handleScale={axisDoubleClickReset:{time:i,price:i},axisPressedMouseMove:{time:i,price:i},mouseWheel:i,pinch:i}}else if(t.handleScale!==void 0){let{axisPressedMouseMove:i,axisDoubleClickReset:n}=t.handleScale;gi(i)&&(t.handleScale.axisPressedMouseMove={time:i,price:i}),gi(n)&&(t.handleScale.axisDoubleClickReset={time:n,price:n})}let e=t.handleScroll;gi(e)&&(t.handleScroll={horzTouchDrag:e,vertTouchDrag:e,mouseWheel:e,pressedMouseMove:e})})(s),s}var ro=class{constructor(t,e,i){this.rw=new Map,this.hw=new Map,this.lw=new H,this.aw=new H,this.ow=new H,this._w=new eo(e);let n=i===void 0?At(Cr()):St(At(Cr()),Mr(i));this.N_=e,this.Ub=new to(t,n,e),this.Ub.Wp().l(a=>{this.lw.M()&&this.lw.m(this.uw(a()))},this),this.Ub.jp().l(a=>{this.aw.M()&&this.aw.m(this.uw(a()))},this),this.Ub.jc().l(a=>{this.ow.M()&&this.ow.m(this.uw(a()))},this);let o=this.Ub.$t();this.cw=new ao(o,this.Ub.Gm(),this.N_)}remove(){this.Ub.Wp().p(this),this.Ub.jp().p(this),this.Ub.jc().p(this),this.cw.S(),this.Ub.S(),this.rw.clear(),this.hw.clear(),this.lw.S(),this.aw.S(),this.ow.S(),this._w.S()}resize(t,e,i){this.autoSizeActive()||this.Ub.Ym(t,e,i)}addCustomSeries(t,e){let i=ye(t),n=Object.assign(Object.assign({},Dr),i.defaultOptions());return this.dw("Custom",n,e,i)}addAreaSeries(t){return this.dw("Area",mc,t)}addBaselineSeries(t){return this.dw("Baseline",uc,t)}addBarSeries(t){return this.dw("Bar",hc,t)}addCandlestickSeries(t={}){return(function(e){e.borderColor!==void 0&&(e.borderUpColor=e.borderColor,e.borderDownColor=e.borderColor),e.wickColor!==void 0&&(e.wickUpColor=e.wickColor,e.wickDownColor=e.wickColor)})(t),this.dw("Candlestick",cc,t)}addHistogramSeries(t){return this.dw("Histogram",pc,t)}addLineSeries(t){return this.dw("Line",dc,t)}removeSeries(t){let e=ot(this.rw.get(t)),i=this._w.ld(e);this.Ub.$t().ld(e),this.fw(i),this.rw.delete(t),this.hw.delete(e)}Jb(t,e){this.fw(this._w.Vb(t,e))}tw(t,e){this.fw(this._w.Eb(t,e))}subscribeClick(t){this.lw.l(t)}unsubscribeClick(t){this.lw.v(t)}subscribeCrosshairMove(t){this.ow.l(t)}unsubscribeCrosshairMove(t){this.ow.v(t)}subscribeDblClick(t){this.aw.l(t)}unsubscribeDblClick(t){this.aw.v(t)}priceScale(t){return new no(this.Ub,t)}timeScale(){return this.cw}applyOptions(t){this.Ub.Eh(Mr(t))}options(){return this.Ub.W()}takeScreenshot(){return this.Ub.ib()}autoSizeActive(){return this.Ub.hb()}chartElement(){return this.Ub.lb()}paneSize(){let t=this.Ub.ob();return{height:t.height,width:t.width}}setCrosshairPosition(t,e,i){let n=this.rw.get(i);if(n===void 0)return;let o=this.Ub.$t()._r(n);o!==null&&this.Ub.$t().td(t,e,o)}clearCrosshairPosition(){this.Ub.$t().nd(!0)}dw(t,e,i={},n){fh(i.priceFormat);let o=St(At(Tr),At(e),i),a=this.Ub.$t().rd(t,o,n),r=new oo(a,this,this,this,this.N_);return this.rw.set(r,a),this.hw.set(a,r),r}fw(t){let e=this.Ub.$t();e.sd(t.St.Au,t.St.Hb,t.St.$b),t.Wb.forEach((i,n)=>n.J(i.We,i.jb)),e.Iu()}pw(t){return ot(this.hw.get(t))}uw(t){let e=new Map;t.xb.forEach((n,o)=>{let a=o.Yh(),r=io(a)(n);if(a!=="Custom")Gt((function(l){return l.open!==void 0||l.value!==void 0})(r));else{let l=o.Ma();Gt(!l||l(r)===!1)}e.set(this.pw(o),r)});let i=t.Mb===void 0?void 0:this.pw(t.Mb);return{time:t.wb,logical:t.ie,point:t.gb,hoveredSeries:i,hoveredObjectId:t.Sb,seriesData:e,sourceEvent:t.kb}}};function bh(s,t,e){let i;if(ti(s)){let o=document.getElementById(s);Gt(o!==null,`Cannot find element in DOM with id=${s}`),i=o}else i=s;let n=new ro(i,t,e);return t.setOptions(n.options()),n}function $r(s,t){return bh(s,new Wi,Wi.Pd(t))}var Em=Object.assign(Object.assign({},Tr),Dr);var ii=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new rt;constructor(t=!1,e,i=!0,n){this._multiple=t,this._emitChanges=i,this.compareWith=n,e&&e.length&&(t?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...t){this._verifyValueAssignment(t),t.forEach(i=>this._markSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...t){this._verifyValueAssignment(t),t.forEach(i=>this._unmarkSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...t){this._verifyValueAssignment(t);let e=this.selected,i=new Set(t.map(o=>this._getConcreteValue(o)));t.forEach(o=>this._markSelected(o)),e.filter(o=>!i.has(this._getConcreteValue(o,i))).forEach(o=>this._unmarkSelected(o));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}toggle(t){return this.isSelected(t)?this.deselect(t):this.select(t)}clear(t=!0){this._unmarkAll();let e=this._hasQueuedChanges();return t&&this._emitChangeEvent(),e}isSelected(t){return this._selection.has(this._getConcreteValue(t))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(t){this._multiple&&this.selected&&this._selected.sort(t)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(t){t=this._getConcreteValue(t),this.isSelected(t)||(this._multiple||this._unmarkAll(),this.isSelected(t)||this._selection.add(t),this._emitChanges&&this._selectedToEmit.push(t))}_unmarkSelected(t){t=this._getConcreteValue(t),this.isSelected(t)&&(this._selection.delete(t),this._emitChanges&&this._deselectedToEmit.push(t))}_unmarkAll(){this.isEmpty()||this._selection.forEach(t=>this._unmarkSelected(t))}_verifyValueAssignment(t){t.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(t,e){if(this.compareWith){e=e??this._selection;for(let i of e)if(this.compareWith(t,i))return i;return t}else return t}};var Gi=class{applyChanges(t,e,i,n,o){t.forEachOperation((a,r,l)=>{let c,h;if(a.previousIndex==null){let d=i(a,r,l);c=e.createEmbeddedView(d.templateRef,d.context,d.index),h=be.INSERTED}else l==null?(e.remove(r),h=be.REMOVED):(c=e.get(r),e.move(c,l),h=be.MOVED);o&&o({context:c?.context,operation:h,record:a})})}detach(){}};var Qr=(()=>{class s{_animationsDisabled=Tt();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||s)};static \u0275cmp=T({type:s,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,n){i&2&&O("mat-pseudo-checkbox-indeterminate",n.state==="indeterminate")("mat-pseudo-checkbox-checked",n.state==="checked")("mat-pseudo-checkbox-disabled",n.disabled)("mat-pseudo-checkbox-minimal",n.appearance==="minimal")("mat-pseudo-checkbox-full",n.appearance==="full")("_mat-animation-noopable",n._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,n){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return s})();var wh=["button"],xh=["*"];function kh(s,t){if(s&1&&(g(0,"div",2),L(1,"mat-pseudo-checkbox",6),_()),s&2){let e=E();y(),R("disabled",e.disabled)}}var Ur=new X("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),Gr=new X("MatButtonToggleGroup"),Ch={provide:da,useExisting:ln(()=>uo),multi:!0},qi=class{source;value;constructor(t,e){this.source=t,this.value=e}},uo=(()=>{class s{_changeDetector=b(Dt);_dir=b(Kt,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=b(Le).getId("mat-button-toggle-group-");vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(i=>i.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new Z;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new Z;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=b(Ur,{optional:!0});this.appearance=e&&e.appearance?e.appearance:"standard",this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new ii(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||ui(e))return;let n=e.target.id,o=this._buttonToggles.toArray().findIndex(r=>r.buttonId===n),a=null;switch(e.keyCode){case 32:case 13:a=this._buttonToggles.get(o)||null;break;case 38:a=this._getNextButton(o,-1);break;case 37:a=this._getNextButton(o,this.dir==="ltr"?-1:1);break;case 40:a=this._getNextButton(o,1);break;case 39:a=this._getNextButton(o,this.dir==="ltr"?1:-1);break;default:return}a&&(e.preventDefault(),a._onButtonClick(),a.focus())}_emitChangeEvent(e){let i=new qi(e,this.value);this._rawValue=i.value,this._controlValueAccessorChangeFn(i.value),this.change.emit(i)}_syncButtonToggle(e,i,n=!1,o=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?i?this._selectionModel.select(e):this._selectionModel.deselect(e):o=!0,o?Promise.resolve().then(()=>this._updateModelValue(e,n)):this._updateModelValue(e,n)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(i=>e.value!=null&&i===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let i=this._buttonToggles.get(e);if(!i.disabled){i.tabIndex=0;break}}}_getNextButton(e,i){let n=this._buttonToggles;for(let o=1;o<=n.length;o++){let a=(e+i*o+n.length)%n.length,r=n.get(a);if(r&&!r.disabled)return r}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let i=this._buttonToggles.toArray();if(this.multiple&&e?(Array.isArray(e),this._clearSelection(),e.forEach(n=>this._selectValue(n,i))):(this._clearSelection(),this._selectValue(e,i)),!this.multiple&&i.every(n=>n.tabIndex===-1)){for(let n of i)if(!n.disabled){n.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,i){for(let n of i)if(n.value===e){n.checked=!0,this._selectionModel.select(n),this.multiple||(n.tabIndex=0);break}}_updateModelValue(e,i){i&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static \u0275fac=function(i){return new(i||s)};static \u0275dir=C({type:s,selectors:[["mat-button-toggle-group"]],contentQueries:function(i,n,o){if(i&1&&_t(o,Zi,5),i&2){let a;M(a=D())&&(n._buttonToggles=a)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(i,n){i&1&&$("keydown",function(a){return n._keydown(a)}),i&2&&(F("role",n.multiple?"group":"radiogroup")("aria-disabled",n.disabled),O("mat-button-toggle-vertical",n.vertical)("mat-button-toggle-group-appearance-standard",n.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",I],value:"value",multiple:[2,"multiple","multiple",I],disabled:[2,"disabled","disabled",I],disabledInteractive:[2,"disabledInteractive","disabledInteractive",I],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",I],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",I]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[G([Ch,{provide:Gr,useExisting:s}])]})}return s})(),Zi=(()=>{class s{_changeDetectorRef=b(Dt);_elementRef=b(N);_focusMonitor=b(un);_idGenerator=b(Le);_animationDisabled=Tt();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new Z;constructor(){b(pe).load(fe);let e=b(Gr,{optional:!0}),i=b(new Oe("tabindex"),{optional:!0})||"",n=b(Ur,{optional:!0});this._tabIndex=ht(parseInt(i)||0),this.buttonToggleGroup=e,this._appearance=n&&n.appearance?n.appearance:"standard",this._disabledInteractive=n?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let i=this.buttonToggleGroup._buttonToggles.find(n=>n.tabIndex===0);i&&(i.tabIndex=-1),this.tabIndex=0}this.change.emit(new qi(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(i){return new(i||s)};static \u0275cmp=T({type:s,selectors:[["mat-button-toggle"]],viewQuery:function(i,n){if(i&1&&vt(wh,5),i&2){let o;M(o=D())&&(n._buttonElement=o.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(i,n){i&1&&$("focus",function(){return n.focus()}),i&2&&(F("aria-label",null)("aria-labelledby",null)("id",n.id)("name",null),O("mat-button-toggle-standalone",!n.buttonToggleGroup)("mat-button-toggle-checked",n.checked)("mat-button-toggle-disabled",n.disabled)("mat-button-toggle-disabled-interactive",n.disabledInteractive)("mat-button-toggle-appearance-standard",n.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",I],appearance:"appearance",checked:[2,"checked","checked",I],disabled:[2,"disabled","disabled",I],disabledInteractive:[2,"disabledInteractive","disabledInteractive",I]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:xh,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(i,n){if(i&1&&(ut(),g(0,"button",1,0),$("click",function(){return n._onButtonClick()}),V(2,kh,2,1,"div",2),g(3,"span",3),j(4),_()(),L(5,"span",4)(6,"span",5)),i&2){let o=Wt(1);R("id",n.buttonId)("disabled",n.disabled&&!n.disabledInteractive||null),F("role",n.isSingleSelector()?"radio":"button")("tabindex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("aria-pressed",n.isSingleSelector()?null:n.checked)("aria-checked",n.isSingleSelector()?n.checked:null)("name",n._getButtonName())("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),y(2),W(n.buttonToggleGroup&&(!n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideSingleSelectionIndicator||n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),y(4),R("matRippleTrigger",o)("matRippleDisabled",n.disableRipple||n.disabled)}},dependencies:[Pe,Qr],styles:[`.mat-button-toggle-standalone,
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
`],encapsulation:2,changeDetection:0})}return s})(),qr=(()=>{class s{static \u0275fac=function(i){return new(i||s)};static \u0275mod=tt({type:s});static \u0275inj=J({imports:[pi,Zi,at]})}return s})();function Mh(s,t){if(s&1){let e=Ot();g(0,"div",3)(1,"mat-button-toggle-group",4),Zo("valueChange",function(n){lt(e);let o=E();return qo(o.chartType,n)||(o.chartType=n),ct(n)}),$("change",function(){lt(e);let n=E();return ct(n.rebuildSeries())}),g(2,"mat-button-toggle",5),k(3,"Line"),_(),g(4,"mat-button-toggle",6),k(5,"Candlestick"),_()()(),L(6,"div",7,0)}if(s&2){let e=E();y(),Go("value",e.chartType)}}function Dh(s,t){s&1&&(g(0,"div",2)(1,"mat-icon"),k(2,"candlestick_chart"),_(),g(3,"p"),k(4," Chart data is unavailable \u2014 Finnhub's free tier does not support US equity candle data. "),_()())}var Zr=(()=>{class s{constructor(){this.candles=pt.required(),this.symbol=pt.required(),this.elRef=b(N),this.themeService=b(ha),this.chart=null,this.series=null,this.resizeObserver=null,this.chartType="area",kt(()=>{this.initChart()}),hn(()=>{this.themeService.isDark(),this.chart&&this.applyTheme()}),hn(()=>{let e=this.candles();e.length>0&&this.chart&&this.rebuildSeries(e)})}initChart(){let e=this.elRef.nativeElement.querySelector(".chart-card__container");e&&(this.chart=$r(e,{width:e.clientWidth,height:400,layout:{textColor:this.themeService.isDark()?"#d1d5db":"#374151",background:{type:Ke.Solid,color:"transparent"}},grid:{vertLines:{color:this.themeService.isDark()?"#374151":"#e5e7eb"},horzLines:{color:this.themeService.isDark()?"#374151":"#e5e7eb"}},crosshair:{mode:0},rightPriceScale:{borderColor:this.themeService.isDark()?"#374151":"#e5e7eb"},timeScale:{borderColor:this.themeService.isDark()?"#374151":"#e5e7eb",timeVisible:!1}}),this.rebuildSeries(),this.resizeObserver=new ResizeObserver(i=>{this.chart&&i[0]&&this.chart.applyOptions({width:i[0].contentRect.width})}),this.resizeObserver.observe(e))}rebuildSeries(e){if(!this.chart)return;this.series&&(this.chart.removeSeries(this.series),this.series=null);let i=e??this.candles();i.length!==0&&(this.chartType==="candlestick"?(this.series=this.chart.addCandlestickSeries({upColor:"#16a34a",downColor:"#dc2626",borderUpColor:"#16a34a",borderDownColor:"#dc2626",wickUpColor:"#16a34a",wickDownColor:"#dc2626"}),this.series?.setData(i)):(this.series=this.chart.addAreaSeries({lineColor:"#3b82f6",topColor:"rgba(59, 130, 246, 0.4)",bottomColor:"rgba(59, 130, 246, 0.0)",lineWidth:2}),this.series?.setData(i.map(n=>({time:n.time,value:n.close})))),this.chart.timeScale().fitContent())}applyTheme(){if(!this.chart)return;let e=this.themeService.isDark();this.chart.applyOptions({layout:{textColor:e?"#d1d5db":"#374151",background:{type:Ke.Solid,color:"transparent"}},grid:{vertLines:{color:e?"#374151":"#e5e7eb"},horzLines:{color:e?"#374151":"#e5e7eb"}},rightPriceScale:{borderColor:e?"#374151":"#e5e7eb"},timeScale:{borderColor:e?"#374151":"#e5e7eb"}})}ngOnDestroy(){this.resizeObserver?.disconnect(),this.chart?.remove(),this.chart=null,this.series=null}static{this.\u0275fac=function(i){return new(i||s)}}static{this.\u0275cmp=T({type:s,selectors:[["app-price-chart"]],inputs:{candles:[1,"candles"],symbol:[1,"symbol"]},decls:3,vars:1,consts:[["chartContainer",""],["appearance","outlined",1,"chart-card"],[1,"chart-card__empty"],[1,"chart-card__controls"],[3,"valueChange","change","value"],["value","area"],["value","candlestick"],[1,"chart-card__container"]],template:function(i,n){i&1&&(g(0,"mat-card",1),V(1,Mh,8,1)(2,Dh,5,0,"div",2),_()),i&2&&(y(),W(n.candles().length>0?1:2))},dependencies:[qr,uo,Zi,_e,ge,Qt,$t],styles:[".chart-card[_ngcontent-%COMP%]{padding:16px}.chart-card__controls[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-bottom:12px}.chart-card__container[_ngcontent-%COMP%]{width:100%;height:400px}.chart-card__empty[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:64px 24px;text-align:center;color:var(--color-neutral)}.chart-card__empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px;margin-bottom:16px}"]})}}return s})();var Th=[[["caption"]],[["colgroup"],["col"]],"*"],Rh=["caption","colgroup, col","*"];function Eh(s,t){s&1&&j(0,2)}function Ih(s,t){s&1&&(g(0,"thead",0),Y(1,1),_(),g(2,"tbody",0),Y(3,2)(4,3),_(),g(5,"tfoot",0),Y(6,4),_())}function zh(s,t){s&1&&Y(0,1)(1,2)(2,3)(3,4)}var Mt=new X("CDK_TABLE");var Ki=(()=>{class s{template=b(dt);constructor(){}static \u0275fac=function(i){return new(i||s)};static \u0275dir=C({type:s,selectors:[["","cdkCellDef",""]]})}return s})(),Ji=(()=>{class s{template=b(dt);constructor(){}static \u0275fac=function(i){return new(i||s)};static \u0275dir=C({type:s,selectors:[["","cdkHeaderCellDef",""]]})}return s})(),Kr=(()=>{class s{template=b(dt);constructor(){}static \u0275fac=function(i){return new(i||s)};static \u0275dir=C({type:s,selectors:[["","cdkFooterCellDef",""]]})}return s})(),Te=(()=>{class s{_table=b(Mt,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;constructor(){}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(i){return new(i||s)};static \u0275dir=C({type:s,selectors:[["","cdkColumnDef",""]],contentQueries:function(i,n,o){if(i&1&&_t(o,Ki,5)(o,Ji,5)(o,Kr,5),i&2){let a;M(a=D())&&(n.cell=a.first),M(a=D())&&(n.headerCell=a.first),M(a=D())&&(n.footerCell=a.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",I],stickyEnd:[2,"stickyEnd","stickyEnd",I]}})}return s})(),Xi=class{constructor(t,e){e.nativeElement.classList.add(...t._columnCssClassName)}},Jr=(()=>{class s extends Xi{constructor(){super(b(Te),b(N))}static \u0275fac=function(i){return new(i||s)};static \u0275dir=C({type:s,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[B]})}return s})();var tl=(()=>{class s extends Xi{constructor(){let e=b(Te),i=b(N);super(e,i);let n=e._table?._getCellRole();n&&i.nativeElement.setAttribute("role",n)}static \u0275fac=function(i){return new(i||s)};static \u0275dir=C({type:s,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[B]})}return s})();var fo=(()=>{class s{template=b(dt);_differs=b(ue);columns;_columnsDiffer;constructor(){}ngOnChanges(e){if(!this._columnsDiffer){let i=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(i).create(),this._columnsDiffer.diff(i)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof si?e.headerCell.template:this instanceof bo?e.footerCell.template:e.cell.template}static \u0275fac=function(i){return new(i||s)};static \u0275dir=C({type:s,features:[Yt]})}return s})(),si=(()=>{class s extends fo{_table=b(Mt,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(b(dt),b(ue))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(i){return new(i||s)};static \u0275dir=C({type:s,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",I]},features:[B,Yt]})}return s})(),bo=(()=>{class s extends fo{_table=b(Mt,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(b(dt),b(ue))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(i){return new(i||s)};static \u0275dir=C({type:s,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",I]},features:[B,Yt]})}return s})(),tn=(()=>{class s extends fo{_table=b(Mt,{optional:!0});when;constructor(){super(b(dt),b(ue))}static \u0275fac=function(i){return new(i||s)};static \u0275dir=C({type:s,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[B]})}return s})(),oe=(()=>{class s{_viewContainer=b(Vt);cells;context;static mostRecentCellOutlet=null;constructor(){s.mostRecentCellOutlet=this}ngOnDestroy(){s.mostRecentCellOutlet===this&&(s.mostRecentCellOutlet=null)}static \u0275fac=function(i){return new(i||s)};static \u0275dir=C({type:s,selectors:[["","cdkCellOutlet",""]]})}return s})(),go=(()=>{class s{static \u0275fac=function(i){return new(i||s)};static \u0275cmp=T({type:s,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,n){i&1&&Y(0,0)},dependencies:[oe],encapsulation:2})}return s})();var _o=(()=>{class s{static \u0275fac=function(i){return new(i||s)};static \u0275cmp=T({type:s,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,n){i&1&&Y(0,0)},dependencies:[oe],encapsulation:2})}return s})(),el=(()=>{class s{templateRef=b(dt);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";constructor(){}static \u0275fac=function(i){return new(i||s)};static \u0275dir=C({type:s,selectors:[["ng-template","cdkNoDataRow",""]]})}return s})(),Yr=["top","bottom","left","right"],po=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(t=>this._updateCachedSizes(t)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(t,e,i=!0,n=!0,o,a,r){this._isNativeHtmlTable=t,this._stickCellCss=e,this._isBrowser=i,this._needsPositionStickyOnElement=n,this.direction=o,this._positionListener=a,this._tableInjector=r,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(t,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(t);let i=[];for(let n of t)n.nodeType===n.ELEMENT_NODE&&i.push(n,...Array.from(n.children));kt({write:()=>{for(let n of i)this._removeStickyStyle(n,e)}},{injector:this._tableInjector})}updateStickyColumns(t,e,i,n=!0,o=!0){if(!t.length||!this._isBrowser||!(e.some(w=>w)||i.some(w=>w))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let a=t[0],r=a.children.length,l=this.direction==="rtl",c=l?"right":"left",h=l?"left":"right",d=e.lastIndexOf(!0),m=i.indexOf(!0),u,p,f;o&&this._updateStickyColumnReplayQueue({rows:[...t],stickyStartStates:[...e],stickyEndStates:[...i]}),kt({earlyRead:()=>{u=this._getCellWidths(a,n),p=this._getStickyStartColumnPositions(u,e),f=this._getStickyEndColumnPositions(u,i)},write:()=>{for(let w of t)for(let x=0;x<r;x++){let S=w.children[x];e[x]&&this._addStickyStyle(S,c,p[x],x===d),i[x]&&this._addStickyStyle(S,h,f[x],x===m)}this._positionListener&&u.some(w=>!!w)&&(this._positionListener.stickyColumnsUpdated({sizes:d===-1?[]:u.slice(0,d+1).map((w,x)=>e[x]?w:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:m===-1?[]:u.slice(m).map((w,x)=>i[x+m]?w:null).reverse()}))}},{injector:this._tableInjector})}stickRows(t,e,i){if(!this._isBrowser)return;let n=i==="bottom"?t.slice().reverse():t,o=i==="bottom"?e.slice().reverse():e,a=[],r=[],l=[];kt({earlyRead:()=>{for(let c=0,h=0;c<n.length;c++){if(!o[c])continue;a[c]=h;let d=n[c];l[c]=this._isNativeHtmlTable?Array.from(d.children):[d];let m=this._retrieveElementSize(d).height;h+=m,r[c]=m}},write:()=>{let c=o.lastIndexOf(!0);for(let h=0;h<n.length;h++){if(!o[h])continue;let d=a[h],m=h===c;for(let u of l[h])this._addStickyStyle(u,i,d,m)}i==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:r,offsets:a,elements:l}):this._positionListener?.stickyFooterRowsUpdated({sizes:r,offsets:a,elements:l})}},{injector:this._tableInjector})}updateStickyFooterContainer(t,e){this._isNativeHtmlTable&&kt({write:()=>{let i=t.querySelector("tfoot");i&&(e.some(n=>!n)?this._removeStickyStyle(i,["bottom"]):this._addStickyStyle(i,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(t,e){if(!t.classList.contains(this._stickCellCss))return;for(let n of e)t.style[n]="",t.classList.remove(this._borderCellCss[n]);Yr.some(n=>e.indexOf(n)===-1&&t.style[n])?t.style.zIndex=this._getCalculatedZIndex(t):(t.style.zIndex="",this._needsPositionStickyOnElement&&(t.style.position=""),t.classList.remove(this._stickCellCss))}_addStickyStyle(t,e,i,n){t.classList.add(this._stickCellCss),n&&t.classList.add(this._borderCellCss[e]),t.style[e]=`${i}px`,t.style.zIndex=this._getCalculatedZIndex(t),this._needsPositionStickyOnElement&&(t.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(t){let e={top:100,bottom:10,left:1,right:1},i=0;for(let n of Yr)t.style[n]&&(i+=e[n]);return i?`${i}`:""}_getCellWidths(t,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let i=[],n=t.children;for(let o=0;o<n.length;o++){let a=n[o];i.push(this._retrieveElementSize(a).width)}return this._cachedCellWidths=i,i}_getStickyStartColumnPositions(t,e){let i=[],n=0;for(let o=0;o<t.length;o++)e[o]&&(i[o]=n,n+=t[o]);return i}_getStickyEndColumnPositions(t,e){let i=[],n=0;for(let o=t.length;o>0;o--)e[o]&&(i[o]=n,n+=t[o]);return i}_retrieveElementSize(t){let e=this._elemSizeCache.get(t);if(e)return e;let i=t.getBoundingClientRect(),n={width:i.width,height:i.height};return this._resizeObserver&&(this._elemSizeCache.set(t,n),this._resizeObserver.observe(t,{box:"border-box"})),n}_updateStickyColumnReplayQueue(t){this._removeFromStickyColumnReplayQueue(t.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(t)}_removeFromStickyColumnReplayQueue(t){let e=new Set(t);for(let i of this._updatedStickyColumnsParamsToReplay)i.rows=i.rows.filter(n=>!e.has(n));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(i=>!!i.rows.length)}_updateCachedSizes(t){let e=!1;for(let i of t){let n=i.borderBoxSize?.length?{width:i.borderBoxSize[0].inlineSize,height:i.borderBoxSize[0].blockSize}:{width:i.contentRect.width,height:i.contentRect.height};n.width!==this._elemSizeCache.get(i.target)?.width&&Oh(i.target)&&(e=!0),this._elemSizeCache.set(i.target,n)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let i of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(i.rows,i.stickyStartStates,i.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function Oh(s){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(t=>s.classList.contains(t))}var ni=new X("STICKY_POSITIONING_LISTENER");var vo=(()=>{class s{viewContainer=b(Vt);elementRef=b(N);constructor(){let e=b(Mt);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||s)};static \u0275dir=C({type:s,selectors:[["","rowOutlet",""]]})}return s})(),yo=(()=>{class s{viewContainer=b(Vt);elementRef=b(N);constructor(){let e=b(Mt);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||s)};static \u0275dir=C({type:s,selectors:[["","headerRowOutlet",""]]})}return s})(),wo=(()=>{class s{viewContainer=b(Vt);elementRef=b(N);constructor(){let e=b(Mt);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||s)};static \u0275dir=C({type:s,selectors:[["","footerRowOutlet",""]]})}return s})(),xo=(()=>{class s{viewContainer=b(Vt);elementRef=b(N);constructor(){let e=b(Mt);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||s)};static \u0275dir=C({type:s,selectors:[["","noDataRowOutlet",""]]})}return s})(),ko=(()=>{class s{_differs=b(ue);_changeDetectorRef=b(Dt);_elementRef=b(N);_dir=b(Kt,{optional:!0});_platform=b(Xt);_viewRepeater;_viewportRuler=b(bi);_injector=b(qt);_virtualScrollViewport=b(ba,{optional:!0,host:!0});_positionListener=b(ni,{optional:!0})||b(ni,{optional:!0,skipSelf:!0});_document=b(Ho);_data;_renderedRange;_onDestroy=new rt;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new rt;_footerRowStickyUpdates=new rt;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new rt;_dataStream=new rt;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new Z;viewChange=new rn({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;constructor(){b(new Oe("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((i,n)=>this.trackBy?this.trackBy(n.dataIndex,n.data):n)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(gt(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new pa:new Gi,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),fi(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let i=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,i,(n,o,a)=>this._getEmbeddedViewArgs(n.item,a),n=>n.item.data,n=>{n.operation===be.INSERTED&&n.context&&this._renderCellTemplateForItem(n.record.item.rowDef,n.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(n=>{let o=i.get(n.currentIndex);o.context.$implicit=n.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let n=Xr(this._headerRowOutlet,"thead");n&&(n.style.display=e.length?"":"none")}let i=this._headerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,i,"top"),this._headerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let n=Xr(this._footerRowOutlet,"tfoot");n&&(n.style.display=e.length?"":"none")}let i=this._footerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,i,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,i),this._footerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),i=this._getRenderedRows(this._rowOutlet),n=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...i,...n],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((o,a)=>{this._addStickyColumnStyles([o],this._headerRowDefs[a])}),this._rowDefs.forEach(o=>{let a=[];for(let r=0;r<i.length;r++)this._renderRows[r].rowDef===o&&a.push(i[r]);this._addStickyColumnStyles(a,o)}),n.forEach((o,a)=>{this._addStickyColumnStyles([o],this._footerRowDefs[a])}),Array.from(this._columnDefsByName.values()).forEach(o=>o.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let i=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||i,this._forceRecalculateCellWidths=i,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],i=Math.min(this._data.length,this._renderedRange.end),n=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=this._renderedRange.start;o<i;o++){let a=this._data[o],r=this._getRenderRowsForData(a,o,n.get(a));this._cachedRenderRowsMap.has(a)||this._cachedRenderRowsMap.set(a,new WeakMap);for(let l=0;l<r.length;l++){let c=r[l],h=this._cachedRenderRowsMap.get(c.data);h.has(c.rowDef)?h.get(c.rowDef).push(c):h.set(c.rowDef,[c]),e.push(c)}}return e}_getRenderRowsForData(e,i,n){return this._getRowDefs(e,i).map(a=>{let r=n&&n.has(a)?n.get(a):[];if(r.length){let l=r.shift();return l.dataIndex=i,l}else return{data:e,rowDef:a,dataIndex:i}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Yi(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(i=>{this._columnDefsByName.has(i.name),this._columnDefsByName.set(i.name,i)})}_cacheRowDefs(){this._headerRowDefs=Yi(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Yi(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Yi(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(i=>!i.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(a,r)=>{let l=!!r.getColumnsDiff();return a||l},i=this._rowDefs.reduce(e,!1);i&&this._forceRenderDataRows();let n=this._headerRowDefs.reduce(e,!1);n&&this._forceRenderHeaderRows();let o=this._footerRowDefs.reduce(e,!1);return o&&this._forceRenderFooterRows(),i||n||o}_switchDataSource(e){this._data=[],fi(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;fi(this.dataSource)?e=this.dataSource.connect(this):Lo(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=xt(this.dataSource)),this._renderChangeSubscription=ai([e,this.viewChange]).pipe(gt(this._onDestroy)).subscribe(([i,n])=>{this._data=i||[],this._renderedRange=n,this._dataStream.next(i),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,i)=>this._renderRow(this._headerRowOutlet,e,i)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,i)=>this._renderRow(this._footerRowOutlet,e,i)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,i){let n=Array.from(i?.columns||[]).map(r=>{let l=this._columnDefsByName.get(r);return l}),o=n.map(r=>r.sticky),a=n.map(r=>r.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,a,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let i=[];for(let n=0;n<e.viewContainer.length;n++){let o=e.viewContainer.get(n);i.push(o.rootNodes[0])}return i}_getRowDefs(e,i){if(this._rowDefs.length===1)return[this._rowDefs[0]];let n=[];if(this.multiTemplateDataRows)n=this._rowDefs.filter(o=>!o.when||o.when(i,e));else{let o=this._rowDefs.find(a=>a.when&&a.when(i,e))||this._defaultRowDef;o&&n.push(o)}return n.length,n}_getEmbeddedViewArgs(e,i){let n=e.rowDef,o={$implicit:e.data};return{templateRef:n.template,context:o,index:i}}_renderRow(e,i,n,o={}){let a=e.viewContainer.createEmbeddedView(i.template,o,n);return this._renderCellTemplateForItem(i,o),a}_renderCellTemplateForItem(e,i){for(let n of this._getCellTemplates(e))oe.mostRecentCellOutlet&&oe.mostRecentCellOutlet._viewContainer.createEmbeddedView(n,i);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let i=0,n=e.length;i<n;i++){let a=e.get(i).context;a.count=n,a.first=i===0,a.last=i===n-1,a.even=i%2===0,a.odd=!a.even,this.multiTemplateDataRows?(a.dataIndex=this._renderRows[i].dataIndex,a.renderIndex=i):a.index=this._renderRows[i].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,i=>{let n=this._columnDefsByName.get(i);return e.extractCellTemplate(n)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(i,n)=>i||n.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",i=this._injector;this._stickyStyler=new po(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,i),(this._dir?this._dir.change:xt()).pipe(gt(this._onDestroy)).subscribe(n=>{this._stickyStyler.direction=n,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let i=typeof requestAnimationFrame<"u"?zo:Io;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(No(0,i),gt(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(n,o)=>this._measureRangeSize(n,o)}),ai([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(gt(this._onDestroy)).subscribe(([n,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let a=0;a<o.elements.length;a++){let r=o.elements[a];if(r){let l=o.offsets[a],c=n!==0?Math.max(n-l,l):-l;for(let h of r)h.style.top=`${-c}px`}}}),ai([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(gt(this._onDestroy)).subscribe(([n,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let a=0;a<o.elements.length;a++){let r=o.elements[a];if(r)for(let l of r)l.style.bottom=`${n+o.offsets[a]}px`}})}_getOwnDefs(e){return e.filter(i=>!i._table||i._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let i=this._rowOutlet.viewContainer.length===0;if(i===this._isShowingNoDataRow)return;let n=this._noDataRowOutlet.viewContainer;if(i){let o=n.createEmbeddedView(e.templateRef),a=o.rootNodes[0];if(o.rootNodes.length===1&&a?.nodeType===this._document.ELEMENT_NODE){a.setAttribute("role","row"),a.classList.add(...e._contentClassNames);let r=a.querySelectorAll(e._cellSelector);for(let l=0;l<r.length;l++)r[l].classList.add(...e._cellClassNames)}}else n.clear();this._isShowingNoDataRow=i,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,i){if(e.start>=e.end||i!=="vertical")return 0;let n=this.viewChange.value,o=this._rowOutlet.viewContainer;e.start<n.start||e.end>n.end;let a=e.start-n.start,r=e.end-e.start,l,c;for(let m=0;m<r;m++){let u=o.get(m+a);if(u&&u.rootNodes.length){l=c=u.rootNodes[0];break}}for(let m=r-1;m>-1;m--){let u=o.get(m+a);if(u&&u.rootNodes.length){c=u.rootNodes[u.rootNodes.length-1];break}}let h=l?.getBoundingClientRect?.(),d=c?.getBoundingClientRect?.();return h&&d?d.bottom-h.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(i){return new(i||s)};static \u0275cmp=T({type:s,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(i,n,o){if(i&1&&_t(o,el,5)(o,Te,5)(o,tn,5)(o,si,5)(o,bo,5),i&2){let a;M(a=D())&&(n._noDataRow=a.first),M(a=D())&&(n._contentColumnDefs=a),M(a=D())&&(n._contentRowDefs=a),M(a=D())&&(n._contentHeaderRowDefs=a),M(a=D())&&(n._contentFooterRowDefs=a)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(i,n){i&2&&O("cdk-table-fixed-layout",n.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",I],fixedLayout:[2,"fixedLayout","fixedLayout",I],recycleRows:[2,"recycleRows","recycleRows",I]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[G([{provide:Mt,useExisting:s},{provide:ni,useValue:null}])],ngContentSelectors:Rh,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,n){i&1&&(ut(Th),j(0),j(1,1),V(2,Eh,1,0),V(3,Ih,7,0)(4,zh,4,0)),i&2&&(y(2),W(n._isServer?2:-1),y(),W(n._isNativeHtmlTable?3:4))},dependencies:[yo,vo,xo,wo],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2})}return s})();function Yi(s,t){return s.concat(Array.from(t))}function Xr(s,t){let e=t.toUpperCase(),i=s.viewContainer.element.nativeElement;for(;i;){let n=i.nodeType===1?i.nodeName:null;if(n===e)return i;if(n==="TABLE")break;i=i.parentNode}return null}var il=(()=>{class s{static \u0275fac=function(i){return new(i||s)};static \u0275mod=tt({type:s});static \u0275inj=J({imports:[ga]})}return s})();var Lh=[[["caption"]],[["colgroup"],["col"]],"*"],Ph=["caption","colgroup, col","*"];function Bh(s,t){s&1&&j(0,2)}function Ah(s,t){s&1&&(g(0,"thead",0),Y(1,1),_(),g(2,"tbody",2),Y(3,3)(4,4),_(),g(5,"tfoot",0),Y(6,5),_())}function Nh(s,t){s&1&&Y(0,1)(1,3)(2,4)(3,5)}var nl=(()=>{class s extends ko{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(n){return(e||(e=Q(s)))(n||s)}})();static \u0275cmp=T({type:s,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(i,n){i&2&&O("mat-table-fixed-layout",n.fixedLayout)},exportAs:["matTable"],features:[G([{provide:ko,useExisting:s},{provide:Mt,useExisting:s},{provide:ni,useValue:null}]),B],ngContentSelectors:Ph,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,n){i&1&&(ut(Lh),j(0),j(1,1),V(2,Bh,1,0),V(3,Ah,7,0)(4,Nh,4,0)),i&2&&(y(2),W(n._isServer?2:-1),y(),W(n._isNativeHtmlTable?3:4))},dependencies:[yo,vo,xo,wo],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--mat-table-background-color, var(--mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-header-container-height, 56px);
  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));
  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--mat-table-row-item-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-footer-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2})}return s})(),sl=(()=>{class s extends Ki{static \u0275fac=(()=>{let e;return function(n){return(e||(e=Q(s)))(n||s)}})();static \u0275dir=C({type:s,selectors:[["","matCellDef",""]],features:[G([{provide:Ki,useExisting:s}]),B]})}return s})(),ol=(()=>{class s extends Ji{static \u0275fac=(()=>{let e;return function(n){return(e||(e=Q(s)))(n||s)}})();static \u0275dir=C({type:s,selectors:[["","matHeaderCellDef",""]],features:[G([{provide:Ji,useExisting:s}]),B]})}return s})();var al=(()=>{class s extends Te{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=Q(s)))(n||s)}})();static \u0275dir=C({type:s,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[G([{provide:Te,useExisting:s}]),B]})}return s})(),rl=(()=>{class s extends Jr{static \u0275fac=(()=>{let e;return function(n){return(e||(e=Q(s)))(n||s)}})();static \u0275dir=C({type:s,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[B]})}return s})();var ll=(()=>{class s extends tl{static \u0275fac=(()=>{let e;return function(n){return(e||(e=Q(s)))(n||s)}})();static \u0275dir=C({type:s,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[B]})}return s})();var cl=(()=>{class s extends si{static \u0275fac=(()=>{let e;return function(n){return(e||(e=Q(s)))(n||s)}})();static \u0275dir=C({type:s,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",I]},features:[G([{provide:si,useExisting:s}]),B]})}return s})();var hl=(()=>{class s extends tn{static \u0275fac=(()=>{let e;return function(n){return(e||(e=Q(s)))(n||s)}})();static \u0275dir=C({type:s,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[G([{provide:tn,useExisting:s}]),B]})}return s})(),dl=(()=>{class s extends go{static \u0275fac=(()=>{let e;return function(n){return(e||(e=Q(s)))(n||s)}})();static \u0275cmp=T({type:s,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[G([{provide:go,useExisting:s}]),B],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,n){i&1&&Y(0,0)},dependencies:[oe],encapsulation:2})}return s})();var ml=(()=>{class s extends _o{static \u0275fac=(()=>{let e;return function(n){return(e||(e=Q(s)))(n||s)}})();static \u0275cmp=T({type:s,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[G([{provide:_o,useExisting:s}]),B],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,n){i&1&&Y(0,0)},dependencies:[oe],encapsulation:2})}return s})();var ul=(()=>{class s{static \u0275fac=function(i){return new(i||s)};static \u0275mod=tt({type:s});static \u0275inj=J({imports:[il,at]})}return s})();var pl=(()=>{class s{transform(e){return new Intl.DateTimeFormat("en-US",{month:"long"}).format(new Date(2e3,e-1))}static{this.\u0275fac=function(i){return new(i||s)}}static{this.\u0275pipe=$o({name:"monthName",type:s,pure:!0})}}return s})();function Vh(s,t){s&1&&(g(0,"th",9),k(1,"Month"),_())}function Wh(s,t){if(s&1&&(g(0,"td",10),k(1),et(2,"monthName"),_()),s&2){let e=t.$implicit;y(),hi(" ",Yo(2,2,e.month)," ",e.year," ")}}function Hh(s,t){s&1&&(g(0,"th",9),k(1,"Change"),_())}function jh(s,t){if(s&1&&(g(0,"td",10)(1,"span",11),k(2),et(3,"number"),_()()),s&2){let e=t.$implicit;y(),O("positive",e.change>0)("negative",e.change<0),y(),hi(" ",e.change>0?"+":"","",Ct(3,6,e.change,"1.0-0")," ")}}function $h(s,t){s&1&&(g(0,"th",9),k(1,"MSPR"),_())}function Qh(s,t){if(s&1&&(g(0,"td",10)(1,"span",11),k(2),et(3,"number"),_()()),s&2){let e=t.$implicit;y(),O("positive",e.mspr>0)("negative",e.mspr<0),y(),hi(" ",e.mspr>0?"+":"","",Ct(3,6,e.mspr,"1.2-2")," ")}}function Uh(s,t){s&1&&L(0,"tr",12)}function Gh(s,t){s&1&&L(0,"tr",13)}function qh(s,t){if(s&1&&(g(0,"table",0),he(1,2),mt(2,Vh,2,0,"th",3)(3,Wh,3,4,"td",4),de(),he(4,5),mt(5,Hh,2,0,"th",3)(6,jh,4,9,"td",4),de(),he(7,6),mt(8,$h,2,0,"th",3)(9,Qh,4,9,"td",4),de(),mt(10,Uh,1,0,"tr",7)(11,Gh,1,0,"tr",8),_()),s&2){let e=E();R("dataSource",e.sentiment()),y(10),R("matHeaderRowDef",e.displayedColumns),y(),R("matRowDefColumns",e.displayedColumns)}}function Zh(s,t){s&1&&(g(0,"p",1),k(1,"No insider sentiment data available for this period."),_())}var fl=(()=>{class s{constructor(){this.sentiment=pt.required(),this.displayedColumns=["month","change","mspr"]}static{this.\u0275fac=function(i){return new(i||s)}}static{this.\u0275cmp=T({type:s,selectors:[["app-insider-sentiment"]],inputs:{sentiment:[1,"sentiment"]},decls:2,vars:1,consts:[["mat-table","",1,"sentiment-table",3,"dataSource"],[1,"no-data"],["matColumnDef","month"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","change"],["matColumnDef","mspr"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[1,"price"],["mat-header-row",""],["mat-row",""]],template:function(i,n){i&1&&V(0,qh,12,3,"table",0)(1,Zh,2,0,"p",1),i&2&&W(n.sentiment().length>0?0:1)},dependencies:[ul,nl,ol,cl,al,sl,hl,rl,ll,dl,ml,Jo,pl],styles:[".sentiment-table[_ngcontent-%COMP%]{width:100%}.no-data[_ngcontent-%COMP%]{text-align:center;padding:32px;color:var(--color-neutral)}"]})}}return s})();var Co=(()=>{class s{get vertical(){return this._vertical}set vertical(e){this._vertical=Pt(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=Pt(e)}_inset=!1;static \u0275fac=function(i){return new(i||s)};static \u0275cmp=T({type:s,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,n){i&2&&(F("aria-orientation",n.vertical?"vertical":"horizontal"),O("mat-divider-vertical",n.vertical)("mat-divider-horizontal",!n.vertical)("mat-divider-inset",n.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,n){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return s})(),en=(()=>{class s{static \u0275fac=function(i){return new(i||s)};static \u0275mod=tt({type:s});static \u0275inj=J({imports:[at]})}return s})();var bl=(()=>{class s{static \u0275fac=function(i){return new(i||s)};static \u0275mod=tt({type:s});static \u0275inj=J({imports:[at]})}return s})();var Yh=["*"],Xh=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,Kh=["unscopedContent"],Jh=["text"],td=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],ed=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var id=new X("ListOption"),nd=(()=>{class s{_elementRef=b(N);constructor(){}static \u0275fac=function(i){return new(i||s)};static \u0275dir=C({type:s,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return s})(),sd=(()=>{class s{_elementRef=b(N);constructor(){}static \u0275fac=function(i){return new(i||s)};static \u0275dir=C({type:s,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return s})(),od=(()=>{class s{static \u0275fac=function(i){return new(i||s)};static \u0275dir=C({type:s,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return s})(),gl=(()=>{class s{_listOption=b(id,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||s)};static \u0275dir=C({type:s,hostVars:4,hostBindings:function(i,n){i&2&&O("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart())}})}return s})(),ad=(()=>{class s extends gl{static \u0275fac=(()=>{let e;return function(n){return(e||(e=Q(s)))(n||s)}})();static \u0275dir=C({type:s,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[B]})}return s})(),rd=(()=>{class s extends gl{static \u0275fac=(()=>{let e;return function(n){return(e||(e=Q(s)))(n||s)}})();static \u0275dir=C({type:s,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[B]})}return s})(),ld=new X("MAT_LIST_CONFIG"),So=(()=>{class s{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=Pt(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(Pt(e))}_disabled=ht(!1);_defaultOptions=b(ld,{optional:!0});static \u0275fac=function(i){return new(i||s)};static \u0275dir=C({type:s,hostVars:1,hostBindings:function(i,n){i&2&&F("aria-disabled",n.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return s})(),cd=(()=>{class s{_elementRef=b(N);_ngZone=b(Zt);_listBase=b(So,{optional:!0});_platform=b(Xt);_hostElement;_isButtonElement;_noopAnimations=Tt();_avatars;_icons;set lines(e){this._explicitLines=ia(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=Pt(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(Pt(e))}_disabled=ht(!1);_subscriptions=new zt;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){b(pe).load(fe);let e=b(pn,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new ra(this,this._ngZone,this._hostElement,this._platform,b(qt)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(re(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;n.classList.toggle("mdc-list-item__primary-text",o),n.classList.toggle("mdc-list-item__secondary-text",!o)}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(i){return new(i||s)};static \u0275dir=C({type:s,contentQueries:function(i,n,o){if(i&1&&_t(o,ad,4)(o,rd,4),i&2){let a;M(a=D())&&(n._avatars=a),M(a=D())&&(n._icons=a)}},hostVars:4,hostBindings:function(i,n){i&2&&(F("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),O("mdc-list-item--disabled",n.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return s})();var _l=(()=>{class s extends So{static \u0275fac=(()=>{let e;return function(n){return(e||(e=Q(s)))(n||s)}})();static \u0275cmp=T({type:s,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[G([{provide:So,useExisting:s}]),B],ngContentSelectors:Yh,decls:1,vars:0,template:function(i,n){i&1&&(ut(),j(0))},styles:[Xh],encapsulation:2,changeDetection:0})}return s})(),vl=(()=>{class s extends cd{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=Pt(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=Q(s)))(n||s)}})();static \u0275cmp=T({type:s,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,n,o){if(i&1&&_t(o,sd,5)(o,nd,5)(o,od,5),i&2){let a;M(a=D())&&(n._lines=a),M(a=D())&&(n._titles=a),M(a=D())&&(n._meta=a)}},viewQuery:function(i,n){if(i&1&&vt(Kh,5)(Jh,5),i&2){let o;M(o=D())&&(n._unscopedContent=o.first),M(o=D())&&(n._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,n){i&2&&(F("aria-current",n._getAriaCurrent()),O("mdc-list-item--activated",n.activated)("mdc-list-item--with-leading-avatar",n._avatars.length!==0)("mdc-list-item--with-leading-icon",n._icons.length!==0)("mdc-list-item--with-trailing-meta",n._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",n._hasBothLeadingAndTrailing())("_mat-animation-noopable",n._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[B],ngContentSelectors:ed,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,n){i&1&&(ut(td),j(0),g(1,"span",1),j(2,1),j(3,2),g(4,"span",2,0),$("cdkObserveContent",function(){return n._updateItemLines(!0)}),j(6,3),_()(),j(7,4),j(8,5),L(9,"div",3))},dependencies:[mi],encapsulation:2,changeDetection:0})}return s})();var yl=(()=>{class s{static \u0275fac=function(i){return new(i||s)};static \u0275mod=tt({type:s});static \u0275inj=J({imports:[sa,pi,bl,at,en]})}return s})();var dd=(s,t)=>t.id;function md(s,t){if(s&1){let e=Ot();g(0,"img",12),$("error",function(n){lt(e);let o=E(3);return ct(o.onImageError(n))}),_()}if(s&2){let e=E().$implicit;R("src",e.image,ce)("alt",e.headline)}}function ud(s,t){s&1&&(g(0,"div",5)(1,"mat-icon"),k(2,"article"),_()())}function pd(s,t){if(s&1&&(g(0,"a",2)(1,"div",3),V(2,md,1,2,"img",4)(3,ud,3,0,"div",5),g(4,"div",6)(5,"h4",7),k(6),_(),g(7,"div",8)(8,"span",9),k(9),_(),g(10,"span",10),k(11),et(12,"date"),_()(),g(13,"p",11),k(14),et(15,"slice"),_()()()(),L(16,"mat-divider")),s&2){let e=t.$implicit;R("href",e.url,ce),y(2),W(e.image?2:3),y(4),U(e.headline),y(3),U(e.source),y(2),U(Ct(12,6,e.datetime*1e3,"MMM d, y \xB7 h:mm a")),y(3),Lt(" ",ze(15,9,e.summary,0,150),"... ")}}function fd(s,t){if(s&1&&(g(0,"mat-list",0),Ee(1,pd,17,13,null,null,dd),et(3,"slice"),_()),s&2){let e=E();y(),Ie(ze(3,0,e.news(),0,15))}}function bd(s,t){s&1&&(g(0,"p",1),k(1,"No recent news available."),_())}var wl=(()=>{class s{constructor(){this.news=pt.required()}onImageError(e){e.target.style.display="none"}static{this.\u0275fac=function(i){return new(i||s)}}static{this.\u0275cmp=T({type:s,selectors:[["app-news-feed"]],inputs:{news:[1,"news"]},decls:2,vars:1,consts:[[1,"news-list"],[1,"no-data"],["mat-list-item","","target","_blank","rel","noopener",1,"news-item",3,"href"],[1,"news-item__content"],[1,"news-item__image",3,"src","alt"],[1,"news-item__image-placeholder"],[1,"news-item__text"],[1,"news-item__headline"],[1,"news-item__meta"],[1,"news-item__source"],[1,"news-item__date"],[1,"news-item__summary"],[1,"news-item__image",3,"error","src","alt"]],template:function(i,n){i&1&&V(0,fd,4,4,"mat-list",0)(1,bd,2,0,"p",1),i&2&&W(n.news().length>0?0:1)},dependencies:[yl,_l,vl,Co,Qt,$t,en,Ko,di],styles:[".news-list[_ngcontent-%COMP%]{padding:0}.news-item[_ngcontent-%COMP%]{text-decoration:none;color:inherit;height:auto!important;padding:16px 0!important}.news-item__content[_ngcontent-%COMP%]{display:flex;gap:16px;width:100%}.news-item__image[_ngcontent-%COMP%]{width:80px;height:60px;object-fit:cover;border-radius:var(--radius-sm);flex-shrink:0}.news-item__image-placeholder[_ngcontent-%COMP%]{width:80px;height:60px;border-radius:var(--radius-sm);background:var(--mat-sys-surface-variant);display:flex;align-items:center;justify-content:center;flex-shrink:0}.news-item__text[_ngcontent-%COMP%]{flex:1;min-width:0}.news-item__headline[_ngcontent-%COMP%]{font-size:.95rem;font-weight:600;line-height:1.3;margin-bottom:4px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.news-item__meta[_ngcontent-%COMP%]{display:flex;gap:8px;font-size:.75rem;color:var(--color-neutral);margin-bottom:4px}.news-item__source[_ngcontent-%COMP%]{font-weight:500;color:var(--mat-sys-primary)}.news-item__summary[_ngcontent-%COMP%]{font-size:.8rem;color:var(--color-neutral);line-height:1.4}.no-data[_ngcontent-%COMP%]{text-align:center;padding:32px;color:var(--color-neutral)}"]})}}return s})();function gd(s,t){if(s&1&&(g(0,"div",2),L(1,"mat-spinner",5),g(2,"p"),k(3),_()()),s&2){let e=E();y(3),Lt("Loading ",e.symbol()," data...")}}function _d(s,t){if(s&1&&(g(0,"mat-tab-group",3)(1,"mat-tab",6)(2,"div",7),L(3,"app-company-profile",8)(4,"app-key-metrics",9),_()(),g(5,"mat-tab",10)(6,"div",7),L(7,"app-price-chart",11),_()(),g(8,"mat-tab",12)(9,"div",7),L(10,"app-insider-sentiment",13),_()(),g(11,"mat-tab",14)(12,"div",7),L(13,"app-news-feed",15),_()()()),s&2){let e=E();y(3),R("profile",e.profile()),y(),R("quote",e.quote()),y(3),R("candles",e.candles())("symbol",e.symbol()),y(3),R("sentiment",e.sentiment()),y(3),R("news",e.news())}}function vd(s,t){if(s&1){let e=Ot();g(0,"div",4)(1,"mat-icon"),k(2,"error_outline"),_(),g(3,"h3"),k(4),_(),g(5,"p"),k(6,"The stock symbol may be invalid or the service is unavailable."),_(),g(7,"button",16),$("click",function(){lt(e);let n=E();return ct(n.goBack())}),k(8," Return to Dashboard "),_()()}if(s&2){let e=E();y(4),Lt("Unable to load data for ",e.symbol())}}var xl=(()=>{class s{constructor(){this.symbol=pt.required(),this.api=b(ua),this.router=b(ea),this.loading=ht(!0),this.profile=ht(null),this.quote=ht(null),this.candles=ht([]),this.sentiment=ht([]),this.news=ht([])}ngOnInit(){this.loadData()}goBack(){this.router.navigate(["/"])}loadData(){let e=this.symbol(),i=Math.floor(Date.now()/1e3),n=i-365*24*60*60,o=new Date().toISOString().split("T")[0],a=new Date(Date.now()-2160*60*60*1e3).toISOString().split("T")[0];Po({profile:this.api.getCompanyProfile(e).pipe(le(()=>xt(null))),quote:this.api.getQuote(e).pipe(le(()=>xt(null))),candles:this.api.getCandles(e,"D",n,i).pipe(le(()=>xt([]))),sentiment:this.api.getInsiderSentiment(e,a,o).pipe(le(()=>xt({data:[],symbol:e}))),news:this.api.getCompanyNews(e,a,o).pipe(le(()=>xt([])))}).subscribe({next:r=>{this.profile.set(r.profile),this.quote.set(r.quote),this.candles.set(r.candles),this.sentiment.set(r.sentiment?.data??[]),this.news.set(r.news??[]),this.loading.set(!1)},error:()=>{this.loading.set(!1)}})}static{this.\u0275fac=function(i){return new(i||s)}}static{this.\u0275cmp=T({type:s,selectors:[["app-stock-detail-page"]],inputs:{symbol:[1,"symbol"]},decls:8,vars:1,consts:[[1,"stock-detail"],["mat-button","",1,"stock-detail__back",3,"click"],[1,"stock-detail__loading"],["animationDuration","200ms",1,"stock-detail__tabs"],[1,"stock-detail__error"],["diameter","48"],["label","Overview"],[1,"tab-content"],[3,"profile"],[3,"quote"],["label","Chart"],[3,"candles","symbol"],["label","Sentiment"],[3,"sentiment"],["label","News"],[3,"news"],["mat-flat-button","","color","primary",3,"click"]],template:function(i,n){i&1&&(g(0,"section",0)(1,"button",1),$("click",function(){return n.goBack()}),g(2,"mat-icon"),k(3,"arrow_back"),_(),k(4," Back to Dashboard "),_(),V(5,gd,4,1,"div",2)(6,_d,14,6,"mat-tab-group",3)(7,vd,9,1,"div",4),_()),i&2&&(y(5),W(n.loading()?5:n.profile()&&n.quote()?6:7))},dependencies:[Ia,kn,Ea,ca,la,Qt,$t,La,Oa,Ba,Aa,Zr,fl,wl],styles:[".stock-detail[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.stock-detail__back[_ngcontent-%COMP%]{align-self:flex-start}.stock-detail__loading[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:16px;padding:64px 0;color:var(--color-neutral)}.tab-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;padding:20px 0}.stock-detail__error[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:12px;padding:64px 24px;text-align:center;color:var(--color-neutral)}.stock-detail__error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:56px;width:56px;height:56px;color:var(--color-negative)}.stock-detail__error[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface)}"]})}}return s})();var ef=[{path:"",component:xl}];export{ef as STOCK_DETAIL_ROUTES};
