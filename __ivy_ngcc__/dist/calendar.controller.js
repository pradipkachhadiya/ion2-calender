"use strict";
var ɵngcc0 = require('@angular/core');
var ɵngcc1 = require('@ionic/angular');
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var calendar_modal_1 = require("./components/calendar.modal");
var calendar_service_1 = require("./services/calendar.service");
var CalendarController = /** @class */ (function () {
    function CalendarController(modalCtrl, calSvc) {
        this.modalCtrl = modalCtrl;
        this.calSvc = calSvc;
    }
    /**
     * @deprecated
     * @param {CalendarModalOptions} calendarOptions
     * @param {ModalOptions} modalOptions
     * @returns {any}
     */
    CalendarController.prototype.openCalendar = function (calendarOptions, modalOptions) {
        if (modalOptions === void 0) { modalOptions = {}; }
        var options = this.calSvc.safeOpt(calendarOptions);
        return this.modalCtrl
            .create(__assign({ component: calendar_modal_1.CalendarModal, componentProps: {
                options: options,
            } }, modalOptions))
            .then(function (calendarModal) {
            calendarModal.present();
            return calendarModal.onDidDismiss().then(function (event) {
                return event.data ? Promise.resolve(event.data) : Promise.reject('cancelled');
            });
        });
    };
    CalendarController = __decorate([ __metadata("design:paramtypes", [angular_1.ModalController, calendar_service_1.CalendarService])
    ], CalendarController);
CalendarController.ɵfac = function CalendarController_Factory(t) { return new (t || CalendarController)(ɵngcc0.ɵɵinject(ɵngcc1.ModalController), ɵngcc0.ɵɵinject(calendar_service_1.CalendarService)); };
CalendarController.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: CalendarController, factory: function (t) { return CalendarController.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarController, [{
        type: core_1.Injectable
    }], function () { return [{ type: ɵngcc1.ModalController }, { type: calendar_service_1.CalendarService }]; }, null); })();
    return CalendarController;
}());
exports.CalendarController = CalendarController;

//# sourceMappingURL=calendar.controller.js.map