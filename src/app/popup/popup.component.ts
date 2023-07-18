import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Output() closePopup: EventEmitter<void> = new EventEmitter<void>();

  handleToggleToast() {
    this.closePopup.emit();
  }
}
