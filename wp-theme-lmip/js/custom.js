/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/download-tools.js":
/*!*******************************!*\
  !*** ./src/download-tools.js ***!
  \*******************************/
/*! exports provided: DownloadTools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadTools", function() { return DownloadTools; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DownloadTools =
/*#__PURE__*/
function () {
  function DownloadTools(ele) {
    _classCallCheck(this, DownloadTools);

    this.toolsWrap = ele;
    this.mainNav = this.toolsWrap.getElementsByClassName('tools-main-nav')[0];
    this.subnav = this.toolsWrap.getElementsByClassName('tool-subnav')[0];
    this.restURL = localizedData.siteURL + '/wp-json/load-more/v1/tools/';
    this.currentId = this.mainNav.querySelector('.active').getAttribute('data-id');
    this.currentTool;
    this.getTools();
    this.setMainNavEvent();
  }

  _createClass(DownloadTools, [{
    key: "setMainNavEvent",
    value: function setMainNavEvent() {
      var _this = this;

      var mainNavItems = _toConsumableArray(this.mainNav.querySelectorAll('li'));

      mainNavItems.forEach(function (item, index, arr) {
        item.addEventListener('click', function (e) {
          var target = e.target;

          var toolTitle = _this.toolsWrap.getElementsByClassName('tool-title')[0];

          toolTitle.innerHTML = item.innerHTML;
          _this.currentId = target.getAttribute('data-id');

          _this.getTools();

          mainNavItems.forEach(function (innerItem, innerIndex, innerArr) {
            if (target !== innerItem) {
              innerItem.classList.remove('active');
            } else {
              innerItem.classList.add('active');
            }
          });
        });
      });
    }
  }, {
    key: "getTools",
    value: function getTools() {
      var _this2 = this;

      this.toolsWrap.classList.add('loading');
      var fullURL = this.restURL + this.currentId;
      fetch(fullURL).then(function (resp) {
        return resp.json();
      }) // Transform the data into json
      .then(function (data) {
        _this2.currentTool = data;
        console.log('data', data);

        _this2.renderData();

        _this2.toolsWrap.classList.remove('loading');
      });
    }
  }, {
    key: "renderData",
    value: function renderData() {
      var _this3 = this;

      this.subnav.innerHTML = '';
      this.currentTool['cat_items'].forEach(function (item, index, arr) {
        var liNode = document.createElement('li');
        liNode.innerHTML = item['item_title'];
        liNode.setAttribute('data-index', index);

        if (index === 0) {
          liNode.setAttribute('class', 'active');

          _this3.setFirstData(liNode);
        }

        _this3.subnav.appendChild(liNode);

        _this3.setSubnavEvents();
      });
    }
  }, {
    key: "setSubnavEvents",
    value: function setSubnavEvents() {
      var _this4 = this;

      var subnavItems = this.subnav.querySelectorAll('li');
      subnavItems.forEach(function (item, index, arr) {
        item.addEventListener('click', function (e) {
          var target = e.target; // let toolIndex = item.getAttribute('data-index');
          // let toolContent = this.toolsWrap.getElementsByClassName('tool-content')[0];
          // let toolImg = this.toolsWrap.getElementsByClassName('tool-img')[0];
          // let toolDownload = this.toolsWrap.getElementsByClassName('tool-download')[0];

          var siblings = _toConsumableArray(_this4.subnav.querySelectorAll('li'));

          siblings.forEach(function (item, index, arr) {
            if (item !== target) {
              item.classList.remove('active');
            } else {
              item.classList.add('active');
            }
          }); // toolContent.innerHTML = this.currentTool['cat_items'][toolIndex].item_info;
          // toolImg.setAttribute('src',this.currentTool['cat_items'][toolIndex].item_file_img.url);
          // toolDownload.setAttribute('href',this.currentTool['cat_items'][toolIndex].item_file.url);

          _this4.setFirstData(item);
        });
      });
    }
  }, {
    key: "setFirstData",
    value: function setFirstData(item) {
      var toolIndex = item.getAttribute('data-index');
      var toolContent = this.toolsWrap.getElementsByClassName('tool-content')[0];
      var toolImg = this.toolsWrap.getElementsByClassName('tool-img')[0];
      var toolDownload = this.toolsWrap.getElementsByClassName('tool-download')[0];
      var currentTypeClass = toolDownload.getAttribute('data-type-class');
      var newTypeClass = 'type--' + this.currentTool['file_types'][toolIndex];
      toolContent.innerHTML = this.currentTool['cat_items'][toolIndex].item_info;
      toolImg.setAttribute('src', this.currentTool['cat_items'][toolIndex].item_file_img.url);
      toolDownload.setAttribute('href', this.currentTool['cat_items'][toolIndex].item_file.url);
      toolDownload.classList.remove(currentTypeClass);
      toolDownload.setAttribute('data-type-class', newTypeClass); //toolDownload.classList.add(this.currentTool['file_types'][toolIndex]);

      toolDownload.classList.add(newTypeClass);
    }
  }]);

  return DownloadTools;
}();

/***/ }),

/***/ "./src/element-collapse.js":
/*!*********************************!*\
  !*** ./src/element-collapse.js ***!
  \*********************************/
/*! exports provided: ElementCollapse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementCollapse", function() { return ElementCollapse; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ElementCollapse =
/*#__PURE__*/
function () {
  function ElementCollapse(ele) {
    _classCallCheck(this, ElementCollapse);

    this.trigger = ele;
    this.target = document.getElementById(this.trigger.getAttribute('data-target'));
    this.setTriggerEvent();
  }

  _createClass(ElementCollapse, [{
    key: "setTriggerEvent",
    value: function setTriggerEvent() {
      var _this = this;

      this.trigger.addEventListener('click', function (e) {
        e.preventDefault();

        _this.target.classList.toggle('open');

        _this.trigger.classList.toggle('active');

        if (_this.target.classList.contains('open')) {
          _this.target.style.height = _this.target.querySelector('*').scrollHeight + 'px';
        } else {
          _this.target.style.removeProperty('height');
        }
      });
    }
  }]);

  return ElementCollapse;
}();

/***/ }),

/***/ "./src/filter-articles.js":
/*!********************************!*\
  !*** ./src/filter-articles.js ***!
  \********************************/
/*! exports provided: FilterArticles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterArticles", function() { return FilterArticles; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var FilterArticles =
/*#__PURE__*/
function () {
  function FilterArticles(ele) {
    _classCallCheck(this, FilterArticles);

    this.filterEle = ele; // this.fncs;

    this.loadMoreFnc = null;
    this.fncs = _index__WEBPACK_IMPORTED_MODULE_0__["fncs"];
    this.listingEle = document.getElementById(this.filterEle.getAttribute('data-target'));
    this.setFilterEvent();
  }

  _createClass(FilterArticles, [{
    key: "findFnc",
    value: function findFnc(fncName) {
      var _this = this;

      this.fncs.forEach(function (item, index, arr) {
        if (item.hasOwnProperty('fncName') && item['fncName'] === fncName) {
          // item.fnc.testFnc();
          _this.loadMoreFnc = item.fnc;
        }
      });
    }
  }, {
    key: "clearStage",
    value: function clearStage() {
      this.listingEle.innerHTML = '';
    }
  }, {
    key: "setFilterEvent",
    value: function setFilterEvent() {
      var _this2 = this;

      this.filterEle.addEventListener('change', function (e) {
        if (_this2.loadMoreFnc === null) {
          _this2.findFnc('LoadMoreArticles');
        }

        _this2.clearStage();

        _this2.loadMoreFnc.offset = 0; //this.loadMoreFnc.setTriggerAttr('data-offset',0);

        _this2.loadMoreFnc.tag = _this2.filterEle.value;

        _this2.loadMoreFnc.getArticles();
      });
    }
  }]);

  return FilterArticles;
}();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: fncs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fncs", function() { return fncs; });
/* harmony import */ var _load_more_artcles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-more-artcles */ "./src/load-more-artcles.js");
/* harmony import */ var _load_case_study__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-case-study */ "./src/load-case-study.js");
/* harmony import */ var _filter_articles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-articles */ "./src/filter-articles.js");
/* harmony import */ var _download_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./download-tools */ "./src/download-tools.js");
/* harmony import */ var _page_section_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-section-scroll */ "./src/page-section-scroll.js");
/* harmony import */ var _element_collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./element-collapse */ "./src/element-collapse.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }







var classImports = [_load_more_artcles__WEBPACK_IMPORTED_MODULE_0__["LoadMoreArticles"], _filter_articles__WEBPACK_IMPORTED_MODULE_2__["FilterArticles"], _load_case_study__WEBPACK_IMPORTED_MODULE_1__["LoadCaseStudy"], _download_tools__WEBPACK_IMPORTED_MODULE_3__["DownloadTools"], _element_collapse__WEBPACK_IMPORTED_MODULE_5__["ElementCollapse"]];

var initFncs = _toConsumableArray(document.querySelectorAll('[data-js]'));

var fncs = [];
initFncs.forEach(function (item, index, arr) {
  var fncName = item.getAttribute('data-js');
  classImports.forEach(function (classItem) {
    if (fncName == classItem.name) {
      fncs.push({
        fncName: classItem.name,
        fnc: new classItem(item)
      }); //let init = new classItem(item);
    }
  });
});
var pageSectionScroll = new _page_section_scroll__WEBPACK_IMPORTED_MODULE_4__["PageSectionScroll"]();

/***/ }),

/***/ "./src/load-case-study.js":
/*!********************************!*\
  !*** ./src/load-case-study.js ***!
  \********************************/
/*! exports provided: LoadCaseStudy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadCaseStudy", function() { return LoadCaseStudy; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LoadCaseStudy =
/*#__PURE__*/
function () {
  function LoadCaseStudy(ele) {
    _classCallCheck(this, LoadCaseStudy);

    this.selectMenu = ele;
    this.caseStudyStage = document.getElementById(this.selectMenu.getAttribute('data-target'));
    this.wrapper = document.getElementById(this.selectMenu.getAttribute('data-wrapper'));
    this.setMenuEvent();
    this.currentID;
    this.restURL;
    this.caseStudy;
    this.imgEle = this.caseStudyStage.querySelector('.case-study-img');
  }

  _createClass(LoadCaseStudy, [{
    key: "getCaseStudy",
    value: function getCaseStudy() {
      var _this = this;

      document.body.classList.add('loading');
      this.restURL = localizedData.siteURL + '/wp-json/load-more/v1/case-studies/' + this.currentID; // alert(this.restURL);

      fetch(this.restURL).then(function (resp) {
        return resp.json();
      }) // Transform the data into json
      .then(function (data) {
        _this.caseStudy = data;

        _this.renderData();

        document.body.classList.remove('loading');
      });
    }
  }, {
    key: "setMenuEvent",
    value: function setMenuEvent() {
      var _this2 = this;

      this.selectMenu.addEventListener('change', function () {
        _this2.currentID = _this2.selectMenu.value;

        _this2.clearImg();

        _this2.getCaseStudy();
      });
    }
  }, {
    key: "renderData",
    value: function renderData() {
      var _this3 = this;

      var titleEle = this.caseStudyStage.querySelector('.case-study-title');
      var contentEle = this.caseStudyStage.querySelector('.case-study-content'); // let imgEle = this.caseStudyStage.querySelector('.case-study-img');

      titleEle.innerHTML = this.caseStudy.title;
      contentEle.innerHTML = this.caseStudy.content;
      this.imgEle.setAttribute('src', this.caseStudy.img.url);
      this.imgEle.setAttribute('alt', this.caseStudy.img.alt);
      this.wrapper.style.backgroundColor = this.caseStudy.bg_colour;
      this.imgEle.addEventListener('load', function (e) {
        _this3.imgEle.classList.remove('d-none');
      });
    }
  }, {
    key: "clearImg",
    value: function clearImg() {
      this.imgEle.classList.add('d-none');
    }
  }]);

  return LoadCaseStudy;
}();

/***/ }),

/***/ "./src/load-more-artcles.js":
/*!**********************************!*\
  !*** ./src/load-more-artcles.js ***!
  \**********************************/
/*! exports provided: LoadMoreArticles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadMoreArticles", function() { return LoadMoreArticles; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var LoadMoreArticles =
/*#__PURE__*/
function () {
  function LoadMoreArticles(ele) {
    _classCallCheck(this, LoadMoreArticles);

    console.log('fncs', _index__WEBPACK_IMPORTED_MODULE_0__["fncs"]);
    this.loadTrigger = ele; //this.isMenu = (this.loadTrigger.getAttribute('data-menu') !== null)? true : false ;

    this.listingEle = document.getElementById(this.loadTrigger.getAttribute('data-target'));
    this.perPage = parseInt(this.loadTrigger.getAttribute('data-per-page'));
    this.offset = parseInt(this.loadTrigger.getAttribute('data-offset'));
    this.articlesTotal = this.loadTrigger.getAttribute('data-total');
    this.restURL; // = localizedData.siteURL + '/wp-json/load-more/v1/posts/' + this.perPage + '/' + this.offset;

    this.template = document.getElementById('article-template');
    this.articles;
    this.tag = '';
    this.noMore;
    this.setBtnEvent();
  }

  _createClass(LoadMoreArticles, [{
    key: "testFnc",
    value: function testFnc() {
      alert('test passed');
    }
  }, {
    key: "getArticles",
    value: function getArticles() {
      var _this = this;

      document.body.classList.add('loading');
      this.restURL = localizedData.siteURL + '/wp-json/load-more/v1/posts/' + this.perPage + '/' + this.offset;

      if (this.tag !== '') {
        this.restURL = this.restURL + '/' + this.tag;
      }

      fetch(this.restURL).then(function (resp) {
        return resp.json();
      }) // Transform the data into json
      .then(function (data) {
        //console.log('data',data);
        _this.articles = [];
        _this.articles = data['articles'];
        console.log('this.articles', _this.articles);
        _this.articlesTotal = data['total']['publish'];
        _this.noMore = data['no_more'];

        _this.renderData();

        document.body.classList.remove('loading');
      });
    }
  }, {
    key: "renderData",
    value: function renderData() {
      var _this2 = this;

      this.articles.forEach(function (item, index, arr) {
        var templateClone = document.importNode(_this2.template.content, true);
        var wrapper = templateClone.querySelector('.articles__grid-item');
        var link = templateClone.querySelector('.article-link');
        var img = templateClone.querySelector('.article-img');
        var title = templateClone.querySelector('.article-title');
        var date = templateClone.querySelector('.article-date');
        var tags = templateClone.querySelector('.article-tags');
        wrapper.classList.add('article-' + item.type);
        link.setAttribute('href', item.link);
        img.setAttribute('src', item.img.url);
        title.innerHTML = item.title;
        date.innerHTML = item.date;
        tags.innerHTML = item.tags;
        link.appendChild(tags);

        _this2.listingEle.appendChild(templateClone);
      });
      this.updateSettings();
    }
  }, {
    key: "setBtnEvent",
    value: function setBtnEvent() {
      var _this3 = this;

      var eventType = 'click';
      this.loadTrigger.addEventListener(eventType, function (e) {
        // if(this.isMenu) {
        //     this.tag = this.loadTrigger.value;
        // }
        _this3.getArticles();
      });
    }
  }, {
    key: "setTriggerAttr",
    value: function setTriggerAttr(attrName, attrVal) {
      this.loadTrigger.setAttribute(attrName, attrVal); // console.log('this.loadTrigger', this.loadTrigger);
    }
  }, {
    key: "updateSettings",
    value: function updateSettings() {
      this.offset = this.perPage + this.offset; //parseInt(this.loadTrigger.getAttribute('data-offset'));
      // alert(('this.offset = ' + this.offset + ' / this.articlesTotal = ' + this.articlesTotal) );
      //if (this.offset >= this.articlesTotal) {

      if (this.noMore) {
        this.loadTrigger.classList.add('d-none');
      } else {
        this.loadTrigger.classList.remove('d-none');
        this.loadTrigger.setAttribute('data-offset', this.offset);
      }
    }
  }]);

  return LoadMoreArticles;
}();

/***/ }),

/***/ "./src/page-section-scroll.js":
/*!************************************!*\
  !*** ./src/page-section-scroll.js ***!
  \************************************/
/*! exports provided: PageSectionScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSectionScroll", function() { return PageSectionScroll; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PageSectionScroll =
/*#__PURE__*/
function () {
  function PageSectionScroll() {
    _classCallCheck(this, PageSectionScroll);

    this.urlHash = window.location.hash;

    if (this.urlHash !== '') {
      this.pageSection = document.querySelector(this.urlHash);
      this.getSectionPosition();
      this.topPosition = 0;
    }
  }

  _createClass(PageSectionScroll, [{
    key: "getSectionPosition",
    value: function getSectionPosition() {
      if (this.pageSection === null) {
        return;
      }

      var eleRect = this.pageSection.getBoundingClientRect();
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      this.topPosition = eleRect.top + scrollTop;
      this.scrollToSection();
    }
  }, {
    key: "scrollToSection",
    value: function scrollToSection() {
      window.scrollTo({
        top: this.topPosition,
        left: 0,
        behavior: 'smooth'
      });
    }
  }]);

  return PageSectionScroll;
}();

/***/ })

/******/ });