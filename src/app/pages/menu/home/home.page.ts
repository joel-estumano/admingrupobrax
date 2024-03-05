import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(private menu: MenuService) {
    this.menu.items.forEach((e) => {
      e.selected = e.name == 'Home';
    });
  }
}
