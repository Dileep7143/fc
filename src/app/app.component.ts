import { Component, NgModule } from '@angular/core';

interface chart {
  value: string;
  viewValue: string;
  link:string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedValue: any[]=[];

    charts: chart[] = [
      {value: 'Bar Chart', viewValue: 'Bar Chart',link:'/bar'},
      {value: 'Gauge Chart', viewValue: 'Gauge Chart',link:'/gauge'},
      {value: 'Bubble Chart', viewValue: 'Bubble Chart',link:'/bubble'},
      {value: 'Heat Map Chart', viewValue: 'Heat Map Chart',link:'/heat-map'},
      {value: 'Tree Map Chart', viewValue: 'Tree Map Chart',link:'/tree-map'},
      {value: 'Polar Chart', viewValue: 'Polar Chart',link:'/polar'},
      {value: 'Grouped horizontal bar Chart', viewValue: 'Grouped horizontal bar Chart',link:'/grouped-horizontal-bar'},
      {value: 'Normalized horizontal bar Chart', viewValue: 'normalized horizontal bar Chart',link:'/normalized-horizontal-bar'},
      {value: 'Stacked vertical bar Chart', viewValue: 'Stacked vertical bar Chart',link:'/stacked-vertical-bar'},
      {value: 'Area Chart', viewValue: 'Area Chart',link:'/area'},
      {value: 'Line Chart', viewValue: 'Line Chart',link:'/line'},
      {value: 'Normalized Area Chart', viewValue: 'Normalized Area Chart',link:'/normalized-area'},
      {value: 'Advanced Pie Chart', viewValue: 'Advanced Pie Chart',link:'/advanced-pie'},
      {value: 'Pie Chart', viewValue: 'Pie Chart',link:'/pie'},
      {value: 'Pie Grid Chart', viewValue: 'Pie Grid Chart',link:'/pie-grid'},
      {value: 'Number Card Chart', viewValue: 'Number Card Chart',link:'/number-card'},
      {value: 'Grouped vertical bar Chart', viewValue: 'Grouped vertical bar Chart',link:'/grouped-vertical-bar'},
      {value: 'Normalized vertical bar Chart', viewValue: 'normalized vertical bar Chart',link:'/normalized-vertical-bar'},
      

    ];


}
