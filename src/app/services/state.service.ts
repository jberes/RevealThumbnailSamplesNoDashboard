import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public dashboardServer: string = 'https://reveal-api.azurewebsites.net';
}
