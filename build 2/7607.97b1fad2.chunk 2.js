"use strict";(self.webpackChunkstapiecom=self.webpackChunkstapiecom||[]).push([[7607],{17607:(W,s,_)=>{_.r(s),_.d(s,{UserListPageEE:()=>m});var P=_(92132),a=_(77751),n=_(64623),A=_(21272),C=_(91134),R=_(5409),i=_(92766),U=_(15126),v=_(63299),B=_(67014),t=_(59080),l=_(79275),L=_(14718),I=_(82437),d=_(61535),O=_(5790),T=_(12083),M=_(35223),E=_(74930),o=_(2600),K=_(48940),D=_(41286),h=_(51187),r=_(56336),f=_(39404),g=_(58692),S=_(54257),y=_(501),j=_(57646),N=_(23120),V=_(44414),F=_(25962),c=_(14664),x=_(42588),H=_(90325),$=_(62785),e=_(87443),G=_(41032),X=_(22957),Y=_(93179),Z=_(73055),z=_(15747),Q=_(85306),J=_(77965),u=_(26509),p=_(84624),k=_(71210),w=_(32058),b=_(81185),q=_(82261),__=_(62482),E_=_(7765),t_=_(63209),s_=_(15797),O_=_(72810),M_=_(18022),o_=_(67031);const m=()=>((0,n.u)(),(0,P.jsx)(a.e,{}))},64623:(W,s,_)=>{_.d(s,{u:()=>B});var P=_(21272),a=_(91134),n=_(67031),A=_(54894),C=_(17703),R=_(92766);const i="strapi-notification-seat-limit",U="https://cloud.strapi.io/profile/billing",v="https://strapi.io/billing/request-seats",B=()=>{const{formatMessage:t}=(0,A.A)(),{license:l,isError:L,isLoading:I}=(0,R.m)(),d=(0,a.hN)(),{pathname:O}=(0,C.zy)(),{enforcementUserCount:T,permittedSeats:M,licenseLimitStatus:E,isHostedOnStrapiCloud:o}=l??{};P.useEffect(()=>{if(L||I)return;const K=!n(M)&&!window.sessionStorage.getItem(`${i}-${O}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let D;E==="OVER_LIMIT"?D="warning":E==="AT_LIMIT"&&(D="softWarning"),K&&d({type:D,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:T,permittedSeats:M}),link:{url:o?U:v,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:o})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${i}-${O}`,"true")}})},[d,l,O,t,I,M,E,T,o,L])}}}]);
