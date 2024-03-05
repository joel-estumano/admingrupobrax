import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PrivacyClass } from 'src/app/classes/privacy/privacy';
import { MenuService } from 'src/app/services/menu/menu.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ScreenService } from 'src/app/services/screen/screen.service';
import { TranslateService } from 'src/app/services/translate/translate.service';

@Component({
  selector: 'app-privacy-home',
  templateUrl: './privacy-home.page.html',
  styleUrls: ['./privacy-home.page.scss'],
})
export class PrivacyHomePage {
  public Editor = ClassicEditor;
  constructor(
    public privacy: PrivacyClass,
    private navigation: NavigationService,
    private translate: TranslateService,
    private screen: ScreenService,
    private menu: MenuService
  ) {
    this.menu.items.forEach((e) => {
      e.selected = e.name == 'Política de Privacidade';
    });
  }

  save() {
    const privacy = this.privacy.value;
    if (privacy.length === 0) {
      this.privacy
        .add({
          text: this.privacy.text,
        })
        .then(() => {
          this.privacy
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
      this.privacy
        .update(
          {
            text: this.privacy.text,
          },
          privacy[0].id
        )
        .then(() => {
          this.privacy
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
