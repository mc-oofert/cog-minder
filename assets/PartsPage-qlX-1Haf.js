import{t as oe,j as r,B as ee,s as P,f as z,u as re,c as ae,b as k,d as H,z as I,S as ne,A as q,R as ie,a as le,l as ce,e as ue,p as de,g as pe,C as he}from"./index-GrqnE602.js";import{a as Q,S as X,C as v,b as A,H as N,G as ye,I as fe,u as me}from"./ItemPopover-0ZkQ2HwV.js";import{T as ge}from"./Table-a2wZXlAD.js";import"./items-bCTdCTgI.js";function d(){return r.jsx("pre",{className:"comparison-neutral",children:" "})}function w({children:e}){return r.jsx("pre",{className:"comparison-neutral",children:e})}function D({children:e}){return r.jsx("pre",{className:"comparison-negative",children:e})}function M({children:e}){return r.jsx("pre",{className:"comparison-positive",children:e})}function _({leftValue:e,rightValue:a}){return e===a?r.jsx(d,{}):e<a?r.jsxs(w,{children:["(+",a-e,")"]}):r.jsxs(w,{children:["(-",e-a,")"]})}function f({leftValue:e,rightValue:a}){return e===a?r.jsx(d,{}):e<a?r.jsxs(D,{children:["+",a-e]}):r.jsxs(M,{children:["-",e-a]})}function h({leftValue:e,rightValue:a}){return e===a?r.jsx(d,{}):e<a?r.jsxs(M,{children:["+",a-e]}):r.jsxs(D,{children:["-",e-a]})}function ve({leftWeapon:e,rightWeapon:a}){return a.waypoints!==void 0?r.jsx(h,{leftValue:z(e.waypoints,0),rightValue:z(a.waypoints,0)}):r.jsx(f,{leftValue:e.arc??0,rightValue:a.arc??0})}function xe({leftPropulsion:e,rightPropulsion:a}){return e.burnout!==void 0||a.burnout!==void 0?r.jsx(f,{leftValue:z(e.burnout,0),rightValue:z(a.burnout,0)}):e.type==="Treads"&&a.type==="Treads"?e.siege===a.siege?r.jsx(d,{}):e.siege===X.High?r.jsx(D,{children:"High"}):e.siege===X.Standard&&a.siege===void 0?r.jsx(D,{children:"Standard"}):e.siege===void 0?r.jsx(M,{children:"N/A"}):r.jsx(M,{children:"Standard"}):r.jsx(d,{})}function je({leftWeapon:e,rightWeapon:a}){return e.minChunks===a.minChunks&&e.maxChunks===a.maxChunks?r.jsx(d,{}):r.jsxs(w,{children:[e.minChunks,"-",e.maxChunks]})}function J({leftWeapon:e,rightWeapon:a}){if(e.critical===void 0||a.critical===void 0||e.criticalType===a.criticalType)return r.jsx(h,{leftValue:e.critical??0,rightValue:a.critical??0});let s;switch(e.criticalType){case v.Blast:s="(Blast)";break;case v.Burn:s="(Burn)";break;case v.Corrupt:s="(Corrup)";break;case v.Destroy:s="(Destro)";break;case v.Detonate:s="(Detona)";break;case v.Impale:s="(Impale)";break;case v.Intensify:s="(Intens)";break;case v.Meltdown:s="(Meltdo)";break;case v.Phase:s="(Phase)";break;case v.Sever:s="(Sever)";break;case v.Smash:s="(Smash)";break;case v.Sunder:s="(Sunder)";break;default:throw"Invalid critical type"}return r.jsx(w,{children:s})}function G({explosive:e,leftWeapon:a,rightWeapon:s}){function i(g){let b=0,m=0;if(g!=null&&g.includes("-")){const x=g.split("-");b=parseInt(x[0]),m=parseInt(x[1])}else g!==void 0&&(b=parseInt(g),m=b);return{average:(m+b)/2,min:b,max:m}}let t,n;e?(t=a.explosionDamage,n=s.explosionDamage):(t=a.damage,n=s.damage);const o=i(t),l=i(n);if(o.average===l.average)return o.min===l.min?r.jsx(d,{}):r.jsxs(w,{children:[o.min,"-",o.max]});function c(g){return g>0?"+"+g:g.toString()}const u=l.min-o.min,y=l.max-o.max;return o.average<l.average?r.jsxs(M,{children:[c(u),"/",c(y)]}):r.jsxs(D,{children:[c(u),"/",c(y)]})}function F({explosive:e,leftWeapon:a,rightWeapon:s}){if(e){if(a.explosionType===s.explosionType||a.explosionType===void 0)return r.jsx(d,{})}else if(a.damageType===s.damageType||a.damageType===void 0)return r.jsx(d,{});function i(t){switch(t){case"Electromagnetic":return"EM";case"Entropic":return"EN";case"Explosive":return"EX";case"Impact":return"I";case"Kinetic":return"KI";case"Phasic":return"PH";case"Piercing":return"P";case"Slashing":return"S";case"Thermal":return"TH"}return""}return r.jsxs(w,{children:["(",i(e?a.explosionType:a.damageType),")"]})}function be({leftPropulsion:e,rightPropulsion:a}){return e.modPerExtra!==void 0&&a.modPerExtra!==void 0?r.jsx(f,{leftValue:e.modPerExtra,rightValue:a.modPerExtra}):e.drag!==void 0&&a.drag!==void 0?r.jsx(h,{leftValue:e.drag,rightValue:a.drag}):r.jsx(d,{})}function Se({leftItem:e,rightItem:a}){const s=Math.ceil(e.rating),i=Math.ceil(a.rating);if(s===i)return r.jsx(d,{});if(s<i){let t;return e.ratingString.includes("*")||a.ratingString.includes("*")?t="* +"+(i-s):t="+"+(i-s),r.jsx("pre",{className:"comparison-positive",children:t})}else{let t;return e.ratingString.includes("*")||a.ratingString.includes("*")?t="* -"+(s-i):t="-"+(s-i),r.jsx("pre",{className:"comparison-negative",children:t})}}function Y({explosive:e,leftWeapon:a,rightWeapon:s}){function i(o){return o===A.Fine?100:o===A.Narrow?50:o===A.Intermediate?30:o===A.Wide?10:0}function t(o){return o===N.Minimal?5:o===N.Low?25:o===N.Medium?37:o===N.High?50:o===N.Massive?80:0}const n=t(e?s.explosionHeatTransfer:s.heatTransfer);if(n!=0){const o=t(e?a.explosionHeatTransfer:a.heatTransfer);return r.jsx(_,{leftValue:o,rightValue:n})}else{const o=i(e?a.explosionSpectrum:a.spectrum),l=i(e?s.explosionSpectrum:s.spectrum);return r.jsx(_,{leftValue:o,rightValue:l})}}function Ve({leftWeapon:e,rightWeapon:a}){if(e.penetration==="Unlimited")return a.penetration==="Unlimited"?r.jsx(d,{}):r.jsx(D,{children:"-Inf."});if(a.penetration==="Unlimited")return r.jsx(M,{children:"+Inf."});function s(n){return n===void 0?0:n.split("/").length}const i=s(e.penetration),t=s(a.penetration);return r.jsx(h,{leftValue:i,rightValue:t})}function Ce({leftItem:e,rightItem:a}){if(e.slot==="Power"&&a.slot==="Power"){const s=e,i=a;return r.jsxs(r.Fragment,{children:[r.jsx(d,{}),r.jsx(h,{leftValue:s.energyGeneration??0,rightValue:i.energyGeneration??0}),r.jsx(h,{leftValue:s.energyStorage??0,rightValue:i.energyStorage??0}),r.jsx(h,{leftValue:s.powerStability??100,rightValue:i.powerStability??100})]})}}function Ke({leftItem:e,rightItem:a}){if(e.slot==="Propulsion"&&a.slot==="Propulsion"){const s=e,i=a;return r.jsxs(r.Fragment,{children:[r.jsx(d,{}),r.jsx(f,{leftValue:s.timePerMove,rightValue:i.timePerMove}),r.jsx(be,{leftPropulsion:s,rightPropulsion:i}),r.jsx(f,{leftValue:s.energyPerMove??0,rightValue:i.energyPerMove??0}),r.jsx(f,{leftValue:s.heatPerMove??0,rightValue:i.heatPerMove??0}),r.jsx(h,{leftValue:s.support,rightValue:i.support}),r.jsx(f,{leftValue:s.penalty,rightValue:i.penalty}),r.jsx(xe,{leftPropulsion:s,rightPropulsion:i})]})}}function ke({leftItem:e,rightItem:a}){if((e.slot==="Power"||e.slot==="Propulsion"||e.slot==="Utility")&&(a.slot==="Power"||a.slot==="Propulsion"||a.slot==="Utility")){const s=e,i=a;return r.jsxs(r.Fragment,{children:[r.jsx(d,{}),r.jsx(f,{leftValue:s.energyUpkeep??0,rightValue:i.energyUpkeep??0}),r.jsx(f,{leftValue:s.matterUpkeep??0,rightValue:i.matterUpkeep??0}),r.jsx(f,{leftValue:s.heatGeneration??0,rightValue:i.heatGeneration??0}),r.jsx(d,{})]})}}function Te({leftItem:e,rightItem:a}){if(e.slot==="Weapon"&&a.slot==="Weapon"){let s=function(l){return l.type==="Slashing Weapon"||l.type==="Impact Weapon"||l.type==="Piercing Weapon"||l.type==="Special Melee Weapon"},i=function(l){return l.type==="Ballistic Gun"||l.type==="Energy Gun"||l.type==="Ballistic Cannon"||l.type==="Energy Cannon"||l.type==="Special Weapon"},t=function(l){return i(l)||l.type==="Launcher"};const n=e,o=a;if(s(n)&&s(o)){let l;return n.damage!==void 0&&o.damage!==void 0&&(l=r.jsxs(r.Fragment,{children:[r.jsx(d,{}),";",r.jsx(G,{leftWeapon:n,rightWeapon:o,explosive:!1}),r.jsx(F,{leftWeapon:n,rightWeapon:o,explosive:!1}),r.jsx(J,{leftWeapon:n,rightWeapon:o}),";",r.jsx(h,{leftValue:n.disruption??0,rightValue:o.disruption??0}),r.jsx(h,{leftValue:n.salvage??0,rightValue:o.salvage??0}),r.jsx(d,{}),";"]})),r.jsxs(r.Fragment,{children:[r.jsx(d,{}),r.jsx(f,{leftValue:n.shotEnergy??0,rightValue:o.shotEnergy??0}),r.jsx(f,{leftValue:n.shotMatter??0,rightValue:o.shotMatter??0}),r.jsx(f,{leftValue:n.shotHeat??0,rightValue:o.shotHeat??0}),r.jsx(h,{leftValue:n.targeting??0,rightValue:o.targeting??0}),r.jsx(f,{leftValue:n.delay??0,rightValue:o.delay??0}),r.jsx(d,{}),l]})}if(t(n)&&t(o)){let l;return i(n)&&i(o)&&n.damage!==void 0&&o.damage!==void 0?l=r.jsxs(r.Fragment,{children:[r.jsx(h,{leftValue:n.projectileCount,rightValue:o.projectileCount}),r.jsx(G,{leftWeapon:n,rightWeapon:o,explosive:!1}),r.jsx(F,{leftWeapon:n,rightWeapon:o,explosive:!1}),r.jsx(J,{leftWeapon:n,rightWeapon:o}),r.jsx(Ve,{leftWeapon:n,rightWeapon:o}),r.jsx(Y,{leftWeapon:n,rightWeapon:o,explosive:!1}),r.jsx(h,{leftValue:n.disruption??0,rightValue:o.disruption??0}),r.jsx(h,{leftValue:n.salvage??0,rightValue:o.salvage??0}),r.jsx(d,{})]}):n.type==="Launcher"&&o.type==="Launcher"&&(l=r.jsxs(r.Fragment,{children:[r.jsx(h,{leftValue:n.projectileCount,rightValue:o.projectileCount}),r.jsx(h,{leftValue:n.explosionRadius??0,rightValue:o.explosionRadius??0}),r.jsx(G,{leftWeapon:n,rightWeapon:o,explosive:!0}),r.jsx(f,{leftValue:n.falloff??0,rightValue:o.falloff??0}),r.jsx(je,{leftWeapon:n,rightWeapon:o}),r.jsx(F,{leftWeapon:n,rightWeapon:o,explosive:!0}),r.jsx(Y,{leftWeapon:n,rightWeapon:o,explosive:!0}),r.jsx(h,{leftValue:n.explosionDisruption??0,rightValue:o.explosionDisruption??0}),r.jsx(h,{leftValue:n.explosionSalvage??0,rightValue:o.explosionSalvage??0}),r.jsx(d,{})]})),r.jsxs(r.Fragment,{children:[r.jsx(d,{}),r.jsx(h,{leftValue:n.range??0,rightValue:o.range??0}),r.jsx(f,{leftValue:n.shotEnergy??0,rightValue:o.shotEnergy??0}),r.jsx(f,{leftValue:n.shotMatter??0,rightValue:o.shotMatter??0}),r.jsx(f,{leftValue:n.shotHeat??0,rightValue:o.shotHeat??0}),r.jsx(f,{leftValue:n.recoil??0,rightValue:o.recoil??0}),r.jsx(h,{leftValue:n.targeting??0,rightValue:o.targeting??0}),r.jsx(f,{leftValue:n.delay??0,rightValue:o.delay??0}),r.jsx(h,{leftValue:n.overloadStability??100,rightValue:o.overloadStability??100}),r.jsx(ve,{leftWeapon:n,rightWeapon:o}),r.jsx(d,{}),l]})}}}function we({leftItem:e,rightItem:a}){return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"item-art-image-container part-comparison-image-container"}),r.jsx(d,{}),r.jsx("pre",{className:"comparison-neutral details-item-image-title"}),r.jsx("pre",{className:"details-summary",children:"Comparison"}),r.jsx(d,{}),r.jsx(d,{}),r.jsx(d,{}),r.jsx(f,{leftValue:e.mass??0,rightValue:a.mass??0}),r.jsx(Se,{leftItem:e,rightItem:a}),r.jsx(h,{leftValue:e.integrity,rightValue:a.integrity}),r.jsx(h,{leftValue:e.coverage??0,rightValue:a.coverage??0}),r.jsx(d,{}),r.jsx(d,{}),r.jsx(d,{}),r.jsx(ke,{leftItem:e,rightItem:a}),r.jsx(Ce,{leftItem:e,rightItem:a}),r.jsx(Ke,{leftItem:e,rightItem:a}),r.jsx(Te,{leftItem:e,rightItem:a})]})}function De({itemData:e,items:a,pageState:s,setPageState:i}){const t=oe(),n=a.map(u=>({value:u.name}));function o({itemName:u,setItem:y}){return console.log(u),console.log(n.find(g=>g.value===u)),r.jsx(P,{value:n.find(g=>g.value===u)||{value:{itemName:u}},onChange:g=>{y(g.value)},options:n})}const l=e.getItem(s.compareLeftItem||"Lgt. Assault Rifle"),c=e.getItem(s.compareRightItem||"Assault Rifle");return r.jsxs("div",{className:"comparison-container",children:[r.jsxs("div",{className:"part-comparison-part-column",children:[r.jsx(o,{itemName:l.name,setItem:u=>{i({...s,compareLeftItem:u})}}),r.jsx(Q,{item:l})]}),r.jsxs("div",{className:"part-comparison-details-column",children:[r.jsx(ee,{className:t==="Cogmind"?"swap-button-cogmind":"swap-button",tooltip:"Swaps the left and right items in the comparison",onClick:()=>{i({...s,compareLeftItem:c.name,compareRightItem:l.name})},children:"← Swap →"}),r.jsx("div",{children:r.jsx(we,{leftItem:l,rightItem:c})})]}),r.jsxs("div",{className:"part-comparison-part-column",children:[r.jsx(o,{itemName:c.name,setItem:u=>{i({...s,compareRightItem:u})}}),r.jsx(Q,{item:c})]})]})}function Me({items:e}){const a=e.map(s=>r.jsx(ye,{item:s},s.name));return r.jsx("div",{className:"part-gallery-grid",children:a})}const Ne=[{value:"Simple",tooltip:"Part name viewer with clickable parts to show part detail."},{value:"Comparison",tooltip:"Side-by-side part comparison that shows details of both selected parts."},{value:"Spreadsheet",tooltip:"Spreadsheet view that shows all applicable stats. Stats are filtered depending on the selected slot."},{value:"Gallery",tooltip:"Gallery image viewer. Similar to simple view but shows the art of all parts in a grid as well as the names."}],Pe=[{value:"Any"},{value:"N/A",label:"Other"},{value:"Power"},{value:"Propulsion"},{value:"Utility"},{value:"Weapon"}],$=[{label:"Any",value:"Any"}],Ee=[{value:"Any"},{value:"Engine"},{value:"Power Core"},{value:"Reactor"}],Ae=[{value:"Any"},{value:"Flight Unit"},{value:"Hover Unit"},{value:"Wheel"},{value:"Leg"},{value:"Treads"}],Le=[{value:"Any"},{value:"Artifact"},{value:"Device"},{value:"Hackware"},{value:"Processor"},{value:"Protection"},{value:"Storage"}],ze=[{value:"Any"},{value:"Ballistic Cannon"},{value:"Ballistic Gun"},{value:"Energy Cannon"},{value:"Energy Gun"},{value:"Launcher"},{value:"Impact Weapon"},{value:"Piercing Weapon"},{value:"Slashing Weapon"},{value:"Special Melee Weapon"},{value:"Special Weapon"}],Re=[{value:"Any",tooltip:"All parts."},{value:"0b10",tooltip:"Parts that can be found on any standard complex floors or complex-controlled branches."},{value:"Alien",tooltip:"All Sigix-related alien artifacts."},{value:"Derelict",tooltip:"Derelict-created parts, either found in derelict-controlled areas or on unique derelicts.",spoiler:"Spoiler"},{value:"Architects",tooltip:"Parts found on Architect-faction related bots.",spoiler:"Redacted"},{value:"Exile",tooltip:"Exile vault items and unique Exile bot parts."},{value:"Golem",tooltip:"Parts created by the GOLEM Unit.",spoiler:"Spoiler"},{value:"Heroes",tooltip:"Parts unique to the Heroes of Zion.",spoiler:"Spoiler"},{value:"Lab",tooltip:"Parts that can be found in the hidden Lab.",spoiler:"Redacted"},{value:"Quarantine",tooltip:"Parts that can be found in Quarantine.",spoiler:"Spoiler"},{value:"S7 Guarded",tooltip:"Parts that can be found in Section 7 suspension chambers guarded by S7 Guards.",spoiler:"Redacted"},{value:"S7 Hangar",tooltip:"Parts that can be found in the Section 7 spaceship chamber.",spoiler:"Redacted"},{value:"S7 LRC Lab",tooltip:"Parts that can be found in the Section 7 LRC label. LRC parts are found in the locked room with a Terminal, the others are found in suspension chambers.",spoiler:"Redacted"},{value:"S7 Unguarded",tooltip:"Parts that can be found in unguarded Section 7 suspension chambers.",spoiler:"Redacted"},{value:"Testing",tooltip:"Parts that can be found in Testing.",spoiler:"Spoiler"},{value:"Unobtainable",tooltip:"Parts that are not obtainable by normal gameplay."},{value:"Warlord",tooltip:"Parts that are obtainable in the Warlord map, or on Warlord-aligned bots",spoiler:"Spoiler"},{value:"Zion",tooltip:"Parts that are obtainable in Zion.",spoiler:"Spoiler"},{value:"Zionite",tooltip:"Parts that are obtainable from Imprinter-aligned Zionites. Some are obtainable in Zion Deep Caves, and some are only obtainable by Imprinting.",spoiler:"Spoiler"}],He=[{value:"Level 1"},{value:"Level 2"},{value:"Level 3"}],L=[{value:"Alphabetical"},{value:"Gallery"},{value:"Coverage"},{value:"Integrity"},{value:"Mass"},{value:"Rating"},{value:"Size"},{value:"Arc"},{value:"Critical"},{value:"Damage"},{value:"Delay"},{value:"Disruption"},{value:"Drag"},{value:"Energy/Move"},{value:"Energy Generation"},{value:"Energy Storage"},{value:"Energy Upkeep"},{value:"Explosion Radius"},{value:"Falloff"},{value:"Heat/Move"},{value:"Heat Generation"},{value:"Heat Transfer"},{value:"Matter Upkeep"},{value:"Penalty"},{value:"Projectile Count"},{value:"Range"},{value:"Recoil"},{value:"Salvage"},{value:"Shot Energy"},{value:"Shot Heat"},{value:"Shot Matter"},{value:"Spectrum"},{value:"Support"},{value:"Targeting"},{value:"Time/Move"},{value:"Waypoints"}],U=[{value:"None"},...L],T=[{value:"Ascending"},{value:"Descending"}];function Ge({pageState:e,setPageState:a}){function s({options:i}){const t=i.find(n=>n.value===e.slotType)||i[0];return r.jsx(I,{label:"Type",className:"slot-type-select",isSearchable:!1,options:i,tooltip:"Additional filter based on the sub-type of the part based on slot.",value:t,onChange:n=>{a({...e,slotType:n.value})}})}switch(e.slot){case"Power":return r.jsx(s,{options:Ee});case"Propulsion":return r.jsx(s,{options:Ae});case"Utility":return r.jsx(s,{options:Le});case"Weapon":return r.jsx(s,{options:ze})}return r.jsx(I,{label:"Type",className:"slot-type-select",isSearchable:!1,options:$,value:$[0],tooltip:"Additional filter based on the sub-type of the part based on slot."})}function Fe({pageState:e,setPageState:a}){const s=re(),i=Re.filter(t=>ae(t.spoiler||"None",s));return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"page-input-group",children:[r.jsx(k,{label:"Name",placeholder:"Any",tooltip:"The name of a part to search for.",value:e.name||"",onChange:t=>{a({...e,name:t})}}),r.jsx(k,{label:"Effect",placeholder:"Any",tooltip:"The text to search for the description or effect of a part.",value:e.effect||"",onChange:t=>{a({...e,effect:t})}}),r.jsx(H,{label:"Mode",buttons:Ne,className:"flex-grow-0",tooltip:"The mode to display the parts in.",selected:e.mode,onValueChanged:t=>{a({...e,mode:t})}}),r.jsx(ee,{className:"flex-grow-0",tooltip:"Resets all filters to their default (unfiltered) state",onClick:()=>{a({mode:e.mode})},children:"Reset"})]}),r.jsxs("div",{className:"page-input-group",children:[r.jsx(k,{label:"Rating",placeholder:"Any",tooltip:"The rating of the part. Use * to search for prototypes only. Add a + to include larger values, or a - to include smaller values.",value:e.rating||"",onChange:t=>{a({...e,rating:t})}}),r.jsx(k,{label:"Size",placeholder:"Any",tooltip:"The size of the part (aka # of slots). Add a + to include larger values, or a - to include smaller values.",value:e.size||"",onChange:t=>{a({...e,size:t})}}),r.jsx(k,{label:"Mass",placeholder:"Any",tooltip:"The mass of the part. Add a + to include larger values, or a - to include smaller values.",value:e.mass||"",onChange:t=>{a({...e,mass:t})}}),r.jsx(I,{label:"Category",tooltip:"Additional part category like location/faction",className:"category-type-select",isSearchable:!1,options:i,value:i.find(t=>t.value===e.category)||i[0],onChange:t=>{a({...e,category:t.value})}})]}),r.jsxs("div",{className:"page-input-group",children:[r.jsx(H,{label:"Slot",buttons:Pe,flexGrowButtonCount:!0,selected:e.slot,tooltip:"Only shows parts with the matching slot.",onValueChanged:t=>{t!==e.slot&&a({...e,slot:t,slotType:"Any"})}}),r.jsx(Ge,{pageState:e,setPageState:a})]}),r.jsxs("div",{className:"page-input-group",children:[r.jsx(ne,{label:"Schematics",tooltip:"Search for hackable schematics."}),r.jsx(k,{label:"Depth",tooltip:"Current map depth. Can enter as 7 or -7.",placeholder:"Any",value:e.schematicsDepth||"",onChange:t=>{a({...e,schematicsDepth:t})}}),r.jsx(H,{label:"Terminal Level",tooltip:"The level of the terminal to hack from. Higher level terminals can hack higher rating schematics.",buttons:He,selected:e.terminalLevel,onValueChanged:t=>{a({...e,terminalLevel:t})}})]}),e.mode!=="Spreadsheet"&&r.jsxs("div",{className:"page-input-group",children:[r.jsxs(q,{label:"Sort by",tooltip:"How to sort parts matching all filters.",children:[r.jsx(P,{className:"sort-select",options:L,isSearchable:!1,value:L.find(t=>t.value===e.primarySort)||L[0],onChange:t=>{t.value==="Alphabetical"||t.value==="Gallery"?a({...e,primarySort:t.value,secondarySort:void 0}):e.secondarySort===void 0||e.secondarySort==="None"?a({...e,primarySort:t.value,secondarySort:"Alphabetical"}):a({...e,primarySort:t.value})}}),r.jsx(P,{className:"sort-order-select",options:T,isSearchable:!1,value:T.find(t=>t.value===e.primarySortDirection)||T[0],onChange:t=>{a({...e,primarySortDirection:t.value})}})]}),r.jsxs(q,{label:"Then by",tooltip:"How to sort parts tied by the primary sort.",children:[r.jsx(P,{className:"sort-select",options:U,isSearchable:!1,value:U.find(t=>t.value===e.secondarySort)||U[0],onChange:t=>{a({...e,secondarySort:t.value})}}),r.jsx(P,{className:"sort-order-select",options:T,isSearchable:!1,value:T.find(t=>t.value===e.secondarySortDirection)||T[0],onChange:t=>{a({...e,secondarySortDirection:t.value})}})]})]})]})}function Ue({items:e}){const a=e.map(s=>r.jsx(fe,{item:s},s.name));return r.jsx("div",{className:"part-button-grid",children:a})}function Oe(e,a){const s=typeof e=="string"?e:"",i=typeof a=="string"?a:"";return s.localeCompare(i)}function se(e,a){function s(n){if(typeof n!="string")return"";let o=/(\d+)% (\w*)/.exec(n);return o===null?(o=/(\d+)/.exec(n),o===null?"":"Destroy"+parseInt(o[1]).toLocaleString("en-us",{minimumIntegerDigits:3,useGrouping:!1})):o[2]+parseInt(o[1]).toLocaleString("en-US",{minimumIntegerDigits:3,useGrouping:!1})}const i=s(e),t=s(a);return i.localeCompare(t)}function B(e,a){function s(n){if(typeof n!="string"||n==="")return 0;const o=n.split("-").map(l=>l.trim()).map(l=>parseInt(l));return o.reduce((l,c)=>l+c,0)/o.length}const i=s(e),t=s(a);return i-t}function W(e,a){function s(n){if(n===void 0)return 0;const o=n.toLowerCase();return o.startsWith("minimal")?5:o.startsWith("low")?25:o.startsWith("medium")?37:o.startsWith("high")?50:o.startsWith("massive")?80:o.startsWith("deadly")?100:0}const i=s(e),t=s(a);return i-t}function p(e,a){let s=parseInt(e),i=parseInt(a);return isNaN(s)&&(s=0),isNaN(i)&&(i=0),s-i}function Z(e,a){function s(n){if(n===void 0)return 0;const o=n.toLowerCase();return o.startsWith("wide")?10:o.startsWith("intermediate")?30:o.startsWith("narrow")?50:o.startsWith("fine")?100:0}const i=s(e),t=s(a);return i-t}const C=40,S=15,E=10,Ie=[{header:"Overview",columns:[{accessorKey:"name",header:"Name",size:S,maxSize:S},{accessorKey:"type",header:"Type",maxSize:E},{accessorKey:"ratingString",header:"Rating"},{accessorKey:"size",header:"Size"},{accessorKey:"integrity",header:"Integrity"},{accessorKey:"life",header:"Life"}]},{header:"Effect",columns:[{accessorKey:"effect",header:"Effect",size:C},{accessorKey:"description",header:"Description",size:C}]}],Be=[{header:"Overview",columns:[{accessorKey:"name",header:"Name",size:S,maxSize:S},{accessorKey:"type",header:"Type",maxSize:E},{accessorKey:"ratingString",header:"Rating"},{accessorKey:"size",header:"Size"},{accessorKey:"mass",header:"Mass"},{accessorKey:"integrity",header:"Integrity"},{accessorKey:"coverage",header:"Coverage"},{accessorKey:"heatGeneration",header:"Heat"},{accessorKey:"matterUpkeep",header:"Matter"}]},{header:"Power",columns:[{accessorKey:"energyGeneration",header:"Rate"},{accessorKey:"energyStorage",header:"Storage"},{accessorKey:"powerStability",header:"Stability"}]},{header:"Fabrication",columns:[{accessorFn:e=>{var a;return(a=e.fabrication)==null?void 0:a.number},header:"Count"},{accessorFn:e=>{var a;return(a=e.fabrication)==null?void 0:a.time},header:"Time"}]},{header:"Effect",columns:[{accessorKey:"effect",header:"Effect",size:C},{accessorKey:"description",header:"Description",size:C}]}],We=[{header:"Overview",columns:[{accessorKey:"name",header:"Name",size:S,maxSize:S},{accessorKey:"type",header:"Type",maxSize:E},{accessorKey:"ratingString",header:"Rating"},{accessorKey:"size",header:"Size"},{accessorKey:"integrity",header:"Integrity"},{accessorKey:"coverage",header:"Coverage"}]},{header:"Upkeep",columns:[{accessorKey:"energyUpkeep",header:"Energy"},{accessorKey:"heatGeneration",header:"Heat"}]},{header:"Propulsion",columns:[{accessorKey:"timePerMove",header:"Time/Move"},{accessorKey:"modPerExtra",header:"Mod/Extra"},{accessorKey:"drag",header:"Drag"},{accessorKey:"energyPerMove",header:"Energy"},{accessorKey:"heatPerMove",header:"Heat"},{accessorKey:"support",header:"Support"},{accessorKey:"penalty",header:"Penalty"},{accessorKey:"burnout",header:"Burnout"},{accessorKey:"siege",header:"Siege"}]},{header:"Fabrication",columns:[{accessorFn:e=>{var a;return(a=e.fabrication)==null?void 0:a.number},header:"Count"},{accessorFn:e=>{var a;return(a=e.fabrication)==null?void 0:a.time},header:"Time"}]}],Ze=[{header:"Overview",columns:[{accessorKey:"name",header:"Name",size:S,maxSize:S},{accessorKey:"type",header:"Type",maxSize:E},{accessorKey:"ratingString",header:"Rating"},{accessorKey:"size",header:"Size"},{accessorKey:"mass",header:"Mass"},{accessorKey:"integrity",header:"Integrity"},{accessorKey:"coverage",header:"Coverage"},{accessorKey:"specialTrait",header:"Special Trait"}]},{header:"Upkeep",columns:[{accessorKey:"energyUpkeep",header:"Energy"},{accessorKey:"matterUpkeep",header:"Matter"},{accessorKey:"heatGeneration",header:"Heat"}]},{header:"Fabrication",columns:[{accessorFn:e=>{var a;return(a=e.fabrication)==null?void 0:a.number},header:"Count"},{accessorFn:e=>{var a;return(a=e.fabrication)==null?void 0:a.time},header:"Time"}]},{header:"Effect",columns:[{accessorKey:"effect",header:"Effect",size:C},{accessorKey:"description",header:"Description",size:C}]}],qe=[{header:"Overview",columns:[{accessorKey:"name",header:"Name",maxSize:S},{accessorKey:"type",header:"Type",maxSize:E},{accessorKey:"ratingString",header:"Rating"},{accessorKey:"size",header:"Size"},{accessorKey:"mass",header:"Mass"},{accessorKey:"integrity",header:"Integrity"},{accessorKey:"coverage",header:"Coverage"},{accessorKey:"specialTrait",header:"Special Trait"}]},{header:"Shot",columns:[{accessorKey:"range",header:"Range"},{accessorKey:"shotEnergy",header:"Energy"},{accessorKey:"shotMatter",header:"Matter"},{accessorKey:"shotHeat",header:"Heat"},{accessorKey:"recoil",header:"Recoil"},{accessorKey:"targeting",header:"Targeting"},{accessorKey:"delay",header:"Delay"},{accessorKey:"overloadStability",header:"Stability"},{accessorKey:"waypoints",header:"Waypoints"}]},{header:"Projectile",columns:[{accessorKey:"arc",header:"Arc"},{accessorKey:"projectileCount",header:"Count"},{accessorKey:"damage",header:"Damage",sortingFn:(e,a,s)=>B(e.getValue(s),a.getValue(s))},{accessorKey:"damageType",header:"Type"},{accessorKey:"criticalString",header:"Critical",sortingFn:(e,a,s)=>se(e.getValue(s),a.getValue(s)),maxSize:8},{accessorKey:"penetration",header:"Penetration",maxSize:10},{accessorKey:"heatTransfer",header:"Heat Transfer",sortingFn:(e,a,s)=>W(e.getValue(s),a.getValue(s))},{accessorKey:"spectrum",header:"Spectrum",sortingFn:(e,a,s)=>Z(e.getValue(s),a.getValue(s)),maxSize:9},{accessorKey:"disruption",header:"Disruption"},{accessorKey:"salvage",header:"Salvage"}]},{header:"Explosion",columns:[{accessorKey:"explosionRadius",header:"Radius"},{accessorKey:"explosionDamage",header:"Damage",sortingFn:(e,a,s)=>B(e.getValue(s),a.getValue(s))},{accessorKey:"falloff",header:"Falloff"},{accessorKey:"explosionType",header:"Type"},{accessorKey:"explosionHeatTransfer",header:"Heat Transfer",sortingFn:(e,a,s)=>W(e.getValue(s),a.getValue(s))},{accessorKey:"explosionSpectrum",header:"Spectrum",sortingFn:(e,a,s)=>Z(e.getValue(s),a.getValue(s)),maxSize:9},{accessorKey:"explosionDisruption",header:"Disruption"},{accessorKey:"explosionSalvage",header:"Salvage"}]},{header:"Fabrication",columns:[{accessorFn:e=>{var a;return(a=e.fabrication)==null?void 0:a.number},header:"Count"},{accessorFn:e=>{var a;return(a=e.fabrication)==null?void 0:a.time},header:"Time"}]},{header:"Effect",columns:[{accessorKey:"effect",header:"Effect",size:C},{accessorKey:"description",header:"Description",size:C}]}],Qe={Any:[],"N/A":Ie,Power:Be,Propulsion:We,Utility:Ze,Weapon:qe};function Xe({pageState:e,items:a}){const[s,i]=ie.useState([]),t=e.slot||"Any",n=Qe[t];return t==="Any"?r.jsx("span",{children:"Please select a slot to see the spreadsheet view."}):r.jsx(ge,{columns:n,data:a,setSorting:i,sorting:s})}function _e(e,a){const s=re();return a.getAllItems().filter(t=>{var n,o;if(!ae(t.spoiler,s))return!1;if(e.name){const l=t.name.toLowerCase(),c=e.name.toLowerCase();if(c.length>1){if(!l.includes(c)&&!ce(l).includes(c))return!1}else if(c.length>0&&!l.includes(c))return!1}if(e.effect&&e.effect.length>0){const l=e.effect.toLowerCase();if(!((n=t.description)!=null&&n.toLowerCase().includes(l))&&!((o=t.effect)!=null&&o.toLowerCase().includes(l)))return!1}if(e.rating&&e.rating.length>0){const l=e.rating.includes("+"),c=e.rating.includes("-"),u=e.rating.replace("+","").replace("-","");let y;if(u.slice(-1)==="*"?y=parseFloat(u.slice(0,u.lastIndexOf("*")))+.5:y=parseFloat(u),l){if(t.rating<y)return!1}else if(c){if(t.rating>y)return!1}else if(u==="*"){if(!t.ratingString.includes("*"))return!1}else if(t.rating!==y)return!1}if(e.size&&e.size.length>0){const l=e.size.includes("+"),c=e.size.includes("-"),u=e.size.replace("+","").replace("-",""),y=parseInt(u);if(l){if(t.size<y)return!1}else if(c){if(t.size>y)return!1}else if(t.size!==y)return!1}if(e.mass&&e.mass.length>0){const l=e.mass.includes("+"),c=e.mass.includes("-"),u=e.mass.replace("+","").replace("-",""),y=parseInt(u);if(l){if(!t.mass||t.mass<y)return!1}else if(c){if(!t.mass||t.mass>y)return!1}else if(t.mass!==y)return!1}if(e.category&&e.category!=="Any"&&!t.categories.includes(e.category)||e.slot&&e.slot!=="Any"&&t.slot!==e.slot||e.slotType&&e.slotType!=="Any"&&t.type!==e.slotType)return!1;if(e.schematicsDepth&&e.schematicsDepth.length>0){const l=Math.abs(parseInt(e.schematicsDepth));if(!Number.isNaN(l)){if(!t.hackable)return!1;let c=1;if(e.terminalLevel==="Level 2"?c=2:e.terminalLevel==="Level 3"&&(c=3),10-l+c<Math.ceil(t.rating))return!1}}return!0})}function Je(){const e=ue();return de(e,{})}const O={Alphabetical:{key:"name",sort:Oe},Gallery:{sort:he},Rating:{key:"rating",sort:p},Size:{key:"size",sort:p},Mass:{key:"mass",sort:p},Integrity:{key:"integrity",sort:p},Coverage:{key:"coverage",sort:p},Arc:{key:"arc",sort:p},Critical:{key:"criticalString",sort:se},Damage:{keys:["damage","explosionDamage"],sort:B},Delay:{key:"delay",sort:p},Disruption:{keys:["disruption","explosionDisruption"],sort:p},Drag:{key:"drag",sort:p},"Energy/Move":{key:"energyPerMove",sort:p},"Energy Generation":{key:"energyGeneration",sort:p},"Energy Storage":{key:"energyStorage",sort:p},"Energy Upkeep":{key:"energyUpkeep",sort:p},"Explosion Radius":{key:"explosionRadius",sort:p},Falloff:{key:"falloff",sort:p},"Heat/Move":{key:"heatPerMove",sort:p},"Heat Generation":{key:"heatGeneration",sort:p},"Heat Transfer":{keys:["heatTransfer","explosionHeatTransfer"],sort:W},"Matter Upkeep":{key:"matterUpkeep",sort:p},Penalty:{key:"penalty",sort:p},"Projectile Count":{key:"projectileCount",sort:p},Range:{key:"range",sort:p},Recoil:{key:"recoil",sort:p},Salvage:{keys:["salvage","explosionSalvage"],sort:p},"Shot Energy":{key:"shotEnergy",sort:p},"Shot Heat":{key:"shotHeat",sort:p},"Shot Matter":{key:"shotMatter",sort:p},Spectrum:{keys:["spectrum","explosionSpectrum"],sort:Z},Support:{key:"support",sort:p},Targeting:{key:"targeting",sort:p},"Time/Move":{key:"timePerMove",sort:p},Waypoints:{key:"waypoints",sort:p}};function Ye(e,a){const s=a.mode==="Spreadsheet",i=s?O.Gallery:O[a.primarySort||"Alphabetical"],t="key"in i?[i.key]:"keys"in i?i.keys:[],n=i.sort;if(e.sort((m,x)=>{if(t.length===0)return n(m,x);const j=t.find(K=>K in m&&m[K]!==void 0),V=t.find(K=>K in x&&x[K]!==void 0);return n(m[j],x[V])}),s||(a.primarySortDirection==="Descending"&&e.reverse(),a.secondarySort===void 0||a.secondarySort==="None")||t.length===0)return e;const o=O[a.secondarySort],l="key"in o?[o.key]:"keys"in o?o.keys:[],c=o.sort,u={},y=[];e.forEach(m=>{const x=t.find(V=>V in m&&m[V]!==void 0),j=m[x];j in u?u[j].push(m):(u[j]=[m],y.push(j))}),y.forEach(m=>{u[m].sort((j,V)=>{if(l.length===0)return c(j,V);const K=l.find(R=>R in j),te=l.find(R=>R in V);return c(j[K],V[te])})});const g=a.secondarySortDirection==="Descending";let b=[];return y.forEach(m=>{g&&u[m].reverse(),b=b.concat(u[m])}),b}function $e(e,a){const s=e;return s==="mode"&&a.mode==="Simple"||s==="terminalLevel"&&a.terminalLevel==="Level 1"||s==="slot"&&a.slot==="Any"||s==="slotType"&&a.slotType==="Any"||s==="category"&&a.category==="Any"||s==="primarySort"&&a.primarySort==="Alphabetical"||s==="primarySortDirection"&&a.primarySortDirection==="Ascending"||s==="secondarySortDirection"&&a.secondarySortDirection==="Ascending"}function tr(){const e=me(),[a,s]=le(),i=Je();function t(l){const c=pe("/parts",l,$e);s(c,{replace:!0})}const n=Ye(_e(i,e),i);let o;switch(i.mode){case"Simple":default:o=r.jsx(Ue,{items:n});break;case"Comparison":o=r.jsx(De,{items:n,itemData:e,pageState:i,setPageState:t});break;case"Gallery":o=r.jsx(Me,{items:n});break;case"Spreadsheet":o=r.jsx(Xe,{items:n,pageState:i});break}return r.jsxs("div",{className:"page-content",children:[r.jsx(Fe,{pageState:i,setPageState:t}),o]})}export{tr as default};