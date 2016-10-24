import { Component, OnInit } from '@angular/core';
import { PointsModel } from './points.model';

import Point = require('esri/geometry/Point');
import Graphic = require('esri/Graphic');
import Color = require('esri/Color');
import SimpleMarkerSymbol = require('esri/symbols/SimpleMarkerSymbol');

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html'
})
export class AppComponent implements OnInit {
  private pointIndex = 0;
  private pointLongitude = -82.43;
  private pointLatitude = 35.61;
  private defaultSymbol: SimpleMarkerSymbol = new SimpleMarkerSymbol({
    style: 'circle',
    size: 12,
    color: new Color('#000000')
  });
  constructor(private pointsModel: PointsModel) {

  }
  ngOnInit() {

  }
  onClearClicked() {
    this.pointsModel.clear();
  }
  onAddClicked() {
    this.pointIndex++;
    this.pointLatitude += 0.001;
    this.pointLongitude += 0.001;
    let g = new Graphic({
      geometry: new Point({
        x: this.pointLongitude,
        y: this.pointLatitude,
        spatialReference: 4326
      }),
      attributes: {
        index: this.pointIndex
      },
      symbol: this.defaultSymbol
    });
    this.pointsModel.addPoint(g);
  }
  onViewCreated() {
    console.log('view created');
  }
}
