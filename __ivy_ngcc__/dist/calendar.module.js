"use strict";
var ɵngcc0 = require('@angular/core');
var ɵngcc1 = require('./components/calendar.modal');
var ɵngcc2 = require('./components/calendar-week.component');
var ɵngcc3 = require('./components/month.component');
var ɵngcc4 = require('./components/calendar.component');
var ɵngcc5 = require('./components/month-picker.component');
var ɵngcc6 = require('@angular/common');
var ɵngcc7 = require('@ionic/angular');
var ɵngcc8 = require('@angular/forms');
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var angular_1 = require("@ionic/angular");
var calendar_controller_1 = require("./calendar.controller");
var calendar_service_1 = require("./services/calendar.service");
var index_1 = require("./components/index");
function calendarController(modalCtrl, calSvc) {
    return new calendar_controller_1.CalendarController(modalCtrl, calSvc);
}
exports.calendarController = calendarController;
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
CalendarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CalendarModule });
CalendarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CalendarModule_Factory(t) { return new (t || CalendarModule)(); }, providers: [
        calendar_service_1.CalendarService,
        {
            provide: calendar_controller_1.CalendarController,
            useFactory: calendarController,
            deps: [angular_1.ModalController, calendar_service_1.CalendarService]
        },
    ], imports: [[common_1.CommonModule, angular_1.IonicModule, forms_1.FormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CalendarModule, { declarations: [ɵngcc1.CalendarModal, ɵngcc2.CalendarWeekComponent, ɵngcc3.MonthComponent, ɵngcc4.CalendarComponent, ɵngcc5.MonthPickerComponent], imports: [ɵngcc6.CommonModule, ɵngcc7.IonicModule, ɵngcc8.FormsModule], exports: [ɵngcc1.CalendarModal, ɵngcc2.CalendarWeekComponent, ɵngcc3.MonthComponent, ɵngcc4.CalendarComponent, ɵngcc5.MonthPickerComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarModule, [{
        type: core_1.NgModule,
        args: [{
                imports: [common_1.CommonModule, angular_1.IonicModule, forms_1.FormsModule],
                declarations: index_1.CALENDAR_COMPONENTS,
                exports: index_1.CALENDAR_COMPONENTS,
                entryComponents: index_1.CALENDAR_COMPONENTS,
                providers: [
                    calendar_service_1.CalendarService,
                    {
                        provide: calendar_controller_1.CalendarController,
                        useFactory: calendarController,
                        deps: [angular_1.ModalController, calendar_service_1.CalendarService]
                    },
                ],
                schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], function () { return []; }, null); })();
    return CalendarModule;
}());
exports.CalendarModule = CalendarModule;

//# sourceMappingURL=calendar.module.js.map