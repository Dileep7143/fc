import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';
import { ScaleType } from '../scale-type.enum';

@Component({
  selector: 'app-tree-map-chart',
  templateUrl: './tree-map-chart.component.html',
  styleUrls: ['./tree-map-chart.component.css']
})
export class TreeMapChartComponent {
  single: any[]=[];
    view: any = [700, 400];

    // options
    gradient: boolean = false;
    animations: boolean = true;

    colorScheme = {
      name: 'cool',
    selectable: true,
    group: ScaleType.Ordinal,
      domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
    };

    constructor() {
      Object.assign(this, { single });
    }

    onSelect(event:any) {
      console.log(event);
    }

    labelFormatting(c:any) {
      return `${(c.label)} Population`;
    }
}
