import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdownsearch',
  templateUrl: './dropdownsearch.component.html',
  styleUrls: ['./dropdownsearch.component.css']
})
export class DropdownsearchComponent implements OnInit {


  categories = ["High-Tech", "Perfumes", "Home"];
  balance: boolean = false;
  addJsCode() {
    let test = document.querySelectorAll('.dropdown ul');
    test.forEach((x: any) => {
      x.classList.add('active');
    });

  }

  addJsCode1(item:any) {
    //console.log(item);
   
    document.querySelectorAll(".default_option").forEach
    ((y :any) =>{
      y.innerText = item;
       document.querySelector(".dropdown ul")!.classList.remove('active');
    } )
    
   }
  
  constructor() { }

  ngOnInit(): void {
  }

}
