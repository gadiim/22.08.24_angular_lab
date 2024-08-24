import { Injectable } from '@angular/core';
import { APPLIANCES } from './mock_appliances';

@Injectable({
  providedIn: 'root'
})
export class AppliancesService {

  constructor() { }
  getAppliances() {
    return APPLIANCES; 
  }
}
