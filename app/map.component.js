var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core', './map.service', 'esri/views/MapView', 'esri/geometry/Point', 'esri/geometry/SpatialReference'], function (require, exports, core_1, map_service_1, MapView, Point, SpatialReference) {
    "use strict";
    var MapComponent = (function () {
        function MapComponent(mapService, elementRef) {
            this.mapService = mapService;
            this.elementRef = elementRef;
            this.viewCreated = new core_1.EventEmitter();
        }
        MapComponent.prototype.ngOnInit = function () {
            this.view = new MapView({
                container: this.elementRef.nativeElement.firstChild,
                map: this.mapService.map,
                center: new Point({
                    x: -82.44,
                    y: 35.61,
                    spatialReference: new SpatialReference({ wkid: 4326 })
                }),
                zoom: 14
            });
            this.viewCreated.next(this.view);
        };
        __decorate([
            core_1.Output(), 
            __metadata('design:type', Object)
        ], MapComponent.prototype, "viewCreated", void 0);
        MapComponent = __decorate([
            core_1.Component({
                selector: 'esri-map',
                template: '<div id="viewDiv" style="height:600px"><ng-content></ng-content></div>'
            }), 
            __metadata('design:paramtypes', [map_service_1.MapService, core_1.ElementRef])
        ], MapComponent);
        return MapComponent;
    }());
    exports.MapComponent = MapComponent;
});
//# sourceMappingURL=map.component.js.map