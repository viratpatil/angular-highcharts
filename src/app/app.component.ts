import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular - Charts';
  constructor() {
    this.lineOptions = {
      title : { text : 'Line Chart' },
      chart: {type:"line", zoomType: 'x'},
      series: [{ data: [29.9, 71.5, 106.4, 129.2, 45,13,120], }, { data: [69.9, 22.5, 16.4, 12.2, 25,113,110], }]
    };

    this.columnOptions = {
      title : { text : 'Column Chart' },
      chart: {type:"column", zoomType: 'x'},
      series: [{ data: [29.9, 71.5, 106.4, 129.2, 45,13,120], }, { data: [69.9, 22.5, 16.4, 12.2, 25,113,110], }]
    };

  }

  lineOptions: Object;
  columnOptions: Object;
  onChartSelection (e) {
    this.from = e.originalEvent.xAxis[0].min.toFixed(2);
    this.to = e.originalEvent.xAxis[0].max.toFixed(2);
  }

