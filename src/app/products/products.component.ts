import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
search() {
  console.log(this.keyword);
  let reslut:any=[];
for (let p of this.products) {
  if(p.name.includes(this.keyword)){
    reslut.push(p);
  }
}
this.products=reslut;
}
deleteProduct(p: any) {
  let index= this.products.indexOf(p);
  this.products.splice(index,1);
}

public products :any;
  public keyword:string="";
  constructor(){

  }
  
  ngOnInit(): void {
      this.products=[
        { "id": 1, "name": "computer", "price": 100},
        { "id": 2, "name": "phone", "price": 200},
        { "id": 3, "name": "Mouse", "price": 300},
        { "id": 4, "name": "ipad", "price": 400}
      ];
  }

}
