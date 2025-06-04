import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  exports: [
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatCarouselModule,
    MatGridListModule,
    MatCardModule,
  ]
})
export class AngularMaterialModule { }
