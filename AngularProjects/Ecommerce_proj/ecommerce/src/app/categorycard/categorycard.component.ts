import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categorycard',
  templateUrl: './categorycard.component.html',
  styleUrls: ['./categorycard.component.css']
})
export class CategorycardComponent implements OnInit {

  // categories1=[

  //   {
  //     idCategory: 1,
  //     nameCategory: "Smartphone",
  //     descriptionCategory: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     imageCategory: "assets/images/smartphone.jpg",
  //   },
  //   {
  //     idCategory: 2,
  //     nameCategory: "Laptop",
  //     descriptionCategory: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     imageCategory: "assets/images/laptop.jpg",

  //   },
  //   {
  //     idCategory: 3,
  //     nameCategory: "High-Tech accessories",
  //     descriptionCategory: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     imageCategory: "assets/images/accessories.jpg",

  //   },
  //   {
  //     idCategory: 4,
  //     nameCategory: "For women",
  //     descriptionCategory: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     imageCategory: "assets/images/perfumes_forher.jpg",
  //   },
  //   {
  //     idCategory: 5,
  //     nameCategory: "For men",
  //     descriptionCategory: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     imageCategory: "assets/images/perfumes_forhim.jpg",

  //   },
  //   {
  //     idCategory: 6,
  //     nameCategory: "Bath Room",
  //     descriptionCategory: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     imageCategory: "assets/images/bath_room.jpg",

  //   },
  //   {
  //     idCategory: 7,
  //     nameCategory: "Dinner Room",
  //     descriptionCategory: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     imageCategory: "assets/images/dinner_room.jpg",

  //   },

  // ];

  // categories1 : any = [];

  // constructor(private service:CategoriesService) { 
  //   this.service.getCategories().subscribe((data)=> {
  //     this.categories1=data;
  //     console.log(data);
  //   })
  // }

  public categories: any;

  constructor(public servicesCategories: CategoriesService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  public getCategories() {
    this.servicesCategories.getRessources("/category/getAll")
    .forEach(data => {
      this.categories=data;
    });
  }

}
