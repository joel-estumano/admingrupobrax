import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StocksClass } from 'src/app/classes/stock/stock';
import { MenuService } from 'src/app/services/menu/menu.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ScreenService } from 'src/app/services/screen/screen.service';

@Component({
  selector: 'app-stock-crud',
  templateUrl: './stock-crud.page.html',
  styleUrls: ['./stock-crud.page.scss'],
})
export class StockCrudPage {
  id = '';
  object = {
    name: '',
  };
  constructor(
    private screen: ScreenService,
    private navigation: NavigationService,
    private stock: StocksClass,
    private menu: MenuService,
    private route: ActivatedRoute
  ) {
    this.menu.items.forEach((e) => {
      e.selected = e.name == 'Logística';
    });
    this.route.queryParams.subscribe(async (params: any) => {
      this.id = params.params;

      if (this.id) {
        const find = this.stock.find(this.id);
        this.object = find ? find : await this.stock.getHttp(this.id);

        console.log(this.object);
      }
    });
  }

  back() {
    this.navigation.goTo('stock-home');
  }

  async save() {
    await this.screen.presentLoading();
    if (this.id) {
      await this.stock.update(this.object, this.id);
    } else {
      await this.stock.add(this.object);
    }
    this.stock.setClassAll().then(async (res) => {
      this.stock.makeSet(res);
      this.stock.makePagination();
      await this.screen.dismissLoading();
      this.back();
    });
  }
}
