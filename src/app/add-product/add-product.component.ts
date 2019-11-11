// tslint:disable-next-line:max-line-length
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';
// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
// tslint:disable-next-line:max-line-length
export class AddProductComponent implements OnInit {
  myForm: FormGroup;

  constructor(private product: ProductsService) {
   }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
      price: new FormControl(''),
      description: new FormControl('', Validators.maxLength(500)),
      imgAlt: new FormControl('', Validators.required),
      isAvailable: new FormControl('', Validators.required)
    });
  }

  onSubmit(form: FormGroup) {
    console.log(this.myForm);
    console.log('Valid?', form.valid);
    console.log('Name', form.value.name);
    console.log('Image', form.value.img);
    console.log('IsAvilable', form.value.isAvailable);
    console.log('Price', form.value.price);
    console.log('ImgAlt', form.value.imgAlt);
    console.log('Description', form.value.description);
    if (this.myForm.valid) {
      this.product.pushProducts(this.myForm.value);
    // tslint:disable-next-line:no-unused-expression
      this.myForm.reset();
    }
    else {
      alert('Invalid Details');
    }
  }
}


