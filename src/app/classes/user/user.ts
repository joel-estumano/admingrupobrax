import { Injectable } from '@angular/core';
import { Core } from '../core/core';
import { HelperGetterService } from 'src/app/services/helpers/helpers/helper-getter.service';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { User } from 'src/app/interfaces/user';

@Injectable()
export class UserClass extends Core {
  override cachePath = 'Users';
  override path = 'Users';
  public allUsers;
  public levels = [
    { level: '7', name: 'Admin', color: '#50d71e' },
    { level: '4', name: 'Analista', color: '#50d71e' },
    { level: '6', name: 'Caixa', color: '#50d71e' },
    { level: '1', name: 'Cliente', color: '#50d71e' },
    { level: '5', name: 'Financeiro', color: '#50d71e' },
    { level: '3', name: 'Parceiro', color: '#50d71e' },
    { level: '2', name: 'Técnico', color: '#50d71e' },
  ];
  constructor(public override getter: HelperGetterService) {
    super(getter);
    this.collection = this.getter.crud.collectionConstructor(this.path);
  }

  setLevels(users) {
    const users_level = users.map((e) => {
      e.levelInfo = this.getLevel(e);
      return e;
    });
    this.set(users_level);
  }

  getLevel(user) {
    return this.levels.find((e) => e.level == user.level);
  }

  getLevelName(levelId) {
    const level = this.levels.find((e) => e.level == levelId);
    return level ? level.name : null;
  }

  addUser(
    yourAsset: User,
    uid: string,
    collection?: AngularFirestoreCollection
  ) {
    const collectionRef = collection ? collection : this.collection;
    const userData: User = {};
    Object.keys(yourAsset).forEach((key) => {
      if (key !== 'password') userData[key] = yourAsset[key];
    });

    if (uid) userData.id = uid;
    userData.createdAt = new Date();
    userData.level = '1';
    return collectionRef.doc(uid).set(userData);
  }

  updateUser(yourAsset: User, id?) {
    const userData: User = this.value;
    Object.keys(yourAsset).map((key) => {
      if (yourAsset[key] !== this.value[key] || !this.value[key])
        userData[key] = yourAsset[key];
    });
    return this.collection.doc(id ? id : this.value.id).update(userData);
  }
}
