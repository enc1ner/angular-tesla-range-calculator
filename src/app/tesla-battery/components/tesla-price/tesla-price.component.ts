import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { BatteryService } from '../../tesla-battery.service';
@Component({
    selector: 'tesla-prices' ,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="tesla-prices">
            <ul>
            <li *ngFor="let price of prices">
                <p>{{ price }}k</p>
            </li>   
            </ul>
        </div>
    `,
    styleUrls: ['./tesla-price.component.scss'],
})
export class TeslaPriceComponent {
    @Input() prices: string[];
}