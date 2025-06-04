import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { WrapService } from 'src/app/services/wrap.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cars: any[] = [];
  categoryCars: any[] = [];

  constructor(private router: Router, private carService: CarService, private wrapService: WrapService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe(data => {
      this.cars = data;
    })

    this.carService.getCategoryCars().subscribe(data => {
      this.categoryCars = data;
    })
  }

  goToProduct(category: String) {
    this.router.navigate(['/product', category]);
  }

}
