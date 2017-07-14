import { Component, ComponentRef, ComponentFactory, ComponentFactoryResolver } from '@angular/core';
import { ViewChild, ViewContainerRef } from '@angular/core';

import { ProjectComponent } from './project.component';

import { AppSettings } from './app-settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: String = 'simple todo lists';
  subTitle: String = 'from ruby garage';
  copyright: String = 'Ruby Garage';
  imagePath = AppSettings.TEMPLATE_FOLDER + 'image/';

  @ViewChild('projectContainer', { read: ViewContainerRef }) projectContainer: ViewContainerRef;
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
  
  addProject() {
    const componentFactory: ComponentFactory<ProjectComponent> = this.componentFactoryResolver.resolveComponentFactory(ProjectComponent);
    let componentReference: ComponentRef<ProjectComponent> = this.projectContainer.createComponent(componentFactory);
    componentReference.instance.projectCmpRef = componentReference;
  }
}