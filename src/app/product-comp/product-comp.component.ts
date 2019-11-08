import { Component, OnInit } from '@angular/core';
import {Products} from '../model/exportInterfaceProduct';

@Component({
  selector: 'app-product-comp',
  templateUrl: './product-comp.component.html',
  styleUrls: ['./product-comp.component.css']
})
export class ProductCompComponent implements OnInit {

  constructor() { }
  title = 'store';
  products: Array<Products> = [ {
        name: 'Iphone 11 Pro',
        img: `https://images-na.ssl-images-amazon.com/images/I/61itOh%2BJe8L._AC_SL1024_.jpg`,
        description: '6.5-inch Super Retina XDR OLED display',
        imgAlt: 'Iphone 11 Pro',
        price: 999,
        isAvailable: true,



  },
  {
    name: 'One Plus 7T',
    img: `https://images-na.ssl-images-amazon.com/images/I/71CXzCmoZRL._AC_SL1500_.jpg`,
    description: '48+12+16MP triple rear camera with telephoto lens',
    imgAlt: 'One Plus 7T',
    price: 899,
    isAvailable: true,



},

{
  name: 'Huawei P30 Pro',
  img: `https://images-na.ssl-images-amazon.com/images/I/51bIGWynl4L._AC_SL1000_.jpg`,
  description: '40+20+8MP Leica quad rear camera with supports autofocus',
  imgAlt: 'Huawei P30 Pro',
  price: 1200,
  isAvailable: true,



},

{
  name: 'Samsung 10',
  img: `https://images-na.ssl-images-amazon.com/images/I/71znGoLL%2B4L._AC_SL1500_.jpg`,
  description: 'Triple-camera system with 12MP Ultra Wide, Wide, and Telephoto cameras',
  imgAlt: 'Samsung Note 10',
  price: 1399,
  isAvailable: false,



},

{
  name: 'Samsung 9',
  img: `https://images-na.ssl-images-amazon.com/images/I/61-3SaQysBL._AC_SL1500_.jpg`,
  description: 'Triple-camera system with 12MP Ultra Wide, Wide, and Telephoto cameras',
  imgAlt: 'Samsung Note 9',
  price: 799,
  isAvailable: true,



},

{
  name: 'Huawei Mate 20',
  img: `https://images-na.ssl-images-amazon.com/images/I/71zhb%2B34MsL._AC_SL1000_.jpg`,
  description: 'Triple-camera system with 12MP Ultra Wide, Wide, and Telephoto cameras',
  imgAlt: 'Huawei Mate 20 Pro',
  price: 699,
  isAvailable: false,



},

{
  name: 'Oppo Reno 10X',
  img: `https://images-na.ssl-images-amazon.com/images/I/81u4Eg0czZL._AC_SL1500_.jpg`,
  description: '48MP + 8MP + 13MP primary camera with Photo, Video',
  imgAlt: 'Oppo Reno 10X',
  price: 849,
  isAvailable: false,



},

{
  name: 'Iphone XR',
  img: `https://images-na.ssl-images-amazon.com/images/I/519KIlHA2wL._AC_SL1024_.jpg`,
  description: '12MP camera with OIS and 7MP TrueDepth front camera',
  imgAlt: 'Apple Iphone XR',
  price: 500,
  isAvailable: true,



},



{
  name: 'Samsung M20',
  img: `https://images-na.ssl-images-amazon.com/images/I/71rFOsegqqL._AC_SL1500_.jpg`,
  description: '13MP+5MP ultra-wide dual camera | 8MP f2.0 front camera',
  imgAlt: 'Samsung Galaxy M20',
  price: 149,
  isAvailable: true,



},

{
  name: 'CAT Phone',
  img: `https://images-na.ssl-images-amazon.com/images/I/61DNqkYlhaL._AC_SL1200_.jpg`,
  description: 'Camera: thermal - flir lepton thermal imaging Camera; Main - 16MP Autofocus ',
  imgAlt: 'CAT Phone',
  price: 850,
  isAvailable: true,



}


 ];

  ngOnInit() {
  }


}

