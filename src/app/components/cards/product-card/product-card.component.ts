import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product;
  @Input() icon;
  @Input() call;

  @Output() removeProduct = new EventEmitter();
  @Output() addProduct = new EventEmitter();

  constructor() {}

  find() {
    this.call.products.find((e) => {
      if (e.product.id === this.product.id) {
        this.product.quantity = e.product.quantity;
      }
    });
  }
}
