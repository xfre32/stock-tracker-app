import{c as ct,d as lt,f as mt,g as pt,h as ht}from"./chunk-PFTQRCUY.js";import{a as $e,c as ee,d as te,e as Je,f as et}from"./chunk-X3RZEHIT.js";import{a as gt}from"./chunk-3RWJVSPY.js";import"./chunk-RIEKDYI2.js";import"./chunk-MJKCEZCX.js";import"./chunk-5L3CRCID.js";import{b as ut,c as ft,d as _t,n as vt}from"./chunk-ZRWZX5O2.js";import"./chunk-WHS2OTI6.js";import{a as at,b as F,c as st,e as ge}from"./chunk-E2VTLSEF.js";import{I as dt,Z as re,_ as oe,a as Ze,b as Ue,d as qe,e as Ke,g as Ye,h as Xe,l as tt,t as nt,u as rt,x as ot}from"./chunk-BMLF3242.js";import{r as T,s as _e,v as it,w as ne,y}from"./chunk-PT3QJHGI.js";import{$ as i,$b as Y,A as De,Ab as U,Bb as d,C as Se,Cb as c,D as Ee,Da as je,Db as z,Dc as Ge,E as le,Eb as q,Ec as J,Fb as K,Kb as V,L as Te,Ob as _,P as me,Qb as L,R as h,Rb as g,S as Fe,Sa as u,Sb as p,T as Ae,Tb as N,Ub as ue,Vb as v,W as Re,Wa as ze,Wb as b,X as Q,Xa as pe,Z as I,Za as Ve,_a as Le,_b as fe,aa as Ie,ab as Ne,ac as f,bc as Qe,cc as l,e as w,ea as x,ec as X,fa as M,fb as m,gb as Z,hb as He,ia as P,ja as k,jb as O,jc as E,kc as $,l as xe,m as de,ma as W,na as D,p as ce,qa as Pe,ra as Oe,ub as he,va as G,vb as B,w as Me,wb as j,x as ke,xa as S,y as R,ya as Be,zc as We}from"./chunk-FRIE7V5V.js";import"./chunk-4CLCTAJ7.js";var se=["*"],Rt=["content"],It=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Pt=["mat-drawer","mat-drawer-content","*"];function Ot(r,o){if(r&1){let e=V();d(0,"div",1),_("click",function(){x(e);let n=L();return M(n._onBackdropClicked())}),c()}if(r&2){let e=L();f("mat-drawer-shown",e._isShowingBackdrop())}}function Bt(r,o){r&1&&(d(0,"mat-drawer-content"),p(1,2),c())}var jt=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],zt=["mat-sidenav","mat-sidenav-content","*"];function Vt(r,o){if(r&1){let e=V();d(0,"div",1),_("click",function(){x(e);let n=L();return M(n._onBackdropClicked())}),c()}if(r&2){let e=L();f("mat-drawer-shown",e._isShowingBackdrop())}}function Lt(r,o){r&1&&(d(0,"mat-sidenav-content"),p(1,2),c())}var Nt=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var Ht=new I("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),we=new I("MAT_DRAWER_CONTAINER"),ie=(()=>{class r extends F{_platform=i(T);_changeDetectorRef=i(J);_container=i(be);constructor(){let e=i(S),t=i(at),n=i(D);super(e,t,n)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=m({type:r,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,n){t&2&&(Y("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),f("mat-drawer-content-hidden",n._shouldBeHidden()))},features:[E([{provide:F,useExisting:r}]),O],ngContentSelectors:se,decls:1,vars:0,template:function(t,n){t&1&&(g(),p(0))},encapsulation:2,changeDetection:0})}return r})(),ve=(()=>{class r{_elementRef=i(S);_focusTrapFactory=i(rt);_focusMonitor=i(tt);_platform=i(T);_ngZone=i(D);_renderer=i(Le);_interactivityChecker=i(nt);_doc=i(k);_container=i(we,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=y(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=y(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(y(e))}_opened=Pe(!1);_openedVia=null;_animationStarted=new w;_animationEnd=new w;openedChange=new W(!0);_openedStream=this.openedChange.pipe(R(e=>e),ce(()=>{}));openedStart=this._animationStarted.pipe(R(()=>this.opened),le(void 0));_closedStream=this.openedChange.pipe(R(e=>!e),ce(()=>{}));closedStart=this._animationStarted.pipe(R(()=>!this.opened),le(void 0));_destroyed=new w;onPositionChanged=new W;_content;_modeChanged=new w;_injector=i(P);_changeDetectorRef=i(J);constructor(){this.openedChange.pipe(h(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!ot(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{a(),s(),e.removeAttribute("tabindex")},a=this._renderer.listen(e,"blur",n),s=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":pe(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let n=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),n}_setOpen(e,t,n){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(a=>{this.openedChange.pipe(Ee(1)).subscribe(s=>a(s?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,n=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,t)),n.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||r)};static \u0275cmp=m({type:r,selectors:[["mat-drawer"]],viewQuery:function(t,n){if(t&1&&ue(Rt,5),t&2){let a;v(a=b())&&(n._content=a.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,n){t&2&&(he("align",null)("tabIndex",n.mode!=="side"?"-1":null),Y("visibility",!n._container&&!n.opened?"hidden":null),f("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:se,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(g(),d(0,"div",1,0),p(2),c())},dependencies:[F],encapsulation:2,changeDetection:0})}return r})(),be=(()=>{class r{_dir=i(it,{optional:!0});_element=i(S);_ngZone=i(D);_changeDetectorRef=i(J);_animationDisabled=dt();_transitionsEnabled=!1;_allDrawers;_drawers=new Be;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=y(e)}_autosize=i(Ht);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:y(e)}_backdropOverride=null;backdropClick=new W;_start=null;_end=null;_left=null;_right=null;_destroyed=new w;_doCheckSubject=new w;_contentMargins={left:null,right:null};_contentMarginChanges=new w;get scrollable(){return this._userContent||this._content}_injector=i(P);constructor(){let e=i(T),t=i(st);this._dir?.change.pipe(h(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(h(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(me(this._allDrawers),h(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(me(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Se(10),h(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();e+=n,t-=n}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();t+=n,e-=n}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(h(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(h(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(h(this._drawers.changes)).subscribe(()=>{pe({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(h(ke(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,n="mat-drawer-container-has-open";e?t.add(n):t.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=m({type:r,selectors:[["mat-drawer-container"]],contentQueries:function(t,n,a){if(t&1&&N(a,ie,5)(a,ve,5),t&2){let s;v(s=b())&&(n._content=s.first),v(s=b())&&(n._allDrawers=s)}},viewQuery:function(t,n){if(t&1&&ue(ie,5),t&2){let a;v(a=b())&&(n._userContent=a.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,n){t&2&&f("mat-drawer-container-explicit-backdrop",n._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[E([{provide:we,useExisting:r}])],ngContentSelectors:Pt,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(g(It),B(0,Ot,1,2,"div",0),p(1),p(2,1),B(3,Bt,2,0,"mat-drawer-content")),t&2&&(j(n.hasBackdrop?0:-1),u(3),j(n._content?-1:3))},dependencies:[ie],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return r})(),ae=(()=>{class r extends ie{static \u0275fac=(()=>{let e;return function(n){return(e||(e=G(r)))(n||r)}})();static \u0275cmp=m({type:r,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[E([{provide:F,useExisting:r}]),O],ngContentSelectors:se,decls:1,vars:0,template:function(t,n){t&1&&(g(),p(0))},encapsulation:2,changeDetection:0})}return r})(),ye=(()=>{class r extends ve{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=y(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=_e(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=_e(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=G(r)))(n||r)}})();static \u0275cmp=m({type:r,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,n){t&2&&(he("tabIndex",n.mode!=="side"?"-1":null)("align",null),Y("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),f("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-sidenav-fixed",n.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[E([{provide:ve,useExisting:r}]),O],ngContentSelectors:se,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(g(),d(0,"div",1,0),p(2),c())},dependencies:[F],encapsulation:2,changeDetection:0})}return r})(),bt=(()=>{class r extends be{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=G(r)))(n||r)}})();static \u0275cmp=m({type:r,selectors:[["mat-sidenav-container"]],contentQueries:function(t,n,a){if(t&1&&N(a,ae,5)(a,ye,5),t&2){let s;v(s=b())&&(n._content=s.first),v(s=b())&&(n._allDrawers=s)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,n){t&2&&f("mat-drawer-container-explicit-backdrop",n._backdropOverride)},exportAs:["matSidenavContainer"],features:[E([{provide:we,useExisting:r},{provide:be,useExisting:r}]),O],ngContentSelectors:zt,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(g(jt),B(0,Vt,1,2,"div",0),p(1),p(2,1),B(3,Lt,2,0,"mat-sidenav-content")),t&2&&(j(n.hasBackdrop?0:-1),u(3),j(n._content?-1:3))},dependencies:[ae],styles:[Nt],encapsulation:2,changeDetection:0})}return r})(),wt=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275mod=Z({type:r});static \u0275inj=Q({imports:[ge,ne,ge]})}return r})();var Wt=["*",[["mat-toolbar-row"]]],Gt=["*","mat-toolbar-row"],Zt=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275dir=He({type:r,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return r})(),yt=(()=>{class r{_elementRef=i(S);_platform=i(T);_document=i(k);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=m({type:r,selectors:[["mat-toolbar"]],contentQueries:function(t,n,a){if(t&1&&N(a,Zt,5),t&2){let s;v(s=b())&&(n._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,n){t&2&&(Qe(n.color?"mat-"+n.color:""),f("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Gt,decls:2,vars:0,template:function(t,n){t&1&&(g(Wt),p(0),p(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return r})();var Ct=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275mod=Z({type:r});static \u0275inj=Q({imports:[ne]})}return r})();var Kt=()=>({exact:!0}),xt=(()=>{class r{constructor(){this.themeService=i(gt),this.toggleSidenav=We()}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=m({type:r,selectors:[["app-header"]],outputs:{toggleSidenav:"toggleSidenav"},decls:22,vars:3,consts:[[1,"header"],["mat-icon-button","","aria-label","Open navigation menu",1,"header__hamburger",3,"click"],["routerLink","/",1,"header__brand"],[1,"header__logo"],[1,"header__title"],[1,"header__spacer"],[1,"header__nav"],["mat-button","","routerLink","/","routerLinkActive","active",3,"routerLinkActiveOptions"],["mat-button","","routerLink","/compare","routerLinkActive","active"],["mat-icon-button","","aria-label","Toggle theme",1,"header__theme-toggle",3,"click"],[1,"theme-icon"]],template:function(t,n){t&1&&(d(0,"mat-toolbar",0)(1,"button",1),_("click",function(){return n.toggleSidenav.emit()}),d(2,"mat-icon"),l(3,"menu"),c()(),d(4,"a",2)(5,"mat-icon",3),l(6,"show_chart"),c(),d(7,"span",4),l(8,"StockTracker"),c()(),z(9,"span",5),d(10,"nav",6)(11,"a",7)(12,"mat-icon"),l(13,"dashboard"),c(),l(14," Dashboard "),c(),d(15,"a",8)(16,"mat-icon"),l(17,"compare_arrows"),c(),l(18," Compare "),c()(),d(19,"button",9),_("click",function(){return n.themeService.toggle()}),d(20,"mat-icon",10),l(21),c()()()),t&2&&(u(11),U("routerLinkActiveOptions",$(2,Kt)),u(10),X(" ",n.themeService.isDark()?"light_mode":"dark_mode"," "))},dependencies:[ee,te,Ct,yt,_t,ft,ut,oe,re],styles:[".header[_ngcontent-%COMP%]{position:sticky;top:0;z-index:100;gap:8px;box-shadow:var(--shadow-sm)}.header__brand[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;text-decoration:none;color:inherit}.header__logo[_ngcontent-%COMP%]{color:var(--mat-sys-primary);font-size:24px;width:24px;height:24px}.header__title[_ngcontent-%COMP%]{font-family:Geologica,sans-serif;font-weight:700;font-size:1.25rem;letter-spacing:-.02em}.header__spacer[_ngcontent-%COMP%]{flex:1}.header__theme-toggle[_ngcontent-%COMP%]   .theme-icon[_ngcontent-%COMP%]{transition:transform .3s ease}.header__hamburger[_ngcontent-%COMP%]{display:none;margin-right:-8px;margin-left:-8px}.header__theme-toggle[_ngcontent-%COMP%]:hover   .theme-icon[_ngcontent-%COMP%]{transform:rotate(30deg)}@media(max-width:600px){.header[_ngcontent-%COMP%]{justify-content:space-between}.header__brand[_ngcontent-%COMP%]{position:absolute;left:50%;transform:translate(-50%);pointer-events:auto}.header__spacer[_ngcontent-%COMP%]{display:none}.header__title[_ngcontent-%COMP%]{font-size:1.1rem}.header__nav[_ngcontent-%COMP%]{display:none}.header__hamburger[_ngcontent-%COMP%]{display:block}}"]})}}return r})();var Mt=(()=>{class r{constructor(){this.year=new Date().getFullYear()}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=m({type:r,selectors:[["app-footer"]],decls:7,vars:1,consts:[[1,"footer"],[1,"footer__divider"]],template:function(t,n){t&1&&(q(0,"footer",0)(1,"span"),l(2,"Built with Angular & Material"),K(),q(3,"span",1),l(4,"\xB7"),K(),q(5,"span"),l(6),K()()),t&2&&(u(6),X("\xA9 ",n.year," StockTracker"))},styles:[".footer[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:8px;padding:16px 24px;font-size:.8rem;color:var(--color-neutral);border-top:1px solid var(--mat-sys-outline-variant)}.footer__divider[_ngcontent-%COMP%]{opacity:.5}"]})}}return r})();var Yt=()=>({exact:!0}),kt=(()=>{class r{static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=m({type:r,selectors:[["app-root"]],decls:24,vars:2,consts:[["sidenav",""],[1,"app-container"],["mode","over",1,"app-sidenav"],[3,"click"],[1,"sidenav-header"],[1,"sidenav-logo"],[1,"sidenav-title"],["mat-list-item","","routerLink","/","routerLinkActive","active",3,"routerLinkActiveOptions"],["matListItemIcon",""],["matListItemTitle",""],["mat-list-item","","routerLink","/compare","routerLinkActive","active"],[1,"app-shell"],[3,"toggleSidenav"],[1,"app-content"]],template:function(t,n){if(t&1){let a=V();d(0,"mat-sidenav-container",1)(1,"mat-sidenav",2,0)(3,"mat-nav-list",3),_("click",function(){x(a);let A=fe(2);return M(A.close())}),d(4,"div",4)(5,"mat-icon",5),l(6,"show_chart"),c(),d(7,"span",6),l(8,"StockTracker"),c()(),d(9,"a",7)(10,"mat-icon",8),l(11,"dashboard"),c(),d(12,"span",9),l(13,"Dashboard"),c()(),d(14,"a",10)(15,"mat-icon",8),l(16,"compare_arrows"),c(),d(17,"span",9),l(18,"Compare"),c()()()(),d(19,"mat-sidenav-content",11)(20,"app-header",12),_("toggleSidenav",function(){x(a);let A=fe(2);return M(A.toggle())}),c(),d(21,"main",13),z(22,"router-outlet"),c(),z(23,"app-footer"),c()()}t&2&&(u(9),U("routerLinkActiveOptions",$(1,Yt)))},dependencies:[$e,ee,te,wt,ye,bt,ae,ht,pt,mt,lt,ct,oe,re,xt,Mt],styles:[".app-container[_ngcontent-%COMP%]{height:100vh;display:flex;flex-direction:column}.app-sidenav[_ngcontent-%COMP%]{width:260px;background-color:var(--mat-sys-surface);border-right:1px solid color-mix(in srgb,var(--mat-sys-outline) 15%,transparent)}.sidenav-header[_ngcontent-%COMP%]{padding:24px 16px;display:flex;align-items:center;gap:12px;border-bottom:1px solid color-mix(in srgb,var(--mat-sys-outline) 8%,transparent);margin-bottom:8px}.sidenav-logo[_ngcontent-%COMP%]{color:var(--mat-sys-primary);font-size:24px;width:24px;height:24px}.sidenav-title[_ngcontent-%COMP%]{font-family:Geologica,sans-serif;font-weight:700;font-size:1.15rem;letter-spacing:-.02em}.app-sidenav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background-color:color-mix(in srgb,var(--mat-sys-primary) 10%,transparent);color:var(--mat-sys-primary)!important}.app-shell[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100vh}.app-content[_ngcontent-%COMP%]{flex:1;padding:24px;max-width:1200px;margin:0 auto;width:100%;box-sizing:border-box}@media(max-width:600px){.app-content[_ngcontent-%COMP%]{padding:16px}}"]})}}return r})();var Xt="@",$t=(()=>{class r{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=i(P);loadingSchedulerFn=i(Jt,{optional:!0});_engine;constructor(e,t,n,a,s){this.doc=e,this.delegate=t,this.zone=n,this.animationType=a,this.moduleImpl=s}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-GQX5AEWU.js").then(n=>n),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(n=>{throw new Ae(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:a})=>{this._engine=n(this.animationType,this.doc);let s=new a(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(e,t){let n=this.delegate.createRenderer(e,t);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let a=new Ce(n);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let A=s.createRenderer(e,t);a.use(A),this.scheduler??=this.injector.get(Oe,null,{optional:!0}),this.scheduler?.notify(10)}).catch(s=>{a.use(n)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){Ne()};static \u0275prov=Re({token:r,factory:r.\u0275fac})}return r})(),Ce=class{delegate;replay=[];\u0275type=1;constructor(o){this.delegate=o}use(o){if(this.delegate=o,this.replay!==null){for(let e of this.replay)e(o);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(o,e){return this.delegate.createElement(o,e)}createComment(o){return this.delegate.createComment(o)}createText(o){return this.delegate.createText(o)}get destroyNode(){return this.delegate.destroyNode}appendChild(o,e){this.delegate.appendChild(o,e)}insertBefore(o,e,t,n){this.delegate.insertBefore(o,e,t,n)}removeChild(o,e,t,n){this.delegate.removeChild(o,e,t,n)}selectRootElement(o,e){return this.delegate.selectRootElement(o,e)}parentNode(o){return this.delegate.parentNode(o)}nextSibling(o){return this.delegate.nextSibling(o)}setAttribute(o,e,t,n){this.delegate.setAttribute(o,e,t,n)}removeAttribute(o,e,t){this.delegate.removeAttribute(o,e,t)}addClass(o,e){this.delegate.addClass(o,e)}removeClass(o,e){this.delegate.removeClass(o,e)}setStyle(o,e,t,n){this.delegate.setStyle(o,e,t,n)}removeStyle(o,e,t){this.delegate.removeStyle(o,e,t)}setProperty(o,e,t){this.shouldReplay(e)&&this.replay.push(n=>n.setProperty(o,e,t)),this.delegate.setProperty(o,e,t)}setValue(o,e){this.delegate.setValue(o,e)}listen(o,e,t,n){return this.shouldReplay(e)&&this.replay.push(a=>a.listen(o,e,t,n)),this.delegate.listen(o,e,t,n)}shouldReplay(o){return this.replay!==null&&o.startsWith(Xt)}},Jt=new I("");function Dt(r="animations"){return ze("NgAsyncAnimations"),Ie([{provide:Ve,useFactory:()=>new $t(i(k),i(Ze),i(D),r)},{provide:je,useValue:r==="noop"?"NoopAnimations":"BrowserAnimations"}])}var St=[{path:"",loadChildren:()=>import("./chunk-5SMNTFBX.js").then(r=>r.DASHBOARD_ROUTES)},{path:"stock/:symbol",loadChildren:()=>import("./chunk-KAG7MLXE.js").then(r=>r.STOCK_DETAIL_ROUTES)},{path:"compare",loadChildren:()=>import("./chunk-W3KJTSII.js").then(r=>r.COMPARISON_ROUTES)},{path:"**",redirectTo:""}];var Et=(r,o)=>{let e=i(vt);return o(r).pipe(Te({count:2,delay:(t,n)=>t instanceof Ke&&(t.status===429||t.status>=500)?Me(n*1e3):de(()=>t)}),De(t=>{let n="An unexpected error occurred";return t.status===0?n="Network error \u2014 please check your internet connection":t.status===401?n="Invalid API key \u2014 please check your Finnhub configuration":t.status===429?n="Rate limit exceeded \u2014 please wait a moment and try again":t.status>=500&&(n="Server error \u2014 Finnhub may be experiencing issues"),e.error(n),de(()=>t)}))};var C=new Map,en={"/quote":6e4,"/stock/profile2":3e5,"/company-news":3e5,"/stock/insider-sentiment":3e5,"/search":12e4,"/time_series":3e5};function tn(r){for(let[o,e]of Object.entries(en))if(r.includes(o))return e;return 6e4}var nn=100,Tt=(r,o)=>{if(r.method!=="GET")return o(r);let e=r.urlWithParams,t=C.get(e);return t&&(C.delete(e),t.expiry>Date.now())?(C.set(e,t),xe(t.response.clone())):o(r).pipe(Fe(n=>{if(n instanceof qe&&n.status===200){if(C.size>=nn){let a=C.keys().next().value;a!==void 0&&C.delete(a)}C.set(e,{response:n.clone(),expiry:Date.now()+tn(r.url)})}}))};var Ft={providers:[Ge({eventCoalescing:!0}),Je(St,et()),Ye(Xe([Et,Tt])),Dt()]};Ue(kt,Ft).catch(r=>console.error(r));
