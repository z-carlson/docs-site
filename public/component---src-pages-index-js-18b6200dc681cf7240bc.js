(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7oih":function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var i=a("q1tI"),n=a.n(i),o=a("Wbzz"),l=a("vOnD"),m=a("MDkO"),c=l.a.aside.withConfig({displayName:"TOC__LeftNav",componentId:"ddnx8c-0"})(["border-right:10px solid var(--accent);nav{display:flex;flex-direction:column;margin-top:3rem;margin-left:1rem;}details{padding:1rem 0;border-top:1px solid var(--accent);}details:hover{cursor:pointer;color:var(--pop);}summary:focus{outline:none;background-color:var(--accent);}details ul{list-style:none;margin-bottom:0;padding-bottom:0;}details ul li a:focus{outline:none;background-color:var(--accent);}a{color:var(--textColor);text-decoration:none;}a:hover{color:var(--pop);}a + a{margin-top:1rem;}.heading{font-weight:600;text-transform:uppercase;}.subitems{padding:0 1rem 1rem 1rem;text-transform:capitalize;}"]),r=function(){return n.a.createElement(c,{className:"left-nav"},n.a.createElement("nav",null,m.toc.map((function(e,t){return n.a.createElement("details",{key:t},n.a.createElement("summary",{className:"heading"},e.heading),e.subitems&&n.a.createElement("ul",{className:"subitems"},e.subitems.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement(o.a,{to:e.path},e.name))}))))}))))},I=a("mxmt"),g=a.n(I),d=a("P3O2"),s=a.n(d),u=a("MTYL"),p=a.n(u),C=a("isAk"),b=l.a.header.withConfig({displayName:"Layout__Header",componentId:"f8jkac-0"})(["position:relative;padding-bottom:1rem;.hamburger{display:none;margin:1rem;}.hamburger:hover{cursor:pointer;}@media (max-width:600px){nav{display:none;}.hamburger{display:block;}margin-bottom:10px;}"]),v=l.a.svg.withConfig({displayName:"Layout__Burger",componentId:"f8jkac-1"})(["path{stroke:var(--black);}&:hover{path{stroke:var(--pop);}}"]),M=l.a.svg.withConfig({displayName:"Layout__Close",componentId:"f8jkac-2"})(["stroke-width:3;stroke:var(--pop);animation:0.3s ease-out spin;@keyframes spin{from{transform:rotate(180deg);opacity:0;}to{transform:rotate(0deg);opacity:1;}}"]),h=l.a.div.withConfig({displayName:"Layout__SmallScreenMenu",componentId:"f8jkac-3"})(["background:var(--white);width:100%;height:80vh;position:absolute;top:5rem;left:0;z-index:2;animation:0.3s ease-out slideIn;@keyframes slideIn{from{left:-200px;opacity:0;}to{left:0px;opacity:1;}}padding:2rem;nav details{margin-bottom:3rem;font-size:var(--h4);}nav details ul li{margin-bottom:1rem;a{color:var(--black);text-decoration:none;}}@media (min-width:600px){display:none;}"]),y=l.a.div.withConfig({displayName:"Layout__MainNavBar",componentId:"f8jkac-4"})(["display:flex;justify-content:space-around;padding-bottom:1rem;margin-bottom:5rem;border-bottom:1px solid var(--accent);a{text-decoration:none;color:var(--textColor);}a span{text-transform:uppercase;}"]),A=l.a.div.withConfig({displayName:"Layout__Container",componentId:"f8jkac-5"})(["display:block;@media (max-width:600px){display:none;}"]),N=l.a.div.withConfig({displayName:"Layout__ThemeToggle",componentId:"f8jkac-6"})(["padding-right:10px;margin-top:10px;margin-bottom:10px;display:flex;justify-content:flex-end;img{height:20px;}img:hover{cursor:pointer;}@media (max-width:600px){img{height:15px;}}"]);function j(e){var t=e.children,a=Object(i.useState)(!1),l=a[0],c=a[1],I=Object(i.useContext)(C.a),d=I.theme,u=I.setTheme;return n.a.createElement(n.a.Fragment,null,"dark"===d?n.a.createElement(N,{onClick:function(){return u("light")}},n.a.createElement("img",{src:s.a,alt:"light mode"})):n.a.createElement(N,{onClick:function(){return u("dark")}},n.a.createElement("img",{src:p.a,alt:"dark mode"})),n.a.createElement(b,null,n.a.createElement(o.a,{to:"/"},n.a.createElement("div",{id:"logo"},n.a.createElement("img",{id:"logo-image",src:g.a,alt:"logo"}),n.a.createElement("span",null,"Docs Template"))),n.a.createElement("div",{className:"hamburger"},l?n.a.createElement(M,{onClick:function(){return c(!l)},xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},n.a.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),n.a.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})):n.a.createElement(v,{onClick:function(){return c(!l)},width:"20",height:"14",viewBox:"0 0 20 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M1 7H19",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),n.a.createElement("path",{d:"M1 1H16.5",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),n.a.createElement("path",{d:"M1 13H17",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),n.a.createElement("nav",null,n.a.createElement(o.a,{to:"/about"},"About"))),n.a.createElement("div",{className:"layout"},n.a.createElement(r,null),l&&n.a.createElement(n.a.Fragment,null,n.a.createElement(h,{className:"small-menu"},n.a.createElement(y,null,n.a.createElement(o.a,{to:"/"},n.a.createElement("span",null,"Home")),n.a.createElement(o.a,{to:"/about"},n.a.createElement("span",null,"About"))),n.a.createElement("nav",null,m.toc.map((function(e,t){return n.a.createElement("details",{key:t},n.a.createElement("summary",{className:"heading"},e.heading),e.subitems&&n.a.createElement("ul",{className:"subitems"},e.subitems.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement(o.a,{to:e.path},e.name))}))))})))),n.a.createElement(A,null,t)),!l&&t),!l&&n.a.createElement("footer",null,n.a.createElement("span",null,"© 2021 Documentation Site")))}},MDkO:function(e,t){e.exports={toc:[{heading:"Getting Started",subitems:[{name:"Overview",path:"/get-started/overview"},{name:"Setup",path:"/get-started/setup"}]},{heading:"Tutorials",subitems:[{name:"Overview",path:"/how-to/overview"},{name:"Demo Post",path:"/tutorials/demo-post"}]},{heading:"How-to Guides",subitems:[{name:"Overview",path:"/how-to/overview"},{name:"How to make a list",path:"/how-to/make-list"}]},{heading:"References",subitems:[{name:"running a blog",path:"/configure/libraries"},{name:"running a blog",path:"/configure/libraries"}]}]}},MTYL:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItbW9vbiI+PHBhdGggZD0iTTIxIDEyLjc5QTkgOSAwIDEgMSAxMS4yMSAzIDcgNyAwIDAgMCAyMSAxMi43OXoiPjwvcGF0aD48L3N2Zz4="},P3O2:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1zdW4iPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjUiPjwvY2lyY2xlPjxsaW5lIHgxPSIxMiIgeTE9IjEiIHgyPSIxMiIgeTI9IjMiPjwvbGluZT48bGluZSB4MT0iMTIiIHkxPSIyMSIgeDI9IjEyIiB5Mj0iMjMiPjwvbGluZT48bGluZSB4MT0iNC4yMiIgeTE9IjQuMjIiIHgyPSI1LjY0IiB5Mj0iNS42NCI+PC9saW5lPjxsaW5lIHgxPSIxOC4zNiIgeTE9IjE4LjM2IiB4Mj0iMTkuNzgiIHkyPSIxOS43OCI+PC9saW5lPjxsaW5lIHgxPSIxIiB5MT0iMTIiIHgyPSIzIiB5Mj0iMTIiPjwvbGluZT48bGluZSB4MT0iMjEiIHkxPSIxMiIgeDI9IjIzIiB5Mj0iMTIiPjwvbGluZT48bGluZSB4MT0iNC4yMiIgeTE9IjE5Ljc4IiB4Mj0iNS42NCIgeTI9IjE4LjM2Ij48L2xpbmU+PGxpbmUgeDE9IjE4LjM2IiB5MT0iNS42NCIgeDI9IjE5Ljc4IiB5Mj0iNC4yMiI+PC9saW5lPjwvc3ZnPg=="},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));var i=a("Wbzz"),n=a("q1tI"),o=a.n(n),l=a("7oih"),m=a("EYWl");function c(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{title:"Welcome"}),o.a.createElement(l.a,null,o.a.createElement("main",null,o.a.createElement("h1",null,"Welcome to the Docs Template Site"),o.a.createElement("div",{className:"card-container"},o.a.createElement("div",{className:"card"},o.a.createElement(i.a,{to:"/get-started/overview"},o.a.createElement("h3",null,"Getting Started"),o.a.createElement("p",null,"Welcome! Get started with setup, installation, and quick start guides."))),o.a.createElement("div",{className:"card"},o.a.createElement(i.a,{to:"/tutorials/overview"},o.a.createElement("h3",null,"Tutorials"),o.a.createElement("p",null,"New? These end-to-end walkthroughs will guide you through common, real-world problems."))),o.a.createElement("div",{className:"card"},o.a.createElement(i.a,{to:"/how-to/overview"},o.a.createElement("h3",null,"How-to Guides"),o.a.createElement("p",null,"How-to guides are short, step-by-step instructions on how to complete a specific task."))),o.a.createElement("div",{className:"card"},o.a.createElement(i.a,{to:"/reference/overview"},o.a.createElement("h3",null,"Reference"),o.a.createElement("p",null,"Need to check the API or looking for something specific?")))))))}},mxmt:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzgiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDk4LjY1MTc4NyA5OC42NTE3ODciCiAgIGhlaWdodD0iOTguNjUxNzg3bW0iCiAgIHdpZHRoPSI5OC42NTE3ODdtbSI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDQuOTcxNTQzLC0yNy45MzkyMTcpIgogICAgIGlkPSJsYXllcjEiPgogICAgPGNpcmNsZQogICAgICAgdHJhbnNmb3JtPSJyb3RhdGUoMTY1KSIKICAgICAgIHI9IjQ5LjMyNTg5MyIKICAgICAgIGN5PSItOTkuMDM4MzM4IgogICAgICAgY3g9Ii03MS4wODY2NDciCiAgICAgICBpZD0icGF0aDkwMiIKICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojMDk0MDY3O2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjIzO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjE7cGFpbnQtb3JkZXI6bm9ybWFsIiAvPgogICAgPGcKICAgICAgIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4wNTkyNDg4MTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC41NjEwNzA4NCwtMC4wNzc4LDAuMDc3OCwwLjU2MTA3MDg0LDQ5LjU0MTg3MiwzMC43Njc1MjMpIgogICAgICAgaWQ9Imc5MDAiPgogICAgICA8cGF0aAogICAgICAgICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6NC4wMDM0NTk5MztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxO3BhaW50LW9yZGVyOm5vcm1hbCIKICAgICAgICAgZD0iTSA5Mi45OTAyMzQsMTQwLjg4ODY3IFYgNTU1Ljc2NzU4IEggNDEzLjM4MDg2IFYgMjY2LjE0NjQ4IEwgMjg4LjEyMzA1LDE0MC44ODg2NyBaIgogICAgICAgICB0cmFuc2Zvcm09InNjYWxlKDAuMjY0NTgzMzMpIgogICAgICAgICBpZD0icmVjdDgxNSIgLz4KICAgICAgPHBhdGgKICAgICAgICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuMDU5MjQ4ODE7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MTtwYWludC1vcmRlcjpub3JtYWwiCiAgICAgICAgIGQ9Ik0gNzYuMjMyNTU0LDM3LjQ2NjAwNSBWIDcwLjYwNzEzMyBIIDEwOS4zNzM2OCBaIgogICAgICAgICBpZD0icGF0aDg2NyIgLz4KICAgIDwvZz4KICAgIDxlbGxpcHNlCiAgICAgICByeT0iMC4zNzc5NzYyMSIKICAgICAgIHJ4PSIwLjI4MzQ4MjEzIgogICAgICAgY3k9IjExMi40MTY4OSIKICAgICAgIGN4PSItODQuNzY4Nzg0IgogICAgICAgaWQ9InBhdGg5ODAiCiAgICAgICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzA5ZWVmZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yMztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxO3BhaW50LW9yZGVyOm5vcm1hbCIgLz4KICA8L2c+Cjwvc3ZnPgo="}}]);
//# sourceMappingURL=component---src-pages-index-js-18b6200dc681cf7240bc.js.map