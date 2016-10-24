define(["require", "exports", './points.model', 'esri/Graphic', 'esri/geometry/Point'], function (require, exports, points_model_1, Graphic, Point) {
    "use strict";
    describe('PointsModel tests', function () {
        var mockPointGraphic = new Graphic({
            attributes: {
                index: 1
            },
            geometry: new Point({
                x: 1,
                y: 2,
                spatialReference: {
                    wkid: 4326
                }
            })
        });
        var pointsModel;
        beforeEach(function () {
            pointsModel = new points_model_1.PointsModel();
        });
        it('should contstruct it', function () {
            expect(pointsModel).toBeDefined();
            expect(pointsModel.getPointGraphics()).toBeDefined();
        });
        describe('adding and removing points', function () {
            it('should add a point to collection', function () {
                pointsModel.addPoint(mockPointGraphic);
                pointsModel.addPoint(mockPointGraphic);
                expect(pointsModel.getPointGraphics().length).toEqual(2);
            });
            it('should add points to collection', function () {
                pointsModel.addPoints([mockPointGraphic, mockPointGraphic]);
                expect(pointsModel.getPointGraphics().length).toEqual(2);
            });
            it('should clear points', function () {
                pointsModel.addPoint(mockPointGraphic);
                pointsModel.addPoint(mockPointGraphic);
                pointsModel.clear();
                expect(pointsModel.getPointGraphics().length).toEqual(0);
            });
        });
        describe('calculations', function () {
            it('should calculate the sum of the index attributes', function () {
                pointsModel.addPoints([mockPointGraphic, mockPointGraphic]);
                var sum = pointsModel.getIndexSum();
                expect(sum).toEqual(2);
            });
        });
    });
});
//# sourceMappingURL=points.model.spec.js.map