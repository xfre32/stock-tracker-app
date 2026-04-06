import{c as dt,d as ct,f as lt,g as mt,h as pt}from"./chunk-DUCOPRTW.js";import{a as Xe,c as J,d as ee,e as $e,f as Je}from"./chunk-4SRQRRMA.js";import{c as _t}from"./chunk-3K2V6IHF.js";import{F as tt,G as nt,I as rt,Ka as gt,P as ot,Q as te,R as y,W as it,X as T,Y as at,_ as _e,ca as st,i as Ge,j as Ze,l as Ue,m as qe,o as Ke,p as Ye,t as E,u as fe,ua as ne,va as re,w as et,xa as ht,ya as ut,za as ft}from"./chunk-DNM4VKQD.js";import{$ as Re,$a as Le,$b as l,Ab as j,Ac as We,B as De,Bb as U,Bc as $,C as Se,Ca as Be,Cb as q,D as ce,Hb as z,K as Ee,Lb as _,Nb as V,O as le,Ob as g,Pb as p,Q as h,Qb as L,R as Te,Ra as u,Rb as he,S as Fe,Sb as b,Tb as v,V as Ae,Va as je,W as H,Wa as me,Xb as ue,Y as R,Ya as ze,Yb as K,Za as Ve,Zb as f,_ as i,_b as He,bc as Y,da as C,e as w,ea as x,eb as m,fb as G,gb as Ne,gc as S,ha as P,hc as X,ia as M,ib as I,k as Ce,l as se,la as Q,ma as k,o as de,pa as Pe,qa as Ie,rb as pe,sb as O,tb as B,ua as W,v as xe,w as Me,wa as D,wc as Qe,x as A,xa as Oe,xb as Z,yb as d,z as ke,zb as c}from"./chunk-PQWFABJZ.js";import"./chunk-4CLCTAJ7.js";var ae=["*"],Rt=["content"],Pt=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],It=["mat-drawer","mat-drawer-content","*"];function Ot(r,o){if(r&1){let e=z();d(0,"div",1),_("click",function(){C(e);let n=V();return x(n._onBackdropClicked())}),c()}if(r&2){let e=V();f("mat-drawer-shown",e._isShowingBackdrop())}}function Bt(r,o){r&1&&(d(0,"mat-drawer-content"),p(1,2),c())}var jt=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],zt=["mat-sidenav","mat-sidenav-content","*"];function Vt(r,o){if(r&1){let e=z();d(0,"div",1),_("click",function(){C(e);let n=V();return x(n._onBackdropClicked())}),c()}if(r&2){let e=V();f("mat-drawer-shown",e._isShowingBackdrop())}}function Lt(r,o){r&1&&(d(0,"mat-sidenav-content"),p(1,2),c())}var Nt=`.mat-drawer-container {
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
`;var Ht=new R("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),ve=new R("MAT_DRAWER_CONTAINER"),oe=(()=>{class r extends T{_platform=i(E);_changeDetectorRef=i($);_container=i(be);constructor(){let e=i(D),t=i(it),n=i(k);super(e,t,n)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=m({type:r,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,n){t&2&&(K("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),f("mat-drawer-content-hidden",n._shouldBeHidden()))},features:[S([{provide:T,useExisting:r}]),I],ngContentSelectors:ae,decls:1,vars:0,template:function(t,n){t&1&&(g(),p(0))},encapsulation:2,changeDetection:0})}return r})(),ge=(()=>{class r{_elementRef=i(D);_focusTrapFactory=i(nt);_focusMonitor=i(et);_platform=i(E);_ngZone=i(k);_renderer=i(Ve);_interactivityChecker=i(tt);_doc=i(M);_container=i(ve,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=y(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=y(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(y(e))}_opened=Pe(!1);_openedVia=null;_animationStarted=new w;_animationEnd=new w;openedChange=new Q(!0);_openedStream=this.openedChange.pipe(A(e=>e),de(()=>{}));openedStart=this._animationStarted.pipe(A(()=>this.opened),ce(void 0));_closedStream=this.openedChange.pipe(A(e=>!e),de(()=>{}));closedStart=this._animationStarted.pipe(A(()=>!this.opened),ce(void 0));_destroyed=new w;onPositionChanged=new Q;_content;_modeChanged=new w;_injector=i(P);_changeDetectorRef=i($);constructor(){this.openedChange.pipe(h(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!rt(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{a(),s(),e.removeAttribute("tabindex")},a=this._renderer.listen(e,"blur",n),s=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":me(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let n=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),n}_setOpen(e,t,n){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(a=>{this.openedChange.pipe(Se(1)).subscribe(s=>a(s?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,n=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,t)),n.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||r)};static \u0275cmp=m({type:r,selectors:[["mat-drawer"]],viewQuery:function(t,n){if(t&1&&he(Rt,5),t&2){let a;b(a=v())&&(n._content=a.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,n){t&2&&(pe("align",null)("tabIndex",n.mode!=="side"?"-1":null),K("visibility",!n._container&&!n.opened?"hidden":null),f("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:ae,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(g(),d(0,"div",1,0),p(2),c())},dependencies:[T],encapsulation:2,changeDetection:0})}return r})(),be=(()=>{class r{_dir=i(ot,{optional:!0});_element=i(D);_ngZone=i(k);_changeDetectorRef=i($);_animationDisabled=st();_transitionsEnabled=!1;_allDrawers;_drawers=new Oe;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=y(e)}_autosize=i(Ht);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:y(e)}_backdropOverride=null;backdropClick=new Q;_start=null;_end=null;_left=null;_right=null;_destroyed=new w;_doCheckSubject=new w;_contentMargins={left:null,right:null};_contentMarginChanges=new w;get scrollable(){return this._userContent||this._content}_injector=i(P);constructor(){let e=i(E),t=i(at);this._dir?.change.pipe(h(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(h(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(le(this._allDrawers),h(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(le(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(De(10),h(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();e+=n,t-=n}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();t+=n,e-=n}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(h(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(h(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(h(this._drawers.changes)).subscribe(()=>{me({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(h(Me(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,n="mat-drawer-container-has-open";e?t.add(n):t.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=m({type:r,selectors:[["mat-drawer-container"]],contentQueries:function(t,n,a){if(t&1&&L(a,oe,5)(a,ge,5),t&2){let s;b(s=v())&&(n._content=s.first),b(s=v())&&(n._allDrawers=s)}},viewQuery:function(t,n){if(t&1&&he(oe,5),t&2){let a;b(a=v())&&(n._userContent=a.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,n){t&2&&f("mat-drawer-container-explicit-backdrop",n._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[S([{provide:ve,useExisting:r}])],ngContentSelectors:It,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(g(Pt),O(0,Ot,1,2,"div",0),p(1),p(2,1),O(3,Bt,2,0,"mat-drawer-content")),t&2&&(B(n.hasBackdrop?0:-1),u(3),B(n._content?-1:3))},dependencies:[oe],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return r})(),ie=(()=>{class r extends oe{static \u0275fac=(()=>{let e;return function(n){return(e||(e=W(r)))(n||r)}})();static \u0275cmp=m({type:r,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[S([{provide:T,useExisting:r}]),I],ngContentSelectors:ae,decls:1,vars:0,template:function(t,n){t&1&&(g(),p(0))},encapsulation:2,changeDetection:0})}return r})(),we=(()=>{class r extends ge{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=y(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=fe(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=fe(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=W(r)))(n||r)}})();static \u0275cmp=m({type:r,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,n){t&2&&(pe("tabIndex",n.mode!=="side"?"-1":null)("align",null),K("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),f("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-sidenav-fixed",n.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[S([{provide:ge,useExisting:r}]),I],ngContentSelectors:ae,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(g(),d(0,"div",1,0),p(2),c())},dependencies:[T],encapsulation:2,changeDetection:0})}return r})(),bt=(()=>{class r extends be{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=W(r)))(n||r)}})();static \u0275cmp=m({type:r,selectors:[["mat-sidenav-container"]],contentQueries:function(t,n,a){if(t&1&&L(a,ie,5)(a,we,5),t&2){let s;b(s=v())&&(n._content=s.first),b(s=v())&&(n._allDrawers=s)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,n){t&2&&f("mat-drawer-container-explicit-backdrop",n._backdropOverride)},exportAs:["matSidenavContainer"],features:[S([{provide:ve,useExisting:r},{provide:be,useExisting:r}]),I],ngContentSelectors:zt,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(g(jt),O(0,Vt,1,2,"div",0),p(1),p(2,1),O(3,Lt,2,0,"mat-sidenav-content")),t&2&&(B(n.hasBackdrop?0:-1),u(3),B(n._content?-1:3))},dependencies:[ie],styles:[Nt],encapsulation:2,changeDetection:0})}return r})(),vt=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275mod=G({type:r});static \u0275inj=H({imports:[_e,te,_e]})}return r})();var Wt=["*",[["mat-toolbar-row"]]],Gt=["*","mat-toolbar-row"],Zt=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275dir=Ne({type:r,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return r})(),wt=(()=>{class r{_elementRef=i(D);_platform=i(E);_document=i(M);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=m({type:r,selectors:[["mat-toolbar"]],contentQueries:function(t,n,a){if(t&1&&L(a,Zt,5),t&2){let s;b(s=v())&&(n._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,n){t&2&&(He(n.color?"mat-"+n.color:""),f("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Gt,decls:2,vars:0,template:function(t,n){t&1&&(g(Wt),p(0),p(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return r})();var yt=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275mod=G({type:r});static \u0275inj=H({imports:[te]})}return r})();var Kt=()=>({exact:!0}),Ct=(()=>{class r{constructor(){this.themeService=i(_t),this.toggleSidenav=Qe()}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=m({type:r,selectors:[["app-header"]],outputs:{toggleSidenav:"toggleSidenav"},decls:22,vars:3,consts:[[1,"header"],["mat-icon-button","","aria-label","Open navigation menu",1,"header__hamburger",3,"click"],["routerLink","/",1,"header__brand"],[1,"header__logo"],[1,"header__title"],[1,"header__spacer"],[1,"header__nav"],["mat-button","","routerLink","/","routerLinkActive","active",3,"routerLinkActiveOptions"],["mat-button","","routerLink","/compare","routerLinkActive","active"],["mat-icon-button","","aria-label","Toggle theme",1,"header__theme-toggle",3,"click"],[1,"theme-icon"]],template:function(t,n){t&1&&(d(0,"mat-toolbar",0)(1,"button",1),_("click",function(){return n.toggleSidenav.emit()}),d(2,"mat-icon"),l(3,"menu"),c()(),d(4,"a",2)(5,"mat-icon",3),l(6,"show_chart"),c(),d(7,"span",4),l(8,"StockTracker"),c()(),j(9,"span",5),d(10,"nav",6)(11,"a",7)(12,"mat-icon"),l(13,"dashboard"),c(),l(14," Dashboard "),c(),d(15,"a",8)(16,"mat-icon"),l(17,"compare_arrows"),c(),l(18," Compare "),c()(),d(19,"button",9),_("click",function(){return n.themeService.toggle()}),d(20,"mat-icon",10),l(21),c()()()),t&2&&(u(11),Z("routerLinkActiveOptions",X(2,Kt)),u(10),Y(" ",n.themeService.isDark()?"light_mode":"dark_mode"," "))},dependencies:[J,ee,yt,wt,ft,ut,ht,re,ne],styles:[".header[_ngcontent-%COMP%]{position:sticky;top:0;z-index:100;gap:8px;box-shadow:var(--shadow-sm)}.header__brand[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;text-decoration:none;color:inherit}.header__logo[_ngcontent-%COMP%]{color:var(--mat-sys-primary);font-size:24px;width:24px;height:24px}.header__title[_ngcontent-%COMP%]{font-family:Geologica,sans-serif;font-weight:700;font-size:1.25rem;letter-spacing:-.02em}.header__spacer[_ngcontent-%COMP%]{flex:1}.header__theme-toggle[_ngcontent-%COMP%]   .theme-icon[_ngcontent-%COMP%]{transition:transform .3s ease}.header__hamburger[_ngcontent-%COMP%]{display:none;margin-right:-8px;margin-left:-8px}.header__theme-toggle[_ngcontent-%COMP%]:hover   .theme-icon[_ngcontent-%COMP%]{transform:rotate(30deg)}@media(max-width:600px){.header[_ngcontent-%COMP%]{justify-content:space-between}.header__brand[_ngcontent-%COMP%]{position:absolute;left:50%;transform:translate(-50%);pointer-events:auto}.header__spacer[_ngcontent-%COMP%]{display:none}.header__title[_ngcontent-%COMP%]{font-size:1.1rem}.header__nav[_ngcontent-%COMP%]{display:none}.header__hamburger[_ngcontent-%COMP%]{display:block}}"]})}}return r})();var xt=(()=>{class r{constructor(){this.year=new Date().getFullYear()}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=m({type:r,selectors:[["app-footer"]],decls:7,vars:1,consts:[[1,"footer"],[1,"footer__divider"]],template:function(t,n){t&1&&(U(0,"footer",0)(1,"span"),l(2,"Built with Angular & Material"),q(),U(3,"span",1),l(4,"\xB7"),q(),U(5,"span"),l(6),q()()),t&2&&(u(6),Y("\xA9 ",n.year," StockTracker"))},styles:[".footer[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:8px;padding:16px 24px;font-size:.8rem;color:var(--color-neutral);border-top:1px solid var(--mat-sys-outline-variant)}.footer__divider[_ngcontent-%COMP%]{opacity:.5}"]})}}return r})();var Yt=()=>({exact:!0}),Mt=(()=>{class r{static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=m({type:r,selectors:[["app-root"]],decls:24,vars:2,consts:[["sidenav",""],[1,"app-container"],["mode","over",1,"app-sidenav"],[3,"click"],[1,"sidenav-header"],[1,"sidenav-logo"],[1,"sidenav-title"],["mat-list-item","","routerLink","/","routerLinkActive","active",3,"routerLinkActiveOptions"],["matListItemIcon",""],["matListItemTitle",""],["mat-list-item","","routerLink","/compare","routerLinkActive","active"],[1,"app-shell"],[3,"toggleSidenav"],[1,"app-content"]],template:function(t,n){if(t&1){let a=z();d(0,"mat-sidenav-container",1)(1,"mat-sidenav",2,0)(3,"mat-nav-list",3),_("click",function(){C(a);let F=ue(2);return x(F.close())}),d(4,"div",4)(5,"mat-icon",5),l(6,"show_chart"),c(),d(7,"span",6),l(8,"StockTracker"),c()(),d(9,"a",7)(10,"mat-icon",8),l(11,"dashboard"),c(),d(12,"span",9),l(13,"Dashboard"),c()(),d(14,"a",10)(15,"mat-icon",8),l(16,"compare_arrows"),c(),d(17,"span",9),l(18,"Compare"),c()()()(),d(19,"mat-sidenav-content",11)(20,"app-header",12),_("toggleSidenav",function(){C(a);let F=ue(2);return x(F.toggle())}),c(),d(21,"main",13),j(22,"router-outlet"),c(),j(23,"app-footer"),c()()}t&2&&(u(9),Z("routerLinkActiveOptions",X(1,Yt)))},dependencies:[Xe,J,ee,vt,we,bt,ie,pt,mt,lt,ct,dt,re,ne,Ct,xt],styles:[".app-container[_ngcontent-%COMP%]{height:100vh;display:flex;flex-direction:column}.app-sidenav[_ngcontent-%COMP%]{width:260px;background-color:var(--mat-sys-surface);border-right:1px solid color-mix(in srgb,var(--mat-sys-outline) 15%,transparent)}.sidenav-header[_ngcontent-%COMP%]{padding:24px 16px;display:flex;align-items:center;gap:12px;border-bottom:1px solid color-mix(in srgb,var(--mat-sys-outline) 8%,transparent);margin-bottom:8px}.sidenav-logo[_ngcontent-%COMP%]{color:var(--mat-sys-primary);font-size:24px;width:24px;height:24px}.sidenav-title[_ngcontent-%COMP%]{font-family:Geologica,sans-serif;font-weight:700;font-size:1.15rem;letter-spacing:-.02em}.app-sidenav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background-color:color-mix(in srgb,var(--mat-sys-primary) 10%,transparent);color:var(--mat-sys-primary)!important}.app-shell[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100vh}.app-content[_ngcontent-%COMP%]{flex:1;padding:24px;max-width:1200px;margin:0 auto;width:100%;box-sizing:border-box}@media(max-width:600px){.app-content[_ngcontent-%COMP%]{padding:16px}}"]})}}return r})();var Xt="@",$t=(()=>{class r{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=i(P);loadingSchedulerFn=i(Jt,{optional:!0});_engine;constructor(e,t,n,a,s){this.doc=e,this.delegate=t,this.zone=n,this.animationType=a,this.moduleImpl=s}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-5VMDOKC3.js").then(n=>n),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(n=>{throw new Fe(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:a})=>{this._engine=n(this.animationType,this.doc);let s=new a(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(e,t){let n=this.delegate.createRenderer(e,t);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let a=new ye(n);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let F=s.createRenderer(e,t);a.use(F),this.scheduler??=this.injector.get(Ie,null,{optional:!0}),this.scheduler?.notify(10)}).catch(s=>{a.use(n)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){Le()};static \u0275prov=Ae({token:r,factory:r.\u0275fac})}return r})(),ye=class{delegate;replay=[];\u0275type=1;constructor(o){this.delegate=o}use(o){if(this.delegate=o,this.replay!==null){for(let e of this.replay)e(o);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(o,e){return this.delegate.createElement(o,e)}createComment(o){return this.delegate.createComment(o)}createText(o){return this.delegate.createText(o)}get destroyNode(){return this.delegate.destroyNode}appendChild(o,e){this.delegate.appendChild(o,e)}insertBefore(o,e,t,n){this.delegate.insertBefore(o,e,t,n)}removeChild(o,e,t,n){this.delegate.removeChild(o,e,t,n)}selectRootElement(o,e){return this.delegate.selectRootElement(o,e)}parentNode(o){return this.delegate.parentNode(o)}nextSibling(o){return this.delegate.nextSibling(o)}setAttribute(o,e,t,n){this.delegate.setAttribute(o,e,t,n)}removeAttribute(o,e,t){this.delegate.removeAttribute(o,e,t)}addClass(o,e){this.delegate.addClass(o,e)}removeClass(o,e){this.delegate.removeClass(o,e)}setStyle(o,e,t,n){this.delegate.setStyle(o,e,t,n)}removeStyle(o,e,t){this.delegate.removeStyle(o,e,t)}setProperty(o,e,t){this.shouldReplay(e)&&this.replay.push(n=>n.setProperty(o,e,t)),this.delegate.setProperty(o,e,t)}setValue(o,e){this.delegate.setValue(o,e)}listen(o,e,t,n){return this.shouldReplay(e)&&this.replay.push(a=>a.listen(o,e,t,n)),this.delegate.listen(o,e,t,n)}shouldReplay(o){return this.replay!==null&&o.startsWith(Xt)}},Jt=new R("");function kt(r="animations"){return je("NgAsyncAnimations"),Re([{provide:ze,useFactory:()=>new $t(i(M),i(Ge),i(k),r)},{provide:Be,useValue:r==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Dt=[{path:"",loadChildren:()=>import("./chunk-VPQBUCYM.js").then(r=>r.DASHBOARD_ROUTES)},{path:"stock/:symbol",loadChildren:()=>import("./chunk-VZOLCBQW.js").then(r=>r.STOCK_DETAIL_ROUTES)},{path:"compare",loadChildren:()=>import("./chunk-J25EUPNG.js").then(r=>r.COMPARISON_ROUTES)},{path:"**",redirectTo:""}];var St=(r,o)=>{let e=i(gt);return o(r).pipe(Ee({count:2,delay:(t,n)=>t instanceof qe&&(t.status===429||t.status>=500)?xe(n*1e3):se(()=>t)}),ke(t=>{let n="An unexpected error occurred";return t.status===0?n="Network error \u2014 please check your internet connection":t.status===401?n="Invalid API key \u2014 please check your Finnhub configuration":t.status===429?n="Rate limit exceeded \u2014 please wait a moment and try again":t.status>=500&&(n="Server error \u2014 Finnhub may be experiencing issues"),e.error(n),se(()=>t)}))};var Et=new Map,en={"/quote":6e4,"/stock/profile2":3e5,"/company-news":3e5,"/stock/insider-sentiment":3e5,"/search":12e4,"/time_series":3e5};function tn(r){for(let[o,e]of Object.entries(en))if(r.includes(o))return e;return 6e4}var Tt=(r,o)=>{if(r.method!=="GET")return o(r);let e=r.urlWithParams,t=Et.get(e);return t&&t.expiry>Date.now()?Ce(t.response.clone()):o(r).pipe(Te(n=>{n instanceof Ue&&n.status===200&&Et.set(e,{response:n.clone(),expiry:Date.now()+tn(r.url)})}))};var Ft={providers:[We({eventCoalescing:!0}),$e(Dt,Je()),Ke(Ye([St,Tt])),kt()]};Ze(Mt,Ft).catch(r=>console.error(r));
