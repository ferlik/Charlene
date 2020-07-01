import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailAnnonceComponent } from './components/detail-annonce/detail-annonce.component';
import { CreerAnnonceComponent } from './components/creer-annonce/creer-annonce.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: DetailAnnonceComponent},
  { path: 'ajout/message', component: CreerAnnonceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
