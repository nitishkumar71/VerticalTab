import { Component, Input, OnInit, AfterContentInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { TemplateModel } from './template-model'
@Component({
    selector: 'tab',
    /*template: `
    <div class="vertical-tab-content" [hidden]="!active">
    <ng-content></ng-content>
    </div>
    `*/
})
export abstract class Tab implements OnInit, AfterContentInit {


    @Input('tabFormGroup') tabFormGroup: FormGroup;
    @Input('tabTitle') title: string;
    @Input('tabActive') active: boolean;
    /*tabFormGroup: FormGroup;
    title: string;
    active: boolean;*/

    tabForm: FormGroup
    tabFormName: string

    constructor(tabFormName: string) {
        //initialize tab FormGroup
        this.tabFormName = tabFormName;
        this.tabForm = new FormGroup({});
    }

    ngOnInit(): void {
        //add tab FormGroup to parent FormGroup
        //this.tabFormGroup.addControl(this.tabFormName, this.tabForm);
    }
    
    ngAfterContentInit(): void {
        //this.tabFormGroup.
        this.tabFormGroup.addControl(this.tabFormName, this.tabForm);
    }
}