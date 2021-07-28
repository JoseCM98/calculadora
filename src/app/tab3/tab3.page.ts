import { Component } from '@angular/core';
import { PersonaServiceService } from '../services/persona-service.service';
import { Persona } from '../model/Persona';
import { Producto } from '../model/Producto';
import { ProductoService } from '../services/producto.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  listaPersonas: Persona[] = [];
  listaProductos: Producto[]=[];
  producto: Producto;
  datoDevuelto: any;
  ix: number;
  nom: string;
  des: string;
  prec: number;
  stock: number;
  constructor(private productoService: ProductoService) {
  }
  ionViewDidEnter(){
    this.obtenerProducto();
    this.prec=0;
    this.stock=0;
    //this.obtenerPersonas();
  }
 /* obtenerPersonas(){
    this.personaService.listaPersonas().subscribe((res: any)=>{
     this.listaPersonas=res;
     this.xd=this.listaPersonas[0].nombre;
      console.log(res);
    });
  }*/
  obtenerProducto(){
    this.productoService.listaProductos().subscribe((res: any)=>{
      this.listaProductos=res;
      this.ix=this.listaProductos.length+1;
      console.log(res);
    });
  }
  nuevoProducto(){
    this.ix=this.listaProductos.length +1;
    console.log(this.nom);
    if((this.nom===undefined) || (this.des===undefined) || (this.prec===undefined) || (this.stock===undefined)){
      alert('Llene todos los campos correctamente');
    }else if(this.prec<=0 || this.stock<=0)
    {
      alert('El precio o stock son incorrectos ');
    }else{
      this.producto={id:this.ix,nombre:this.nom,descripcion: this.nom,precio: this.prec,stock:this.stock};
    this.productoService.agregarProducto(this.producto).subscribe(dato=>{
      this.datoDevuelto=JSON.stringify(dato);
      console.log(this.producto);
    });
    this.listaProductos.push(this.producto);
    this.limpiar();
    this.ix=this.ix+1;
    alert('Se guardo el producto');
    }
  }
  limpiar(){
    this.nom='';
    this.des='';
    this.prec=0;
    this.stock=0;
  }


}
