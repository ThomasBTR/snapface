import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "./models/face-snap.models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = [
      {
        title: 'Claudia',
        description: 'Ma bae d amour',
        createdDate: new Date(),
        snaps: 255,
        imgUrl: 'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.6435-9/169185480_10225983722519111_5188835246674514950_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=bkwj5gsc_wEAX_O2C0s&tn=HmcuayBm41Tpd4gf&_nc_ht=scontent-cdg2-1.xx&oh=00_AfCvX6aWYYIIsBtD4t3jsFmN90vtztUaooU_gZwWb5_Gcg&oe=63E8ADC1',
        location: 'Paris'
      },
      {
        title: 'Martin \'Ash\'',
        description: 'Mon frr le bg',
        createdDate: new Date(),
        snaps: 0,
        imgUrl: 'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.18169-9/1535430_10207377662028119_5173135745907040065_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=DfdGF0R5pdkAX_4C4-k&_nc_ht=scontent-cdg2-1.xx&oh=00_AfDMdeuhrj8klcwEfjbKO54AJiZHzyExLRqBBTYcGxSyIQ&oe=63E8FF74'
      }
    ]
  }
}
