import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Tab } from '../vertical-tab/tab';

@Component({
    selector: 'carrier-comp',
    templateUrl: './carrierComponent.html',
    providers: [{ provide: Tab, useExisting: CarrierComponent }]
})
export class CarrierComponent extends Tab {

    constructor() {
        super('carrier');
        //add form controls
        this.tabForm.addControl('carrierName',
            new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]+')]));
    }
}