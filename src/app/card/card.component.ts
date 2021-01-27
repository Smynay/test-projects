import { Component, Input } from '@angular/core';
import { IPost } from '../storage.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() post: IPost;
  @Input() id: number;
}
