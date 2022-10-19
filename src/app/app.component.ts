import { Component, ViewChild } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { StopWatchService } from './services/stop-watch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title_start: string = 'Stop';
  title_end: string = 'Watch';
  constructor(private stopWatchService: StopWatchService) {}
  @ViewChild(ButtonComponent, { static: true })
  buttonCmpt: ButtonComponent = new ButtonComponent(this.stopWatchService);

  public start() {
    this.buttonCmpt.handleStartBtn();
  }

  public pause() {
    this.buttonCmpt.handlePauseBtn();
  }

  public reset() {
    this.buttonCmpt.handleResetBtn();
  }
}
