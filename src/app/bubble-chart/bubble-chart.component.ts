import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { bubbleData } from './data';
import { ScaleType } from '../scale-type.enum';
@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css']
})
export class BubbleChartComponent {
  bubbleData: any[]=[];
    view: any = [700, 400];

    // options
    showXAxis: boolean = true;
    showYAxis: boolean = true;
    gradient: boolean = false;
    showLegend: boolean = true;
    showXAxisLabel: boolean = true;
    yAxisLabel: string = 'Population';
    showYAxisLabel: boolean = true;
    xAxisLabel: string = 'Years';
    maxRadius= 20;
    minRadius= 5;
    yScaleMin= 70;
    yScaleMax= 85;
    xScaleMin: number = 70;
    xScaleMax: number = 100;

    colorScheme = {
      name: 'cool',
    selectable: true,
    group: ScaleType.Ordinal,
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    constructor() {
      Object.assign(this, { bubbleData });
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
