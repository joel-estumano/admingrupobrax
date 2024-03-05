import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupportCategoriesClass } from 'src/app/classes/categories/supportCategories';
import { MenuService } from 'src/app/services/menu/menu.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ScreenService } from 'src/app/services/screen/screen.service';

@Component({
  selector: 'app-support-categories-crud',
  templateUrl: './support-categories-crud.page.html',
  styleUrls: ['./support-categories-crud.page.scss'],
})
export class SupportCategoriesCrudPage {
  id = '';
  object = {
    name: '',
  };
  constructor(
    private screen: ScreenService,
    private navigation: NavigationService,
    private supportCategories: SupportCategoriesClass,
    private menu: MenuService,
    private route: ActivatedRoute
  ) {
    this.menu.items.forEach((e) => {
      e.selected = e.name == 'Logística';
    });
    this.route.queryParams.subscribe(async (params: any) => {
      this.id = params.params;

      if (this.id) {
        const find = this.supportCategories.find(this.id);
        this.object = find
          ? find
          : await this.supportCategories.getHttp(this.id);

        console.log(this.object);
      }
    });
  }

  back() {
    this.navigation.goTo('supportCategories-home');
  }

  async save() {
    await this.screen.presentLoading();
    if (this.id) {
      await this.supportCategories.update(this.object, this.id);
    } else {
      await this.supportCategories.add(this.object);
    }
    this.supportCategories.setClassAll().then(async (res) => {
      this.supportCategories.makeSet(res);
      this.supportCategories.makePagination();
      await this.screen.dismissLoading();
      this.back();
    });
  }
}
