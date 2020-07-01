import { Component, OnInit } from '@angular/core';
import { CharleneService } from 'src/app/services/charlene.service';
import { ToastrService } from 'ngx-toastr';
import { Annonce } from 'src/app/models/objet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modif-annonce',
  templateUrl: './modif-annonce.component.html',
  styleUrls: ['./modif-annonce.component.css']
})
export class ModifAnnonceComponent implements OnInit {

  constructor(private service : CharleneService,private toastr: ToastrService,private router:Router) { }
  annonce : Annonce;
  isLoading: boolean;

  ngOnInit(): void {
  }

  modifMessage(): void {
    this.isLoading = true;
    this.service.mofifMessage(this.annonce).subscribe(then => {
      this.isLoading = false;
      this.router.navigate(['/home']); // Redirection de l'utilisateur
      this.toastr.success("Le message à bien été modifiée !"); // On affiche une notification
    })
  }

}
