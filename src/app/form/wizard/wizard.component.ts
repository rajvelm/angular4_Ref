//import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
//import {TabModule} from 'angular-tabs-component';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

/* import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
  imports: [TabModule
  ],
  declarations: []
})*/

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent {
	t: any;
  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'bar') {
      $event.preventDefault();
    }
  };    
}


