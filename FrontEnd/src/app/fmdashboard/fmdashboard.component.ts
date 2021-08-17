import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FmdashboardService } from './service/fmdashboard.service';

export type totalDataDevice={
  TotalDeviceCount:Number
  ReportingCount:Number
  PacketACount:Number
  PacketVCount:Number
  NRDCount:Number
  NDCount:Number
}

export type totalDeviceType={
  DeviceType:String
  TotalDeviceCount:Number
  ReportingCount:Number
  PacketACount:Number
  PacketVCount:Number
  NRDCount:Number
  NDCount:Number
}

@Component({
  selector: 'app-fmdashboard',
  templateUrl: './fmdashboard.component.html',
  styleUrls: ['./fmdashboard.component.css']
})
export class FmdashboardComponent implements OnInit {
  public entries= [];
  public entries1:Object= [];
  public totalData:totalDataDevice
  public dataofSNM476:totalDeviceType
  public dataofTAP66:totalDeviceType
  public dataofTAP76:totalDeviceType
  loadingFlag = true;
  constructor(private router: Router, private FmdashboardService : FmdashboardService) { }

  ngOnInit(): void {

    this.FmdashboardService.totalDeviceCount().subscribe(
      data => { 
        this.entries = data;          
  function* entries(obj) {
    for (let key of Object.keys(obj)) {
      yield [key, obj[key]];
    }
 }

 for (let [key1, value1] of entries(this.entries)) {
 
    if(key1 == 'result'){
     this.totalData = value1[0];
    }

  }
  this.loadingFlag = false
 }) 

 this.FmdashboardService.deviceTypeCount().subscribe(
  data => { 
    this.entries1 = data;          
    function* entries1(obj) {
      for (let key of Object.keys(obj)) {
        yield [key, obj[key]];
      }
    }  
    for (let [key1, value1] of entries1(this.entries1)) {
 
      if(key1 == 'result'){
        this.dataofSNM476 = value1[1]
        this.dataofTAP66 = value1[2]
        this.dataofTAP76 = value1[3]
      }
  
    }
  })

}

  dash(){
    this.router.navigate(['dashboard']);
  }
  menu(){
    this.router.navigate(['Firmware']);
  }
}
