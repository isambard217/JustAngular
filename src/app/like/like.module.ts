import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LikeComponent} from '../../app/like/like.component';

@NgModule({

    imports: [
    CommonModule
  ],
  declarations: [LikeComponent],
  //providers: [TweetService],
  exports:[ LikeComponent ]

})
export class LikeModule
{

}