import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';
import { ScaleType } from '../scale-type.enum';

@Component({
  selector: 'app-number-card-chart',
  templateUrl: './number-card-chart.component.html',
  styleUrls: ['./number-card-chart.component.css']
})
export class NumberCardChartComponent {
  single: any[]=[];
  view: any = [700, 400];

  colorScheme = {
    name: 'cool',
  selectable: true,
  group: ScaleType.Ordinal,
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor: any = '#232837';

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(event:any) {
    console.log(event);
  }
}
