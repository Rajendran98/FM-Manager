

import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FmdashboardService {
  constructor(private http: HttpClient,
    private _router: Router) { }

    totalDeviceCount() {
      return this.http.get<any>(`${environment._fwdashboard}`).pipe(map(user => {
       
        return user;
    }));
    }

    deviceTypeCount() {
      return this.http.get<any>(`${environment._fwdashboardDeviceType}`).pipe(map(user => {
       
        return user;
    }));
    }
}
