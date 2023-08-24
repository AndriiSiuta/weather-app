import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {CardComponent} from '@ui-kit/card/card.component';
import {JsonPipe, NgForOf, NgIf, NgSwitch, NgSwitchCase} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [
    RouterLink,
    RouterLinkActive,
    NgIf,
    NgForOf,
    JsonPipe,
    FontAwesomeModule,
    NgSwitch,
    NgSwitchCase,
  ],
  exports: [HeaderComponent, CardComponent],
  declarations: [HeaderComponent, CardComponent, ButtonComponent],
})
export class UiKitModule {}
