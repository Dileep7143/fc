import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './data';
import { ScaleType } from '../scale-type.enum';

@Component({
  selector: 'app-stacked-vertical-bar-chart',
  templateUrl: './stacked-vertical-bar-chart.component.html',
  styleUrls: ['./stacked-vertical-bar-chart.component.css']
})
export class StackedVerticalBarChartComponent {
  multi: any[]=[];
    view: any = [1000, 500];

    // options
    showXAxis: boolean = true;
    showYAxis: boolean = true;
    gradient: boolean = true;
    showLegend: boolean = true;
    showXAxisLabel: boolean = true;
    xAxisLabel: string = 'Country';
    showYAxisLabel: boolean = true;
    yAxisLabel: string = 'Population';
    animations: boolean = true;

    colorScheme = {
      name: 'cool',
    selectable: true,
    group: ScaleType.Ordinal,
      domain: ['#5AA454', '#C7B42C', '#AAAAAA']
    };

    constructor() {
      Object.assign(this, { multi });
    }

    onSelect(event:any) {
      console.log(event);
    }
}
