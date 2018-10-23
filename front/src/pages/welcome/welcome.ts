import {Component, ViewChild} from '@angular/core';
import { Slides, NavController } from 'ionic-angular';
import {ShowListPage} from '../show-list/show-list';
import { ShowService } from '../../providers/show-service-rest';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html'
})
export class WelcomePage {
  @ViewChild(Slides) slides: Slides;

    public image : string = ""; //"https://images.unsplash.com/photo-1526481882315-f92713d01182?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=55a9d78ac1298e9562f94be5df17a766&auto=format&fit=crop&w=700&q=60";

    name: string;
    description: string;

    constructor(public navCtrl: NavController, public service: ShowService, public camera: Camera) {
    }

    ngAfterViewInit() {
      this.slides.pager = true;
    }

    addItem() {
        var newItem = {
            "name": this.name,
            "description": this.description,
        };
        this.service.addItem(newItem);
        this.navCtrl.setRoot(ShowListPage);
    }
    
    takePhoto() {
        const options : CameraOptions = {
          quality: 50, // picture quality
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
        }
        this.camera.getPicture(options).then((imageData) => {
            this.image = "data:image/jpeg;base64," + imageData;
            console.log(this.image);
          }, (err) => {
            console.log(err);
          });
    }

}