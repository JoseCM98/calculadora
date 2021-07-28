import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { LocalizacionService } from '../services/localizacion.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  direccion: string;
  latitude: number;
  longitude: number;
  acurracy: number;
  altitude: number;
  constructor(private photoService: PhotoService, private sanitizer: DomSanitizer, public localizacionService: LocalizacionService) {}

  addPhotoToGallery() {
    this.photoService.addNewToGallery().then(() => {
      this.direccion = this.photoService.direccion;
      this.getLocalizacion();
    });
  }
  getImgContent(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(this.direccion);
  }
  getLocalizacion()
  {
     this.localizacionService.localizacion().then(()=>{
      this.latitude=this.localizacionService.latitude;
      this.longitude= this.localizacionService.longitude;
      this.acurracy = this.localizacionService.precision;
      this.altitude= this.localizacionService.alititud;
    });
  }
}
