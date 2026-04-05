import{E as U,G as Rt,H as Dt,K as At,N as F,O as Mt,Q,R as v,_ as Bt,b as Pt,ka as J,la as tt,ma as Tt,na as It,pa as et,u as D,v as $,w as q,y as Et}from"./chunk-ZKTY6L43.js";import{$a as ut,Ab as I,Bb as R,Bc as xt,Cb as wt,Ea as _t,Jb as St,Nb as H,Ob as z,S as ht,Sb as Ct,Ta as x,Tb as j,Ub as Z,X as u,Ya as w,Za as W,_ as O,_a as T,_b as Ot,a as f,aa as a,ac as G,b as at,cc as K,da as dt,e as lt,fa as pt,ga as ft,gb as P,i as p,ib as E,ja as y,ka as b,kb as mt,lb as gt,o as ct,oa as k,rb as vt,tb as yt,ub as bt,vb as kt,wa as X,ya as N}from"./chunk-XJN2IBSM.js";var V=class{enable(){}disable(){}attach(){}};var S=class{positionStrategy;scrollStrategy=new V;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let t=Object.keys(i);for(let e of t)i[e]!==void 0&&(this[e]=i[e])}}};var Yt=(()=>{class n{_attachedOverlays=[];_document=a(b);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let e=this._attachedOverlays.indexOf(t);e>-1&&this._attachedOverlays.splice(e,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,e,s){return s.observers.length<1?!1:t.eventPredicate?t.eventPredicate(e):!0}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Xt=(()=>{class n extends Yt{_ngZone=a(k);_renderer=a(T).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let e=this._attachedOverlays;for(let s=e.length-1;s>-1;s--){let o=e[s];if(this.canReceiveEvent(o,t,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(t));break}}};static \u0275fac=(()=>{let t;return function(s){return(t||(t=X(n)))(s||n)}})();static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Nt=(()=>{class n extends Yt{_platform=a(D);_ngZone=a(k);_renderer=a(T).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let e=this._document.body,s={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(e,"pointerdown",this._pointerDownListener,s),o.listen(e,"click",this._clickListener,s),o.listen(e,"auxclick",this._clickListener,s),o.listen(e,"contextmenu",this._clickListener,s)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=e.style.cursor,e.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=$(t)};_clickListener=t=>{let e=$(t),s=t.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:e;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let r=o.length-1;r>-1;r--){let l=o[r],c=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,t,c))){if(Ft(l.overlayElement,e)||Ft(l.overlayElement,s))break;this._ngZone?this._ngZone.run(()=>c.next(t)):c.next(t)}}};static \u0275fac=(()=>{let t;return function(s){return(t||(t=X(n)))(s||n)}})();static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ft(n,i){let t=typeof ShadowRoot<"u"&&ShadowRoot,e=i;for(;e;){if(e===n)return!0;e=t&&e instanceof ShadowRoot?e.host:e.parentNode}return!1}var Wt=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=P({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(e,s){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),qt=(()=>{class n{_platform=a(D);_containerElement;_document=a(b);_styleLoader=a(U);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t="cdk-overlay-container";if(this._platform.isBrowser||q()){let s=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let o=0;o<s.length;o++)s[o].remove()}let e=this._document.createElement("div");e.classList.add(t),q()?e.setAttribute("platform","test"):this._platform.isBrowser||e.setAttribute("platform","server"),this._document.body.appendChild(e),this._containerElement=e}_loadStyles(){this._styleLoader.load(Wt)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),it=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,t,e,s){this._renderer=t,this._ngZone=e,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=t.listen(this.element,"click",s)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Ht(n){return n&&n.nodeType===1}var L=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new p;_attachments=new p;_detachments=new p;_positionStrategy;_scrollStrategy;_locationChanges=lt.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new p;_outsidePointerEvents=new p;_afterNextRenderRef;constructor(i,t,e,s,o,r,l,c,m,h=!1,d,_){this._portalOutlet=i,this._host=t,this._pane=e,this._config=s,this._ngZone=o,this._keyboardDispatcher=r,this._document=l,this._location=c,this._outsideClickDispatcher=m,this._animationsDisabled=h,this._injector=d,this._renderer=_,s.scrollStrategy&&(this._scrollStrategy=s.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=s.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=w(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy=="function"&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=f(f({},this._config),i),this._updateElementSize()}setDirection(i){this._config=at(f({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=v(this._config.width),i.height=v(this._config.height),i.minWidth=v(this._config.minWidth),i.minHeight=v(this._config.minHeight),i.maxWidth=v(this._config.maxWidth),i.maxHeight=v(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Ht(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(i){}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new it(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,t,e){let s=Rt(t||[]).filter(o=>!!o);s.length&&(e?i.classList.add(...s):i.classList.remove(...s))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=w(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(t){if(i)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}};var Vt="cdk-global-overlay-wrapper";function nt(n){return new Y}var Y=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let t=i.getConfig();this._overlayRef=i,this._width&&!t.width&&i.updateSize({width:this._width}),this._height&&!t.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(Vt),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,e=this._overlayRef.getConfig(),{width:s,height:o,maxWidth:r,maxHeight:l}=e,c=(s==="100%"||s==="100vw")&&(!r||r==="100%"||r==="100vw"),m=(o==="100%"||o==="100vh")&&(!l||l==="100%"||l==="100vh"),h=this._xPosition,d=this._xOffset,_=this._overlayRef.getConfig().direction==="rtl",M="",B="",g="";c?g="flex-start":h==="center"?(g="center",_?B=d:M=d):_?h==="left"||h==="end"?(g="flex-end",M=d):(h==="right"||h==="start")&&(g="flex-start",B=d):h==="left"||h==="start"?(g="flex-start",M=d):(h==="right"||h==="end")&&(g="flex-end",B=d),i.position=this._cssPosition,i.marginLeft=c?"0":M,i.marginTop=m?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=c?"0":B,t.justifyContent=g,t.alignItems=m?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,e=t.style;t.classList.remove(Vt),e.justifyContent=e.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}};var zt=new O("OVERLAY_DEFAULT_CONFIG");function st(n,i){n.get(U).load(Wt);let t=n.get(qt),e=n.get(b),s=n.get(F),o=n.get(vt),r=n.get(Et),l=n.get(ut,null,{optional:!0})||n.get(T).createRenderer(null,null),c=new S(i),m=n.get(zt,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||r.value,"showPopover"in e.body?c.usePopover=i?.usePopover??m:c.usePopover=!1;let h=e.createElement("div"),d=e.createElement("div");h.id=s.getId("cdk-overlay-"),h.classList.add("cdk-overlay-pane"),d.appendChild(h),c.usePopover&&(d.setAttribute("popover","manual"),d.classList.add("cdk-overlay-popover"));let _=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return Ht(_)?_.after(d):_?.type==="parent"?_.element.appendChild(d):t.getContainerElement().appendChild(d),new L(new It(h,o,n),d,h,c,n.get(k),n.get(Xt),e,n.get(Pt),n.get(Nt),i?.disableAnimations??n.get(_t,null,{optional:!0})==="NoopAnimations",n.get(dt),l)}function Qt(n,i){if(n&1){let t=St();I(0,"div",1)(1,"button",2),H("click",function(){pt(t);let s=z();return ft(s.action())}),G(2),R()()}if(n&2){let t=z();x(2),K(" ",t.data.action," ")}}var Jt=["label"];function te(n,i){}var ee=Math.pow(2,31)-1,A=class{_overlayRef;instance;containerInstance;_afterDismissed=new p;_afterOpened=new p;_onAction=new p;_durationTimeoutId;_dismissedByAction=!1;constructor(i,t){this._overlayRef=t,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,ee))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},jt=new O("MatSnackBarData"),C=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},ie=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=E({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),ne=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=E({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),se=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=E({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),oe=(()=>{class n{snackBarRef=a(A);data=a(jt);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=P({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(e,s){e&1&&(I(0,"div",0),G(1),R(),bt(2,Qt,3,1,"div",1)),e&2&&(x(),K(" ",s.data.message,`
`),x(),kt(s.hasAction?2:-1))},dependencies:[Bt,ie,ne,se],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),ot="_mat-snack-bar-enter",rt="_mat-snack-bar-exit",re=(()=>{class n extends Tt{_ngZone=a(k);_elementRef=a(N);_changeDetectorRef=a(xt);_platform=a(D);_animationsDisabled=Q();snackBarConfig=a(C);_document=a(b);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=a(y);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new p;_onExit=new p;_onEnter=new p;_animationState="void";_live;_label;_role;_liveElementId=a(F).getId("mat-snack-bar-container-live-");constructor(){super();let t=this.snackBarConfig;t.politeness==="assertive"&&!t.announcementMessage?this._live="assertive":t.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(t){this._assertNotAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),e}attachTemplatePortal(t){this._assertNotAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),e}attachDomPortal=t=>{this._assertNotAttached();let e=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),e};onAnimationEnd(t){t===rt?this._completeExit():t===ot&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?w(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(ot)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(ot)},200)))}exit(){return this._destroyed?ct(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?w(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(rt)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(rt),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(r=>t.classList.add(r)):t.classList.add(e)),this._exposeToModals();let s=this._label.nativeElement,o="mdc-snackbar__label";s.classList.toggle(o,!s.querySelector(`.${o}`))}_exposeToModals(){let t=this._liveElementId,e=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let s=0;s<e.length;s++){let o=e[s],r=o.getAttribute("aria-owns");this._trackedModals.add(o),r?r.indexOf(t)===-1&&o.setAttribute("aria-owns",r+" "+t):o.setAttribute("aria-owns",t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let e=t.getAttribute("aria-owns");if(e){let s=e.replace(this._liveElementId,"").trim();s.length>0?t.setAttribute("aria-owns",s):t.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,e=t.querySelector("[aria-hidden]"),s=t.querySelector("[aria-live]");if(e&&s){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&(o=document.activeElement),e.removeAttribute("aria-hidden"),s.appendChild(e),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=P({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(e,s){if(e&1&&Ct(et,7)(Jt,7),e&2){let o;j(o=Z())&&(s._portalOutlet=o.first),j(o=Z())&&(s._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(e,s){e&1&&H("animationend",function(r){return s.onAnimationEnd(r.animationName)})("animationcancel",function(r){return s.onAnimationEnd(r.animationName)}),e&2&&Ot("mat-snack-bar-container-enter",s._animationState==="visible")("mat-snack-bar-container-exit",s._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!s._animationsDisabled)},features:[mt],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(e,s){e&1&&(I(0,"div",1)(1,"div",2,0)(3,"div",3),gt(4,te,0,0,"ng-template",4),R(),wt(5,"div"),R()()),e&2&&(x(5),yt("aria-live",s._live)("role",s._role)("id",s._liveElementId))},dependencies:[et],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return n})(),ae=new O("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new C}),Zt=(()=>{class n{_live=a(At);_injector=a(y);_breakpointObserver=a(Dt);_parentSnackBar=a(n,{optional:!0,skipSelf:!0});_defaultConfig=a(ae);_animationsDisabled=Q();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=oe;snackBarContainerComponent=re;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}constructor(){}openFromComponent(t,e){return this._attach(t,e)}openFromTemplate(t,e){return this._attach(t,e)}open(t,e="",s){let o=f(f({},this._defaultConfig),s);return o.data={message:t,action:e},o.announcementMessage===t&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,e){let s=e&&e.viewContainerRef&&e.viewContainerRef.injector,o=y.create({parent:s||this._injector,providers:[{provide:C,useValue:e}]}),r=new J(this.snackBarContainerComponent,e.viewContainerRef,o),l=t.attach(r);return l.instance.snackBarConfig=e,l.instance}_attach(t,e){let s=f(f(f({},new C),this._defaultConfig),e),o=this._createOverlay(s),r=this._attachSnackBarContainer(o,s),l=new A(r,o);if(t instanceof W){let c=new tt(t,null,{$implicit:s.data,snackBarRef:l});l.instance=r.attachTemplatePortal(c)}else{let c=this._createInjector(s,l),m=new J(t,void 0,c),h=r.attachComponentPortal(m);l.instance=h.instance}return this._breakpointObserver.observe(Mt.HandsetPortrait).pipe(ht(o.detachments())).subscribe(c=>{o.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),s.announcementMessage&&r._onAnnounce.subscribe(()=>{this._live.announce(s.announcementMessage,s.politeness)}),this._animateSnackBar(l,s),this._openedSnackBarRef=l,this._openedSnackBarRef}_animateSnackBar(t,e){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),e.announcementMessage&&this._live.clear()}),e.duration&&e.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(e.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let e=new S;e.direction=t.direction;let s=nt(this._injector),o=t.direction==="rtl",r=t.horizontalPosition==="left"||t.horizontalPosition==="start"&&!o||t.horizontalPosition==="end"&&o,l=!r&&t.horizontalPosition!=="center";return r?s.left("0"):l?s.right("0"):s.centerHorizontally(),t.verticalPosition==="top"?s.top("0"):s.bottom("0"),e.positionStrategy=s,e.disableAnimations=this._animationsDisabled,st(this._injector,e)}_createInjector(t,e){let s=t&&t.viewContainerRef&&t.viewContainerRef.injector;return y.create({parent:s||this._injector,providers:[{provide:A,useValue:e},{provide:jt,useValue:t.data}]})}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Pi=(()=>{class n{constructor(){this.snackBar=a(Zt)}success(t){this.snackBar.open(t,"Close",{duration:3e3,panelClass:["snackbar-success"],horizontalPosition:"end",verticalPosition:"bottom"})}error(t){this.snackBar.open(t,"Close",{duration:5e3,panelClass:["snackbar-error"],horizontalPosition:"end",verticalPosition:"bottom"})}warning(t){this.snackBar.open(t,"Close",{duration:4e3,panelClass:["snackbar-warning"],horizontalPosition:"end",verticalPosition:"bottom"})}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();export{Pi as a};
