import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Toast
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Cache
import { IonicStorageModule } from '@ionic/storage-angular';

// Shared Module
import { SharedModule } from './shared/shared.module';

import { environment } from '../environments/environment';

//Firebase
import { AngularFireStorage } from '@angular/fire/compat/storage/storage';
import {
  getAuth,
  indexedDBLocalPersistence,
  initializeAuth,
  provideAuth,
} from '@angular/fire/auth';
import { getApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import {
  AngularFireRemoteConfigModule,
  DEFAULTS,
  SETTINGS,
} from '@angular/fire/compat/remote-config';

import {
  provideAnalytics,
  getAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { providePerformance, getPerformance } from '@angular/fire/performance';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { Capacitor } from '@capacitor/core';

// CK EDITOR
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

// Awesome Cordova Plugins
import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

// HTTP
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,

    // CK EDITOR
    CKEditorModule,
    //Http
    HttpClientModule,

    //Toast
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      maxOpened: 2,
      autoDismiss: true,
      preventDuplicates: true,
      countDuplicates: true,
      resetTimeoutOnDuplicate: true,
    }), // ToastrModule added

    // Cache
    IonicStorageModule.forRoot(),

    // Shared Module
    SharedModule,

    // Firebase
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => {
      if (Capacitor.isNativePlatform()) {
        return initializeAuth(getApp(), {
          persistence: indexedDBLocalPersistence,
        });
      } else {
        return getAuth();
      }
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireRemoteConfigModule,
    provideAnalytics(() => getAnalytics()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // Angular Fire
    ScreenTrackingService,
    UserTrackingService,

    // Awesome Cordova Plugins
    AwesomeCordovaNativePlugin,
    InAppBrowser,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
