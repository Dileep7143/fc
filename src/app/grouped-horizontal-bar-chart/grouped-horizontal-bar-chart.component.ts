import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './data';
import { ScaleType } from '../scale-type.enum';

@Component({
  selector: 'app-grouped-horizontal-bar-chart',
  templateUrl: './grouped-horizontal-bar-chart.component.html',
  styleUrls: ['./grouped-horizontal-bar-chart.component.css']
})
export class GroupedHorizontalBarChartComponent {
  multi: any[]=[];
    view: any = [700, 400];

    // options
    showXAxis: boolean = true;
    showYAxis: boolean = true;
    gradient: boolean = false;
    showLegend: boolean = true;
    legendPosition:any = 'below';
    showXAxisLabel: boolean = true;
    yAxisLabel: string = 'Country';
    showYAxisLabel: boolean = true;
    xAxisLabel = 'Population';

    colorScheme = {
      name: 'cool',
    selectable: true,
    group: ScaleType.Ordinal,
      domain: ['#5AA454', '#C7B42C', '#AAAAAA']
    };
    schemeType:any = 'linear';

    constructor() {
      Object.assign(this, { multi });
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
