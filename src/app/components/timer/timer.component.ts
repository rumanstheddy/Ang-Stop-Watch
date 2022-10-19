import { Component, OnInit } from '@angular/core';
import { StopWatchService } from 'src/app/services/stop-watch.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  constructor(private stopWatchService: StopWatchService) {}
  ngOnInit(): void {
    this.stopWatchService.btnClickEvent.subscribe((type: string) => {
      this.handleTimer(type);
    });
  }

  millis: number = 0;
  seconds: number = 0;
  interval: number = 0;

  millisStr: string = '00';
  secondsStr: string = '00';

  handleTimer(type: string): void {
    switch (type) {
      case 'start':
        this.start();
        break;
      case 'pause':
        this.pause();
        break;
      case 'reset':
        this.reset();
        break;
    }
  }

  startTimer(): void {
    this.millis++;
    let millis = this.millis;

    if (millis <= 9) {
      this.millisStr = '0' + millis;
    }

    if (millis > 9) {
      this.millisStr = '' + millis;
    }

    if (millis > 99) {
      this.seconds++;
      this.secondsStr = '0' + this.seconds;
      this.millis = 0;
      this.millisStr = '0' + this.millis;
    }

    if (this.seconds > 9) {
      this.secondsStr = '' + this.seconds;
    }
  }

  start(): void {
    console.log('start');
    clearInterval(this.interval);
    this.interval = window.setInterval(() => {
      this.startTimer();
    }, 10);
    console.log(this.interval);
  }

  pause(): void {
    console.log('pause');
    clearInterval(this.interval);
    console.log(this.interval);
  }

  reset(): void {
    console.log('reset');
    clearInterval(this.interval);
    this.millisStr = '00';
    this.secondsStr = '00';
    this.millis = 0;
    this.seconds = 0;
  }
}
