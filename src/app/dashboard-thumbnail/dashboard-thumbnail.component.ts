// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dashboard-thumbnail',
//   templateUrl: './dashboard-thumbnail.component.html',
//   styleUrls: ['./dashboard-thumbnail.component.scss']
// })
// export class DashboardThumbnailComponent {

// }

import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

declare let $: any;

@Component({
  selector: 'app-dashboard-thumbnail',
  templateUrl: './dashboard-thumbnail.component.html',
  styleUrls: ['./dashboard-thumbnail.component.scss']
})
export class DashboardThumbnailComponent implements AfterViewInit {

  @ViewChild('thumbnail') thumbnail: any;
  @Input("dashboardId") dashboardId: string = "";

  constructor(private http: HttpClient) { }
  
 // https://reveal-api.azurewebsites.net

  ngAfterViewInit(): void {
    this.http.get('https://reveal-api.azurewebsites.net/dashboards/' + this.dashboardId + '/thumbnail').subscribe((data: any) => {
      let thumbnailView = new $.ig.RevealDashboardThumbnailView(this.thumbnail.nativeElement);
      thumbnailView.dashboardInfo = data.info;
    });
  }
}
