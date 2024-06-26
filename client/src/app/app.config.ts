import { provideAnimations } from '@angular/platform-browser/animations';
import { TuiRootModule } from '@taiga-ui/core';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideState, provideStore } from '@ngrx/store';
import { authReducer } from './ngrx/reducers/auth.reducer';
import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from './ngrx/effects/auth.effects';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../environments/environments';
import { userReducer } from './ngrx/reducers/user.reducer';
import { dishReducer } from './ngrx/reducers/dish.reducer';
import { UserEffects } from './ngrx/effects/user.effects';
import { DishEffects } from './ngrx/effects/dish.effects';
import { locationReducer } from './ngrx/reducers/location.reducer';
import { LocationEffects } from './ngrx/effects/location.effects';

import { categoryReducer } from './ngrx/reducers/category.reducer';
import { CategoryEffects } from './ngrx/effects/category.effects';

import { tableReducer } from './ngrx/reducers/table.reducer';
import { TableEffects } from './ngrx/effects/table.effects';
import { reservationReducer } from './ngrx/reducers/reservation.reducer';
import { ReservationEffects } from './ngrx/effects/reservation.effects';
import { newReducer } from './ngrx/reducers/new.reducer';
import { NewEffects } from './ngrx/effects/new.effects';
import { storageReducer } from './ngrx/reducers/storage.reducer';
import { StorageEffects } from './ngrx/effects/storage.effects';
import { orderReducer } from './ngrx/reducers/order.reducer';
import { OrderEffects } from './ngrx/effects/order.effects';
import { PaymentImageEffects } from './ngrx/effects/paymentimage.effects';
import { paymentImageReducer } from './ngrx/reducers/paymentimage.reducer';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { paymentMomoReducer } from './ngrx/reducers/paymentmomo.reducer';
import { PaymentMomoEffects } from './ngrx/effects/paymentmomo.effects';
import { billReducer } from './ngrx/reducers/bill.reducer';
import { BillEffects } from './ngrx/effects/bill.effects';
export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    importProvidersFrom(TuiRootModule),
    importProvidersFrom(
      provideFirebaseApp(() =>  initializeApp(environment)), 
      TuiRootModule,
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideDatabase(() => getDatabase())),
    importProvidersFrom(provideStorage(() => getStorage())),
    provideStore(),
    provideState({name: 'auth', reducer: authReducer}),
    provideState({name: 'user', reducer: userReducer}),
    provideState ({name: 'dish', reducer: dishReducer}),
    provideState ({name: 'location', reducer: locationReducer}),
    provideState ({name: 'category', reducer: categoryReducer}),
    provideState ({name: 'table', reducer: tableReducer}),
    provideState ({name: 'reservation', reducer: reservationReducer}),
    provideState ({name: 'new', reducer: newReducer}),
    provideState({name: 'storage', reducer: storageReducer}),
    provideState({name: 'order', reducer: orderReducer}),
    provideState({name: 'paymentimage', reducer: paymentImageReducer}),
    provideState({name: 'bill', reducer: billReducer}),
    provideState({name: 'paymentmomo', reducer: paymentMomoReducer}),

    provideEffects([AuthEffects, UserEffects, DishEffects, LocationEffects, CategoryEffects, TableEffects, ReservationEffects, NewEffects, StorageEffects,OrderEffects, PaymentImageEffects, BillEffects, PaymentMomoEffects]),


    

    provideHttpClient(), provideAnimationsAsync(),
  ],
};
