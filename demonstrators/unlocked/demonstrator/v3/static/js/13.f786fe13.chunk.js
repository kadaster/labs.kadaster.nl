/*! For license information please see 13.f786fe13.chunk.js.LICENSE.txt */
(this["webpackJsonpviewer-builder-client"]=this["webpackJsonpviewer-builder-client"]||[]).push([[13],{1057:function(e,t){Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),i=n.length>>>0;if(0===i)return!1;var r,o,s=0|t,a=Math.max(s>=0?s:i-Math.abs(s),0);for(;a<i;){if((r=n[a])===(o=e)||"number"===typeof r&&"number"===typeof o&&isNaN(r)&&isNaN(o))return!0;a++}return!1}}),Math.sign||(Math.sign=function(e){return(e>0)-(e<0)||+e})},1058:function(e,t,n){(function(t){var n="Expected a function",i=NaN,r="[object Symbol]",o=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,h="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,f=h||l||Function("return this")(),p=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return f.Date.now()};function b(e,t,i){var r,o,s,a,c,u,h=0,l=!1,f=!1,p=!0;if("function"!=typeof e)throw new TypeError(n);function b(t){var n=r,i=o;return r=o=void 0,h=t,a=e.apply(i,n)}function g(e){var n=e-u;return void 0===u||n>=t||n<0||f&&e-h>=s}function O(){var e=m();if(g(e))return _(e);c=setTimeout(O,function(e){var n=t-(e-u);return f?v(n,s-(e-h)):n}(e))}function _(e){return c=void 0,p&&r?b(e):(r=o=void 0,a)}function z(){var e=m(),n=g(e);if(r=arguments,o=this,u=e,n){if(void 0===c)return function(e){return h=e,c=setTimeout(O,t),l?b(e):a}(u);if(f)return c=setTimeout(O,t),b(u)}return void 0===c&&(c=setTimeout(O,t)),a}return t=w(t)||0,y(i)&&(l=!!i.leading,s=(f="maxWait"in i)?d(w(i.maxWait)||0,t):s,p="trailing"in i?!!i.trailing:p),z.cancel=function(){void 0!==c&&clearTimeout(c),h=0,r=u=o=c=void 0},z.flush=function(){return void 0===c?a:_(m())},z}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&p.call(e)==r}(e))return i;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||c.test(e)?u(e.slice(2),n?2:8):s.test(e)?i:+e}e.exports=function(e,t,i){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(n);return y(i)&&(r="leading"in i?!!i.leading:r,o="trailing"in i?!!i.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})}}).call(this,n(48))},1059:function(e,t,n){"use strict";(function(e){var n=function(){if("undefined"!==typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,i){return e[0]===t&&(n=i,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),i=this.__entries__[n];return i&&i[1]},t.prototype.set=function(t,n){var i=e(this.__entries__,t);~i?this.__entries__[i][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,i=e(n,t);~i&&n.splice(i,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,i=this.__entries__;n<i.length;n++){var r=i[n];e.call(t,r[1],r[0])}},t}()}(),i="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,r="undefined"!==typeof e&&e.Math===Math?e:"undefined"!==typeof self&&self.Math===Math?self:"undefined"!==typeof window&&window.Math===Math?window:Function("return this")(),o="function"===typeof requestAnimationFrame?requestAnimationFrame.bind(r):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)},s=2;var a=20,c=["top","right","bottom","left","width","height","size","weight"],u="undefined"!==typeof MutationObserver,h=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,i=!1,r=0;function a(){n&&(n=!1,e()),i&&u()}function c(){o(a)}function u(){var e=Date.now();if(n){if(e-r<s)return;i=!0}else n=!0,i=!1,setTimeout(c,t);r=e}return u}(this.refresh.bind(this),a)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),u?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;c.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),l=function(e,t){for(var n=0,i=Object.keys(t);n<i.length;n++){var r=i[n];Object.defineProperty(e,r,{value:t[r],enumerable:!1,writable:!1,configurable:!0})}return e},f=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||r},p=w(0,0,0,0);function d(e){return parseFloat(e)||0}function v(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+d(e["border-"+n+"-width"])}),0)}function m(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return p;var i=f(e).getComputedStyle(e),r=function(e){for(var t={},n=0,i=["top","right","bottom","left"];n<i.length;n++){var r=i[n],o=e["padding-"+r];t[r]=d(o)}return t}(i),o=r.left+r.right,s=r.top+r.bottom,a=d(i.width),c=d(i.height);if("border-box"===i.boxSizing&&(Math.round(a+o)!==t&&(a-=v(i,"left","right")+o),Math.round(c+s)!==n&&(c-=v(i,"top","bottom")+s)),!function(e){return e===f(e).document.documentElement}(e)){var u=Math.round(a+o)-t,h=Math.round(c+s)-n;1!==Math.abs(u)&&(a-=u),1!==Math.abs(h)&&(c-=h)}return w(r.left,r.top,a,c)}var b="undefined"!==typeof SVGGraphicsElement?function(e){return e instanceof f(e).SVGGraphicsElement}:function(e){return e instanceof f(e).SVGElement&&"function"===typeof e.getBBox};function y(e){return i?b(e)?function(e){var t=e.getBBox();return w(0,0,t.width,t.height)}(e):m(e):p}function w(e,t,n,i){return{x:e,y:t,width:n,height:i}}var g=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=w(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=y(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),O=function(e,t){var n=function(e){var t=e.x,n=e.y,i=e.width,r=e.height,o="undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object,s=Object.create(o.prototype);return l(s,{x:t,y:n,width:i,height:r,top:n,right:t+i,bottom:r+n,left:t}),s}(t);l(this,{target:e,contentRect:n})},_=function(){function e(e,t,i){if(this.activeObservations_=[],this.observations_=new n,"function"!==typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=i}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(e instanceof f(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new g(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(e instanceof f(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new O(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),z="undefined"!==typeof WeakMap?new WeakMap:new n,x=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=h.getInstance(),i=new _(t,n,this);z.set(this,i)};["observe","unobserve","disconnect"].forEach((function(e){x.prototype[e]=function(){var t;return(t=z.get(this))[e].apply(t,arguments)}}));var R="undefined"!==typeof r.ResizeObserver?r.ResizeObserver:x;t.a=R}).call(this,n(48))},1060:function(e,t,n){},1202:function(e,t,n){"use strict";n.d(t,"a",(function(){return R})),n.d(t,"c",(function(){return _})),n.d(t,"b",(function(){return V}));var i=n(14),r=n(5),o=n(6),s=n(36),a=n(7),c=n(8),u=n(247),h=n.n(u),l=n(776),f=n.n(l),p=n(352),d=n.n(p),v=n(10),m=function(){function e(){Object(r.a)(this,e)}return Object(o.a)(e,null,[{key:"isBrowser",value:function(){return"undefined"!==typeof window}},{key:"isOpera",value:function(){return e.isBrowser()&&e.getUserAgent().match(/Opera Mini/i)}},{key:"isFirefox",value:function(){return e.isBrowser()&&"undefined"!==typeof InstallTrigger}},{key:"isSafari",value:function(){return!!e.isBrowser()&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}},{key:"isIE",value:function(){return e.isBrowser()&&!!document.documentMode}},{key:"isEdge",value:function(){return e.isBrowser()&&!e.isIE()&&!!window.StyleMedia}},{key:"isChrome",value:function(){return e.isBrowser()&&!!window.chrome&&!!window.chrome.webstore}},{key:"isBlink",value:function(){return e.isBrowser()&&(e.isChrome()||e.isOpera())&&!!window.CSS}},{key:"getUserAgent",value:function(){return"undefined"===typeof navigator?"":navigator.userAgent}},{key:"isAndroid",value:function(){return e.isBrowser()&&e.getUserAgent().match(/Android/i)}},{key:"isBlackBerry",value:function(){return e.isBrowser()&&e.getUserAgent().match(/BlackBerry/i)}},{key:"isIOS",value:function(){return e.isBrowser()&&e.getUserAgent().match(/iPhone|iPad|iPod/i)}},{key:"isWindows",value:function(){return e.isBrowser()&&e.isWindowsDesktop()||e.isWindowsMobile()}},{key:"isWindowsMobile",value:function(){return e.isBrowser()&&e.getUserAgent().match(/IEMobile/i)}},{key:"isWindowsDesktop",value:function(){return e.isBrowser()&&e.getUserAgent().match(/WPDesktop/i)}},{key:"isMobile",value:function(){return e.isBrowser()&&(e.isWindowsMobile()||e.isBlackBerry()||e.isAndroid()||e.isIOS())}}]),e}(),b=function(e){return Object.keys(e).reduce((function(t,n){return"data-"===n.substr(0,5)?f()({},t,Object(v.a)({},n,e[n])):t}),{})},y=n(2),w=n.n(y),g=n(1),O=n.n(g),_=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(e){var i;return Object(r.a)(this,n),i=t.call(this,e),d()(Object(s.a)(i),"ref",O.a.createRef()),d()(Object(s.a)(i),"onMouseMove",(function(e){if(i.state.active){var t=i.ref.current;i.props.events.emit("resize",{index:i.props.index,domElement:t,event:e}),i.props.onResize&&i.props.onResize({component:Object(s.a)(i),domElement:t}),e.stopPropagation(),e.preventDefault()}})),d()(Object(s.a)(i),"onMouseDown",(function(e){i.setState({active:!0}),i.props.onStartResize&&i.props.onStartResize({domElement:i.ref.current,component:Object(s.a)(i)})||i.props.events.emit("startResize",{index:i.props.index,event:e})})),d()(Object(s.a)(i),"onMouseUp",(function(e){i.state.active&&(i.setState({active:!1}),i.props.onStopResize&&i.props.onStopResize({domElement:i.ref.current,component:Object(s.a)(i)}),i.props.events.emit("stopResize",{index:i.props.index,event:e}))})),i.state={active:!1},i.document=e.document,i}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.document&&(this.document.addEventListener("touchend",this.onMouseUp),this.document.addEventListener("mouseup",this.onMouseUp),this.document.addEventListener("mousemove",this.onMouseMove,{passive:!1}),this.document.addEventListener("touchmove",this.onMouseMove,{passive:!1}))}},{key:"componentWillUnmount",value:function(){this.document&&(this.document.removeEventListener("mouseup",this.onMouseUp),this.document.removeEventListener("touchend",this.onMouseUp),this.document.removeEventListener("mousemove",this.onMouseMove),this.document.removeEventListener("touchmove",this.onMouseMove),this.state.active&&this.props.events.emit("stopResize",{index:this.props.index,event:null}))}},{key:"render",value:function(){var e=[m.isMobile()?"reflex-thin":""].concat(Object(i.a)(this.props.className.split(" ")),[this.state.active?"active":"","reflex-splitter"]).join(" ").trim();return O.a.createElement("div",h()({},b(this.props),{onTouchStart:this.onMouseDown,onMouseDown:this.onMouseDown,style:this.props.style,className:e,id:this.props.id,ref:this.ref}),this.props.children)}}],[{key:"isA",value:function(e){return!!e&&e.type===n}}]),n}(O.a.Component);d()(_,"propTypes",{children:w.a.oneOfType([w.a.arrayOf(w.a.node),w.a.node]),onStartResize:w.a.func,onStopResize:w.a.func,className:w.a.string,propagate:w.a.bool,onResize:w.a.func,style:w.a.object}),d()(_,"defaultProps",{document:"undefined"!==typeof document?document:null,onStartResize:null,onStopResize:null,propagate:!1,onResize:null,className:"",style:{}});var z=function(){function e(){Object(r.a)(this,e),this._events={}}return Object(o.a)(e,[{key:"on",value:function(e,t){var n=this;return e.split(" ").forEach((function(e){n._events[e]=n._events[e]||[],n._events[e].push(t)})),this}},{key:"off",value:function(e,t){var n=this;if(void 0!=e)return e.split(" ").forEach((function(e){e in n._events!==!1&&(t?n._events[e].splice(n._events[e].indexOf(t),1):n._events[e]=[])})),this;this._events={}}},{key:"emit",value:function(e){if(void 0!==this._events[e])for(var t=this._events[e].slice(),n=0;n<t.length;++n){var i=t[n].apply(this,Array.prototype.slice.call(arguments,1));if(void 0!==i)return i}}}]),e}(),x=z,R=(n(1057),function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(e){var i;return Object(r.a)(this,n),i=t.call(this,e),d()(Object(s.a)(i),"onWindowResize",(function(){i.setState({flexData:i.computeFlexData()})})),d()(Object(s.a)(i),"onStartResize",(function(e){var t=e.event.changedTouches?e.event.changedTouches[0]:e.event;if("horizontal"===i.props.orientation)document.body.classList.add("reflex-row-resize"),i.previousPos=t.clientY;else document.body.classList.add("reflex-col-resize"),i.previousPos=t.clientX;i.elements=[i.children[e.index-1],i.children[e.index+1]],i.emitElementsEvent(i.elements,"onStartResize")})),d()(Object(s.a)(i),"onResize",(function(e){var t=e.event.changedTouches?e.event.changedTouches[0]:e.event,n=i.getOffset(t,e.domElement);if("horizontal"===i.props.orientation)i.previousPos=t.clientY;else i.previousPos=t.clientX;if(n){var r=i.computeAvailableOffset(e.index,n);r&&(i.elements=i.dispatchOffset(e.index,r),i.adjustFlex(i.elements),i.setState({resizing:!0},(function(){i.emitElementsEvent(i.elements,"onResize")})))}})),d()(Object(s.a)(i),"onStopResize",(function(e){document.body.classList.remove("reflex-row-resize"),document.body.classList.remove("reflex-col-resize");var t=i.elements?i.elements.map((function(e){return e.ref})):[],n=i.children.filter((function(e){return!_.isA(e)&&t.includes(e.ref)}));i.emitElementsEvent(n,"onStopResize"),i.setState({resizing:!1})})),d()(Object(s.a)(i),"onElementSize",(function(e){return new Promise((function(t){try{var n=e.index,r=i.getSize(i.children[n]),o=e.size-r,s=e.direction,a=n+s,c=i.computeAvailableOffset(a,s*o);i.elements=null,c&&(i.elements=i.dispatchOffset(a,c),i.adjustFlex(i.elements)),i.setState(i.state,(function(){i.emitElementsEvent(i.elements,"onResize"),t()}))}catch(u){console.log(u)}}))})),i.events=new x,i.children=[],i.state={flexData:[]},i.ref=O.a.createRef(),i}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.computeFlexData(),t=this.props.windowResizeAware;t&&window.addEventListener("resize",this.onWindowResize),this.setState({windowResizeAware:t,flexData:e}),this.events.on("element.size",this.onElementSize),this.events.on("startResize",this.onStartResize),this.events.on("stopResize",this.onStopResize),this.events.on("resize",this.onResize)}},{key:"componentWillUnmount",value:function(){this.events.off(),window.removeEventListener("resize",this.onWindowResize)}},{key:"getValidChildren",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props;return this.toArray(e.children).filter((function(e){return!!e}))}},{key:"componentDidUpdate",value:function(e,t){var n=this.getValidChildren(this.props);if(n.length!==this.state.flexData.length||e.orientation!==this.props.orientation||this.flexHasChanged(e)){var i=this.computeFlexData(n,this.props);this.setState({flexData:i})}this.props.windowResizeAware!==this.state.windowResizeAware&&(this.props.windowResizeAware?window.addEventListener("resize",this.onWindowResize):window.removeEventListener("resize",this.onWindowResize),this.setState({windowResizeAware:this.props.windowResizeAware}))}},{key:"flexHasChanged",value:function(e){var t=this.getValidChildren(e).map((function(e){return e.props.flex||0}));return!this.getValidChildren().map((function(e){return e.props.flex||0})).every((function(e,n){return e===t[n]}))}},{key:"getSize",value:function(e){var t=e.ref.current;return"horizontal"===this.props.orientation?t.offsetHeight:t.offsetWidth}},{key:"getOffset",value:function(e,t){var n=t.getBoundingClientRect(),i=n.top,r=n.bottom,o=n.left,s=n.right;if("horizontal"===this.props.orientation){var a=e.clientY-this.previousPos;if(a>0){if(e.clientY>=i)return a}else if(e.clientY<=r)return a}else{var c=e.clientX-this.previousPos;if(c>0){if(e.clientX>o)return c}else if(e.clientX<s)return c}return 0}},{key:"adjustFlex",value:function(e){var t=this,n=e.reduce((function(n,i){var r=i.props.index;return n+(i.props.flex-t.state.flexData[r].flex)/e.length}),0);e.forEach((function(e){t.state.flexData[e.props.index].flex+=n}))}},{key:"computeAvailableOffset",value:function(e,t){var n=this.computeAvailableStretch(e,t),i=this.computeAvailableShrink(e,t);return Math.min(n,i)*Math.sign(t)}},{key:"checkPropagate",value:function(e,t){if(t>0){if(e<this.children.length-2){var n=this.children[e+2];return _.isA(n)&&n.props.propagate}}else if(e>2){var i=this.children[e-2];return _.isA(i)&&i.props.propagate}return!1}},{key:"computeAvailableStretch",value:function(e,t){var n=t<0?e+1:e-1,i=this.children[n],r=this.getSize(i),o=i.props.maxSize-r;if(o<Math.abs(t)&&this.checkPropagate(e,-1*t)){var s=Math.sign(t)*(Math.abs(t)-o);return o+this.computeAvailableStretch(t<0?e+2:e-2,s)}return Math.min(o,Math.abs(t))}},{key:"computeAvailableShrink",value:function(e,t){var n=t>0?e+1:e-1,i=this.children[n],r=this.getSize(i)-Math.max(i.props.minSize,0);if(r<Math.abs(t)&&this.checkPropagate(e,t)){var o=Math.sign(t)*(Math.abs(t)-r);return r+this.computeAvailableShrink(t>0?e+2:e-2,o)}return Math.min(r,Math.abs(t))}},{key:"computePixelFlex",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.orientation;return this.ref.current?"horizontal"===e?0===this.ref.current.offsetHeight?(console.warn("Found ReflexContainer with height=0, this will cause invalid behavior..."),console.warn(this.ref.current),0):1/this.ref.current.offsetHeight:0===this.ref.current.offsetWidth?(console.warn("Found ReflexContainer with width=0, this will cause invalid behavior..."),console.warn(this.ref.current),0):1/this.ref.current.offsetWidth:(console.warn("Unable to locate ReflexContainer dom node"),0)}},{key:"addOffset",value:function(e,t){var n=this.getSize(e),i=e.props.index,r=Math.max(n+t,0),o=this.state.flexData[i].flex,s=o>0?o*r/n:this.computePixelFlex()*r;this.state.flexData[i].flex=!isFinite(s)||isNaN(s)?0:s}},{key:"dispatchStretch",value:function(e,t){var n=t<0?e+1:e-1;if(n<0||n>this.children.length-1)return[];var r=this.children[n],o=this.getSize(r),s=Math.min(r.props.maxSize,o+Math.abs(t))-o;if(this.addOffset(r,s),s<Math.abs(t)){var a=e-2*Math.sign(t),c=Math.sign(t)*(Math.abs(t)-s);return[r].concat(Object(i.a)(this.dispatchStretch(a,c)))}return[r]}},{key:"dispatchShrink",value:function(e,t){var n=t>0?e+1:e-1;if(n<0||n>this.children.length-1)return[];var r=this.children[n],o=this.getSize(r),s=Math.max(r.props.minSize,o-Math.abs(t))-o;if(this.addOffset(r,s),Math.abs(s)<Math.abs(t)){var a=e+2*Math.sign(t),c=Math.sign(t)*(Math.abs(t)+s);return[r].concat(Object(i.a)(this.dispatchShrink(a,c)))}return[r]}},{key:"dispatchOffset",value:function(e,t){return[].concat(Object(i.a)(this.dispatchStretch(e,t)),Object(i.a)(this.dispatchShrink(e,t)))}},{key:"emitElementsEvent",value:function(e,t){this.toArray(e).forEach((function(e){e.props[t]&&e.props[t]({domElement:e.ref.current,component:e})}))}},{key:"computeFlexData",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getValidChildren(),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props,i=this.computePixelFlex(n.orientation),r=function(e){return e.reduce((function(e,t){return!_.isA(t)&&t.constrained?e-t.flex:e}),1)},o=function(e){return e.reduce((function(e,t){return _.isA(t)||t.constrained?e:e+1}),0)},s=t.map((function(e){var t=e.props;return{maxFlex:(t.maxSize||Number.MAX_VALUE)*i,sizeFlex:(t.size||Number.MAX_VALUE)*i,minFlex:(t.minSize||1)*i,constrained:void 0!==t.flex,flex:t.flex||0,type:e.type}})),a=function t(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=!1,a=o(n),c=r(n),u=n.map((function(e){if(_.isA(e))return e;var t=e.constrained?e.flex:c/a,n=Math.min(e.sizeFlex,Math.min(e.maxFlex,Math.max(e.minFlex,t))),i=e.constrained||n!==t;return s=s||i,f()({},e,{flex:n,constrained:i})}));return s&&i<e.props.maxRecDepth?t(u,i+1):u}(s);return a.map((function(e){return{flex:_.isA(e)?0:e.flex,ref:O.a.createRef()}}))}},{key:"toArray",value:function(e){return e?Array.isArray(e)?e:[e]:[]}},{key:"render",value:function(){var e=this,t=[this.state.resizing?"reflex-resizing":""].concat(Object(i.a)(this.props.className.split(" ")),[this.props.orientation,"reflex-container"]).join(" ").trim();return this.children=O.a.Children.map(this.getValidChildren(),(function(t,n){if(n>e.state.flexData.length-1)return O.a.createElement("div",null);var i=e.state.flexData[n],r=f()({},t.props,{maxSize:t.props.maxSize||Number.MAX_VALUE,orientation:e.props.orientation,minSize:t.props.minSize||1,events:e.events,flex:i.flex,ref:i.ref,index:n});return O.a.cloneElement(t,r)})),O.a.createElement("div",h()({},b(this.props),{style:this.props.style,className:t,ref:this.ref}),this.children)}}]),n}(O.a.Component));d()(R,"propTypes",{windowResizeAware:w.a.bool,orientation:w.a.oneOf(["horizontal","vertical"]),maxRecDepth:w.a.number,className:w.a.string,style:w.a.object}),d()(R,"defaultProps",{orientation:"horizontal",windowResizeAware:!1,maxRecDepth:100,className:"",style:{}});var M=n(12),E=n(22),j=n(20),k=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(e){var i;return Object(r.a)(this,n),i=t.call(this,e),d()(Object(s.a)(i),"ref",O.a.createRef()),d()(Object(s.a)(i),"onMouseMove",(function(e){if(i.state.active){var t=i.ref.current;i.props.events.emit("resize",{index:i.props.index,domElement:t,event:e}),i.props.onResize&&i.props.onResize({component:Object(s.a)(i),domElement:t}),e.stopPropagation(),e.preventDefault()}})),d()(Object(s.a)(i),"onMouseDown",(function(e){i.setState({active:!0}),i.props.onStartResize&&i.props.onStartResize({domElement:i.ref.current,component:Object(s.a)(i)})||i.props.events.emit("startResize",{index:i.props.index,event:e})})),d()(Object(s.a)(i),"onMouseUp",(function(e){i.state.active&&(i.setState({active:!1}),i.props.onStopResize&&i.props.onStopResize({domElement:i.ref.current,component:Object(s.a)(i)}),i.props.events.emit("stopResize",{index:i.props.index,event:e}))})),i.state={active:!1},i.document=e.document,i}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.document&&(this.document.addEventListener("touchend",this.onMouseUp),this.document.addEventListener("mouseup",this.onMouseUp),this.document.addEventListener("mousemove",this.onMouseMove,{passive:!1}),this.document.addEventListener("touchmove",this.onMouseMove,{passive:!1}))}},{key:"componentWillUnmount",value:function(){this.document&&(this.document.removeEventListener("mouseup",this.onMouseUp),this.document.removeEventListener("touchend",this.onMouseUp),this.document.removeEventListener("mousemove",this.onMouseMove),this.document.removeEventListener("touchmove",this.onMouseMove),this.state.active&&this.props.events.emit("stopResize",{index:this.props.index,event:null}))}},{key:"render",value:function(){var e=[].concat(Object(i.a)(this.props.className.split(" ")),[this.state.active?"active":"","reflex-handle"]).join(" ").trim();return O.a.createElement("div",h()({},b(this.props),{onTouchStart:this.onMouseDown,onMouseDown:this.onMouseDown,style:this.props.style,className:e,id:this.props.id,ref:this.ref}),this.props.children)}}],[{key:"isA",value:function(e){return!!e&&e.type===n}}]),n}(O.a.Component);d()(k,"propTypes",{children:w.a.oneOfType([w.a.arrayOf(w.a.node),w.a.node]),onStartResize:w.a.func,onStopResize:w.a.func,className:w.a.string,propagate:w.a.bool,onResize:w.a.func,style:w.a.object}),d()(k,"defaultProps",{document:"undefined"===typeof document?null:document,onStartResize:null,onStopResize:null,propagate:!1,onResize:null,className:"",style:{}});var S=n(1058),A=n.n(S),D=n(29),T=n(44),L=n(53),C=n(1059),W=["client","offset","scroll","bounds","margin"];function F(e){var t=[];return W.forEach((function(n){e[n]&&t.push(n)})),t}function B(e,t){var n={};if(t.indexOf("client")>-1&&(n.client={top:e.clientTop,left:e.clientLeft,width:e.clientWidth,height:e.clientHeight}),t.indexOf("offset")>-1&&(n.offset={top:e.offsetTop,left:e.offsetLeft,width:e.offsetWidth,height:e.offsetHeight}),t.indexOf("scroll")>-1&&(n.scroll={top:e.scrollTop,left:e.scrollLeft,width:e.scrollWidth,height:e.scrollHeight}),t.indexOf("bounds")>-1){var i=e.getBoundingClientRect();n.bounds={top:i.top,right:i.right,bottom:i.bottom,left:i.left,width:i.width,height:i.height}}if(t.indexOf("margin")>-1){var r=getComputedStyle(e);n.margin={top:r?parseInt(r.marginTop):0,right:r?parseInt(r.marginRight):0,bottom:r?parseInt(r.marginBottom):0,left:r?parseInt(r.marginLeft):0}}return n}var N,P=function(e){var t,n;return n=t=function(t){function n(){for(var e,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))||this).state={contentRect:{entry:{},client:{},offset:{},scroll:{},bounds:{},margin:{}}},e._animationFrameID=null,e._resizeObserver=null,e._node=null,e._window=null,e.measure=function(t){var n=B(e._node,N||F(e.props));t&&(n.entry=t[0].contentRect),e._animationFrameID=e._window.requestAnimationFrame((function(){null!==e._resizeObserver&&(e.setState({contentRect:n}),"function"===typeof e.props.onResize&&e.props.onResize(n))}))},e._handleRef=function(t){var n;null!==e._resizeObserver&&null!==e._node&&e._resizeObserver.unobserve(e._node),e._node=t,e._window=(n=e._node)&&n.ownerDocument&&n.ownerDocument.defaultView||window;var i=e.props.innerRef;i&&("function"===typeof i?i(e._node):i.current=e._node),null!==e._resizeObserver&&null!==e._node&&e._resizeObserver.observe(e._node)},e}Object(L.a)(n,t);var i=n.prototype;return i.componentDidMount=function(){this._resizeObserver=null!==this._window&&this._window.ResizeObserver?new this._window.ResizeObserver(this.measure):new C.a(this.measure),null!==this._node&&(this._resizeObserver.observe(this._node),"function"===typeof this.props.onResize&&this.props.onResize(B(this._node,N||F(this.props))))},i.componentWillUnmount=function(){null!==this._window&&this._window.cancelAnimationFrame(this._animationFrameID),null!==this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null)},i.render=function(){var t=this.props,n=(t.innerRef,t.onResize,Object(T.a)(t,["innerRef","onResize"]));return Object(g.createElement)(e,Object(D.a)({},n,{measureRef:this._handleRef,measure:this.measure,contentRect:this.state.contentRect}))},n}(g.Component),t.propTypes={client:w.a.bool,offset:w.a.bool,scroll:w.a.bool,bounds:w.a.bool,margin:w.a.bool,innerRef:w.a.oneOfType([w.a.object,w.a.func]),onResize:w.a.func},n}((function(e){var t=e.measure,n=e.measureRef,i=e.contentRect;return(0,e.children)({measure:t,measureRef:n,contentRect:i})}));P.displayName="Measure",P.propTypes.children=w.a.func;var U=P,H=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(e){var i;return Object(r.a)(this,n),i=t.call(this,e),d()(Object(s.a)(i),"onResize",(function(e){var t=i.props,n=t.resizeHeight,r=t.resizeWidth,o=e.bounds,s=o.height,a=o.width;i.setDimensions(f()({},n&&{height:s},r&&{width:a}))})),i.setDimensions=A()((function(e){i.setState(e)}),i.props.propagateDimensionsRate/1e3),i.state={height:"100%",width:"100%"},i}return Object(o.a)(n,[{key:"renderChildren",value:function(){var e=this,t=this.props.propagateDimensions;return O.a.Children.map(this.props.children,(function(n){return e.props.withHandle||k.isA(n)?O.a.cloneElement(n,f()({dimensions:t&&e.state},n.props,{index:e.props.index-1,events:e.props.events})):t?O.a.cloneElement(n,f()({},n.props,{dimensions:e.state})):n}))}},{key:"render",value:function(){var e=this;return O.a.createElement(U,{bounds:!0,onResize:this.onResize},(function(t){var n=t.measureRef;return O.a.createElement("div",{ref:n,className:"reflex-size-aware"},O.a.createElement("div",{style:e.state},e.renderChildren()))}))}}]),n}(O.a.Component),I=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={size:e.size},i}return Object(o.a)(n,[{key:"componentDidUpdate",value:function(){var e=Object(j.a)(Object(M.a)().mark((function e(t,n,i){var r,o,s,a;return Object(M.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.size===this.state.size){e.next=19;break}r=this.toArray(this.props.direction),o=Object(E.a)(r),e.prev=3,o.s();case 5:if((s=o.n()).done){e.next=11;break}return a=s.value,e.next=9,this.props.events.emit("element.size",{index:this.props.index,size:this.props.size,direction:a});case 9:e.next=5;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),o.e(e.t0);case 16:return e.prev=16,o.f(),e.finish(16);case 19:case"end":return e.stop()}}),e,this,[[3,13,16,19]])})));return function(t,n,i){return e.apply(this,arguments)}}()},{key:"toArray",value:function(e){return e?Array.isArray(e)?e:[e]:[]}},{key:"renderChildren",value:function(){var e=this;return O.a.Children.map(this.props.children,(function(t){return e.props.withHandle||k.isA(t)?O.a.cloneElement(t,f()({},t.props,{index:e.props.index-1,events:e.props.events})):t}))}},{key:"render",value:function(){var e=[].concat(Object(i.a)(this.props.className.split(" ")),[this.props.orientation,"reflex-element"]).join(" ").trim(),t=f()({},this.props.style,{flexGrow:this.props.flex,flexShrink:1,flexBasis:"0%"});return O.a.createElement("div",h()({},b(this.props),{ref:this.props.innerRef,className:e,style:t}),this.props.propagateDimensions?O.a.createElement(H,this.props):this.renderChildren())}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.size!==t.size?f()({},t,{size:e.size}):null}}]),n}(O.a.Component);d()(I,"propTypes",{renderOnResizeRate:w.a.number,propagateDimensions:w.a.bool,resizeHeight:w.a.bool,resizeWidth:w.a.bool,className:w.a.string,size:w.a.number}),d()(I,"defaultProps",{propagateDimensionsRate:100,propagateDimensions:!1,resizeHeight:!0,resizeWidth:!0,direction:[1],className:""});var V=O.a.forwardRef((function(e,t){return O.a.createElement(I,h()({innerRef:t},e))}))},776:function(e,t,n){var i=n(352);e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach((function(t){i(e,t,n[t])}))}return e},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=13.f786fe13.chunk.js.map