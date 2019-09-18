import {Produit} from '../shared/produit';
import {Injectable} from '@angular/core';

@Injectable()
export class ProduitMockService {
   private PRODUITS: Produit[] = [];

    constructor()  {
        const p1: Produit = new Produit('PC GAMING', 20, 75000);
        const p2: Produit = new Produit('HP PRO BOOK', 10, 450000);
        const p3: Produit = new Produit('MAC BOOK ', 46, 1700000);
        const p4: Produit = new Produit('ECRAN UHD', 39, 555000);

        this.PRODUITS.push(p1);
        this.PRODUITS.push(p2);
        this.PRODUITS.push(p3);
        this.PRODUITS.push(p4);
    }
public getProduits(): Produit[] {
        return this.PRODUITS;
}





}
