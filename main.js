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
/******/ 	return __webpack_require__(__webpack_require__.s = "./jssrc/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./jssrc/main.ts":
/*!***********************!*\
  !*** ./jssrc/main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
__webpack_require__(/*! ../src/modules/search */ "./src/modules/search/index.ts");
var web_1 = __importDefault(__webpack_require__(/*! ../src/modules/leftnav/web */ "./src/modules/leftnav/web.ts"));
__webpack_require__(/*! ../src/modules/history */ "./src/modules/history/index.ts"); //历史纪录
var topgg = $('#topgg');
if (Math.random() < 0.25)
    topgg.html('<iframe width="1000" height="60" frameborder="0" scrolling="no" marginwidth="0" marginheight="0" src="//same.eastmoney.com/s?z=eastmoney&c=1082&op=1"></iframe>');
else
    topgg.html('<iframe width="1000" height="60" frameborder="0" scrolling="no" marginwidth="0" marginheight="0" src="//fundact.eastmoney.com/banner/hqb_hq.html?spm=100004.sbb"></iframe>');
//加载左侧导航栏模块
web_1["default"]();


/***/ }),

/***/ "./src/modules/confirm/index.ts":
/*!**************************************!*\
  !*** ./src/modules/confirm/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 弹窗事件
exports.__esModule = true;
var confirm = /** @class */ (function () {
    function name(option) {
        var defaultOption = {
            title: '确认删除',
            content: '确认删除选择的数据？',
            mask: true,
            height: '120',
            width: '230',
            confirm: null,
            cancel: null
        };
        this.option = $.extend({}, defaultOption, option);
        this.init();
    }
    name.prototype.init = function () {
        var _self = this;
        this.winHeight = $(window).outerHeight();
        this.windWidth = $(window).outerWidth();
        var html = '<div class="comfirm_model">';
        if (this.option.mask) {
            html += '<div class="comfirm_mask" style="width:100%;height:100%;background:#000;opacity:0.5;"></div>';
        }
        html += '<div class="comfirm_container">' +
            '<div class="comfirm_header"><div class="comfirm_tit">' + this.option.title + '</div><div class="confirm_more"><i class="icon icon_confirm_close icon_close"></i></div></div>' +
            '<div class="confirm_content">' + this.option.content + '</div>' +
            '<div class="confirm_foot">';
        if (this.option.confirmText) {
            html += '<button class=" btn-confirm">' + this.option.confirmText + '</botton>';
        }
        if (this.option.cancelText) {
            html += '<button class=" btn-cancel">' + this.option.cancelText + '</botton></div>';
        }
        html += '</div></div></div>';
        this.html = $(html);
        $('body').append(this.html);
        this.html.css({
            "position": "fixed",
            "top": "0",
            "left": "0",
            "height": this.winHeight + 'px',
            "width": this.windWidth + 'px',
            "z-index": "9999"
        });
        $('.comfirm_container', this.html).css({
            "position": "absolute",
            "top": "50%",
            "left": "50%",
            "height": _self.option.height + 'px',
            "width": _self.option.width + 'px',
            "margin-top": '-' + _self.option.height / 2 + 'px',
            "margin-left": '-' + _self.option.width / 2 + 'px'
        });
        this.html.on('click', '.icon_close', function () {
            _self.remove();
        });
        this.html.on('click', '.btn-confirm', function () {
            if (typeof _self.option.confirm === 'function') {
                _self.option.confirm(_self);
            }
        });
        this.html.on('click', '.btn-cancel', function () {
            if (typeof _self.option.cancel === 'function') {
                _self.option.cancel(_self);
            }
        });
    };
    ;
    name.prototype.remove = function () {
        if (this.html) {
            this.html.remove();
        }
    };
    return name;
}());
exports["default"] = confirm;


/***/ }),

/***/ "./src/modules/cookie/index.js":
/*!*************************************!*\
  !*** ./src/modules/cookie/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * cookie
 */


var cookie = {
	get: function (name) {
		var xarr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
		if (xarr != null)
			// return decodeURIComponent(xarr[2]);
			return unescape(xarr[2]);
		return null;
	},
	set: function(key,value,expiredays,domain){
		var cookiestr = key + "=" + escape(value)

		if (expiredays != undefined) {
			var exdate = new Date();
			exdate.setDate(exdate.getDate() + expiredays);
			cookiestr += ";expires=" + exdate.toGMTString()
		}
		if (domain != undefined) {
			cookiestr += ";domain=" + domain
		}
		cookiestr += ';path=/'
		document.cookie = cookiestr

	},
	del: function (key, domain) {
		var exdate = new Date((new Date).getTime() - 1);
		if (domain) {
			document.cookie = key + '=;path=/;expires=' + exdate.toGMTString() + ';domain=' + domain;
		}
		else{
			document.cookie = key + '=;path=/;expires=' + exdate.toGMTString();
		}

	}
};

module.exports = cookie;

/***/ }),

/***/ "./src/modules/history/index.ts":
/*!**************************************!*\
  !*** ./src/modules/history/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var cookie_1 = __importDefault(__webpack_require__(/*! ../cookie */ "./src/modules/cookie/index.js"));
(function ($) {
    //if (typeof (qjdata) == 'undefined')
    //    return;
    function isInArray(str, arr) {
        var res = -1;
        for (var i = 0; i < arr.length; i++) {
            var name = arr[i].split("|")[0];
            if (str == name) {
                res = i;
            }
        }
        return res;
    }
    if (typeof cookie_1["default"] == undefined)
        return;
    var records = cookie_1["default"].get('dRecords');
    if (!!records && $('#hisWrap').length) {
        var data = records.split(',*');
        var str = "";
        if (data.length > 10) {
            str = "style='display:block;'";
        }
        var html = ['<div class="histxt">您最近访问数据：</div><div class="spread_more" ' + str + '>更多<i class="icon icon_history_more"></i><i class="icon icon_history_top"></i></div><div class="hisbox"><ul class="hisul">'];
        for (var i = data.length - 1; i >= 0; i--) {
            if (data[i] == '') {
                data.splice(i, 1); //删除空白元素
                continue;
            }
            var item = data[i].split('|');
            if (item[0] && item[1]) {
                html.push('<li><a href="' + item[1] + '" target="_blank" tracker-eventcode="sjpd_sjzxsy_sjzxggsj_djzjfw">' + item[0] + '</a></li>');
            }
        }
        html.push('</ul></div>');
        html = html.join('');
        $('#hisWrap').append(html);
        $('#hisWrap').show();
        var liWidth = 0;
        var hisWidth = $('#hisWrap').width() || 1000;
        $('#hisWrap .hisul>li').each(function () {
            liWidth += $(this).width() + 25;
        });
        if (liWidth > (hisWidth - 150)) {
            $('#hisWrap .spread_more').show();
        }
        $('#hisWrap .spread_more').click(function () {
            $('#hisWrap').toggleClass("active");
        });
    }
    if (typeof page_type == 'undefined' && typeof page_parent_type == 'undefined')
        return;
    records = !!records ? records.split(',*') : [];
    var name = "", href = "";
    if (typeof page_type != 'undefined' && page_type) {
        var $menu = $('#leftnav');
        var item = $('span[data-key="' + page_type + '"]', $menu);
        if (item.length > 0) {
            item = item.eq(0);
        }
        href = item.data("href") || '';
        name = item.data("name") || '';
    }
    if (typeof page_parent_type != 'undefined' && page_parent_type) {
        name = page_parent_type;
        href = location.href;
    }
    if (typeof page_detail_type != 'undefined' && page_detail_type) {
        href = location.href;
        name += '-' + page_detail_type;
    }
    if (href == '' || name == '' || name.length > 14) {
        return;
    }
    var val = name + "|" + href;
    var _index = isInArray(name, records);
    if (_index == -1) {
        if (records.length >= 20) {
            records.shift();
        }
    }
    else {
        records.splice(_index, 1);
    }
    records.push(val);
    cookie_1["default"].set("dRecords", records.join(",*"), 999 * 12 * 7200);
})(jQuery);


/***/ }),

/***/ "./src/modules/leftnav/web.ts":
/*!************************************!*\
  !*** ./src/modules/leftnav/web.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var confirm_1 = __importDefault(__webpack_require__(/*! ../confirm */ "./src/modules/confirm/index.ts"));
var sortTable_1 = __importDefault(__webpack_require__(/*! ../sortTable */ "./src/modules/sortTable/index.ts"));
function default_1() {
    if (typeof (qjdata) == 'undefined')
        return;
    function removeItem(arr, val) {
        var index = arr.indexOf(val);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    }
    ;
    var collectArr = []; //存储我的数据数组
    var leftNavFun = {
        //设置二级菜单距离浏览器底部距离
        setDomMarginBottom: function (obj) {
            obj.css('top', '0px');
            var xh = $(window).height() - (obj.height() + obj.offset().top - $(document).scrollTop()) - 30; //dom距离窗口底部的距离
            if (xh < 0) {
                obj.css('top', '' + xh + 'px');
            }
            ;
        },
        //去除数组重复元素
        uniqueArr: function (arr) {
            var temp = [];
            for (var i = 0; i < arr.length; i++) {
                if (temp.indexOf(arr[i]) == -1) {
                    temp.push(arr[i]);
                }
            }
            return temp;
        },
        getCookie: function (sName) {
            var cookies = document.cookie;
            if (cookies == null || cookies == "undefined") {
                return null;
            }
            ;
            var aCookie = cookies.split("; ");
            var value = null;
            for (var i = 0; i < aCookie.length; i++) {
                var aCrumb = aCookie[i].split("=");
                if (sName == aCrumb[0]) {
                    value = aCrumb[1];
                    break;
                }
            }
            if (value == null || value == "undefined" || value.length == 0)
                return null;
            return decodeURIComponent(value);
        },
        //删除我的数据后更新其他模块的样式显示
        frashInfos: function () {
            $('.left_star_f').each(function (i) {
                var _that = this;
                var curKey = $(_that).data('key');
                if (collectArr.indexOf(curKey) > -1) {
                }
                else {
                    $(_that).removeClass('left_star_f').addClass('left_star');
                }
            });
        },
        //点击收藏，动态添加数据到‘我的数据模块’
        insertMydata: function (text, data, link) {
            if (collectArr.indexOf(data) != -1)
                return;
            collectArr.push(data);
            var $li = '<li id="" class="item">' +
                '<span class="icons icon_move"></span>' +
                '<a href="' + link + '" tracker-eventcode="sjpd_sjzxsy_zcdhlqy_qydj">' +
                '<span class="t">' + text + '</span>' +
                '</a>' +
                // '<span class="icons icon_new"></span>' +
                '<span class="icons icon_delete" data-key="' + data + '"></span>' +
                '</li>';
            $('#my_data_infos').prepend($li);
        },
        //我的数据删除
        removeMydata: function (name) {
            $('#my_data_infos').find('li').each(function (i) {
                var $name = $(this).find('.t').text();
                if (name == $name) {
                    $(this).remove();
                }
            });
        },
        //校验需要登陆弹窗
        checkLogin: function () {
            new confirm_1["default"]({
                mask: false,
                confirmText: '确定',
                cancelText: '取消',
                title: "登录提示",
                content: "收藏功能登录后可使用",
                confirm: function (e) {
                    window.open('https://passport2.eastmoney.com/pub/login?backurl=' + location.href);
                    e.remove();
                },
                cancel: function (e) {
                    e.remove();
                }
            });
        }
    };
    //全景图
    $('.qjbox').hover(function () {
        //设置元素距离底部距离
        var obj = $(this).find('.nav_wrap_block');
        obj.css('width', 146 * (qjdatas.length) + 'px');
        if (qjdatas.length == 0)
            obj.css('display', 'none');
        leftNavFun.setDomMarginBottom(obj);
    });
    //一级菜单hover延时处理以及hover样式处理
    var hoverTimer, outTimer;
    $('.firstlevel').hover(function () {
        var curClass = $(this).find('.root-link').find('span').first().attr('class').split(' ')[1];
        $(this).find('.root-link').find('span').first().addClass(curClass + '_f');
        /** */
        var that = this;
        clearTimeout(outTimer);
        hoverTimer = setTimeout(function () {
            $(that).siblings().find('.child-block').css('display', 'none');
            $(that).find('.child-block').css('display', 'block');
            leftNavFun.setDomMarginBottom($(that).find('.child-block'));
        }, 50);
    }, function () {
        var _f = $(this).find('.root-link').find('span').first().attr('class').split(' ')[2];
        $(this).find('.root-link').find('span').first().removeClass(_f);
        /** */
        var that = this;
        clearTimeout(hoverTimer);
        outTimer = setTimeout(function () {
            $(that).find('.child-block').css('display', 'none');
        }, 50);
    });
    $(".leftnav").mouseenter(function () {
    }).mouseleave(function () {
        $(this).find('.child-block').css('display', 'none');
    });
    if (typeof page_type != 'undefined' && page_type) {
        $('.leftnav .firstlevel span[data-key="' + page_type + '"]').prev("a").find("span").addClass("red");
    }
    var uidal = leftNavFun.getCookie('uidal') ? leftNavFun.getCookie('uidal').slice(0, 16) : '';
    //控制我的数据子模块显示
    $('.mydata').hover(function () {
        if (!uidal) {
            $('.tips').css('display', 'block');
            $('.tips').find('a').attr('href', 'https://passport2.eastmoney.com/pub/login?backurl=' + window.location.href);
            return;
        }
        ;
        if ($('.left_mydata_block').find('li').length < 1) {
            $('.nodata').css('display', 'block');
            $('.left_mydata_block').css('display', 'none');
        }
        else {
            $('.left_mydata_block').css('display', 'block');
            var _h = $('.left_mydata_block').height();
            if (_h >= 800) {
                $('.left_mydata_block').css('overflow', 'auto');
            }
            else {
                $('.left_mydata_block').css('overflow', 'hidden');
            }
        }
        var obj = $(this).find('.left_mydata_block');
        leftNavFun.setDomMarginBottom(obj);
        // $('.left_mydata_block').mCustomScrollbar({theme: "minimal-dark"});
    }, function () {
        $('.left_mydata_block').css('display', 'none');
        $('.tips').css('display', 'none');
        $('.nodata').css('display', 'none');
    });
    $('.myhome').on('click', function () {
        window.location.href = "//data.eastmoney.com/";
    });
    //控制icon
    $('.myhome').hover(function () {
        $(this).find('span:first').removeClass('icon_home').addClass('icon_home_f');
    }, function () {
        $(this).find('span:first').removeClass('icon_home_f').addClass('icon_home');
    });
    $('.mydata').hover(function () {
        $(this).find('span:first').removeClass('icon_top_mydata').addClass('icon_top_mydata_f');
    }, function () {
        $(this).find('span:first').removeClass('icon_top_mydata_f').addClass('icon_top_mydata');
    });
    //获取全量收藏信息
    ;
    (function getCollectInfos() {
        if (!uidal)
            return;
        $.ajax({
            url: "https://dcfm.eastmoney.com/mydata/api/get/" + uidal,
            method: "GET",
            dataType: "jsonp",
            success: function (msg) {
                if (msg.Status == 1 && msg.Result) {
                    collectArr = leftNavFun.uniqueArr(msg.Result.split(','));
                    renderMyData();
                }
                else {
                    //result = "";
                }
            },
            error: function (err) { }
        });
    })();
    // 收藏和取消收藏都是全量提交,公用一个接口
    var tempArr = [];
    $('.left_star').on('click', function (e) {
        if (!uidal) {
            leftNavFun.checkLogin();
            return;
        }
        ;
        var _that = $(this);
        var key = "";
        if (_that.attr('class') == 'left_star') {
            var as = collectArr.join(',');
            key = _that.data('key') + ',' + collectArr.join(',');
            tempArr.push(_that.data('key'));
        }
        else {
            collectArr = removeItem(collectArr, _that.data('key'));
            key = collectArr.join(',');
            tempArr = removeItem(tempArr, _that.data('key'));
        }
        ;
        //提出来，默认成功，先刷新样式
        if (_that.attr('class') == 'left_star') {
            _that.removeClass('left_star').addClass('left_star_f');
            leftNavFun.insertMydata(_that.data('name'), _that.data('key'), _that.prev().attr('href'));
        }
        else {
            _that.removeClass('left_star_f').addClass('left_star');
            var curKey = _that.data('key');
            if (tempArr.indexOf(curKey) == -1) {
                leftNavFun.removeMydata(_that.data('name'));
            }
        }
        $.ajax({
            url: "https://dcfm.eastmoney.com/mydata/api/set/" + uidal + "?data=" + key,
            method: "GET",
            dataType: "jsonp",
            success: function (msg) {
                if (msg.Status == 1) { }
            },
            error: function (err) {
                console.log('faild');
            }
        });
    });
    //我的数据-删除(全量提交)
    $('#my_data_infos').on('click', '.icon_delete', function () {
        var _that = this;
        collectArr = removeItem(collectArr, $(_that).data('key'));
        var key = collectArr.join(',');
        // console.log(key)
        new confirm_1["default"]({
            mask: false,
            confirmText: '确定',
            cancelText: '取消',
            confirm: function (e) {
                //默认成功
                $(_that).parent('li').remove();
                leftNavFun.frashInfos();
                e.remove();
                $.ajax({
                    url: "https://dcfm.eastmoney.com/mydata/api/set/" + uidal + "?data=" + key,
                    method: "GET",
                    dataType: "jsonp",
                    success: function (msg) {
                        // $(_that).parent('li').remove();
                        // leftNavFun.frashInfos();
                    },
                    error: function (err) {
                        console.log('faild');
                    }
                });
            },
            cancel: function (e) {
                e.remove();
            }
        });
    });
    //全景图模块筛选
    var qjdatas = JSON.parse(qjdata);
    //渲染全景图模块
    function addQJDom(val, hasMatch) {
        var $childHtml = "";
        for (var i = 0; i < qjdatas.length; i++) {
            var $li = "";
            for (var j = 0; j < qjdatas[i].length; j++) {
                var str = qjdatas[i][j].name;
                if (str.indexOf(val) != -1) {
                    hasMatch = true;
                    str = str.replace(val, '<span style="color:red">' + val + '</span>');
                }
                ;
                var newHtml = "";
                newHtml = qjdatas[i][j].newClass ? '<span class="left_icon_new" style="top:6px;right:0"></span>' : '';
                // var hotHtml = "";
                // if (qjdatas[i][j].classname) {
                //     hotHtml = '<span class="left_icon_hot"></span>'
                // } else {
                //     hotHtml = "";
                // }
                $li += '<li><span class="label">' + qjdatas[i][j].character + '</span><a href="' + qjdatas[i][j].link + '" tracker-eventcode="sjpd_sjzxsy_zcdhlqjtqy_qydj"><span class="item_name">' + str + '</span>' + newHtml + '</a></li>';
            }
            ;
            if (i == 0) {
                var inputHtml = '<div style="height:25px;"></div>';
            }
            else {
                var inputHtml = '';
            }
            $childHtml += '<div class="nav_block" style="float:left;">' + inputHtml + '<ul>' + $li + '</ul></div>';
        }
        ;
        if (!hasMatch)
            return;
        $('.navbox').empty().append($childHtml);
    }
    addQJDom('', true);
    var preVal = "";
    var changeProperty = function () {
        //var val = (<HTMLInputElement>document.getElementById('qjinput')).value;
        var val = $('#qjinput').val().toString();
        if (preVal == val)
            return; //避免ie11死循环控制
        preVal = val;
        //var isCharacters = new RegExp("^[\u4E00-\u9FA5]{1,8}$");//验证输入值是否是汉字
        var hasMatch = false; //该字段用来判断是否有匹配的字段，如没有则不进行页面重绘
        addQJDom(val, hasMatch);
    };
    $('#qjinput').on("input propertychange", changeProperty);
    //拖拽回调函数
    function dragCallback() {
        var $li = $('#my_data_infos').find('li');
        var dragArr = [];
        $li.each(function (i) {
            var key = $(this).find('.icon_delete').data('key');
            dragArr.push(key);
        });
        var dataKey = dragArr.join(',');
        $.ajax({
            url: "https://dcfm.eastmoney.com/mydata/api/set/" + uidal + "?data=" + dataKey,
            method: "GET",
            dataType: "jsonp",
            success: function (msg) { console.log('success'); },
            error: function (err) { console.log('faild'); }
        });
    }
    ;
    function renderMyData() {
        collectArr.forEach(function (v) {
            var mydataStr = "";
            var arr = [];
            $('.child-block').each(function (i) {
                var that = this;
                if (i > 0) {
                    $(that).find('li').each(function (i) {
                        var _that = this;
                        var curKey = $(_that).find('.left_star').data('key');
                        var text = $(_that).find('.t_info').text();
                        var link = $(_that).find('a').attr('href');
                        if (v === curKey) {
                            if (arr.indexOf(curKey) == -1) {
                                //插入数据到我的模块
                                arr.push(curKey);
                                mydataStr += '<li id="" class="item">' +
                                    '<span class="icons icon_move"></span>' +
                                    '<a href="' + link + '" tracker-eventcode="sjpd_sjzxsy_zcdhlqy_qydj">' +
                                    '<span class="t">' + text + '</span>' +
                                    '</a>' +
                                    // '<span class="icons icon_new"></span>' +
                                    '<span class="icons icon_delete" data-key="' + curKey + '"></span>' +
                                    '</li>';
                            }
                        }
                        ;
                    });
                }
            });
            $(".left_mydata_block ul").append(mydataStr);
        });
        $('.child-block ul li').each(function (i) {
            var _that = this;
            var curKey = $(_that).find('.left_star').data('key');
            var text = $(_that).find('.t_info').text();
            collectArr.forEach(function (v) {
                if (v === curKey) {
                    //已收藏添加标记样式
                    $(_that).find('.left_star').removeClass('left_star').addClass('left_star_f');
                }
            });
        });
    }
    ;
    //控制导航栏与窗口的定位
    var _leftTop = $('.leftnav-block').offset().top;
    var _footFrameH = $('.footFrame').height();
    var _navH = $('.leftnav-block').height() + 35;
    $(window).scroll(function () {
        _leftTop = _leftTop ? _leftTop : $('.leftnav-block').offset().top;
        _footFrameH = _footFrameH ? _footFrameH : $('.footFrame').height();
        _navH = _navH ? _navH : $('.leftnav-block').height() + 35;
        var srollPos = $(window).scrollTop();
        var footFrameOF = $('.footFrame').offset().top;
        var _docH = $(document).height();
        var _footFrameB = _docH - footFrameOF - 30 - _footFrameH; //
        if (srollPos > _leftTop) {
            var newTop;
            var marTop = _docH - srollPos - _footFrameH - _footFrameB;
            newTop = marTop < _navH ? -(_navH - marTop) : 33;
            $('.leftnav-block').css({ 'position': 'fixed', 'top': newTop + 'px' });
        }
        else {
            $('.leftnav-block').css({ 'position': 'absolute', 'top': '' });
        }
    });
    $(document).ready(function () {
        //移动:初始化注册拖拽对象
        new sortTable_1["default"]({
            el: '#my_data_infos',
            itemTarget: '.icon_move',
            delay: 1000,
            callback: function () {
                dragCallback();
            }
        });
    });
}
exports["default"] = default_1;


/***/ }),

/***/ "./src/modules/search/index.ts":
/*!*************************************!*\
  !*** ./src/modules/search/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/***/ }),

/***/ "./src/modules/sortTable/index.ts":
/*!****************************************!*\
  !*** ./src/modules/sortTable/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
// 拖拽
var sortTable = /** @class */ (function () {
    function sortTable(opt) {
        this.eventNames = {
            start: "touchstart.sortable mousedown.sortable",
            drop: "touchend.sortable touchcancel.sortable mouseup.sortable",
            drag: "touchmove.sortable mousemove.sortable",
            scroll: "scroll.sortable"
        };
        var defaultOption = {
            el: '#sort',
            itemSelector: 'li',
            itemTarget: 'li',
            placeholderClass: 'placeholder',
            dragClass: 'dragged',
            bodyClass: 'dragging',
            delay: 1000,
            callback: null
        };
        this.option = $.extend({}, defaultOption, opt);
        this.handle = this.option.itemTarget;
        this.target = $(this.option.el);
        this.target.on(this.eventNames.start, this.handle, $.proxy(this.dragInit, this));
    }
    ;
    sortTable.prototype.dragInit = function (e) {
        document.body.onselectstart = document.body.ondrag = function () {
            return false;
        };
        if (this.seter) {
            window.clearTimeout(this.seter);
        }
        this.document = $(document);
        var closetItem = $(e.target).closest(this.option.itemSelector);
        if (closetItem.length) {
            this.item = closetItem;
            this.dragProxy = $.proxy(this.drag, this);
            this.dropProxy = $.proxy(this.drop, this);
            var placeholder = document.createElement(this.option.itemSelector);
            placeholder.className = this.option.placeholderClass;
            this.placeholder = $(placeholder);
            this.placeholder.css({
                height: this.item.outerHeight(),
                width: this.item.outerWidth()
            });
            this.setPointer(e);
            this.toggleListeners('on');
            this.dragInitDone = true;
        }
    };
    ;
    sortTable.prototype.drag = function (e) {
        var _self = this;
        if (!this.dragging) {
            this.item.css({
                height: this.item.outerHeight(),
                width: this.item.outerWidth(),
                position: 'absolute'
            });
            this.item.addClass(this.option.dragClass);
            $("body").addClass(this.option.bodyClass);
            this.item.before(this.placeholder);
            this.dragging = true;
        }
        this.setPointer(e);
        this.item.css(this.getRelativePosition(this.pointer, this.item.offsetParent()));
        // this.item.css({'display':'none'});
        var items = this.target.find(this.option.itemSelector).filter(":not(." + this.option.placeholderClass + ",." + this.option.dragClass + ")");
        var itemFirst = items.eq(0);
        if (itemFirst.length > 0) {
            var itemFirstY = itemFirst.offset().top + itemFirst.outerHeight();
        }
        if (_self.pointer.top < itemFirstY && itemFirst.length > 0) {
            itemFirst.before(_self.placeholder);
        }
        items.each(function () {
            // var $li: JQuery<HTMLElement> = $(this);
            var $li = $(this);
            var y = $li.offset().top;
            if (_self.pointer.top > y) {
                $li.after(_self.placeholder);
            }
        });
    };
    ;
    sortTable.prototype.drop = function (e) {
        var _self = this;
        this.toggleListeners('off');
        this.dragInitDone = false;
        if (this.dragging) {
            this.placeholder.before(this.item).detach();
            this.item.removeClass(this.option.dragClass).removeAttr("style");
            $("body").removeClass(this.option.bodyClass);
            this.dragging = false;
            this.seter = setTimeout(function () {
                _self.option.callback && _self.option.callback();
            }, _self.option.delay);
        }
        document.body.onselectstart = document.body.ondrag = function () {
            return true;
        };
    };
    ;
    sortTable.prototype.getPointer = function (e) {
        var o = e.originalEvent || e.originalEvent.touches && e.originalEvent.touches[0];
        return {
            left: e.pageX || o.pageX,
            top: e.pageY || o.pageY
        };
    };
    ;
    sortTable.prototype.setPointer = function (e) {
        var pointer = this.getPointer(e);
        this.lastPointer = this.pointer;
        this.pointer = pointer;
    };
    ;
    sortTable.prototype.getRelativePosition = function (pointer, element) {
        var offset = element.offset();
        return {
            left: pointer.left - offset.left,
            top: pointer.top - offset.top
        };
    };
    ;
    sortTable.prototype.toggleListeners = function (method) {
        var _self = this;
        var events = ['drag', 'drop'];
        $.each(events, function (i, event) {
            _self.document[method](_self.eventNames[event], _self[event + 'Proxy']);
        });
    };
    return sortTable;
}());
exports["default"] = sortTable;


/***/ })

/******/ });
//# sourceMappingURL=main.js.map
