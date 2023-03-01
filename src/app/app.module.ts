import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MaterialExampleModule} from './material.module';
import { AppComponent } from './app.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { GaugeChartComponent } from './gauge-chart/gauge-chart.component';
import { HeatMapChartComponent } from './heat-map-chart/heat-map-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { TreeMapChartComponent } from './tree-map-chart/tree-map-chart.component';
import { PolarChartComponent } from './polar-chart/polar-chart.component';
import { GroupedHorizontalBarChartComponent } from './grouped-horizontal-bar-chart/grouped-horizontal-bar-chart.component';
import { NormalizedHorizontalBarChartComponent } from './normalized-horizontal-bar-chart/normalized-horizontal-bar-chart.component';
import { StackedVerticalBarChartComponent } from './stacked-vertical-bar-chart/stacked-vertical-bar-chart.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { NormalizedAreaChartComponent } from './normalized-area-chart/normalized-area-chart.component';
import { AdvancedPieChartComponent } from './advanced-pie-chart/advanced-pie-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PieGridChartComponent } from './pie-grid-chart/pie-grid-chart.component';
import { NumberCardChartComponent } from './number-card-chart/number-card-chart.component';
import { GroupedVerticalBarChartComponent } from './grouped-vertical-bar-chart/grouped-vertical-bar-chart.component';
import { NormalizedVerticalBarChartComponent } from './normalized-vertical-bar-chart/normalized-vertical-bar-chart.component';




import { AppRoutingModule } from './app-routing.module';
// import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';

@NgModule({
  imports:      [
    BrowserModule,AppRoutingModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MaterialExampleModule
],
  declarations: [
    AppComponent,
    BubbleChartComponent,
    GaugeChartComponent,
    HeatMapChartComponent,
    BarChartComponent,
    TreeMapChartComponent,
    PolarChartComponent,
    GroupedHorizontalBarChartComponent ,
    NormalizedHorizontalBarChartComponent,
    StackedVerticalBarChartComponent,
    AreaChartComponent,
    LineChartComponent,
    NormalizedAreaChartComponent,
    AdvancedPieChartComponent,
    PieChartComponent,
    PieGridChartComponent,
    NumberCardChartComponent,
    GroupedVerticalBarChartComponent,
    NormalizedVerticalBarChartComponent,
   

   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
