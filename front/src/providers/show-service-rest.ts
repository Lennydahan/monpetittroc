import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {SERVER_URL} from './config';
import 'rxjs/Rx';

let showsURL = SERVER_URL + 'shows/';

@Injectable()
export class ShowService {
  favorites: Array<any> = [];

  items: Array<any> = [];
  
  constructor(public http: Http) {
        this.http = http;
        this.items = [
            {
                
                "name": "Pantalon léopard",
                "image": "https://www.getrended.com/medias/images/4250370591-1571398880.jpg",
                "description": "Pantalon tendance et confortable",
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
        
    }

    findAll() {
        return this.items.slice();
    }

    addItem(item) {
        this.items.push(item);
    }

    findById(id) {
        return this.http.get(showsURL + id)
            .map(res => res.json())
            .toPromise();
    }

    getFavorites() {
        return Promise.resolve(this.favorites);
    }

    canFavorite(show) {
        console.log(show);
        console.log(this.favorites);
        return this.favorites.map(s => s._id).indexOf(show._id) === -1;
    }

    favorite(show) {
        this.favorites.push(show);
        return Promise.resolve();
    }

    unfavorite(show) {
        let index = this.favorites.map(s => s._id).indexOf(show._id);
        if (index > -1) {
          this.favorites.splice(index, 1);
        }
        return Promise.resolve();
    }
}