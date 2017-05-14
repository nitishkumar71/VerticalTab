import { Injectable, Component, Type } from '@angular/core';

import { CarrierComponent } from '../carrierComponent/carrierComponent';
import { CustomerComponent } from '../customerComponent/customerComponent';
import { Tab } from './tab';

@Injectable()
export class ComponentList {

    constructor() { }

    getList() {
        return [
            //{ component: CustomerComponent, title: 'Customer' },
            //{ component: CarrierComponent, title: 'Carrier' }
            new ComponentListModel(CustomerComponent, 'Customer'),
            new ComponentListModel(CarrierComponent, 'Carrier')
        ];
    }
}

export class ComponentListModel {
    constructor(public component: Type<Tab>,
        public title: string) {
    }
}