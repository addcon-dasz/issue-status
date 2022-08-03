(this["webpackJsonpissue-status"]=this["webpackJsonpissue-status"]||[]).push([[0],{31:function(t,n,e){},32:function(t,n,e){},43:function(t,n,e){"use strict";e.r(n);var o,a,r,c,s,i,u,d,l,b,j,g,p,O,x,m,h,f,v,w,S,C,k,E,_=e(1),A=e.n(_),I=e(18),y=e.n(I),P=(e(31),e(5)),D=e(3),N=(e(32),e(4)),T={message:"All Systems Operational",backgroundColour:"#3da751"},R={message:"Some systems are experiencing issues",backgroundColour:"#4990e2"},F={message:"Some systems are experiencing a major outage",backgroundColour:"#d94430"},L=function(t,n){return 100*t.filter((function(t){return t.labels.find((function(t){return t.name===n}))})).length/t.length},z=e(7),M=e.n(z),J=e(0),W=N.a.div(o||(o=Object(D.a)(["\n  background-color: ",";\n  color: white;\n  padding: 16px;\n  border-radius: 3px;\n  margin-bottom: 32px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  transition: 0.3s;\n"])),(function(t){return t.backgroundColour?t.backgroundColour:"#b1b1b1"})),Y=N.a.h2(a||(a=Object(D.a)(["\n  font-size: 20px;\n  margin: 0;\n  font-weight: normal;\n"]))),B=N.a.button(r||(r=Object(D.a)(["\n  background-color: transparent;\n  color: white;\n  text-decoration: underline;\n  border: none;\n  cursor: pointer;\n  text-align: right;\n  padding: 0;\n"]))),U=N.a.code(c||(c=Object(D.a)(["\n  white-space: pre-wrap;\n  display: block;\n"]))),G=function(t){var n=t.loading,e=t.error,o=t.components,a=t.refetch,r=function(t){var n=Object(_.useState)(),e=Object(P.a)(n,2),o=e[0],a=e[1];return Object(_.useEffect)((function(){var n=!1;L(t,"operational")<70&&(a(R),n=!0),L(t,"major outage")>0&&(a(F),n=!0),n||a(T)}),[t]),[o]}(o),c=Object(P.a)(r,1)[0],s=function(t,n){var e=Object(_.useState)(M()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow()),o=Object(P.a)(e,2),a=o[0],r=o[1];return Object(_.useEffect)((function(){var n=setInterval((function(){new Date(localStorage.getItem("issueStatusLastFetchcomponent"))<new Date-24e4?t((function(){r(M()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())})):r(M()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())}),1e3);return function(){clearInterval(n)}}),[t]),Object(_.useEffect)((function(){r(M()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())}),[n]),[a]}(a,n),i=Object(P.a)(s,1)[0];return Object(J.jsxs)(J.Fragment,{children:[e.hasError&&Object(J.jsxs)(U,{children:[Object(J.jsx)("div",{children:"An error occured"}),Object(J.jsx)("div",{children:"You may have exceeded the rate limit. Try again in 1 hour to fetch the latest data."}),JSON.stringify(e.errors,null,3)]}),Object(J.jsxs)(W,{backgroundColour:null===c||void 0===c?void 0:c.backgroundColour,children:[Object(J.jsx)(Y,{children:null===c||void 0===c?void 0:c.message}),Object(J.jsx)(B,{onClick:a,children:n?"reloading":i})]})]})},H=function(t){var n=Object(_.useState)([]),e=Object(P.a)(n,2),o=e[0],a=e[1],r=Object(_.useState)(),c=Object(P.a)(r,2),s=c[0],i=c[1],u=Object(_.useState)(!0),d=Object(P.a)(u,2),l=d[0],b=d[1];return Object(_.useEffect)((function(){new Date(localStorage.getItem("issueStatusLastFetch".concat(t)))<new Date-24e4?K(b,i,a,t):(a(JSON.parse(localStorage.getItem("issueStatus".concat(t)))),b(!1),i())}),[t]),[l,s,o||[],function(){return K(b,i,a,t)}]},K=function(t,n,e,o){t(!0),fetch("https://api.github.com/repos/".concat("addcon-dasz/issue-status","/issues?state=all&labels=issue status,").concat(o)).then((function(t){return t.json()})).then((function(a){n(),localStorage.setItem("issueStatusLastFetch".concat(o),new Date),localStorage.setItem("issueStatus".concat(o),JSON.stringify(a)),e(a),t(!1)})).catch((function(a){n(a.toString()),localStorage.setItem("issueStatusLastFetch".concat(o),new Date),e(JSON.parse(localStorage.getItem("issueStatus".concat(o)))),t(!1)}))},V=(N.a.h1(s||(s=Object(D.a)(["\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 0;\n"]))),N.a.img(i||(i=Object(D.a)([""])))),$=N.a.div(u||(u=Object(D.a)(["\n  text-align: center;\n  margin-bottom: 16px;\n"]))),q=function(){return Object(J.jsx)($,{children:Object(J.jsx)(V,{src:"https://raw.githubusercontent.com/tadhglewis/issue-status/master/.issuestatus/logo.png",alt:"ADDCON Systems Status"})})},Q=N.a.div(d||(d=Object(D.a)(["\n  width: 100%;\n  height: 44px;\n  border-radius: 3px;\n  background-color: #f7f8f9;\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),X={operational:{name:"Operational",colour:"#247234",backgroundColour:"rgba(61, 167, 81, 0.1)"},performanceIssues:{name:"Performance Issues",colour:"#2f5888",backgroundColour:"rgba(73, 144, 226, 0.1)"},partialOutage:{name:"Partial Outage",colour:"#74582a",backgroundColour:"rgba(255, 198, 103, 0.1)"},majorOutage:{name:"Major Outage",colour:"#8e3b31",backgroundColour:"rgba(217, 68, 48, 0.1)"},unknown:{name:"Unknown",colour:"#6e6b6b",backgroundColour:"rgba(177, 177, 177, 0.1)"}},Z=N.a.div(l||(l=Object(D.a)(["\n  color: ",";\n  background-color: ",";\n  padding: 5px 12px;\n  border-radius: 16px;\n  font-size: 13px;\n  transition: 0.3s;\n"])),(function(t){return t.colour}),(function(t){return t.backgroundColour})),tt=function(t){var n=function(t){var n=Object(_.useState)(),e=Object(P.a)(n,2),o=e[0],a=e[1];return Object(_.useEffect)((function(){a(Object.values(X).find((function(n){return t.find((function(t){return t.name===n.name.toLowerCase()}))})))}),[t]),o||a(X.unknown),[o]}(t.labels),e=Object(P.a)(n,1)[0];return Object(J.jsx)(Z,{colour:null===e||void 0===e?void 0:e.colour,backgroundColour:null===e||void 0===e?void 0:e.backgroundColour,children:null===e||void 0===e?void 0:e.name})},nt=N.a.div(b||(b=Object(D.a)(["\n  background-color: #f7f8f9;\n  padding: 8px 16px;\n  border-radius: 3px;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),et=function(t){var n=t.component;return Object(J.jsxs)(nt,{children:[n.title," ",Object(J.jsx)(tt,{labels:n.labels})]})},ot=function(){var t=Object(_.useState)(),n=Object(P.a)(t,2),e=n[0],o=n[1];return Object(_.useEffect)((function(){o(!0)}),[]),[e]},at=function(t){var n=t.loading,e=t.components,o=ot(),a=Object(P.a)(o,1)[0];return!n||a?(null===e||void 0===e?void 0:e.length)>0?null===e||void 0===e?void 0:e.map((function(t){return Object(J.jsx)(et,{component:t},t.id)})):Object(J.jsx)("p",{children:"No Components found."}):Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(Q,{}),Object(J.jsx)(Q,{}),Object(J.jsx)(Q,{})]})},rt=e(24),ct=N.a.div(j||(j=Object(D.a)(["\n  transition: 0.3s;\n  border-left: 16px solid\n    ",";\n  background-color: white;\n  border-radius: 3px;\n  padding: 16px;\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n  margin-top: 8px;\n\n  :not(:last-child) {\n    margin-bottom: 16px;\n  }\n"])),(function(t){return t.active?"rgba(177, 177, 177,0.2)":"rgba(73, 144, 226, 0.2)"})),st=N.a.div(g||(g=Object(D.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 3px;\n"]))),it=N.a.div(p||(p=Object(D.a)(["\n  margin-right: 16px;\n  font-weight: bold;\n  margin-bottom: 8px;\n  color: #1e1e1e;\n"]))),ut=N.a.div(O||(O=Object(D.a)(["\n  white-space: break-spaces;\n  color: #1e1e1e;\n"]))),dt=N.a.div(x||(x=Object(D.a)(["\n  color: ",";\n  background-color: ",";\n  padding: 5px 12px;\n  border-radius: 16px;\n  font-size: 13px;\n  transition: 0.3s;\n"])),(function(t){return t.active?"#6e6b6b":"#2f5888"}),(function(t){return t.active?"rgba(177, 177, 177, 0.1)":"rgba(73, 144, 226, 0.1)"})),lt=N.a.div(m||(m=Object(D.a)(["\n  font-size: 13px;\n  color: #6e6b6b;\n  font-weight: bold;\n"]))),bt=function(t){var n=t.incident;return Object(J.jsxs)(ct,{active:n.closed_at,children:[Object(J.jsxs)(st,{children:[Object(J.jsx)(lt,{children:M()(n.created_at).format("MMMM Do YYYY, h:mm a").toUpperCase()}),Object(J.jsx)(dt,{active:n.closed_at,children:n.closed_at?"Closed":"Active"})]}),Object(J.jsx)(it,{children:n.title}),Object(J.jsx)(ut,{children:Object(J.jsx)(rt.a,{children:n.body})})]})},jt=N.a.div(h||(h=Object(D.a)(["\n  width: 100%;\n  height: 84px;\n  border-radius: 3px;\n  background-color: white;\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),gt=N.a.div(f||(f=Object(D.a)(["\n  margin: 32px auto 0 auto;\n  max-width: 1040px;\n"]))),pt=N.a.div(v||(v=Object(D.a)(["\n  padding: 0 16px;\n  font-size: 20px;\n  margin-bottom: 16px;\n"]))),Ot=N.a.div(w||(w=Object(D.a)(["\n  margin: 0 8px;\n"]))),xt=function(t){var n=t.loading,e=t.incidents,o=ot(),a=Object(P.a)(o,1)[0];return Object(J.jsxs)(gt,{children:[Object(J.jsx)(pt,{children:"Incidents"}),!n||a?(null===e||void 0===e?void 0:e.length)>0?null===e||void 0===e?void 0:e.map((function(t){return Object(J.jsx)(bt,{incident:t},t.id)})):Object(J.jsx)(Ot,{children:"No Incidents found."}):Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(jt,{}),Object(J.jsx)(jt,{}),Object(J.jsx)(jt,{})]})]})},mt=N.a.div(S||(S=Object(D.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 16px;\n"]))),ht=N.a.a(C||(C=Object(D.a)(["\n  color: #6e6b6b;\n  font-size: 13px;\n  text-decoration: none;\n  transition: 0.3s;\n  display: ",";\n\n  :hover {\n    opacity: 0.9;\n  }\n"])),(function(t){return t.visible?"block":"none"})),ft=function(){return Object(J.jsxs)(mt,{children:[Object(J.jsx)("div",{}),Object(J.jsx)(ht,{visible:"false"!==Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_DESCRIPTION:"We update this page to inform of any outages",REACT_APP_FAVICON:"https://raw.githubusercontent.com/tadhglewis/issue-status/master/.issuestatus/favicon.ico",REACT_APP_LOGO:"https://raw.githubusercontent.com/tadhglewis/issue-status/master/.issuestatus/logo.png",REACT_APP_MANIFEST:"https://raw.githubusercontent.com/tadhglewis/issue-status/master/.issuestatus/manifest.json",REACT_APP_NAME:"ADDCON Systems Status",REACT_APP_REPOSITORY:"addcon-dasz/issue-status",REACT_APP_TITLE:"ADDCON Group"}).REACT_APP_BRANDING,href:"https://github.com/tadhglewis/issue-status",rel:"noopener",target:"_blank",children:"Powered by Issue Status"})]})},vt=N.a.div(k||(k=Object(D.a)(["\n  max-width: 1008px;\n  padding: 16px;\n  margin: 16px auto;\n"]))),wt=N.a.div(E||(E=Object(D.a)(["\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n  border-radius: 3px;\n  background-color: white;\n  padding: 16px;\n"]))),St=function(){var t=H("component"),n=Object(P.a)(t,4),e=n[0],o=n[1],a=n[2],r=n[3],c=H("incident"),s=Object(P.a)(c,4),i=s[0],u=s[1],d=s[2],l=s[3];return Object(J.jsxs)(vt,{children:[Object(J.jsx)(q,{}),Object(J.jsxs)(wt,{children:[Object(J.jsx)(G,{loading:e||i,error:{hasError:o||u,errors:{componentsError:o,incidentsError:u}},components:a,refetch:function(){r(),l()}}),Object(J.jsx)(at,{loading:e,components:a})]}),Object(J.jsx)(xt,{loading:i,incidents:d}),Object(J.jsx)(ft,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));y.a.render(Object(J.jsx)(A.a.StrictMode,{children:Object(J.jsx)(St,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.4085fcb7.chunk.js.map