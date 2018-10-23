import {Component} from '@angular/core';
import {Config, NavController} from 'ionic-angular';
import {ShowDetailPage} from '../show-detail/show-detail';
import {WelcomePage} from '../welcome/welcome';
import {SERVER_URL} from '../../providers/config';


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

    constructor(public navCtrl: NavController, public config: Config) {
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
        this.items = [
            {
                
                "name": "Pantalon léopard",
                "image": "https://www.getrended.com/medias/images/4250370591-1571398880.jpg",
                "description": "Pantalon tendance presque",
                "marque":"Zara",
                "taille":"Taille 38",
                "Etat":"Très bon état",
                "couleur":"jaune et noir",
                "prix":"5€",
            },
            {
                "name": "Robe à paillettes",
                "image": "https://fashion-day.fr/413-thickbox/robe-a-paillette-pas-cher-moulante-courte-avec-motifs-geometriques.jpg",
                "description": "Pour faire des folies en soirée",
                "marque":"H&M",
                "taille":"Taille 2",
                "Etat":"Neuf",
                "couleur":"argenté",
                "prix":"6€",
            },
            {
                "name": "Robe fashion en cuir",
                "image": "https://fashion-clubwear.fr/wp-content/uploads/Robe-en-cuir-noir-zara0.jpg",
                "description": "Superbe robe en cuir",
                "marque":"Maje",
                "taille":"Taille 3",
                "Etat":"Bon état",
                "couleur":"noir",
                "prix":"10€",
            },
            {
                "name": "Robe de Gala rouge",
                "image": "https://img.shein.com/images/shein.com/201512/1451039154291053812_im_900x1199.jpg",
                "description": "Robe cocktail",
                "marque":"Sandro",
                "taille":"Taille S",
                "Etat":"Très Bon état",
                "couleur":"rouge",
                "prix":"15€",
            },
            {
                "name": "Chapeau vintage",
                "image": "https://i.pinimg.com/736x/96/f3/af/96f3afce05432edc8294e325b0946f34--comment-streetstyle.jpg",
                "description": "Chapeau type Audrey Hepburn",
                "marque":"Channel",
                "taille":"Taille 56",
                "Etat":"Très Bon état",
                "couleur":"noir",
                "prix":"17€",
            },
            {
                "name": "Bottes vernis stylish",
                "image":"https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1497840306/475831_BNC00_1000_002_088_0000_Light-Bottines-en-cuir-verni-avec-abeille.jpg",
                "description": "Talons hauts",
                "marque":"Gucci",
                "taille":"Taille 40",
                "Etat":"Bon état",
                "couleur":"noir",
                "prix":"25€",
            },
            {
                "name": "Sac Kloé the Kooples rouge",
                "image":"https://media1.popsugar-assets.com/files/thumbor/hV_bpOqg5OCHAy91QZuPE0W5QcE/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2017/07/11/486/n/38922771/148c80fb5964ab1c441e70.91666462_edit_img_cover_file_17648066_1499769276/i/Emily-Ratajkowski-x-Kooples.jpg",
                "description": "",
                "marque":"The kooples",
                "taille":"Taille medium",
                "Etat":"Neuf",
                "couleur":"rouge",
                "prix":"20€",
            },
            {
                "name": "Manteau beige nude",
                "image":"https://fr.sandro-paris.com/dw/image/v2/AAON_PRD/on/demandware.static/-/Sites-sandro-catalog-master-H13/default/dw89df7ae9/images/h13/Sandro_M9608E-17_V_1.jpg",
                "description": "type trench",
                "marque":"Gap",
                "taille":"Taille 42",
                "Etat":"Neuf",
                "couleur":"beige",
                "prix":"30€",
            },
            {
                "name": "Top pour les soirées d'été",
                "image":"https://i.pinimg.com/originals/b8/38/45/b8384543c053fcf00a17118e233f6a1e.jpg",
                "description": "Super qualité",
                "marque":"Zara",
                "taille":"Taille XS",
                "Etat":"Bon état",
                "couleur":"doré",
                "prix":"6€",
            },
            {
                "name": "Short Blanc tendance",
                "image":"http://www.lacerff.fr/image/cache/data/category_8/armani-exchange-white-short-femme-shorts-vetements-femme-d7emgov08-1229-700x850.jpg",
                "description": "qualité légère",
                "marque":"Sandro",
                "taille":"Taille L",
                "Etat":"Très bon état",
                "couleur":"blanc",
                "prix":"4€",
            },
        ];
        this.itemsForSearch = this.items;
    }



}
