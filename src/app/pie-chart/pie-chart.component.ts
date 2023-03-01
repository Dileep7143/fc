import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';
import { ScaleType } from '../scale-type.enum';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  single: any[]=[];
    view: any = [700, 400];

    // options
    gradient: boolean = true;
    showLegend: boolean = true;
    showLabels: boolean = true;
    isDoughnut: boolean = false;
    legendPosition: any = 'below';

    colorScheme = {
      name: 'cool',
    selectable: true,
    group: ScaleType.Ordinal,
      domain: ['#5AA454', '#A10A28', '#C7B42C','#fcba03','#518581', '#AAAAAA']
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
