import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AgGridModule} from "ag-grid-angular";
//import { HttpClientModule } from '@angular/http';


import { PagesRoutes } from './pages.routing';
import { InvoiceComponent } from './invoice/invoice.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PricingComponent } from './pricing/pricing.component';
import { ForumComponent } from './forum/forum.component';
import { ActivtyComponent } from './activty/activty.component';
import { BlankComponent } from './blank/blank.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
	AgGridModule.withComponents([
				])
  ],
  declarations: [InvoiceComponent, TimelineComponent, PricingComponent, ForumComponent, ActivtyComponent, BlankComponent]
})

export class PagesModule {}
