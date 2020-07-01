import { Component, OnInit } from '@angular/core';
import { CharleneService } from 'src/app/services/charlene.service';
import { Annonce } from 'src/app/models/objet';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-creer-annonce',
  templateUrl: './creer-annonce.component.html',
  styleUrls: ['./creer-annonce.component.css']
})
export class CreerAnnonceComponent implements OnInit {
  annonce: Annonce;

  isLoading : boolean;

  constructor(private charlenService : CharleneService,private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.annonce= new Annonce();
  }
  ngSubmit(): void {
    this.charlenService.ajoutMessage(this.annonce).subscribe(then => {
      this.router.navigate(['/home']);
      this.toastr.success("Le message a bien été ajouté !");
    });
  }

}
