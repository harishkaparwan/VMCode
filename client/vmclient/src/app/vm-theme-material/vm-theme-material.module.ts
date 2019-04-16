import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatButtonModule,MatCardModule,MatDividerModule,MatCheckboxModule,MatFormFieldModule,MatInputModule,MatTabsModule, MatCheckboxModule,MatListModule,MatTableModule,MatGridListModule,MatIconModule
  ],
  exports: [MatButtonModule,MatTabsModule,MatCardModule,MatDividerModule,MatCheckboxModule, MatFormFieldModule,MatInputModule,MatCheckboxModule,MatListModule,MatTableModule,MatGridListModule,MatIconModule]
})
export class VmThemeMaterialModule { }
