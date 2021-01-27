import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() danger: true | false = false;
  @Input() stretch: true | false = false;
  @Input() large: true | false = false;
  @Input() label = 'Unlabled';
}
