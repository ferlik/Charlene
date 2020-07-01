import { Injectable } from '@angular/core';
import { Annonce } from '../models/objet';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class CharleneService {

  annonces = [
    new Annonce (1,"Pour Charlène","tu vas nous manquer","/assets/images/espace.jpg",new Date),
    new Annonce (2,"Merci Charlène","Merci de nous avoir donné cette oportunité chez humanbosster","/assets/images/2.jpg",new Date)
  ]

  apiURL = 'http://localhost:3000/charlene-message';
    httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient ) {
    this.annonces = [];
   }


handleError(error) {
  let errorMessage ='';
  if (error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else {
    errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
};

getAnnonce(): Observable<Annonce[]> {
  return this.http.get<Annonce[]>(this.apiURL)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}
getOneAnnonce(id: number): Observable<Annonce> {
  return this.http.get<Annonce>(this.apiURL + '/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
}

ajoutMessage(planet: Annonce): Observable<Annonce> {
  return this.http.post<Annonce>(this.apiURL, planet, this.httpOptions).pipe(retry(1),
    catchError(this.handleError)
  );
}
deleteAnnonce(id:number) : Observable<Annonce> {
  return this.http.delete<Annonce>(this.apiURL + '/' + id).pipe(retry(1),
  catchError(this.handleError));
}


}
