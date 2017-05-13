import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Tab } from '../vertical-tab/tab';

@Component({
    selector: 'customer-comp',
    templateUrl: './customerComponent.html',
    providers: [{ provide: Tab, useExisting: CustomerComponent }]
})
export class CustomerComponent extends Tab {

    constructor() {
        super('customer');
        //add form controls
        this.tabForm.addControl('customerName',
            new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]+')]));
    }
}