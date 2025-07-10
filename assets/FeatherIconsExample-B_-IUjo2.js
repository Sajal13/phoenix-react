import{PA as e,PB as i,PC as t,PD as r,PE as a,PL as s,PM as c,PN as n,PO as l,PG as d,PH as m,PI as h}from"./index-B0Yq2HoF.js";import{I as u}from"./IconCard-gjFN0oQU.js";const p=["activity","airplay","alert-circle","alert-octagon","alert-triangle","align-center","align-justify","align-left","align-right","anchor","aperture","archive","arrow-down-circle","arrow-down-left","arrow-down-right","arrow-down","arrow-left-circle","arrow-left","arrow-right-circle","arrow-right","arrow-up-circle","arrow-up-left","arrow-up-right","arrow-up","at-sign","award","bar-chart-2","bar-chart","battery-charging","battery","bell-off","bell","bluetooth","bold","book-open","book","bookmark","box","briefcase","calendar","camera-off","camera","cast","check-circle","check-square","check","chevron-down","chevron-left","chevron-right","chevron-up","chevrons-down","chevrons-left","chevrons-right","chevrons-up","chrome","circle","clipboard","clock","cloud-drizzle","cloud-lightning","cloud-off","cloud-rain","cloud-snow","cloud","code","codepen","codesandbox","coffee","columns","command","compass","copy","corner-down-left","corner-down-right","corner-left-down","corner-left-up","corner-right-down","corner-right-up","corner-up-left","corner-up-right","cpu","credit-card","crop","crosshair","database","delete","disc","divide-circle","divide-square","divide","dollar-sign","download-cloud","download","dribbble","droplet","edit-2","edit-3","edit","external-link","eye-off","eye","facebook","fast-forward","feather","figma","file-minus","file-plus","file-text","file","film","filter","flag","folder-minus","folder-plus","folder","framer","frown","gift","git-branch","git-commit","git-merge","git-pull-request","github","gitlab","globe","grid","hard-drive","hash","headphones","heart","help-circle","hexagon","home","image","inbox","info","instagram","italic","key","layers","layout","life-buoy","link-2","link","linkedin","list","loader","lock","log-in","log-out","mail","map-pin","map","maximize-2","maximize","meh","menu","message-circle","message-square","mic-off","mic","minimize-2","minimize","minus-circle","minus-square","minus","monitor","moon","more-horizontal","more-vertical","mouse-pointer","move","music","navigation-2","navigation","octagon","package","paperclip","pause-circle","pause","pen-tool","percent","phone-call","phone-forwarded","phone-incoming","phone-missed","phone-off","phone-outgoing","phone","pie-chart","play-circle","play","plus-circle","plus-square","plus","pocket","power","printer","radio","refresh-ccw","refresh-cw","repeat","rewind","rotate-ccw","rotate-cw","rss","save","scissors","search","send","server","settings","share-2","share","shield-off","shield","shopping-bag","shopping-cart","shuffle","sidebar","skip-back","skip-forward","slack","slash","sliders","smartphone","smile","speaker","square","star","stop-circle","sun","sunrise","sunset","tablet","tag","target","terminal","thermometer","thumbs-down","thumbs-up","toggle-left","toggle-right","tool","trash-2","trash","trello","trending-down","trending-up","triangle","truck","tv","twitch","twitter","type","umbrella","underline","unlock","upload-cloud","upload","user-check","user-minus","user-plus","user-x","user","users","video-off","video","voicemail","volume-1","volume-2","volume-x","volume","watch","wifi-off","wifi","wind","x-circle","x-octagon","x-square","x","youtube","zap-off","zap","zoom-in","zoom-out"],f=`
import FeatherIcon from 'feather-icons-react';

const element = <FeatherIcon icon="close" />;
`,g=`
import { Home } from 'feather-icons-react';

const element = <Home/>
`,x=`
import Home from 'feather-icons-react';
import { Youtube, Facebook, Twitter } from 'feather-icons-react';

<div>
  <div className="mb-3">
    <FeatherIcon icon='home' size={32} className='me-2 text-success' />
    <FeatherIcon icon='home' size={24} className='me-2 text-success' />
    <FeatherIcon icon='home' size={16} className='text-success' />
  </div>

  <div>
    <Facebook className='me-2 text-primary'/>
    <Twitter className='me-2 text-info'/>
    <Youtube className='text-danger'/>
  </div>
</div>
`,v=()=>e.jsxs("div",{className:"mb-9",children:[e.jsx(i,{title:"Feather Icons",description:"Simply beautiful open source icons",link:{text:"Feather Icons Documentation",url:"https://github.com/ianmiller347/feather-icons-react"}}),e.jsxs(t,{children:[e.jsxs(r,{className:"mb-4",children:[e.jsx(r.Header,{title:"Usage",noPreview:!0}),e.jsxs(r.Body,{children:[e.jsxs("p",{children:["You can use the default export and pass the ",e.jsx("code",{children:"icon"})," prop"]}),e.jsx(a,{code:f}),e.jsxs("p",{className:"my-3",children:["Or you can use the provided named export in place of the"," ",e.jsx("code",{children:"icon"})," prop"]}),e.jsx(a,{code:g})]})]}),e.jsxs(r,{className:"mb-4",children:[e.jsx(r.Header,{title:"Example"}),e.jsx(r.Body,{code:x,scope:{FeatherIcon:l,Youtube:n,Facebook:c,Twitter:s}})]}),e.jsxs(r,{children:[e.jsx(r.Header,{title:"Icons",noPreview:!0}),e.jsx(d.Body,{children:e.jsx(m,{className:"mt-3",children:p.map(o=>e.jsx(h,{xs:12,sm:6,md:4,lg:3,children:e.jsx(u,{icon:o,iconFamily:"feather",name:o})},o))})})]})]})]});export{v as default};
