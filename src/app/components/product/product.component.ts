import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { WrapService } from 'src/app/services/wrap.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  categoryCars: any[] = [];
  wraps: any[]  = [];
  filterWraps: any[] = [];
  selectedWrap: any = "GLOSS";
  selectedIndex: number | null = 0;
  categories = ["gloss", "matte", "satin", "chrome", "color-shift", "carbon"] 

  constructor(private route: ActivatedRoute, private carService: CarService, private wrapService: WrapService) {}

  ngOnInit(): void {
    this.carService.getCategoryCars().subscribe(data => {
      this.categoryCars = data;
    })

    this.wrapService.getWraps().subscribe(data => {
      this.wraps = data;
    })

    // Set default category
    const category = this.route.snapshot.paramMap.get('category');
    this.filterWraps = this.wraps.filter(w => w.category.includes(category));
    const indexOfCategory = this.categories.indexOf(category)
    this.selectedIndex = indexOfCategory;
  }

  selectCategory(category: String, index: number) {
    this.selectedWrap = category;
    this.filterWraps = this.wraps.filter(w => w.category.includes(this.selectedWrap));
    this.selectedIndex = index;
  }

  openImage(url) {
    window.open(url, '_blank');
  }
}
