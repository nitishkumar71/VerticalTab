import { TestBed } from '@angular/core/testing';
import { VerticalTabs } from './vertical-tabs';
import { Tab } from './tab';

describe('Purpose is to test Tab Functionality', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                VerticalTabs,
                Tab
            ]
        }).compileComponents();
    });

    it('There is no Tab Present', () => {
         let fixture = TestBed.createComponent(VerticalTabs);
         let verticalTabs = fixture.debugElement.componentInstance;
         expect(verticalTabs.tabs).toBeUndefined();
        //expect(true).toBe(true);
    });
});