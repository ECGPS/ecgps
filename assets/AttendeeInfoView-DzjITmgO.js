import{d as u,f as b,c as i,e as a,k as d,h as m,F as g,r as f,v as l,a as r,j as p,l as h,m as y,n as C,t as S,b as v,_ as w}from"./index-mgCpLXbJ.js";const k={class:"attendee-info-container"},F={class:"info-tabs"},A=["onClick"],_={class:"info-content"},B={class:"info-section"},I={class:"section-content"},T={class:"qr-code-container"},x=["src"],V={class:"info-content"},D={class:"info-section"},M={class:"section-content"},R=["src"],$={class:"info-content"},U=["src"],q=u({__name:"AttendeeInfoView",setup(E){const n="/ecgps/",c=[{id:"campus-access",title:"Campus Access"},{id:"venue",title:"Venue & Map"},{id:"transportation",title:"Transportation"}],s=b("campus-access"),o=b(!1);return(N,t)=>(v(),i("div",k,[t[12]||(t[12]=a("h2",{class:"section-title"},"Attendee Information",-1)),t[13]||(t[13]=a("p",{class:"section-description"}," Important information for attendees of the First Symposium on Emotion and Cognition. ",-1)),a("div",F,[(v(),i(g,null,f(c,e=>a("button",{key:e.id,class:C(["tab-button",{active:s.value===e.id}]),onClick:Q=>s.value=e.id},S(e.title),11,A)),64))]),d(a("div",_,[a("div",B,[t[6]||(t[6]=a("h3",null,"Campus Access Application",-1)),a("div",I,[t[5]||(t[5]=r('<div class="text-content" data-v-d642e4bb><p data-v-d642e4bb>To enter Fudan University campus, all external visitors need to apply for access permission in advance. Please follow these steps:</p><ol data-v-d642e4bb><li data-v-d642e4bb><strong data-v-d642e4bb>Scan QR Code:</strong> Use the QR code provided to access the application form.</li><li data-v-d642e4bb><strong data-v-d642e4bb>Fill in Information:</strong> Complete your personal information including name, ID number, phone, and purpose of visit.</li><li data-v-d642e4bb><strong data-v-d642e4bb>Submit Application:</strong> Submit your application at least 24 hours before your planned visit.</li><li data-v-d642e4bb><strong data-v-d642e4bb>Verification:</strong> Once approved, you&#39;ll receive a digital pass via SMS or email.</li><li data-v-d642e4bb><strong data-v-d642e4bb>Campus Entry:</strong> Show your digital pass and ID at the campus gate.</li></ol><div class="important-note" data-v-d642e4bb><p data-v-d642e4bb><strong data-v-d642e4bb>Important:</strong> Applications must be submitted no later than April 7, 2025. Please bring your personal ID that matches the information in your application.</p></div></div>',1)),a("div",T,[a("img",{src:`${p(n)}info/QRcode.png`,alt:"Campus Access QR Code",class:"qr-code"},null,8,x),t[4]||(t[4]=a("p",{class:"qr-caption"},"Scan to apply for campus access",-1))])])])],512),[[l,s.value==="campus-access"]]),d(a("div",V,[a("div",D,[t[9]||(t[9]=a("h3",null,"Conference Venue",-1)),a("div",M,[t[8]||(t[8]=r('<div class="text-content" data-v-d642e4bb><p data-v-d642e4bb>The symposium will be held at the <strong data-v-d642e4bb>Research Building 2#</strong>, located in <strong data-v-d642e4bb>Fenglin Campus, Fudan University</strong>, at <strong data-v-d642e4bb>131 Dong&#39;an Road, Xuhui District, Shanghai</strong>.</p><h4 data-v-d642e4bb>Key Location:</h4><ul data-v-d642e4bb><li data-v-d642e4bb><strong data-v-d642e4bb>Main Sessions:</strong> Auditorium (B1 Floor)</li></ul><p data-v-d642e4bb>The entire symposium will take place in the auditorium located on the B1 floor (basement level). Signs will be posted to guide you to the venue. Staff members will be available to assist you with directions.</p></div>',1)),a("div",{class:"map-container",onClick:t[0]||(t[0]=e=>o.value=!0)},[a("img",{src:`${p(n)}info/map.png`,alt:"Campus Map",class:"campus-map"},null,8,R),t[7]||(t[7]=a("div",{class:"zoom-hint"},[a("i",{class:"zoom-icon"}),h(" Click to enlarge map")],-1))])])])],512),[[l,s.value==="venue"]]),d(a("div",$,t[10]||(t[10]=[r('<div class="info-section" data-v-d642e4bb><h3 data-v-d642e4bb>Transportation</h3><div class="transportation-grid" data-v-d642e4bb><div class="transport-card" data-v-d642e4bb><h4 data-v-d642e4bb>By Subway</h4><p data-v-d642e4bb>Take Line 7/9 to <strong data-v-d642e4bb>Zhaojiabang Station</strong> (Exit 3). Then take a 10-minute walk to Fudan University Fenglin Campus.</p><p class="fare-info" data-v-d642e4bb>Fare: ¥4-7 depending on distance</p></div><div class="transport-card" data-v-d642e4bb><h4 data-v-d642e4bb>By Bus</h4><p data-v-d642e4bb>Bus routes 50, 218,303 all have stops near 131 Dong&#39;an Road.</p><p class="fare-info" data-v-d642e4bb>Fare: ¥2</p></div><div class="transport-card" data-v-d642e4bb><h4 data-v-d642e4bb>By Taxi</h4><p data-v-d642e4bb>Show this address to the driver: <strong data-v-d642e4bb>上海市徐汇区东安路131号</strong></p><p data-v-d642e4bb>From Pudong Airport: ~60 min (¥160-200)</p><p data-v-d642e4bb>From Hongqiao Airport: ~45 min (¥100-130)</p><p data-v-d642e4bb>From Shanghai Railway Station: ~30 min (¥40-60)</p></div></div></div>',1)]),512),[[l,s.value==="transportation"]]),o.value?(v(),i("div",{key:0,class:"image-overlay",onClick:t[3]||(t[3]=e=>o.value=!1)},[a("div",{class:"overlay-content map-overlay-content",onClick:t[2]||(t[2]=y(()=>{},["stop"]))},[a("img",{src:`${p(n)}info/map.png`,alt:"Campus Map",class:"enlarged-image"},null,8,U),t[11]||(t[11]=a("div",{class:"overlay-caption"},"Campus Map",-1)),a("button",{class:"close-button",onClick:t[1]||(t[1]=e=>o.value=!1)},"×")])])):m("",!0)]))}}),L=w(q,[["__scopeId","data-v-d642e4bb"]]);export{L as default};
