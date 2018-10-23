import {Component} from '@angular/core';
import {Config, NavController} from 'ionic-angular';
import {ShowDetailPage} from '../show-detail/show-detail';
import {WelcomePage} from '../welcome/welcome';
import {SERVER_URL} from '../../providers/config';
import { ShowService } from '../../providers/show-service-rest';


@Component({
    selector: 'page-show-list',
    templateUrl: 'show-list.html'
})
export class ShowListPage {

    items: Array<any>;
    itemsForSearch: Array<any>;
    searchKey: string = "";
    viewMode: string = "list";
    map;
    markersGroup;
    serverUrl = SERVER_URL;

    constructor(public navCtrl: NavController, public config: Config, public service: ShowService) {
        this.findAll();
    }

    openShowDetail(item: any) {
        this.navCtrl.push(ShowDetailPage, item);
    }
    openAddPage() {
        this.navCtrl.push(WelcomePage);
    }
    onInput(event) {
         // Reset items back to all of the items
        this.items = this.itemsForSearch;

        // set val to the value of the searchbar
        let val = this.searchKey;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
          this.items = this.items.filter((item) => {
            return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
        }
    }

    onCancel(event) {
        this.findAll();
    }

    findAll() {
        this.items = this.service.findAll();
        this.itemsForSearch = this.items;
    }



}
