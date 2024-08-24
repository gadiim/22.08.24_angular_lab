import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { AppliancesListComponent } from './appliances-list/appliances-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewsListComponent, AppliancesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '22.08.24_pipes';
}
