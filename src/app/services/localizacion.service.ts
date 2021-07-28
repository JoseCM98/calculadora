import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class LocalizacionService {

  latitude: number;
  longitude: number;
  precision: number;
  alititud: number;
  constructor() { }
  public async localizacion()  {
    const coordinates = await Geolocation.getCurrentPosition();
    this.precision=  coordinates.coords.accuracy;
    this.latitude = coordinates.coords.latitude;
    this.longitude=coordinates.coords.longitude;
    this.alititud = coordinates.coords.altitude;
  };

}
