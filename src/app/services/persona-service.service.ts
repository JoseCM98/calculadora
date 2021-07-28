import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/Persona';
@Injectable({
  providedIn: 'root'
})
export class PersonaServiceService {

  private url = 'https://spring-application-heroku.herokuapp.com/api/personas';
  constructor(private http: HttpClient) { }

  listaPersonas(){
    return this.http.get<Persona[]>(this.url);
  }
}
