import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BatteryModule } from './tesla-battery/tesla-battery.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BatteryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
