"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[983],{8081:function(r,t,n){n.d(t,{DF:function(){return d},VQ:function(){return p},oO:function(){return f},qL:function(){return v},ro:function(){return o}});var e=n(5861),a=n(7757),u=n.n(a),c=n(4569),i={api_key:"5e2c39ea82f0a596cc3267d12df3039c"},s=n.n(c)().create({baseURL:"https://api.themoviedb.org/3",params:i}),o=function(){var r=(0,e.Z)(u().mark((function r(){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("/trending/movie/week");case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("/search/movie",{params:{query:t}});case 2:return n=r.sent,e=n.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("/movie/".concat(t));case 2:return n=r.sent,e=n.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("/movie/".concat(t,"/credits"));case 2:return n=r.sent,e=n.data,r.abrupt("return",{data:e});case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),d=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("/movie/".concat(t,"/reviews"));case 2:return n=r.sent,e=n.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},3983:function(r,t,n){n.r(t);var e=n(885),a=n(2791),u=n(8081),c=n(6871),i=n(501),s=n(184);t.default=function(){var r=(0,a.useState)([]),t=(0,e.Z)(r,2),n=t[0],o=t[1],f=(0,c.TH)();return(0,a.useEffect)((function(){(0,u.ro)().then((function(r){return o(r.results)}))}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{children:"Tranding films"}),(0,s.jsx)("ul",{children:n.map((function(r){return(0,s.jsx)("li",{children:(0,s.jsx)(i.rU,{to:"/movies/".concat(r.id),state:f,children:r.title})},r.id)}))})]})}}}]);
//# sourceMappingURL=983.b09bb1b5.chunk.js.map