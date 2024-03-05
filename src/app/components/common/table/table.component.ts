import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ScreenService } from 'src/app/services/screen/screen.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() headers: Array<string> = [];
  @Input() data: Array<{
    info: Array<any>;
    actions: Array<string>;
    index: number;
    hasFile: boolean;
    url?: string;
    disabled?: string;
  }> = [];
  @Input() getTotal?: boolean = false;
  @Output() add: any = new EventEmitter();
  @Output() edit: any = new EventEmitter();
  @Output() del: any = new EventEmitter();
  @Output() share: any = new EventEmitter();
  @Output() clickRow: any = new EventEmitter();
  public total: number = 0;

  constructor(
    private screen: ScreenService,
    private navigation: NavigationService
  ) {
    setTimeout(() => {
      this.getHeadersLength();
      if (this.getTotal) {
        this.total = 0;
        this.data.forEach((e) => {
          const numericValue = parseFloat(e.info[2]);
          if (!isNaN(numericValue)) {
            this.total += numericValue;
          }
        });
      }
    }, 1000);
  }

  getHeadersLength() {
    const headers = this.headers.map((e, i) => {
      return i;
    });
    return headers;
  }

  addClick(who, item) {
    const file = item.target.files[0];
    this.add.emit({ who, file });
  }

  editFunc(who) {
    this.edit.emit(who);
  }

  editClick(who, item) {
    const file = item.target.files[0];
    this.edit.emit({ who, file });
  }

  delClick(who) {
    this.screen.presentAlertConfirm(
      'Você tem certeza que deseja excluir?',
      'Essa ação é irreversível',
      '',
      () => {
        this.del.emit(who);
      },
      () => {}
    );
  }

  clickFunc(who) {
    this.clickRow.emit(who);
  }

  shareClick(who) {
    this.share.emit(who);
  }

  view(who) {
    this.navigation.away(who.url);
  }

  download(who) {}
}
