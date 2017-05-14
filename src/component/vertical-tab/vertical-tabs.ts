import {
  Component, ContentChildren, ViewChild, QueryList, OnInit,
  AfterContentInit, ViewContainerRef, ComponentFactoryResolver, Input
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { TemplateModel } from './template-model'
import { Tab } from './tab';
import { ComponentList } from './componentListService';

@Component({
  selector: 'vertical-tabs',
  templateUrl: 'vertical-tabs.html',
  styleUrls: [
    './vertical-tabs.css',
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
  ],
  providers: [ComponentList]
})
export class VerticalTabs implements AfterContentInit, OnInit {


  //@ContentChildren(Tab) tabs: QueryList<Tab>;
  //@Input('tabFormGroup') tabFormGroup: FormGroup;
  tabs: Array<any>;
  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef
  form: FormGroup;


  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private componentList: ComponentList) {
    this.form = new FormGroup({});
    this.tabs = new Array<any>();
  }


  ngOnInit(): void {
    this.componentList.getList().forEach((list) => {
     // console.log(list);
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(list.component);
      //console.log(componentFactory);
      //let componentRef = this.target.createComponent(componentFactory,undefined,this.target.injector).instance;
      let componentRef = this.target.createComponent(componentFactory).instance;
      console.log(componentRef);
      componentRef.tabFormGroup = this.form;
      //componentRef.tabFormGroup = this.tabFormGroup;
      componentRef.title = list.title;
      this.tabs.push(componentRef);
      //console.log(componentRef);
    });
  }

  // contentChildren are set
  ngAfterContentInit() {

    // get all active tabs
    let activeTabs = this.tabs.filter((tab) => tab.active);
    console.log('Active Tab');
    console.log(activeTabs.length);
    // if there is no active tab set, activate the first
    //if (activeTabs.length === 0) {
    if (activeTabs.length === 0 && this.tabs.length !== 0) {
      //this.selectTab(this.tabs.first);
      console.log('Select tab Initiated');
      this.selectTab(this.tabs[0]);
    }
  }

  selectTab(tab: any) {
    // deactivate all tabs
    //this.tabs.toArray().forEach(tab => tab.active = false);
    this.tabs.forEach(tab => tab.active = false);

    // activate the tab the user has clicked on.
    tab.active = true;
    //console.log('Active');
    //console.log(tab);
  }

}