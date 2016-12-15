import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'tesla-car',
    template: `
    <div class="tesla-car">
        <div class="tesla-wheels">
            <div class="tesla-wheel tesla-wheel--front tesla-wheel--{{ wheelsize }}"></div>
            <div class="tesla-wheel tesla-wheel--rear tesla-wheel--{{ wheelsize }}"></div>
        </div>
    </div>
    `,
    styleUrls: ['./tesla-car.component.scss']
})
export class TeslaCarComponent {
    @Input() wheelsize: number;
    constructor() { }
}