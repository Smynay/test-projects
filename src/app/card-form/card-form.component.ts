import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost, StorageService } from '../storage.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent implements OnInit {
  title: string = 'Title записи';
  text: string = 'Text записи';

  postId: number;
  store: IPost[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.store = this.storageService.getStorage();

    this.route.params.subscribe(
      (params) =>
        (this.postId =
          params.id < this.store.length ? params.id : this.store.length)
    );

    if (this.store[this.postId]) {
      this.title = this.store[this.postId].title;
      this.text = this.store[this.postId].text;
    }
  }

  changeHandler({ target }, field) {
    this[field] = target.value;
  }

  deleteHandler() {
    if (confirm('Действительно удалить пост?')) {
      this.store.splice(this.postId, 1);
      this.storageService.setStorage([...this.store]);
      this.router.navigate(['']);
    }
  }

  saveHandler() {
    this.store[this.postId] = {
      title: this.title.trim(),
      text: this.text.trim(),
    };

    this.storageService.setStorage([...this.store]);

    alert('Пост успешно сохранен');

    this.router.navigate(['post', this.postId]);
  }
}
