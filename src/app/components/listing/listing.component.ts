import { Component, Input, Output } from '@angular/core';
import { CartItem, Product } from '../model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-listing',
  standalone: false,
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})
export class ListingComponent {
  @Input() products?: Product[]
  @Output() toAdd = new Subject<CartItem> 

  cartItem?: CartItem

  protected changeQtd(change: number, p: Product) {
    console.info(p)
    const item = {
      name: p.name,
      quantity: change,
      totalPrice: p.price * change
    }
    this.cartItem = item
    this.toAdd.next(item)
  }
}
