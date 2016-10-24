var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core', './points.model'], function (require, exports, core_1, points_model_1) {
    "use strict";
    var AttributeComponent = (function () {
        function AttributeComponent(pointsModel) {
            this.pointsModel = pointsModel;
        }
        AttributeComponent.prototype.ngOnInit = function () {
            this.points = this.pointsModel.getPointGraphics();
        };
        AttributeComponent = __decorate([
            core_1.Component({
                selector: 'attribute-display',
                templateUrl: './app/attribute.component.html'
            }), 
            __metadata('design:paramtypes', [points_model_1.PointsModel])
        ], AttributeComponent);
        return AttributeComponent;
    }());
    exports.AttributeComponent = AttributeComponent;
});
//# sourceMappingURL=attribute.component.js.map