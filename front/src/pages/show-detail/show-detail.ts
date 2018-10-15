import {Component} from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';
import {ShowService} from '../../providers/show-service-rest';
import {SERVER_URL} from '../../providers/config';

@Component({
    selector: 'page-show-detail',
    templateUrl: 'show-detail.html'
})
export class ShowDetailPage {

    item: any;
    serverUrl: string = SERVER_URL;

    constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public ShowService: ShowService, public toastCtrl: ToastController) {
        this.item = this.navParams.data;
    }


}
