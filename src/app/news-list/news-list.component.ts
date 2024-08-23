import { Component } from '@angular/core';
import { NewsService } from '../news.service';
import { NEWS } from '../mock-news';
import { UpperCasePipe, DatePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [NgFor, UpperCasePipe, DatePipe],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent {
  news = NEWS;
  constructor(private newsService: NewsService) {}
  ngOnInit() {
    this.news = this.newsService.getNews()
  }
}
