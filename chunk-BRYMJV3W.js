import{a as ct,c as j,f as Bt}from"./chunk-MZMX3Y5J.js";import{A as st,E as Mt,G as _e,I as M,J as It,K as ye,L as xe,N as we,Y as ke,k as q,l as ue,n as K,q as be,v as fe}from"./chunk-4NKEEFMH.js";import{A as ge,f as pe,r as R,u as At,v as ve,w as lt,x as p}from"./chunk-BNDIVZLC.js";import{$ as l,Bb as ot,Cb as $,Da as Jt,Db as ie,Eb as oe,Ec as de,Fb as re,Gb as z,Hc as L,Ic as me,Kb as se,Kc as he,Ob as St,Qb as Et,R as qt,Rb as rt,Sa as U,Sb as N,Ub as le,Vb as Ot,W as f,Wb as Rt,X as P,Xa as T,Ya as G,Z as D,Za as F,_a as nt,a as xt,ac as V,bb as at,bc as ce,ca as et,cb as Ct,cc as Pt,e as b,ea as Kt,ec as Dt,fa as Qt,fb as E,gb as A,hb as C,ia as g,ja as y,jb as O,kb as te,l as Gt,ma as wt,na as x,qb as ee,ub as it,va as kt,vb as ne,wb as ae,xa as S,y as $t}from"./chunk-VMM3RXYE.js";import{a as k,b as Ut}from"./chunk-4CLCTAJ7.js";var Q=class{_attachedHost=null;attach(e){return this._attachedHost=e,e.attach(this)}detach(){let e=this._attachedHost;e!=null&&(this._attachedHost=null,e.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(e){this._attachedHost=e}},Y=class extends Q{component;viewContainerRef;injector;projectableNodes;bindings;constructor(e,t,n,i,o){super(),this.component=e,this.viewContainerRef=t,this.injector=n,this.projectableNodes=i,this.bindings=o||null}},B=class extends Q{templateRef;viewContainerRef;context;injector;constructor(e,t,n,i){super(),this.templateRef=e,this.viewContainerRef=t,this.context=n,this.injector=i}get origin(){return this.templateRef.elementRef}attach(e,t=this.context){return this.context=t,super.attach(e)}detach(){return this.context=void 0,super.detach()}},Tt=class extends Q{element;constructor(e){super(),this.element=e instanceof S?e.nativeElement:e}},X=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(e){if(e instanceof Y)return this._attachedPortal=e,this.attachComponentPortal(e);if(e instanceof B)return this._attachedPortal=e,this.attachTemplatePortal(e);if(this.attachDomPortal&&e instanceof Tt)return this._attachedPortal=e,this.attachDomPortal(e)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(e){this._disposeFn=e}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},dt=class extends X{outletElement;_appRef;_defaultInjector;constructor(e,t,n){super(),this.outletElement=e,this._appRef=t,this._defaultInjector=n}attachComponentPortal(e){let t;if(e.viewContainerRef){let n=e.injector||e.viewContainerRef.injector,i=n.get(Ct,null,{optional:!0})||void 0;t=e.viewContainerRef.createComponent(e.component,{index:e.viewContainerRef.length,injector:n,ngModuleRef:i,projectableNodes:e.projectableNodes||void 0,bindings:e.bindings||void 0}),this.setDisposeFn(()=>t.destroy())}else{let n=this._appRef,i=e.injector||this._defaultInjector||g.NULL,o=i.get(et,n.injector);t=he(e.component,{elementInjector:i,environmentInjector:o,projectableNodes:e.projectableNodes||void 0,bindings:e.bindings||void 0}),n.attachView(t.hostView),this.setDisposeFn(()=>{n.viewCount>0&&n.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=e,t}attachTemplatePortal(e){let t=e.viewContainerRef,n=t.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return n.rootNodes.forEach(i=>this.outletElement.appendChild(i)),n.detectChanges(),this.setDisposeFn(()=>{let i=t.indexOf(n);i!==-1&&t.remove(i)}),this._attachedPortal=e,n}attachDomPortal=e=>{let t=e.element;t.parentNode;let n=this.outletElement.ownerDocument.createComment("dom-portal");t.parentNode.insertBefore(n,t),this.outletElement.appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(t,n)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(e){return e.hostView.rootNodes[0]}},On=(()=>{class a extends B{constructor(){let t=l(G),n=l(at);super(t,n)}static \u0275fac=function(n){return new(n||a)};static \u0275dir=C({type:a,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[O]})}return a})(),Ft=(()=>{class a extends X{_moduleRef=l(Ct,{optional:!0});_document=l(y);_viewContainerRef=l(at);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new wt;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let n=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,i=n.createComponent(t.component,{index:n.length,injector:t.injector||n.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:t.bindings||void 0});return n!==this._viewContainerRef&&this._getRootNode().appendChild(i.hostView.rootNodes[0]),super.setDisposeFn(()=>i.destroy()),this._attachedPortal=t,this._attachedRef=i,this.attached.emit(i),i}attachTemplatePortal(t){t.setAttachedHost(this);let n=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=n,this.attached.emit(n),n}attachDomPortal=t=>{let n=t.element;n.parentNode;let i=this._document.createComment("dom-portal");t.setAttachedHost(this),n.parentNode.insertBefore(i,n),this._getRootNode().appendChild(n),this._attachedPortal=t,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(n,i)})};_getRootNode(){let t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}static \u0275fac=function(n){return new(n||a)};static \u0275dir=C({type:a,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[O]})}return a})(),zt=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=A({type:a});static \u0275inj=P({})}return a})();var Ce=ge();function Ae(a){return new mt(a.get(j),a.get(y))}var mt=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(e,t){this._viewportRuler=e,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let e=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=e.style.left||"",this._previousHTMLStyles.top=e.style.top||"",e.style.left=p(-this._previousScrollPosition.left),e.style.top=p(-this._previousScrollPosition.top),e.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let e=this._document.documentElement,t=this._document.body,n=e.style,i=t.style,o=n.scrollBehavior||"",r=i.scrollBehavior||"";this._isEnabled=!1,n.left=this._previousHTMLStyles.left,n.top=this._previousHTMLStyles.top,e.classList.remove("cdk-global-scrollblock"),Ce&&(n.scrollBehavior=i.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Ce&&(n.scrollBehavior=o,i.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let t=this._document.documentElement,n=this._viewportRuler.getViewportSize();return t.scrollHeight>n.height||t.scrollWidth>n.width}};function Me(a,e){return new ht(a.get(ct),a.get(x),a.get(j),e)}var ht=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(e,t,n,i){this._scrollDispatcher=e,this._ngZone=t,this._viewportRuler=n,this._config=i}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(this._scrollSubscription)return;let e=this._scrollDispatcher.scrolled(0).pipe($t(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=e.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=e.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var J=class{enable(){}disable(){}attach(){}};function Nt(a,e){return e.some(t=>{let n=a.bottom<t.top,i=a.top>t.bottom,o=a.right<t.left,r=a.left>t.right;return n||i||o||r})}function Se(a,e){return e.some(t=>{let n=a.top<t.top,i=a.bottom>t.bottom,o=a.left<t.left,r=a.right>t.right;return n||i||o||r})}function Be(a,e){return new pt(a.get(ct),a.get(j),a.get(x),e)}var pt=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(e,t,n,i){this._scrollDispatcher=e,this._viewportRuler=t,this._ngZone=n,this._config=i}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(!this._scrollSubscription){let e=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(e).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:n,height:i}=this._viewportRuler.getViewportSize();Nt(t,[{width:n,height:i,bottom:i,right:n,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Ie=(()=>{class a{_injector=l(g);constructor(){}noop=()=>new J;close=t=>Me(this._injector,t);block=()=>Ae(this._injector);reposition=t=>Be(this._injector,t);static \u0275fac=function(n){return new(n||a)};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),W=class{positionStrategy;scrollStrategy=new J;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(e){if(e){let t=Object.keys(e);for(let n of t)e[n]!==void 0&&(this[n]=e[n])}}};var ut=class{connectionPair;scrollableViewProperties;constructor(e,t){this.connectionPair=e,this.scrollableViewProperties=t}};var Te=(()=>{class a{_attachedOverlays=[];_document=l(y);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let n=this._attachedOverlays.indexOf(t);n>-1&&this._attachedOverlays.splice(n,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,n,i){return i.observers.length<1?!1:t.eventPredicate?t.eventPredicate(n):!0}static \u0275fac=function(n){return new(n||a)};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),Fe=(()=>{class a extends Te{_ngZone=l(x);_renderer=l(F).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let n=this._attachedOverlays;for(let i=n.length-1;i>-1;i--){let o=n[i];if(this.canReceiveEvent(o,t,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(t));break}}};static \u0275fac=(()=>{let t;return function(i){return(t||(t=kt(a)))(i||a)}})();static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),ze=(()=>{class a extends Te{_platform=l(R);_ngZone=l(x);_renderer=l(F).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let n=this._document.body,i={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(n,"pointerdown",this._pointerDownListener,i),o.listen(n,"click",this._clickListener,i),o.listen(n,"auxclick",this._clickListener,i),o.listen(n,"contextmenu",this._clickListener,i)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=n.style.cursor,n.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=q(t)};_clickListener=t=>{let n=q(t),i=t.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:n;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let r=o.length-1;r>-1;r--){let s=o[r],c=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,t,c))){if(Ee(s.overlayElement,n)||Ee(s.overlayElement,i))break;this._ngZone?this._ngZone.run(()=>c.next(t)):c.next(t)}}};static \u0275fac=(()=>{let t;return function(i){return(t||(t=kt(a)))(i||a)}})();static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function Ee(a,e){let t=typeof ShadowRoot<"u"&&ShadowRoot,n=e;for(;n;){if(n===a)return!0;n=t&&n instanceof ShadowRoot?n.host:n.parentNode}return!1}var Ne=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275cmp=E({type:a,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(n,i){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return a})(),Ve=(()=>{class a{_platform=l(R);_containerElement;_document=l(y);_styleLoader=l(K);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t="cdk-overlay-container";if(this._platform.isBrowser||Mt()){let i=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let o=0;o<i.length;o++)i[o].remove()}let n=this._document.createElement("div");n.classList.add(t),Mt()?n.setAttribute("platform","test"):this._platform.isBrowser||n.setAttribute("platform","server"),this._document.body.appendChild(n),this._containerElement=n}_loadStyles(){this._styleLoader.load(Ne)}static \u0275fac=function(n){return new(n||a)};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),Vt=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(e,t,n,i){this._renderer=t,this._ngZone=n,this.element=e.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=t.listen(this.element,"click",i)}detach(){this._ngZone.runOutsideAngular(()=>{let e=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),e.style.pointerEvents="none",e.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Lt(a){return a&&a.nodeType===1}var bt=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new b;_attachments=new b;_detachments=new b;_positionStrategy;_scrollStrategy;_locationChanges=xt.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new b;_outsidePointerEvents=new b;_afterNextRenderRef;constructor(e,t,n,i,o,r,s,c,m,d=!1,h,u){this._portalOutlet=e,this._host=t,this._pane=n,this._config=i,this._ngZone=o,this._keyboardDispatcher=r,this._document=s,this._location=c,this._outsideClickDispatcher=m,this._animationsDisabled=d,this._injector=h,this._renderer=u,i.scrollStrategy&&(this._scrollStrategy=i.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=i.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(e){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(e);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=T(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy=="function"&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let e=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),e}dispose(){if(this._disposed)return;let e=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,e&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(e){e!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=e,this.hasAttached()&&(e.attach(this),this.updatePosition()))}updateSize(e){this._config=k(k({},this._config),e),this._updateElementSize()}setDirection(e){this._config=Ut(k({},this._config),{direction:e}),this._updateElementDirection()}addPanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!0)}removePanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!1)}getDirection(){let e=this._config.direction;return e?typeof e=="string"?e:e.value:"ltr"}updateScrollStrategy(e){e!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=e,this.hasAttached()&&(e.attach(this),e.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let e=this._pane.style;e.width=p(this._config.width),e.height=p(this._config.height),e.minWidth=p(this._config.minWidth),e.minHeight=p(this._config.minHeight),e.maxWidth=p(this._config.maxWidth),e.maxHeight=p(this._config.maxHeight)}_togglePointerEvents(e){this._pane.style.pointerEvents=e?"":"none"}_attachHost(){if(!this._host.parentElement){let e=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Lt(e)?e.after(this._host):e?.type==="parent"?e.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(e){}}_attachBackdrop(){let e="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Vt(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(e))}):this._backdropRef.element.classList.add(e)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(e,t,n){let i=At(t||[]).filter(o=>!!o);i.length&&(n?e.classList.add(...i):e.classList.remove(...i))}_detachContentWhenEmpty(){let e=!1;try{this._detachContentAfterRenderRef=T(()=>{e=!0,this._detachContent()},{injector:this._injector})}catch(t){if(e)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let e=this._scrollStrategy;e?.disable(),e?.detach?.()}},Oe="cdk-overlay-connected-position-bounding-box",Qe=/([A-Za-z%]+)$/;function Le(a,e){return new ft(e,a.get(j),a.get(y),a.get(R),a.get(Ve))}var ft=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new b;_resizeSubscription=xt.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(e,t,n,i,o){this._viewportRuler=t,this._document=n,this._platform=i,this._overlayContainer=o,this.setOrigin(e)}attach(e){this._overlayRef&&this._overlayRef,this._validatePositions(),e.hostElement.classList.add(Oe),this._overlayRef=e,this._boundingBox=e.hostElement,this._pane=e.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let e=this._originRect,t=this._overlayRect,n=this._viewportRect,i=this._containerRect,o=[],r;for(let s of this._preferredPositions){let c=this._getOriginPoint(e,i,s),m=this._getOverlayPoint(c,t,s),d=this._getOverlayFit(m,t,n,s);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,c);return}if(this._canFitWithFlexibleDimensions(d,m,n)){o.push({position:s,origin:c,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(c,s)});continue}(!r||r.overlayFit.visibleArea<d.visibleArea)&&(r={overlayFit:d,overlayPoint:m,originPoint:c,position:s,overlayRect:t})}if(o.length){let s=null,c=-1;for(let m of o){let d=m.boundingBoxRect.width*m.boundingBoxRect.height*(m.position.weight||1);d>c&&(c=d,s=m)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&I(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Oe),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let e=this._lastPosition;e?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(e,this._getOriginPoint(this._originRect,this._containerRect,e))):this.apply()}withScrollableContainers(e){return this._scrollables=e,this}withPositions(e){return this._preferredPositions=e,e.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(e){return this._viewportMargin=e,this}withFlexibleDimensions(e=!0){return this._hasFlexibleDimensions=e,this}withGrowAfterOpen(e=!0){return this._growAfterOpen=e,this}withPush(e=!0){return this._canPush=e,this}withLockedPosition(e=!0){return this._positionLocked=e,this}setOrigin(e){return this._origin=e,this}withDefaultOffsetX(e){return this._offsetX=e,this}withDefaultOffsetY(e){return this._offsetY=e,this}withTransformOriginOn(e){return this._transformOriginSelector=e,this}withPopoverLocation(e){return this._popoverLocation=e,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof S?this._origin.nativeElement:Lt(this._origin)?this._origin:null}_getOriginPoint(e,t,n){let i;if(n.originX=="center")i=e.left+e.width/2;else{let r=this._isRtl()?e.right:e.left,s=this._isRtl()?e.left:e.right;i=n.originX=="start"?r:s}t.left<0&&(i-=t.left);let o;return n.originY=="center"?o=e.top+e.height/2:o=n.originY=="top"?e.top:e.bottom,t.top<0&&(o-=t.top),{x:i,y:o}}_getOverlayPoint(e,t,n){let i;n.overlayX=="center"?i=-t.width/2:n.overlayX==="start"?i=this._isRtl()?-t.width:0:i=this._isRtl()?0:-t.width;let o;return n.overlayY=="center"?o=-t.height/2:o=n.overlayY=="top"?0:-t.height,{x:e.x+i,y:e.y+o}}_getOverlayFit(e,t,n,i){let o=Pe(t),{x:r,y:s}=e,c=this._getOffset(i,"x"),m=this._getOffset(i,"y");c&&(r+=c),m&&(s+=m);let d=0-r,h=r+o.width-n.width,u=0-s,_=s+o.height-n.height,v=this._subtractOverflows(o.width,d,h),w=this._subtractOverflows(o.height,u,_),Zt=v*w;return{visibleArea:Zt,isCompletelyWithinViewport:o.width*o.height===Zt,fitsInViewportVertically:w===o.height,fitsInViewportHorizontally:v==o.width}}_canFitWithFlexibleDimensions(e,t,n){if(this._hasFlexibleDimensions){let i=n.bottom-t.y,o=n.right-t.x,r=Re(this._overlayRef.getConfig().minHeight),s=Re(this._overlayRef.getConfig().minWidth),c=e.fitsInViewportVertically||r!=null&&r<=i,m=e.fitsInViewportHorizontally||s!=null&&s<=o;return c&&m}return!1}_pushOverlayOnScreen(e,t,n){if(this._previousPushAmount&&this._positionLocked)return{x:e.x+this._previousPushAmount.x,y:e.y+this._previousPushAmount.y};let i=Pe(t),o=this._viewportRect,r=Math.max(e.x+i.width-o.width,0),s=Math.max(e.y+i.height-o.height,0),c=Math.max(o.top-n.top-e.y,0),m=Math.max(o.left-n.left-e.x,0),d=0,h=0;return i.width<=o.width?d=m||-r:d=e.x<this._getViewportMarginStart()?o.left-n.left-e.x:0,i.height<=o.height?h=c||-s:h=e.y<this._getViewportMarginTop()?o.top-n.top-e.y:0,this._previousPushAmount={x:d,y:h},{x:e.x+d,y:e.y+h}}_applyPosition(e,t){if(this._setTransformOrigin(e),this._setOverlayElementStyles(t,e),this._setBoundingBoxStyles(t,e),e.panelClass&&this._addPanelClasses(e.panelClass),this._positionChanges.observers.length){let n=this._getScrollVisibility();if(e!==this._lastPosition||!this._lastScrollVisibility||!Je(this._lastScrollVisibility,n)){let i=new ut(e,n);this._positionChanges.next(i)}this._lastScrollVisibility=n}this._lastPosition=e,this._isInitialRender=!1}_setTransformOrigin(e){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),n,i=e.overlayY;e.overlayX==="center"?n="center":this._isRtl()?n=e.overlayX==="start"?"right":"left":n=e.overlayX==="start"?"left":"right";for(let o=0;o<t.length;o++)t[o].style.transformOrigin=`${n} ${i}`}_calculateBoundingBoxRect(e,t){let n=this._viewportRect,i=this._isRtl(),o,r,s;if(t.overlayY==="top")r=e.y,o=n.height-r+this._getViewportMarginBottom();else if(t.overlayY==="bottom")s=n.height-e.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=n.height-s+this._getViewportMarginTop();else{let _=Math.min(n.bottom-e.y+n.top,e.y),v=this._lastBoundingBoxSize.height;o=_*2,r=e.y-_,o>v&&!this._isInitialRender&&!this._growAfterOpen&&(r=e.y-v/2)}let c=t.overlayX==="start"&&!i||t.overlayX==="end"&&i,m=t.overlayX==="end"&&!i||t.overlayX==="start"&&i,d,h,u;if(m)u=n.width-e.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=e.x-this._getViewportMarginStart();else if(c)h=e.x,d=n.right-e.x-this._getViewportMarginEnd();else{let _=Math.min(n.right-e.x+n.left,e.x),v=this._lastBoundingBoxSize.width;d=_*2,h=e.x-_,d>v&&!this._isInitialRender&&!this._growAfterOpen&&(h=e.x-v/2)}return{top:r,left:h,bottom:s,right:u,width:d,height:o}}_setBoundingBoxStyles(e,t){let n=this._calculateBoundingBoxRect(e,t);!this._isInitialRender&&!this._growAfterOpen&&(n.height=Math.min(n.height,this._lastBoundingBoxSize.height),n.width=Math.min(n.width,this._lastBoundingBoxSize.width));let i={};if(this._hasExactPosition())i.top=i.left="0",i.bottom=i.right="auto",i.maxHeight=i.maxWidth="",i.width=i.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;i.width=p(n.width),i.height=p(n.height),i.top=p(n.top)||"auto",i.bottom=p(n.bottom)||"auto",i.left=p(n.left)||"auto",i.right=p(n.right)||"auto",t.overlayX==="center"?i.alignItems="center":i.alignItems=t.overlayX==="end"?"flex-end":"flex-start",t.overlayY==="center"?i.justifyContent="center":i.justifyContent=t.overlayY==="bottom"?"flex-end":"flex-start",o&&(i.maxHeight=p(o)),r&&(i.maxWidth=p(r))}this._lastBoundingBoxSize=n,I(this._boundingBox.style,i)}_resetBoundingBoxStyles(){I(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){I(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(e,t){let n={},i=this._hasExactPosition(),o=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(i){let d=this._viewportRuler.getViewportScrollPosition();I(n,this._getExactOverlayY(t,e,d)),I(n,this._getExactOverlayX(t,e,d))}else n.position="static";let s="",c=this._getOffset(t,"x"),m=this._getOffset(t,"y");c&&(s+=`translateX(${c}px) `),m&&(s+=`translateY(${m}px)`),n.transform=s.trim(),r.maxHeight&&(i?n.maxHeight=p(r.maxHeight):o&&(n.maxHeight="")),r.maxWidth&&(i?n.maxWidth=p(r.maxWidth):o&&(n.maxWidth="")),I(this._pane.style,n)}_getExactOverlayY(e,t,n){let i={top:"",bottom:""},o=this._getOverlayPoint(t,this._overlayRect,e);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,n)),e.overlayY==="bottom"){let r=this._document.documentElement.clientHeight;i.bottom=`${r-(o.y+this._overlayRect.height)}px`}else i.top=p(o.y);return i}_getExactOverlayX(e,t,n){let i={left:"",right:""},o=this._getOverlayPoint(t,this._overlayRect,e);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,n));let r;if(this._isRtl()?r=e.overlayX==="end"?"left":"right":r=e.overlayX==="end"?"right":"left",r==="right"){let s=this._document.documentElement.clientWidth;i.right=`${s-(o.x+this._overlayRect.width)}px`}else i.left=p(o.x);return i}_getScrollVisibility(){let e=this._getOriginRect(),t=this._pane.getBoundingClientRect(),n=this._scrollables.map(i=>i.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Se(e,n),isOriginOutsideView:Nt(e,n),isOverlayClipped:Se(t,n),isOverlayOutsideView:Nt(t,n)}}_subtractOverflows(e,...t){return t.reduce((n,i)=>n-Math.max(i,0),e)}_getNarrowedViewportRect(){let e=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,n=this._viewportRuler.getViewportScrollPosition();return{top:n.top+this._getViewportMarginTop(),left:n.left+this._getViewportMarginStart(),right:n.left+e-this._getViewportMarginEnd(),bottom:n.top+t-this._getViewportMarginBottom(),width:e-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(e,t){return t==="x"?e.offsetX==null?this._offsetX:e.offsetX:e.offsetY==null?this._offsetY:e.offsetY}_validatePositions(){}_addPanelClasses(e){this._pane&&At(e).forEach(t=>{t!==""&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(e=>{this._pane.classList.remove(e)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let e=this._origin;if(e instanceof S)return e.nativeElement.getBoundingClientRect();if(e instanceof Element)return e.getBoundingClientRect();let t=e.width||0,n=e.height||0;return{top:e.y,bottom:e.y+n,left:e.x,right:e.x+t,height:n,width:t}}_getContainerRect(){let e=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",t=this._overlayContainer.getContainerElement();e&&(t.style.display="block");let n=t.getBoundingClientRect();return e&&(t.style.display=""),n}};function I(a,e){for(let t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);return a}function Re(a){if(typeof a!="number"&&a!=null){let[e,t]=a.split(Qe);return!t||t==="px"?parseFloat(e):null}return a||null}function Pe(a){return{top:Math.floor(a.top),right:Math.floor(a.right),bottom:Math.floor(a.bottom),left:Math.floor(a.left),width:Math.floor(a.width),height:Math.floor(a.height)}}function Je(a,e){return a===e?!0:a.isOriginClipped===e.isOriginClipped&&a.isOriginOutsideView===e.isOriginOutsideView&&a.isOverlayClipped===e.isOverlayClipped&&a.isOverlayOutsideView===e.isOverlayOutsideView}var De="cdk-global-overlay-wrapper";function gt(a){return new vt}var vt=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(e){let t=e.getConfig();this._overlayRef=e,this._width&&!t.width&&e.updateSize({width:this._width}),this._height&&!t.height&&e.updateSize({height:this._height}),e.hostElement.classList.add(De),this._isDisposed=!1}top(e=""){return this._bottomOffset="",this._topOffset=e,this._alignItems="flex-start",this}left(e=""){return this._xOffset=e,this._xPosition="left",this}bottom(e=""){return this._topOffset="",this._bottomOffset=e,this._alignItems="flex-end",this}right(e=""){return this._xOffset=e,this._xPosition="right",this}start(e=""){return this._xOffset=e,this._xPosition="start",this}end(e=""){return this._xOffset=e,this._xPosition="end",this}width(e=""){return this._overlayRef?this._overlayRef.updateSize({width:e}):this._width=e,this}height(e=""){return this._overlayRef?this._overlayRef.updateSize({height:e}):this._height=e,this}centerHorizontally(e=""){return this.left(e),this._xPosition="center",this}centerVertically(e=""){return this.top(e),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,n=this._overlayRef.getConfig(),{width:i,height:o,maxWidth:r,maxHeight:s}=n,c=(i==="100%"||i==="100vw")&&(!r||r==="100%"||r==="100vw"),m=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),d=this._xPosition,h=this._xOffset,u=this._overlayRef.getConfig().direction==="rtl",_="",v="",w="";c?w="flex-start":d==="center"?(w="center",u?v=h:_=h):u?d==="left"||d==="end"?(w="flex-end",_=h):(d==="right"||d==="start")&&(w="flex-start",v=h):d==="left"||d==="start"?(w="flex-start",_=h):(d==="right"||d==="end")&&(w="flex-end",v=h),e.position=this._cssPosition,e.marginLeft=c?"0":_,e.marginTop=m?"0":this._topOffset,e.marginBottom=this._bottomOffset,e.marginRight=c?"0":v,t.justifyContent=w,t.alignItems=m?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,n=t.style;t.classList.remove(De),n.justifyContent=n.alignItems=e.marginTop=e.marginBottom=e.marginLeft=e.marginRight=e.position="",this._overlayRef=null,this._isDisposed=!0}},je=(()=>{class a{_injector=l(g);constructor(){}global(){return gt()}flexibleConnectedTo(t){return Le(this._injector,t)}static \u0275fac=function(n){return new(n||a)};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),Ye=new D("OVERLAY_DEFAULT_CONFIG");function _t(a,e){a.get(K).load(Ne);let t=a.get(Ve),n=a.get(y),i=a.get(st),o=a.get(ee),r=a.get(ve),s=a.get(nt,null,{optional:!0})||a.get(F).createRenderer(null,null),c=new W(e),m=a.get(Ye,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||r.value,"showPopover"in n.body?c.usePopover=e?.usePopover??m:c.usePopover=!1;let d=n.createElement("div"),h=n.createElement("div");d.id=i.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),h.appendChild(d),c.usePopover&&(h.setAttribute("popover","manual"),h.classList.add("cdk-overlay-popover"));let u=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return Lt(u)?u.after(h):u?.type==="parent"?u.element.appendChild(h):t.getContainerElement().appendChild(h),new bt(new dt(d,o,a),h,d,c,a.get(x),a.get(Fe),n,a.get(pe),a.get(ze),e?.disableAnimations??a.get(Jt,null,{optional:!0})==="NoopAnimations",a.get(et),s)}var Xe=(()=>{class a{scrollStrategies=l(Ie);_positionBuilder=l(je);_injector=l(g);constructor(){}create(t){return _t(this._injector,t)}position(){return this._positionBuilder}static \u0275fac=function(n){return new(n||a)};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var He=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=A({type:a});static \u0275inj=P({providers:[Xe],imports:[lt,zt,Bt,Bt]})}return a})();var tn={capture:!0},en=["focus","mousedown","mouseenter","touchstart"],jt="mat-ripple-loader-uninitialized",Yt="mat-ripple-loader-class-name",We="mat-ripple-loader-centered",yt="mat-ripple-loader-disabled",Ze=(()=>{class a{_document=l(y);_animationsDisabled=M();_globalRippleOptions=l(xe,{optional:!0});_platform=l(R);_ngZone=l(x);_injector=l(g);_eventCleanups;_hosts=new Map;constructor(){let t=l(F).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>en.map(n=>t.listen(this._document,n,this._onInteraction,tn)))}ngOnDestroy(){let t=this._hosts.keys();for(let n of t)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(t,n){t.setAttribute(jt,this._globalRippleOptions?.namespace??""),(n.className||!t.hasAttribute(Yt))&&t.setAttribute(Yt,n.className||""),n.centered&&t.setAttribute(We,""),n.disabled&&t.setAttribute(yt,"")}setDisabled(t,n){let i=this._hosts.get(t);i?(i.target.rippleDisabled=n,!n&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(t))):n?t.setAttribute(yt,""):t.removeAttribute(yt)}_onInteraction=t=>{let n=q(t);if(n instanceof HTMLElement){let i=n.closest(`[${jt}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let n=this._document.createElement("span");n.classList.add("mat-ripple",t.getAttribute(Yt)),t.append(n);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??It.enterDuration,r=this._animationsDisabled?0:i?.animation?.exitDuration??It.exitDuration,s={rippleDisabled:this._animationsDisabled||i?.disabled||t.hasAttribute(yt),rippleConfig:{centered:t.hasAttribute(We),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:r}}},c=new ye(s,this._ngZone,n,this._platform,this._injector),m=!s.rippleDisabled;m&&c.setupTriggerEvents(t),this._hosts.set(t,{target:s,renderer:c,hasSetUpEvents:m}),t.removeAttribute(jt)}destroyRipple(t){let n=this._hosts.get(t);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(n){return new(n||a)};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var nn=["mat-icon-button",""],an=["*"],on=new D("MAT_BUTTON_CONFIG");function Ue(a){return a==null?void 0:me(a)}var Xt=(()=>{class a{_elementRef=l(S);_ngZone=l(x);_animationsDisabled=M();_config=l(on,{optional:!0});_focusMonitor=l(ue);_cleanupClick;_renderer=l(nt);_rippleLoader=l(Ze);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}constructor(){l(K).load(we);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",n){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(n){return new(n||a)};static \u0275dir=C({type:a,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(n,i){n&2&&(it("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),ce(i.color?"mat-"+i.color:""),V("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",L],disabled:[2,"disabled","disabled",L],ariaDisabled:[2,"aria-disabled","ariaDisabled",L],disabledInteractive:[2,"disabledInteractive","disabledInteractive",L],tabIndex:[2,"tabIndex","tabIndex",Ue],_tabindex:[2,"tabindex","_tabindex",Ue]}})}return a})(),rn=(()=>{class a extends Xt{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=E({type:a,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[O],attrs:nn,ngContentSelectors:an,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,i){n&1&&(rt(),z(0,"span",0),N(1),z(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return a})();var sn=["matButton",""],ln=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],cn=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Ge=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),$e=(()=>{class a extends Xt{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=dn(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let n=this._elementRef.nativeElement.classList,i=this._appearance?Ge.get(this._appearance):null,o=Ge.get(t);i&&n.remove(...i),n.add(...o),this._appearance=t}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=E({type:a,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[O],attrs:sn,ngContentSelectors:cn,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,i){n&1&&(rt(ln),z(0,"span",0),N(1),oe(2,"span",1),N(3,1),re(),N(4,2),z(5,"span",2)(6,"span",3)),n&2&&V("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return a})();function dn(a){return a.hasAttribute("mat-raised-button")?"elevated":a.hasAttribute("mat-stroked-button")?"outlined":a.hasAttribute("mat-flat-button")?"filled":a.hasAttribute("mat-button")?"text":null}var mn=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=A({type:a});static \u0275inj=P({imports:[ke,lt]})}return a})();function hn(a,e){if(a&1){let t=se();ot(0,"div",1)(1,"button",2),St("click",function(){Kt(t);let i=Et();return Qt(i.action())}),Pt(2),$()()}if(a&2){let t=Et();U(2),Dt(" ",t.data.action," ")}}var pn=["label"];function un(a,e){}var bn=Math.pow(2,31)-1,tt=class{_overlayRef;instance;containerInstance;_afterDismissed=new b;_afterOpened=new b;_onAction=new b;_durationTimeoutId;_dismissedByAction=!1;constructor(e,t){this._overlayRef=t,this.containerInstance=e,e._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(e){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(e,bn))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},qe=new D("MatSnackBarData"),Z=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},fn=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275dir=C({type:a,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return a})(),vn=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275dir=C({type:a,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return a})(),gn=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275dir=C({type:a,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return a})(),_n=(()=>{class a{snackBarRef=l(tt);data=l(qe);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=E({type:a,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(n,i){n&1&&(ot(0,"div",0),Pt(1),$(),ne(2,hn,3,1,"div",1)),n&2&&(U(),Dt(" ",i.data.message,`
`),U(),ae(i.hasAction?2:-1))},dependencies:[$e,fn,vn,gn],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return a})(),Ht="_mat-snack-bar-enter",Wt="_mat-snack-bar-exit",yn=(()=>{class a extends X{_ngZone=l(x);_elementRef=l(S);_changeDetectorRef=l(de);_platform=l(R);_animationsDisabled=M();snackBarConfig=l(Z);_document=l(y);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=l(g);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new b;_onExit=new b;_onEnter=new b;_animationState="void";_live;_label;_role;_liveElementId=l(st).getId("mat-snack-bar-container-live-");constructor(){super();let t=this.snackBarConfig;t.politeness==="assertive"&&!t.announcementMessage?this._live="assertive":t.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(t){this._assertNotAttached();let n=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),n}attachTemplatePortal(t){this._assertNotAttached();let n=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),n}attachDomPortal=t=>{this._assertNotAttached();let n=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),n};onAnimationEnd(t){t===Wt?this._completeExit():t===Ht&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?T(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Ht)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Ht)},200)))}exit(){return this._destroyed?Gt(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?T(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Wt)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Wt),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,n=this.snackBarConfig.panelClass;n&&(Array.isArray(n)?n.forEach(r=>t.classList.add(r)):t.classList.add(n)),this._exposeToModals();let i=this._label.nativeElement,o="mdc-snackbar__label";i.classList.toggle(o,!i.querySelector(`.${o}`))}_exposeToModals(){let t=this._liveElementId,n=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<n.length;i++){let o=n[i],r=o.getAttribute("aria-owns");this._trackedModals.add(o),r?r.indexOf(t)===-1&&o.setAttribute("aria-owns",r+" "+t):o.setAttribute("aria-owns",t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let n=t.getAttribute("aria-owns");if(n){let i=n.replace(this._liveElementId,"").trim();i.length>0?t.setAttribute("aria-owns",i):t.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,n=t.querySelector("[aria-hidden]"),i=t.querySelector("[aria-live]");if(n&&i){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&n.contains(document.activeElement)&&(o=document.activeElement),n.removeAttribute("aria-hidden"),i.appendChild(n),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=E({type:a,selectors:[["mat-snack-bar-container"]],viewQuery:function(n,i){if(n&1&&le(Ft,7)(pn,7),n&2){let o;Ot(o=Rt())&&(i._portalOutlet=o.first),Ot(o=Rt())&&(i._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(n,i){n&1&&St("animationend",function(r){return i.onAnimationEnd(r.animationName)})("animationcancel",function(r){return i.onAnimationEnd(r.animationName)}),n&2&&V("mat-snack-bar-container-enter",i._animationState==="visible")("mat-snack-bar-container-exit",i._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!i._animationsDisabled)},features:[O],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(n,i){n&1&&(ot(0,"div",1)(1,"div",2,0)(3,"div",3),te(4,un,0,0,"ng-template",4),$(),ie(5,"div"),$()()),n&2&&(U(5),it("aria-live",i._live)("role",i._role)("id",i._liveElementId))},dependencies:[Ft],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2})}return a})(),xn=new D("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Z}),Ke=(()=>{class a{_live=l(fe);_injector=l(g);_breakpointObserver=l(be);_parentSnackBar=l(a,{optional:!0,skipSelf:!0});_defaultConfig=l(xn);_animationsDisabled=M();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=_n;snackBarContainerComponent=yn;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}constructor(){}openFromComponent(t,n){return this._attach(t,n)}openFromTemplate(t,n){return this._attach(t,n)}open(t,n="",i){let o=k(k({},this._defaultConfig),i);return o.data={message:t,action:n},o.announcementMessage===t&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,n){let i=n&&n.viewContainerRef&&n.viewContainerRef.injector,o=g.create({parent:i||this._injector,providers:[{provide:Z,useValue:n}]}),r=new Y(this.snackBarContainerComponent,n.viewContainerRef,o),s=t.attach(r);return s.instance.snackBarConfig=n,s.instance}_attach(t,n){let i=k(k(k({},new Z),this._defaultConfig),n),o=this._createOverlay(i),r=this._attachSnackBarContainer(o,i),s=new tt(r,o);if(t instanceof G){let c=new B(t,null,{$implicit:i.data,snackBarRef:s});s.instance=r.attachTemplatePortal(c)}else{let c=this._createInjector(i,s),m=new Y(t,void 0,c),d=r.attachComponentPortal(m);s.instance=d.instance}return this._breakpointObserver.observe(_e.HandsetPortrait).pipe(qt(o.detachments())).subscribe(c=>{o.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),i.announcementMessage&&r._onAnnounce.subscribe(()=>{this._live.announce(i.announcementMessage,i.politeness)}),this._animateSnackBar(s,i),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(t,n){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),n.announcementMessage&&this._live.clear()}),n.duration&&n.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(n.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let n=new W;n.direction=t.direction;let i=gt(this._injector),o=t.direction==="rtl",r=t.horizontalPosition==="left"||t.horizontalPosition==="start"&&!o||t.horizontalPosition==="end"&&o,s=!r&&t.horizontalPosition!=="center";return r?i.left("0"):s?i.right("0"):i.centerHorizontally(),t.verticalPosition==="top"?i.top("0"):i.bottom("0"),n.positionStrategy=i,n.disableAnimations=this._animationsDisabled,_t(this._injector,n)}_createInjector(t,n){let i=t&&t.viewContainerRef&&t.viewContainerRef.injector;return g.create({parent:i||this._injector,providers:[{provide:tt,useValue:n},{provide:qe,useValue:t.data}]})}static \u0275fac=function(n){return new(n||a)};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var pi=(()=>{class a{constructor(){this.snackBar=l(Ke)}success(t){this.snackBar.open(t,"Close",{duration:3e3,panelClass:["snackbar-success"],horizontalPosition:"end",verticalPosition:"bottom"})}error(t){this.snackBar.open(t,"Close",{duration:5e3,panelClass:["snackbar-error"],horizontalPosition:"end",verticalPosition:"bottom"})}warning(t){this.snackBar.open(t,"Close",{duration:4e3,panelClass:["snackbar-warning"],horizontalPosition:"end",verticalPosition:"bottom"})}static{this.\u0275fac=function(n){return new(n||a)}}static{this.\u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})();export{Ze as a,rn as b,$e as c,mn as d,Y as e,B as f,On as g,Ft as h,Be as i,W as j,Le as k,_t as l,He as m,pi as n};
