import {Component, Input, OnInit} from '@angular/core';
import {FaceSnapsService} from "../services/face-snaps.service";
import {FaceSnap} from "../models/face-snap.models";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit{

  constructor(private faceSnapService: FaceSnapsService) {
  }


  @Input() faceSnap!: FaceSnap;
  buttonText!: string;
  snapText: string = 'Oh Snap!';
  unSnapText: string = 'Oops UnSnap!';

  ngOnInit() {
    this.buttonText = this.snapText;
  }

  onSnap() {
    if(this.buttonText == this.snapText) {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = this.unSnapText;
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = this.snapText;
    }
  }
}
