(this["webpackJsonpviewer-builder-client"]=this["webpackJsonpviewer-builder-client"]||[]).push([[25],{1127:function(e,t,n){e.exports={main:"BBSimplePushButton_main__3EFmA",button1:"BBSimplePushButton_button1__ZHZ8y",openButton:"BBSimplePushButton_openButton__sbofc",closeButton:"BBSimplePushButton_closeButton__ZuB9u",divtext:"BBSimplePushButton_divtext__3wDLA",textfield2:"BBSimplePushButton_textfield2__R-PVu",weirdlabel:"BBSimplePushButton_weirdlabel__1qF3h","MuiInputLabel-outlined":"BBSimplePushButton_MuiInputLabel-outlined__3RSAP","MuiInputLabel-shrink":"BBSimplePushButton_MuiInputLabel-shrink__1i_uG",defaultValueButton:"BBSimplePushButton_defaultValueButton__2qCLj",outer:"BBSimplePushButton_outer__1uCvN",productTitle:"BBSimplePushButton_productTitle__2Am_i",inner:"BBSimplePushButton_inner__2vZJL",buttonDiv:"BBSimplePushButton_buttonDiv__3eZPw",linkbutton:"BBSimplePushButton_linkbutton__29kQW",verstrekken:"BBSimplePushButton_verstrekken__33HUJ",appBar:"BBSimplePushButton_appBar__2g7xa",title:"BBSimplePushButton_title__-Jzn9",vpane:"BBSimplePushButton_vpane__pPRMx"}},1276:function(e,t,n){"use strict";n.r(t);var o=n(5),a=n(6),r=n(7),i=n(8),s=n(35),l=n(1),p=(n(62),n(1127)),u=n.n(p),c=n(31),d=n(598),h=n(245),m=n(608),b=n(19),B=n(0),f=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={enabled:!0},e.onClick2=function(e){alert("already busy")},e.onClick=function(t){if(null==e.props.sparqlqueryrapport){var n=e.props.link;null==n?null==(n=e.props.postLink)||e.sendPostLink(n):e.sendSimpleLink(n)}else e.sendSparqlQueryRapport()},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){null!=this.props.changeParameter&&!0===this.props.setInitialValueChangeParameter&&null==this.props[this.props.changeParameter]&&this.props.publish(this.props.changeParameter,"start")}},{key:"sendSparqlQueryRapport",value:function(){var e=this.props.sparqlqueryrapport,t=Object(c.c)(e,this.props),n=window.top.url;n=n.replace("sparql","command");var o=new URLSearchParams;o.append("commando","sparqlReport"),o.append("sparql",t),this.reallySend(n,o)}},{key:"sendPostLink",value:function(e){var t=this.props.postObject;null==t&&(t={}),"command"===e&&(e=(e=window.top.url).replace("sparql","command"));var n=new URLSearchParams;try{for(var o in t=JSON.parse(t)){var a=Object(c.c)(t[o],this.props);a=encodeURI(a),n.append(o,a)}}catch(r){console.log("JSON command not ok",t),console.log(r)}this.reallySend(e,n)}},{key:"reallySend",value:function(e,t){var n=this,o=new XMLHttpRequest;o.open("POST",e,!0),o.withCredentials=!0,o.setRequestHeader("Content-type","application/x-www-form-urlencoded"),o.responseType="blob",o.onreadystatechange=function(e){this.readyState===XMLHttpRequest.DONE&&200===this.status?console.log("downloading 22 ",e):(console.log("ready state ",this.readyState),this.readyState===XMLHttpRequest.DONE&&200!==this.status&&console.log("readystate changed"))};var a="fileName2.xslx";if(null!=this.props.downloadFileName&&(a=this.props.downloadFileName),o.onload=function(e){console.log(e.target.response.type),"text/xml"===e.target.response.type?alert("could not download document"):n.download(e.target.response,a,"application/octet-stream")},setTimeout((function(){o.send(t)}),0),null!=this.props.changeParameter){var r=Math.random(1e5);this.props.publish(this.props.changeParameter,r)}this.setState({enabled:!0})}},{key:"sendSimpleLink",value:function(e){var t=this;this.setState({enabled:!1}),Object(s.a)({method:"get",url:e}).then((function(e){if(null!=t.props.changeParameter){var n=Math.random(1e5);t.props.publish(t.props.changeParameter,n)}t.setState({enabled:!0})}),(function(e){console.log(e),alert(e),t.setState({enabled:!0})}))}},{key:"render",value:function(){var e=this.props.label;null==e&&(e="geen label");var t=this.state.enabled;if(1==t){var n=this.props.enabled;if(null!=n){n=b.a.processStringForParameters(this,n);try{n=JSON.parse(n.toLowerCase())}catch(f){}0==n&&(t=!1)}}try{var o={pubsub:{}},a=this.props.data.results.bindings[0];for(var r in a)o.pubsub[r]=a[r].value;e=Object(c.c)(e,o)}catch(f){}var i=this.props.fontSize;null!=i&&""!==i||(i="10");i+="px";var s=this.props.tooltip;null==s&&(s="");var l=this.props.beginIcon,p=this.props.endIcon;return Object(B.jsx)(d.a,{title:s,children:Object(B.jsx)(h.a,{size:"small",variant:"contained",color:"grey",className:u.a.openButton+" "+u.a.button1,onClick:this.onClick,endIcon:p&&Object(B.jsx)(m.a,{children:p}),startIcon:l&&Object(B.jsx)(m.a,{children:l}),disabled:!t,children:e})})}},{key:"download",value:function(e,t,n){var o,a,r=window,i="application/octet-stream",s=n||i,l=e,p=!t&&!n&&l,u=document.createElement("a"),c=function(e){return String(e)},d=r.Blob||r.MozBlob||r.WebKitBlob||c,h=t||"download";if(d=d.call?d.bind(r):Blob,"true"===String(this)&&(s=(l=[l,s])[0],l=l[1]),p&&p.length<2048&&(h=p.split("/").pop().split("?")[0],u.href=p,-1!==u.href.indexOf(p))){var m=new XMLHttpRequest;return m.open("GET",p,!0),m.responseType="blob",m.onload=function(e){this.download(e.target.response,h,i)},setTimeout((function(){m.send()}),0),m}if(/^data:[\w+-]+\/[\w+-]+[,;]/.test(l)){if(!(l.length>2096103.424&&d!==c))return navigator.msSaveBlob?navigator.msSaveBlob(b(l),h):B(l);s=(l=b(l)).type||i}function b(e){for(var t=e.split(/[:;,]/),n=t[1],o=("base64"===t[2]?atob:decodeURIComponent)(t.pop()),a=o.length,r=0,i=new Uint8Array(a);r<a;++r)i[r]=o.charCodeAt(r);return new d([i],{type:n})}function B(e,t){if("download"in u)return u.href=e,u.setAttribute("download",h),u.className="download-js-link",u.innerHTML="downloading...",u.style.display="none",document.body.appendChild(u),setTimeout((function(){u.click(),document.body.removeChild(u),!0===t&&setTimeout((function(){r.URL.revokeObjectURL(u.href)}),250)}),66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return e=e.replace(/^data:([\w/\-+]+)/,i),window.open(e)||alert("Displaying New Document\n\nUse Save As... to download, then click back to return to this page."),!0;var n=document.createElement("iframe");document.body.appendChild(n),t||(e="data:"+e.replace(/^data:([\w/\-+]+)/,i)),n.src=e,setTimeout((function(){document.body.removeChild(n)}),333)}if(o=l instanceof d?l:new d([l],{type:s}),navigator.msSaveBlob)return navigator.msSaveBlob(o,h);if(r.URL)B(r.URL.createObjectURL(o),!0);else{if("string"===typeof o||o.constructor===c)try{return B("data:"+s+";base64,"+r.btoa(o))}catch(f){return B("data:"+s+","+encodeURIComponent(o))}(a=new FileReader).onload=function(e){B(this.result)},a.readAsDataURL(o)}return!0}}]),n}(l.Component);t.default=f}}]);
//# sourceMappingURL=25.982695ec.chunk.js.map