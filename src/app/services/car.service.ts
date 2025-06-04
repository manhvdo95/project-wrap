import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars = [
    {
      'src': '/assets/cars/dark_red_toyota_camery.jpeg'
    },
    {
      'src': '/assets/cars/black_benz.jpeg'
    },
    {
      'src': '/assets/cars/yellow_bmw.jpeg'
    },
    {
      'src': '/assets/cars/carbon-honda.jpeg'
    }
  ];

  categoryCars = [
    {
      'category': 'gloss',
      'src': '/assets/vinyl/gloss.png'
    },
    {
      'category': 'matte',
      'src': '/assets/vinyl/matte.png'
    },
    {
      'category': 'satin',
      'src': '/assets/vinyl/satin.png'
    },
    {
      'category': 'chrome',
      'src': '/assets/vinyl/chrome.png'
    },
    {
      'category': 'color-shift',
      'src': '/assets/vinyl/color-shift.png'
    },
    {
      'category': 'carbon',
      'src': '/assets/vinyl/carbon.png'
    }
  ];

  constructor() { }

  getCars() {
    return of(this.cars);
  }

  getCategoryCars() {
    return of(this.categoryCars);
  }
}
