import { Injectable } from '@angular/core';

export interface IPost {
  title: string;
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  _storage: IPost[] = [
    { title: 'Пост 1', text: 'Контент поста 1' },
    { title: 'Пост 2. Невероятно большой заголовок', text: 'Контент поста 2' },
    {
      title: 'Пост 3',
      text:
        'Контент поста 3. Огромный лонгрид. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae omnis ipsa sequi sed aliquam eius ipsum, at labore exercitationem harum? Doloribus voluptatum voluptatem assumenda quas vel cupiditate veritatis sapiente, ea error eum obcaecati recusandae possimus deserunt ut suscipit consequuntur.',
    },
    { title: 'Пост 4', text: 'Контент поста 4' },
    { title: 'Пост 5', text: 'Контент поста 5' },
    { title: 'Пост 6. Невероятно большой заголовок', text: 'Контент поста 6' },
    {
      title: 'Пост 7',
      text:
        'Контент поста 7. Огромный лонгрид. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae omnis ipsa sequi sed aliquam eius ipsum, at labore exercitationem harum? Doloribus voluptatum voluptatem assumenda quas vel cupiditate veritatis sapiente, ea error eum obcaecati recusandae possimus deserunt ut suscipit consequuntur.',
    },
    { title: 'Пост 8', text: 'Контент поста 8' },
    { title: 'Пост 9', text: 'Контент поста 9' },
    {
      title: 'Пост 10. Невероятно большой заголовок',
      text: 'Контент поста 10',
    },
    { title: 'Пост 11', text: 'Контент поста 11' },
    { title: 'Пост 12', text: 'Контент поста 12' },
    {
      title: 'Пост 13. Невероятно большой заголовок',
      text: 'Контент поста 13',
    },
  ];

  getStorage() {
    return this._storage;
  }

  setStorage(value) {
    this._storage = value;
  }
}
