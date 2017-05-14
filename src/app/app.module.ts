import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VerticalTabs } from '../component/vertical-tab/vertical-tabs';
import { Tab } from '../component/vertical-tab/tab';
import { CustomerComponent } from '../component/customerComponent/customerComponent';
import {CarrierComponent} from '../component/carrierComponent/carrierComponent';

@NgModule({
  declarations: [
    AppComponent,
    VerticalTabs,
    //Tab,
    CustomerComponent,
    CarrierComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
   entryComponents:[
     CustomerComponent,
    CarrierComponent
   ],
  bootstrap: [
    AppComponent
    ]
})
export class AppModule { }
