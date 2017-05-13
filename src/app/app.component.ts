import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { VerticalTabs } from '../component/vertical-tab/vertical-tabs';
import { Tab } from '../component/vertical-tab/tab';
import { CustomerComponent } from '../component/customerComponent/customerComponent';
import { CarrierComponent } from '../component/carrierComponent/carrierComponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({

    });
  }

  submitForm() {

  }
}
