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
/******/ 	return __webpack_require__(__webpack_require__.s = "./jssrc/cjsj/globalratelpr.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/web.js":
/*!***********************!*\
  !*** ./config/web.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  development: {
    dataurl: function(){
      return '//reportapi.uat.emapd.com/'
    },
    quoteurl: function(){
      return '//push2.eastmoney.com/'
    },
    quotehisurl: function(){
      return '//push2his.eastmoney.com/'
    },
    dcfmurl: function(){
      return '//dcfm.eastmoney.com/'
    },
    datacenter: function(){
      return '//datacenter.eastmoney.com/'
    },
    datainterface: function(){
      return '//datainterface.eastmoney.com/'
    },
    datainterface3:function(){
      return '//datainterface3.eastmoney.com/'
    },
    soapi: function(){
      return '//searchapi.eastmoney.com/'
    },
    url: function(){
      return ''
    }
  },
  zptest: {
    dataurl: function(){
      return '//reportapi.uat.emapd.com/'
    },
    quoteurl: function(){
      return '//push2.eastmoney.com/'
    },
    quotehisurl: function(){
      return '//push2his.eastmoney.com/'
    },
    dcfmurl: function(){
      return '//dcfm.eastmoney.com/'
    },
    datacenter: function(){
      return '//testdatacenter.eastmoney.com/'
    },
    datainterface: function(){
      return '//datainterface.eastmoney.com/'
    },
    datainterface3:function(){
      return '//datainterface3.eastmoney.com/'
    },
    soapi: function(){
      return '//searchapi.eastmoney.com/'
    },
    url: function(){
      return ''
    }
  },
  production: {
    dataurl: function(){
      return '//reportapi.eastmoney.com/'
    },
    quoteurl: function(){
      return '//push2.eastmoney.com/'
    },
    quotehisurl: function(){
      return '//push2his.eastmoney.com/'
    },
    dcfmurl: function(){
      return '//dcfm.eastmoney.com/'
    },
    datacenter: function(){
      return '//datacenter.eastmoney.com/'
    },
    datainterface: function(){
      return '//datainterface.eastmoney.com/'
    },
    datainterface3:function(){
      return '//datainterface3.eastmoney.com/'
    },
    soapi: function(){
      return '//searchapi.eastmoney.com/'
    },
    cmsdataapi: function(){
      return '//cmsdataapi.eastmoney.com/'
    },
    url: function(){
      return ''
    }
  },
  getParam: function(name){
    var urlpara = location.search;
    var par = {};
    if (urlpara != "") {
      urlpara = urlpara.substring(1, urlpara.length);
      var para = urlpara.split("&");
      var parname;
      var parvalue;
      for (var i = 0; i < para.length; i++) {
        parname = para[i].substring(0, para[i].indexOf("="));
        parvalue = para[i].substring(para[i].indexOf("=") + 1, para[i].length);
        par[parname] = parvalue;
      }
    }
    if(typeof (par[name]) != "undefined"){
      return par[name];
    }
    else{
      return null;
    }
  },
  getWebPath: function (name) {
    var env=(window.service&&service.ENV)||this.getParam('env');
    if (env&&this[env]) {
      return this[env][name]()
    }
    return this.production[name]()
  }
}



/***/ }),

/***/ "./jssrc/cjsj/globalratelpr.ts":
/*!*************************************!*\
  !*** ./jssrc/cjsj/globalratelpr.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fieldtools_1 = __importDefault(__webpack_require__(/*! ../../src/modules/commonutil/fieldtools */ "./src/modules/commonutil/fieldtools.ts"));
var datatable_1 = __importDefault(__webpack_require__(/*! ../../src/modules/datatable */ "./src/modules/datatable/index.ts"));
var webconfig = __webpack_require__(/*! ../../config/web.js */ "./config/web.js");
var chart = echarts.init(document.getElementById("cjsj_chart"));
loadtabledata();
loadchart();
function loadchart() {
    $.ajax({
        url: webconfig.getWebPath('datacenter') + 'api/data/get',
        type: 'GET',
        dataType: 'jsonp',
        data: {
            type: 'RPTA_WEB_RATE',
            sty: "ALL",
            st: 'TRADE_DATE',
            sr: -1,
            token: '894050c76af8597a853f5b408b759f5d',
            p: 1,
            ps: 99999
        },
    }).then(function (json) {
        drawchart(json.result.data);
    });
}
function drawchart(datas) {
    var chartdata = [{ name: "日期", key: "TRADE_DATE", color: "", data: [] },
        { name: "LPR_1Y利率(%)", key: "LPR1Y", color: "#4289ff", data: [] },
        { name: "LPR_5Y利率(%)", key: "LPR5Y", color: "#5550c8", data: [] },
        { name: "短期贷款利率:6个月至1年(含)(%)", key: "RATE_1", color: "#f59b32", data: [] },
        { name: "中长期贷款利率:5年以上(%)", key: "RATE_2", color: "#fa5078", data: [] }];
    var sv = 0, nowdate = window.moment().subtract({ y: 2 }).format("YYYY-MM-DD");
    for (var i = datas.length - 1; i >= 0; i--) {
        var item = datas[i];
        if (item["TRADE_DATE"] < nowdate)
            sv++;
        for (var j = 0; j < chartdata.length; j++) {
            var op = chartdata[j];
            if (j == 0)
                op.data.push(item[op.key].substring(0, 10));
            else
                op.data.push(item[op.key]);
        }
    }
    var option = {
        title: {
            left: 'center'
        },
        tooltip: {
            confine: true,
            trigger: 'axis',
            formatter: function (data) {
                var str = "";
                var date = data[0].axisValue;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].value) {
                        str += data[i].marker + data[i].seriesName + ':' + fieldtools_1["default"].fieldfmt(data[i].value) + '<br/>';
                    }
                }
                return date + '<br/>' + str;
            }
        },
        grid: {
            top: 35,
            x: '5%',
            y: '10%',
            width: '93%',
            height: '75%'
        },
        dataZoom: [
            {
                left: 80,
                right: 80,
                bottom: 5,
                type: 'slider',
                startValue: sv
            }, {
                type: 'inside'
            }
        ],
        legend: {},
        xAxis: {
            type: 'category',
            data: chartdata[0].data,
            axisTick: { show: false },
            axisLabel: {
                textStyle: {
                    color: '#000'
                }
            },
            axisLine: {
                show: true,
                lineStyle: { color: "#bbb" }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    type: 'dotted',
                    color: "#dde9f3"
                }
            }
        },
        yAxis: [
            {
                type: 'value',
                scale: true,
                nameTextStyle: { color: '#000' },
                axisTick: { show: false },
                axisLabel: {
                    textStyle: {
                        color: '#000'
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: { color: "#bbb" }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dotted',
                        color: "#dde9f3"
                    }
                }
            },
            {
                type: 'value',
                scale: true,
                nameTextStyle: { color: '#000' },
                axisTick: { show: false },
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: { color: "#bbb" }
                },
                axisLabel: {
                    textStyle: {
                        color: '000'
                    }
                }
            }
        ],
        series: []
    };
    for (var j = 1; j < chartdata.length; j++) {
        var op = chartdata[j];
        option.series.push({
            name: op.name,
            data: op.data,
            connectNulls: true,
            symbol: "circle",
            itemStyle: {
                color: op.color,
                normal: {
                    color: op.color,
                    borderColor: op.color
                }
            },
            lineStyle: {
                color: op.color,
                width: 1
            },
            type: 'line'
        });
    }
    chart.setOption(option);
}
function loadtabledata() {
    var dt1 = new datatable_1["default"]({
        div_id: 'cjsj_table',
        pager_id: 'cjsj_table_pager',
        enabled_pager: true,
        loadingImg: true,
        floathead: true,
        dataurl: {
            hostname: 'datacenter',
            url: 'api/data/get',
            params: {
                type: 'RPTA_WEB_RATE',
                sty: "ALL",
                st: 'TRADE_DATE',
                sr: -1,
                token: '894050c76af8597a853f5b408b759f5d',
                p: 1,
                ps: 50
            }
        },
        columns: {
            config: [
                {
                    th: function name(v) {
                        return '日期';
                    },
                    td: function (v) {
                        return fieldtools_1["default"].fieldfmt(v.TRADE_DATE, { datefmt: "YYYY-MM-DD" });
                    }
                },
                {
                    th: function name(v) {
                        return 'LPR_1Y利率(%)';
                    },
                    td: function (v) {
                        return fieldtools_1["default"].fieldfmt(v.LPR1Y);
                    }
                },
                {
                    th: function name(v) {
                        return 'LPR_5Y利率(%)';
                    },
                    td: function (v) {
                        return fieldtools_1["default"].fieldfmt(v.LPR5Y);
                    }
                },
                {
                    th: function name(v) {
                        return '短期贷款利率:<br/>6个月至1年(含)(%)';
                    },
                    td: function (v) {
                        return fieldtools_1["default"].fieldfmt(v.RATE_1);
                    }
                },
                {
                    th: function name(v) {
                        return '中长期贷款利率:<br/>5年以上(%)';
                    },
                    td: function (v) {
                        return fieldtools_1["default"].fieldfmt(v.RATE_2);
                    }
                }
            ]
        }
    });
}


/***/ }),

/***/ "./src/modules/commonutil/fieldtools.ts":
/*!**********************************************!*\
  !*** ./src/modules/commonutil/fieldtools.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var moment_1 = __importDefault(__webpack_require__(/*! moment */ "moment"));
var weeks = ['日', '一', '二', '三', '四', '五', '六'];
var quarters = ['1', '1', '1', '2', '2', '2', '3', '3', '3', '4', '4', '4'];
var quarters_z = ['一', '一', '一', '二', '二', '二', '三', '三', '三', '四', '四', '四'];
var quarters0 = ['1', '1', '1', '1-2', '1-2', '1-2', '1-3', '1-3', '1-3', '1-4', '1-4', '1-4'];
var quarters0_z = ['一', '一', '一', '一-二', '一-二', '一-二', '一-三', '一-三', '一-三', '一-四', '一-四', '一-四'];
var reports = ['1季', '1季', '1季', '中', '中', '中', '3季', '3季', '3季', '年', '年', '年'];
var reports_z = ['一季', '一季', '一季', '中', '中', '中', '三季', '三季', '三季', '年', '年', '年'];
var defaultfmtconfig = {
    def: '-',
    omit: true,
    trim: undefined,
    strfmt: undefined,
    num: 2,
    smart: -1,
    fix: '',
    zoom: 0,
    showcolor: false,
    showabs: false,
    colorfmt: '<span class="{color}">{value}</span>',
    gtcolor: 'red',
    ltcolor: 'green',
    colorzero: 0
};
exports["default"] = {
    /**
     * 数据字段展示格式化方法(支持数字和日期处理)
     * value:字段,一般为字符串或数字
     * config:配置数据
     * interface config {
            def?: string;// 缺省值默认 ‘-’ 优先级最高，不受其他参数影响
            datefmt?: string;//日期展示格式，如果有值的话做日期处理，有值的话除def外其他字段全部作废 优先级小于def (详见日期处理方法dateformat)
            strfmt?: any;//作为字符串处理的参数，如果有值的话做字符串处理，优先级小于def,datefmt(详见字符串处理方法strformat)
            omit?: boolean;//是否自动改为省略格式【xxxx万|xxxx亿|xxxx万亿】默认true
            trim?: boolean;//是否自动省略末尾的0，默认不省略,smart为ture时候 默认省略，可单独配置
            num?: number;//保留小数位，默认2
            smart?: number;//是否自动精简结果【最多保留多少位有效数字】配合omit=true时使用 有值的话num失效，>1时生效
            fix?: string;//显示单位 默认空   举例 【‘%’，‘只’】
            zoom?: number;//缩放倍数（指数幂） 默认0【不放大+】  举例 【1就是放大10倍】
            showabs?: boolean//是否展示为绝对值 默认不展示
            showcolor?: boolean//是否展示颜色 默认不展示
            colorfmt?: string;//带颜色的返回模板 默认<span class="{color}">{value}</span>
            gtcolor?: string;//大于标准值的样式 默认red
            ltcolor?: string;//小于标准值的样式 默认green
            colorvalue?: number;//颜色比较使用的值，默认使用value字段
            colorzero?: number;//颜色比较标准值 默认0  与零比较
        }
     **/
    fieldfmt: function (value, config) {
        if (value === '' || value === undefined || value === null) {
            return (config && config.def) || defaultfmtconfig.def;
        }
        //无配置时尝试按数据类型转换
        if ($.isEmptyObject(config)) {
            if (/^\d{2,4}(\-|\/|\.)\d{1,2}\1\d{1,2}|^\d{13}$/.test(value)) {
                return this.dateformat(value, 'YYYY-MM-DD');
            }
            if (!$.isNumeric(value)) {
                return value;
            }
        }
        config = $.extend({}, defaultfmtconfig, config);
        if (config && config.datefmt) {
            return this.dateformat(value, config.datefmt, config.def);
        }
        if (config && config.strfmt) {
            return this.strformat(value, config.strfmt, config.def);
        }
        if (value === '-' || isNaN(value) || !isFinite(value)) {
            return config.def;
        }
        var oldvalue = parseFloat(value);
        value = oldvalue * Math.pow(10, config.zoom);
        if (config.showabs)
            value = Math.abs(value);
        if (config.omit) {
            var f = config.trim ? parseFloat : function (v) { return v; };
            if (config.smart > 1) {
                var toExponential = value.toExponential((config.smart < 3 ? 4 : config.smart) - 1);
                value = Number(toExponential);
                if (config.trim === undefined)
                    f = parseFloat;
                config.num = config.smart - Math.floor(value).toString().length % 4;
                config.num < 0 ? config.num = 0 : undefined;
            }
            var intStr = Math.abs(parseInt(value));
            if (intStr.toString().length > 12) {
                value = f((value / 1000000000000).toFixed(config.num)) + '万亿';
            }
            else if (intStr.toString().length > 8) {
                value = f((value / 100000000).toFixed(config.num)) + '亿';
            }
            else if (intStr.toString().length > 4) {
                value = f((value / 10000).toFixed(config.num)) + '万';
            }
            else {
                value = f(value.toFixed(config.num));
            }
        }
        else {
            value = value.toFixed(config.num);
        }
        value += config.fix;
        if (config.showcolor) {
            var bz = config.colorvalue || oldvalue;
            var color = bz == config.colorzero ? '' : bz > config.colorzero ? config.gtcolor : config.ltcolor;
            value = config.colorfmt.replace('{color}', color).replace('{value}', value);
        }
        return value;
    },
    /**
     * 日期字段展示格式化方法
     * str:字段值+
     * fmt：日期格式 根据nomentjs 文档http://momentjs.cn/docs/
     *                  添加 {W:"星期，['日', '一', '二', '三', '四', '五', '六']
     *                  添加 {Q|q:"季度，如3月为'一|1'；6月为'二|2'"；9月为'三|3'"；12月为'四|4'"}
     *                  添加 {J|j:"季度跨度，如3月为'一|1'；6月为'一-二|1-2'"；9月为'一-三|1-3'"；12月为示'一-四|1-4'"}
     *                  添加 {B|b:"报告期，如3月为'一季|1季'；6月为'中'"；9月为'三季|3季'"；12月为'年'"}
     **/
    dateformat: function (str, fmt, def) {
        if (fmt === void 0) { fmt = 'YYYY-MM-DD'; }
        if (def === void 0) { def = '-'; }
        if (str === '' || str === undefined || str === null || str === '-') {
            return def;
        }
        try {
            var ret = moment_1["default"](str);
            if (ret.isValid()) {
                var value = ret.format(fmt);
                var o = {
                    "W": weeks[ret.day()],
                    "Q": quarters_z[ret.month()],
                    "q": quarters[ret.month()],
                    "J": quarters0_z[ret.month()],
                    "j": quarters0[ret.month()],
                    "B": reports_z[ret.month()],
                    "b": reports[ret.month()]
                };
                for (var k in o) {
                    if (new RegExp("(" + k + ")").test(value)) {
                        value = value.replace(RegExp.$1, o[k]);
                    }
                }
                return value;
            }
            return def;
        }
        catch (err) {
            return def;
        }
    },
    /**
     * 字符串展示格式化方法
     * str:字段值
     * fmt：格式化参数，数组或对象
     **/
    strformat: function (str, fmt, def) {
        if (def === void 0) { def = '-'; }
        if (!!str) {
            str = str.toString();
            if (typeof (fmt) == "object") {
                for (var key in fmt) {
                    if (fmt[key] !== undefined) {
                        var reg = new RegExp("({" + key + "})", "g");
                        str = str.replace(reg, fmt[key]);
                    }
                }
            }
            else if (Array.isArray(fmt)) {
                fmt.forEach(function (s, i) {
                    var reg = new RegExp("({)" + i + "(})", "g");
                    str = str.replace(reg, s);
                });
            }
            return str;
        }
        return def;
    },
    /**
     *
     * 分割数据转json,三期|f10
     */
    splitdatatojson: function (data, fields) {
        //console.info(fields);
        var ret = {};
        var datas = [];
        var SplitSymbol = data.SplitSymbol;
        var fs = data.FieldName.split(',');
        if (!fields)
            fields = fs;
        var _loop_1 = function () {
            itemstr = data.Data[i];
            var model = {};
            var arr = itemstr.split(SplitSymbol);
            arr.forEach(function (v, i) {
                var field = fs[i];
                if (fields.indexOf(field) > -1)
                    model[fs[i]] = v;
            });
            datas.push(model);
        };
        var itemstr;
        for (var i = 0; i < data.Data.length; i++) {
            _loop_1();
        }
        Object.keys(data).forEach(function (key) {
            if (key != "Data")
                ret[key] = data[key];
        });
        ret.datas = datas;
        //console.info(ret);
        return ret;
    }
};


/***/ }),

/***/ "./src/modules/datatable/index.ts":
/*!****************************************!*\
  !*** ./src/modules/datatable/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * 数据表格模块
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var webconfig = __webpack_require__(/*! ../../../config/web.js */ "./config/web.js");
var pager_1 = __importDefault(__webpack_require__(/*! ../pager */ "./src/modules/pager/index.ts"));
/**
 * 三种排序类型的切换
 * @param thistype
 */
function getSortType(thistype) {
    var backtype = '';
    switch (thistype) {
        case 'default':
            backtype = 'desc';
            break;
        case 'desc':
            backtype = 'asc';
            break;
        case 'asc':
            backtype = 'default';
            break;
    }
    return backtype;
}
/**
 * 判断是否需要第一层thead
 * @param config
 */
function isFixThead(config) {
    var back = false;
    config.config.forEach(function (v) {
        if (v.theadfix != undefined) {
            back = true;
        }
    });
    return back;
}
/**
 * 计算接下来有几个相同的theadfix
 * @param config
 * @param configindex
 */
function getSameTheadFix(config, configindex) {
    if (configindex >= config.length - 1) {
        return 1;
    }
    var count = 1;
    var theadfix_val = config[configindex].theadfix;
    for (var index = configindex + 1; index < config.length; index++) {
        if (theadfix_val == config[index].theadfix) {
            count++;
        }
        else {
            break;
        }
    }
    return count;
}
var datatable = /** @class */ (function () {
    function datatable(options) {
        this.table_type = '';
        this.div_id = '';
        this.thissort = ''; //排序字段
        this.this_sort_type = 'default'; //排序类型
        this.thisindex = 1; //当前页数
        this.enabled_pager = true; //是否翻页
        this.pager_id = '';
        this.tablepager = null; //分页示例
        this.floathead = false; //是否开启头部固顶
        this.tableclass = 'table-model';
        this.curSortItem = '';
        this.curSortParam = '';
        this.onShowComplete = null;
        this.initsearch = false;
        this.loadscroll = false;
        this.loadingImg = false;
        this.initdata = false;
        this.initdataLab = 'initdata'; //该字段为首页缓存在页面赋值的字段,默认'initdata'
        this.initdataone = false;
        this.tablecolumns = {};
        this.tabledataurl = {};
        this.webhostname = '';
        this.table_type = options.table_type;
        this.div_id = options.div_id;
        this.enabled_pager = options.enabled_pager != undefined ? options.enabled_pager : true; //是否开启翻页功能
        this.pageNoName = options.pageNoName;
        this.pager_id = options.pager_id;
        this.floathead = options.floathead != undefined ? options.floathead : false; //默认false
        this.tableclass = options.tableclass != undefined ? options.tableclass : 'table-model';
        this.onShowComplete = options.onShowComplete || null;
        this.loadscroll = options.loadscroll || false;
        this.loadingImg = options.loadingImg || false;
        this.initdata = options.initdata || false;
        this.initdataLab = options.initdataLab || 'initdata';
        this.initdataone = options.initdataone || false;
        var initParams = options.initParams || false;
        // 获取table的config和theadfix，入口已配置，用入口的，入口没有配置，用dataconfig文件里面的
        this.tablecolumns = options.columns ? options.columns : (tableconfigdatas ? tableconfigdatas.tablecolumns[this.table_type] : {});
        // 获取table的dataurl，入口已配置，用入口的，入口没有配置，用dataurl文件里面的
        this.tabledataurl = options.dataurl ? options.dataurl : (tableconfigdatas ? tableconfigdatas.tabledataurl[this.table_type] : {});
        // 获取数据的hostname，没有取默认的‘dataurl’，dataurl在webconfig里面表示的是研报api的host
        this.webhostname = options.dataurl ? (options.dataurl.hostname ? options.dataurl.hostname : 'dataurl') : 'dataurl';
        if (initParams) {
            this.search(initParams);
        }
        else {
            this.init();
        }
        if (this.floathead) {
            var _this_1 = this;
            setTimeout(function () {
                _this_1.makeFloatHead();
            }, 1000);
        }
    }
    datatable.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this;
            return __generator(this, function (_a) {
                _this = this;
                _this.showTable({});
                return [2 /*return*/];
            });
        });
    };
    datatable.prototype.showTable = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this, loadhtml, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _this = this;
                        $('#' + _this.div_id).css({ 'position': 'relative' });
                        if (_this.loadingImg) {
                            loadhtml = '<div class="table-loading"><img src="/../newstatic/images/loading.gif"></img></div>';
                            $('#' + _this.div_id).append(loadhtml);
                        }
                        ;
                        return [4 /*yield*/, this.getData(options)];
                    case 1:
                        data = _a.sent();
                        $('#' + this.div_id).empty().append(this.makeTable(data));
                        if (this.onShowComplete) {
                            this.onShowComplete(data);
                        }
                        ;
                        $('.table-loading').css({ 'display': 'none !importannt' });
                        return [2 /*return*/];
                }
            });
        });
    };
    datatable.prototype.getData = function (options) {
        var _a, _b, _c, _d;
        var _this = this;
        var params = this.tabledataurl['params'];
        if (options.sort != undefined) {
            var sortobj = options.sort;
            var nextsort = getSortType(this.this_sort_type);
            this.this_sort_type = nextsort;
            if (sortobj[nextsort])
                params = $.extend(params, (_a = {},
                    _a[sortobj[nextsort].sortkey] = sortobj[nextsort].value,
                    _a));
            if (sortobj.sortname) {
                params = $.extend(params, (_b = {},
                    _b[sortobj.sortname.key] = sortobj.sortname.value,
                    _b));
            }
            if (sortobj.sortname) {
                params = $.extend(params, (_c = {},
                    _c[sortobj.sortname.key] = sortobj.sortname.value,
                    _c));
            }
        }
        if (options.search) {
            params = $.extend(params, options.search);
        }
        if (options.pager) {
            params = $.extend(params, {
                p: options.pager,
                pageNo: options.pager,
                pageNum: options.pager //比如：
            });
        }
        // 特殊分页字段，支持动态传分页字段名
        // 比如：高管持股页面分页（url: /executive/gdzjc-jzc.html）
        if (_this.pageNoName) {
            params = $.extend(params, (_d = {},
                _d[_this.pageNoName] = options.pager,
                _d));
        }
        return this.getDataAjax(params);
    };
    datatable.prototype.getDataAjax = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            //ajax请求抽出
            function getDataInfos() {
                try {
                    var dataType = _this.webhostname == 'url' ? 'json' : 'jsonp';
                    var ajaxfn = {
                        url: url,
                        type: 'GET',
                        timeout: 5000,
                        jsonpCallback: rnd,
                        dataType: dataType,
                        data: params,
                        error: function (msg) {
                            // console.log(_this.div_id)
                            $('.stockdata #' + _this.div_id).parents('.table-cont').hide();
                        }
                    };
                    // 地址为datainterface的接口，需要传jsonp参数
                    _this.webhostname == 'datainterface' ? (ajaxfn['jsonp'] = 'cb') : _this.webhostname == 'datainterface3' ? (ajaxfn['jsonp'] = 'js') : undefined;
                    return $.ajax(ajaxfn);
                }
                catch (error) {
                    return [];
                }
            }
            function hasData(data) {
                if (data == null) {
                    $('#' + _this.div_id).parents('.table-cont').hide();
                }
                else if (data.length <= 0) {
                    // 隐藏对应的table
                    $('#' + _this.div_id).parents('.table-cont').hide();
                }
            }
            var _this, rnd, url, getdatafunction, onecache, dtd;
            var _this_1 = this;
            return __generator(this, function (_a) {
                _this = this;
                rnd = 'datatable' + Math.floor(Math.random() * 10000000 + 1);
                url = webconfig.getWebPath(this.webhostname) + this.tabledataurl['url'];
                getdatafunction = null;
                if (this.initdata) {
                    this.initdata = false;
                    onecache = (function () {
                        if (window.location.search.length > 1) { //判断url?后面是否带有参数
                            return true;
                        }
                        else {
                            return false;
                        }
                    })();
                    if (this.initdataone && onecache) { //如果initdataone&&onecache 则走缓存逻辑:为了处理有些页面带参数和不带参数(首次请求走接口)
                        getdatafunction = getDataInfos();
                    }
                    else {
                        dtd = $.Deferred();
                        getdatafunction = dtd.resolve(window[this.initdataLab]); //抓取页面缓存的数据initdata
                    }
                }
                else { //如不需要缓存逻辑 直接走接口
                    getdatafunction = getDataInfos();
                }
                return [2 /*return*/, getdatafunction.then(function (v) {
                        // 如果是api为datainterface3的接口数据，要提前处理下数据
                        if (_this_1.webhostname == 'datainterface3') {
                            if (v.Status == 0) {
                                v.pages = v.Data[0].TotalPage;
                                v.data = v.Data[0].Data;
                            }
                        }
                        // 如果api为datacenter的接口数据，返回的数据直接掉result层
                        if (_this_1.webhostname == 'datacenter' || _this_1.webhostname == 'datacentertest') {
                            v = v.result;
                        }
                        if (_this_1.enabled_pager && v) {
                            if (v.pages > 1) {
                                // 如果是股市日历相关分页
                                _this.pager(v.pages * 50, params[_this.pageNoName || 'pageNo']);
                            }
                            else {
                                // 如果是普通分页
                                _this.pager(v.hits, params[_this.pageNoName || 'pageNo']);
                            }
                            if (v.data && v.data != [] && (v.TotalPage > 1 || v.pages > 1) && v.data.length > 0) {
                                $('#' + _this_1.pager_id).show();
                            }
                            else {
                                $('#' + _this_1.pager_id).hide();
                            }
                        }
                        // 如果是api为dcfmurl的接口数据，返回的数据要处理一下
                        if (_this_1.webhostname == 'dcfmurl' && !v.font) {
                            hasData(v);
                            if (v.data)
                                return v;
                            return { data: v };
                        }
                        // api为dcfmurl，且部分字段需要转码的情况
                        if (_this_1.webhostname == 'dcfmurl' && v.font) {
                            hasData(v.data);
                            var str_1 = JSON.stringify(v.data);
                            var font = v.font.FontMapping;
                            if (font) {
                                font.map(function (item) {
                                    str_1 = str_1.replace(new RegExp(item.code, "g"), item.value);
                                });
                            }
                            return { data: JSON.parse(str_1) };
                        }
                        // 如果是api为datainterface的接口数据，数据返回为空的时候需要特殊处理
                        if (_this_1.webhostname == 'datainterface') {
                            if (v.data[0].stats == false) {
                                return [];
                            }
                        }
                        v ? hasData(v.data) : hasData(v);
                        return v;
                    })];
            });
        });
    };
    ;
    //生成表格头部
    datatable.prototype.makeTableHead = function (data) {
        var _this_1 = this;
        var _this = this;
        //表格头部
        var table_html_thead = $("<thead></thead>");
        var thead_tr1 = $('<tr></tr>');
        var thead_tr2 = $('<tr></tr>');
        var need_theadfix = isFixThead(this.tablecolumns); //判断是否需要第一层thead
        var ctheadfix = ''; //当前的theadfix
        this.tablecolumns['config'].forEach(function (configitem, index) {
            var thead_th = $('<th></th>');
            if (configitem.width != undefined) {
                thead_th.attr('width', configitem.width + 'px');
            }
            if (configitem.paramname != undefined) { //给当前排序标签添加name
                thead_th.attr('data-name', configitem.paramname);
            }
            //排序
            if (configitem.sort != undefined) {
                var sorthtml_1 = $('<a target="_self" href="javascript:;">' + configitem.th({ data: data }) + '</a>');
                //给头部th 加icon
                if (configitem.icons != undefined) {
                    sorthtml_1.append('<span class="icon icon_' + configitem.icons.name + ' vbottom" title="' + configitem.icons.title + '"></span>');
                }
                var defaultsortType = configitem.defaultsortType; //默认排序类型
                if (defaultsortType != undefined && !_this.curSortParam) { //默认排序只执行第一次
                    if (defaultsortType == 'asc') {
                        sorthtml_1.append('<span class="icon icon_asc sorticon"></span>');
                    }
                    else if (defaultsortType == 'desc') {
                        sorthtml_1.append('<span class="icon icon_desc sorticon"></span>');
                    }
                }
                ;
                var sortnamename = configitem.paramname;
                if (sortnamename && _this.curSortParam == sortnamename) { //判断是否是当前排序字段
                    if (_this_1.this_sort_type == 'asc') {
                        sorthtml_1.append('<span class="icon icon_asc sorticon"></span>');
                    }
                    else if (_this_1.this_sort_type == 'desc') {
                        sorthtml_1.append('<span class="icon icon_desc sorticon"></span>');
                    }
                    //控制浮动表头的样式切换
                    if (_this.floathead) {
                        var floatTableTh = $('#' + _this.div_id + 'float').find('th');
                        floatTableTh.each(function (index, el) {
                            if ($(this).data('name') == _this.curSortParam) {
                                $(this).find('a').empty().append(sorthtml_1.clone(true));
                            }
                            else {
                                $(this).find('.sorticon').remove();
                            }
                        });
                    }
                    ;
                }
                ;
                thead_th.append(sorthtml_1);
                sorthtml_1.on('click', function () {
                    if (_this.curSortParam != $(this).parent().data('name')) {
                        _this.this_sort_type = 'default';
                    }
                    ; //如果不是当前排序字段，则将排序类型初始化
                    _this.curSortParam = $(this).parent().data('name'); //存储全局 记录当前排序字段
                    // if (defaultsortType && defaultsortType != 'default'){  //处理带默认排序的排序类型
                    //   _this.this_sort_type = defaultsortType
                    //   configitem.defaultsortType = false
                    //   defaultsortType = false
                    // }
                    _this.showTable({
                        sort: configitem.sort,
                        pager: 1
                    });
                });
            }
            else {
                thead_th.append(configitem.th({
                    data: data
                })); //整个传入，具体地方具体处理
                //给头部th 加icon
                if (configitem.icons != undefined) {
                    thead_th.append('<span class="icon icon_' + configitem.icons.name + ' vbottom" title="' + configitem.icons.title + '"></span>');
                }
            }
            //是否多级头部处理
            if (need_theadfix) {
                if (configitem.theadfix != undefined) {
                    //thead_tr2.append(thead_th)
                    if (configitem.theadfix != ctheadfix) {
                        var fixcount = getSameTheadFix(_this_1.tablecolumns['config'], index);
                        var theadfixth = $('<th colspan="' + fixcount + '">' + _this_1.tablecolumns['theadfix'][configitem.theadfix](data) + '</th>');
                        //thead_th.attr('colspan', fixcount)
                        ctheadfix = configitem.theadfix;
                        thead_tr1.append(theadfixth);
                    }
                    thead_tr2.append(thead_th);
                    //thead_tr1.append(thead_th)
                }
                else {
                    thead_th.attr('rowspan', 2);
                    thead_tr1.append(thead_th);
                }
            }
            else {
                thead_tr1.append(thead_th);
            }
        });
        if (need_theadfix) {
            table_html_thead.append(thead_tr1).append(thead_tr2);
        }
        else {
            table_html_thead.append(thead_tr1);
        }
        return table_html_thead;
    };
    ;
    datatable.prototype.makeTable = function (data) {
        var _this_1 = this;
        var _this = this;
        var table_html = $('<table class=' + this.tableclass + '><thead></thead><tbody></tbody></table>');
        var table_html_thead = _this.makeTableHead(data);
        $('thead', table_html).replaceWith(table_html_thead);
        if (data && data.data != undefined && data.data.length > 0) {
            data.data.forEach(function (v, index) {
                //特殊逗号分开数据的接口先转换为对象，省去每次split
                if (typeof (v) == 'string') {
                    var splitstr = ',';
                    if (_this_1.webhostname == 'datainterface3')
                        splitstr = '|';
                    var arr = v.split(splitstr);
                    var model_1 = {};
                    arr.forEach(function (s, index) {
                        model_1['f' + index] = s;
                    });
                    v = model_1;
                }
                // 数据为对象才添加v.index，不然有的string数据报错
                typeof (v) == 'object' ? (v.index = index + Number(data.pageNo ? (data.pageNo - 1) * 50 : '')) : '';
                var tr = $('<tr></tr>');
                //表格内容
                _this_1.tablecolumns['config'].forEach(function (configitem) {
                    var isdefaultsort = configitem.defaultsortType && configitem.defaultsortType != 'default';
                    var iscursort = _this.curSortParam == configitem.paramname && _this.this_sort_type != 'default';
                    var td = {};
                    if (_this.curSortParam) {
                        td = iscursort ? $('<td class="col"></td>') : $('<td></td>');
                    }
                    else {
                        td = isdefaultsort ? $('<td class="col"></td>') : $('<td></td>');
                    }
                    td.html(configitem.td(v));
                    tr.append(td);
                });
                $('tbody', table_html).append(tr);
            });
        }
        else {
            var len = this.tablecolumns['config'].length;
            var tr = $('<tr><td colspan=' + len + ' class="none">暂无数据</td></tr>');
            $('tbody', table_html).append(tr);
        }
        return table_html;
    };
    datatable.prototype.pager = function (sum, currentPage) {
        var _this = this;
        if (_this.tablepager == null) {
            _this.tablepager = new pager_1["default"]({
                pagerid: this.pager_id,
                currentpage: currentPage ? currentPage : 1,
                pagesize: 50,
                allcount: sum,
                href: '',
                onClick: function (index) {
                    _this.goPager(index);
                }
            });
        }
        else {
            _this.tablepager.ops.allcount = sum;
            _this.tablepager.ops.currentpage = currentPage ? currentPage : 1;
            _this.tablepager.show();
        }
        // _this.tablepager.show()
    };
    datatable.prototype.goPager = function (toindex) {
        return __awaiter(this, void 0, void 0, function () {
            var _top;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //是否开启加载滚动
                        if (this.loadscroll) {
                            _top = $('.framecontent').offset().top;
                            $("html,body").animate({ "scrollTop": _top });
                        }
                        return [4 /*yield*/, this.showTable({
                                pager: toindex
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    datatable.prototype.search = function (searchobj) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showTable({
                            search: searchobj
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //生成浮动表头
    datatable.prototype.makeFloatHead = function () {
        var _this = this;
        $('#' + this.div_id + 'float').empty().remove();
        var floatTable = $('<div id="' + this.div_id + 'float" class="table-float-head"><table class="floathead table-model" style="margin-top:0;width:865px"><thead></thead></table></div>');
        var _thead = $('#' + this.div_id + ' table thead');
        $('thead', floatTable).append($('#' + this.div_id + ' table thead').clone(true));
        $('tr', _thead).find('th').each(function (index, el) {
            $('tr', floatTable).find('th').eq(index).width($(el).width());
        });
        $('#' + this.div_id).before(floatTable);
        $(window).scroll(function () {
            var _tableheight = $('#' + _this.div_id).height();
            var _offsettop = $('#' + _this.div_id).offset().top;
            var _scrollheight = $(window).scrollTop();
            var floathtml = $('#' + _this.div_id + 'float');
            if (_scrollheight > _offsettop) {
                floathtml.css({ 'display': 'block' });
                if (_scrollheight > (_offsettop + _tableheight) - 50) {
                    floathtml.css({ 'display': 'none' });
                }
            }
            else {
                floathtml.css({ 'display': 'none' });
            }
            // X轴滚动时动态设置left值
            var _scrollleft = $(window).scrollLeft();
            floathtml.css({ 'left': (_scrollleft ? 135 - _scrollleft : 'auto') });
        });
    };
    ;
    return datatable;
}());
exports["default"] = datatable;


/***/ }),

/***/ "./src/modules/pager/index.ts":
/*!************************************!*\
  !*** ./src/modules/pager/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var pagerbox = /** @class */ (function () {
    function class_1(opts) {
        var _this = this;
        this.pageshownum = 5;
        this.target = "";
        var defaults = {
            pagerid: '',
            currentpage: 1,
            pagesize: 0,
            allcount: 0,
            href: '',
            onClick: null
        };
        this.ops = $.extend(defaults, opts);
        if (!this.ops.pagerid) {
            if (!this.ops.dom)
                return;
            this.div = this.ops.dom;
        }
        else
            this.div = $('#' + this.ops.pagerid);
        var formhtml = $("<div class=\"gotopage\"><form target=\"_self\"><span class='tab'>\u8F6C\u5230</span><input class='ipt' type='text' id=\"gotopageindex\"><input type='submit' class='btn' value='Go'></form></div>");
        formhtml.on('submit', function name() {
            var gotopageindex = 1;
            var totalpage = _this.ops.totalPage || Math.ceil(_this.ops.allcount / _this.ops.pagesize);
            try {
                gotopageindex = parseInt($.trim($('#gotopageindex', formhtml).val().toString()));
            }
            catch (error) {
            }
            //如果超过最大页数
            if (totalpage < gotopageindex) {
                gotopageindex = totalpage;
            }
            if (gotopageindex < 1) {
                gotopageindex = 1;
            }
            _this.changePage(gotopageindex);
            return false;
        });
        this.div.html('').append('<div class="pagerbox"></div>').append(formhtml);
        this.bind();
        this.show();
    }
    ;
    class_1.prototype.changePage = function (curPage) {
        var _this = this;
        if (!!_this.ops.href) {
            // console.log(this.ops.href)
            return false;
        }
        else if (this.ops.onClick) {
            _this.ops.onClick(curPage);
        }
    };
    ;
    class_1.prototype.show = function () {
        var _this = this;
        var pageshownum = _this.pageshownum;
        var totalPage = this.ops.totalPage || Math.ceil(this.ops.allcount / this.ops.pagesize);
        var currentpage = _this.ops.currentpage;
        var hrefStr = _this.ops.href ? _this.ops.href : 'javascript: ;';
        var target = _this.target ? _this.target : '_self';
        var leftStr = "";
        var rightStr = "";
        var allStr = "";
        if (pageshownum <= 0)
            pageshownum = 5;
        var LRNum = Math.ceil((pageshownum - 1) / 2);
        // var totalPage = this.totalPage;
        var Li = 0, Rj = 0;
        //需要展示的页数和当前页逻辑处理
        for (var i = LRNum; i >= 1; i--) {
            if (currentpage - i >= 1) {
                leftStr += "<a target=" + target + " href=" + hrefStr + " data-page=" + (currentpage - i) + ">" + (currentpage - i) + "</a>";
                Li += 1;
            }
        }
        for (var j = 1; j <= LRNum; j++) {
            if (currentpage + j <= totalPage) {
                rightStr += "<a target=" + target + " href=" + hrefStr + " data-page=" + (currentpage + j) + ">" + (currentpage + j) + "</a>";
                Rj += 1;
            }
        }
        //总页数小于/大于显示页数时处理
        if (totalPage < pageshownum)
            pageshownum = totalPage;
        if ((Li + Rj) < (pageshownum - 1)) {
            if (currentpage <= pageshownum / 2 + 1) {
                for (var j = currentpage + Rj + 1; j <= pageshownum; j++) {
                    rightStr += "<a target=" + target + " href=" + hrefStr + " data-page=" + j + ">" + j + "</a>";
                }
            }
            else {
                for (var i = (currentpage - Li - 1); i > totalPage - pageshownum; i--) {
                    leftStr = "<a target=" + target + " href=" + hrefStr + " data-page=" + i + ">" + i + "</a>" + leftStr;
                }
            }
        }
        if (totalPage > pageshownum) {
            if (currentpage > (pageshownum + 1) / 2) {
                if (currentpage <= pageshownum) {
                    leftStr = "<a target=" + target + " href=" + hrefStr + " data-page='1'>1</a>" + "<a href=" + hrefStr + " target=" + target + "  data-page=" + 1 + ">...</a>" + leftStr;
                }
                else {
                    leftStr = "<a target=" + target + " href=" + hrefStr + " data-page='1'>1</a>" + "<a href=" + hrefStr + " target=" + target + "  data-page=" + (currentpage - 5) + ">...</a>" + leftStr;
                }
                // leftStr = "<a target=" + target + " href=" + hrefStr + " data-page='1'>1</a>" + "<a href=" + hrefStr + " target=" + target + "  data-page=" + (currentpage -5) +">...</a>" + leftStr;
            }
            if (currentpage <= totalPage - (pageshownum + 1) / 2) {
                if ((totalPage - currentpage) < pageshownum) {
                    rightStr += "<a target=" + target + " href=" + hrefStr + " data-page=" + (totalPage) + ">...</a>" + "<a href=" + hrefStr + " target=" + target + " data-page=" + totalPage + ">" + totalPage + "</a>";
                }
                else {
                    rightStr += "<a target=" + target + " href=" + hrefStr + " data-page=" + (currentpage + 5) + ">...</a>" + "<a href=" + hrefStr + " target=" + target + " data-page=" + totalPage + ">" + totalPage + "</a>";
                }
                //rightStr += "<a target=" + target + " href=" + hrefStr + " data-page=" + (currentpage+5)+">...</a>" + "<a href=" + hrefStr + " target=" + target + " data-page=" + totalPage+">" + totalPage + "</a>";
            }
        }
        //上一页
        var prevPage = "";
        var pre = currentpage - 1;
        if (pre < 1) {
            pre = 1;
        }
        prevPage = _this.ops.href ? _this.ops.href : 'javascript: ;';
        if (pre == 1) {
            //prevPage = '';
        }
        else {
            // prevPage = "_" + pre;
            // if (!!this.ops.href) {
            //     prevPage = "" + pre;
            // }
        }
        //下一页
        var nextPage = "";
        var next = currentpage + 1;
        if (next > totalPage) {
            next = totalPage;
        }
        nextPage = _this.ops.href ? _this.ops.href : 'javascript: ;';
        if (next == 1) {
            //nextPage = '';
        }
        else {
            // nextPage = "_" + next;
            // if (!!this.ops.href) {
            //     nextPage = "" + next;
            // }
        }
        //上一页下一页及指定页数跳转
        if (currentpage > 1) {
            allStr = "<a target=" + target + " href=" + prevPage + " data-page=" + pre + ">上一页</a> ";
        }
        allStr += leftStr + "<a class='active' data-page=" + currentpage + ">" + currentpage + "</a>" + rightStr;
        if (currentpage < totalPage) {
            allStr += " <a target=" + target + " href=" + nextPage + " data-page=" + next + ">下一页</a>";
        }
        $('.pagerbox', this.div).empty().append(allStr);
    };
    class_1.prototype.bind = function () {
        var _this = this;
        this.div.off('click').on('click', 'a', function () {
            var curPage = $(this).data('page');
            _this.changePage(curPage);
        });
    };
    return class_1;
}());
exports["default"] = pagerbox;


/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = moment;

/***/ })

/******/ });
//# sourceMappingURL=globalratelpr.js.map
