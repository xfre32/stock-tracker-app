import{a as _t,f as yt}from"./chunk-6GXQFR4G.js";import{a as O,b as xt,c as St}from"./chunk-YUGZVWPH.js";import{a as vt}from"./chunk-EFCOHEO2.js";import{a as ht}from"./chunk-O5WW2GBC.js";import{a as ut}from"./chunk-JM4VVZIJ.js";import{a as kt,b as Tt}from"./chunk-5NDVEAN2.js";import"./chunk-4ZLIXOMO.js";import"./chunk-2FN7EORV.js";import{A as G,I as ct,M as dt,N as gt,O as bt,Y as pt,Z as mt,_ as ft,l as ot,n as it,x as rt}from"./chunk-4NKEEFMH.js";import{v as lt,w as st}from"./chunk-BNDIVZLC.js";import{$ as r,Ab as b,Ac as nt,Bb as l,Cb as g,Db as p,Ec as B,Hc as c,Kb as j,Ob as h,Qb as H,Rb as Q,Sa as d,Sb as q,Tb as K,Ub as Y,V as E,Vb as w,Wb as M,X as A,Xa as z,Z as I,_b as Z,ac as D,cc as x,dc as $,ea as P,fa as V,fb as _,gb as F,gc as J,hb as N,hc as X,ic as tt,jc as et,ma as f,qa as m,ta as L,ub as y,vb as k,wb as T,xa as v,xc as at,yb as W,zb as U}from"./chunk-VMM3RXYE.js";import"./chunk-4CLCTAJ7.js";var At=["button"],Pt=["*"];function Vt(o,u){if(o&1&&(l(0,"div",2),p(1,"mat-pseudo-checkbox",6),g()),o&2){let t=H();d(),b("disabled",t.disabled)}}var Ct=new I("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),It=new I("MatButtonToggleGroup"),Lt={provide:bt,useExisting:E(()=>R),multi:!0},S=class{source;value;constructor(u,t){this.source=u,this.value=t}},R=(()=>{class o{_changeDetector=r(B);_dir=r(lt,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(t){this._name=t,this._markButtonsForCheck()}_name=r(G).getId("mat-button-toggle-group-");vertical=!1;get value(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t.map(a=>a.value):t[0]?t[0].value:void 0}set value(t){this._setSelectionByValue(t),this.valueChange.emit(this.value)}valueChange=new f;get selected(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t:t[0]||null}get multiple(){return this._multiple}set multiple(t){this._multiple=t,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new f;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(t){this._hideMultipleSelectionIndicator=t,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let t=r(Ct,{optional:!0});this.appearance=t&&t.appearance?t.appearance:"standard",this._hideSingleSelectionIndicator=t?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=t?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new ut(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(t=>t.checked)),this.multiple||this._initializeTabIndex()}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_keydown(t){if(this.multiple||this.disabled||rt(t))return;let e=t.target.id,n=this._buttonToggles.toArray().findIndex(s=>s.buttonId===e),i=null;switch(t.keyCode){case 32:case 13:i=this._buttonToggles.get(n)||null;break;case 38:i=this._getNextButton(n,-1);break;case 37:i=this._getNextButton(n,this.dir==="ltr"?-1:1);break;case 40:i=this._getNextButton(n,1);break;case 39:i=this._getNextButton(n,this.dir==="ltr"?1:-1);break;default:return}i&&(t.preventDefault(),i._onButtonClick(),i.focus())}_emitChangeEvent(t){let a=new S(t,this.value);this._rawValue=a.value,this._controlValueAccessorChangeFn(a.value),this.change.emit(a)}_syncButtonToggle(t,a,e=!1,n=!1){!this.multiple&&this.selected&&!t.checked&&(this.selected.checked=!1),this._selectionModel?a?this._selectionModel.select(t):this._selectionModel.deselect(t):n=!0,n?Promise.resolve().then(()=>this._updateModelValue(t,e)):this._updateModelValue(t,e)}_isSelected(t){return this._selectionModel&&this._selectionModel.isSelected(t)}_isPrechecked(t){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(a=>t.value!=null&&a===t.value):t.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(t=>{t.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let t=0;t<this._buttonToggles.length;t++){let a=this._buttonToggles.get(t);if(!a.disabled){a.tabIndex=0;break}}}_getNextButton(t,a){let e=this._buttonToggles;for(let n=1;n<=e.length;n++){let i=(t+a*n+e.length)%e.length,s=e.get(i);if(s&&!s.disabled)return s}return null}_setSelectionByValue(t){if(this._rawValue=t,!this._buttonToggles)return;let a=this._buttonToggles.toArray();if(this.multiple&&t?(Array.isArray(t),this._clearSelection(),t.forEach(e=>this._selectValue(e,a))):(this._clearSelection(),this._selectValue(t,a)),!this.multiple&&a.every(e=>e.tabIndex===-1)){for(let e of a)if(!e.disabled){e.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(t=>{t.checked=!1,this.multiple||(t.tabIndex=-1)})}_selectValue(t,a){for(let e of a)if(e.value===t){e.checked=!0,this._selectionModel.select(e),this.multiple||(e.tabIndex=0);break}}_updateModelValue(t,a){a&&this._emitChangeEvent(t),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(t=>t._markForCheck())}static \u0275fac=function(a){return new(a||o)};static \u0275dir=N({type:o,selectors:[["mat-button-toggle-group"]],contentQueries:function(a,e,n){if(a&1&&K(n,C,5),a&2){let i;w(i=M())&&(e._buttonToggles=i)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(a,e){a&1&&h("keydown",function(i){return e._keydown(i)}),a&2&&(y("role",e.multiple?"group":"radiogroup")("aria-disabled",e.disabled),D("mat-button-toggle-vertical",e.vertical)("mat-button-toggle-group-appearance-standard",e.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",c],value:"value",multiple:[2,"multiple","multiple",c],disabled:[2,"disabled","disabled",c],disabledInteractive:[2,"disabledInteractive","disabledInteractive",c],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",c],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",c]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[et([Lt,{provide:It,useExisting:o}])]})}return o})(),C=(()=>{class o{_changeDetectorRef=r(B);_elementRef=r(v);_focusMonitor=r(ot);_idGenerator=r(G);_animationDisabled=ct();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(t){this._tabIndex.set(t)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(t){this._appearance=t}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(t){t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(t){this._disabled=t}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t}_disabledInteractive;change=new f;constructor(){r(it).load(gt);let t=r(It,{optional:!0}),a=r(new at("tabindex"),{optional:!0})||"",e=r(Ct,{optional:!0});this._tabIndex=m(parseInt(a)||0),this.buttonToggleGroup=t,this._appearance=e&&e.appearance?e.appearance:"standard",this._disabledInteractive=e?.disabledInteractive??!1}ngOnInit(){let t=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),t&&(t._isPrechecked(this)?this.checked=!0:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,!1,!1,!0)}focus(t){this._buttonElement.nativeElement.focus(t)}_onButtonClick(){if(this.disabled)return;let t=this.isSingleSelector()?!0:!this._checked;if(t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let a=this.buttonToggleGroup._buttonToggles.find(e=>e.tabIndex===0);a&&(a.tabIndex=-1),this.tabIndex=0}this.change.emit(new S(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=_({type:o,selectors:[["mat-button-toggle"]],viewQuery:function(a,e){if(a&1&&Y(At,5),a&2){let n;w(n=M())&&(e._buttonElement=n.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(a,e){a&1&&h("focus",function(){return e.focus()}),a&2&&(y("aria-label",null)("aria-labelledby",null)("id",e.id)("name",null),D("mat-button-toggle-standalone",!e.buttonToggleGroup)("mat-button-toggle-checked",e.checked)("mat-button-toggle-disabled",e.disabled)("mat-button-toggle-disabled-interactive",e.disabledInteractive)("mat-button-toggle-appearance-standard",e.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",c],appearance:"appearance",checked:[2,"checked","checked",c],disabled:[2,"disabled","disabled",c],disabledInteractive:[2,"disabledInteractive","disabledInteractive",c]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:Pt,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(a,e){if(a&1&&(Q(),l(0,"button",1,0),h("click",function(){return e._onButtonClick()}),k(2,Vt,2,1,"div",2),l(3,"span",3),q(4),g()(),p(5,"span",4)(6,"span",5)),a&2){let n=Z(1);b("id",e.buttonId)("disabled",e.disabled&&!e.disabledInteractive||null),y("role",e.isSingleSelector()?"radio":"button")("tabindex",e.disabled&&!e.disabledInteractive?-1:e.tabIndex)("aria-pressed",e.isSingleSelector()?null:e.checked)("aria-checked",e.isSingleSelector()?e.checked:null)("name",e._getButtonName())("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledby)("aria-disabled",e.disabled&&e.disabledInteractive?"true":null),d(2),T(e.buttonToggleGroup&&(!e.buttonToggleGroup.multiple&&!e.buttonToggleGroup.hideSingleSelectionIndicator||e.buttonToggleGroup.multiple&&!e.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),d(4),b("matRippleTrigger",n)("matRippleDisabled",e.disableRipple||e.disabled)}},dependencies:[dt,ht],styles:[`.mat-button-toggle-standalone,
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
`],encapsulation:2,changeDetection:0})}return o})(),wt=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=F({type:o});static \u0275inj=A({imports:[pt,C,st]})}return o})();var Ft=(o,u)=>u.label;function Nt(o,u){if(o&1&&(l(0,"mat-button-toggle",5),x(1),g()),o&2){let t=u.$implicit;b("value",t),d(),$(t.label)}}function Wt(o,u){o&1&&(l(0,"div",11),p(1,"mat-spinner",12),g())}var Te=(()=>{class o{constructor(){this.symbol=nt.required(),this.elRef=r(v),this.themeService=r(vt),this.twelveDataApi=r(St),this.chart=null,this.series=null,this.resizeObserver=null,this.dataSubscription=null,this.chartType="area",this.chartLoading=m(!1),this.timeframes=[{label:"1D",interval:"5min",outputsize:78,isIntraday:!0},{label:"1W",interval:"15min",outputsize:140,isIntraday:!0},{label:"1M",interval:"1day",outputsize:22,isIntraday:!1},{label:"3M",interval:"1day",outputsize:66,isIntraday:!1},{label:"6M",interval:"1day",outputsize:130,isIntraday:!1},{label:"1Y",interval:"1day",outputsize:252,isIntraday:!1}],this.selectedTimeframe=m(this.timeframes[3]),z(()=>{this.initChart()}),L(()=>{this.themeService.isDark(),this.chart&&this.applyTheme()})}onTimeframeToggle(t){this.selectedTimeframe.set(t.value),this.loadChartData()}loadChartData(){this.dataSubscription&&this.dataSubscription.unsubscribe(),this.chartLoading.set(!0);let t=this.selectedTimeframe();this.dataSubscription=this.twelveDataApi.getTimeSeries(this.symbol(),t.interval,t.outputsize).subscribe({next:a=>{this.chartLoading.set(!1),a.length>0&&this.chart&&(this.updateChartOptions(t.isIntraday),this.rebuildSeries(a))},error:()=>{this.chartLoading.set(!1)}})}updateChartOptions(t){this.chart&&this.chart.applyOptions({timeScale:{timeVisible:t,secondsVisible:!1}})}initChart(){let t=this.elRef.nativeElement.querySelector(".chart-card__container");if(!t)return;this.chart=xt(t,{width:t.clientWidth,height:400,layout:{textColor:this.themeService.isDark()?"#d1d5db":"#374151",background:{type:O.Solid,color:"transparent"}},grid:{vertLines:{color:this.themeService.isDark()?"#374151":"#e5e7eb"},horzLines:{color:this.themeService.isDark()?"#374151":"#e5e7eb"}},crosshair:{mode:0},rightPriceScale:{borderColor:this.themeService.isDark()?"#374151":"#e5e7eb"},timeScale:{borderColor:this.themeService.isDark()?"#374151":"#e5e7eb",timeVisible:this.selectedTimeframe().isIntraday}}),this.loadChartData();let a=t.clientWidth;this.resizeObserver=new ResizeObserver(e=>{if(this.chart&&e[0]){let n=e[0].contentRect.width;this.chart.applyOptions({width:n}),a===0&&n>0&&this.chart.timeScale().fitContent(),a=n}}),this.resizeObserver.observe(t)}rebuildSeries(t){if(!this.chart)return;this.series&&(this.chart.removeSeries(this.series),this.series=null);let a=t;if(!(!a||a.length===0)){if(this.chartType==="candlestick"){let e=this.chart.addCandlestickSeries({upColor:"#16a34a",downColor:"#dc2626",borderUpColor:"#16a34a",borderDownColor:"#dc2626",wickUpColor:"#16a34a",wickDownColor:"#dc2626"});e.setData(a.map(n=>({time:n.time,open:n.open,high:n.high,low:n.low,close:n.close}))),this.series=e}else{let e=this.chart.addAreaSeries({lineColor:"#3b82f6",topColor:"rgba(59, 130, 246, 0.4)",bottomColor:"rgba(59, 130, 246, 0.0)",lineWidth:2});e.setData(a.map(n=>({time:n.time,value:n.close}))),this.series=e}this.chart.timeScale().fitContent()}}applyTheme(){if(!this.chart)return;let t=this.themeService.isDark();this.chart.applyOptions({layout:{textColor:t?"#d1d5db":"#374151",background:{type:O.Solid,color:"transparent"}},grid:{vertLines:{color:t?"#374151":"#e5e7eb"},horzLines:{color:t?"#374151":"#e5e7eb"}},rightPriceScale:{borderColor:t?"#374151":"#e5e7eb"},timeScale:{borderColor:t?"#374151":"#e5e7eb"}})}ngOnDestroy(){this.resizeObserver?.disconnect(),this.dataSubscription?.unsubscribe(),this.chart?.remove(),this.chart=null,this.series=null}static{this.\u0275fac=function(a){return new(a||o)}}static{this.\u0275cmp=_({type:o,selectors:[["app-price-chart"]],inputs:{symbol:[1,"symbol"]},decls:17,vars:3,consts:[["chartContainer",""],["appearance","outlined",1,"chart-card"],[1,"chart-card__header"],[1,"chart-card__controls"],[1,"timeframe-group",3,"change","value"],[3,"value"],[3,"valueChange","change","value"],["value","area"],["value","candlestick"],[1,"chart-card__container-wrapper"],[1,"chart-card__container"],[1,"chart-card__loader"],["diameter","40"]],template:function(a,e){if(a&1){let n=j();l(0,"mat-card",1)(1,"div",2)(2,"div",3)(3,"mat-button-toggle-group",4),h("change",function(s){return e.onTimeframeToggle(s)}),W(4,Nt,2,2,"mat-button-toggle",5,Ft),g(),l(6,"mat-button-toggle-group",6),tt("valueChange",function(s){return P(n),X(e.chartType,s)||(e.chartType=s),V(s)}),h("change",function(){return e.loadChartData()}),l(7,"mat-button-toggle",7)(8,"mat-icon"),x(9,"show_chart"),g()(),l(10,"mat-button-toggle",8)(11,"mat-icon"),x(12,"candlestick_chart"),g()()()()(),l(13,"div",9),p(14,"div",10,0),k(16,Wt,2,0,"div",11),g()()}a&2&&(d(3),b("value",e.selectedTimeframe()),d(),U(e.timeframes),d(2),J("value",e.chartType),d(10),T(e.chartLoading()?16:-1))},dependencies:[wt,R,C,yt,_t,ft,mt,Tt,kt],styles:[".chart-card[_ngcontent-%COMP%]{padding:16px;position:relative;overflow:hidden}.chart-card__header[_ngcontent-%COMP%]{margin-bottom:16px}.chart-card__controls[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px}.timeframe-group[_ngcontent-%COMP%]{box-shadow:none}.chart-card__container-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;height:400px}.chart-card__container[_ngcontent-%COMP%]{width:100%;height:100%}.chart-card__loader[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background-color:color-mix(in srgb,var(--mat-sys-surface) 60%,transparent);-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);z-index:10}@media(max-width:600px){.chart-card__controls[_ngcontent-%COMP%]{justify-content:center}}"]})}}return o})();export{Te as PriceChartComponent};
