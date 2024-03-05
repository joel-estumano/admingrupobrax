import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommissionTypesClass } from 'src/app/classes/commissions/commission-types';
import { MenuService } from 'src/app/services/menu/menu.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ScreenService } from 'src/app/services/screen/screen.service';

@Component({
  selector: 'app-comissions-type-crud',
  templateUrl: './comissions-type-crud.page.html',
  styleUrls: ['./comissions-type-crud.page.scss'],
})
export class ComissionsTypeCrudPage {
  id = '';
  object = {
    title: '',
    category: '',
  };
  constructor(
    private screen: ScreenService,
    private navigation: NavigationService,
    private types: CommissionTypesClass,
    private menu: MenuService,
    private route: ActivatedRoute
  ) {
    this.menu.items.forEach((e) => {
      e.selected = e.name == 'Comissões';
    });
    this.route.queryParams.subscribe(async (params: any) => {
      this.id = params.params;

      if (this.id) {
        const find = this.types.find(this.id);
        this.object = find ? find : await this.types.getHttp(this.id);
      }
    });
  }

  back() {
    this.navigation.goTo('commissions-type-home');
  }

  async save() {
    await this.screen.presentLoading();
    if (this.id) {
      await this.types.update(this.object, this.id);
    } else {
      await this.types.add(this.object);
    }
    this.types.setClassAll().then(async (res) => {
      this.types.makeSet(res);
      this.types.makePagination();
      await this.screen.dismissLoading();
      this.back();
    });
  }
}