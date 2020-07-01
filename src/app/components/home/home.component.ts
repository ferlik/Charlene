import { Component, OnInit } from '@angular/core';
import { CharleneService } from 'src/app/services/charlene.service';
import { Annonce } from 'src/app/models/objet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  annonces : Annonce[];
  constructor(private charleneService : CharleneService) { }

  isLoading: boolean;

  ngOnInit(): void {


    this.isLoading = true;
    this.charleneService.getAnnonce().subscribe((data: Annonce[]) => {
      this.annonces = data;
      this.isLoading= false;
  });
}

}
