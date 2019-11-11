// tslint:disable-next-line:max-line-length
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
// tslint:disable-next-line:max-line-length
export class AddProductComponent implements OnInit {
  myForm: FormGroup;

  constructor() {

   }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      image: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl('', Validators.maxLength(500)),
      imgAlt: new FormControl(''),
      isAvailable: new FormControl('')
    });
  }

  onSubmit(form: FormGroup) {
    console.log(this.myForm);
    console.log('Valid?', form.valid);
    console.log('Name', form.value.name);
    console.log('Image', form.value.image);
    console.log('IsAvilable', form.value.isAvailable);
    console.log('Price', form.value.price);
    console.log('ImgAlt',form.value.imgAlt);
    console.log('Description', form.value.description);
  }
}


