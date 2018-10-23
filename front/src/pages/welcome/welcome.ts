import {Component, ViewChild} from '@angular/core';
import { Slides, NavController } from 'ionic-angular';
import {ShowListPage} from '../show-list/show-list';
import { ShowService } from '../../providers/show-service-rest';

@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html'
})
export class WelcomePage {
  @ViewChild(Slides) slides: Slides;

    name: string;
    description: string;

    constructor(public navCtrl: NavController, public service: ShowService) {
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
}