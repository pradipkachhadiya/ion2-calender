"use strict";
var ɵngcc0 = require('@angular/core');
var ɵngcc1 = require('@ionic/angular');
var ɵngcc2 = require('@angular/common');
var ɵngcc3 = require('./calendar-week.component');
var ɵngcc4 = require('./month.component');
var ɵngcc5 = require('@angular/forms');

var _c0 = ["months"];
function CalendarModal_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0._d.closeLabel);
} }
function CalendarModal_ion_icon_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ion-icon", 12);
} }
function CalendarModal_ion_button_9_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5._d.doneLabel);
} }
function CalendarModal_ion_button_9_ion_icon_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ion-icon", 15);
} }
function CalendarModal_ion_button_9_Template(rf, ctx) { if (rf & 1) {
    var _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ion-button", 13);
    ɵngcc0.ɵɵlistener("click", function CalendarModal_ion_button_9_Template_ion_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r8); var ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.done(); });
    ɵngcc0.ɵɵtemplate(1, CalendarModal_ion_button_9_span_1_Template, 2, 1, "span", 3);
    ɵngcc0.ɵɵtemplate(2, CalendarModal_ion_button_9_ion_icon_2_Template, 1, 0, "ion-icon", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("disabled", !ctx_r2.canDone());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2._d.doneLabel !== "" && !ctx_r2._d.doneIcon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2._d.doneIcon);
} }
function CalendarModal_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    var _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 16);
    ɵngcc0.ɵɵelementStart(1, "h4", 17);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "ion-calendar-month", 18);
    ɵngcc0.ɵɵlistener("change", function CalendarModal_ng_template_15_Template_ion_calendar_month_change_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); var ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onChange($event); })("ngModelChange", function CalendarModal_ng_template_15_Template_ion_calendar_month_ngModelChange_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); var ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.datesTemp = $event; });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var month_r9 = ctx.$implicit;
    var i_r10 = ctx.index;
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("id", "month-" + i_r10);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r4._monthFormat(month_r9.original.date));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("month", month_r9)("pickMode", ctx_r4._d.pickMode)("isSaveHistory", ctx_r4._d.isSaveHistory)("id", ctx_r4._d.id)("color", ctx_r4._d.color)("ngModel", ctx_r4.datesTemp);
} }
var _c1 = [[["", "sub-header", ""]]];
var _c2 = function (a0) { return { "multi-selection": a0 }; };
var _c3 = ["[sub-header]"];
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
var angular_1 = require("@ionic/angular");
var calendar_service_1 = require("../services/calendar.service");
var moment = require("moment");
var config_1 = require("../config");
var NUM_OF_MONTHS_TO_CREATE = 3;
var CalendarModal = /** @class */ (function () {
    function CalendarModal(_renderer, _elementRef, params, modalCtrl, ref, calSvc) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.params = params;
        this.modalCtrl = modalCtrl;
        this.ref = ref;
        this.calSvc = calSvc;
        this.ionPage = true;
        this.datesTemp = [null, null];
        this._scrollLock = true;
    }
    CalendarModal.prototype.ngOnInit = function () {
        this.init();
        this.initDefaultDate();
    };
    CalendarModal.prototype.ngAfterViewInit = function () {
        this.findCssClass();
        if (this._d.canBackwardsSelected)
            this.backwardsMonth();
        this.scrollToDefaultDate();
    };
    CalendarModal.prototype.init = function () {
        this._d = this.calSvc.safeOpt(this.options);
        this._d.showAdjacentMonthDay = false;
        this.step = this._d.step;
        if (this.step < this.calSvc.DEFAULT_STEP) {
            this.step = this.calSvc.DEFAULT_STEP;
        }
        this.calendarMonths = this.calSvc.createMonthsByPeriod(moment(this._d.from).valueOf(), this.findInitMonthNumber(this._d.defaultScrollTo) + this.step, this._d);
    };
    CalendarModal.prototype.initDefaultDate = function () {
        var _this = this;
        var _a = this._d, pickMode = _a.pickMode, defaultDate = _a.defaultDate, defaultDateRange = _a.defaultDateRange, defaultDates = _a.defaultDates;
        switch (pickMode) {
            case config_1.pickModes.SINGLE:
                if (defaultDate) {
                    this.datesTemp[0] = this.calSvc.createCalendarDay(this._getDayTime(defaultDate), this._d);
                }
                break;
            case config_1.pickModes.RANGE:
                if (defaultDateRange) {
                    if (defaultDateRange.from) {
                        this.datesTemp[0] = this.calSvc.createCalendarDay(this._getDayTime(defaultDateRange.from), this._d);
                    }
                    if (defaultDateRange.to) {
                        this.datesTemp[1] = this.calSvc.createCalendarDay(this._getDayTime(defaultDateRange.to), this._d);
                    }
                }
                break;
            case config_1.pickModes.MULTI:
                if (defaultDates && defaultDates.length) {
                    this.datesTemp = defaultDates.map(function (e) { return _this.calSvc.createCalendarDay(_this._getDayTime(e), _this._d); });
                }
                break;
            default:
                this.datesTemp = [null, null];
        }
    };
    CalendarModal.prototype.findCssClass = function () {
        var _this = this;
        var cssClass = this._d.cssClass;
        if (cssClass) {
            cssClass.split(' ').forEach(function (_class) {
                if (_class.trim() !== '')
                    _this._renderer.addClass(_this._elementRef.nativeElement, _class);
            });
        }
    };
    CalendarModal.prototype.onChange = function (data) {
        var _a = this._d, pickMode = _a.pickMode, autoDone = _a.autoDone;
        this.datesTemp = data;
        this.ref.detectChanges();
        if (pickMode !== config_1.pickModes.MULTI && autoDone && this.canDone()) {
            this.done();
        }
        this.repaintDOM();
    };
    CalendarModal.prototype.onCancel = function () {
        this.modalCtrl.dismiss(null, 'cancel');
    };
    CalendarModal.prototype.done = function () {
        var pickMode = this._d.pickMode;
        this.modalCtrl.dismiss(this.calSvc.wrapResult(this.datesTemp, pickMode), 'done');
    };
    CalendarModal.prototype.canDone = function () {
        if (!Array.isArray(this.datesTemp)) {
            return false;
        }
        var pickMode = this._d.pickMode;
        switch (pickMode) {
            case config_1.pickModes.SINGLE:
                return !!(this.datesTemp[0] && this.datesTemp[0].time);
            case config_1.pickModes.RANGE:
                return !!(this.datesTemp[0] && this.datesTemp[1]) && !!(this.datesTemp[0].time && this.datesTemp[1].time);
            case config_1.pickModes.MULTI:
                return this.datesTemp.length > 0 && this.datesTemp.every(function (e) { return !!e && !!e.time; });
            default:
                return false;
        }
    };
    CalendarModal.prototype.nextMonth = function (event) {
        var _a;
        var len = this.calendarMonths.length;
        var final = this.calendarMonths[len - 1];
        var nextTime = moment(final.original.time)
            .add(NUM_OF_MONTHS_TO_CREATE, 'M')
            .valueOf();
        var rangeEnd = this._d.to ? moment(this._d.to).subtract(1, 'M') : 0;
        if (len <= 0 || (rangeEnd !== 0 && moment(final.original.time).isAfter(rangeEnd))) {
            event.target.disabled = true;
            return;
        }
        (_a = this.calendarMonths).push.apply(_a, this.calSvc.createMonthsByPeriod(nextTime, NUM_OF_MONTHS_TO_CREATE, this._d));
        event.target.complete();
        this.repaintDOM();
    };
    CalendarModal.prototype.backwardsMonth = function () {
        var _a;
        var first = this.calendarMonths[0];
        if (first.original.time <= 0) {
            this._d.canBackwardsSelected = false;
            return;
        }
        var firstTime = (this.actualFirstTime = moment(first.original.time)
            .subtract(NUM_OF_MONTHS_TO_CREATE, 'M')
            .valueOf());
        (_a = this.calendarMonths).unshift.apply(_a, this.calSvc.createMonthsByPeriod(firstTime, NUM_OF_MONTHS_TO_CREATE, this._d));
        this.ref.detectChanges();
        this.repaintDOM();
    };
    CalendarModal.prototype.scrollToDate = function (date) {
        var _this = this;
        var defaultDateIndex = this.findInitMonthNumber(date);
        var monthElement = this.monthsEle.nativeElement.children["month-" + defaultDateIndex];
        var domElemReadyWaitTime = 300;
        setTimeout(function () {
            var defaultDateMonth = monthElement ? monthElement.offsetTop : 0;
            if (defaultDateIndex !== -1 && defaultDateMonth !== 0) {
                _this.content.scrollByPoint(0, defaultDateMonth, 128);
            }
        }, domElemReadyWaitTime);
    };
    CalendarModal.prototype.scrollToDefaultDate = function () {
        this.scrollToDate(this._d.defaultScrollTo);
    };
    CalendarModal.prototype.onScroll = function ($event) {
        var _this = this;
        if (!this._d.canBackwardsSelected)
            return;
        var detail = $event.detail;
        if (detail.scrollTop <= 200 && detail.velocityY < 0 && this._scrollLock) {
            this.content.getScrollElement().then(function (scrollElem) {
                _this._scrollLock = !1;
                var heightBeforeMonthPrepend = scrollElem.scrollHeight;
                _this.backwardsMonth();
                setTimeout(function () {
                    var heightAfterMonthPrepend = scrollElem.scrollHeight;
                    _this.content.scrollByPoint(0, heightAfterMonthPrepend - heightBeforeMonthPrepend, 0).then(function () {
                        _this._scrollLock = !0;
                    });
                }, 180);
            });
        }
    };
    /**
     * In some older Safari versions (observed at Mac's Safari 10.0), there is an issue where style updates to
     * shadowRoot descendants don't cause a browser repaint.
     * See for more details: https://github.com/Polymer/polymer/issues/4701
     */
    CalendarModal.prototype.repaintDOM = function () {
        var _this = this;
        return this.content.getScrollElement().then(function (scrollElem) {
            // Update scrollElem to ensure that height of the container changes as Months are appended/prepended
            scrollElem.style.zIndex = '2';
            scrollElem.style.zIndex = 'initial';
            // Update monthsEle to ensure selected state is reflected when tapping on a day
            _this.monthsEle.nativeElement.style.zIndex = '2';
            _this.monthsEle.nativeElement.style.zIndex = 'initial';
        });
    };
    CalendarModal.prototype.findInitMonthNumber = function (date) {
        var startDate = this.actualFirstTime ? moment(this.actualFirstTime) : moment(this._d.from);
        var defaultScrollTo = moment(date);
        var isAfter = defaultScrollTo.isAfter(startDate);
        if (!isAfter)
            return -1;
        if (this.showYearPicker) {
            startDate = moment(new Date(this.year, 0, 1));
        }
        return defaultScrollTo.diff(startDate, 'month');
    };
    CalendarModal.prototype._getDayTime = function (date) {
        return moment(moment(date).format('YYYY-MM-DD')).valueOf();
    };
    CalendarModal.prototype._monthFormat = function (date) {
        return moment(date).format(this._d.monthFormat.replace(/y/g, 'Y'));
    };
    CalendarModal.prototype.trackByIndex = function (index, momentDate) {
        return momentDate.original ? momentDate.original.time : index;
    };
    __decorate([
        core_1.ViewChild(angular_1.IonContent),
        __metadata("design:type", angular_1.IonContent)
    ], CalendarModal.prototype, "content", void 0);
    __decorate([
        core_1.ViewChild('months'),
        __metadata("design:type", core_1.ElementRef)
    ], CalendarModal.prototype, "monthsEle", void 0);
    __decorate([
        core_1.HostBinding('class.ion-page'),
        __metadata("design:type", Object)
    ], CalendarModal.prototype, "ionPage", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CalendarModal.prototype, "options", void 0);
    CalendarModal = __decorate([ __metadata("design:paramtypes", [core_1.Renderer2,
            core_1.ElementRef,
            angular_1.NavParams,
            angular_1.ModalController,
            core_1.ChangeDetectorRef,
            calendar_service_1.CalendarService])
    ], CalendarModal);
CalendarModal.ɵfac = function CalendarModal_Factory(t) { return new (t || CalendarModal)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NavParams), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.ModalController), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(calendar_service_1.CalendarService)); };
CalendarModal.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarModal, selectors: [["ion-calendar-modal"]], viewQuery: function CalendarModal_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(angular_1.IonContent, true);
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.content = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.monthsEle = _t.first);
    } }, hostVars: 2, hostBindings: function CalendarModal_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ion-page", ctx.ionPage);
    } }, inputs: { options: "options" }, ngContentSelectors: _c3, decls: 18, vars: 14, consts: [[3, "color"], ["slot", "start"], ["type", "button", "slot", "icon-only", "fill", "clear", 3, "click"], [4, "ngIf"], ["name", "close", 4, "ngIf"], ["slot", "end"], ["type", "button", "slot", "icon-only", "fill", "clear", 3, "disabled", "click", 4, "ngIf"], [3, "color", "weekArray", "weekStart"], [1, "calendar-page", 3, "scrollEvents", "ngClass", "ionScroll"], ["months", ""], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], ["threshold", "25%", 3, "ionInfinite"], ["name", "close"], ["type", "button", "slot", "icon-only", "fill", "clear", 3, "disabled", "click"], ["name", "checkmark", 4, "ngIf"], ["name", "checkmark"], [1, "month-box"], [1, "text-center", "month-title"], [3, "month", "pickMode", "isSaveHistory", "id", "color", "ngModel", "change", "ngModelChange"]], template: function CalendarModal_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c1);
        ɵngcc0.ɵɵelementStart(0, "ion-header");
        ɵngcc0.ɵɵelementStart(1, "ion-toolbar", 0);
        ɵngcc0.ɵɵelementStart(2, "ion-buttons", 1);
        ɵngcc0.ɵɵelementStart(3, "ion-button", 2);
        ɵngcc0.ɵɵlistener("click", function CalendarModal_Template_ion_button_click_3_listener() { return ctx.onCancel(); });
        ɵngcc0.ɵɵtemplate(4, CalendarModal_span_4_Template, 2, 1, "span", 3);
        ɵngcc0.ɵɵtemplate(5, CalendarModal_ion_icon_5_Template, 1, 0, "ion-icon", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "ion-title");
        ɵngcc0.ɵɵtext(7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "ion-buttons", 5);
        ɵngcc0.ɵɵtemplate(9, CalendarModal_ion_button_9_Template, 3, 3, "ion-button", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(10);
        ɵngcc0.ɵɵelement(11, "ion-calendar-week", 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(12, "ion-content", 8);
        ɵngcc0.ɵɵlistener("ionScroll", function CalendarModal_Template_ion_content_ionScroll_12_listener($event) { return ctx.onScroll($event); });
        ɵngcc0.ɵɵelementStart(13, "div", null, 9);
        ɵngcc0.ɵɵtemplate(15, CalendarModal_ng_template_15_Template, 4, 8, "ng-template", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(16, "ion-infinite-scroll", 11);
        ɵngcc0.ɵɵlistener("ionInfinite", function CalendarModal_Template_ion_infinite_scroll_ionInfinite_16_listener($event) { return ctx.nextMonth($event); });
        ɵngcc0.ɵɵelement(17, "ion-infinite-scroll-content");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("color", ctx._d.color);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx._d.closeLabel !== "" && !ctx._d.closeIcon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx._d.closeIcon);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx._d.title);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", !ctx._d.autoDone);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("color", ctx._d.color)("weekArray", ctx._d.weekdays)("weekStart", ctx._d.weekStart);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("scrollEvents", true)("ngClass", ɵngcc0.ɵɵpureFunction1(12, _c2, ctx._d.pickMode === "multi"));
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.calendarMonths)("ngForTrackBy", ctx.trackByIndex);
    } }, directives: [ɵngcc1.IonHeader, ɵngcc1.IonToolbar, ɵngcc1.IonButtons, ɵngcc1.IonButton, ɵngcc2.NgIf, ɵngcc1.IonTitle, ɵngcc3.CalendarWeekComponent, ɵngcc1.IonContent, ɵngcc2.NgClass, ɵngcc2.NgForOf, ɵngcc1.IonInfiniteScroll, ɵngcc1.IonInfiniteScrollContent, ɵngcc1.IonIcon, ɵngcc4.MonthComponent, ɵngcc5.NgControlStatus, ɵngcc5.NgModel], styles: ["[_nghost-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  max-width: unset; }\n  [_nghost-%COMP%]   ion-select[_ngcontent-%COMP%]   .select-icon[_ngcontent-%COMP%]    > .select-icon-inner[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-select[_ngcontent-%COMP%]   .select-text[_ngcontent-%COMP%] {\n    color: #fff !important; }\n  [_nghost-%COMP%]   ion-select.select-ios[_ngcontent-%COMP%] {\n    max-width: unset; }\n\n[_nghost-%COMP%]   .calendar-page[_ngcontent-%COMP%] {\n  background-color: #fbfbfb; }\n\n[_nghost-%COMP%]   .month-box[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding-bottom: 1em;\n  border-bottom: 1px solid #f1f1f1; }\n\n[_nghost-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 1.1rem;\n  display: block;\n  text-align: center;\n  margin: 1rem 0 0;\n  color: #929292; }"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarModal, [{
        type: core_1.Component,
        args: [{
                selector: 'ion-calendar-modal',
                template: "\n    <ion-header>\n      <ion-toolbar [color]=\"_d.color\">\n          <ion-buttons slot=\"start\">\n              <ion-button type='button' slot=\"icon-only\" fill=\"clear\" (click)=\"onCancel()\">\n              <span *ngIf=\"_d.closeLabel !== '' && !_d.closeIcon\">{{ _d.closeLabel }}</span>\n              <ion-icon *ngIf=\"_d.closeIcon\" name=\"close\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n\n          <ion-title>{{ _d.title }}</ion-title>\n\n          <ion-buttons slot=\"end\">\n            <ion-button type='button' slot=\"icon-only\" *ngIf=\"!_d.autoDone\" fill=\"clear\" [disabled]=\"!canDone()\" (click)=\"done()\">\n              <span *ngIf=\"_d.doneLabel !== '' && !_d.doneIcon\">{{ _d.doneLabel }}</span>\n              <ion-icon *ngIf=\"_d.doneIcon\" name=\"checkmark\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n      </ion-toolbar>\n\n      <ng-content select=\"[sub-header]\"></ng-content>\n\n      <ion-calendar-week\n        [color]=\"_d.color\"\n        [weekArray]=\"_d.weekdays\"\n        [weekStart]=\"_d.weekStart\">\n      </ion-calendar-week>\n\n    </ion-header>\n\n    <ion-content (ionScroll)=\"onScroll($event)\" class=\"calendar-page\" [scrollEvents]=\"true\"\n                 [ngClass]=\"{'multi-selection': _d.pickMode === 'multi'}\">\n\n      <div #months>\n        <ng-template ngFor let-month [ngForOf]=\"calendarMonths\" [ngForTrackBy]=\"trackByIndex\" let-i=\"index\">\n          <div class=\"month-box\" [attr.id]=\"'month-' + i\">\n            <h4 class=\"text-center month-title\">{{ _monthFormat(month.original.date) }}</h4>\n            <ion-calendar-month [month]=\"month\"\n                                [pickMode]=\"_d.pickMode\"\n                                [isSaveHistory]=\"_d.isSaveHistory\"\n                                [id]=\"_d.id\"\n                                [color]=\"_d.color\"\n                                (change)=\"onChange($event)\"\n                                [(ngModel)]=\"datesTemp\">\n            </ion-calendar-month>\n          </div>\n        </ng-template>\n\n      </div>\n\n      <ion-infinite-scroll threshold=\"25%\" (ionInfinite)=\"nextMonth($event)\">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n\n    </ion-content>\n  ",
                styles: [":host ion-select {\n  max-width: unset; }\n  :host ion-select .select-icon > .select-icon-inner,\n  :host ion-select .select-text {\n    color: #fff !important; }\n  :host ion-select.select-ios {\n    max-width: unset; }\n\n:host .calendar-page {\n  background-color: #fbfbfb; }\n\n:host .month-box {\n  display: inline-block;\n  width: 100%;\n  padding-bottom: 1em;\n  border-bottom: 1px solid #f1f1f1; }\n\n:host h4 {\n  font-weight: 400;\n  font-size: 1.1rem;\n  display: block;\n  text-align: center;\n  margin: 1rem 0 0;\n  color: #929292; }\n"]
            }]
    }], function () { return [{ type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: ɵngcc1.NavParams }, { type: ɵngcc1.ModalController }, { type: ɵngcc0.ChangeDetectorRef }, { type: calendar_service_1.CalendarService }]; }, { ionPage: [{
            type: core_1.HostBinding,
            args: ['class.ion-page']
        }], content: [{
            type: core_1.ViewChild,
            args: [angular_1.IonContent]
        }], monthsEle: [{
            type: core_1.ViewChild,
            args: ['months']
        }], options: [{
            type: core_1.Input
        }] }); })();
    return CalendarModal;
}());
exports.CalendarModal = CalendarModal;

//# sourceMappingURL=calendar.modal.js.map