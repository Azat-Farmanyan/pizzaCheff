import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FoodsComponent } from './components/foods/foods.component';
import { FormComponent } from './components/form/form.component';
import { CharacteristicItemComponent } from './components/welcome/characteristic-item/characteristic-item.component';
import { PizzaCardComponent } from './components/foods/pizza-card/pizza-card.component';
import { ImagePopupComponent } from './components/foods/image-popup/image-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuccessSubmitComponent } from './components/form/success-submit/success-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    FoodsComponent,
    FormComponent,
    CharacteristicItemComponent,
    PizzaCardComponent,
    ImagePopupComponent,
    SuccessSubmitComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
