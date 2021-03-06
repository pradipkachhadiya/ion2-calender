"use strict";
var ɵngcc0 = require('@angular/core');
var ɵngcc1 = require('@angular/common');
var ɵngcc2 = require('@ionic/angular');
var ɵngcc3 = require('./calendar-week.component');
var ɵngcc4 = require('./month.component');
var ɵngcc5 = require('@angular/forms');
var ɵngcc6 = require('./month-picker.component');

function CalendarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ion-button", 5);
    ɵngcc0.ɵɵlistener("click", function CalendarComponent_ng_template_1_Template_ion_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r8); var ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.switchView(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelement(2, "ion-icon", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r0._monthFormat(ctx_r0.monthOpt.original.time), " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("name", ctx_r0._view === "days" ? "md-arrow-dropdown" : "md-arrow-dropup");
} }
function CalendarComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r2._monthFormat(ctx_r2.monthOpt.original.time), " ");
} }
function CalendarComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    var _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ion-button", 8);
    ɵngcc0.ɵɵlistener("click", function CalendarComponent_ng_template_4_Template_ion_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r10); var ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.prev(); });
    ɵngcc0.ɵɵelement(1, "ion-icon", 9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "ion-button", 10);
    ɵngcc0.ɵɵlistener("click", function CalendarComponent_ng_template_4_Template_ion_button_click_2_listener() { ɵngcc0.ɵɵrestoreView(_r10); var ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.next(); });
    ɵngcc0.ɵɵelement(3, "ion-icon", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("disabled", !ctx_r3.canBack());
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("disabled", !ctx_r3.canNext());
} }
function CalendarComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    var _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelement(0, "ion-calendar-week", 12);
    ɵngcc0.ɵɵelementStart(1, "ion-calendar-month", 13);
    ɵngcc0.ɵɵlistener("ngModelChange", function CalendarComponent_ng_template_5_Template_ion_calendar_month_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12._calendarMonthValue = $event; })("change", function CalendarComponent_ng_template_5_Template_ion_calendar_month_change_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.onChanged($event); })("swipe", function CalendarComponent_ng_template_5_Template_ion_calendar_month_swipe_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.swipeEvent($event); })("select", function CalendarComponent_ng_template_5_Template_ion_calendar_month_select_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.select.emit($event); })("selectStart", function CalendarComponent_ng_template_5_Template_ion_calendar_month_selectStart_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r17 = ɵngcc0.ɵɵnextContext(); return ctx_r17.selectStart.emit($event); })("selectEnd", function CalendarComponent_ng_template_5_Template_ion_calendar_month_selectEnd_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.selectEnd.emit($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("weekArray", ctx_r4._d.weekdays)("weekStart", ctx_r4._d.weekStart);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r4._calendarMonthValue)("month", ctx_r4.monthOpt)("readonly", ctx_r4.readonly)("pickMode", ctx_r4._d.pickMode)("color", ctx_r4._d.color);
} }
function CalendarComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    var _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ion-calendar-month-picker", 14);
    ɵngcc0.ɵɵlistener("select", function CalendarComponent_ng_template_6_Template_ion_calendar_month_picker_select_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); var ctx_r19 = ɵngcc0.ɵɵnextContext(); return ctx_r19.monthOnSelect($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("color", ctx_r6._d.color)("monthFormat", ctx_r6._options == null ? null : ctx_r6._options.monthPickerFormat)("month", ctx_r6.monthOpt);
} }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var calendar_service_1 = require("../services/calendar.service");
var forms_1 = require("@angular/forms");
var moment = require("moment");
var config_1 = require("../config");
exports.ION_CAL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return CalendarComponent; }),
    multi: true,
};
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(calSvc) {
        this.calSvc = calSvc;
        this._view = 'days';
        this._calendarMonthValue = [null, null];
        this._showToggleButtons = true;
        this._showMonthPicker = true;
        this.format = config_1.defaults.DATE_FORMAT;
        this.type = 'string';
        this.readonly = false;
        this.change = new core_1.EventEmitter();
        this.monthChange = new core_1.EventEmitter();
        this.select = new core_1.EventEmitter();
        this.selectStart = new core_1.EventEmitter();
        this.selectEnd = new core_1.EventEmitter();
        this._onChanged = function () { };
        this._onTouched = function () { };
    }
    Object.defineProperty(CalendarComponent.prototype, "showToggleButtons", {
        get: function () {
            return this._showToggleButtons;
        },
        set: function (value) {
            this._showToggleButtons = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "showMonthPicker", {
        get: function () {
            return this._showMonthPicker;
        },
        set: function (value) {
            this._showMonthPicker = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (value) {
            this._options = value;
            this.initOpt();
            if (this.monthOpt && this.monthOpt.original) {
                this.monthOpt = this.createMonth(this.monthOpt.original.time);
            }
        },
        enumerable: true,
        configurable: true
    });
    CalendarComponent.prototype.ngOnInit = function () {
        this.initOpt();
        this.monthOpt = this.createMonth(new Date().getTime());
    };
    CalendarComponent.prototype.getViewDate = function () {
        return this._handleType(this.monthOpt.original.time);
    };
    CalendarComponent.prototype.setViewDate = function (value) {
        this.monthOpt = this.createMonth(this._payloadToTimeNumber(value));
    };
    CalendarComponent.prototype.switchView = function () {
        this._view = this._view === 'days' ? 'month' : 'days';
    };
    CalendarComponent.prototype.prev = function () {
        if (this._view === 'days') {
            this.backMonth();
        }
        else {
            this.prevYear();
        }
    };
    CalendarComponent.prototype.next = function () {
        if (this._view === 'days') {
            this.nextMonth();
        }
        else {
            this.nextYear();
        }
    };
    CalendarComponent.prototype.prevYear = function () {
        if (moment(this.monthOpt.original.time).year() === 1970)
            return;
        var backTime = moment(this.monthOpt.original.time)
            .subtract(1, 'year')
            .valueOf();
        this.monthOpt = this.createMonth(backTime);
    };
    CalendarComponent.prototype.nextYear = function () {
        var nextTime = moment(this.monthOpt.original.time)
            .add(1, 'year')
            .valueOf();
        this.monthOpt = this.createMonth(nextTime);
    };
    CalendarComponent.prototype.nextMonth = function () {
        var nextTime = moment(this.monthOpt.original.time)
            .add(1, 'months')
            .valueOf();
        this.monthChange.emit({
            oldMonth: this.calSvc.multiFormat(this.monthOpt.original.time),
            newMonth: this.calSvc.multiFormat(nextTime),
        });
        this.monthOpt = this.createMonth(nextTime);
    };
    CalendarComponent.prototype.canNext = function () {
        if (!this._d.to || this._view !== 'days')
            return true;
        return this.monthOpt.original.time < moment(this._d.to).valueOf();
    };
    CalendarComponent.prototype.backMonth = function () {
        var backTime = moment(this.monthOpt.original.time)
            .subtract(1, 'months')
            .valueOf();
        this.monthChange.emit({
            oldMonth: this.calSvc.multiFormat(this.monthOpt.original.time),
            newMonth: this.calSvc.multiFormat(backTime),
        });
        this.monthOpt = this.createMonth(backTime);
    };
    CalendarComponent.prototype.canBack = function () {
        if (!this._d.from || this._view !== 'days')
            return true;
        return this.monthOpt.original.time > moment(this._d.from).valueOf();
    };
    CalendarComponent.prototype.monthOnSelect = function (month) {
        this._view = 'days';
        var newMonth = moment(this.monthOpt.original.time)
            .month(month)
            .valueOf();
        this.monthChange.emit({
            oldMonth: this.calSvc.multiFormat(this.monthOpt.original.time),
            newMonth: this.calSvc.multiFormat(newMonth),
        });
        this.monthOpt = this.createMonth(newMonth);
    };
    CalendarComponent.prototype.onChanged = function ($event) {
        switch (this._d.pickMode) {
            case config_1.pickModes.SINGLE:
                var date = this._handleType($event[0].time);
                this._onChanged(date);
                this.change.emit(date);
                break;
            case config_1.pickModes.RANGE:
                if ($event[0] && $event[1]) {
                    var rangeDate = {
                        from: this._handleType($event[0].time),
                        to: this._handleType($event[1].time),
                    };
                    this._onChanged(rangeDate);
                    this.change.emit(rangeDate);
                }
                break;
            case config_1.pickModes.MULTI:
                var dates = [];
                for (var i = 0; i < $event.length; i++) {
                    if ($event[i] && $event[i].time) {
                        dates.push(this._handleType($event[i].time));
                    }
                }
                this._onChanged(dates);
                this.change.emit(dates);
                break;
            default:
        }
    };
    CalendarComponent.prototype.swipeEvent = function ($event) {
        var isNext = $event.deltaX < 0;
        if (isNext && this.canNext()) {
            this.nextMonth();
        }
        else if (!isNext && this.canBack()) {
            this.backMonth();
        }
    };
    CalendarComponent.prototype._payloadToTimeNumber = function (value) {
        var date;
        if (this.type === 'string') {
            date = moment(value, this.format);
        }
        else {
            date = moment(value);
        }
        return date.valueOf();
    };
    CalendarComponent.prototype._monthFormat = function (date) {
        return moment(date).format(this._d.monthFormat.replace(/y/g, 'Y'));
    };
    CalendarComponent.prototype.initOpt = function () {
        if (this._options && typeof this._options.showToggleButtons === 'boolean') {
            this.showToggleButtons = this._options.showToggleButtons;
        }
        if (this._options && typeof this._options.showMonthPicker === 'boolean') {
            this.showMonthPicker = this._options.showMonthPicker;
            if (this._view !== 'days' && !this.showMonthPicker) {
                this._view = 'days';
            }
        }
        this._d = this.calSvc.safeOpt(this._options || {});
    };
    CalendarComponent.prototype.createMonth = function (date) {
        return this.calSvc.createMonthsByPeriod(date, 1, this._d)[0];
    };
    CalendarComponent.prototype._createCalendarDay = function (value) {
        return this.calSvc.createCalendarDay(this._payloadToTimeNumber(value), this._d);
    };
    CalendarComponent.prototype._handleType = function (value) {
        var date = moment(value);
        switch (this.type) {
            case 'string':
                return date.format(this.format);
            case 'js-date':
                return date.toDate();
            case 'moment':
                return date;
            case 'time':
                return date.valueOf();
            case 'object':
                return date.toObject();
        }
        return date;
    };
    CalendarComponent.prototype.writeValue = function (obj) {
        this._writeValue(obj);
        if (obj) {
            if (this._calendarMonthValue[0]) {
                this.monthOpt = this.createMonth(this._calendarMonthValue[0].time);
            }
            else {
                this.monthOpt = this.createMonth(new Date().getTime());
            }
        }
    };
    CalendarComponent.prototype.registerOnChange = function (fn) {
        this._onChanged = fn;
    };
    CalendarComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    CalendarComponent.prototype._writeValue = function (value) {
        var _this = this;
        if (!value) {
            this._calendarMonthValue = [null, null];
            return;
        }
        switch (this._d.pickMode) {
            case 'single':
                this._calendarMonthValue[0] = this._createCalendarDay(value);
                break;
            case 'range':
                if (value.from) {
                    this._calendarMonthValue[0] = value.from ? this._createCalendarDay(value.from) : null;
                }
                if (value.to) {
                    this._calendarMonthValue[1] = value.to ? this._createCalendarDay(value.to) : null;
                }
                break;
            case 'multi':
                if (Array.isArray(value)) {
                    this._calendarMonthValue = value.map(function (e) {
                        return _this._createCalendarDay(e);
                    });
                }
                else {
                    this._calendarMonthValue = [null, null];
                }
                break;
            default:
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CalendarComponent.prototype, "format", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CalendarComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CalendarComponent.prototype, "readonly", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], CalendarComponent.prototype, "change", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], CalendarComponent.prototype, "monthChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], CalendarComponent.prototype, "select", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], CalendarComponent.prototype, "selectStart", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], CalendarComponent.prototype, "selectEnd", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CalendarComponent.prototype, "options", null);
    CalendarComponent = __decorate([ __metadata("design:paramtypes", [calendar_service_1.CalendarService])
    ], CalendarComponent);
CalendarComponent.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(ɵngcc0.ɵɵdirectiveInject(calendar_service_1.CalendarService)); };
CalendarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarComponent, selectors: [["ion-calendar"]], inputs: { format: "format", type: "type", readonly: "readonly", options: "options" }, outputs: { change: "change", monthChange: "monthChange", select: "select", selectStart: "selectStart", selectEnd: "selectEnd" }, features: [ɵngcc0.ɵɵProvidersFeature([exports.ION_CAL_VALUE_ACCESSOR])], decls: 8, vars: 5, consts: [[1, "title"], [3, "ngIf", "ngIfElse"], ["title", ""], [3, "ngIf"], ["monthPicker", ""], ["type", "button", "fill", "clear", 1, "switch-btn", 3, "click"], [1, "arrow-dropdown", 3, "name"], [1, "switch-btn"], ["type", "button", "fill", "clear", 1, "back", 3, "disabled", "click"], ["slot", "icon-only", "size", "small", "name", "arrow-back"], ["type", "button", "fill", "clear", 1, "forward", 3, "disabled", "click"], ["slot", "icon-only", "size", "small", "name", "arrow-forward"], ["color", "transparent", 3, "weekArray", "weekStart"], [1, "component-mode", 3, "ngModel", "month", "readonly", "pickMode", "color", "ngModelChange", "change", "swipe", "select", "selectStart", "selectEnd"], [3, "color", "monthFormat", "month", "select"]], template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, CalendarComponent_ng_template_1_Template, 3, 2, "ng-template", 1);
        ɵngcc0.ɵɵtemplate(2, CalendarComponent_ng_template_2_Template, 2, 1, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(4, CalendarComponent_ng_template_4_Template, 4, 2, "ng-template", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, CalendarComponent_ng_template_5_Template, 2, 7, "ng-template", 1);
        ɵngcc0.ɵɵtemplate(6, CalendarComponent_ng_template_6_Template, 1, 3, "ng-template", null, 4, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        var _r1 = ɵngcc0.ɵɵreference(3);
        var _r5 = ɵngcc0.ɵɵreference(7);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx._showMonthPicker)("ngIfElse", _r1);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx._showToggleButtons);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx._view === "days")("ngIfElse", _r5);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.IonButton, ɵngcc2.IonIcon, ɵngcc3.CalendarWeekComponent, ɵngcc4.MonthComponent, ɵngcc5.NgControlStatus, ɵngcc5.NgModel, ɵngcc6.MonthPickerComponent], styles: ["[_nghost-%COMP%] {\n  padding: 10px 20px;\n  box-sizing: border-box;\n  display: inline-block;\n  background-color: #fff;\n  width: 100%; }\n  [_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n    padding: 0 40px 0 40px;\n    overflow: hidden; }\n    [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .forward[_ngcontent-%COMP%], [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .switch-btn[_ngcontent-%COMP%] {\n      display: block;\n      position: relative;\n      float: left;\n      min-height: 32px;\n      margin: 0;\n      padding: 0;\n      --padding-start: 0;\n      --padding-end: 0;\n      font-size: 15px; }\n    [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .forward[_ngcontent-%COMP%] {\n      color: #757575; }\n    [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n      margin-left: -100%;\n      left: -40px;\n      width: 40px; }\n    [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .forward[_ngcontent-%COMP%] {\n      margin-left: -40px;\n      right: -40px;\n      width: 40px; }\n    [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .switch-btn[_ngcontent-%COMP%] {\n      --margin-top: 0;\n      --margin-bottom: 0;\n      --margin-start: auto;\n      --margin-end: auto;\n      width: 100%;\n      text-align: center;\n      line-height: 32px;\n      color: #757575; }\n      [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .switch-btn[_ngcontent-%COMP%]   .arrow-dropdown[_ngcontent-%COMP%] {\n        margin-left: 5px; }\n  [_nghost-%COMP%]   .days.between[_ngcontent-%COMP%]   .days-btn.is-last[_ngcontent-%COMP%], [_nghost-%COMP%]   .days.between[_ngcontent-%COMP%]   .days-btn.is-first[_ngcontent-%COMP%] {\n    border-radius: 0; }\n  [_nghost-%COMP%]   .component-mode[_ngcontent-%COMP%]   .days.startSelection.is-last-wrap[_ngcontent-%COMP%]::after {\n    border-radius: 0; }\n  [_nghost-%COMP%]   .component-mode[_ngcontent-%COMP%]   .days.endSelection.is-first-wrap[_ngcontent-%COMP%]::after {\n    border-radius: 0; }"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'ion-calendar',
                providers: [exports.ION_CAL_VALUE_ACCESSOR],
                template: "\n    <div class=\"title\">\n      <ng-template [ngIf]=\"_showMonthPicker\" [ngIfElse]=\"title\">\n        <ion-button type=\"button\"\n                fill=\"clear\"\n                class=\"switch-btn\"\n                (click)=\"switchView()\">\n          {{ _monthFormat(monthOpt.original.time) }}\n          <ion-icon class=\"arrow-dropdown\"\n                    [name]=\"_view === 'days' ? 'md-arrow-dropdown' : 'md-arrow-dropup'\"></ion-icon>\n        </ion-button>\n      </ng-template>\n      <ng-template #title>\n        <div class=\"switch-btn\">\n          {{ _monthFormat(monthOpt.original.time) }}\n        </div>\n      </ng-template>\n      <ng-template [ngIf]=\"_showToggleButtons\">\n        <ion-button type=\"button\" fill=\"clear\" class=\"back\" [disabled]=\"!canBack()\" (click)=\"prev()\">\n          <ion-icon slot=\"icon-only\" size=\"small\" name=\"arrow-back\"></ion-icon>\n        </ion-button>\n        <ion-button type=\"button\" fill=\"clear\" class=\"forward\" [disabled]=\"!canNext()\" (click)=\"next()\">\n          <ion-icon slot=\"icon-only\" size=\"small\" name=\"arrow-forward\"></ion-icon>\n        </ion-button>\n      </ng-template>\n    </div>\n    <ng-template [ngIf]=\"_view === 'days'\" [ngIfElse]=\"monthPicker\">\n      <ion-calendar-week color=\"transparent\"\n                         [weekArray]=\"_d.weekdays\"\n                         [weekStart]=\"_d.weekStart\">\n      </ion-calendar-week>\n\n      <ion-calendar-month class=\"component-mode\"\n                          [(ngModel)]=\"_calendarMonthValue\"\n                          [month]=\"monthOpt\"\n                          [readonly]=\"readonly\"\n                          (change)=\"onChanged($event)\"\n                          (swipe)=\"swipeEvent($event)\"\n                          (select)=\"select.emit($event)\"\n                          (selectStart)=\"selectStart.emit($event)\"\n                          (selectEnd)=\"selectEnd.emit($event)\"\n                          [pickMode]=\"_d.pickMode\"\n                          [color]=\"_d.color\">\n      </ion-calendar-month>\n    </ng-template>\n\n    <ng-template #monthPicker>\n      <ion-calendar-month-picker [color]=\"_d.color\"\n                                 [monthFormat]=\"_options?.monthPickerFormat\"\n                                 (select)=\"monthOnSelect($event)\"\n                                 [month]=\"monthOpt\">\n      </ion-calendar-month-picker>\n    </ng-template>\n  ",
                styles: [":host {\n  padding: 10px 20px;\n  box-sizing: border-box;\n  display: inline-block;\n  background-color: #fff;\n  width: 100%; }\n  :host .title {\n    padding: 0 40px 0 40px;\n    overflow: hidden; }\n    :host .title .back,\n    :host .title .forward,\n    :host .title .switch-btn {\n      display: block;\n      position: relative;\n      float: left;\n      min-height: 32px;\n      margin: 0;\n      padding: 0;\n      --padding-start: 0;\n      --padding-end: 0;\n      font-size: 15px; }\n    :host .title .back,\n    :host .title .forward {\n      color: #757575; }\n    :host .title .back {\n      margin-left: -100%;\n      left: -40px;\n      width: 40px; }\n    :host .title .forward {\n      margin-left: -40px;\n      right: -40px;\n      width: 40px; }\n    :host .title .switch-btn {\n      --margin-top: 0;\n      --margin-bottom: 0;\n      --margin-start: auto;\n      --margin-end: auto;\n      width: 100%;\n      text-align: center;\n      line-height: 32px;\n      color: #757575; }\n      :host .title .switch-btn .arrow-dropdown {\n        margin-left: 5px; }\n  :host .days.between .days-btn.is-last,\n  :host .days.between .days-btn.is-first {\n    border-radius: 0; }\n  :host .component-mode .days.startSelection.is-last-wrap::after {\n    border-radius: 0; }\n  :host .component-mode .days.endSelection.is-first-wrap::after {\n    border-radius: 0; }\n"]
            }]
    }], function () { return [{ type: calendar_service_1.CalendarService }]; }, { format: [{
            type: core_1.Input
        }], type: [{
            type: core_1.Input
        }], readonly: [{
            type: core_1.Input
        }], change: [{
            type: core_1.Output
        }], monthChange: [{
            type: core_1.Output
        }], select: [{
            type: core_1.Output
        }], selectStart: [{
            type: core_1.Output
        }], selectEnd: [{
            type: core_1.Output
        }], options: [{
            type: core_1.Input
        }] }); })();
    return CalendarComponent;
}());
exports.CalendarComponent = CalendarComponent;

//# sourceMappingURL=calendar.component.js.map