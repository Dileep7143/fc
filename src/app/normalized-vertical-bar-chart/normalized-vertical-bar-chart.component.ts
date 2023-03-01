import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './data';
import { ScaleType } from '../scale-type.enum';

@Component({
  selector: 'app-normalized-vertical-bar-chart',
  templateUrl: './normalized-vertical-bar-chart.component.html',
  styleUrls: ['./normalized-vertical-bar-chart.component.css']
})
export class NormalizedVerticalBarChartComponent {
  multi: any[]=[];
   view: any = [800,400];

   // options
   showXAxis: boolean = true;
   showYAxis: boolean = true;
   gradient: boolean = true;
   showLegend: boolean = true;
   showXAxisLabel: boolean = true;
   xAxisLabel: string = 'Country';
   showYAxisLabel: boolean = true;
   yAxisLabel: string = 'Normalized Population';

   colorScheme = {
     name: 'cool',
   selectable: true,
   group: ScaleType.Ordinal,
     domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
   };

   constructor() {
     Object.assign(this, { multi });
   }

   onSelect(event:any) {
     console.log(event);
   }
}
