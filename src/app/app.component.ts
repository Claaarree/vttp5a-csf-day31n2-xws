import { Component, Input, Output } from '@angular/core';
import { CartItem, Product } from './components/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day31n2xws';
  cart = new Map()

  products: Product[] =[
    {
      name: "acorn_squash",
      price: 3,
      imgSrc: "/fruits/acorn_squash.png"
    },
    {
      name: "apple",
      price: 5,
      imgSrc: "/fruits/apple.png"
    },
    {
      name: "bell_pepper",
      price: 6,
      imgSrc: "/fruits/bell_pepper.png"
    },
    {
      name: "blueberries",
      price: 87,
      imgSrc: "/fruits/blueberries.png"
    },
    {
      name: "broccoli",
      price: 1,
      imgSrc: "/fruits/broccoli.png"
    },
  ]

  protected changeQtd(c: CartItem) {
    console.info(c)
    //check if map has the name
    if (this.cart.has(c.name)) {
      const old: CartItem = this.cart.get(c.name)
      old.quantity += c.quantity
      old.totalPrice += c.totalPrice
      if (old.quantity <= 0) {
        this.cart.delete(c.name)
      } 
    } else if (c.quantity > 0){
      this.cart.set(c.name, c)
    }
    console.info(this.cart)
  }
  
}
