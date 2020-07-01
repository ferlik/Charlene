import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharleneService } from 'src/app/services/charlene.service';
import { Annonce } from 'src/app/models/objet';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-annonce',
  templateUrl: './detail-annonce.component.html',
  styleUrls: ['./detail-annonce.component.css']
})
export class DetailAnnonceComponent implements OnInit {

  annonces: Annonce;
  annonce: Annonce[];

  constructor(private route: ActivatedRoute, private Service: CharleneService, private toto: ToastrService ) { }

  isLoading: boolean;

  ngOnInit(): void {

    this.isLoading = true;
    this.Service.getOneAnnonce(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe((data:
      Annonce) => {
      this.annonces = data;
      this.isLoading = false;
    });
   }
   deleteAnnonce(id: number): void {
  this.isLoading = true;
  this.Service.deleteAnnonce(id).subscribe(then => {
    this.Service.getAnnonce().subscribe((data: Annonce[]) => {
      this.annonce = data;
      this.isLoading = false;
      this.toto.error("Le message à été supprimée !"); //on affiche la notification
    });
  })
}



}
