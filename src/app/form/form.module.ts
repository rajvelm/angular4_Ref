import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';
import { HttpModule } from '@angular/http';


import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { TreeModule } from 'angular-tree-component';
import { CustomFormsModule } from 'ng2-validation';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

import { FormRoutes } from './form.routing';
import { BasicComponent } from './basic/basic.component';
import { MasksComponent } from './masks/masks.component';
import { EditorComponent } from './editor/editor.component';
import { ValidationComponent } from './validation/validation.component';
import { UploadComponent } from './upload/upload.component';
import { TreeComponent } from './tree/tree.component';
import { WizardComponent } from './wizard/wizard.component';
import { ReportComponent } from './report/report.component';
//import { CarService } from './report/cars.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FormRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbProgressbarModule,
    CustomFormsModule,
    TreeModule,
    TextMaskModule,
    FileUploadModule,
	NgbModule,
	AgGridModule.withComponents([]),
	HttpModule
  ],
  declarations: [BasicComponent, MasksComponent, EditorComponent, ValidationComponent, UploadComponent, TreeComponent, WizardComponent, ReportComponent],
  providers: []
})

export class FormModule {}
