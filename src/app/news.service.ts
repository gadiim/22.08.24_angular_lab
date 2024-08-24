import { Injectable } from '@angular/core';
import { NEWS } from './mock-news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }
  getNews() {
    return NEWS; 
  }
}
