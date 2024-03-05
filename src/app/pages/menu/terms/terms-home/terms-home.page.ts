import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { TermClass } from 'src/app/classes/terms/terms';
import { MenuService } from 'src/app/services/menu/menu.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ScreenService } from 'src/app/services/screen/screen.service';
import { TranslateService } from 'src/app/services/translate/translate.service';

@Component({
  selector: 'app-terms-home',
  templateUrl: './terms-home.page.html',
  styleUrls: ['./terms-home.page.scss'],
})
export class TermsHomePage {
  public Editor = ClassicEditor;
  constructor(
    public terms: TermClass,
    private navigation: NavigationService,
    private translate: TranslateService,
    private screen: ScreenService,
    private menu: MenuService
  ) {
    this.menu.items.forEach((e) => {
      e.selected = e.name == 'Termos de Uso';
    });
  }

  save() {
    const terms = this.terms.value;
    if (terms.length === 0) {
      this.terms
        .add({
          text: this.terms.text,
        })
        .then(() => {
          this.terms
            .setClassAll()
            .then(() => {
              this.navigation.goTo('home');
            })
            .catch((err) => {
              this.screen.presentToast(this.translate.verifyErrors(err.code));
            });
        })
        .catch((err) => {
          this.screen.presentToast(this.translate.verifyErrors(err.code));
        });
    } else {
      this.terms
        .update(
          {
            text: this.terms.text,
          },
          terms[0].id
        )
        .then(() => {
          this.terms
            .setClassAll()
            .then(() => {
              this.navigation.goTo('home');
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
