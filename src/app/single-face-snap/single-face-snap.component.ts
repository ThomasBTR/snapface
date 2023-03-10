import {Component, OnInit} from '@angular/core';
import {FaceSnapsService} from "../services/face-snaps.service";
import {FaceSnap} from "../models/face-snap.models";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {


  faceSnap!: FaceSnap;
  buttonText!: string;
  snapText: string = 'Oh Snap!';
  unSnapText: string = 'Oops UnSnap!';
  constructor(private faceSnapService: FaceSnapsService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.buttonText = this.snapText;
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onSnap() {
    if (this.buttonText == this.snapText) {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = this.unSnapText;
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = this.snapText;
    }
  }
}
