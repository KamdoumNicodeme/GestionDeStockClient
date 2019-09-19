import {Component, Input, OnInit} from '@angular/core';
import {ProduitService} from './produit.service';
import {Produit} from '../shared/produit';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  produits: Produit[];
  operation = 'add';
  selectedProduit: Produit;

  @Input()
  produitForm: FormGroup;
  constructor(private produitservice: ProduitService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.iniProduit();
    this.loadProduit();
  }
  createForm() {
      this.produitForm = this.fb.group({
          ref: ['', Validators.required],
          quantite: '',
          prixUnitaire: ''
      });
  }

  loadProduit() {
    this.produitservice.getProduits().subscribe(
        data => {this.produits = data},
        error1 => {console.log('An error was occured')},
        () => {console.log('loadning produit was done')}

    );

  }
    addProduit() {
        const p = this.produitForm.value;
        this.produitservice.addProduit(p).subscribe(
            res => {
              this.iniProduit();
              this.loadProduit();
            }
        );
    }

    updateProduit() {
      this.produitservice.updateProduit(this.selectedProduit)
          .subscribe(
              res =>  {
                this.iniProduit();
                this.loadProduit();
              }
          );
    }

    iniProduit() {
    this.selectedProduit = new Produit();
    this.createForm();
    }

}
