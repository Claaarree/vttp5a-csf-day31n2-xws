import { Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CartItem } from '../model';

@Component({
  selector: 'app-lineitems',
  standalone: false,
  templateUrl: './lineitems.component.html',
  styleUrl: './lineitems.component.css'
})
export class LineitemsComponent{
  @Input() cart!: Map<string, CartItem>
  
  
  
  calculateFinalPrice(): number {
    var finalPrice: number = 0
    this.cart.forEach(v => {finalPrice += v.totalPrice
    })
    return finalPrice
  }
}
