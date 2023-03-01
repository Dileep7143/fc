import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import {GaugeChartComponent} from './gauge-chart/gauge-chart.component';
import {BubbleChartComponent} from './bubble-chart/bubble-chart.component';
import {HeatMapChartComponent} from './heat-map-chart/heat-map-chart.component';
import {TreeMapChartComponent} from './tree-map-chart/tree-map-chart.component';
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



const routes: Routes = [
  { path: '', redirectTo: '/bar', pathMatch: 'full' },
   { path: 'bar', component: BarChartComponent  },
   { path: 'gauge', component: GaugeChartComponent },
   { path: 'bubble', component: BubbleChartComponent },
   { path: 'heat-map', component: HeatMapChartComponent },
   { path: 'tree-map', component: TreeMapChartComponent },
   { path: 'polar', component: PolarChartComponent },
   { path: 'grouped-horizontal-bar', component: GroupedHorizontalBarChartComponent },
   { path: 'normalized-horizontal-bar', component: NormalizedHorizontalBarChartComponent },
   { path: 'stacked-vertical-bar', component: StackedVerticalBarChartComponent },
   { path: 'area', component: AreaChartComponent },
   { path: 'line', component: LineChartComponent },
   { path: 'normalized-area', component: NormalizedAreaChartComponent },
   { path: 'advanced-pie', component: AdvancedPieChartComponent },
   { path: 'pie', component: PieChartComponent },
   { path: 'pie-grid', component: PieGridChartComponent },
   { path: 'number-card', component: NumberCardChartComponent },
   { path: 'grouped-vertical-bar', component: GroupedVerticalBarChartComponent },
   { path: 'normalized-vertical-bar', component: NormalizedVerticalBarChartComponent },
   


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
