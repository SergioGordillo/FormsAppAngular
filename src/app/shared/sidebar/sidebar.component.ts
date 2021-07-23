import { Component} from '@angular/core';

interface SidebarItem {
  text: string,
  route: string
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [`
    li{
      cursor: pointer;
    }
  `
  ]
})
export class SidebarComponent{

  templateSidebar:SidebarItem[]=[
    {
      text: "Basics",
      route: "./template/basics"
    }, 
    {
      text: "Dynamics",
      route: "./template/dynamics"
    }, 
    {
      text: "Switches",
      route: "./template/switches"
    }
  ];

  reactiveSidebar:SidebarItem[]=[
    {
      text: "Basics",
      route: "./reactive/basics"
    }, 
    {
      text: "Dynamics",
      route: "./reactive/dynamics"
    }, 
    {
      text: "Switches",
      route: "./reactive/switches"
    }
  ];

  constructor() { }




}
