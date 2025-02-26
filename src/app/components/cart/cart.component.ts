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
    })
  }

  private mapToList(v: CartItem) {
    console.info("hello: " + v)
    const item = this.fb.group({
      name: v.name,
      quantity: v.quantity,
      totalPrice: v.totalPrice
    })
    this.checkout.push(item)
  }

  protected handleSubmit() {
    // this.orderForm.value.checkout = this.cart
    console.log(this.orderForm.value)
  }

}
