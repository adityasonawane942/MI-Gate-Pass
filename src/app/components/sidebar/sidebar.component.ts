import { Component, OnInit, NgZone } from "@angular/core";
import { LocaldataService } from '../../pages/login/localdata.service';
import { Router, ActivatedRoute } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Previous Passes",
    rtlTitle: "لوحة القيادة",
    icon: "icon-align-center",
    class: ""
  },
  {
    path: "/icons",
    title: "User Profile",
    rtlTitle: "الرموز",
    icon: "icon-single-02",
    class: ""
  },
  // {
  //   path: "/maps",
  //   title: "Maps",
  //   rtlTitle: "خرائط",
  //   icon: "icon-pin",
  //   class: "" },
  // {
  //   path: "/notifications",
  //   title: "Notifications",
  //   rtlTitle: "إخطارات",
  //   icon: "icon-bell-55",
  //   class: ""
  // },

  {
    path: "/user",
    title: "New Gate Pass",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-notes",
    class: ""
  },
  // {
  //   path: "/tables",
  //   title: "Table List",
  //   rtlTitle: "قائمة الجدول",
  //   icon: "icon-puzzle-10",
  //   class: ""
  // },
  // {
  //   path: "/typography",
  //   title: "Typography",
  //   rtlTitle: "طباعة",
  //   icon: "icon-chart-pie-36",
  //   class: ""
  // },
  // {
  //   path: "/rtl",
  //   title: "RTL Support",
  //   rtlTitle: "ار تي ال",
  //   icon: "icon-world",
  //   class: ""
  // }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(
    private transfereService:LocaldataService,
    private _ngZone: NgZone,
    private router: Router,
  ) {}

  ngOnInit() {
    if(localStorage.getItem("jdata")===null){ 
      this._ngZone.run(() => this.router.navigate([''] ));
    }
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
