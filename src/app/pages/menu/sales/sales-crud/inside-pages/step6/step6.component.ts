import { Component, Input } from '@angular/core';
import { ContractClass } from 'src/app/classes/contract/contract';
import { UserClass } from 'src/app/classes/user/user';

@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.scss'],
})
export class Step6Component {
  currentContract = 0;
  @Input() id: string;
  @Input() call;
  @Input() sign = false;
  constructor(public contract: ContractClass, public user: UserClass) {}
  changeContract(add) {
    this.currentContract += add;
  }
}
