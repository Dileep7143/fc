import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './data';
import { ScaleType } from '../scale-type.enum';

@Component({
  selector: 'app-grouped-vertical-bar-chart',
  templateUrl: './grouped-vertical-bar-chart.component.html',
  styleUrls: ['./grouped-vertical-bar-chart.component.css']
})
export class GroupedVerticalBarChartComponent {
  multi: any[]=[];
   view: any = [1000,500];

   // options
   showXAxis: boolean = true;
   showYAxis: boolean = true;
   gradient: boolean = true;
   showLegend: boolean = true;
   showXAxisLabel: boolean = true;
   xAxisLabel: string = 'Country';
   showYAxisLabel: boolean = true;
   yAxisLabel: string = 'Population';
   legendTitle: string = 'Years';

   colorScheme = {
     name: 'grid',
   selectable: true,
   group: ScaleType.Ordinal,
     domain: ['#5AA454', '#C7B42C', '#AAAAAA']
   };

   constructor() {
     Object.assign(this, { multi })
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
