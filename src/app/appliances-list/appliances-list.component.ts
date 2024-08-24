import { Component } from '@angular/core';
import { AppliancesService } from '../appliances.service';
import { APPLIANCES } from '../mock_appliances';
import { CommonModule, UpperCasePipe, DatePipe, CurrencyPipe, PercentPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-appliances-list',
  standalone: true,
  imports: [CommonModule, UpperCasePipe, DatePipe, CurrencyPipe, PercentPipe, NgFor, NgIf],
  templateUrl: './appliances-list.component.html',
  styleUrls: ['./appliances-list.component.css']
})
export class AppliancesListComponent {
  appliances = APPLIANCES;

  constructor(private appliancesService: AppliancesService) {}

  ngOnInit() {
    this.appliances = this.appliancesService.getAppliances();
  }
}
