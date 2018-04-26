import { Routes } from '@angular/router';

import { BasicComponent } from './basic/basic.component';
import { MasksComponent } from './masks/masks.component';
import { EditorComponent } from './editor/editor.component';
import { ValidationComponent } from './validation/validation.component';
import { UploadComponent } from './upload/upload.component';
import { TreeComponent } from './tree/tree.component';
import { WizardComponent } from './wizard/wizard.component';
import { ReportComponent } from './report/report.component';

export const FormRoutes: Routes = [
  {
    path: '',
    children: [
	{
      path: 'basic',
      component: BasicComponent,
      data: {
        heading: 'Basic forms'
      }
    }, 
	{
      path: 'wizard',
      component: WizardComponent,
      data: {
        heading: 'Form Wizard'
      }
    },
	{
      path: 'report',
      component: ReportComponent,
      data: {
        heading: 'AG Grid'
      }
    },
	{
      path: 'masks',
      component: MasksComponent,
      data: {
        heading: 'Masks'
      }
    }, {
      path: 'editor',
      component: EditorComponent,
      data: {
        heading: 'Editor'
      }
    }, {
      path: 'validation',
      component: ValidationComponent,
      data: {
        heading: 'Validation'
      }
    }, {
      path: 'upload',
      component: UploadComponent,
      data: {
        heading: 'Upload'
      }
    }, {
      path: 'tree',
      component: TreeComponent,
      data: {
        heading: 'Tree'
      }
    }	
	]
  }
];
