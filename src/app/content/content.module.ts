import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContentComponent} from './content.component';


@NgModule({
 imports: [
    CommonModule
  ],
  declarations: [ContentComponent],
  //providers: [TweetService],
  exports:[ ContentComponent ]

})
export class ContentModule {


}