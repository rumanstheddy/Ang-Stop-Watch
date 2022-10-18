import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StopWatchService {
  @Output() btnClickEvent = new EventEmitter<string>();

  btnClicked(type: string) {
    this.btnClickEvent.emit(type);
  }
}
