import { Injectable } from '@angular/core';
import { Motion } from '@capacitor/motion';
@Injectable({
  providedIn: 'root'
})
export class MotionService {

  x: number;
  y: number;
  z: number;
  constructor() { }
  public async obtenerCoordenadas(){
    // Once the user approves, can start listening:
    Motion.addListener('accel', event => {
      this.x= event.acceleration.x;
      this.y = event.acceleration.y;
      this.z=event.acceleration.z;
      console.log('Device motion event:', event);
    });
  }
}
