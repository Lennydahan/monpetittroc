import {Component, ViewChild} from '@angular/core';
import { Slides, NavController } from 'ionic-angular';
import {UserService} from "../../providers/user-service-rest";
import {ShowListPage} from "../show-list/show-list";

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
  @ViewChild(Slides) slides: Slides;

    identifier: string = "";
    password: string = "";
    errorDescription: any = { message: '' };

    constructor(public navCtrl: NavController, public userService: UserService) {
    }

    ngAfterViewInit() {
        let jwt = window.localStorage.getItem('jwt');
        if (jwt) {
            this.navCtrl.setRoot(ShowListPage);
        }
    }

    login() {
        let navCtrl = this.navCtrl;
        let errorDescription = this.errorDescription;
        var logins =  {
            'maria': 'password', 
            'user': '123',  
        };
        if (logins[this.identifier] === this.password) {
            localStorage.setItem('jwt', this.identifier);
            navCtrl.setRoot(ShowListPage);
        } else {
            errorDescription.message = 'Mauvais mot de passe';
        }


  
    }

}