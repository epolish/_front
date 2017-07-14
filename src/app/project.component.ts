import { Component, ComponentRef } from '@angular/core';
import { ViewChild, ViewContainerRef } from '@angular/core';

import { AppSettings } from './app-settings';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent  {
  title: String = 'New Project';
  projectCmpRef: ComponentRef<ProjectComponent>;
  iconPath = AppSettings.TEMPLATE_FOLDER + 'image/icons/';
  listOne: Array<string> = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];
  
  deleteProject() {
    if (this.projectCmpRef) {
        this.projectCmpRef.destroy();
    }
  }
  
  updateProjectTitle() {
  }
  
  createTask() {
    
  }
  deleteTask(source) {
    this.listOne = this.listOne.filter(item => item !== source);
  }
  updateTask() {
    
  }
  droppedSuccess() {
    console.log('dropped');
  }
}