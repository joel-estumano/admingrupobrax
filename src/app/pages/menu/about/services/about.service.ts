import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import { AboutInterface } from 'src/app/interfaces/about.interface';
import { HelperGetterService } from 'src/app/services/helpers/helpers/helper-getter.service';

@Injectable()
export class AboutService {
  path = 'About';
  private collection!: AngularFirestoreCollection;

  constructor(public getter: HelperGetterService) {
    this.collection = this.getter.crud.collectionConstructor(this.path);
  }

  add(text: string): Observable<any> {
    return from(this.getter.crud.add(this.collection, { text }));
  }

  get(id: string): Observable<AboutInterface> {
    return from(this.getter.crud.get(this.collection, id));
  }

  getAll(): Observable<AboutInterface[]> {
    return from(this.getter.crud.getAll(this.collection));
  }

  update(id: string, text: string): Observable<undefined> {
    return from(this.getter.crud.update(this.collection, { text: text }, id));
  }

  delete(id: string): Observable<undefined> {
    return from(this.getter.crud.delete(this.collection, id));
  }
}
