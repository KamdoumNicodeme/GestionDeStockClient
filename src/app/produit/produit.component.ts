import { Component, OnInit } from '@angular/core';
import {ProduitMockService} from './produit.mock.service';
import {Produit} from '../shared/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  produits: Produit[];
  constructor(private produitservice: ProduitMockService) { }

  ngOnInit() {
    this.produits = this.produitservice.getProduits();
  }

}
