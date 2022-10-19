import { Component, OnInit, Input } from '@angular/core';
import { StopWatchService } from 'src/app/services/stop-watch.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() icon_type: string = '';
  // stopWatchService: StopWatchService = new StopWatchService;

  constructor(private stopWatchService: StopWatchService) {}

  ngOnInit(): void {}

  public handleStartBtn() {
    this.stopWatchService.btnClicked("start");
  }

  public handlePauseBtn() {
    this.stopWatchService.btnClicked("pause");
  }

  public handleResetBtn() {
    this.stopWatchService.btnClicked("reset");
  }
}
