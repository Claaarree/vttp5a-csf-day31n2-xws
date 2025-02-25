import { Component, Input } from '@angular/core';
import { CartItem } from '../model';

@Component({
  selector: 'app-lineitems',
  standalone: false,
  templateUrl: './lineitems.component.html',
  styleUrl: './lineitems.component.css'
})
export class LineitemsComponent {
  @Input() cart= new Map
}
