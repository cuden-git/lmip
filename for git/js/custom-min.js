!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="./src/index.js")}({"./src/download-tools.js":function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e),n.d(e,"DownloadTools",function(){return a});var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.toolsWrap=e,this.mainNav=this.toolsWrap.getElementsByClassName("tools-main-nav")[0],this.subnav=this.toolsWrap.getElementsByClassName("tool-subnav")[0],this.restURL=localizedData.siteURL+"/wp-json/load-more/v1/tools/",this.currentId=this.mainNav.querySelector(".active").getAttribute("data-id"),this.currentTool,this.getTools(),this.setMainNavEvent()}var e,n,a;return e=t,(n=[{key:"setMainNavEvent",value:function(){var t=this,e=r(this.mainNav.querySelectorAll("li"));e.forEach(function(n,r,i){n.addEventListener("click",function(r){var i=r.target;t.toolsWrap.getElementsByClassName("tool-title")[0].innerHTML=n.innerHTML,t.currentId=i.getAttribute("data-id"),t.getTools(),e.forEach(function(t,e,n){i!==t?t.classList.remove("active"):t.classList.add("active")})})})}},{key:"getTools",value:function(){var t=this;this.toolsWrap.classList.add("loading");var e=this.restURL+this.currentId;fetch(e).then(function(t){return t.json()}).then(function(e){t.currentTool=e,console.log("data",e),t.renderData(),t.toolsWrap.classList.remove("loading")})}},{key:"renderData",value:function(){var t=this;this.subnav.innerHTML="",this.currentTool.cat_items.forEach(function(e,n,r){var i=document.createElement("li");i.innerHTML=e.item_title,i.setAttribute("data-index",n),0===n&&(i.setAttribute("class","active"),t.setFirstData(i)),t.subnav.appendChild(i),t.setSubnavEvents()})}},{key:"setSubnavEvents",value:function(){var t=this;this.subnav.querySelectorAll("li").forEach(function(e,n,i){e.addEventListener("click",function(n){var i=n.target;r(t.subnav.querySelectorAll("li")).forEach(function(t,e,n){t!==i?t.classList.remove("active"):t.classList.add("active")}),t.setFirstData(e)})})}},{key:"setFirstData",value:function(t){var e=t.getAttribute("data-index"),n=this.toolsWrap.getElementsByClassName("tool-content")[0],r=this.toolsWrap.getElementsByClassName("tool-img")[0],i=this.toolsWrap.getElementsByClassName("tool-download")[0],a=i.getAttribute("data-type-class"),s="type--"+this.currentTool.file_types[e];n.innerHTML=this.currentTool.cat_items[e].item_info,r.setAttribute("src",this.currentTool.cat_items[e].item_file_img.url),i.setAttribute("href",this.currentTool.cat_items[e].item_file.url),i.classList.remove(a),i.setAttribute("data-type-class",s),i.classList.add(s)}}])&&i(e.prototype,n),a&&i(e,a),t}()},"./src/element-collapse.js":function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e),n.d(e,"ElementCollapse",function(){return i});var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.trigger=e,this.target=document.getElementById(this.trigger.getAttribute("data-target")),this.setTriggerEvent()}var e,n,i;return e=t,(n=[{key:"setTriggerEvent",value:function(){var t=this;this.trigger.addEventListener("click",function(e){e.preventDefault(),t.target.classList.toggle("open"),t.trigger.classList.toggle("active"),t.target.classList.contains("open")?t.target.style.height=t.target.querySelector("*").scrollHeight+"px":t.target.style.removeProperty("height")})}}])&&r(e.prototype,n),i&&r(e,i),t}()},"./src/filter-articles.js":function(t,e,n){"use strict";n.r(e),n.d(e,"FilterArticles",function(){return a});var r=n("./src/index.js");function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.filterEle=e,this.loadMoreFnc=null,this.fncs=r.fncs,this.listingEle=document.getElementById(this.filterEle.getAttribute("data-target")),this.setFilterEvent()}var e,n,a;return e=t,(n=[{key:"findFnc",value:function(t){var e=this;this.fncs.forEach(function(n,r,i){n.hasOwnProperty("fncName")&&n.fncName===t&&(e.loadMoreFnc=n.fnc)})}},{key:"clearStage",value:function(){this.listingEle.innerHTML=""}},{key:"setFilterEvent",value:function(){var t=this;this.filterEle.addEventListener("change",function(e){null===t.loadMoreFnc&&t.findFnc("LoadMoreArticles"),t.clearStage(),t.loadMoreFnc.offset=0,t.loadMoreFnc.tag=t.filterEle.value,t.loadMoreFnc.getArticles()})}}])&&i(e.prototype,n),a&&i(e,a),t}()},"./src/index.js":function(t,e,n){"use strict";n.r(e),n.d(e,"fncs",function(){return f});var r=n("./src/load-more-artcles.js"),i=n("./src/load-case-study.js"),a=n("./src/filter-articles.js"),s=n("./src/download-tools.js"),o=n("./src/page-section-scroll.js"),l=n("./src/element-collapse.js");var c,u=[r.LoadMoreArticles,a.FilterArticles,i.LoadCaseStudy,s.DownloadTools,l.ElementCollapse],d=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(c=document.querySelectorAll("[data-js]"))||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}(),f=[];d.forEach(function(t,e,n){var r=t.getAttribute("data-js");u.forEach(function(e){r==e.name&&f.push({fncName:e.name,fnc:new e(t)})})});new o.PageSectionScroll},"./src/load-case-study.js":function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e),n.d(e,"LoadCaseStudy",function(){return i});var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.selectMenu=e,this.caseStudyStage=document.getElementById(this.selectMenu.getAttribute("data-target")),this.wrapper=document.getElementById(this.selectMenu.getAttribute("data-wrapper")),this.setMenuEvent(),this.currentID,this.restURL,this.caseStudy,this.imgEle=this.caseStudyStage.querySelector(".case-study-img")}var e,n,i;return e=t,(n=[{key:"getCaseStudy",value:function(){var t=this;document.body.classList.add("loading"),this.restURL=localizedData.siteURL+"/wp-json/load-more/v1/case-studies/"+this.currentID,fetch(this.restURL).then(function(t){return t.json()}).then(function(e){t.caseStudy=e,t.renderData(),document.body.classList.remove("loading")})}},{key:"setMenuEvent",value:function(){var t=this;this.selectMenu.addEventListener("change",function(){t.currentID=t.selectMenu.value,t.clearImg(),t.getCaseStudy()})}},{key:"renderData",value:function(){var t=this,e=this.caseStudyStage.querySelector(".case-study-title"),n=this.caseStudyStage.querySelector(".case-study-content");e.innerHTML=this.caseStudy.title,n.innerHTML=this.caseStudy.content,this.imgEle.setAttribute("src",this.caseStudy.img.url),this.imgEle.setAttribute("alt",this.caseStudy.img.alt),this.wrapper.style.backgroundColor=this.caseStudy.bg_colour,this.imgEle.addEventListener("load",function(e){t.imgEle.classList.remove("d-none")})}},{key:"clearImg",value:function(){this.imgEle.classList.add("d-none")}}])&&r(e.prototype,n),i&&r(e,i),t}()},"./src/load-more-artcles.js":function(t,e,n){"use strict";n.r(e),n.d(e,"LoadMoreArticles",function(){return a});var r=n("./src/index.js");function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),console.log("fncs",r.fncs),this.loadTrigger=e,this.listingEle=document.getElementById(this.loadTrigger.getAttribute("data-target")),this.perPage=parseInt(this.loadTrigger.getAttribute("data-per-page")),this.offset=parseInt(this.loadTrigger.getAttribute("data-offset")),this.articlesTotal=this.loadTrigger.getAttribute("data-total"),this.restURL,this.template=document.getElementById("article-template"),this.articles,this.tag="",this.noMore,this.setBtnEvent()}var e,n,a;return e=t,(n=[{key:"testFnc",value:function(){alert("test passed")}},{key:"getArticles",value:function(){var t=this;document.body.classList.add("loading"),this.restURL=localizedData.siteURL+"/wp-json/load-more/v1/posts/"+this.perPage+"/"+this.offset,""!==this.tag&&(this.restURL=this.restURL+"/"+this.tag),fetch(this.restURL).then(function(t){return t.json()}).then(function(e){t.articles=[],t.articles=e.articles,console.log("this.articles",t.articles),t.articlesTotal=e.total.publish,t.noMore=e.no_more,t.renderData(),document.body.classList.remove("loading")})}},{key:"renderData",value:function(){var t=this;this.articles.forEach(function(e,n,r){var i=document.importNode(t.template.content,!0),a=i.querySelector(".articles__grid-item"),s=i.querySelector(".article-link"),o=i.querySelector(".article-img"),l=i.querySelector(".article-title"),c=i.querySelector(".article-date"),u=i.querySelector(".article-tags");a.classList.add("article-"+e.type),s.setAttribute("href",e.link),o.setAttribute("src",e.img.url),l.innerHTML=e.title,c.innerHTML=e.date,u.innerHTML=e.tags,s.appendChild(u),t.listingEle.appendChild(i)}),this.updateSettings()}},{key:"setBtnEvent",value:function(){var t=this;this.loadTrigger.addEventListener("click",function(e){t.getArticles()})}},{key:"setTriggerAttr",value:function(t,e){this.loadTrigger.setAttribute(t,e)}},{key:"updateSettings",value:function(){this.offset=this.perPage+this.offset,this.noMore?this.loadTrigger.classList.add("d-none"):(this.loadTrigger.classList.remove("d-none"),this.loadTrigger.setAttribute("data-offset",this.offset))}}])&&i(e.prototype,n),a&&i(e,a),t}()},"./src/page-section-scroll.js":function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e),n.d(e,"PageSectionScroll",function(){return i});var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.urlHash=window.location.hash,""!==this.urlHash&&(this.pageSection=document.querySelector(this.urlHash),this.getSectionPosition(),this.topPosition=0)}var e,n,i;return e=t,(n=[{key:"getSectionPosition",value:function(){if(null!==this.pageSection){var t=this.pageSection.getBoundingClientRect(),e=window.pageYOffset||document.documentElement.scrollTop;this.topPosition=t.top+e,this.scrollToSection()}}},{key:"scrollToSection",value:function(){window.scrollTo({top:this.topPosition,left:0,behavior:"smooth"})}}])&&r(e.prototype,n),i&&r(e,i),t}()}});