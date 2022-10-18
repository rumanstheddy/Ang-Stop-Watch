import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { TimerComponent } from './components/timer/timer.component';
import { StopWatchService } from './services/stop-watch.service';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StopWatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
