import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 mensaje: string;
numeroConcatenar: string;
numero1: number;
numero2: number;
negativo: number;
operador: string;
  constructor(public toastController: ToastController) {
    this.numeroConcatenar = '0.0';
  }
  borrar(simbolo: string){
    let res: string;
    if(simbolo==='C'){
      this.numero1=0;
      this.numero2=0;
      this.numeroConcatenar = '0.0';
    }
    if(simbolo==='CE'){
      this.numeroConcatenar = '0.0';
    }
    if(simbolo==='del'){
      if(this.numeroConcatenar.length > 0){
        res=this.numeroConcatenar.slice(0,this.numeroConcatenar.length-1);
        this.numeroConcatenar=res;
      }else{
        this.numeroConcatenar = '0.0';
      }
    }
  }
  otrasOperaciones(simbolo: string){
    let resultado: number;
    let prueba: string;
    if(simbolo==='sqrt'){
    this.numero1=+this.numeroConcatenar;
    resultado=Math.sqrt(+this.numero1);
    this.numeroConcatenar=resultado+'';
    }
    if(simbolo==='x2'){
      this.numero1=+this.numeroConcatenar;
      resultado=this.numero1*this.numero1;
      this.numeroConcatenar=resultado+'';
    }
    if(simbolo==='+/-'){
      if(this.numeroConcatenar==='0.0'){
        this.numeroConcatenar='0.0';
      }else{
        this.negativo=+this.numeroConcatenar;
        resultado=this.negativo*-1;
        this.numeroConcatenar=resultado+'';
      }
    }
    if(simbolo==='.'){
      resultado= this.numeroConcatenar.indexOf('.');
      if(resultado<1){
        if(this.numeroConcatenar===''){
          this.numeroConcatenar='0.0';
        }else{
          this.numeroConcatenar=this.numeroConcatenar+'.';
        }
      }
    }
    if(simbolo==='1/x'){
      this.numero1=+this.numeroConcatenar;
      resultado=1/this.numero1;
      this.numeroConcatenar=resultado+'';
    }
    if(simbolo==='%'){
      this.numero2=+this.numeroConcatenar;
      resultado=this.numero2/100;
      this.numeroConcatenar=resultado+'';
    }
  }
  generarOperacion(simbolo: string){
    //con +se transforma a numero el string
    let resultado: number;

    if(simbolo==='='){
      this.numero2=Number(this.numeroConcatenar);
      if(this.operador==='/'){
        resultado=this.numero1/this.numero2;
      }
      if(this.operador==='x'){
        resultado=this.numero1*this.numero2;
      }
      if(this.operador==='-'){
        resultado=this.numero1-this.numero2;
      }
      if(this.operador==='+'){
        resultado=this.numero1+this.numero2;
        console.log(this.numero1,this.numero2);
      }
      this.numeroConcatenar=resultado+'';
    }else{
      this.numero1=Number(this.numeroConcatenar);
      this.operador=simbolo;
    this.numeroConcatenar='0.0';
    }
  }
  concatenarNumero(numero: string){
    if(this.numeroConcatenar==='0.0'){
      this.numeroConcatenar=numero;
    }else if(this.numeroConcatenar==='0'){
      this.numeroConcatenar=numero;
    }else{
      this.numeroConcatenar=this.numeroConcatenar+numero;
    }
  }
  async presentToast(){
    const toast = await this.toastController.create({
      message:this.mensaje,
      duration:2000
    });
    toast.present();
  }
}
