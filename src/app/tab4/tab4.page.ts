import { Component, OnInit } from '@angular/core';
import { MotionService } from '../services/motion.service';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {

  constructor(public motionService: MotionService) { }

 async obtener(){
    await this.motionService.obtenerCoordenadas();
  }
}
