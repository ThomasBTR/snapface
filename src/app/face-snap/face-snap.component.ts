import {Component, Input, OnInit} from '@angular/core';
import * as url from "url";
import {FaceSnap} from "../models/face-snap.models";
import {FaceSnapsService} from "../services/face-snaps.service";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

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
