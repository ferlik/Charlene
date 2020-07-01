import { Component, OnInit } from '@angular/core';
import { CharleneService } from 'src/app/services/charlene.service';
import { ToastrService } from 'ngx-toastr';
import { Annonce } from 'src/app/models/objet';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modif-annonce',
  templateUrl: './modif-annonce.component.html',
  styleUrls: ['./modif-annonce.component.css']
})
export class ModifAnnonceComponent implements OnInit {

  constructor(private service : CharleneService,private toastr: ToastrService,private router:Router, private activatedRoute: ActivatedRoute) { }
  annonce : Annonce;
  isLoading: boolean;

  ngOnInit(): void {
    this.isLoading = true;
    this.service.getOneAnnonce(parseInt(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe((data: Annonce) => {
      this.annonce = data;
      this.isLoading = false;
    });

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
