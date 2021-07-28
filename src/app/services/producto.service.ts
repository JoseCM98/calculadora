import { Injectable } from '@angular/core';
import { Producto } from '../model/Producto';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/Persona';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  listaPersona: Persona[]=[];
  private urlGet='https://stark-temple-64300.herokuapp.com/api/productos/';
  private urlPost='https://stark-temple-64300.herokuapp.com/api/producto/';
  constructor(private http: HttpClient) { }
  listaProductos(){
    return this.http.get<Producto[]>(this.urlGet);
  }
  agregarProducto(data){
    return this.http.post(this.urlPost,data,{headers: new HttpHeaders({'content-type':'application/json'})});
  }
}
