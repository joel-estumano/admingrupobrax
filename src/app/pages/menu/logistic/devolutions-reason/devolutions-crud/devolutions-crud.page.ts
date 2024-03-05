import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DevolutionClass } from 'src/app/classes/devolutions/devolutions';
import { MenuService } from 'src/app/services/menu/menu.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ScreenService } from 'src/app/services/screen/screen.service';

@Component({
  selector: 'app-devolutions-crud',
  templateUrl: './devolutions-crud.page.html',
  styleUrls: ['./devolutions-crud.page.scss'],
})
export class DevolutionsCrudPage {
  id = '';
  object = {
    name: '',
  };
  constructor(
    private screen: ScreenService,
    private navigation: NavigationService,
    private devolutions: DevolutionClass,
    private menu: MenuService,
    private route: ActivatedRoute
  ) {
    this.menu.items.forEach((e) => {
      e.selected = e.name == 'Logística';
    });
    this.route.queryParams.subscribe(async (params: any) => {
      this.id = params.params;

      if (this.id) {
        const find = this.devolutions.find(this.id);
        this.object = find ? find : await this.devolutions.getHttp(this.id);

        console.log(this.object);
      }
    });
  }

  back() {
    this.navigation.goTo('devolutions-home');
  }

  async save() {
    await this.screen.presentLoading();
    if (this.id) {
      await this.devolutions.update(this.object, this.id);
    } else {
      await this.devolutions.add(this.object);
    }
    this.devolutions.setClassAll().then(async (res) => {
      this.devolutions.makeSet(res);
      this.devolutions.makePagination();
      await this.screen.dismissLoading();
      this.back();
    });
  }
}
