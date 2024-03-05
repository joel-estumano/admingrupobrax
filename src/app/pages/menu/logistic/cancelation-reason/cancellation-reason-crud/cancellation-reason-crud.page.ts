import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CancellationReasonClass } from 'src/app/classes/cancellationReason/cancellationReason';
import { MenuService } from 'src/app/services/menu/menu.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ScreenService } from 'src/app/services/screen/screen.service';

@Component({
  selector: 'app-cancellation-reason-crud',
  templateUrl: './cancellation-reason-crud.page.html',
  styleUrls: ['./cancellation-reason-crud.page.scss'],
})
export class CancellationReasonCrudPage {
  id = '';
  object = {
    name: '',
  };
  constructor(
    private screen: ScreenService,
    private navigation: NavigationService,
    private cancellationReason: CancellationReasonClass,
    private menu: MenuService,
    private route: ActivatedRoute
  ) {
    this.menu.items.forEach((e) => {
      e.selected = e.name == 'Logística';
    });
    this.route.queryParams.subscribe(async (params: any) => {
      this.id = params.params;

      if (this.id) {
        const find = this.cancellationReason.find(this.id);
        this.object = find
          ? find
          : await this.cancellationReason.getHttp(this.id);

        console.log(this.object);
      }
    });
  }

  back() {
    this.navigation.goTo('cancellationReason-home');
  }

  async save() {
    await this.screen.presentLoading();
    if (this.id) {
      await this.cancellationReason.update(this.object, this.id);
    } else {
      await this.cancellationReason.add(this.object);
    }
    this.cancellationReason.setClassAll().then(async (res) => {
      this.cancellationReason.makeSet(res);
      this.cancellationReason.makePagination();
      await this.screen.dismissLoading();
      this.back();
    });
  }
}
