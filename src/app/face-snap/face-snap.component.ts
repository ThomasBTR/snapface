import {Component, Input, OnInit} from '@angular/core';
import * as url from "url";
import {FaceSnap} from "../models/face-snap.models";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  @Input() faceSnap!: FaceSnap;
  buttonText!: string;
  snapText: string = 'Oh Snap!';
  unSnapText: string = 'Oops UnSnap!';

  ngOnInit() {
    this.buttonText = this.snapText;
  }

  onSnap() {
    if(this.buttonText == this.snapText) {
      this.faceSnap.snaps++;
      this.buttonText = this.unSnapText;
    } else {
      this.faceSnap.snaps--;
      this.buttonText = this.snapText;
    }
  }
}
