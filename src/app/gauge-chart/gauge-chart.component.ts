import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';
import { ScaleType } from '../scale-type.enum';
import { ViewDimensions } from '../view-dimension.interface';
// import { NumberValue } from 'd3-scale';
@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.css']
})
export class GaugeChartComponent {
  single: any[]=[];
    viewd: any= [800, 500];
    legend: boolean = true;
    legendPosition:any = 'right';

    colorScheme = {
      name: 'vivid',
    selectable: true,
    group: ScaleType.Ordinal,
      domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
    };



 
    constructor() {
      Object.assign(this, { single });

    }

    onSelect(data:any): void {
      console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    }

    onActivate(data:any): void {
      console.log('Activate', JSON.parse(JSON.stringify(data)));
    }

    onDeactivate(data:any): void {
      console.log('Deactivate', JSON.parse(JSON.stringify(data)));
    }




}
