import {Component, Input} from '@angular/core';
import {FaceSnapListComponent} from "../face-snap-list/face-snap-list.component";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {


  constructor(private router: Router){
  }

  onClick(){
    return this.router.navigateByUrl('facesnaps');
  }


}
