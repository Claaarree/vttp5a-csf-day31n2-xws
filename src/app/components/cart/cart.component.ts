import { Component, Input, OnInit } from '@angular/core';
import { LineitemsComponent } from '../lineitems/lineitems.component';
import { CartItem } from '../model';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  @Input() cart!: Map<string, CartItem>

  orderForm!: FormGroup
  checkout!: FormArray

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.checkout = this.fb.array([])
    this.cart.forEach(v => {
      this.mapToList(v)
    })
    this.orderForm = this.fb.group({
      name: this.fb.control<string>(''),
      address: this.fb.control<string>(''),
      delivery: this.fb.control<string>('delivery'),
      checkout: this.checkout
    })
  }

  private mapToList(v: CartItem) {
    console.info("hello: " + v.name)
    const item = this.fb.group({
      name: this.fb.control<string>(v.name),
      quantity: this.fb.control<number>(v.quantity),
      totalPrice: this.fb.control<number>(v.totalPrice)
    })
    this.checkout.push(item)
    console.info("hello2: " + item.get("name"))
  }

  protected handleSubmit() {
    this.cart.forEach(v => {
      this.mapToList(v)
    })
    
    // use below to set the form attribute "checkout" directly as the "cart" map
    // this.orderForm.value.checkout = this.cart
    console.log(this.orderForm.value)
  }

}
