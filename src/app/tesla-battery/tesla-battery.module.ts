import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TeslaBatteryComponent } from './containers/tesla-battery/tesla-battery.component';
//services 
import { TeslaCarComponent } from './components/tesla-car/tesla-car.component';
import { BatteryService } from './tesla-battery.service';
import { TeslaStatsComponent } from './components/tesla-stats/tesla-stats.component';
import { TeslaCounterComponent } from './components/tesla-counter/tesla-counter.component';
import { TeslaClimateComponent } from './components/tesla-climate/tesla-climate.component';
import { TeslaWheelsComponent } from './components/tesla-wheels/tesla-wheels.component';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        TeslaBatteryComponent
    ],
    declarations: [
        TeslaBatteryComponent,
        TeslaCarComponent,
        TeslaStatsComponent,
        TeslaCounterComponent,
        TeslaClimateComponent,
        TeslaWheelsComponent
    ],
    providers: [
        BatteryService
    ],
})
export class BatteryModule { }
