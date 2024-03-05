import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesClass } from 'src/app/classes/categories/categories';
import { MasterService } from 'src/app/services/master/master.service';
import { MenuService } from 'src/app/services/menu/menu.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ScreenService } from 'src/app/services/screen/screen.service';

@Component({
  selector: 'app-categories-crud',
  templateUrl: './categories-crud.page.html',
  styleUrls: ['./categories-crud.page.scss'],
})
export class CategoriesCrudPage {
  id = '';
  object = {
    name: '',
  };
  constructor(
    private screen: ScreenService,
    private navigation: NavigationService,
    private categories: CategoriesClass,
    private menu: MenuService,
    private route: ActivatedRoute
  ) {
    this.menu.items.forEach((e) => {
      e.selected = e.name == 'Logística';
    });
    this.route.queryParams.subscribe(async (params: any) => {
      this.id = params.params;

      if (this.id) {
        const find = this.categories.find(this.id);
        this.object = find ? find : await this.categories.getHttp(this.id);
      }
    });
  }

  back() {
    this.navigation.goTo('logistic-categories-home');
  }

  async save() {
    await this.screen.presentLoading();
    if (this.id) {
      await this.categories.update(this.object, this.id);
    } else {
      await this.categories.add(this.object);
    }
    this.categories.setClassAll().then(async (res) => {
      this.categories.makeSet(res);
      this.categories.makePagination();
      await this.screen.dismissLoading();
      this.back();
    });
  }
}
