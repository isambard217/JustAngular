import { Injectable } from '@angular/core';

@Injectable()
export class TweetService {

  constructor() { }

  getAll(){
      return [ 
              {
                image : "http://pixel.nymag.com/imgs/daily/vulture/2016/01/07/magazine/08-michael-b-jordan-lede.w750.h560.2x.jpg",
                authorName : "tim",
                twitterHandler : "aadsd",
                totalLike: 0,
                iLike: false
              }, 
              {
                image : "http://pixel.nymag.com/imgs/daily/vulture/2016/01/07/magazine/08-michael-b-jordan-lede.w750.h560.2x.jpg",
                authorName : "tim",
                twitterHandler : "aadsd",
                totalLike: 0,
                iLike: false
              }, 
               {
                image : "http://pixel.nymag.com/imgs/daily/vulture/2016/01/07/magazine/08-michael-b-jordan-lede.w750.h560.2x.jpg",
                authorName : "tim",
                twitterHandler : "aadsd",
                totalLike: 0,
                iLike: false

              }, 
               {
                image : "http://pixel.nymag.com/imgs/daily/vulture/2016/01/07/magazine/08-michael-b-jordan-lede.w750.h560.2x.jpg",
                authorName : "tim",
                twitterHandler : "aadsd",
                totalLike: 0,
                iLike: false
              }, 
       ];

  }

}
