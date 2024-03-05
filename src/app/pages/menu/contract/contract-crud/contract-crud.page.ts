import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ContractClass } from 'src/app/classes/contract/contract';
import { MenuService } from 'src/app/services/menu/menu.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ScreenService } from 'src/app/services/screen/screen.service';
import { TranslateService } from 'src/app/services/translate/translate.service';

@Component({
  selector: 'app-contract-crud',
  templateUrl: './contract-crud.page.html',
  styleUrls: ['./contract-crud.page.scss'],
})
export class ContractCrudPage {
  public id: string;
  public contractValue = {
    title: '',
    text: '',
    createdAt: new Date(),
  };
  public Editor = ClassicEditor;
  public config: any = {
    toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        'alignment',
        'blockQuote',
        'undo',
        'redo',
      ],
    },
    alignment: {
      options: ['left', 'right', 'center', 'justify'],
    },
  };

  constructor(
    public contract: ContractClass,
    private navigation: NavigationService,
    private translate: TranslateService,
    private screen: ScreenService,
    private menu: MenuService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(async (params: any) => {
      if (params) {
        this.id = params.params;
        if (this.id) {
          console.log(this.id);
          const data = this.contract.find(this.id);
          this.contractValue = data
            ? data
            : await this.contract.getHttp(this.id);

          console.log(this.contractValue);
        }
      }
    });
    this.menu.items.forEach((e) => {
      e.selected = e.name == 'Contrato';
    });
  }

  save() {
    const contract = this.contract.value;
    if (!this.id) {
      this.contract
        .add(this.contractValue)
        .then(() => {
          this.contract
            .setClassAll()
            .then(() => {
              this.navigation.goTo('contract-home');
            })
            .catch((err) => {
              this.screen.presentToast(this.translate.verifyErrors(err.code));
            });
        })
        .catch((err) => {
          this.screen.presentToast(this.translate.verifyErrors(err.code));
        });
    } else {
      this.contract
        .update(this.contractValue, contract[0].id)
        .then(() => {
          this.contract
            .setClassAll()
            .then(() => {
              this.navigation.goTo('contract-home');
            })
            .catch((err) => {
              this.screen.presentToast(this.translate.verifyErrors(err.code));
            });
        })
        .catch((err) => {
          this.screen.presentToast(this.translate.verifyErrors(err.code));
        });
    }
  }
}
