import{J as p,aB as ee,bv as te,M as ae,bD as ne,N as le,aD as oe,Q as y,f as v,aK as ue,a_ as ie,bE as re,aP as x,bF as se,S as ce,aE as de,aF as _,bx as fe,a as l,by as ve,R as k,F as I,b6 as D,ba as xe,bG as me,bz as ge,T as he,aR as S,bA as we,bq as Ve,bH as ye}from"./index-CWnjofDw.js";const be=p({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...ee(),...te()},"VTextarea"),Pe=ae()({name:"VTextarea",directives:{Intersect:ne},inheritAttrs:!1,props:be(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,E){let{attrs:b,emit:M,slots:i}=E;const o=le(e,"modelValue"),{isFocused:f,focus:G,blur:U}=oe(e),O=y(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),$=y(()=>{if(b.maxlength)return b.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function j(t,n){var a,u;!e.autofocus||!t||(u=(a=n[0].target)==null?void 0:a.focus)==null||u.call(a)}const B=v(),m=v(),H=ue(""),g=v(),q=y(()=>e.persistentPlaceholder||f.value||e.active);function F(){var t;g.value!==document.activeElement&&((t=g.value)==null||t.focus()),f.value||G()}function J(t){F(),M("click:control",t)}function K(t){M("mousedown:control",t)}function Q(t){t.stopPropagation(),F(),S(()=>{o.value="",we(e["onClick:clear"],t)})}function L(t){var a;const n=t.target;if(o.value=n.value,(a=e.modelModifiers)!=null&&a.trim){const u=[n.selectionStart,n.selectionEnd];S(()=>{n.selectionStart=u[0],n.selectionEnd=u[1]})}}const c=v(),h=v(+e.rows),P=y(()=>["plain","underlined"].includes(e.variant));ie(()=>{e.autoGrow||(h.value=+e.rows)});function d(){e.autoGrow&&S(()=>{if(!c.value||!m.value)return;const t=getComputedStyle(c.value),n=getComputedStyle(m.value.$el),a=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),u=c.value.scrollHeight,w=parseFloat(t.lineHeight),C=Math.max(parseFloat(e.rows)*w+a,parseFloat(n.getPropertyValue("--v-input-control-height"))),R=parseFloat(e.maxRows)*w+a||1/0,s=ye(u??0,C,R);h.value=Math.floor((s-a)/w),H.value=Ve(s)})}re(d),x(o,d),x(()=>e.rows,d),x(()=>e.maxRows,d),x(()=>e.density,d);let r;return x(c,t=>{t?(r=new ResizeObserver(d),r.observe(c.value)):r==null||r.disconnect()}),se(()=>{r==null||r.disconnect()}),ce(()=>{const t=!!(i.counter||e.counter||e.counterValue),n=!!(t||i.details),[a,u]=de(b),{modelValue:w,...C}=_.filterProps(e),R=fe(e);return l(_,k({ref:B,modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":P.value},e.class],style:e.style},a,C,{centerAffix:h.value===1&&!P.value,focused:f.value}),{...i,default:s=>{let{id:V,isDisabled:N,isDirty:z,isReadonly:W,isValid:X}=s;return l(ve,k({ref:m,style:{"--v-textarea-control-height":H.value},onClick:J,onMousedown:K,"onClick:clear":Q,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},R,{id:V.value,active:q.value||z.value,centerAffix:h.value===1&&!P.value,dirty:z.value||e.dirty,disabled:N.value,focused:f.value,error:X.value===!1}),{...i,default:Y=>{let{props:{class:A,...T}}=Y;return l(I,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),D(l("textarea",k({ref:g,class:A,value:o.value,onInput:L,autofocus:e.autofocus,readonly:W.value,disabled:N.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:F,onBlur:U},T,u),null),[[xe("intersect"),{handler:j},null,{once:!0}]]),e.autoGrow&&D(l("textarea",{class:[A,"v-textarea__sizer"],id:`${T.id}-sizer`,"onUpdate:modelValue":Z=>o.value=Z,ref:c,readonly:!0,"aria-hidden":"true"},null),[[me,o.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:n?s=>{var V;return l(I,null,[(V=i.details)==null?void 0:V.call(i,s),t&&l(I,null,[l("span",null,null),l(ge,{active:e.persistentCounter||f.value,value:O.value,max:$.value,disabled:e.disabled},i.counter)])])}:void 0})}),he({},B,m,g)}});export{Pe as V};