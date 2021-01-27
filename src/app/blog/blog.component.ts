import { Component, OnInit } from '@angular/core';
import { IPost, StorageService } from '../storage.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  posts: IPost[] = [];

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.posts = this.storageService.getStorage();
  }
}
