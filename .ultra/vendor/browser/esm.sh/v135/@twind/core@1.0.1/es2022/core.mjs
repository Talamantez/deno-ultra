/* esm.sh - esbuild bundle(@twind/core@1.0.1) es2022 production */
var F;function lt(t){return[...t.v,(t.i?"!":"")+t.n].join(":")}function st(t,e=","){return t.map(lt).join(e)}var W=typeof CSS<"u"&&CSS.escape||(t=>t.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function V(t){for(var e=9,r=t.length;r--;)e=Math.imul(e^t.charCodeAt(r),1597334677);return"#"+((e^e>>>9)>>>0).toString(36)}function kt(t,e="@media "){return e+x(t).map(r=>(typeof r=="string"&&(r={min:r}),r.raw||Object.keys(r).map(n=>`(${n}-width:${r[n]})`).join(" and "))).join(",")}function x(t=[]){return Array.isArray(t)?t:t==null?[]:[t]}function At(t){return t}function D(){}var w={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function jt(t){var e;return((e=t.match(/[-=:;]/g))==null?void 0:e.length)||0}function X(t){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(t)?+RegExp.$1/(RegExp.$2?15:1)/10:0,15)<<22|Math.min(jt(t),15)<<18}var qt=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function at({n:t,i:e,v:r=[]},n,i,l){for(let a of(t&&(t=lt({n:t,i:e,v:r})),l=[...x(l)],r)){let s=n.theme("screens",a);for(let u of x(s&&kt(s)||n.v(a))){var o;l.push(u),i|=s?67108864|X(u):a=="dark"?1073741824:u[0]=="@"?X(u):(o=u,1<<~(/:([a-z-]+)/.test(o)&&~qt.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:t,p:i,r:l,i:e}}var ut=new Map;function tt(t){if(t.d){let e=[],r=Y(t.r.reduce((n,i)=>i[0]=="@"?(e.push(i),n):i?Y(n,l=>Y(i,o=>{let a=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o);if(a){let s=l.indexOf(a[1]);return~s?l.slice(0,s)+a[0]+l.slice(s+a[1].length):Z(l,o)}return Z(o,l)})):n,"&"),n=>Z(n,t.n?"."+W(t.n):""));return r&&e.push(r.replace(/:merge\((.+?)\)/g,"$1")),e.reduceRight((n,i)=>i+"{"+n+"}",t.d)}}function Y(t,e){return t.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(r,n,i)=>e(n)+i)}function Z(t,e){return t.replace(/&/g,e)}var Dt=new Intl.Collator("en",{numeric:!0});function St(t,e){for(var r=0,n=t.length;r<n;){let i=n+r>>1;0>=Mt(t[i],e)?r=i+1:n=i}return n}function Mt(t,e){let r=t.p&w.o;return r==(e.p&w.o)&&(r==w.b||r==w.o)?0:t.p-e.p||t.o-e.o||Dt.compare(t.n,e.n)}function H(t,e){return Math.round(parseInt(t,16)*e)}function T(t,e={}){if(typeof t=="function")return t(e);let{opacityValue:r="1",opacityVariable:n}=e,i=n?`var(${n})`:r;if(t.includes("<alpha-value>"))return t.replace("<alpha-value>",i);if(t[0]=="#"&&(t.length==4||t.length==7)){let l=(t.length-1)/3,o=[17,1,.062272][l-1];return`rgba(${[H(t.substr(1,l),o),H(t.substr(1+l,l),o),H(t.substr(1+2*l,l),o),i]})`}return i=="1"?t:i=="0"?"#0000":t.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${i})`)}function se(t,e,{theme:r}){return r(t,e=e.replace(/\d+$/,n=>100*(9-~~(parseInt(n,10)/100)||.5)))}function ct(t,e,r,n,i=[]){return function l(o,{n:a,p:s,r:u=[],i:f},c){let p=[],d="",v=0,g=0;for(let h in o||{}){var y,A;let b=o[h];if(h[0]=="@"){if(!b)continue;if(h[1]=="a"){p.push(...ht(a,s,N(""+b),c,s,u,f,!0));continue}if(h[1]=="l"){for(let m of x(b))p.push(...l(m,{n:a,p:(y=w[h[7]],s&~w.o|y),r:u,i:f},c));continue}if(h[1]=="i"){p.push(...x(b).map(m=>({p:-1,o:0,r:[],d:h+" "+m})));continue}if(h[1]=="k"){p.push({p:w.d,o:0,r:[h],d:l(b,{p:w.d},c).map(tt).join("")});continue}if(h[1]=="f"){p.push(...x(b).map(m=>({p:w.d,o:0,r:[h],d:l(m,{p:w.d},c).map(tt).join("")})));continue}}if(typeof b!="object"||Array.isArray(b))h=="label"&&b?a=b+V(JSON.stringify([s,f,o])):(b||b===0)&&(h=h.replace(/[A-Z]/g,m=>"-"+m.toLowerCase()),g+=1,v=Math.max(v,(A=h)[0]=="-"?0:jt(A)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(A)?+!!RegExp.$1||-!!RegExp.$2:0)+1),d+=(d?";":"")+x(b).map(m=>c.s(h,ft(""+m,c.theme)+(f?" !important":""))).join(";"));else if(h[0]=="@"||h.includes("&")){let m=s;h[0]=="@"&&(h=h.replace(/\bscreen\(([^)]+)\)/g,(C,$)=>{let j=c.theme("screens",$);return j?(m|=67108864,kt(j,"")):C}),m|=X(h)),p.push(...l(b,{n:a,p:m,r:[...u,h],i:f},c))}else p.push(...l(b,{p:s,r:[...u,h]},c))}return p.unshift({n:a,p:s,o:Math.max(0,15-g)+1.5*Math.min(v||15,15),r:u,d}),p.sort(Mt)}(t,at(e,r,n,i),r)}function ft(t,e){return t.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(r,n,i,l,o)=>{let a=e(i,o);return typeof a=="function"&&/color|fill|stroke/i.test(i)?T(a):""+a})}function pt(t,e){let r,n=[];for(let i of t)i.d&&i.n?r?.p==i.p&&""+r.r==""+i.r?(r.c=[r.c,i.c].filter(Boolean).join(" "),r.d=r.d+";"+i.d):n.push(r={...i,n:i.n&&e}):n.push({...i,n:i.n&&e});return n}function B(t,e,r=w.u,n,i){let l=[];for(let o of t)for(let a of function(s,u,f,c,p){var d;s={...s,i:s.i||p};let v=function(g,y){let A=ut.get(g.n);return A?A(g,y):y.r(g.n,g.v[0]=="dark")}(s,u);return v?typeof v=="string"?({r:c,p:f}=at(s,u,f,c),pt(B(N(v),u,f,c,s.i),s.n)):Array.isArray(v)?v.map(g=>{var y,A;return{o:0,...g,r:[...x(c),...x(g.r)],p:(y=f,A=(d=g.p)!=null?d:f,y&~w.o|A)}}):ct(v,s,u,f,c):[{c:lt(s),p:0,o:0,r:[]}]}(o,e,r,n,i))l.splice(St(l,a),0,a);return l}function ht(t,e,r,n,i,l,o,a){return pt((a?r.flatMap(s=>B([s],n,i,l,o)):B(r,n,i,l,o)).map(s=>s.p&w.o&&(s.n||e==w.b)?{...s,p:s.p&~w.o|e,o:0}:s),t)}function Ot(t,e,r,n){var i;return i=(l,o)=>{let{n:a,p:s,r:u,i:f}=at(l,o,e);return r&&ht(a,e,r,o,s,u,f,n)},ut.set(t,i),t}function K(t,e){if(t[t.length-1]!="("){let r=[],n=!1,i=!1,l="";for(let o of t)if(!(o=="("||/[~@]$/.test(o))){if(o[0]=="!"&&(o=o.slice(1),n=!n),o.endsWith(":")){r[o=="dark:"?"unshift":"push"](o.slice(0,-1));continue}o[0]=="-"&&(o=o.slice(1),i=!i),o.endsWith("-")&&(o=o.slice(0,-1)),o&&o!="&"&&(l+=(l&&"-")+o)}l&&(i&&(l="-"+l),e[0].push({n:l,v:r.filter(Jt),i:n}))}}function Jt(t,e,r){return r.indexOf(t)==e}var yt=new Map;function N(t){let e=yt.get(t);if(!e){let r=[],n=[[]],i=0,l=0,o=null,a=0,s=(u,f=0)=>{i!=a&&(r.push(t.slice(i,a+f)),u&&K(r,n)),i=a+1};for(;a<t.length;a++){let u=t[a];if(l)t[a-1]!="\\"&&(l+=+(u=="[")||-(u=="]"));else if(u=="[")l+=1;else if(o)t[a-1]!="\\"&&o.test(t.slice(a))&&(o=null,i=a+RegExp.lastMatch.length);else if(u=="/"&&t[a-1]!="\\"&&(t[a+1]=="*"||t[a+1]=="/"))o=t[a+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")s(),r.push(u);else if(u==":")t[a+1]!=":"&&s(!1,1);else if(/[\s,)]/.test(u)){s(!0);let f=r.lastIndexOf("(");if(u==")"){let c=r[f-1];if(/[~@]$/.test(c)){let p=n.shift();r.length=f,K([...r,"#"],n);let{v:d}=n[0].pop();for(let v of p)v.v.splice(+(v.v[0]=="dark")-+(d[0]=="dark"),d.length);K([...r,Ot(c.length>1?c.slice(0,-1)+V(JSON.stringify([c,p])):c+"("+st(p)+")",w.a,p,/@$/.test(c))],n)}f=r.lastIndexOf("(",f-1)}r.length=f+1}else/[~@]/.test(u)&&t[a+1]=="("&&n.unshift([])}s(!0),yt.set(t,e=n[0])}return e}function Ct(t,e,r){return e.reduce((n,i,l)=>n+r(i)+t[l+1],t[0])}function G(t,e){return Array.isArray(t)&&Array.isArray(t.raw)?Ct(t,e,r=>Q(r).trim()):e.filter(Boolean).reduce((r,n)=>r+Q(n),t?Q(t):"")}function Q(t){let e,r="";if(t&&typeof t=="object")if(Array.isArray(t))(e=G(t[0],t.slice(1)))&&(r+=" "+e);else for(let n in t)t[n]&&(r+=" "+n);else t!=null&&typeof t!="boolean"&&(r+=" "+t);return r}var ae=Et("@"),ue=Et("~");function Et(t){return new Proxy(function(r,...n){return e("",r,n)},{get:(r,n)=>n in r?r[n]:function(i,...l){return e(n,i,l)}});function e(r,n,i){return st(N(r+t+"("+G(n,i)+")"))}}function U(t,e){return Array.isArray(t)?mt(Ct(t,e,r=>r!=null&&typeof r!="boolean"?r:"")):typeof t=="string"?mt(t):[t]}var Bt=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function mt(t){let e;t=t.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let r=[{}],n=[r[0]],i=[];for(;e=Bt.exec(t);)e[4]&&(r.shift(),i.shift()),e[3]?(i.unshift(e[3]),r.unshift({}),n.push(i.reduce((l,o)=>({[o]:l}),r[0]))):e[4]||(r[0][e[1]]&&(r.unshift({}),n.push(i.reduce((l,o)=>({[o]:l}),r[0]))),r[0][e[1]]=e[2]);return n}function dt(t,...e){var r,n;let i=U(t,e),l=(((r=i.find(o=>o.label))==null?void 0:r.label)||"css")+V(JSON.stringify(i));return n=(o,a)=>pt(i.flatMap(s=>ct(s,o,a,w.o)),l),ut.set(l,n),l}var ce=new Proxy(function(t,e){return bt("animation",t,e)},{get:(t,e)=>e in t?t[e]:function(r,n){return bt(e,r,n)}});function bt(t,e,r){return{toString:()=>dt({label:t,"@layer components":{...typeof e=="object"?e:{animation:e},animationName:""+r}})}}var Ut=Symbol();function fe(t){return t}function pe(t){return t[Ut]}function he(t,...e){return st(N(G(t,e))," ")}function Rt({presets:t=[],...e}){let r={preflight:e.preflight!==!1&&[],darkMode:void 0,darkColor:void 0,theme:{},variants:x(e.variants),rules:x(e.rules),ignorelist:x(e.ignorelist),hash:e.hash,stringify:e.stringify||Wt};for(let n of x([...t,{darkMode:e.darkMode,darkColor:e.darkColor,preflight:e.preflight!==!1&&x(e.preflight),theme:e.theme,hash:e.hash,stringify:e.stringify}])){let{preflight:i,darkMode:l=r.darkMode,darkColor:o=r.darkColor,theme:a,variants:s,rules:u,ignorelist:f,hash:c=r.hash,stringify:p=r.stringify}=typeof n=="function"?n(r):n;r={preflight:r.preflight!==!1&&i!==!1&&[...r.preflight,...x(i)],darkMode:l,darkColor:o,theme:{...r.theme,...a,extend:{...r.theme.extend,...a?.extend}},variants:[...r.variants,...x(s)],rules:[...r.rules,...x(u)],ignorelist:[...r.ignorelist,...x(f)],hash:c,stringify:p}}return r}function Wt(t,e){return t+":"+e}function de(t,e,r){return[t,et(e,r)]}function et(t,e){return typeof t=="function"?t:typeof t=="string"&&/^[\w-]+$/.test(t)?(r,n)=>({[t]:e?e(r,n):rt(r,1)}):r=>t||{[r[1]]:rt(r,2)}}function rt(t,e,r=t.slice(e).find(Boolean)||t.$$||t.input){return t.input[0]=="-"?`calc(${r} * -1)`:r}function ge(t,e,r,n){return[t,Gt(e,r,n)]}function Gt(t,e,r){let n=typeof e=="string"?(i,l)=>({[e]:r?r(i,l):i._}):e||(({1:i,_:l},o,a)=>({[i||a]:l}));return(i,l)=>{var o;let a=Vt(t||i[1]),s=(o=l.theme(a,i.$$))!=null?o:nt(i.$$,a,l);if(s!=null)return i._=rt(i,0,s),n(i,l,a)}}function ye(t,e={},r){return[t,Yt(e,r)]}function Yt(t={},e){return(r,n)=>{let{section:i=Vt(r[0]).replace("-","")+"Color"}=t;if(!/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/.test(r.$$))return;let{$1:l,$2:o}=RegExp,a=n.theme(i,l)||nt(l,i,n);if(!a||typeof a=="object")return;let{opacityVariable:s=`--tw-${r[0].replace(/-$/,"")}-opacity`,opacitySection:u=i.replace("Color","Opacity"),property:f=i,selector:c}=t,p=n.theme(u,o||"DEFAULT")||o&&nt(o,u,n),d=e||(({_:g})=>{let y=Zt(f,g);return c?{[c]:y}:y});r._={value:T(a,{opacityVariable:s||void 0,opacityValue:p||void 0}),color:g=>T(a,g),opacityVariable:s||void 0,opacityValue:p||void 0};let v=d(r,n);if(!r.dark){let g=n.d(i,l,a);g&&g!==a&&(r._={value:T(g,{opacityVariable:s||void 0,opacityValue:p||"1"}),color:y=>T(g,y),opacityVariable:s||void 0,opacityValue:p||void 0},v={"&":v,[n.v("dark")]:d(r,n)})}return v}}function Zt(t,e){let r={};return typeof e=="string"?r[t]=e:(e.opacityVariable&&e.value.includes(e.opacityVariable)&&(r[e.opacityVariable]=e.opacityValue||"1"),r[t]=e.value),r}function nt(t,e,r){if(t[0]=="["&&t.slice(-1)=="]"&&(t=it(ft(t.slice(1,-1),r.theme)),!(/color|fill|stroke/i.test(e)&&!(/^color:/.test(t)||/^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(t))||/image/i.test(e)&&!(/^image:/.test(t)||/^[a-z-]+\(/.test(t))||/weight/i.test(e)&&!(/^(number|any):/.test(t)||/^\d+$/.test(t))||/position/i.test(e)&&/^(length|size):/.test(t))))return t.replace(/^[a-z-]+:/,"")}function Vt(t){return t.replace(/-./g,e=>e[1].toUpperCase())}function it(t){return t.includes("url(")?t.replace(/(.*?)(url\(.*?\))(.*?)/g,(e,r="",n,i="")=>it(r)+n+it(i)):t.replace(/(^|[^\\])_+/g,(e,r)=>r+" ".repeat(e.length-r.length)).replace(/\\_/g,"_").replace(/(calc|min|max|clamp)\(.+\)/g,e=>e.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 "))}function vt(t,e,r,n,i,l){for(let o of e){let a=r.get(o);a||r.set(o,a=n(o));let s=a(t,i,l);if(s)return s}}function Ht(t){var e;return ot(t[0],typeof(e=t[1])=="function"?e:()=>e)}function Kt(t){var e,r;return Array.isArray(t)?ot(t[0],et(t[1],t[2])):ot(t,et(e,r))}function ot(t,e){return Nt(t,(r,n,i,l)=>{let o=n.exec(r);if(o)return o.$$=r.slice(o[0].length),o.dark=l,e(o,i)})}function Nt(t,e){let r=x(t).map(Qt);return(n,i,l)=>{for(let o of r){let a=e(n,o,i,l);if(a)return a}}}function Qt(t){return typeof t=="string"?RegExp("^"+t+(t.includes("$")||t.slice(-1)=="-"?"":"$")):t}function $t(t,e){return t.replace(/--(tw(?:-[\w-]+)?)\b/g,(r,n)=>"--"+e(n).replace("#",""))}function Xt(t,e){let r=Rt(t),n=function({theme:s,darkMode:u,darkColor:f,variants:c,rules:p,hash:d,stringify:v,ignorelist:g}){let y=new Map,A=new Map,h=new Map,b=new Map,m=Nt(g,($,j)=>j.test($));c.push(["dark",Array.isArray(u)||u=="class"?`${x(u)[1]||".dark"} &`:typeof u=="string"&&u!="media"?u:"@media (prefers-color-scheme:dark)"]);let C=typeof d=="function"?$=>d($,V):d?V:At;return{theme:function({extend:$={},...j}){let E={},Ft={get colors(){return I("colors")},theme:I,negative:()=>({}),breakpoints(k){let M={};for(let S in k)typeof k[S]=="string"&&(M["screen-"+S]=k[S]);return M}};return I;function I(k,M,S,L){if(k){var q;if({1:k,2:L}=/^(\S+?)(?:\s*\/\s*([^/]+))?$/.exec(k)||[,k],/[.[]/.test(k)){let R=[];k.replace(/\[([^\]]+)\]|([^.[]+)/g,(J,It,Lt=It)=>R.push(Lt)),k=R.shift(),S=M,M=R.join("-")}let O=E[k]||Object.assign(Object.assign(E[k]={},gt(j,k)),gt($,k));if(M==null)return O;let P=(q=O[M||"DEFAULT"])!=null?q:S;return L?T(P,{opacityValue:ft(L,I)}):P}let _={};for(let O of[...Object.keys(j),...Object.keys($)])_[O]=I(O);return _}function gt(k,M){let S=k[M];return typeof S=="function"&&(S=S(Ft)),S&&/color|fill|stroke/i.test(M)?function L(q,_=[]){let O={};for(let P in q){let R=q[P],J=[..._,P];O[J.join("-")]=R,P=="DEFAULT"&&(J=_,O[_.join("-")]=R),typeof R=="object"&&Object.assign(O,L(R,J))}return O}(S):S}}(s),e:W,h:C,s($,j){return v($t($,C),$t(j,C),this)},d($,j,E){return f?.($,j,this,E)},v($){return y.has($)||y.set($,vt($,c,A,Ht,this)||"&:"+$),y.get($)},r($,j){let E=JSON.stringify([$,j]);return h.has(E)||h.set(E,!m($,this)&&vt($,p,b,Kt,this,j)),h.get(E)}}}(r),i=new Map,l=[],o=new Set;function a(s){let u=s.n&&n.h(s.n),f=tt(u?{...s,n:u}:s);if(f&&!o.has(f)){o.add(f);let c=St(l,s);e.insert(f,c,s),l.splice(c,0,s)}return u}return e.resume(s=>i.set(s,s),(s,u)=>{e.insert(s,l.length,u),l.push(u),o.add(s)}),Object.defineProperties(function(s){if(!i.size)for(let f of x(r.preflight))typeof f=="function"&&(f=f(n)),f&&(typeof f=="string"?ht("",w.b,N(f),n,w.b,[],!1,!0):ct(f,{},n,w.b)).forEach(a);s=""+s;let u=i.get(s);if(!u){let f=new Set;for(let c of B(N(s),n))f.add(c.c).add(a(c));u=[...f].filter(Boolean).join(" "),i.set(s,u).set(u,u)}return u},Object.getOwnPropertyDescriptors({get target(){return e.target},theme:n.theme,config:r,snapshot(){let s=e.snapshot(),u=new Set(o),f=new Map(i),c=[...l];return()=>{s(),o=u,i=f,l=c}},clear(){e.clear(),o=new Set,i=new Map,l=[]},destroy(){this.clear(),e.destroy()}}))}function zt(t,e){return t!=e&&""+t.split(" ").sort()!=""+e.split(" ").sort()}function te(t=z,e=document.documentElement){if(!e)return t;let r=new MutationObserver(i);r.observe(e,{attributeFilter:["class"],subtree:!0,childList:!0}),l(e),i([{target:e,type:""}]);let{destroy:n}=t;return t.destroy=()=>{r.disconnect(),n.call(t)},t;function i(o){for(let{type:a,target:s}of o)if(a[0]=="a")l(s);else for(let u of s.querySelectorAll("[class]"))l(u);r.takeRecords()}function l(o){let a,s=o.getAttribute("class");s&&zt(s,a=t(s))&&o.setAttribute("class",a)}}function _t(t){let e=document.querySelector(t||"style[data-twind]");return e&&e.tagName=="STYLE"||((e=document.createElement("style")).dataset.twind="",document.head.prepend(e)),e}function ee(t){let e=t?.cssRules?t:(t&&typeof t!="string"?t:_t(t)).sheet;return{target:e,snapshot(){let r=Array.from(e.cssRules,n=>n.cssText);return()=>{this.clear(),r.forEach(this.insert)}},clear(){for(let r=e.cssRules.length;r--;)e.deleteRule(r)},destroy(){var r;(r=e.ownerNode)==null||r.remove()},insert(r,n){try{e.insertRule(r,n)}catch{e.insertRule(":root{}",n),/:-[mwo]/.test(r)}},resume:D}}function re(t){let e=t&&typeof t!="string"?t:_t(t);return{target:e,snapshot(){let r=Array.from(e.childNodes,n=>n.textContent);return()=>{this.clear(),r.forEach(this.insert)}},clear(){e.textContent=""},destroy(){e.remove()},insert(r,n){e.insertBefore(document.createTextNode(r),e.childNodes[n]||null)},resume:D}}function me(t){let e=[];return{target:e,snapshot(){let r=[...e];return()=>{e.splice(0,e.length,...r)}},clear(){e.length=0},destroy(){this.clear()},insert(r,n,i){e.splice(n,0,t?`/*!${i.p.toString(36)},${(2*i.o).toString(36)}${i.n?","+i.n:""}*/${r}`:r)},resume:D}}function Pt(t,e){let r=t?re():ee();return e||(r.resume=ne),r}function Tt(t){return(t.ownerNode||t).textContent||(t.cssRules?Array.from(t.cssRules,e=>e.cssText):x(t)).join("")}function ne(t,e){let r=Tt(this.target),n=/\/\*!([\da-z]+),([\da-z]+)(?:,(.+?))?\*\//g;if(n.test(r)){var i;let l;for(let o of(n.lastIndex=0,this.clear(),document.querySelectorAll("[class]")))t(o.getAttribute("class"));for(;i=n.exec(r),l&&e(r.slice(l.index+l[0].length,i?.index),{p:parseInt(l[1],36),o:parseInt(l[2],36)/2,n:l[3]}),l=i;);}}function be(t){if(document.currentScript){let e=()=>r.disconnect(),r=new MutationObserver(n=>{for(let{target:i}of n)if(i===document.body)return t(),e()});return r.observe(document.documentElement,{childList:!0,subtree:!0}),e}return D}var z=new Proxy(D,{apply:(t,e,r)=>F(r[0]),get(t,e){let r=F[e];return typeof r=="function"?function(){return r.apply(F,arguments)}:r}});function ie(t={},e=Pt,r){return F?.destroy(),F=te(Xt(t,typeof e=="function"?e():e),r)}var ve=function(t,...e){(typeof this=="function"?this:z)(dt({"@layer base":U(t,e)}))};function $e(t,e=!0){var r;let n=Rt(t);return ie({...n,hash:(r=n.hash)!=null?r:e},()=>Pt(!e))}var xe=function t(e){return new Proxy(function(r,...n){return xt(e,"",r,n)},{get:(r,n)=>n==="bind"?t:n in r?r[n]:function(i,...l){return xt(e,n,i,l)}})}();function xt(t,e,r,n){return{toString(){let i=U(r,n),l=W(e+V(JSON.stringify([e,i])));return(typeof t=="function"?t:z)(dt({[`@keyframes ${l}`]:U(r,n)})),l}}}function we(t,e={}){let{tw:r=z,minify:n=At}=typeof e=="function"?{tw:e}:e,{html:i,css:l}=oe(t,r);return i.replace("</head>",`<style data-twind>${n(l,i)}</style></head>`)}function oe(t,e=z){let r=e.snapshot(),n={html:le(t,e),css:Tt(e.target)};return r(),n}function le(t,e=z){let r="",n=0;return function(i,l){let o=1,a=0,s="",u="",f=c=>{o==5&&u=="class"&&l(a,c,s)===!1&&(i="")};for(let c=0;c<i.length;c++){let p=i[c];o==1?p=="<"&&(o=i.substr(c+1,3)=="!--"?4:3):o==4?p==">"&&i.slice(c-2,c)=="--"&&(o=1):s?p==s&&i[c-1]!="\\"&&(f(c),o=2,s=""):p=='"'||p=="'"?(s=p,a+=1):p==">"?(f(c),o=1):o&&(p=="="?(u=i.slice(a,c),o=5,a=c+1):p=="/"&&(o<5||i[c+1]==">")?(f(c),o=0):/\s/.test(p)&&(f(c),o=2,a=c+1))}}(t,(i,l,o)=>{var a;let s=t.slice(i,l),u=e(((a=o)=='"'?s.replace(/(=|\[)(?:&#39;|&apos;|&#x27;)|(?:&#39;|&apos;|&#x27;)(])/g,"$1'$2"):a=="'"?s.replace(/(=|\[)(?:&#34;|&quot;|&#x22;)|(?:&#34;|&quot;|&#x22;)(])/g,'$1"$2'):s).replace(/(&#38;|&amp;|&#x26;)/g,"&"));zt(s,u)&&(o=o?"":'"',r+=t.slice(n,i)+o+u+o,n=l)}),r+t.slice(n,t.length)}var ke=(t,e)=>typeof t=="function"?wt(e,t):wt(t);function wt(t={},e){let{label:r="style",base:n,props:i={},defaults:l,when:o=[]}=t,a={...e?.defaults,...l},s=V(JSON.stringify([r,e?.className,n,i,a,o])),u=f("",n||"",w.c);function f(c,p,d){return Ot(((e?e.className.replace(/#.+$/,"~"):"")+r+c+s).replace(/[: ,()[\]]/,""),d,p&&N(p))}return Object.defineProperties(function(c){let p,d;Array.isArray(c)&&(p=!0,c=Object.fromEntries(new URLSearchParams(c[1]).entries()));let v={...a,...c},g=p?"":(e?e(v)+" ":"")+u;for(let y in i){let A=i[y],h=v[y];if(h===Object(h)){let b="";for(let m in d="",h){let C=A[h[m]];C&&(b+="@"+m+"-"+h[m],d+=(d&&" ")+(m=="_"?C:m+":("+C+")"))}d&&(g+=" "+f("--"+y+"-"+b,d,402653184))}else(d=A[h])&&(g+=" "+f("--"+y+"-"+h,d,402653184))}return o.forEach((y,A)=>{let h="";for(let b in y[0]){let m=v[b];if(m!==Object(m)&&""+m==""+y[0][b])h+=(h&&"_")+b+"-"+m;else{h="";break}}h&&(d=y[1])&&(g+=" "+f("-"+A+"--"+h,d,536870912))}),g},Object.getOwnPropertyDescriptors({className:u,defaults:a,selector:"."+W(u)}))}var Ae=function(t,...e){return(typeof this=="function"?this:z)(G(t,e))};export{ce as animation,ae as apply,nt as arbitrary,x as asArray,be as auto,se as autoDarkColor,Yt as colorFromTheme,le as consume,dt as css,ee as cssom,he as cx,Rt as defineConfig,re as dom,W as escape,oe as extract,et as fromMatch,Gt as fromTheme,pe as getAutocompleteProvider,Pt as getSheet,V as hash,At as identity,ve as injectGlobal,we as inline,$e as install,xe as keyframes,de as match,ye as matchColor,ge as matchTheme,kt as mql,D as noop,it as normalize,te as observe,N as parse,ie as setup,ue as shortcut,Tt as stringify,ke as style,Zt as toCSS,T as toColorValue,z as tw,Xt as twind,Ae as tx,me as virtual,fe as withAutocomplete};
//# sourceMappingURL=core.mjs.map